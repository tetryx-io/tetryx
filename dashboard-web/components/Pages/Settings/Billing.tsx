import DefaultButton from "@/components/Shared/Button/DefaultButton";
import Table from "@/components/Shared/Table";
import { createColumnHelper } from "@tanstack/react-table";
import PaymentSetupForm from "@/components/Pages/Settings/setup-form";
import Dialog from "@/components/Common/Dialog";
import { format, parseISO } from "date-fns";
import {
  RiArrowRightLine,
  RiMoreLine,
} from "react-icons/ri";
import { formatNumberWithCommas, formatPrice } from "@/lib/utils";
import { useMemo, useState } from 'react';
import { BillingSubscriptionForWorkspaceSubscription } from "@/generated/graphql";
import { useRouter } from "next/navigation";
import {
  __agent_url,
  __agent_name_url
} from "@/lib/utils";
import Link from "next/link";
import { useElements, useStripe } from "@stripe/react-stripe-js";

// Create a type for a single subscription
type BillingSubscriptionRow = NonNullable<BillingSubscriptionForWorkspaceSubscription['billing_subscription'][number]>;

// Create a separate type for transaction columns since they have different data structure
type TransactionRow = {
  description: string;
  created_at: string;
  amount_paid: number;
};

const transactionColumnHelper = createColumnHelper<TransactionRow>();
const subscriptionColumnHelper = createColumnHelper<BillingSubscriptionRow>();

const columns = [
  transactionColumnHelper.accessor("description", {
    header: () => <div className="">Plan</div>,
    cell: ({ row }) => <div>{row.original.description}</div>,
  }),
  transactionColumnHelper.accessor("created_at", {
    header: () => <div>Month</div>,
    cell: ({ row }) => (
      <div>{format(parseISO(row.original.created_at), "dd-MM-yy")}</div>
    ),
  }),
  transactionColumnHelper.accessor("amount_paid", {
    header: () => <div>Action</div>,
    cell: ({ row }) => (
      <div className="font-bold text-neutral-500">
        ${row.original.amount_paid}
      </div>
    ),
  }),
];

