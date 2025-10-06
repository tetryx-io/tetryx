import { getResults } from "@/lib/services/results";
import ResultPage from "./resultPage";

type Props = {
  params: { orgName: string };
};

export default async function Page({ params }: Props) {
  const { orgName } = params;
  const results = await getResults(orgName);

  return <ResultPage results={results} />;
}
