import Image from 'next/image';
import { RiCheckLine, RiCloseLine, RiUser3Line, RiArrowRightLine } from 'react-icons/ri';
import { useInviteDetailsSubscription, InviteDetailsSubscription } from '@/generated/graphql';
import { useNotificationContext } from "@/components/Shared/Notification";
import { declineInvite, acceptInvite } from "@/lib/services/user";
import { HOME_ROUTE } from "@/lib/utils";

type InviteType = NonNullable<InviteDetailsSubscription['app_invite'][0]>;

const InviteAcceptance = ({ inviteId }: { inviteId: string }) => {
  const { data } = useInviteDetailsSubscription({
    variables: { inviteId }
  });

  const notifier: any = useNotificationContext();

  const invite: InviteType | undefined = data?.app_invite[0];
  if (!invite) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleAccept = async () => {
    try {
      // Call the API to accept the invite
      await acceptInvite(inviteId);

      notifier?.success({
        title: "Successfully accepted the invitation"
      });

      // Redirect to home
      window.location.href = HOME_ROUTE;
    } catch (err) {
      console.error(err);
      notifier?.error({
        title: "Failed to accept the invitation"
      });
    }
  };

  const handleReject = async () => {
    try {
      // Call the API to decline the invite
      await declineInvite(inviteId);

      notifier?.success({
        title: "Successfully declined the invitation"
      });

      // Redirect to home
      window.location.href = HOME_ROUTE;
    } catch (err) {
      console.error(err);
      notifier?.error({
        title: "Failed to decline the invitation"
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-6 text-center border-b border-neutral-200">
          <h1 className="text-2xl font-bold mb-2">Workspace Invitation</h1>
          <p className="text-neutral-600 text-sm">
            You've been invited to join a workspace
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Visual Flow */}
          <div className="flex flex-col gap-6">
            {/* Avatars and Arrow Row */}
            <div className="flex items-center justify-center gap-4">
              {/* Inviter Avatar */}
              <div className="relative w-16 h-16 flex-shrink-0">
                {invite.inviter.picture ? (
                  <Image
                    src={invite.inviter.picture || '/images/avatar.svg'}
                    alt={invite.inviter.name || ''}
                    fill
                    className="object-cover rounded-full border-2 border-neutral-200"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-50 rounded-full border-2 border-neutral-200">
                    <RiUser3Line className="text-neutral-400 text-2xl" />
                  </div>
                )}
              </div>

              {/* Arrow */}
              <RiArrowRightLine className="text-neutral-400 text-2xl flex-shrink-0" />

              {/* Workspace Avatar */}
              <div className="relative w-20 h-20 flex-shrink-0">
                {invite.workspace.image_key ? (
                  <Image
                    src={invite.workspace.image_key || '/images/avatar.svg'}
                    alt={invite.workspace.name}
                    fill
                    className="object-cover rounded-lg border-2 border-neutral-200"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-50 rounded-lg border-2 border-neutral-200">
                    <RiUser3Line className="text-neutral-400 text-3xl" />
                  </div>
                )}
              </div>
            </div>

            {/* Invitation Text */}
            <div className="text-center">
              <p className="text-neutral-700">
                <span className="font-medium">{invite.inviter.name}</span> has invited you to their workspace
              </p>
              <p className="text-lg font-medium mt-1">{invite.workspace.name}</p>
              <p className="text-sm text-neutral-500 mt-4">
                Invited on {formatDate(invite._cr)}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-200 flex gap-3 justify-end">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-400 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50 transition-colors flex items-center gap-2"
          >
            <RiCloseLine className="text-lg" />
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <RiCheckLine className="text-lg" />
            Accept Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteAcceptance; 