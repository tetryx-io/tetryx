import PublicAgentComponent from "@/components/Pages/Agent/component/PublicAgentComp";
import { getAgent } from "@/lib/services/agent";
import { Metadata } from 'next';

async function getServerSideProps(params) {
  const agent_id = params.agent_name.slice(-16);
  const agentData = await getAgent({ agent_id });
  return {
    agent: agentData?.data,
  };
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const agent_id = params.agent_name.slice(-16);
  const agentData = await getAgent({ agent_id });
  
  const title = `${agentData?.data?.name || 'Agent Profile'} | Atrium`;
  const description = agentData?.data?.headline || 'Discover this AI agent on Atrium';
  const imageUrl = (() => {
    const bannerList = agentData?.data?.banner_list;
    const validImages = bannerList?.filter(item => 
      /\.(jpg|jpeg|png)$/i.test(item?.url)
    );
    return validImages?.length 
      ? validImages.map(item => item.url) 
      : ['https://media.atrium.st/assets/agent/default-banner.png'];
  })();
  
  console.log("*@( OG Image",imageUrl)

  return {
    title,
    description,
    icons: "/atrium/favicon/favicon.ico",
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl[0],
          width: 1200,
          height: 630,
        }
      ],
      type: 'profile',
      siteName: 'Atrium',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl[0]],
      creator: '@AtriumAI',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://atrium.st/agent/${params.agent_name}`,
    },
    keywords: ['AI Agent', 'Atrium', 'Atrium.st', agentData?.data?.name, 'Artificial Intelligence', 'AI Agent Platform'].filter(Boolean),
  };
}

// Generate JSON-LD data
function generateJsonLd(agent: any) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${baseUrl}/agent/${agent.id}#software`,
        'name': agent.name,
        'description': agent.headline || agent.description,
        'applicationCategory': 'AIAgent',
        'operatingSystem': 'Any',
        'dateModified': agent._up,
        'offers': agent.product_list?.map((product: any) => ({
          '@type': 'Offer',
          'price': product.price_list?.[0]?.unit_amount ? product.price_list[0].unit_amount / 100 : 0,
          'priceCurrency': product.price_list?.[0]?.currency || 'USD',
          'name': product.name,
          'description': product.description
        })) || [],
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingCount': agent.install_count || 0,
          'reviewCount': agent.run_count || 0
        },
        'author': {
          '@type': 'Person',
          'name': agent.creator?.name || 'Anonymous',
          'image': agent.creator?.picture
        }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Agents',
            'item': `${baseUrl}/agents`
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': agent.name,
            'item': `${baseUrl}/agent/${agent.id}`
          }
        ]
      }
    ]
  };
}

const ThreadPage = async ({ params }) => {
  try {
    const { agent } = await getServerSideProps(params);
    // console.log("showAgentpls", agent)
    
    if (!agent) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
          <h1 className="text-2xl font-bold mb-4">Agent Not Found</h1>
          <p className="text-gray-600 mb-4">
            The agent you're looking for doesn't exist or you may not have permission to view it.
          </p>
          <p className="text-gray-600 mb-6">If you believe this is an error, please verify your access:</p>
          <div className="flex gap-4">
            <a 
              href="/auth/signin/" 
              className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              Sign In
            </a>
            <a 
              href="/auth/signup/" 
              className="px-6 py-2 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50 transition-colors"
            >
              Request Access
            </a>
          </div>
        </div>
      );
    }

    const jsonLd = generateJsonLd(agent);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PublicAgentComponent agent={agent} />
      </>
    );
  } catch (error) {
    return <div>Error fetching: {JSON.stringify(error)}</div>;
  }
};

export default ThreadPage;