import Industry from "@/components/Pages/Industry";
import { getObject } from "@/lib/algolia";
import _ from "lodash";
import React from "react";

const IndustryPage = async ({
  params: { industry },
}: {
  params: { industry: string };
}) => {
  const dataId = _.last(industry.split("-"));

  const getIndustryPageData = async () => {
    try {
      const response = await getObject("industry_pages", dataId);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const data = await getIndustryPageData();
  console.log(data);

  return <Industry industry={data} />;
};

export default IndustryPage;
