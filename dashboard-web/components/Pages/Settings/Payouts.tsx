import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash'; // Make sure to import debounce from lodash
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { ConnectAccountOnboarding, ConnectComponentsProvider } from "@stripe/react-connect-js";
import { useNotificationContext } from "@/components/Shared/Notification";
import {ConnectPayments} from '@stripe/react-connect-js';
import Dialog from "@/components/Common/Dialog";
import {loadConnectAndInitialize} from '@stripe/connect-js';
import axiosApiInstance from "@/lib/services/request";
import Loader from "@/components/Common/AtriumLoader";
import {
  RiArrowRightLine
} from "react-icons/ri";
import Link from "next/link";
import { useSessionContext } from "@/lib/context/session";

interface PayoutsProps {
}

const Payouts: React.FC<PayoutsProps> = ({
}) => {
  const notifier: any = useNotificationContext();
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [activating, setActivating] = useState(false);
  const [isStripeConnectLoading, setIsStripeConnectLoading] = useState(false);
  const { session } = useSessionContext();
  
  const [stripeConnectInstance, setStripeConnectInstance] = useState<any>(null);

  const fetchClientSecret = useCallback(async () => {
    try {
      const response = await axiosApiInstance.post(`/billing/account/session`);
      console.log("response", response);

      if (response.status !== 200) {
        const { error } = response.data;
        console.error('An error occurred: ', error);
        notifier.error({
          title: "Failed to load payment information",
        });
        return undefined;
      } else {
        const { account_session } = response.data;
        notifier.success({
          title: "Successfully loaded payment information",
        });
        console.log("account_session", account_session);
        return account_session?.client_secret;
      }
    } catch (error) {
      console.error('Error fetching client secret:', error);
      notifier.error({
        title: "Failed to load payment information",
      });
      return undefined;
    }
  }, [notifier]);

  useEffect(() => {
    const initializeStripeConnect = async () => {
      if (session?.data?.workspace?.is_developer) {
        setIsStripeConnectLoading(true);
        const instance = await loadConnectAndInitialize({
          publishableKey: process.env.NEXT_PUBLIC_STRIPE_PK as string,
          fetchClientSecret: fetchClientSecret,
        });
        setStripeConnectInstance(instance);
        setIsStripeConnectLoading(false);
      }
    };

    // Debounce the initializeStripeConnect call
    const debouncedInitialize = debounce(initializeStripeConnect, 4000);

    debouncedInitialize();

    // Cleanup function to cancel the debounce if the component unmounts
    return () => {
      debouncedInitialize.cancel();
    };
  }, [fetchClientSecret, session?.data?.workspace?.is_developer]);

  const handleActivateDeveloperAccount = async () => {
    setActivating(true);
    try {
      const response = await axiosApiInstance.patch(
        `/workspace/${session.data.workspace.id}/`,
        { is_developer: true }
      );
      if (response.status === 200) {
        notifier.success({
          title: "Developer account activated successfully",
        });
      } else {
        throw new Error("Failed to activate developer account");
      }
    } catch (error) {
      notifier.error({
        title: "Failed to activate developer account",
        message: "Please try again later",
      });
    } finally {
      setActivating(false);
      setShowActivateModal(false);
    }
  };

  if (session.loading || isStripeConnectLoading || (session?.data?.workspace?.is_developer && !stripeConnectInstance)) {
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
          <h1 className="text-3xl font-bold text-neutral-900">
            Something went wrong
          </h1>
          <p className="text-neutral-600">
            Please try refreshing the page
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
    <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
      <div className="py-6 w-full lg:w-8/12 flex flex-col gap-10 max-w-6xl h-full overflow-y-clip">
        <div className="text-2xl font-bold">Developer Payouts</div>
        
        {!session?.data?.workspace?.is_developer ? (
          <div className="rounded-md border border-neutral-200 flex flex-col gap-2">
            <div className="flex flex-col gap-2 p-10">
              <div className="flex">
                <div className="text-xl font-bold">Activate Developer Account</div>
              </div>
              <p className="text-neutral-600">
                Activate your developer account to access payout features and start receiving payments from your Agent's customers.
              </p>
            </div>
            <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
              <DefaultButton
                onClick={() => setShowActivateModal(true)}
                label="Activate Developer Account"
                variant="primary"
                size="medium"
                styleClass="w-fit font-medium"
              />
            </div>
          </div>
        ) : (
          <div className="rounded-md border border-neutral-200 flex flex-col gap-2">
          <div className="flex flex-col gap-2 p-10">
            <div className="flex">
              <div className="text-xl font-bold">Payouts Setup</div>
            </div>
            <p className="text-neutral-600">
              Setup your payouts to receive payments from your Agent's customers.
            </p>
          </div>
          <div className="px-10 mb-10 h-full min-h-[500px]">
          <ConnectPayments />
            
              <ConnectAccountOnboarding
                  onExit={() => {
                    console.log("The account has exited onboarding");
                  }}
                  recipientTermsOfServiceUrl="/legal/terms-of-service"
                  privacyPolicyUrl="/legal/privacy-policy"
                  onStepChange={(stepChange) => {
                    console.log(`User entered: ${stepChange.step}`);
                  }}
                />
          </div>
          <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
            <div className="flex items-center text-sm text-neutral-500">
              <div>Questions about your payouts?</div>
              <Link
                href={`mailto:sup@atrium.st?subject=Payout%20Support%20Request%20-%20${encodeURIComponent(session?.data?.workspace?.id || '')}&body=I%20have%20a%20question%20about%20my%20payouts.`}
                className="flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-black ml-2"
              >
                Get help
                <RiArrowRightLine size={20} />
              </Link>
            </div>
          </div>
        </div>
        )}

        <Dialog
          className=""
          title="Activate Developer Account"
          isOpen={showActivateModal}
          closeModal={() => setShowActivateModal(false)}
        >
          <div className="p-6">
            <p className="mb-4">Are you sure you want to activate your developer account? This will enable payout features for your workspace.</p>
            <div className="flex justify-end gap-4">
              <DefaultButton
                onClick={() => setShowActivateModal(false)}
                label="Cancel"
                variant="secondary"
                size="medium"
              />
              <DefaultButton
                onClick={handleActivateDeveloperAccount}
                label={activating ? "Activating..." : "Activate"}
                variant="primary"
                size="medium"
                disabled={activating}
              />
            </div>
          </div>
        </Dialog>
      </div>
      
      </ConnectComponentsProvider>
    </>
  );
}

export default Payouts;
