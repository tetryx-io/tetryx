import { gql } from "@apollo/client";

export const AGENT_SUBSCRIPTION = gql`
  subscription AgentSubscription($agent_id: String!) {
    agent: agent_agent(
      where: { id: { _eq: $agent_id } }
      order_by: { _cr: asc }
    ) {
      id
      description
      _up
      headline
      visibility
      name
    }
  }
`;

export const GET_FILES = gql`
  query GetFiles($fileIds: [String!]!) {
    file(where: { id: { _in: $fileIds } }) {
      presigned_url
      original_name
      id
      chat_id
    }
  }
`;

export const UPDATE_CHAT = gql`
  mutation updateChats($chat_id: String!, $description: jsonb!) {
    update_chat(
      where: { id: { _eq: $chat_id } }
      _set: { description: $description }
    ) {
      returning {
        id
        description
      }
    }
  }
`;
