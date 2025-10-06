"use client";

import React, { useEffect, useState } from "react";

import Billing from "@/components/Pages/Settings/Billing";
import { useNotificationContext } from "@/components/Shared/Notification";
import axiosApiInstance from "@/lib/services/request";
import { useSessionContext } from "@/lib/context/session";
import Loader from "@/components/Common/AtriumLoader";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useBillingSubscriptionForWorkspaceSubscription } from "@/generated/graphql";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);
const BillingPage = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [showPaymentForm, setShowPaymentForm] = useState<boolean>(false);
  const [stripeFormLoading, setStripeFormLoading] = useState(false);
  const notifier: any = useNotificationContext();
  const { session } = useSessionContext();
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethodsLoading, setPaymentMethodsLoading] = useState(true);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [plans, setPlans] = useState<any[]>([]);
  const [plansIsLoading, setPlansIsLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isSubmittingPlan, setIsSubmittingPlan] = useState(false);
  const [showUpdatePlanModal, setShowUpdatePlanModal] = useState(false);

  const { data: subscriptionData } =
    useBillingSubscriptionForWorkspaceSubscription({
      variables: {
        workspace_id: session?.data?.workspace?.id || "",
      },
      skip: !session?.data?.workspace?.id,
    });

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosApiInstance.get(
          "/billing/subscription-plans",
        );
        setPlans(Object.values(response.data));

        if (session?.data?.workspace?.plan_id) {
          setSelectedPlan(response.data[session?.data?.workspace?.plan_id]);
        }

        setPlansIsLoading(false);
      } catch (e) {
        notifier.error({
          title: "Failed to fetch plans",
        });

        setPlansIsLoading(false);
      }
    })();
  }, [session?.data?.workspace?.id]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosApiInstance.get(
          `/billing/customer/list_payment_methods`,
        );
        const recentTransactionsResponse = await axiosApiInstance.get(
          `/billing/payment/history/`,
        );

        setPaymentHistory(recentTransactionsResponse.data.payment_history.data);
        setPaymentMethods(response.data.payment_methods.data);
      } catch (err) {
        console.error(err);
        notifier.error({
          title: "Failed to load payment information",
        });
      } finally {
        setPaymentMethodsLoading(false);
      }
    })();
  }, [stripeFormLoading, session?.data?.workspace?.id]);

  useEffect(() => {
    (async () => {
      const response = await axiosApiInstance.post(`/billing/payment_method`);
      setClientSecret(response.data.client_secret);
    })();
  }, []);

  const onCloseModal = () => {
    setShowPaymentForm(false);
    setShowUpdatePlanModal(false);
  };

  const handleUpdatePlan = async () => {
    setIsSubmittingPlan(true);

    try {
      await axiosApiInstance.put(`/billing/choose-plan`, {
        plan_id: selectedPlan.id,
        is_subscription: true,
      });
      notifier.success({
        title: "Plan updated successfully",
      });
      setShowUpdatePlanModal(false);
    } catch (err) {
      notifier.error({
        title: "Failed to update plan",
      });
      console.error("ERROR", err);
    } finally {
      setIsSubmittingPlan(false);
    }
  };

  if (session.loading || plansIsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <Loader />
        </div>
      </div>
    );
  }

  if (session?.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Something went wrong
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            Please try refreshing the page
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSecret }}
        >
          <Billing
            showPaymentForm={showPaymentForm}
            setShowPaymentForm={setShowPaymentForm}
            onCloseModal={onCloseModal}
            stripeFormLoading={stripeFormLoading}
            setStripeFormLoading={setStripeFormLoading}
            paymentMethods={paymentMethods}
            paymentMethodsLoading={paymentMethodsLoading}
            selectedPlan={selectedPlan}
            handleUpdatePlan={handleUpdatePlan}
            showUpdatePlanModal={showUpdatePlanModal}
            setShowUpdatePlanModal={setShowUpdatePlanModal}
            isSubmittingPlan={isSubmittingPlan}
            subscriptionData={subscriptionData}
            notifier={notifier}
          />
        </Elements>
      )}
    </div>
  );
};

export default BillingPage;
