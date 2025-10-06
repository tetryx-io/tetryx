import Landing from "@/components/Landing";
import { getSorted } from "@/lib/algolia";
import { searchAgent } from "@/lib/services/agent";

const LandingPage = async () => {
  const params = { limit: 12, scope: "public" };
  const initialAgentData = (await searchAgent(params))?.data ?? [];
  console.log(`Fetched ${initialAgentData.length} agents`);

  const page_num = 0;
  const page_size = 3;

  let posts = await getSorted({
    index: "wiki_sort_creation_date_desc",
    page_size,
    page: page_num,
  });

  let useCases = await getSorted({
    index: "use-cases",
    page_size,
    page: page_num,
  });

  return (
    <>
      <Landing initialAgentData={initialAgentData} />
    </>
  );
};

export default LandingPage;
