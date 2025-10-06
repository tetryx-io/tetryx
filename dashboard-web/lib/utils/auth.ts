import { useParams, useSearchParams, useRouter } from "next/navigation";

// Determine the redirect URL
export const getRedirectUrl = () => {
  const { agent_name, threadName } = useParams();
  const searchParams = useSearchParams();
  const redirect_to = searchParams.get("redirect_to");

  if (redirect_to && typeof redirect_to === "string") return redirect_to;
  if (
    agent_name &&
    threadName &&
    typeof agent_name === "string" &&
    typeof threadName === "string"
  ) {
    return `/agent/${agent_name}/thread/${threadName}`;
  }
  if (agent_name && typeof agent_name === "string")
    return `/agent/${agent_name}`;
  return "/home";
};