export default function Billing({
  setShowPaymentForm,
  showPaymentForm,
  onCloseModal,
  stripeFormLoading,
  setStripeFormLoading,
  paymentMethods,
  paymentMethodsLoading,
  selectedPlan,
  handleUpdatePlan,
  showUpdatePlanModal,
  setShowUpdatePlanModal,
  isSubmittingPlan,
  subscriptionData,
  notifier,
}) {
  const router = useRouter();
  const [subscriptionFilter, setSubscriptionFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
    const stripe = useStripe();
  const elements = useElements();

  const subscriptionColumns = useMemo(
    () => [
      subscriptionColumnHelper.accessor("installation", {
        header: () => <div className="">Agent</div>,
        cell: ({ row }) => {
          const agent = row.original.installation?.agent;
          const isActive = row.original.active;
          
          return (
            <div className="flex gap-2 items-center w-52">
              <div className="h-8 w-8 flex-shrink-0">
                {agent?.avatar_url ? (
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={agent.avatar_url}
                    alt={agent.name || 'Agent avatar'}
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                )}
              </div>
              <div className="truncate">
                <div className="text-sm mb-0.5">
                  {isActive ? (
                    <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-500 rounded-full">
                      Inactive
                    </span>
                  )}
                </div>
                <div className="font-medium truncate">
                  <Link href={__agent_url({
                    ...agent,
                    name: agent?.name || undefined
                  })} className="hover:underline">
                    {agent?.name || 'Unnamed Agent'}
                  </Link>
                </div>
              </div>
            </div>
          );
        },
      }),
      subscriptionColumnHelper.accessor("_cr", {
        header: () => <div>Started On</div>,
        cell: ({ row }) => {
          const subscription = row.original;
          
          const formatTimestamp = (timestamp: number | string | null) => {
            if (!timestamp) return null;
            return typeof timestamp === 'number' 
              ? format(new Date(timestamp * 1000), 'MMM dd, yyyy')
              : format(new Date(timestamp), 'MMM dd, yyyy');
          };

          return (
            <div className="text-sm w-52">
              <div>{formatTimestamp(subscription._cr)}</div>
              {subscription.trial_end && !subscription.canceled_at && (
                <div className={`text-sm font-normal ${
                  new Date(subscription.trial_end * 1000) > new Date() 
                    ? 'text-blue-600' 
                    : 'text-neutral-500'
                }`}>
                  {new Date(subscription.trial_end * 1000) > new Date()
                    ? `Trial ends ${formatTimestamp(subscription.trial_end)}`
                    : `Trial ended ${formatTimestamp(subscription.trial_end)}`
                  }
                </div>
              )}
              {subscription.canceled_at && (
                <div className="text-sm font-normal text-red-600">
                  Cancelled on {formatTimestamp(subscription.canceled_at)}
                </div>
              )}
            </div>
          );
        },
      }),
      subscriptionColumnHelper.accessor("price", {
        header: () => <div>Product & Price</div>,
        cell: ({ row }) => {
          const price = row.original.price;
          if (!price?.unit_amount) return 'N/A';
          
          return (
            <div className="w-52">
              <div className="font-medium text-gray-900">
                {price.product?.name || 'N/A'}
              </div>
              <div className="text-sm text-gray-500">
                {formatPrice(
                  price.unit_amount,
                  'usd',
                  price.interval,
                  price.interval_count
                )}
              </div>
            </div>
          );
        },
      }),
      subscriptionColumnHelper.accessor("installation_uid", {
        header: () => <div>Actions</div>,
        cell: ({ row }) => {
          const installationId = row.original.installation?.id;
          const agent = row.original.installation?.agent;
          
          if (!agent?.name || !agent?.id || !installationId) {
            return null;
          }

          const agentUrl = __agent_url({ id: agent.id, name: agent.name });
          const href = `${agentUrl}/setup/${installationId}/?tab=pricing`;
          
          return (
            <div className="flex items-center gap-2">
              <Link href={href}>
                <DefaultButton
                  label="Manage"
                  variant="ghost"
                  size="small"
                  iconRight={<RiArrowRightLine size={16} />}
                  styleClass="w-fit font-medium text-sm hover:text-black"
                />
              </Link>
            </div>
          );
        },
      }),
    ],
    [router]
  );

 

  const filteredSubscriptionData = useMemo(() => {
    let filtered = subscriptionData?.billing_subscription || [];

    if (subscriptionFilter === 'active') {
      filtered = filtered.filter((sub) => sub.active);
    } else if (subscriptionFilter === 'inactive') {
      filtered = filtered.filter((sub) => !sub.active);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((sub) => {
        const agentName = sub.installation?.agent?.name?.toLowerCase() || '';
        const planName = sub.price?.product?.name?.toLowerCase() || '';
        return agentName.includes(query) || planName.includes(query);
      });
    }

    return filtered;
  }, [subscriptionData, subscriptionFilter, searchQuery]);

  const onSubmitPaymentForm = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      console.log("stripe or elements not loaded");
      return;
    }
    setStripeFormLoading(true);
   // Confirm the SetupIntent using the details collected by the Payment Element
    const { error: confirmSetupError } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/settings/billing`,
      },
      redirect: "if_required",
    });
    if (confirmSetupError) {
      notifier.error({
        title: confirmSetupError.message,
      });
    } else {
      notifier.success({
        title: "Payment method added successfully",
      });
      setShowPaymentForm(false);
    }
    setStripeFormLoading(false);
  };
  return (
    <>
      {selectedPlan && (
        <Dialog
          className="text-black"
          title={""}
          isOpen={showUpdatePlanModal}
          closeModal={onCloseModal}
        >
          {selectedPlan.no_of_units ? (
            <>
              You will be debited <strong>${selectedPlan.cost.value}</strong>{" "}
              and{" "}
              <strong>
                {formatNumberWithCommas(selectedPlan.no_of_units)}
              </strong>{" "}
              units will be added to your workspace account.
            </>
          ) : (
            <>
              Upon clicking the "Confirm" button, you will be contacted by the
              support team to discuss your unique needs.
            </>
          )}
          <DefaultButton
            disabled={isSubmittingPlan}
            onClick={handleUpdatePlan}
            label="Confirm"
            variant="primary"
            size="medium"
            styleClass="w-fit font-medium mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </Dialog>
      )}

      <div className="py-6 w-full flex flex-col gap-10 max-w-6xl h-full overflow-y-clip">
        <div className="text-2xl font-bold">Billing</div>
        <div className="rounded-md border border-neutral-200 flex flex-col gap-2">
          <div className="container flex flex-col gap-2 p-6 md:p-10">
            <div className="flex">
              <div className="text-xl font-bold">Payment Methods</div>
            </div>
            <p className="text-neutral-600">
              Here are your payment methods. Add or remove payment methods as
              needed.
            </p>
            {!paymentMethods?.length ? (
              <div className="flex gap-1 text-sm text-neutral-500 mt-4">
                {paymentMethodsLoading
                  ? "Loading..."
                  : "No payment method added."}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 max-w-screen-md gap-4 mt-4">
                {paymentMethods?.map((method) => (
                  <div key={method.id} className="flex flex-col p-4 gap-2 bg-white border border-neutral-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <img src={`/atrium/svg/${method.card.brand}.png`} alt={`${method.card.brand} logo`} className="w-10 h-6 border object-cover rounded-md" />
                      <div className="flex gap-3">
                        {/* <div className="h-6 flex p-1 items-center justify-center bg-neutral-100 border rounded text-xs uppercase">Default</div> */}
                        <button className="w-6 h-6 flex p-1 items-center justify-center bg-neutral-100 border rounded"><RiMoreLine size={18} /></button>
                      </div>
                    </div>
                    <div className="font-semibold mt-1"><span className="capitalize">{method.card.brand}</span>{` ending in ** ${method.card.last4}`}</div>
                    <div className="text-sm text-neutral-600">Exp. {method.card.exp_month}/{method.card.exp_year}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
            <DefaultButton
              onClick={() => setShowPaymentForm(true)}
              label="Add payment method"
              variant="primary"
              size="medium"
              styleClass="w-fit font-medium"
            />
          </div>
        </div>
        <Dialog
          className=""
          title={""}
          isOpen={showPaymentForm}
          closeModal={onCloseModal}
        >
          <PaymentSetupForm
            onSubmit={onSubmitPaymentForm}
            onCloseModal={onCloseModal}
            isLoading={stripeFormLoading}
          />
        </Dialog>

        {/* Subscriptions / Plans view */}
        <div className="rounded-md border border-neutral-200 flex flex-col gap-2">
          <div className="flex flex-col gap-2 p-6 md:p-10">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Subscriptions</div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search by agent or plan name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-1.5 border rounded-md text-sm"
                />
                <DefaultButton
                  onClick={() => setSubscriptionFilter('all')}
                  label="All"
                  variant={subscriptionFilter === 'all' ? 'primary' : 'ghost'}
                  size="small"
                  styleClass="w-fit font-medium"
                />
                <DefaultButton
                  onClick={() => setSubscriptionFilter('active')}
                  label="Active"
                  variant={subscriptionFilter === 'active' ? 'primary' : 'ghost'}
                  size="small"
                  styleClass="w-fit font-medium"
                />
                <DefaultButton
                  onClick={() => setSubscriptionFilter('inactive')}
                  label="Inactive"
                  variant={subscriptionFilter === 'inactive' ? 'primary' : 'ghost'}
                  size="small"
                  styleClass="w-fit font-medium"
                />
              </div>
            </div>
            <p className="text-neutral-600">
              View subscription and change plans to meet evolving needs.
            </p>
            <div className="max-h-[650px] overflow-y-auto">
              <Table 
                data={filteredSubscriptionData} 
                columns={subscriptionColumns}
                getRowClassName={(row) => 
                  row?.active === false ? 'bg-neutral-100' : ''
                }
              />
            </div>
          </div>
          <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
            <div className="flex items-center text-sm text-neutral-500">
              <div>Questions about your plan?</div>
              <DefaultButton
                label="Get help"
                variant="ghost"
                size="small"
                iconRight={<RiArrowRightLine size={20} />}
                styleClass="w-fit font-medium gap-1 hover:text-black"
              />
            </div>
            <DefaultButton
              onClick={() => {
                setShowUpdatePlanModal(true);
              }}
              label="Update"
              variant="primary"
              size="medium"
              styleClass="w-fit font-medium"
            />
          </div>
        </div>

        <div className="rounded-md border border-neutral-200 flex flex-col gap-2 p-6 md:p-10">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <div className="text-xl font-bold">Transactions</div>
            </div>
            <p className="text-neutral-600">
              This is a list of recent transactions and billing records on this
              workspace
            </p>
          </div>
          <Table data={[]} columns={columns} />
        </div>
      </div>
    </>
  );
}
