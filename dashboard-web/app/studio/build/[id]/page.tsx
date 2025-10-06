import ManageAgent from "@/components/Pages/Build/component/ManageAgent";
import { getAgent } from "@/lib/services/agent";
import { AgentParams } from "@/types/agent";
const Page = async ({ params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const response = await getAgent({ agent_id: id });
    if (!response || !response.status) {
      return (
        <div className="h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Error</h2>
            <p className="text-gray-600">{response?.message || 'Failed to fetch agent'}</p>
          </div>
        </div>
      );
    }
    const data = response.data as AgentParams;
    return (
      data.can_edit ? (
        <ManageAgent data={data} />
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Access Denied</h2>
            <p className="text-gray-600">You do not have permission to edit this agent</p>
          </div>
        </div>
      )
    );
  } catch (error) {
    console.log("error", error)
    return <div>Error fetching: {JSON.stringify(error.message || error)}</div>;
  }
};

export default Page;