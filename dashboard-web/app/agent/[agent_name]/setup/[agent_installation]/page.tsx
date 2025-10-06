import Setup from "@/components/Pages/Agent/Setup";
import { getAgent } from "@/lib/services/agent";

async function getServerSideProps(params) {
  const agent_id = params.agent_name.slice(-16);

  // Separate GET request using getAgent
  const agentData = await getAgent({ agent_id });

  return {
    agent: agentData?.data,
  };
}

// Update the ThreadPage component to use the new agentData
const ThreadPage = async ({ params }) => {
  try {
    const { agent } = await getServerSideProps(params);
    return <Setup agent={agent} />;
  } catch (error) {
    return <div>Error fetching: {JSON.stringify(error)}</div>;
  }
};

export default ThreadPage;
