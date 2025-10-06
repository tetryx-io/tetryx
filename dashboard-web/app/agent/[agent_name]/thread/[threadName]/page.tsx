import { createApolloClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import PublicThreadComponent from "./publicThreadComp";
import { getAgent } from "@/lib/services/agent";
import { Metadata } from "next";

const CHATS_IN_THREAD = gql`
  query ChatsInThreadQuery($thread_id: String!) {
    chat: app_chat(
      where: { thread_id: { _eq: $thread_id } }
      order_by: { _cr: asc }
    ) {
      id
      body_richtext
      thread_id
      _cr
      pair_id
      parent_id
    }
  }
`;

const PUBLIC_THREADS = gql`
  query publicThreads($id: String!) {
    thread: app_thread(where: { id: { _eq: $id } }, order_by: { _cr: asc }) {
      id
      visibility
      workspace_id
      initiator_id
      title
      agent_id
      agent_debug_mode
    }
  }
`;

const THREAD_CHAT = gql`
  query publicThreadChat($id: String!) {
    thread: app_thread_by_pk(id: $id) {
      id
      initiator_id
      type
      title
      visibility
      workspace_id
      agent_id
      agent_debug_mode
      chat_list(order_by: {_cr: asc}) {
        body_richtext
        body_richtext
        _cr
        id
        type
      }
      agent {
        name
        id
        banner_list {
          url
        }
      }
    }
  }
`;

async function getServerSideProps(params) {
  const apolloClient = createApolloClient("");

  const agent_id = params.agent_name.slice(-16);

  // Separate GET request using getAgent
  const agentData = await getAgent({ agent_id });
  const thread_id = params.threadName.slice(-21);

  const [threadData, publicThreadsData, thread_chat] = await Promise.all([
    apolloClient.query({
      query: CHATS_IN_THREAD,
      variables: { thread_id },
    }),
    apolloClient.query({
      query: PUBLIC_THREADS,
      variables: { id: thread_id },
      context: {
        fetchOptions: {
          next: { revalidate: 0 },
        },
      },
    }),
    apolloClient.query({
      query: THREAD_CHAT,
      variables: { id: thread_id },
    }),
  ]);

  return {
    threadData: threadData.data,
    publicThreadsData: publicThreadsData.data,
    agent: agentData?.data,
    thread_chat: thread_chat,
  };
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const agent_id = params.agent_name.slice(-16);
  const agentData = await getAgent({ agent_id });
  const { thread_chat } = await getServerSideProps(params);
  
  const title = `${thread_chat?.data?.thread?.title.length > 3 ? thread_chat?.data?.thread?.title : 'Agent Chat'} | Atrium`;
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
  
  console.log("*@(* OG Image",imageUrl)

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

const ThreadPage = async ({ params }) => {
  try {
    const { threadData, publicThreadsData, agent, thread_chat } =
      await getServerSideProps(params);
    console.log("thread_chat", thread_chat);

    return (
      <>
        {publicThreadsData?.thread[0]?.visibility === "PUBLIC" ? (
          <PublicThreadComponent
            initialData={threadData}
            agent={agent}
            thread_chat={thread_chat}
          />
        ) : (
          <PublicThreadComponent
            initialData={threadData}
            agent={agent}
            thread_chat={thread_chat}
          />
        )}
      </>
    );
  } catch (error) {
    return <div>Error fetching: {JSON.stringify(error)}</div>;
  }
};

export default ThreadPage;
