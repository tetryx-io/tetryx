import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  address_type_scalar: any;
  agent_visibility: any;
  api_key_type: any;
  bigint: any;
  block_type: any;
  bpchar: any;
  chat_processing_status: any;
  dataset_visibility: any;
  deployment_status: any;
  dev_runtime_status: any;
  invite_status: any;
  json: any;
  jsonb: any;
  numeric: any;
  price_enum: any;
  property_status: any;
  smallint: any;
  thread_visibility: any;
  timestamp: any;
  timestamptz: any;
  tsvector: any;
  uuid: any;
  workspace_role: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']>>;
  _eq?: InputMaybe<Array<Scalars['String']>>;
  _gt?: InputMaybe<Array<Scalars['String']>>;
  _gte?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Array<Scalars['String']>>;
  _lte?: InputMaybe<Array<Scalars['String']>>;
  _neq?: InputMaybe<Array<Scalars['String']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "address_type_scalar". All fields are combined with logical 'AND'. */
export type Address_Type_Scalar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['address_type_scalar']>;
  _gt?: InputMaybe<Scalars['address_type_scalar']>;
  _gte?: InputMaybe<Scalars['address_type_scalar']>;
  _in?: InputMaybe<Array<Scalars['address_type_scalar']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['address_type_scalar']>;
  _lte?: InputMaybe<Scalars['address_type_scalar']>;
  _neq?: InputMaybe<Scalars['address_type_scalar']>;
  _nin?: InputMaybe<Array<Scalars['address_type_scalar']>>;
};

/** columns and relationships of "agent.agent" */
export type Agent_Agent = {
  __typename?: 'agent_agent';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  avatar_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  banner_list: Array<Agent_Banner>;
  /** An aggregate relationship */
  banner_list_aggregate: Agent_Banner_Aggregate;
  /** An object relationship */
  creator: App_User;
  creator_id: Scalars['String'];
  creator_uid?: Maybe<Scalars['uuid']>;
  default_product_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  deployment_list: Array<Agent_Deployment>;
  /** An aggregate relationship */
  deployment_list_aggregate: Agent_Deployment_Aggregate;
  /** An array relationship */
  deployments: Array<Agent_Deployment>;
  /** An aggregate relationship */
  deployments_aggregate: Agent_Deployment_Aggregate;
  description: Scalars['jsonb'];
  enabled: Scalars['Boolean'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** An array relationship */
  installation_list: Array<Agent_Installation>;
  /** An aggregate relationship */
  installation_list_aggregate: Agent_Installation_Aggregate;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  product?: Maybe<Billing_Product>;
  /** An array relationship */
  product_list: Array<Billing_Product>;
  /** An aggregate relationship */
  product_list_aggregate: Billing_Product_Aggregate;
  /** An object relationship */
  runtime?: Maybe<Agent_Runtime>;
  runtime_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  runtimes: Array<Agent_Runtime>;
  /** An array relationship */
  runtimesByAgentUid: Array<Agent_Runtime>;
  /** An aggregate relationship */
  runtimesByAgentUid_aggregate: Agent_Runtime_Aggregate;
  /** An aggregate relationship */
  runtimes_aggregate: Agent_Runtime_Aggregate;
  /** An array relationship */
  subscriptions: Array<Billing_Subscription>;
  /** An aggregate relationship */
  subscriptions_aggregate: Billing_Subscription_Aggregate;
  /** An array relationship */
  thread_list: Array<App_Thread>;
  /** An aggregate relationship */
  thread_list_aggregate: App_Thread_Aggregate;
  /** An object relationship */
  user?: Maybe<App_User>;
  visibility: Scalars['agent_visibility'];
  /** An object relationship */
  workspace: App_Workspace;
  workspace_id: Scalars['String'];
  /** An array relationship */
  workspaces: Array<App_Workspace>;
  /** An aggregate relationship */
  workspaces_aggregate: App_Workspace_Aggregate;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentBanner_ListArgs = {
  distinct_on?: InputMaybe<Array<Agent_Banner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Banner_Order_By>>;
  where?: InputMaybe<Agent_Banner_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentBanner_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Banner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Banner_Order_By>>;
  where?: InputMaybe<Agent_Banner_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentDeployment_ListArgs = {
  distinct_on?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Deployment_Order_By>>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentDeployment_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Deployment_Order_By>>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentDeploymentsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Deployment_Order_By>>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentDeployments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Deployment_Order_By>>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentDescriptionArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentInstallation_ListArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentInstallation_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentProduct_ListArgs = {
  distinct_on?: InputMaybe<Array<Billing_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Product_Order_By>>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentProduct_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Product_Order_By>>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentRuntimesArgs = {
  distinct_on?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Runtime_Order_By>>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentRuntimesByAgentUidArgs = {
  distinct_on?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Runtime_Order_By>>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentRuntimesByAgentUid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Runtime_Order_By>>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentRuntimes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Runtime_Order_By>>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentThread_ListArgs = {
  distinct_on?: InputMaybe<Array<App_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Thread_Order_By>>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentThread_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Thread_Order_By>>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Order_By>>;
  where?: InputMaybe<App_Workspace_Bool_Exp>;
};


/** columns and relationships of "agent.agent" */
export type Agent_AgentWorkspaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Order_By>>;
  where?: InputMaybe<App_Workspace_Bool_Exp>;
};

/** aggregated selection of "agent.agent" */
export type Agent_Agent_Aggregate = {
  __typename?: 'agent_agent_aggregate';
  aggregate?: Maybe<Agent_Agent_Aggregate_Fields>;
  nodes: Array<Agent_Agent>;
};

export type Agent_Agent_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Agent_Agent_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Agent_Agent_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Agent_Agent_Aggregate_Bool_Exp_Count>;
};

export type Agent_Agent_Aggregate_Bool_Exp_Bool_And = {
  arguments: Agent_Agent_Select_Column_Agent_Agent_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Agent_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agent_Agent_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Agent_Agent_Select_Column_Agent_Agent_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Agent_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agent_Agent_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Agent_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "agent.agent" */
export type Agent_Agent_Aggregate_Fields = {
  __typename?: 'agent_agent_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Agent_Agent_Max_Fields>;
  min?: Maybe<Agent_Agent_Min_Fields>;
};


/** aggregate fields of "agent.agent" */
export type Agent_Agent_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "agent.agent" */
export type Agent_Agent_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agent_Agent_Max_Order_By>;
  min?: InputMaybe<Agent_Agent_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Agent_Agent_Append_Input = {
  description?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "agent.agent" */
export type Agent_Agent_Arr_Rel_Insert_Input = {
  data: Array<Agent_Agent_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Agent_On_Conflict>;
};

/** Boolean expression to filter rows from the table "agent.agent". All fields are combined with a logical 'AND'. */
export type Agent_Agent_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Agent_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Agent_Agent_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Agent_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  banner_list?: InputMaybe<Agent_Banner_Bool_Exp>;
  banner_list_aggregate?: InputMaybe<Agent_Banner_Aggregate_Bool_Exp>;
  creator?: InputMaybe<App_User_Bool_Exp>;
  creator_id?: InputMaybe<String_Comparison_Exp>;
  creator_uid?: InputMaybe<Uuid_Comparison_Exp>;
  default_product_id?: InputMaybe<String_Comparison_Exp>;
  deployment_list?: InputMaybe<Agent_Deployment_Bool_Exp>;
  deployment_list_aggregate?: InputMaybe<Agent_Deployment_Aggregate_Bool_Exp>;
  deployments?: InputMaybe<Agent_Deployment_Bool_Exp>;
  deployments_aggregate?: InputMaybe<Agent_Deployment_Aggregate_Bool_Exp>;
  description?: InputMaybe<Jsonb_Comparison_Exp>;
  enabled?: InputMaybe<Boolean_Comparison_Exp>;
  headline?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  installation_list?: InputMaybe<Agent_Installation_Bool_Exp>;
  installation_list_aggregate?: InputMaybe<Agent_Installation_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  product?: InputMaybe<Billing_Product_Bool_Exp>;
  product_list?: InputMaybe<Billing_Product_Bool_Exp>;
  product_list_aggregate?: InputMaybe<Billing_Product_Aggregate_Bool_Exp>;
  runtime?: InputMaybe<Agent_Runtime_Bool_Exp>;
  runtime_id?: InputMaybe<String_Comparison_Exp>;
  runtimes?: InputMaybe<Agent_Runtime_Bool_Exp>;
  runtimesByAgentUid?: InputMaybe<Agent_Runtime_Bool_Exp>;
  runtimesByAgentUid_aggregate?: InputMaybe<Agent_Runtime_Aggregate_Bool_Exp>;
  runtimes_aggregate?: InputMaybe<Agent_Runtime_Aggregate_Bool_Exp>;
  subscriptions?: InputMaybe<Billing_Subscription_Bool_Exp>;
  subscriptions_aggregate?: InputMaybe<Billing_Subscription_Aggregate_Bool_Exp>;
  thread_list?: InputMaybe<App_Thread_Bool_Exp>;
  thread_list_aggregate?: InputMaybe<App_Thread_Aggregate_Bool_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  visibility?: InputMaybe<Agent_Visibility_Comparison_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
  workspaces?: InputMaybe<App_Workspace_Bool_Exp>;
  workspaces_aggregate?: InputMaybe<App_Workspace_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "agent.agent" */
export type Agent_Agent_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'app_agent_pk'
  /** unique or primary key constraint on columns "_uid" */
  | 'unique_uid';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Agent_Agent_Delete_At_Path_Input = {
  description?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Agent_Agent_Delete_Elem_Input = {
  description?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Agent_Agent_Delete_Key_Input = {
  description?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "agent.agent" */
export type Agent_Agent_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  banner_list?: InputMaybe<Agent_Banner_Arr_Rel_Insert_Input>;
  creator?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  creator_id?: InputMaybe<Scalars['String']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  default_product_id?: InputMaybe<Scalars['String']>;
  deployment_list?: InputMaybe<Agent_Deployment_Arr_Rel_Insert_Input>;
  deployments?: InputMaybe<Agent_Deployment_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['jsonb']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation_list?: InputMaybe<Agent_Installation_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Billing_Product_Obj_Rel_Insert_Input>;
  product_list?: InputMaybe<Billing_Product_Arr_Rel_Insert_Input>;
  runtime?: InputMaybe<Agent_Runtime_Obj_Rel_Insert_Input>;
  runtime_id?: InputMaybe<Scalars['String']>;
  runtimes?: InputMaybe<Agent_Runtime_Arr_Rel_Insert_Input>;
  runtimesByAgentUid?: InputMaybe<Agent_Runtime_Arr_Rel_Insert_Input>;
  subscriptions?: InputMaybe<Billing_Subscription_Arr_Rel_Insert_Input>;
  thread_list?: InputMaybe<App_Thread_Arr_Rel_Insert_Input>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  visibility?: InputMaybe<Scalars['agent_visibility']>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspaces?: InputMaybe<App_Workspace_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Agent_Agent_Max_Fields = {
  __typename?: 'agent_agent_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  avatar_url?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['String']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  default_product_id?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  runtime_id?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['agent_visibility']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "agent.agent" */
export type Agent_Agent_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  default_product_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  runtime_id?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Agent_Agent_Min_Fields = {
  __typename?: 'agent_agent_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  avatar_url?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['String']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  default_product_id?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  runtime_id?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['agent_visibility']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "agent.agent" */
export type Agent_Agent_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  default_product_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  runtime_id?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "agent.agent" */
export type Agent_Agent_Mutation_Response = {
  __typename?: 'agent_agent_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_Agent>;
};

/** input type for inserting object relation for remote table "agent.agent" */
export type Agent_Agent_Obj_Rel_Insert_Input = {
  data: Agent_Agent_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Agent_On_Conflict>;
};

/** on_conflict condition type for table "agent.agent" */
export type Agent_Agent_On_Conflict = {
  constraint: Agent_Agent_Constraint;
  update_columns?: Array<Agent_Agent_Update_Column>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};

/** Ordering options when selecting data from "agent.agent". */
export type Agent_Agent_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  banner_list_aggregate?: InputMaybe<Agent_Banner_Aggregate_Order_By>;
  creator?: InputMaybe<App_User_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  default_product_id?: InputMaybe<Order_By>;
  deployment_list_aggregate?: InputMaybe<Agent_Deployment_Aggregate_Order_By>;
  deployments_aggregate?: InputMaybe<Agent_Deployment_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  enabled?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_list_aggregate?: InputMaybe<Agent_Installation_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  product?: InputMaybe<Billing_Product_Order_By>;
  product_list_aggregate?: InputMaybe<Billing_Product_Aggregate_Order_By>;
  runtime?: InputMaybe<Agent_Runtime_Order_By>;
  runtime_id?: InputMaybe<Order_By>;
  runtimesByAgentUid_aggregate?: InputMaybe<Agent_Runtime_Aggregate_Order_By>;
  runtimes_aggregate?: InputMaybe<Agent_Runtime_Aggregate_Order_By>;
  subscriptions_aggregate?: InputMaybe<Billing_Subscription_Aggregate_Order_By>;
  thread_list_aggregate?: InputMaybe<App_Thread_Aggregate_Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  visibility?: InputMaybe<Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspaces_aggregate?: InputMaybe<App_Workspace_Aggregate_Order_By>;
};

/** primary key columns input for table: agent.agent */
export type Agent_Agent_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Agent_Agent_Prepend_Input = {
  description?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "agent.agent" */
export type Agent_Agent_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'avatar_url'
  /** column name */
  | 'creator_id'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'default_product_id'
  /** column name */
  | 'description'
  /** column name */
  | 'enabled'
  /** column name */
  | 'headline'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'runtime_id'
  /** column name */
  | 'visibility'
  /** column name */
  | 'workspace_id';

/** select "agent_agent_aggregate_bool_exp_bool_and_arguments_columns" columns of table "agent.agent" */
export type Agent_Agent_Select_Column_Agent_Agent_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'enabled';

/** select "agent_agent_aggregate_bool_exp_bool_or_arguments_columns" columns of table "agent.agent" */
export type Agent_Agent_Select_Column_Agent_Agent_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'enabled';

/** input type for updating data in table "agent.agent" */
export type Agent_Agent_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  creator_id?: InputMaybe<Scalars['String']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  default_product_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['jsonb']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  runtime_id?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['agent_visibility']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "agent_agent" */
export type Agent_Agent_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Agent_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Agent_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  creator_id?: InputMaybe<Scalars['String']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  default_product_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['jsonb']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  runtime_id?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['agent_visibility']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "agent.agent" */
export type Agent_Agent_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'avatar_url'
  /** column name */
  | 'creator_id'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'default_product_id'
  /** column name */
  | 'description'
  /** column name */
  | 'enabled'
  /** column name */
  | 'headline'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'runtime_id'
  /** column name */
  | 'visibility'
  /** column name */
  | 'workspace_id';

export type Agent_Agent_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Agent_Agent_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Agent_Agent_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Agent_Agent_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Agent_Agent_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Agent_Agent_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Agent_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Agent_Bool_Exp;
};

/** columns and relationships of "agent.banner" */
export type Agent_Banner = {
  __typename?: 'agent_banner';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An object relationship */
  agent?: Maybe<Agent_Agent>;
  agent_id?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['String']>;
  file_type?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  is_primary?: Maybe<Scalars['Boolean']>;
  original_name: Scalars['String'];
  s3_bucket: Scalars['String'];
  s3_key: Scalars['String'];
  sha_256_hash: Scalars['String'];
  url: Scalars['String'];
  /** An object relationship */
  user?: Maybe<App_User>;
};

/** aggregated selection of "agent.banner" */
export type Agent_Banner_Aggregate = {
  __typename?: 'agent_banner_aggregate';
  aggregate?: Maybe<Agent_Banner_Aggregate_Fields>;
  nodes: Array<Agent_Banner>;
};

export type Agent_Banner_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Agent_Banner_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Agent_Banner_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Agent_Banner_Aggregate_Bool_Exp_Count>;
};

export type Agent_Banner_Aggregate_Bool_Exp_Bool_And = {
  arguments: Agent_Banner_Select_Column_Agent_Banner_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Banner_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agent_Banner_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Agent_Banner_Select_Column_Agent_Banner_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Banner_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agent_Banner_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Banner_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Banner_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "agent.banner" */
export type Agent_Banner_Aggregate_Fields = {
  __typename?: 'agent_banner_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Agent_Banner_Max_Fields>;
  min?: Maybe<Agent_Banner_Min_Fields>;
};


/** aggregate fields of "agent.banner" */
export type Agent_Banner_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Banner_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "agent.banner" */
export type Agent_Banner_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agent_Banner_Max_Order_By>;
  min?: InputMaybe<Agent_Banner_Min_Order_By>;
};

/** input type for inserting array relation for remote table "agent.banner" */
export type Agent_Banner_Arr_Rel_Insert_Input = {
  data: Array<Agent_Banner_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Banner_On_Conflict>;
};

/** Boolean expression to filter rows from the table "agent.banner". All fields are combined with a logical 'AND'. */
export type Agent_Banner_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Banner_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Agent_Banner_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Banner_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  agent?: InputMaybe<Agent_Agent_Bool_Exp>;
  agent_id?: InputMaybe<String_Comparison_Exp>;
  creator_id?: InputMaybe<String_Comparison_Exp>;
  file_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_primary?: InputMaybe<Boolean_Comparison_Exp>;
  original_name?: InputMaybe<String_Comparison_Exp>;
  s3_bucket?: InputMaybe<String_Comparison_Exp>;
  s3_key?: InputMaybe<String_Comparison_Exp>;
  sha_256_hash?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
};

/** unique or primary key constraints on table "agent.banner" */
export type Agent_Banner_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'banner_pkey';

/** input type for inserting data into table "agent.banner" */
export type Agent_Banner_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agent_id?: InputMaybe<Scalars['String']>;
  creator_id?: InputMaybe<Scalars['String']>;
  file_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  original_name?: InputMaybe<Scalars['String']>;
  s3_bucket?: InputMaybe<Scalars['String']>;
  s3_key?: InputMaybe<Scalars['String']>;
  sha_256_hash?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Agent_Banner_Max_Fields = {
  __typename?: 'agent_banner_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['String']>;
  file_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  s3_bucket?: Maybe<Scalars['String']>;
  s3_key?: Maybe<Scalars['String']>;
  sha_256_hash?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "agent.banner" */
export type Agent_Banner_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  file_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  s3_bucket?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  sha_256_hash?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Agent_Banner_Min_Fields = {
  __typename?: 'agent_banner_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['String']>;
  file_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  s3_bucket?: Maybe<Scalars['String']>;
  s3_key?: Maybe<Scalars['String']>;
  sha_256_hash?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "agent.banner" */
export type Agent_Banner_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  file_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  s3_bucket?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  sha_256_hash?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "agent.banner" */
export type Agent_Banner_Mutation_Response = {
  __typename?: 'agent_banner_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_Banner>;
};

/** on_conflict condition type for table "agent.banner" */
export type Agent_Banner_On_Conflict = {
  constraint: Agent_Banner_Constraint;
  update_columns?: Array<Agent_Banner_Update_Column>;
  where?: InputMaybe<Agent_Banner_Bool_Exp>;
};

/** Ordering options when selecting data from "agent.banner". */
export type Agent_Banner_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent?: InputMaybe<Agent_Agent_Order_By>;
  agent_id?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  file_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_primary?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  s3_bucket?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  sha_256_hash?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
};

/** primary key columns input for table: agent.banner */
export type Agent_Banner_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "agent.banner" */
export type Agent_Banner_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'creator_id'
  /** column name */
  | 'file_type'
  /** column name */
  | 'id'
  /** column name */
  | 'is_primary'
  /** column name */
  | 'original_name'
  /** column name */
  | 's3_bucket'
  /** column name */
  | 's3_key'
  /** column name */
  | 'sha_256_hash'
  /** column name */
  | 'url';

/** select "agent_banner_aggregate_bool_exp_bool_and_arguments_columns" columns of table "agent.banner" */
export type Agent_Banner_Select_Column_Agent_Banner_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'is_primary';

/** select "agent_banner_aggregate_bool_exp_bool_or_arguments_columns" columns of table "agent.banner" */
export type Agent_Banner_Select_Column_Agent_Banner_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'is_primary';

/** input type for updating data in table "agent.banner" */
export type Agent_Banner_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  creator_id?: InputMaybe<Scalars['String']>;
  file_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  original_name?: InputMaybe<Scalars['String']>;
  s3_bucket?: InputMaybe<Scalars['String']>;
  s3_key?: InputMaybe<Scalars['String']>;
  sha_256_hash?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "agent_banner" */
export type Agent_Banner_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Banner_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Banner_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  creator_id?: InputMaybe<Scalars['String']>;
  file_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  original_name?: InputMaybe<Scalars['String']>;
  s3_bucket?: InputMaybe<Scalars['String']>;
  s3_key?: InputMaybe<Scalars['String']>;
  sha_256_hash?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "agent.banner" */
export type Agent_Banner_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'creator_id'
  /** column name */
  | 'file_type'
  /** column name */
  | 'id'
  /** column name */
  | 'is_primary'
  /** column name */
  | 'original_name'
  /** column name */
  | 's3_bucket'
  /** column name */
  | 's3_key'
  /** column name */
  | 'sha_256_hash'
  /** column name */
  | 'url';

export type Agent_Banner_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Banner_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Banner_Bool_Exp;
};

/** columns and relationships of "agent.cron_job" */
export type Agent_Cron_Job = {
  __typename?: 'agent_cron_job';
  _cr: Scalars['timestamptz'];
  _up: Scalars['timestamptz'];
  body?: Maybe<Scalars['jsonb']>;
  description?: Maybe<Scalars['String']>;
  frequency?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** An object relationship */
  installation: Agent_Installation;
  installation_id: Scalars['String'];
  job_id: Scalars['String'];
  location_id: Scalars['String'];
  name: Scalars['String'];
  project_id: Scalars['String'];
  retry_config: Scalars['jsonb'];
};


/** columns and relationships of "agent.cron_job" */
export type Agent_Cron_JobBodyArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "agent.cron_job" */
export type Agent_Cron_JobRetry_ConfigArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "agent.cron_job" */
export type Agent_Cron_Job_Aggregate = {
  __typename?: 'agent_cron_job_aggregate';
  aggregate?: Maybe<Agent_Cron_Job_Aggregate_Fields>;
  nodes: Array<Agent_Cron_Job>;
};

export type Agent_Cron_Job_Aggregate_Bool_Exp = {
  count?: InputMaybe<Agent_Cron_Job_Aggregate_Bool_Exp_Count>;
};

export type Agent_Cron_Job_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Cron_Job_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "agent.cron_job" */
export type Agent_Cron_Job_Aggregate_Fields = {
  __typename?: 'agent_cron_job_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Agent_Cron_Job_Max_Fields>;
  min?: Maybe<Agent_Cron_Job_Min_Fields>;
};


/** aggregate fields of "agent.cron_job" */
export type Agent_Cron_Job_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Cron_Job_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "agent.cron_job" */
export type Agent_Cron_Job_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agent_Cron_Job_Max_Order_By>;
  min?: InputMaybe<Agent_Cron_Job_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Agent_Cron_Job_Append_Input = {
  body?: InputMaybe<Scalars['jsonb']>;
  retry_config?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "agent.cron_job" */
export type Agent_Cron_Job_Arr_Rel_Insert_Input = {
  data: Array<Agent_Cron_Job_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Cron_Job_On_Conflict>;
};

/** Boolean expression to filter rows from the table "agent.cron_job". All fields are combined with a logical 'AND'. */
export type Agent_Cron_Job_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Cron_Job_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Cron_Job_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  body?: InputMaybe<Jsonb_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  frequency?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  installation?: InputMaybe<Agent_Installation_Bool_Exp>;
  installation_id?: InputMaybe<String_Comparison_Exp>;
  job_id?: InputMaybe<String_Comparison_Exp>;
  location_id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  retry_config?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "agent.cron_job" */
export type Agent_Cron_Job_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'cron_job_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Agent_Cron_Job_Delete_At_Path_Input = {
  body?: InputMaybe<Array<Scalars['String']>>;
  retry_config?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Agent_Cron_Job_Delete_Elem_Input = {
  body?: InputMaybe<Scalars['Int']>;
  retry_config?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Agent_Cron_Job_Delete_Key_Input = {
  body?: InputMaybe<Scalars['String']>;
  retry_config?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "agent.cron_job" */
export type Agent_Cron_Job_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  body?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  frequency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation?: InputMaybe<Agent_Installation_Obj_Rel_Insert_Input>;
  installation_id?: InputMaybe<Scalars['String']>;
  job_id?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['String']>;
  retry_config?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Agent_Cron_Job_Max_Fields = {
  __typename?: 'agent_cron_job_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _up?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  frequency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  job_id?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "agent.cron_job" */
export type Agent_Cron_Job_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  job_id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Agent_Cron_Job_Min_Fields = {
  __typename?: 'agent_cron_job_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _up?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  frequency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  job_id?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "agent.cron_job" */
export type Agent_Cron_Job_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  job_id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "agent.cron_job" */
export type Agent_Cron_Job_Mutation_Response = {
  __typename?: 'agent_cron_job_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_Cron_Job>;
};

/** on_conflict condition type for table "agent.cron_job" */
export type Agent_Cron_Job_On_Conflict = {
  constraint: Agent_Cron_Job_Constraint;
  update_columns?: Array<Agent_Cron_Job_Update_Column>;
  where?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
};

/** Ordering options when selecting data from "agent.cron_job". */
export type Agent_Cron_Job_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation?: InputMaybe<Agent_Installation_Order_By>;
  installation_id?: InputMaybe<Order_By>;
  job_id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  retry_config?: InputMaybe<Order_By>;
};

/** primary key columns input for table: agent.cron_job */
export type Agent_Cron_Job_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Agent_Cron_Job_Prepend_Input = {
  body?: InputMaybe<Scalars['jsonb']>;
  retry_config?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "agent.cron_job" */
export type Agent_Cron_Job_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_up'
  /** column name */
  | 'body'
  /** column name */
  | 'description'
  /** column name */
  | 'frequency'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'job_id'
  /** column name */
  | 'location_id'
  /** column name */
  | 'name'
  /** column name */
  | 'project_id'
  /** column name */
  | 'retry_config';

/** input type for updating data in table "agent.cron_job" */
export type Agent_Cron_Job_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  body?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  frequency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
  job_id?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['String']>;
  retry_config?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "agent_cron_job" */
export type Agent_Cron_Job_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Cron_Job_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Cron_Job_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  body?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  frequency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
  job_id?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['String']>;
  retry_config?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "agent.cron_job" */
export type Agent_Cron_Job_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_up'
  /** column name */
  | 'body'
  /** column name */
  | 'description'
  /** column name */
  | 'frequency'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'job_id'
  /** column name */
  | 'location_id'
  /** column name */
  | 'name'
  /** column name */
  | 'project_id'
  /** column name */
  | 'retry_config';

export type Agent_Cron_Job_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Agent_Cron_Job_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Agent_Cron_Job_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Agent_Cron_Job_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Agent_Cron_Job_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Agent_Cron_Job_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Cron_Job_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Cron_Job_Bool_Exp;
};

/** columns and relationships of "agent.deployment" */
export type Agent_Deployment = {
  __typename?: 'agent_deployment';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An object relationship */
  agent: Agent_Agent;
  /** An object relationship */
  agentByAgentUid: Agent_Agent;
  agent_id: Scalars['String'];
  agent_uid: Scalars['uuid'];
  deployer_uid: Scalars['uuid'];
  duration?: Maybe<Scalars['Int']>;
  status: Scalars['deployment_status'];
  /** An object relationship */
  user: App_User;
};

/** aggregated selection of "agent.deployment" */
export type Agent_Deployment_Aggregate = {
  __typename?: 'agent_deployment_aggregate';
  aggregate?: Maybe<Agent_Deployment_Aggregate_Fields>;
  nodes: Array<Agent_Deployment>;
};

export type Agent_Deployment_Aggregate_Bool_Exp = {
  count?: InputMaybe<Agent_Deployment_Aggregate_Bool_Exp_Count>;
};

export type Agent_Deployment_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Deployment_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "agent.deployment" */
export type Agent_Deployment_Aggregate_Fields = {
  __typename?: 'agent_deployment_aggregate_fields';
  avg?: Maybe<Agent_Deployment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Agent_Deployment_Max_Fields>;
  min?: Maybe<Agent_Deployment_Min_Fields>;
  stddev?: Maybe<Agent_Deployment_Stddev_Fields>;
  stddev_pop?: Maybe<Agent_Deployment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Agent_Deployment_Stddev_Samp_Fields>;
  sum?: Maybe<Agent_Deployment_Sum_Fields>;
  var_pop?: Maybe<Agent_Deployment_Var_Pop_Fields>;
  var_samp?: Maybe<Agent_Deployment_Var_Samp_Fields>;
  variance?: Maybe<Agent_Deployment_Variance_Fields>;
};


/** aggregate fields of "agent.deployment" */
export type Agent_Deployment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "agent.deployment" */
export type Agent_Deployment_Aggregate_Order_By = {
  avg?: InputMaybe<Agent_Deployment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agent_Deployment_Max_Order_By>;
  min?: InputMaybe<Agent_Deployment_Min_Order_By>;
  stddev?: InputMaybe<Agent_Deployment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Agent_Deployment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Agent_Deployment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Agent_Deployment_Sum_Order_By>;
  var_pop?: InputMaybe<Agent_Deployment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Agent_Deployment_Var_Samp_Order_By>;
  variance?: InputMaybe<Agent_Deployment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "agent.deployment" */
export type Agent_Deployment_Arr_Rel_Insert_Input = {
  data: Array<Agent_Deployment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Deployment_On_Conflict>;
};

/** aggregate avg on columns */
export type Agent_Deployment_Avg_Fields = {
  __typename?: 'agent_deployment_avg_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "agent.deployment" */
export type Agent_Deployment_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "agent.deployment". All fields are combined with a logical 'AND'. */
export type Agent_Deployment_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Deployment_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Agent_Deployment_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Deployment_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  agent?: InputMaybe<Agent_Agent_Bool_Exp>;
  agentByAgentUid?: InputMaybe<Agent_Agent_Bool_Exp>;
  agent_id?: InputMaybe<String_Comparison_Exp>;
  agent_uid?: InputMaybe<Uuid_Comparison_Exp>;
  deployer_uid?: InputMaybe<Uuid_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Deployment_Status_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
};

/** unique or primary key constraints on table "agent.deployment" */
export type Agent_Deployment_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'agent_deployment_pk';

/** input type for incrementing numeric columns in table "agent.deployment" */
export type Agent_Deployment_Inc_Input = {
  duration?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "agent.deployment" */
export type Agent_Deployment_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agentByAgentUid?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agent_id?: InputMaybe<Scalars['String']>;
  agent_uid?: InputMaybe<Scalars['uuid']>;
  deployer_uid?: InputMaybe<Scalars['uuid']>;
  duration?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['deployment_status']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Agent_Deployment_Max_Fields = {
  __typename?: 'agent_deployment_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  agent_uid?: Maybe<Scalars['uuid']>;
  deployer_uid?: Maybe<Scalars['uuid']>;
  duration?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['deployment_status']>;
};

/** order by max() on columns of table "agent.deployment" */
export type Agent_Deployment_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agent_uid?: InputMaybe<Order_By>;
  deployer_uid?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Agent_Deployment_Min_Fields = {
  __typename?: 'agent_deployment_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  agent_uid?: Maybe<Scalars['uuid']>;
  deployer_uid?: Maybe<Scalars['uuid']>;
  duration?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['deployment_status']>;
};

/** order by min() on columns of table "agent.deployment" */
export type Agent_Deployment_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agent_uid?: InputMaybe<Order_By>;
  deployer_uid?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "agent.deployment" */
export type Agent_Deployment_Mutation_Response = {
  __typename?: 'agent_deployment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_Deployment>;
};

/** on_conflict condition type for table "agent.deployment" */
export type Agent_Deployment_On_Conflict = {
  constraint: Agent_Deployment_Constraint;
  update_columns?: Array<Agent_Deployment_Update_Column>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};

/** Ordering options when selecting data from "agent.deployment". */
export type Agent_Deployment_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent?: InputMaybe<Agent_Agent_Order_By>;
  agentByAgentUid?: InputMaybe<Agent_Agent_Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agent_uid?: InputMaybe<Order_By>;
  deployer_uid?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
};

/** primary key columns input for table: agent.deployment */
export type Agent_Deployment_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "agent.deployment" */
export type Agent_Deployment_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'agent_uid'
  /** column name */
  | 'deployer_uid'
  /** column name */
  | 'duration'
  /** column name */
  | 'status';

/** input type for updating data in table "agent.deployment" */
export type Agent_Deployment_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  agent_uid?: InputMaybe<Scalars['uuid']>;
  deployer_uid?: InputMaybe<Scalars['uuid']>;
  duration?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['deployment_status']>;
};

/** aggregate stddev on columns */
export type Agent_Deployment_Stddev_Fields = {
  __typename?: 'agent_deployment_stddev_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "agent.deployment" */
export type Agent_Deployment_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Agent_Deployment_Stddev_Pop_Fields = {
  __typename?: 'agent_deployment_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "agent.deployment" */
export type Agent_Deployment_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Agent_Deployment_Stddev_Samp_Fields = {
  __typename?: 'agent_deployment_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "agent.deployment" */
export type Agent_Deployment_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "agent_deployment" */
export type Agent_Deployment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Deployment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Deployment_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  agent_uid?: InputMaybe<Scalars['uuid']>;
  deployer_uid?: InputMaybe<Scalars['uuid']>;
  duration?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['deployment_status']>;
};

/** aggregate sum on columns */
export type Agent_Deployment_Sum_Fields = {
  __typename?: 'agent_deployment_sum_fields';
  duration?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "agent.deployment" */
export type Agent_Deployment_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** update columns of table "agent.deployment" */
export type Agent_Deployment_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'agent_uid'
  /** column name */
  | 'deployer_uid'
  /** column name */
  | 'duration'
  /** column name */
  | 'status';

export type Agent_Deployment_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Agent_Deployment_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Deployment_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Deployment_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Agent_Deployment_Var_Pop_Fields = {
  __typename?: 'agent_deployment_var_pop_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "agent.deployment" */
export type Agent_Deployment_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Agent_Deployment_Var_Samp_Fields = {
  __typename?: 'agent_deployment_var_samp_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "agent.deployment" */
export type Agent_Deployment_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Agent_Deployment_Variance_Fields = {
  __typename?: 'agent_deployment_variance_fields';
  duration?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "agent.deployment" */
export type Agent_Deployment_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** columns and relationships of "agent.hook" */
export type Agent_Hook = {
  __typename?: 'agent_hook';
  _cr: Scalars['timestamptz'];
  _up: Scalars['timestamptz'];
  headers: Scalars['jsonb'];
  id: Scalars['String'];
  /** An object relationship */
  installation: Agent_Installation;
  installation_id: Scalars['String'];
  subscription_id: Scalars['String'];
  target_endpoint: Scalars['String'];
};


/** columns and relationships of "agent.hook" */
export type Agent_HookHeadersArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "agent.hook" */
export type Agent_Hook_Aggregate = {
  __typename?: 'agent_hook_aggregate';
  aggregate?: Maybe<Agent_Hook_Aggregate_Fields>;
  nodes: Array<Agent_Hook>;
};

export type Agent_Hook_Aggregate_Bool_Exp = {
  count?: InputMaybe<Agent_Hook_Aggregate_Bool_Exp_Count>;
};

export type Agent_Hook_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Hook_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Hook_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "agent.hook" */
export type Agent_Hook_Aggregate_Fields = {
  __typename?: 'agent_hook_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Agent_Hook_Max_Fields>;
  min?: Maybe<Agent_Hook_Min_Fields>;
};


/** aggregate fields of "agent.hook" */
export type Agent_Hook_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Hook_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "agent.hook" */
export type Agent_Hook_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agent_Hook_Max_Order_By>;
  min?: InputMaybe<Agent_Hook_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Agent_Hook_Append_Input = {
  headers?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "agent.hook" */
export type Agent_Hook_Arr_Rel_Insert_Input = {
  data: Array<Agent_Hook_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Hook_On_Conflict>;
};

/** Boolean expression to filter rows from the table "agent.hook". All fields are combined with a logical 'AND'. */
export type Agent_Hook_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Hook_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Agent_Hook_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Hook_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  headers?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  installation?: InputMaybe<Agent_Installation_Bool_Exp>;
  installation_id?: InputMaybe<String_Comparison_Exp>;
  subscription_id?: InputMaybe<String_Comparison_Exp>;
  target_endpoint?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "agent.hook" */
export type Agent_Hook_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'hook_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Agent_Hook_Delete_At_Path_Input = {
  headers?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Agent_Hook_Delete_Elem_Input = {
  headers?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Agent_Hook_Delete_Key_Input = {
  headers?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "agent.hook" */
export type Agent_Hook_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  headers?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['String']>;
  installation?: InputMaybe<Agent_Installation_Obj_Rel_Insert_Input>;
  installation_id?: InputMaybe<Scalars['String']>;
  subscription_id?: InputMaybe<Scalars['String']>;
  target_endpoint?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Agent_Hook_Max_Fields = {
  __typename?: 'agent_hook_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _up?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  subscription_id?: Maybe<Scalars['String']>;
  target_endpoint?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "agent.hook" */
export type Agent_Hook_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  target_endpoint?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Agent_Hook_Min_Fields = {
  __typename?: 'agent_hook_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _up?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  subscription_id?: Maybe<Scalars['String']>;
  target_endpoint?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "agent.hook" */
export type Agent_Hook_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  target_endpoint?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "agent.hook" */
export type Agent_Hook_Mutation_Response = {
  __typename?: 'agent_hook_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_Hook>;
};

/** on_conflict condition type for table "agent.hook" */
export type Agent_Hook_On_Conflict = {
  constraint: Agent_Hook_Constraint;
  update_columns?: Array<Agent_Hook_Update_Column>;
  where?: InputMaybe<Agent_Hook_Bool_Exp>;
};

/** Ordering options when selecting data from "agent.hook". */
export type Agent_Hook_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  headers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation?: InputMaybe<Agent_Installation_Order_By>;
  installation_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  target_endpoint?: InputMaybe<Order_By>;
};

/** primary key columns input for table: agent.hook */
export type Agent_Hook_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Agent_Hook_Prepend_Input = {
  headers?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "agent.hook" */
export type Agent_Hook_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_up'
  /** column name */
  | 'headers'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'subscription_id'
  /** column name */
  | 'target_endpoint';

/** input type for updating data in table "agent.hook" */
export type Agent_Hook_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  headers?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
  subscription_id?: InputMaybe<Scalars['String']>;
  target_endpoint?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "agent_hook" */
export type Agent_Hook_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Hook_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Hook_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  headers?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
  subscription_id?: InputMaybe<Scalars['String']>;
  target_endpoint?: InputMaybe<Scalars['String']>;
};

/** update columns of table "agent.hook" */
export type Agent_Hook_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_up'
  /** column name */
  | 'headers'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'subscription_id'
  /** column name */
  | 'target_endpoint';

export type Agent_Hook_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Agent_Hook_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Agent_Hook_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Agent_Hook_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Agent_Hook_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Agent_Hook_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Hook_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Hook_Bool_Exp;
};

/** columns and relationships of "agent.installation" */
export type Agent_Installation = {
  __typename?: 'agent_installation';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  active: Scalars['Boolean'];
  /** An object relationship */
  agent: Agent_Agent;
  agent_id: Scalars['String'];
  /** An array relationship */
  cron_jobs: Array<Agent_Cron_Job>;
  /** An aggregate relationship */
  cron_jobs_aggregate: Agent_Cron_Job_Aggregate;
  cron_schedule?: Maybe<Scalars['String']>;
  /** Files to Reference */
  files?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  hooks: Array<Agent_Hook>;
  /** An aggregate relationship */
  hooks_aggregate: Agent_Hook_Aggregate;
  id: Scalars['String'];
  /** An array relationship */
  installation_variables: Array<Agent_Installation_Variable>;
  /** An aggregate relationship */
  installation_variables_aggregate: Agent_Installation_Variable_Aggregate;
  installer_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  subscription?: Maybe<Billing_Subscription>;
  subscription_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  subscriptions: Array<Billing_Subscription>;
  /** An aggregate relationship */
  subscriptions_aggregate: Billing_Subscription_Aggregate;
  /** An object relationship */
  workspace: App_Workspace;
  workspace_id: Scalars['String'];
};


/** columns and relationships of "agent.installation" */
export type Agent_InstallationCron_JobsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Cron_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Cron_Job_Order_By>>;
  where?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
};


/** columns and relationships of "agent.installation" */
export type Agent_InstallationCron_Jobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Cron_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Cron_Job_Order_By>>;
  where?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
};


/** columns and relationships of "agent.installation" */
export type Agent_InstallationFilesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "agent.installation" */
export type Agent_InstallationHooksArgs = {
  distinct_on?: InputMaybe<Array<Agent_Hook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Hook_Order_By>>;
  where?: InputMaybe<Agent_Hook_Bool_Exp>;
};


/** columns and relationships of "agent.installation" */
export type Agent_InstallationHooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Hook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Hook_Order_By>>;
  where?: InputMaybe<Agent_Hook_Bool_Exp>;
};


/** columns and relationships of "agent.installation" */
export type Agent_InstallationInstallation_VariablesArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Variable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Variable_Order_By>>;
  where?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
};


/** columns and relationships of "agent.installation" */
export type Agent_InstallationInstallation_Variables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Variable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Variable_Order_By>>;
  where?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
};


/** columns and relationships of "agent.installation" */
export type Agent_InstallationSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};


/** columns and relationships of "agent.installation" */
export type Agent_InstallationSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};

/** aggregated selection of "agent.installation" */
export type Agent_Installation_Aggregate = {
  __typename?: 'agent_installation_aggregate';
  aggregate?: Maybe<Agent_Installation_Aggregate_Fields>;
  nodes: Array<Agent_Installation>;
};

export type Agent_Installation_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Agent_Installation_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Agent_Installation_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Agent_Installation_Aggregate_Bool_Exp_Count>;
};

export type Agent_Installation_Aggregate_Bool_Exp_Bool_And = {
  arguments: Agent_Installation_Select_Column_Agent_Installation_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Installation_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agent_Installation_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Agent_Installation_Select_Column_Agent_Installation_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Installation_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agent_Installation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Installation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "agent.installation" */
export type Agent_Installation_Aggregate_Fields = {
  __typename?: 'agent_installation_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Agent_Installation_Max_Fields>;
  min?: Maybe<Agent_Installation_Min_Fields>;
};


/** aggregate fields of "agent.installation" */
export type Agent_Installation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "agent.installation" */
export type Agent_Installation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agent_Installation_Max_Order_By>;
  min?: InputMaybe<Agent_Installation_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Agent_Installation_Append_Input = {
  /** Files to Reference */
  files?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "agent.installation" */
export type Agent_Installation_Arr_Rel_Insert_Input = {
  data: Array<Agent_Installation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Installation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "agent.installation". All fields are combined with a logical 'AND'. */
export type Agent_Installation_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Installation_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Agent_Installation_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Installation_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  agent?: InputMaybe<Agent_Agent_Bool_Exp>;
  agent_id?: InputMaybe<String_Comparison_Exp>;
  cron_jobs?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
  cron_jobs_aggregate?: InputMaybe<Agent_Cron_Job_Aggregate_Bool_Exp>;
  cron_schedule?: InputMaybe<String_Comparison_Exp>;
  files?: InputMaybe<Jsonb_Comparison_Exp>;
  hooks?: InputMaybe<Agent_Hook_Bool_Exp>;
  hooks_aggregate?: InputMaybe<Agent_Hook_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  installation_variables?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
  installation_variables_aggregate?: InputMaybe<Agent_Installation_Variable_Aggregate_Bool_Exp>;
  installer_id?: InputMaybe<String_Comparison_Exp>;
  subscription?: InputMaybe<Billing_Subscription_Bool_Exp>;
  subscription_id?: InputMaybe<String_Comparison_Exp>;
  subscriptions?: InputMaybe<Billing_Subscription_Bool_Exp>;
  subscriptions_aggregate?: InputMaybe<Billing_Subscription_Aggregate_Bool_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "agent.installation" */
export type Agent_Installation_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'agent_installation_pk'
  /** unique or primary key constraint on columns "workspace_id", "agent_id" */
  | 'idx_unique_active_agent_workspace'
  /** unique or primary key constraint on columns "_uid" */
  | 'unique_installation_uid';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Agent_Installation_Delete_At_Path_Input = {
  /** Files to Reference */
  files?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Agent_Installation_Delete_Elem_Input = {
  /** Files to Reference */
  files?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Agent_Installation_Delete_Key_Input = {
  /** Files to Reference */
  files?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "agent.installation" */
export type Agent_Installation_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  agent?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agent_id?: InputMaybe<Scalars['String']>;
  cron_jobs?: InputMaybe<Agent_Cron_Job_Arr_Rel_Insert_Input>;
  cron_schedule?: InputMaybe<Scalars['String']>;
  /** Files to Reference */
  files?: InputMaybe<Scalars['jsonb']>;
  hooks?: InputMaybe<Agent_Hook_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  installation_variables?: InputMaybe<Agent_Installation_Variable_Arr_Rel_Insert_Input>;
  installer_id?: InputMaybe<Scalars['String']>;
  subscription?: InputMaybe<Billing_Subscription_Obj_Rel_Insert_Input>;
  subscription_id?: InputMaybe<Scalars['String']>;
  subscriptions?: InputMaybe<Billing_Subscription_Arr_Rel_Insert_Input>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Agent_Installation_Max_Fields = {
  __typename?: 'agent_installation_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  cron_schedule?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installer_id?: Maybe<Scalars['String']>;
  subscription_id?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "agent.installation" */
export type Agent_Installation_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  cron_schedule?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installer_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Agent_Installation_Min_Fields = {
  __typename?: 'agent_installation_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  cron_schedule?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installer_id?: Maybe<Scalars['String']>;
  subscription_id?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "agent.installation" */
export type Agent_Installation_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  cron_schedule?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installer_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "agent.installation" */
export type Agent_Installation_Mutation_Response = {
  __typename?: 'agent_installation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_Installation>;
};

/** input type for inserting object relation for remote table "agent.installation" */
export type Agent_Installation_Obj_Rel_Insert_Input = {
  data: Agent_Installation_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Installation_On_Conflict>;
};

/** on_conflict condition type for table "agent.installation" */
export type Agent_Installation_On_Conflict = {
  constraint: Agent_Installation_Constraint;
  update_columns?: Array<Agent_Installation_Update_Column>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};

/** Ordering options when selecting data from "agent.installation". */
export type Agent_Installation_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  agent?: InputMaybe<Agent_Agent_Order_By>;
  agent_id?: InputMaybe<Order_By>;
  cron_jobs_aggregate?: InputMaybe<Agent_Cron_Job_Aggregate_Order_By>;
  cron_schedule?: InputMaybe<Order_By>;
  files?: InputMaybe<Order_By>;
  hooks_aggregate?: InputMaybe<Agent_Hook_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  installation_variables_aggregate?: InputMaybe<Agent_Installation_Variable_Aggregate_Order_By>;
  installer_id?: InputMaybe<Order_By>;
  subscription?: InputMaybe<Billing_Subscription_Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  subscriptions_aggregate?: InputMaybe<Billing_Subscription_Aggregate_Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: agent.installation */
export type Agent_Installation_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Agent_Installation_Prepend_Input = {
  /** Files to Reference */
  files?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "agent.installation" */
export type Agent_Installation_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'cron_schedule'
  /** column name */
  | 'files'
  /** column name */
  | 'id'
  /** column name */
  | 'installer_id'
  /** column name */
  | 'subscription_id'
  /** column name */
  | 'workspace_id';

/** select "agent_installation_aggregate_bool_exp_bool_and_arguments_columns" columns of table "agent.installation" */
export type Agent_Installation_Select_Column_Agent_Installation_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'active';

/** select "agent_installation_aggregate_bool_exp_bool_or_arguments_columns" columns of table "agent.installation" */
export type Agent_Installation_Select_Column_Agent_Installation_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'active';

/** input type for updating data in table "agent.installation" */
export type Agent_Installation_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  agent_id?: InputMaybe<Scalars['String']>;
  cron_schedule?: InputMaybe<Scalars['String']>;
  /** Files to Reference */
  files?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['String']>;
  installer_id?: InputMaybe<Scalars['String']>;
  subscription_id?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "agent_installation" */
export type Agent_Installation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Installation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Installation_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  agent_id?: InputMaybe<Scalars['String']>;
  cron_schedule?: InputMaybe<Scalars['String']>;
  /** Files to Reference */
  files?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['String']>;
  installer_id?: InputMaybe<Scalars['String']>;
  subscription_id?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "agent.installation" */
export type Agent_Installation_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'cron_schedule'
  /** column name */
  | 'files'
  /** column name */
  | 'id'
  /** column name */
  | 'installer_id'
  /** column name */
  | 'subscription_id'
  /** column name */
  | 'workspace_id';

export type Agent_Installation_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Agent_Installation_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Agent_Installation_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Agent_Installation_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Agent_Installation_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Agent_Installation_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Installation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Installation_Bool_Exp;
};

/** columns and relationships of "agent.installation_variable" */
export type Agent_Installation_Variable = {
  __typename?: 'agent_installation_variable';
  _cr: Scalars['timestamptz'];
  _up: Scalars['timestamptz'];
  comment?: Maybe<Scalars['String']>;
  /** An object relationship */
  editor?: Maybe<App_User>;
  editor_id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** An object relationship */
  installation: Agent_Installation;
  installation_id: Scalars['String'];
  is_secret: Scalars['Boolean'];
  key: Scalars['String'];
  value_json?: Maybe<Scalars['jsonb']>;
  value_string?: Maybe<Scalars['String']>;
  value_type: Scalars['String'];
  value_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "agent.installation_variable" */
export type Agent_Installation_VariableValue_JsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "agent.installation_variable" */
export type Agent_Installation_Variable_Aggregate = {
  __typename?: 'agent_installation_variable_aggregate';
  aggregate?: Maybe<Agent_Installation_Variable_Aggregate_Fields>;
  nodes: Array<Agent_Installation_Variable>;
};

export type Agent_Installation_Variable_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Agent_Installation_Variable_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Agent_Installation_Variable_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Agent_Installation_Variable_Aggregate_Bool_Exp_Count>;
};

export type Agent_Installation_Variable_Aggregate_Bool_Exp_Bool_And = {
  arguments: Agent_Installation_Variable_Select_Column_Agent_Installation_Variable_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agent_Installation_Variable_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Agent_Installation_Variable_Select_Column_Agent_Installation_Variable_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agent_Installation_Variable_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Installation_Variable_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "agent.installation_variable" */
export type Agent_Installation_Variable_Aggregate_Fields = {
  __typename?: 'agent_installation_variable_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Agent_Installation_Variable_Max_Fields>;
  min?: Maybe<Agent_Installation_Variable_Min_Fields>;
};


/** aggregate fields of "agent.installation_variable" */
export type Agent_Installation_Variable_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Installation_Variable_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "agent.installation_variable" */
export type Agent_Installation_Variable_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agent_Installation_Variable_Max_Order_By>;
  min?: InputMaybe<Agent_Installation_Variable_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Agent_Installation_Variable_Append_Input = {
  value_json?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "agent.installation_variable" */
export type Agent_Installation_Variable_Arr_Rel_Insert_Input = {
  data: Array<Agent_Installation_Variable_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Installation_Variable_On_Conflict>;
};

/** Boolean expression to filter rows from the table "agent.installation_variable". All fields are combined with a logical 'AND'. */
export type Agent_Installation_Variable_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Installation_Variable_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Installation_Variable_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  editor?: InputMaybe<App_User_Bool_Exp>;
  editor_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  installation?: InputMaybe<Agent_Installation_Bool_Exp>;
  installation_id?: InputMaybe<String_Comparison_Exp>;
  is_secret?: InputMaybe<Boolean_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  value_json?: InputMaybe<Jsonb_Comparison_Exp>;
  value_string?: InputMaybe<String_Comparison_Exp>;
  value_type?: InputMaybe<String_Comparison_Exp>;
  value_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "agent.installation_variable" */
export type Agent_Installation_Variable_Constraint =
  /** unique or primary key constraint on columns "key", "installation_id" */
  | 'idx_unique_installation_key'
  /** unique or primary key constraint on columns "id" */
  | 'installation_variable_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Agent_Installation_Variable_Delete_At_Path_Input = {
  value_json?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Agent_Installation_Variable_Delete_Elem_Input = {
  value_json?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Agent_Installation_Variable_Delete_Key_Input = {
  value_json?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "agent.installation_variable" */
export type Agent_Installation_Variable_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  comment?: InputMaybe<Scalars['String']>;
  editor?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  editor_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation?: InputMaybe<Agent_Installation_Obj_Rel_Insert_Input>;
  installation_id?: InputMaybe<Scalars['String']>;
  is_secret?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  value_json?: InputMaybe<Scalars['jsonb']>;
  value_string?: InputMaybe<Scalars['String']>;
  value_type?: InputMaybe<Scalars['String']>;
  value_url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Agent_Installation_Variable_Max_Fields = {
  __typename?: 'agent_installation_variable_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _up?: Maybe<Scalars['timestamptz']>;
  comment?: Maybe<Scalars['String']>;
  editor_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value_string?: Maybe<Scalars['String']>;
  value_type?: Maybe<Scalars['String']>;
  value_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "agent.installation_variable" */
export type Agent_Installation_Variable_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  editor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  value_string?: InputMaybe<Order_By>;
  value_type?: InputMaybe<Order_By>;
  value_url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Agent_Installation_Variable_Min_Fields = {
  __typename?: 'agent_installation_variable_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _up?: Maybe<Scalars['timestamptz']>;
  comment?: Maybe<Scalars['String']>;
  editor_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value_string?: Maybe<Scalars['String']>;
  value_type?: Maybe<Scalars['String']>;
  value_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "agent.installation_variable" */
export type Agent_Installation_Variable_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  editor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  value_string?: InputMaybe<Order_By>;
  value_type?: InputMaybe<Order_By>;
  value_url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "agent.installation_variable" */
export type Agent_Installation_Variable_Mutation_Response = {
  __typename?: 'agent_installation_variable_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_Installation_Variable>;
};

/** on_conflict condition type for table "agent.installation_variable" */
export type Agent_Installation_Variable_On_Conflict = {
  constraint: Agent_Installation_Variable_Constraint;
  update_columns?: Array<Agent_Installation_Variable_Update_Column>;
  where?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
};

/** Ordering options when selecting data from "agent.installation_variable". */
export type Agent_Installation_Variable_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  editor?: InputMaybe<App_User_Order_By>;
  editor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation?: InputMaybe<Agent_Installation_Order_By>;
  installation_id?: InputMaybe<Order_By>;
  is_secret?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  value_json?: InputMaybe<Order_By>;
  value_string?: InputMaybe<Order_By>;
  value_type?: InputMaybe<Order_By>;
  value_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: agent.installation_variable */
export type Agent_Installation_Variable_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Agent_Installation_Variable_Prepend_Input = {
  value_json?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "agent.installation_variable" */
export type Agent_Installation_Variable_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_up'
  /** column name */
  | 'comment'
  /** column name */
  | 'editor_id'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'is_secret'
  /** column name */
  | 'key'
  /** column name */
  | 'value_json'
  /** column name */
  | 'value_string'
  /** column name */
  | 'value_type'
  /** column name */
  | 'value_url';

/** select "agent_installation_variable_aggregate_bool_exp_bool_and_arguments_columns" columns of table "agent.installation_variable" */
export type Agent_Installation_Variable_Select_Column_Agent_Installation_Variable_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'is_secret';

/** select "agent_installation_variable_aggregate_bool_exp_bool_or_arguments_columns" columns of table "agent.installation_variable" */
export type Agent_Installation_Variable_Select_Column_Agent_Installation_Variable_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'is_secret';

/** input type for updating data in table "agent.installation_variable" */
export type Agent_Installation_Variable_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  comment?: InputMaybe<Scalars['String']>;
  editor_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
  is_secret?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  value_json?: InputMaybe<Scalars['jsonb']>;
  value_string?: InputMaybe<Scalars['String']>;
  value_type?: InputMaybe<Scalars['String']>;
  value_url?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "agent_installation_variable" */
export type Agent_Installation_Variable_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Installation_Variable_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Installation_Variable_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  comment?: InputMaybe<Scalars['String']>;
  editor_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
  is_secret?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  value_json?: InputMaybe<Scalars['jsonb']>;
  value_string?: InputMaybe<Scalars['String']>;
  value_type?: InputMaybe<Scalars['String']>;
  value_url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "agent.installation_variable" */
export type Agent_Installation_Variable_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_up'
  /** column name */
  | 'comment'
  /** column name */
  | 'editor_id'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'is_secret'
  /** column name */
  | 'key'
  /** column name */
  | 'value_json'
  /** column name */
  | 'value_string'
  /** column name */
  | 'value_type'
  /** column name */
  | 'value_url';

export type Agent_Installation_Variable_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Agent_Installation_Variable_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Agent_Installation_Variable_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Agent_Installation_Variable_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Agent_Installation_Variable_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Agent_Installation_Variable_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Installation_Variable_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Installation_Variable_Bool_Exp;
};

/** columns and relationships of "agent.runtime" */
export type Agent_Runtime = {
  __typename?: 'agent_runtime';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An object relationship */
  agent?: Maybe<Agent_Agent>;
  /** An object relationship */
  agentByAgentUid?: Maybe<Agent_Agent>;
  agent_id?: Maybe<Scalars['String']>;
  agent_uid?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  agents: Array<Agent_Agent>;
  /** An aggregate relationship */
  agents_aggregate: Agent_Agent_Aggregate;
  debug_endpoint: Scalars['String'];
  dev_endpoint: Scalars['String'];
  dev_password_hash: Scalars['String'];
  dev_status: Scalars['dev_runtime_status'];
  exec_endpoint: Scalars['String'];
  id: Scalars['String'];
  last_accessed: Scalars['timestamptz'];
  name: Scalars['String'];
  topic_name?: Maybe<Scalars['String']>;
  /** An object relationship */
  workspace?: Maybe<App_Workspace>;
  /** An object relationship */
  workspaceByWorkspaceUid?: Maybe<App_Workspace>;
  workspace_id?: Maybe<Scalars['String']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "agent.runtime" */
export type Agent_RuntimeAgentsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


/** columns and relationships of "agent.runtime" */
export type Agent_RuntimeAgents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};

/** aggregated selection of "agent.runtime" */
export type Agent_Runtime_Aggregate = {
  __typename?: 'agent_runtime_aggregate';
  aggregate?: Maybe<Agent_Runtime_Aggregate_Fields>;
  nodes: Array<Agent_Runtime>;
};

export type Agent_Runtime_Aggregate_Bool_Exp = {
  count?: InputMaybe<Agent_Runtime_Aggregate_Bool_Exp_Count>;
};

export type Agent_Runtime_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Agent_Runtime_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "agent.runtime" */
export type Agent_Runtime_Aggregate_Fields = {
  __typename?: 'agent_runtime_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Agent_Runtime_Max_Fields>;
  min?: Maybe<Agent_Runtime_Min_Fields>;
};


/** aggregate fields of "agent.runtime" */
export type Agent_Runtime_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "agent.runtime" */
export type Agent_Runtime_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agent_Runtime_Max_Order_By>;
  min?: InputMaybe<Agent_Runtime_Min_Order_By>;
};

/** input type for inserting array relation for remote table "agent.runtime" */
export type Agent_Runtime_Arr_Rel_Insert_Input = {
  data: Array<Agent_Runtime_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Runtime_On_Conflict>;
};

/** Boolean expression to filter rows from the table "agent.runtime". All fields are combined with a logical 'AND'. */
export type Agent_Runtime_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Runtime_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Agent_Runtime_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_Runtime_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  agent?: InputMaybe<Agent_Agent_Bool_Exp>;
  agentByAgentUid?: InputMaybe<Agent_Agent_Bool_Exp>;
  agent_id?: InputMaybe<String_Comparison_Exp>;
  agent_uid?: InputMaybe<Uuid_Comparison_Exp>;
  agents?: InputMaybe<Agent_Agent_Bool_Exp>;
  agents_aggregate?: InputMaybe<Agent_Agent_Aggregate_Bool_Exp>;
  debug_endpoint?: InputMaybe<String_Comparison_Exp>;
  dev_endpoint?: InputMaybe<String_Comparison_Exp>;
  dev_password_hash?: InputMaybe<String_Comparison_Exp>;
  dev_status?: InputMaybe<Dev_Runtime_Status_Comparison_Exp>;
  exec_endpoint?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_accessed?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  topic_name?: InputMaybe<String_Comparison_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspaceByWorkspaceUid?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
  workspace_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "agent.runtime" */
export type Agent_Runtime_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'agent_runtime_id_pk'
  /** unique or primary key constraint on columns "_uid" */
  | 'agent_runtime_pk';

/** input type for inserting data into table "agent.runtime" */
export type Agent_Runtime_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agentByAgentUid?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agent_id?: InputMaybe<Scalars['String']>;
  agent_uid?: InputMaybe<Scalars['uuid']>;
  agents?: InputMaybe<Agent_Agent_Arr_Rel_Insert_Input>;
  debug_endpoint?: InputMaybe<Scalars['String']>;
  dev_endpoint?: InputMaybe<Scalars['String']>;
  dev_password_hash?: InputMaybe<Scalars['String']>;
  dev_status?: InputMaybe<Scalars['dev_runtime_status']>;
  exec_endpoint?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_accessed?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  topic_name?: InputMaybe<Scalars['String']>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspaceByWorkspaceUid?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Agent_Runtime_Max_Fields = {
  __typename?: 'agent_runtime_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  agent_uid?: Maybe<Scalars['uuid']>;
  debug_endpoint?: Maybe<Scalars['String']>;
  dev_endpoint?: Maybe<Scalars['String']>;
  dev_password_hash?: Maybe<Scalars['String']>;
  dev_status?: Maybe<Scalars['dev_runtime_status']>;
  exec_endpoint?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_accessed?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  topic_name?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['String']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "agent.runtime" */
export type Agent_Runtime_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agent_uid?: InputMaybe<Order_By>;
  debug_endpoint?: InputMaybe<Order_By>;
  dev_endpoint?: InputMaybe<Order_By>;
  dev_password_hash?: InputMaybe<Order_By>;
  dev_status?: InputMaybe<Order_By>;
  exec_endpoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_accessed?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  topic_name?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Agent_Runtime_Min_Fields = {
  __typename?: 'agent_runtime_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  agent_uid?: Maybe<Scalars['uuid']>;
  debug_endpoint?: Maybe<Scalars['String']>;
  dev_endpoint?: Maybe<Scalars['String']>;
  dev_password_hash?: Maybe<Scalars['String']>;
  dev_status?: Maybe<Scalars['dev_runtime_status']>;
  exec_endpoint?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_accessed?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  topic_name?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['String']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "agent.runtime" */
export type Agent_Runtime_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agent_uid?: InputMaybe<Order_By>;
  debug_endpoint?: InputMaybe<Order_By>;
  dev_endpoint?: InputMaybe<Order_By>;
  dev_password_hash?: InputMaybe<Order_By>;
  dev_status?: InputMaybe<Order_By>;
  exec_endpoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_accessed?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  topic_name?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "agent.runtime" */
export type Agent_Runtime_Mutation_Response = {
  __typename?: 'agent_runtime_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_Runtime>;
};

/** input type for inserting object relation for remote table "agent.runtime" */
export type Agent_Runtime_Obj_Rel_Insert_Input = {
  data: Agent_Runtime_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Agent_Runtime_On_Conflict>;
};

/** on_conflict condition type for table "agent.runtime" */
export type Agent_Runtime_On_Conflict = {
  constraint: Agent_Runtime_Constraint;
  update_columns?: Array<Agent_Runtime_Update_Column>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};

/** Ordering options when selecting data from "agent.runtime". */
export type Agent_Runtime_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent?: InputMaybe<Agent_Agent_Order_By>;
  agentByAgentUid?: InputMaybe<Agent_Agent_Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agent_uid?: InputMaybe<Order_By>;
  agents_aggregate?: InputMaybe<Agent_Agent_Aggregate_Order_By>;
  debug_endpoint?: InputMaybe<Order_By>;
  dev_endpoint?: InputMaybe<Order_By>;
  dev_password_hash?: InputMaybe<Order_By>;
  dev_status?: InputMaybe<Order_By>;
  exec_endpoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_accessed?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  topic_name?: InputMaybe<Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspaceByWorkspaceUid?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: agent.runtime */
export type Agent_Runtime_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "agent.runtime" */
export type Agent_Runtime_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'agent_uid'
  /** column name */
  | 'debug_endpoint'
  /** column name */
  | 'dev_endpoint'
  /** column name */
  | 'dev_password_hash'
  /** column name */
  | 'dev_status'
  /** column name */
  | 'exec_endpoint'
  /** column name */
  | 'id'
  /** column name */
  | 'last_accessed'
  /** column name */
  | 'name'
  /** column name */
  | 'topic_name'
  /** column name */
  | 'workspace_id'
  /** column name */
  | 'workspace_uid';

/** input type for updating data in table "agent.runtime" */
export type Agent_Runtime_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  agent_uid?: InputMaybe<Scalars['uuid']>;
  debug_endpoint?: InputMaybe<Scalars['String']>;
  dev_endpoint?: InputMaybe<Scalars['String']>;
  dev_password_hash?: InputMaybe<Scalars['String']>;
  dev_status?: InputMaybe<Scalars['dev_runtime_status']>;
  exec_endpoint?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_accessed?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  topic_name?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "agent_runtime" */
export type Agent_Runtime_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Runtime_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_Runtime_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  agent_uid?: InputMaybe<Scalars['uuid']>;
  debug_endpoint?: InputMaybe<Scalars['String']>;
  dev_endpoint?: InputMaybe<Scalars['String']>;
  dev_password_hash?: InputMaybe<Scalars['String']>;
  dev_status?: InputMaybe<Scalars['dev_runtime_status']>;
  exec_endpoint?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_accessed?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  topic_name?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "agent.runtime" */
export type Agent_Runtime_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'agent_uid'
  /** column name */
  | 'debug_endpoint'
  /** column name */
  | 'dev_endpoint'
  /** column name */
  | 'dev_password_hash'
  /** column name */
  | 'dev_status'
  /** column name */
  | 'exec_endpoint'
  /** column name */
  | 'id'
  /** column name */
  | 'last_accessed'
  /** column name */
  | 'name'
  /** column name */
  | 'topic_name'
  /** column name */
  | 'workspace_id'
  /** column name */
  | 'workspace_uid';

export type Agent_Runtime_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_Runtime_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_Runtime_Bool_Exp;
};

/** columns and relationships of "agent.system_prompt" */
export type Agent_System_Prompt = {
  __typename?: 'agent_system_prompt';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  agent_id: Scalars['String'];
  id: Scalars['String'];
  text: Scalars['String'];
};

/** aggregated selection of "agent.system_prompt" */
export type Agent_System_Prompt_Aggregate = {
  __typename?: 'agent_system_prompt_aggregate';
  aggregate?: Maybe<Agent_System_Prompt_Aggregate_Fields>;
  nodes: Array<Agent_System_Prompt>;
};

/** aggregate fields of "agent.system_prompt" */
export type Agent_System_Prompt_Aggregate_Fields = {
  __typename?: 'agent_system_prompt_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Agent_System_Prompt_Max_Fields>;
  min?: Maybe<Agent_System_Prompt_Min_Fields>;
};


/** aggregate fields of "agent.system_prompt" */
export type Agent_System_Prompt_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_System_Prompt_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "agent.system_prompt". All fields are combined with a logical 'AND'. */
export type Agent_System_Prompt_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_System_Prompt_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Agent_System_Prompt_Bool_Exp>;
  _or?: InputMaybe<Array<Agent_System_Prompt_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  agent_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "agent.system_prompt" */
export type Agent_System_Prompt_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'agent_system_prompt_pk';

/** input type for inserting data into table "agent.system_prompt" */
export type Agent_System_Prompt_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Agent_System_Prompt_Max_Fields = {
  __typename?: 'agent_system_prompt_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Agent_System_Prompt_Min_Fields = {
  __typename?: 'agent_system_prompt_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "agent.system_prompt" */
export type Agent_System_Prompt_Mutation_Response = {
  __typename?: 'agent_system_prompt_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Agent_System_Prompt>;
};

/** on_conflict condition type for table "agent.system_prompt" */
export type Agent_System_Prompt_On_Conflict = {
  constraint: Agent_System_Prompt_Constraint;
  update_columns?: Array<Agent_System_Prompt_Update_Column>;
  where?: InputMaybe<Agent_System_Prompt_Bool_Exp>;
};

/** Ordering options when selecting data from "agent.system_prompt". */
export type Agent_System_Prompt_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: agent.system_prompt */
export type Agent_System_Prompt_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "agent.system_prompt" */
export type Agent_System_Prompt_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'id'
  /** column name */
  | 'text';

/** input type for updating data in table "agent.system_prompt" */
export type Agent_System_Prompt_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "agent_system_prompt" */
export type Agent_System_Prompt_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_System_Prompt_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agent_System_Prompt_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "agent.system_prompt" */
export type Agent_System_Prompt_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'id'
  /** column name */
  | 'text';

export type Agent_System_Prompt_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agent_System_Prompt_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agent_System_Prompt_Bool_Exp;
};

/** Boolean expression to compare columns of type "agent_visibility". All fields are combined with logical 'AND'. */
export type Agent_Visibility_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['agent_visibility']>;
  _gt?: InputMaybe<Scalars['agent_visibility']>;
  _gte?: InputMaybe<Scalars['agent_visibility']>;
  _in?: InputMaybe<Array<Scalars['agent_visibility']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['agent_visibility']>;
  _lte?: InputMaybe<Scalars['agent_visibility']>;
  _neq?: InputMaybe<Scalars['agent_visibility']>;
  _nin?: InputMaybe<Array<Scalars['agent_visibility']>>;
};

/** Boolean expression to compare columns of type "api_key_type". All fields are combined with logical 'AND'. */
export type Api_Key_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['api_key_type']>;
  _gt?: InputMaybe<Scalars['api_key_type']>;
  _gte?: InputMaybe<Scalars['api_key_type']>;
  _in?: InputMaybe<Array<Scalars['api_key_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['api_key_type']>;
  _lte?: InputMaybe<Scalars['api_key_type']>;
  _neq?: InputMaybe<Scalars['api_key_type']>;
  _nin?: InputMaybe<Array<Scalars['api_key_type']>>;
};

/** columns and relationships of "app.blueprint" */
export type App_Blueprint = {
  __typename?: 'app_blueprint';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  ai_gen: Scalars['Boolean'];
  /** An object relationship */
  dataset?: Maybe<App_Dataset>;
  dataset_id?: Maybe<Scalars['String']>;
  display_format: Scalars['String'];
  display_name: Scalars['String'];
  horizontal_align: Scalars['String'];
  id: Scalars['String'];
  index: Scalars['Int'];
  is_processing: Scalars['Boolean'];
  overflow: Scalars['String'];
  prompt_id?: Maybe<Scalars['uuid']>;
  required: Scalars['Boolean'];
  selected: Scalars['Boolean'];
  shown: Scalars['Boolean'];
  slug: Scalars['String'];
  sticky_left: Scalars['Boolean'];
  sticky_right: Scalars['Boolean'];
  system: Scalars['Boolean'];
  type: Scalars['String'];
  vertical_align: Scalars['String'];
  width: Scalars['Int'];
};

/** aggregated selection of "app.blueprint" */
export type App_Blueprint_Aggregate = {
  __typename?: 'app_blueprint_aggregate';
  aggregate?: Maybe<App_Blueprint_Aggregate_Fields>;
  nodes: Array<App_Blueprint>;
};

export type App_Blueprint_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<App_Blueprint_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<App_Blueprint_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<App_Blueprint_Aggregate_Bool_Exp_Count>;
};

export type App_Blueprint_Aggregate_Bool_Exp_Bool_And = {
  arguments: App_Blueprint_Select_Column_App_Blueprint_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Blueprint_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_Blueprint_Aggregate_Bool_Exp_Bool_Or = {
  arguments: App_Blueprint_Select_Column_App_Blueprint_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Blueprint_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_Blueprint_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_Blueprint_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Blueprint_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app.blueprint" */
export type App_Blueprint_Aggregate_Fields = {
  __typename?: 'app_blueprint_aggregate_fields';
  avg?: Maybe<App_Blueprint_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<App_Blueprint_Max_Fields>;
  min?: Maybe<App_Blueprint_Min_Fields>;
  stddev?: Maybe<App_Blueprint_Stddev_Fields>;
  stddev_pop?: Maybe<App_Blueprint_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<App_Blueprint_Stddev_Samp_Fields>;
  sum?: Maybe<App_Blueprint_Sum_Fields>;
  var_pop?: Maybe<App_Blueprint_Var_Pop_Fields>;
  var_samp?: Maybe<App_Blueprint_Var_Samp_Fields>;
  variance?: Maybe<App_Blueprint_Variance_Fields>;
};


/** aggregate fields of "app.blueprint" */
export type App_Blueprint_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Blueprint_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app.blueprint" */
export type App_Blueprint_Aggregate_Order_By = {
  avg?: InputMaybe<App_Blueprint_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_Blueprint_Max_Order_By>;
  min?: InputMaybe<App_Blueprint_Min_Order_By>;
  stddev?: InputMaybe<App_Blueprint_Stddev_Order_By>;
  stddev_pop?: InputMaybe<App_Blueprint_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<App_Blueprint_Stddev_Samp_Order_By>;
  sum?: InputMaybe<App_Blueprint_Sum_Order_By>;
  var_pop?: InputMaybe<App_Blueprint_Var_Pop_Order_By>;
  var_samp?: InputMaybe<App_Blueprint_Var_Samp_Order_By>;
  variance?: InputMaybe<App_Blueprint_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "app.blueprint" */
export type App_Blueprint_Arr_Rel_Insert_Input = {
  data: Array<App_Blueprint_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Blueprint_On_Conflict>;
};

/** aggregate avg on columns */
export type App_Blueprint_Avg_Fields = {
  __typename?: 'app_blueprint_avg_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "app.blueprint" */
export type App_Blueprint_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "app.blueprint". All fields are combined with a logical 'AND'. */
export type App_Blueprint_Bool_Exp = {
  _and?: InputMaybe<Array<App_Blueprint_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<App_Blueprint_Bool_Exp>;
  _or?: InputMaybe<Array<App_Blueprint_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  ai_gen?: InputMaybe<Boolean_Comparison_Exp>;
  dataset?: InputMaybe<App_Dataset_Bool_Exp>;
  dataset_id?: InputMaybe<String_Comparison_Exp>;
  display_format?: InputMaybe<String_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  horizontal_align?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  is_processing?: InputMaybe<Boolean_Comparison_Exp>;
  overflow?: InputMaybe<String_Comparison_Exp>;
  prompt_id?: InputMaybe<Uuid_Comparison_Exp>;
  required?: InputMaybe<Boolean_Comparison_Exp>;
  selected?: InputMaybe<Boolean_Comparison_Exp>;
  shown?: InputMaybe<Boolean_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  sticky_left?: InputMaybe<Boolean_Comparison_Exp>;
  sticky_right?: InputMaybe<Boolean_Comparison_Exp>;
  system?: InputMaybe<Boolean_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  vertical_align?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.blueprint" */
export type App_Blueprint_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'blueprint__uid_key'
  /** unique or primary key constraint on columns "id" */
  | 'blueprint_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'blueprint_id_uindex'
  /** unique or primary key constraint on columns "id" */
  | 'blueprint_pk';

/** input type for incrementing numeric columns in table "app.blueprint" */
export type App_Blueprint_Inc_Input = {
  index?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "app.blueprint" */
export type App_Blueprint_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_gen?: InputMaybe<Scalars['Boolean']>;
  dataset?: InputMaybe<App_Dataset_Obj_Rel_Insert_Input>;
  dataset_id?: InputMaybe<Scalars['String']>;
  display_format?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  horizontal_align?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  is_processing?: InputMaybe<Scalars['Boolean']>;
  overflow?: InputMaybe<Scalars['String']>;
  prompt_id?: InputMaybe<Scalars['uuid']>;
  required?: InputMaybe<Scalars['Boolean']>;
  selected?: InputMaybe<Scalars['Boolean']>;
  shown?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  sticky_left?: InputMaybe<Scalars['Boolean']>;
  sticky_right?: InputMaybe<Scalars['Boolean']>;
  system?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  vertical_align?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type App_Blueprint_Max_Fields = {
  __typename?: 'app_blueprint_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  dataset_id?: Maybe<Scalars['String']>;
  display_format?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  horizontal_align?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  overflow?: Maybe<Scalars['String']>;
  prompt_id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vertical_align?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "app.blueprint" */
export type App_Blueprint_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  dataset_id?: InputMaybe<Order_By>;
  display_format?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  horizontal_align?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  overflow?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vertical_align?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_Blueprint_Min_Fields = {
  __typename?: 'app_blueprint_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  dataset_id?: Maybe<Scalars['String']>;
  display_format?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  horizontal_align?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  overflow?: Maybe<Scalars['String']>;
  prompt_id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vertical_align?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "app.blueprint" */
export type App_Blueprint_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  dataset_id?: InputMaybe<Order_By>;
  display_format?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  horizontal_align?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  overflow?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vertical_align?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.blueprint" */
export type App_Blueprint_Mutation_Response = {
  __typename?: 'app_blueprint_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Blueprint>;
};

/** on_conflict condition type for table "app.blueprint" */
export type App_Blueprint_On_Conflict = {
  constraint: App_Blueprint_Constraint;
  update_columns?: Array<App_Blueprint_Update_Column>;
  where?: InputMaybe<App_Blueprint_Bool_Exp>;
};

/** Ordering options when selecting data from "app.blueprint". */
export type App_Blueprint_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  ai_gen?: InputMaybe<Order_By>;
  dataset?: InputMaybe<App_Dataset_Order_By>;
  dataset_id?: InputMaybe<Order_By>;
  display_format?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  horizontal_align?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  is_processing?: InputMaybe<Order_By>;
  overflow?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  required?: InputMaybe<Order_By>;
  selected?: InputMaybe<Order_By>;
  shown?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sticky_left?: InputMaybe<Order_By>;
  sticky_right?: InputMaybe<Order_By>;
  system?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vertical_align?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app.blueprint */
export type App_Blueprint_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "app.blueprint" */
export type App_Blueprint_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_gen'
  /** column name */
  | 'dataset_id'
  /** column name */
  | 'display_format'
  /** column name */
  | 'display_name'
  /** column name */
  | 'horizontal_align'
  /** column name */
  | 'id'
  /** column name */
  | 'index'
  /** column name */
  | 'is_processing'
  /** column name */
  | 'overflow'
  /** column name */
  | 'prompt_id'
  /** column name */
  | 'required'
  /** column name */
  | 'selected'
  /** column name */
  | 'shown'
  /** column name */
  | 'slug'
  /** column name */
  | 'sticky_left'
  /** column name */
  | 'sticky_right'
  /** column name */
  | 'system'
  /** column name */
  | 'type'
  /** column name */
  | 'vertical_align'
  /** column name */
  | 'width';

/** select "app_blueprint_aggregate_bool_exp_bool_and_arguments_columns" columns of table "app.blueprint" */
export type App_Blueprint_Select_Column_App_Blueprint_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'ai_gen'
  /** column name */
  | 'is_processing'
  /** column name */
  | 'required'
  /** column name */
  | 'selected'
  /** column name */
  | 'shown'
  /** column name */
  | 'sticky_left'
  /** column name */
  | 'sticky_right'
  /** column name */
  | 'system';

/** select "app_blueprint_aggregate_bool_exp_bool_or_arguments_columns" columns of table "app.blueprint" */
export type App_Blueprint_Select_Column_App_Blueprint_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'ai_gen'
  /** column name */
  | 'is_processing'
  /** column name */
  | 'required'
  /** column name */
  | 'selected'
  /** column name */
  | 'shown'
  /** column name */
  | 'sticky_left'
  /** column name */
  | 'sticky_right'
  /** column name */
  | 'system';

/** input type for updating data in table "app.blueprint" */
export type App_Blueprint_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_gen?: InputMaybe<Scalars['Boolean']>;
  dataset_id?: InputMaybe<Scalars['String']>;
  display_format?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  horizontal_align?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  is_processing?: InputMaybe<Scalars['Boolean']>;
  overflow?: InputMaybe<Scalars['String']>;
  prompt_id?: InputMaybe<Scalars['uuid']>;
  required?: InputMaybe<Scalars['Boolean']>;
  selected?: InputMaybe<Scalars['Boolean']>;
  shown?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  sticky_left?: InputMaybe<Scalars['Boolean']>;
  sticky_right?: InputMaybe<Scalars['Boolean']>;
  system?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  vertical_align?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type App_Blueprint_Stddev_Fields = {
  __typename?: 'app_blueprint_stddev_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "app.blueprint" */
export type App_Blueprint_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type App_Blueprint_Stddev_Pop_Fields = {
  __typename?: 'app_blueprint_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "app.blueprint" */
export type App_Blueprint_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type App_Blueprint_Stddev_Samp_Fields = {
  __typename?: 'app_blueprint_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "app.blueprint" */
export type App_Blueprint_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "app_blueprint" */
export type App_Blueprint_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Blueprint_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Blueprint_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  ai_gen?: InputMaybe<Scalars['Boolean']>;
  dataset_id?: InputMaybe<Scalars['String']>;
  display_format?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  horizontal_align?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  is_processing?: InputMaybe<Scalars['Boolean']>;
  overflow?: InputMaybe<Scalars['String']>;
  prompt_id?: InputMaybe<Scalars['uuid']>;
  required?: InputMaybe<Scalars['Boolean']>;
  selected?: InputMaybe<Scalars['Boolean']>;
  shown?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  sticky_left?: InputMaybe<Scalars['Boolean']>;
  sticky_right?: InputMaybe<Scalars['Boolean']>;
  system?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  vertical_align?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type App_Blueprint_Sum_Fields = {
  __typename?: 'app_blueprint_sum_fields';
  index?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "app.blueprint" */
export type App_Blueprint_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** update columns of table "app.blueprint" */
export type App_Blueprint_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'ai_gen'
  /** column name */
  | 'dataset_id'
  /** column name */
  | 'display_format'
  /** column name */
  | 'display_name'
  /** column name */
  | 'horizontal_align'
  /** column name */
  | 'id'
  /** column name */
  | 'index'
  /** column name */
  | 'is_processing'
  /** column name */
  | 'overflow'
  /** column name */
  | 'prompt_id'
  /** column name */
  | 'required'
  /** column name */
  | 'selected'
  /** column name */
  | 'shown'
  /** column name */
  | 'slug'
  /** column name */
  | 'sticky_left'
  /** column name */
  | 'sticky_right'
  /** column name */
  | 'system'
  /** column name */
  | 'type'
  /** column name */
  | 'vertical_align'
  /** column name */
  | 'width';

export type App_Blueprint_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<App_Blueprint_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Blueprint_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Blueprint_Bool_Exp;
};

/** aggregate var_pop on columns */
export type App_Blueprint_Var_Pop_Fields = {
  __typename?: 'app_blueprint_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "app.blueprint" */
export type App_Blueprint_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type App_Blueprint_Var_Samp_Fields = {
  __typename?: 'app_blueprint_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "app.blueprint" */
export type App_Blueprint_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type App_Blueprint_Variance_Fields = {
  __typename?: 'app_blueprint_variance_fields';
  index?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "app.blueprint" */
export type App_Blueprint_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** columns and relationships of "app.chat" */
export type App_Chat = {
  __typename?: 'app_chat';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  attached_files?: Maybe<Scalars['jsonb']>;
  body_plaintext?: Maybe<Scalars['String']>;
  body_richtext: Scalars['jsonb'];
  /** An array relationship */
  file_attachment_list: Array<App_File_Attachment>;
  /** An aggregate relationship */
  file_attachment_list_aggregate: App_File_Attachment_Aggregate;
  generator_id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  model_output?: Maybe<Scalars['json']>;
  pair_id?: Maybe<Scalars['String']>;
  parent_id: Scalars['String'];
  status?: Maybe<Scalars['chat_processing_status']>;
  /** An object relationship */
  thread: App_Thread;
  thread_id: Scalars['String'];
  type: Scalars['block_type'];
  version?: Maybe<Scalars['String']>;
};


/** columns and relationships of "app.chat" */
export type App_ChatAttached_FilesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "app.chat" */
export type App_ChatBody_RichtextArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "app.chat" */
export type App_ChatFile_Attachment_ListArgs = {
  distinct_on?: InputMaybe<Array<App_File_Attachment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Attachment_Order_By>>;
  where?: InputMaybe<App_File_Attachment_Bool_Exp>;
};


/** columns and relationships of "app.chat" */
export type App_ChatFile_Attachment_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_File_Attachment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Attachment_Order_By>>;
  where?: InputMaybe<App_File_Attachment_Bool_Exp>;
};


/** columns and relationships of "app.chat" */
export type App_ChatModel_OutputArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "app.chat" */
export type App_Chat_Aggregate = {
  __typename?: 'app_chat_aggregate';
  aggregate?: Maybe<App_Chat_Aggregate_Fields>;
  nodes: Array<App_Chat>;
};

export type App_Chat_Aggregate_Bool_Exp = {
  count?: InputMaybe<App_Chat_Aggregate_Bool_Exp_Count>;
};

export type App_Chat_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_Chat_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Chat_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app.chat" */
export type App_Chat_Aggregate_Fields = {
  __typename?: 'app_chat_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_Chat_Max_Fields>;
  min?: Maybe<App_Chat_Min_Fields>;
};


/** aggregate fields of "app.chat" */
export type App_Chat_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Chat_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app.chat" */
export type App_Chat_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_Chat_Max_Order_By>;
  min?: InputMaybe<App_Chat_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App_Chat_Append_Input = {
  attached_files?: InputMaybe<Scalars['jsonb']>;
  body_richtext?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "app.chat" */
export type App_Chat_Arr_Rel_Insert_Input = {
  data: Array<App_Chat_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Chat_On_Conflict>;
};

/** Boolean expression to filter rows from the table "app.chat". All fields are combined with a logical 'AND'. */
export type App_Chat_Bool_Exp = {
  _and?: InputMaybe<Array<App_Chat_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<App_Chat_Bool_Exp>;
  _or?: InputMaybe<Array<App_Chat_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  attached_files?: InputMaybe<Jsonb_Comparison_Exp>;
  body_plaintext?: InputMaybe<String_Comparison_Exp>;
  body_richtext?: InputMaybe<Jsonb_Comparison_Exp>;
  file_attachment_list?: InputMaybe<App_File_Attachment_Bool_Exp>;
  file_attachment_list_aggregate?: InputMaybe<App_File_Attachment_Aggregate_Bool_Exp>;
  generator_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  model_output?: InputMaybe<Json_Comparison_Exp>;
  pair_id?: InputMaybe<String_Comparison_Exp>;
  parent_id?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Chat_Processing_Status_Comparison_Exp>;
  thread?: InputMaybe<App_Thread_Bool_Exp>;
  thread_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Block_Type_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.chat" */
export type App_Chat_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'chat_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'chat_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App_Chat_Delete_At_Path_Input = {
  attached_files?: InputMaybe<Array<Scalars['String']>>;
  body_richtext?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App_Chat_Delete_Elem_Input = {
  attached_files?: InputMaybe<Scalars['Int']>;
  body_richtext?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App_Chat_Delete_Key_Input = {
  attached_files?: InputMaybe<Scalars['String']>;
  body_richtext?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "app.chat" */
export type App_Chat_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  attached_files?: InputMaybe<Scalars['jsonb']>;
  body_plaintext?: InputMaybe<Scalars['String']>;
  body_richtext?: InputMaybe<Scalars['jsonb']>;
  file_attachment_list?: InputMaybe<App_File_Attachment_Arr_Rel_Insert_Input>;
  generator_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  model_output?: InputMaybe<Scalars['json']>;
  pair_id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['chat_processing_status']>;
  thread?: InputMaybe<App_Thread_Obj_Rel_Insert_Input>;
  thread_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['block_type']>;
  version?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_Chat_Max_Fields = {
  __typename?: 'app_chat_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  body_plaintext?: Maybe<Scalars['String']>;
  generator_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  pair_id?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['chat_processing_status']>;
  thread_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['block_type']>;
  version?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "app.chat" */
export type App_Chat_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  body_plaintext?: InputMaybe<Order_By>;
  generator_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pair_id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  thread_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_Chat_Min_Fields = {
  __typename?: 'app_chat_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  body_plaintext?: Maybe<Scalars['String']>;
  generator_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  pair_id?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['chat_processing_status']>;
  thread_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['block_type']>;
  version?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "app.chat" */
export type App_Chat_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  body_plaintext?: InputMaybe<Order_By>;
  generator_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pair_id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  thread_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.chat" */
export type App_Chat_Mutation_Response = {
  __typename?: 'app_chat_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Chat>;
};

/** input type for inserting object relation for remote table "app.chat" */
export type App_Chat_Obj_Rel_Insert_Input = {
  data: App_Chat_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Chat_On_Conflict>;
};

/** on_conflict condition type for table "app.chat" */
export type App_Chat_On_Conflict = {
  constraint: App_Chat_Constraint;
  update_columns?: Array<App_Chat_Update_Column>;
  where?: InputMaybe<App_Chat_Bool_Exp>;
};

/** Ordering options when selecting data from "app.chat". */
export type App_Chat_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  attached_files?: InputMaybe<Order_By>;
  body_plaintext?: InputMaybe<Order_By>;
  body_richtext?: InputMaybe<Order_By>;
  file_attachment_list_aggregate?: InputMaybe<App_File_Attachment_Aggregate_Order_By>;
  generator_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_output?: InputMaybe<Order_By>;
  pair_id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  thread?: InputMaybe<App_Thread_Order_By>;
  thread_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app.chat */
export type App_Chat_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App_Chat_Prepend_Input = {
  attached_files?: InputMaybe<Scalars['jsonb']>;
  body_richtext?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "app.chat" */
export type App_Chat_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'attached_files'
  /** column name */
  | 'body_plaintext'
  /** column name */
  | 'body_richtext'
  /** column name */
  | 'generator_id'
  /** column name */
  | 'id'
  /** column name */
  | 'model_output'
  /** column name */
  | 'pair_id'
  /** column name */
  | 'parent_id'
  /** column name */
  | 'status'
  /** column name */
  | 'thread_id'
  /** column name */
  | 'type'
  /** column name */
  | 'version';

/** input type for updating data in table "app.chat" */
export type App_Chat_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  attached_files?: InputMaybe<Scalars['jsonb']>;
  body_plaintext?: InputMaybe<Scalars['String']>;
  body_richtext?: InputMaybe<Scalars['jsonb']>;
  generator_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  model_output?: InputMaybe<Scalars['json']>;
  pair_id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['chat_processing_status']>;
  thread_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['block_type']>;
  version?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "app_chat" */
export type App_Chat_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Chat_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Chat_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  attached_files?: InputMaybe<Scalars['jsonb']>;
  body_plaintext?: InputMaybe<Scalars['String']>;
  body_richtext?: InputMaybe<Scalars['jsonb']>;
  generator_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  model_output?: InputMaybe<Scalars['json']>;
  pair_id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['chat_processing_status']>;
  thread_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['block_type']>;
  version?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app.chat" */
export type App_Chat_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'attached_files'
  /** column name */
  | 'body_plaintext'
  /** column name */
  | 'body_richtext'
  /** column name */
  | 'generator_id'
  /** column name */
  | 'id'
  /** column name */
  | 'model_output'
  /** column name */
  | 'pair_id'
  /** column name */
  | 'parent_id'
  /** column name */
  | 'status'
  /** column name */
  | 'thread_id'
  /** column name */
  | 'type'
  /** column name */
  | 'version';

export type App_Chat_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<App_Chat_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<App_Chat_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<App_Chat_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<App_Chat_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<App_Chat_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Chat_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Chat_Bool_Exp;
};

/** columns and relationships of "app.dataset" */
export type App_Dataset = {
  __typename?: 'app_dataset';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An array relationship */
  blueprint_list: Array<App_Blueprint>;
  /** An aggregate relationship */
  blueprint_list_aggregate: App_Blueprint_Aggregate;
  bp_version: Scalars['String'];
  db_table?: Maybe<Scalars['String']>;
  entity_columns?: Maybe<Scalars['jsonb']>;
  form_id?: Maybe<Scalars['uuid']>;
  id: Scalars['String'];
  name: Scalars['String'];
  parent_dataset_id?: Maybe<Scalars['uuid']>;
  public_slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['jsonb']>;
  visibility: Scalars['dataset_visibility'];
  workspace_id: Scalars['String'];
};


/** columns and relationships of "app.dataset" */
export type App_DatasetBlueprint_ListArgs = {
  distinct_on?: InputMaybe<Array<App_Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Blueprint_Order_By>>;
  where?: InputMaybe<App_Blueprint_Bool_Exp>;
};


/** columns and relationships of "app.dataset" */
export type App_DatasetBlueprint_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Blueprint_Order_By>>;
  where?: InputMaybe<App_Blueprint_Bool_Exp>;
};


/** columns and relationships of "app.dataset" */
export type App_DatasetEntity_ColumnsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "app.dataset" */
export type App_DatasetTagsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "app.dataset" */
export type App_Dataset_Aggregate = {
  __typename?: 'app_dataset_aggregate';
  aggregate?: Maybe<App_Dataset_Aggregate_Fields>;
  nodes: Array<App_Dataset>;
};

export type App_Dataset_Aggregate_Bool_Exp = {
  count?: InputMaybe<App_Dataset_Aggregate_Bool_Exp_Count>;
};

export type App_Dataset_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_Dataset_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Dataset_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app.dataset" */
export type App_Dataset_Aggregate_Fields = {
  __typename?: 'app_dataset_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_Dataset_Max_Fields>;
  min?: Maybe<App_Dataset_Min_Fields>;
};


/** aggregate fields of "app.dataset" */
export type App_Dataset_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Dataset_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app.dataset" */
export type App_Dataset_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_Dataset_Max_Order_By>;
  min?: InputMaybe<App_Dataset_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App_Dataset_Append_Input = {
  entity_columns?: InputMaybe<Scalars['jsonb']>;
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "app.dataset" */
export type App_Dataset_Arr_Rel_Insert_Input = {
  data: Array<App_Dataset_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Dataset_On_Conflict>;
};

/** Boolean expression to filter rows from the table "app.dataset". All fields are combined with a logical 'AND'. */
export type App_Dataset_Bool_Exp = {
  _and?: InputMaybe<Array<App_Dataset_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<App_Dataset_Bool_Exp>;
  _or?: InputMaybe<Array<App_Dataset_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  blueprint_list?: InputMaybe<App_Blueprint_Bool_Exp>;
  blueprint_list_aggregate?: InputMaybe<App_Blueprint_Aggregate_Bool_Exp>;
  bp_version?: InputMaybe<String_Comparison_Exp>;
  db_table?: InputMaybe<String_Comparison_Exp>;
  entity_columns?: InputMaybe<Jsonb_Comparison_Exp>;
  form_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  parent_dataset_id?: InputMaybe<Uuid_Comparison_Exp>;
  public_slug?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Jsonb_Comparison_Exp>;
  visibility?: InputMaybe<Dataset_Visibility_Comparison_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.dataset" */
export type App_Dataset_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'dataset__uid_key'
  /** unique or primary key constraint on columns "id" */
  | 'dataset_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'dataset_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App_Dataset_Delete_At_Path_Input = {
  entity_columns?: InputMaybe<Array<Scalars['String']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App_Dataset_Delete_Elem_Input = {
  entity_columns?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App_Dataset_Delete_Key_Input = {
  entity_columns?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "app.dataset" */
export type App_Dataset_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  blueprint_list?: InputMaybe<App_Blueprint_Arr_Rel_Insert_Input>;
  bp_version?: InputMaybe<Scalars['String']>;
  db_table?: InputMaybe<Scalars['String']>;
  entity_columns?: InputMaybe<Scalars['jsonb']>;
  form_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent_dataset_id?: InputMaybe<Scalars['uuid']>;
  public_slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  visibility?: InputMaybe<Scalars['dataset_visibility']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_Dataset_Max_Fields = {
  __typename?: 'app_dataset_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  bp_version?: Maybe<Scalars['String']>;
  db_table?: Maybe<Scalars['String']>;
  form_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent_dataset_id?: Maybe<Scalars['uuid']>;
  public_slug?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['dataset_visibility']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "app.dataset" */
export type App_Dataset_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  bp_version?: InputMaybe<Order_By>;
  db_table?: InputMaybe<Order_By>;
  form_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parent_dataset_id?: InputMaybe<Order_By>;
  public_slug?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_Dataset_Min_Fields = {
  __typename?: 'app_dataset_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  bp_version?: Maybe<Scalars['String']>;
  db_table?: Maybe<Scalars['String']>;
  form_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent_dataset_id?: Maybe<Scalars['uuid']>;
  public_slug?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['dataset_visibility']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "app.dataset" */
export type App_Dataset_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  bp_version?: InputMaybe<Order_By>;
  db_table?: InputMaybe<Order_By>;
  form_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parent_dataset_id?: InputMaybe<Order_By>;
  public_slug?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.dataset" */
export type App_Dataset_Mutation_Response = {
  __typename?: 'app_dataset_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Dataset>;
};

/** input type for inserting object relation for remote table "app.dataset" */
export type App_Dataset_Obj_Rel_Insert_Input = {
  data: App_Dataset_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Dataset_On_Conflict>;
};

/** on_conflict condition type for table "app.dataset" */
export type App_Dataset_On_Conflict = {
  constraint: App_Dataset_Constraint;
  update_columns?: Array<App_Dataset_Update_Column>;
  where?: InputMaybe<App_Dataset_Bool_Exp>;
};

/** Ordering options when selecting data from "app.dataset". */
export type App_Dataset_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  blueprint_list_aggregate?: InputMaybe<App_Blueprint_Aggregate_Order_By>;
  bp_version?: InputMaybe<Order_By>;
  db_table?: InputMaybe<Order_By>;
  entity_columns?: InputMaybe<Order_By>;
  form_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parent_dataset_id?: InputMaybe<Order_By>;
  public_slug?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app.dataset */
export type App_Dataset_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App_Dataset_Prepend_Input = {
  entity_columns?: InputMaybe<Scalars['jsonb']>;
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "app.dataset" */
export type App_Dataset_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'bp_version'
  /** column name */
  | 'db_table'
  /** column name */
  | 'entity_columns'
  /** column name */
  | 'form_id'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'parent_dataset_id'
  /** column name */
  | 'public_slug'
  /** column name */
  | 'tags'
  /** column name */
  | 'visibility'
  /** column name */
  | 'workspace_id';

/** input type for updating data in table "app.dataset" */
export type App_Dataset_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  bp_version?: InputMaybe<Scalars['String']>;
  db_table?: InputMaybe<Scalars['String']>;
  entity_columns?: InputMaybe<Scalars['jsonb']>;
  form_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent_dataset_id?: InputMaybe<Scalars['uuid']>;
  public_slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  visibility?: InputMaybe<Scalars['dataset_visibility']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "app_dataset" */
export type App_Dataset_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Dataset_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Dataset_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  bp_version?: InputMaybe<Scalars['String']>;
  db_table?: InputMaybe<Scalars['String']>;
  entity_columns?: InputMaybe<Scalars['jsonb']>;
  form_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent_dataset_id?: InputMaybe<Scalars['uuid']>;
  public_slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  visibility?: InputMaybe<Scalars['dataset_visibility']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app.dataset" */
export type App_Dataset_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'bp_version'
  /** column name */
  | 'db_table'
  /** column name */
  | 'entity_columns'
  /** column name */
  | 'form_id'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'parent_dataset_id'
  /** column name */
  | 'public_slug'
  /** column name */
  | 'tags'
  /** column name */
  | 'visibility'
  /** column name */
  | 'workspace_id';

export type App_Dataset_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<App_Dataset_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<App_Dataset_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<App_Dataset_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<App_Dataset_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<App_Dataset_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Dataset_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Dataset_Bool_Exp;
};

/** columns and relationships of "app.file" */
export type App_File = {
  __typename?: 'app_file';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  agent_id?: Maybe<Scalars['String']>;
  agent_installation_id?: Maybe<Scalars['String']>;
  app_type?: Maybe<Scalars['String']>;
  chat_id?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['String']>;
  file_processed?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  original_name: Scalars['String'];
  owner_id?: Maybe<Scalars['String']>;
  presigned_url: Scalars['String'];
  s3_bucket: Scalars['String'];
  s3_key: Scalars['String'];
  sha256_hexdigest: Scalars['String'];
  thread_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<App_User>;
  /** An object relationship */
  workspace?: Maybe<App_Workspace>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "app.file" */
export type App_File_Aggregate = {
  __typename?: 'app_file_aggregate';
  aggregate?: Maybe<App_File_Aggregate_Fields>;
  nodes: Array<App_File>;
};

export type App_File_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<App_File_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<App_File_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<App_File_Aggregate_Bool_Exp_Count>;
};

export type App_File_Aggregate_Bool_Exp_Bool_And = {
  arguments: App_File_Select_Column_App_File_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_File_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_File_Aggregate_Bool_Exp_Bool_Or = {
  arguments: App_File_Select_Column_App_File_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_File_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_File_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_File_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app.file" */
export type App_File_Aggregate_Fields = {
  __typename?: 'app_file_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_File_Max_Fields>;
  min?: Maybe<App_File_Min_Fields>;
};


/** aggregate fields of "app.file" */
export type App_File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app.file" */
export type App_File_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_File_Max_Order_By>;
  min?: InputMaybe<App_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "app.file" */
export type App_File_Arr_Rel_Insert_Input = {
  data: Array<App_File_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_File_On_Conflict>;
};

/** columns and relationships of "app.file_attachment" */
export type App_File_Attachment = {
  __typename?: 'app_file_attachment';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An object relationship */
  chat: App_Chat;
  chat_id: Scalars['String'];
  /** An object relationship */
  file: App_File;
  file_id: Scalars['String'];
  id: Scalars['String'];
  /** An object relationship */
  installation?: Maybe<Agent_Installation>;
  installation_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "app.file_attachment" */
export type App_File_Attachment_Aggregate = {
  __typename?: 'app_file_attachment_aggregate';
  aggregate?: Maybe<App_File_Attachment_Aggregate_Fields>;
  nodes: Array<App_File_Attachment>;
};

export type App_File_Attachment_Aggregate_Bool_Exp = {
  count?: InputMaybe<App_File_Attachment_Aggregate_Bool_Exp_Count>;
};

export type App_File_Attachment_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_File_Attachment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_File_Attachment_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app.file_attachment" */
export type App_File_Attachment_Aggregate_Fields = {
  __typename?: 'app_file_attachment_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_File_Attachment_Max_Fields>;
  min?: Maybe<App_File_Attachment_Min_Fields>;
};


/** aggregate fields of "app.file_attachment" */
export type App_File_Attachment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_File_Attachment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app.file_attachment" */
export type App_File_Attachment_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_File_Attachment_Max_Order_By>;
  min?: InputMaybe<App_File_Attachment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "app.file_attachment" */
export type App_File_Attachment_Arr_Rel_Insert_Input = {
  data: Array<App_File_Attachment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_File_Attachment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "app.file_attachment". All fields are combined with a logical 'AND'. */
export type App_File_Attachment_Bool_Exp = {
  _and?: InputMaybe<Array<App_File_Attachment_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<App_File_Attachment_Bool_Exp>;
  _or?: InputMaybe<Array<App_File_Attachment_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  chat?: InputMaybe<App_Chat_Bool_Exp>;
  chat_id?: InputMaybe<String_Comparison_Exp>;
  file?: InputMaybe<App_File_Bool_Exp>;
  file_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  installation?: InputMaybe<Agent_Installation_Bool_Exp>;
  installation_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.file_attachment" */
export type App_File_Attachment_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'file_attachment_pk';

/** input type for inserting data into table "app.file_attachment" */
export type App_File_Attachment_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  chat?: InputMaybe<App_Chat_Obj_Rel_Insert_Input>;
  chat_id?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<App_File_Obj_Rel_Insert_Input>;
  file_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation?: InputMaybe<Agent_Installation_Obj_Rel_Insert_Input>;
  installation_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_File_Attachment_Max_Fields = {
  __typename?: 'app_file_attachment_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  chat_id?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "app.file_attachment" */
export type App_File_Attachment_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_File_Attachment_Min_Fields = {
  __typename?: 'app_file_attachment_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  chat_id?: Maybe<Scalars['String']>;
  file_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "app.file_attachment" */
export type App_File_Attachment_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.file_attachment" */
export type App_File_Attachment_Mutation_Response = {
  __typename?: 'app_file_attachment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_File_Attachment>;
};

/** on_conflict condition type for table "app.file_attachment" */
export type App_File_Attachment_On_Conflict = {
  constraint: App_File_Attachment_Constraint;
  update_columns?: Array<App_File_Attachment_Update_Column>;
  where?: InputMaybe<App_File_Attachment_Bool_Exp>;
};

/** Ordering options when selecting data from "app.file_attachment". */
export type App_File_Attachment_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  chat?: InputMaybe<App_Chat_Order_By>;
  chat_id?: InputMaybe<Order_By>;
  file?: InputMaybe<App_File_Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation?: InputMaybe<Agent_Installation_Order_By>;
  installation_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app.file_attachment */
export type App_File_Attachment_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "app.file_attachment" */
export type App_File_Attachment_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'chat_id'
  /** column name */
  | 'file_id'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id';

/** input type for updating data in table "app.file_attachment" */
export type App_File_Attachment_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  chat_id?: InputMaybe<Scalars['String']>;
  file_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "app_file_attachment" */
export type App_File_Attachment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_File_Attachment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_File_Attachment_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  chat_id?: InputMaybe<Scalars['String']>;
  file_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app.file_attachment" */
export type App_File_Attachment_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'chat_id'
  /** column name */
  | 'file_id'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id';

export type App_File_Attachment_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_File_Attachment_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_File_Attachment_Bool_Exp;
};

/** Boolean expression to filter rows from the table "app.file". All fields are combined with a logical 'AND'. */
export type App_File_Bool_Exp = {
  _and?: InputMaybe<Array<App_File_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<App_File_Bool_Exp>;
  _or?: InputMaybe<Array<App_File_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  agent_id?: InputMaybe<String_Comparison_Exp>;
  agent_installation_id?: InputMaybe<String_Comparison_Exp>;
  app_type?: InputMaybe<String_Comparison_Exp>;
  chat_id?: InputMaybe<String_Comparison_Exp>;
  creator_id?: InputMaybe<String_Comparison_Exp>;
  file_processed?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  original_name?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
  presigned_url?: InputMaybe<String_Comparison_Exp>;
  s3_bucket?: InputMaybe<String_Comparison_Exp>;
  s3_key?: InputMaybe<String_Comparison_Exp>;
  sha256_hexdigest?: InputMaybe<String_Comparison_Exp>;
  thread_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.file" */
export type App_File_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'file_pkey';

/** input type for inserting data into table "app.file" */
export type App_File_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  agent_installation_id?: InputMaybe<Scalars['String']>;
  app_type?: InputMaybe<Scalars['String']>;
  chat_id?: InputMaybe<Scalars['String']>;
  creator_id?: InputMaybe<Scalars['String']>;
  file_processed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
  presigned_url?: InputMaybe<Scalars['String']>;
  s3_bucket?: InputMaybe<Scalars['String']>;
  s3_key?: InputMaybe<Scalars['String']>;
  sha256_hexdigest?: InputMaybe<Scalars['String']>;
  thread_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_File_Max_Fields = {
  __typename?: 'app_file_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  agent_installation_id?: Maybe<Scalars['String']>;
  app_type?: Maybe<Scalars['String']>;
  chat_id?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  presigned_url?: Maybe<Scalars['String']>;
  s3_bucket?: Maybe<Scalars['String']>;
  s3_key?: Maybe<Scalars['String']>;
  sha256_hexdigest?: Maybe<Scalars['String']>;
  thread_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "app.file" */
export type App_File_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agent_installation_id?: InputMaybe<Order_By>;
  app_type?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  presigned_url?: InputMaybe<Order_By>;
  s3_bucket?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  sha256_hexdigest?: InputMaybe<Order_By>;
  thread_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_File_Min_Fields = {
  __typename?: 'app_file_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  agent_installation_id?: Maybe<Scalars['String']>;
  app_type?: Maybe<Scalars['String']>;
  chat_id?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  presigned_url?: Maybe<Scalars['String']>;
  s3_bucket?: Maybe<Scalars['String']>;
  s3_key?: Maybe<Scalars['String']>;
  sha256_hexdigest?: Maybe<Scalars['String']>;
  thread_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "app.file" */
export type App_File_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agent_installation_id?: InputMaybe<Order_By>;
  app_type?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  presigned_url?: InputMaybe<Order_By>;
  s3_bucket?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  sha256_hexdigest?: InputMaybe<Order_By>;
  thread_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.file" */
export type App_File_Mutation_Response = {
  __typename?: 'app_file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_File>;
};

/** input type for inserting object relation for remote table "app.file" */
export type App_File_Obj_Rel_Insert_Input = {
  data: App_File_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_File_On_Conflict>;
};

/** on_conflict condition type for table "app.file" */
export type App_File_On_Conflict = {
  constraint: App_File_Constraint;
  update_columns?: Array<App_File_Update_Column>;
  where?: InputMaybe<App_File_Bool_Exp>;
};

/** Ordering options when selecting data from "app.file". */
export type App_File_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agent_installation_id?: InputMaybe<Order_By>;
  app_type?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  file_processed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  presigned_url?: InputMaybe<Order_By>;
  s3_bucket?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  sha256_hexdigest?: InputMaybe<Order_By>;
  thread_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app.file */
export type App_File_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "app.file" */
export type App_File_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'agent_installation_id'
  /** column name */
  | 'app_type'
  /** column name */
  | 'chat_id'
  /** column name */
  | 'creator_id'
  /** column name */
  | 'file_processed'
  /** column name */
  | 'id'
  /** column name */
  | 'original_name'
  /** column name */
  | 'owner_id'
  /** column name */
  | 'presigned_url'
  /** column name */
  | 's3_bucket'
  /** column name */
  | 's3_key'
  /** column name */
  | 'sha256_hexdigest'
  /** column name */
  | 'thread_id'
  /** column name */
  | 'type'
  /** column name */
  | 'workspace_id';

/** select "app_file_aggregate_bool_exp_bool_and_arguments_columns" columns of table "app.file" */
export type App_File_Select_Column_App_File_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'file_processed';

/** select "app_file_aggregate_bool_exp_bool_or_arguments_columns" columns of table "app.file" */
export type App_File_Select_Column_App_File_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'file_processed';

/** input type for updating data in table "app.file" */
export type App_File_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  agent_installation_id?: InputMaybe<Scalars['String']>;
  app_type?: InputMaybe<Scalars['String']>;
  chat_id?: InputMaybe<Scalars['String']>;
  creator_id?: InputMaybe<Scalars['String']>;
  file_processed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
  presigned_url?: InputMaybe<Scalars['String']>;
  s3_bucket?: InputMaybe<Scalars['String']>;
  s3_key?: InputMaybe<Scalars['String']>;
  sha256_hexdigest?: InputMaybe<Scalars['String']>;
  thread_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "app_file" */
export type App_File_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_File_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_File_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_id?: InputMaybe<Scalars['String']>;
  agent_installation_id?: InputMaybe<Scalars['String']>;
  app_type?: InputMaybe<Scalars['String']>;
  chat_id?: InputMaybe<Scalars['String']>;
  creator_id?: InputMaybe<Scalars['String']>;
  file_processed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
  presigned_url?: InputMaybe<Scalars['String']>;
  s3_bucket?: InputMaybe<Scalars['String']>;
  s3_key?: InputMaybe<Scalars['String']>;
  sha256_hexdigest?: InputMaybe<Scalars['String']>;
  thread_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app.file" */
export type App_File_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'agent_installation_id'
  /** column name */
  | 'app_type'
  /** column name */
  | 'chat_id'
  /** column name */
  | 'creator_id'
  /** column name */
  | 'file_processed'
  /** column name */
  | 'id'
  /** column name */
  | 'original_name'
  /** column name */
  | 'owner_id'
  /** column name */
  | 'presigned_url'
  /** column name */
  | 's3_bucket'
  /** column name */
  | 's3_key'
  /** column name */
  | 'sha256_hexdigest'
  /** column name */
  | 'thread_id'
  /** column name */
  | 'type'
  /** column name */
  | 'workspace_id';

export type App_File_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_File_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_File_Bool_Exp;
};

export type App_Grb0ts6wtxigdwbi_Mutation_Frontend = {
  __typename?: 'app_grb0ts6wtxigdwbi_mutation_frontend';
  /** delete data from the table: "atrium.review_photos" */
  delete_atrium_review_photos?: Maybe<Atrium_Review_Photos_Mutation_Response>;
  /** delete single row from the table: "atrium.review_photos" */
  delete_atrium_review_photos_by_pk?: Maybe<Atrium_Review_Photos>;
  /** delete data from the table: "atrium.reviewers" */
  delete_atrium_reviewers?: Maybe<Atrium_Reviewers_Mutation_Response>;
  /** delete single row from the table: "atrium.reviewers" */
  delete_atrium_reviewers_by_pk?: Maybe<Atrium_Reviewers>;
  /** delete data from the table: "atrium.tbl_9y9y3yt74loh2lew" */
  delete_atrium_tbl_9y9y3yt74loh2lew?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Mutation_Response>;
  /** delete single row from the table: "atrium.tbl_9y9y3yt74loh2lew" */
  delete_atrium_tbl_9y9y3yt74loh2lew_by_pk?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew>;
  /** insert data into the table: "atrium.review_photos" */
  insert_atrium_review_photos?: Maybe<Atrium_Review_Photos_Mutation_Response>;
  /** insert a single row into the table: "atrium.review_photos" */
  insert_atrium_review_photos_one?: Maybe<Atrium_Review_Photos>;
  /** insert data into the table: "atrium.reviewers" */
  insert_atrium_reviewers?: Maybe<Atrium_Reviewers_Mutation_Response>;
  /** insert a single row into the table: "atrium.reviewers" */
  insert_atrium_reviewers_one?: Maybe<Atrium_Reviewers>;
  /** insert data into the table: "atrium.tbl_9y9y3yt74loh2lew" */
  insert_atrium_tbl_9y9y3yt74loh2lew?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Mutation_Response>;
  /** insert a single row into the table: "atrium.tbl_9y9y3yt74loh2lew" */
  insert_atrium_tbl_9y9y3yt74loh2lew_one?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew>;
  /** update data of the table: "atrium.review_photos" */
  update_atrium_review_photos?: Maybe<Atrium_Review_Photos_Mutation_Response>;
  /** update single row of the table: "atrium.review_photos" */
  update_atrium_review_photos_by_pk?: Maybe<Atrium_Review_Photos>;
  /** update multiples rows of table: "atrium.review_photos" */
  update_atrium_review_photos_many?: Maybe<Array<Maybe<Atrium_Review_Photos_Mutation_Response>>>;
  /** update data of the table: "atrium.reviewers" */
  update_atrium_reviewers?: Maybe<Atrium_Reviewers_Mutation_Response>;
  /** update single row of the table: "atrium.reviewers" */
  update_atrium_reviewers_by_pk?: Maybe<Atrium_Reviewers>;
  /** update multiples rows of table: "atrium.reviewers" */
  update_atrium_reviewers_many?: Maybe<Array<Maybe<Atrium_Reviewers_Mutation_Response>>>;
  /** update data of the table: "atrium.tbl_9y9y3yt74loh2lew" */
  update_atrium_tbl_9y9y3yt74loh2lew?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Mutation_Response>;
  /** update single row of the table: "atrium.tbl_9y9y3yt74loh2lew" */
  update_atrium_tbl_9y9y3yt74loh2lew_by_pk?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew>;
  /** update multiples rows of table: "atrium.tbl_9y9y3yt74loh2lew" */
  update_atrium_tbl_9y9y3yt74loh2lew_many?: Maybe<Array<Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Mutation_Response>>>;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendDelete_Atrium_Review_PhotosArgs = {
  where: Atrium_Review_Photos_Bool_Exp;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendDelete_Atrium_Review_Photos_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendDelete_Atrium_ReviewersArgs = {
  where: Atrium_Reviewers_Bool_Exp;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendDelete_Atrium_Reviewers_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendDelete_Atrium_Tbl_9y9y3yt74loh2lewArgs = {
  where: Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendDelete_Atrium_Tbl_9y9y3yt74loh2lew_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendInsert_Atrium_Review_PhotosArgs = {
  objects: Array<Atrium_Review_Photos_Insert_Input>;
  on_conflict?: InputMaybe<Atrium_Review_Photos_On_Conflict>;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendInsert_Atrium_Review_Photos_OneArgs = {
  object: Atrium_Review_Photos_Insert_Input;
  on_conflict?: InputMaybe<Atrium_Review_Photos_On_Conflict>;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendInsert_Atrium_ReviewersArgs = {
  objects: Array<Atrium_Reviewers_Insert_Input>;
  on_conflict?: InputMaybe<Atrium_Reviewers_On_Conflict>;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendInsert_Atrium_Reviewers_OneArgs = {
  object: Atrium_Reviewers_Insert_Input;
  on_conflict?: InputMaybe<Atrium_Reviewers_On_Conflict>;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendInsert_Atrium_Tbl_9y9y3yt74loh2lewArgs = {
  objects: Array<Atrium_Tbl_9y9y3yt74loh2lew_Insert_Input>;
  on_conflict?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_On_Conflict>;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendInsert_Atrium_Tbl_9y9y3yt74loh2lew_OneArgs = {
  object: Atrium_Tbl_9y9y3yt74loh2lew_Insert_Input;
  on_conflict?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_On_Conflict>;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendUpdate_Atrium_Review_PhotosArgs = {
  _inc?: InputMaybe<Atrium_Review_Photos_Inc_Input>;
  _set?: InputMaybe<Atrium_Review_Photos_Set_Input>;
  where: Atrium_Review_Photos_Bool_Exp;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendUpdate_Atrium_Review_Photos_By_PkArgs = {
  _inc?: InputMaybe<Atrium_Review_Photos_Inc_Input>;
  _set?: InputMaybe<Atrium_Review_Photos_Set_Input>;
  pk_columns: Atrium_Review_Photos_Pk_Columns_Input;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendUpdate_Atrium_Review_Photos_ManyArgs = {
  updates: Array<Atrium_Review_Photos_Updates>;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendUpdate_Atrium_ReviewersArgs = {
  _set?: InputMaybe<Atrium_Reviewers_Set_Input>;
  where: Atrium_Reviewers_Bool_Exp;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendUpdate_Atrium_Reviewers_By_PkArgs = {
  _set?: InputMaybe<Atrium_Reviewers_Set_Input>;
  pk_columns: Atrium_Reviewers_Pk_Columns_Input;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendUpdate_Atrium_Reviewers_ManyArgs = {
  updates: Array<Atrium_Reviewers_Updates>;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendUpdate_Atrium_Tbl_9y9y3yt74loh2lewArgs = {
  _inc?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Inc_Input>;
  _set?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Set_Input>;
  where: Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendUpdate_Atrium_Tbl_9y9y3yt74loh2lew_By_PkArgs = {
  _inc?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Inc_Input>;
  _set?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Set_Input>;
  pk_columns: Atrium_Tbl_9y9y3yt74loh2lew_Pk_Columns_Input;
};


export type App_Grb0ts6wtxigdwbi_Mutation_FrontendUpdate_Atrium_Tbl_9y9y3yt74loh2lew_ManyArgs = {
  updates: Array<Atrium_Tbl_9y9y3yt74loh2lew_Updates>;
};

export type App_Grb0ts6wtxigdwbi_Query = {
  __typename?: 'app_grb0ts6wtxigdwbi_query';
  /** fetch data from the table: "atrium.review_photos" */
  atrium_review_photos: Array<Atrium_Review_Photos>;
  /** fetch aggregated fields from the table: "atrium.review_photos" */
  atrium_review_photos_aggregate: Atrium_Review_Photos_Aggregate;
  /** fetch data from the table: "atrium.review_photos" using primary key columns */
  atrium_review_photos_by_pk?: Maybe<Atrium_Review_Photos>;
  /** fetch data from the table: "atrium.reviewers" */
  atrium_reviewers: Array<Atrium_Reviewers>;
  /** fetch aggregated fields from the table: "atrium.reviewers" */
  atrium_reviewers_aggregate: Atrium_Reviewers_Aggregate;
  /** fetch data from the table: "atrium.reviewers" using primary key columns */
  atrium_reviewers_by_pk?: Maybe<Atrium_Reviewers>;
  /** fetch data from the table: "atrium.tbl_9y9y3yt74loh2lew" */
  atrium_tbl_9y9y3yt74loh2lew: Array<Atrium_Tbl_9y9y3yt74loh2lew>;
  /** fetch aggregated fields from the table: "atrium.tbl_9y9y3yt74loh2lew" */
  atrium_tbl_9y9y3yt74loh2lew_aggregate: Atrium_Tbl_9y9y3yt74loh2lew_Aggregate;
  /** fetch data from the table: "atrium.tbl_9y9y3yt74loh2lew" using primary key columns */
  atrium_tbl_9y9y3yt74loh2lew_by_pk?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew>;
};


export type App_Grb0ts6wtxigdwbi_QueryAtrium_Review_PhotosArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Review_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Review_Photos_Order_By>>;
  where?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_QueryAtrium_Review_Photos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Review_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Review_Photos_Order_By>>;
  where?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_QueryAtrium_Review_Photos_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type App_Grb0ts6wtxigdwbi_QueryAtrium_ReviewersArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Reviewers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Reviewers_Order_By>>;
  where?: InputMaybe<Atrium_Reviewers_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_QueryAtrium_Reviewers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Reviewers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Reviewers_Order_By>>;
  where?: InputMaybe<Atrium_Reviewers_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_QueryAtrium_Reviewers_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type App_Grb0ts6wtxigdwbi_QueryAtrium_Tbl_9y9y3yt74loh2lewArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Order_By>>;
  where?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_QueryAtrium_Tbl_9y9y3yt74loh2lew_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Order_By>>;
  where?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_QueryAtrium_Tbl_9y9y3yt74loh2lew_By_PkArgs = {
  _uid: Scalars['uuid'];
};

export type App_Grb0ts6wtxigdwbi_Subscription = {
  __typename?: 'app_grb0ts6wtxigdwbi_subscription';
  /** fetch data from the table: "atrium.review_photos" */
  atrium_review_photos: Array<Atrium_Review_Photos>;
  /** fetch aggregated fields from the table: "atrium.review_photos" */
  atrium_review_photos_aggregate: Atrium_Review_Photos_Aggregate;
  /** fetch data from the table: "atrium.review_photos" using primary key columns */
  atrium_review_photos_by_pk?: Maybe<Atrium_Review_Photos>;
  /** fetch data from the table in a streaming manner: "atrium.review_photos" */
  atrium_review_photos_stream: Array<Atrium_Review_Photos>;
  /** fetch data from the table: "atrium.reviewers" */
  atrium_reviewers: Array<Atrium_Reviewers>;
  /** fetch aggregated fields from the table: "atrium.reviewers" */
  atrium_reviewers_aggregate: Atrium_Reviewers_Aggregate;
  /** fetch data from the table: "atrium.reviewers" using primary key columns */
  atrium_reviewers_by_pk?: Maybe<Atrium_Reviewers>;
  /** fetch data from the table in a streaming manner: "atrium.reviewers" */
  atrium_reviewers_stream: Array<Atrium_Reviewers>;
  /** fetch data from the table: "atrium.tbl_9y9y3yt74loh2lew" */
  atrium_tbl_9y9y3yt74loh2lew: Array<Atrium_Tbl_9y9y3yt74loh2lew>;
  /** fetch aggregated fields from the table: "atrium.tbl_9y9y3yt74loh2lew" */
  atrium_tbl_9y9y3yt74loh2lew_aggregate: Atrium_Tbl_9y9y3yt74loh2lew_Aggregate;
  /** fetch data from the table: "atrium.tbl_9y9y3yt74loh2lew" using primary key columns */
  atrium_tbl_9y9y3yt74loh2lew_by_pk?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew>;
  /** fetch data from the table in a streaming manner: "atrium.tbl_9y9y3yt74loh2lew" */
  atrium_tbl_9y9y3yt74loh2lew_stream: Array<Atrium_Tbl_9y9y3yt74loh2lew>;
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Review_PhotosArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Review_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Review_Photos_Order_By>>;
  where?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Review_Photos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Review_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Review_Photos_Order_By>>;
  where?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Review_Photos_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Review_Photos_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Atrium_Review_Photos_Stream_Cursor_Input>>;
  where?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_ReviewersArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Reviewers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Reviewers_Order_By>>;
  where?: InputMaybe<Atrium_Reviewers_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Reviewers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Reviewers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Reviewers_Order_By>>;
  where?: InputMaybe<Atrium_Reviewers_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Reviewers_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Reviewers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Atrium_Reviewers_Stream_Cursor_Input>>;
  where?: InputMaybe<Atrium_Reviewers_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Tbl_9y9y3yt74loh2lewArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Order_By>>;
  where?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Tbl_9y9y3yt74loh2lew_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Order_By>>;
  where?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Tbl_9y9y3yt74loh2lew_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type App_Grb0ts6wtxigdwbi_SubscriptionAtrium_Tbl_9y9y3yt74loh2lew_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Stream_Cursor_Input>>;
  where?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
};

/** columns and relationships of "app.invite" */
export type App_Invite = {
  __typename?: 'app_invite';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  accepted: Scalars['Boolean'];
  email: Scalars['String'];
  id: Scalars['String'];
  /** An object relationship */
  inviter: App_User;
  inviter_id: Scalars['String'];
  last_reminder?: Maybe<Scalars['timestamptz']>;
  num_reminders: Scalars['Int'];
  promo_name?: Maybe<Scalars['String']>;
  role: Scalars['workspace_role'];
  status?: Maybe<Scalars['invite_status']>;
  /** An object relationship */
  workspace: App_Workspace;
  workspace_id: Scalars['String'];
};

/** aggregated selection of "app.invite" */
export type App_Invite_Aggregate = {
  __typename?: 'app_invite_aggregate';
  aggregate?: Maybe<App_Invite_Aggregate_Fields>;
  nodes: Array<App_Invite>;
};

export type App_Invite_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<App_Invite_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<App_Invite_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<App_Invite_Aggregate_Bool_Exp_Count>;
};

export type App_Invite_Aggregate_Bool_Exp_Bool_And = {
  arguments: App_Invite_Select_Column_App_Invite_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Invite_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_Invite_Aggregate_Bool_Exp_Bool_Or = {
  arguments: App_Invite_Select_Column_App_Invite_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Invite_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_Invite_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_Invite_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Invite_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app.invite" */
export type App_Invite_Aggregate_Fields = {
  __typename?: 'app_invite_aggregate_fields';
  avg?: Maybe<App_Invite_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<App_Invite_Max_Fields>;
  min?: Maybe<App_Invite_Min_Fields>;
  stddev?: Maybe<App_Invite_Stddev_Fields>;
  stddev_pop?: Maybe<App_Invite_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<App_Invite_Stddev_Samp_Fields>;
  sum?: Maybe<App_Invite_Sum_Fields>;
  var_pop?: Maybe<App_Invite_Var_Pop_Fields>;
  var_samp?: Maybe<App_Invite_Var_Samp_Fields>;
  variance?: Maybe<App_Invite_Variance_Fields>;
};


/** aggregate fields of "app.invite" */
export type App_Invite_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Invite_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app.invite" */
export type App_Invite_Aggregate_Order_By = {
  avg?: InputMaybe<App_Invite_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_Invite_Max_Order_By>;
  min?: InputMaybe<App_Invite_Min_Order_By>;
  stddev?: InputMaybe<App_Invite_Stddev_Order_By>;
  stddev_pop?: InputMaybe<App_Invite_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<App_Invite_Stddev_Samp_Order_By>;
  sum?: InputMaybe<App_Invite_Sum_Order_By>;
  var_pop?: InputMaybe<App_Invite_Var_Pop_Order_By>;
  var_samp?: InputMaybe<App_Invite_Var_Samp_Order_By>;
  variance?: InputMaybe<App_Invite_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "app.invite" */
export type App_Invite_Arr_Rel_Insert_Input = {
  data: Array<App_Invite_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Invite_On_Conflict>;
};

/** aggregate avg on columns */
export type App_Invite_Avg_Fields = {
  __typename?: 'app_invite_avg_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "app.invite" */
export type App_Invite_Avg_Order_By = {
  num_reminders?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "app.invite". All fields are combined with a logical 'AND'. */
export type App_Invite_Bool_Exp = {
  _and?: InputMaybe<Array<App_Invite_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<App_Invite_Bool_Exp>;
  _or?: InputMaybe<Array<App_Invite_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  accepted?: InputMaybe<Boolean_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  inviter?: InputMaybe<App_User_Bool_Exp>;
  inviter_id?: InputMaybe<String_Comparison_Exp>;
  last_reminder?: InputMaybe<Timestamptz_Comparison_Exp>;
  num_reminders?: InputMaybe<Int_Comparison_Exp>;
  promo_name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Workspace_Role_Comparison_Exp>;
  status?: InputMaybe<Invite_Status_Comparison_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.invite" */
export type App_Invite_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'invitate_id_uindex'
  /** unique or primary key constraint on columns "id" */
  | 'invite_pk';

/** input type for incrementing numeric columns in table "app.invite" */
export type App_Invite_Inc_Input = {
  num_reminders?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "app.invite" */
export type App_Invite_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  accepted?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  inviter?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  inviter_id?: InputMaybe<Scalars['String']>;
  last_reminder?: InputMaybe<Scalars['timestamptz']>;
  num_reminders?: InputMaybe<Scalars['Int']>;
  promo_name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['workspace_role']>;
  status?: InputMaybe<Scalars['invite_status']>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_Invite_Max_Fields = {
  __typename?: 'app_invite_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inviter_id?: Maybe<Scalars['String']>;
  last_reminder?: Maybe<Scalars['timestamptz']>;
  num_reminders?: Maybe<Scalars['Int']>;
  promo_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['workspace_role']>;
  status?: Maybe<Scalars['invite_status']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "app.invite" */
export type App_Invite_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inviter_id?: InputMaybe<Order_By>;
  last_reminder?: InputMaybe<Order_By>;
  num_reminders?: InputMaybe<Order_By>;
  promo_name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_Invite_Min_Fields = {
  __typename?: 'app_invite_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inviter_id?: Maybe<Scalars['String']>;
  last_reminder?: Maybe<Scalars['timestamptz']>;
  num_reminders?: Maybe<Scalars['Int']>;
  promo_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['workspace_role']>;
  status?: Maybe<Scalars['invite_status']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "app.invite" */
export type App_Invite_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inviter_id?: InputMaybe<Order_By>;
  last_reminder?: InputMaybe<Order_By>;
  num_reminders?: InputMaybe<Order_By>;
  promo_name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.invite" */
export type App_Invite_Mutation_Response = {
  __typename?: 'app_invite_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Invite>;
};

/** on_conflict condition type for table "app.invite" */
export type App_Invite_On_Conflict = {
  constraint: App_Invite_Constraint;
  update_columns?: Array<App_Invite_Update_Column>;
  where?: InputMaybe<App_Invite_Bool_Exp>;
};

/** Ordering options when selecting data from "app.invite". */
export type App_Invite_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  accepted?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inviter?: InputMaybe<App_User_Order_By>;
  inviter_id?: InputMaybe<Order_By>;
  last_reminder?: InputMaybe<Order_By>;
  num_reminders?: InputMaybe<Order_By>;
  promo_name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app.invite */
export type App_Invite_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "app.invite" */
export type App_Invite_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'accepted'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'inviter_id'
  /** column name */
  | 'last_reminder'
  /** column name */
  | 'num_reminders'
  /** column name */
  | 'promo_name'
  /** column name */
  | 'role'
  /** column name */
  | 'status'
  /** column name */
  | 'workspace_id';

/** select "app_invite_aggregate_bool_exp_bool_and_arguments_columns" columns of table "app.invite" */
export type App_Invite_Select_Column_App_Invite_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'accepted';

/** select "app_invite_aggregate_bool_exp_bool_or_arguments_columns" columns of table "app.invite" */
export type App_Invite_Select_Column_App_Invite_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'accepted';

/** input type for updating data in table "app.invite" */
export type App_Invite_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  accepted?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  inviter_id?: InputMaybe<Scalars['String']>;
  last_reminder?: InputMaybe<Scalars['timestamptz']>;
  num_reminders?: InputMaybe<Scalars['Int']>;
  promo_name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['workspace_role']>;
  status?: InputMaybe<Scalars['invite_status']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type App_Invite_Stddev_Fields = {
  __typename?: 'app_invite_stddev_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "app.invite" */
export type App_Invite_Stddev_Order_By = {
  num_reminders?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type App_Invite_Stddev_Pop_Fields = {
  __typename?: 'app_invite_stddev_pop_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "app.invite" */
export type App_Invite_Stddev_Pop_Order_By = {
  num_reminders?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type App_Invite_Stddev_Samp_Fields = {
  __typename?: 'app_invite_stddev_samp_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "app.invite" */
export type App_Invite_Stddev_Samp_Order_By = {
  num_reminders?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "app_invite" */
export type App_Invite_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Invite_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Invite_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  accepted?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  inviter_id?: InputMaybe<Scalars['String']>;
  last_reminder?: InputMaybe<Scalars['timestamptz']>;
  num_reminders?: InputMaybe<Scalars['Int']>;
  promo_name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['workspace_role']>;
  status?: InputMaybe<Scalars['invite_status']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type App_Invite_Sum_Fields = {
  __typename?: 'app_invite_sum_fields';
  num_reminders?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "app.invite" */
export type App_Invite_Sum_Order_By = {
  num_reminders?: InputMaybe<Order_By>;
};

/** update columns of table "app.invite" */
export type App_Invite_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'accepted'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'inviter_id'
  /** column name */
  | 'last_reminder'
  /** column name */
  | 'num_reminders'
  /** column name */
  | 'promo_name'
  /** column name */
  | 'role'
  /** column name */
  | 'status'
  /** column name */
  | 'workspace_id';

export type App_Invite_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<App_Invite_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Invite_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Invite_Bool_Exp;
};

/** aggregate var_pop on columns */
export type App_Invite_Var_Pop_Fields = {
  __typename?: 'app_invite_var_pop_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "app.invite" */
export type App_Invite_Var_Pop_Order_By = {
  num_reminders?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type App_Invite_Var_Samp_Fields = {
  __typename?: 'app_invite_var_samp_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "app.invite" */
export type App_Invite_Var_Samp_Order_By = {
  num_reminders?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type App_Invite_Variance_Fields = {
  __typename?: 'app_invite_variance_fields';
  num_reminders?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "app.invite" */
export type App_Invite_Variance_Order_By = {
  num_reminders?: InputMaybe<Order_By>;
};

/** columns and relationships of "app.thread" */
export type App_Thread = {
  __typename?: 'app_thread';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An object relationship */
  agent: Agent_Agent;
  agent_debug_mode: Scalars['Boolean'];
  /** ID for the Agent Associated with this thread */
  agent_id: Scalars['String'];
  /** An array relationship */
  chat_list: Array<App_Chat>;
  /** An aggregate relationship */
  chat_list_aggregate: App_Chat_Aggregate;
  id: Scalars['String'];
  initiator_id: Scalars['String'];
  initiator_uid?: Maybe<Scalars['uuid']>;
  installation_id: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  visibility: Scalars['thread_visibility'];
  /** An object relationship */
  workspace: App_Workspace;
  workspace_id: Scalars['String'];
};


/** columns and relationships of "app.thread" */
export type App_ThreadChat_ListArgs = {
  distinct_on?: InputMaybe<Array<App_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Chat_Order_By>>;
  where?: InputMaybe<App_Chat_Bool_Exp>;
};


/** columns and relationships of "app.thread" */
export type App_ThreadChat_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Chat_Order_By>>;
  where?: InputMaybe<App_Chat_Bool_Exp>;
};

/** aggregated selection of "app.thread" */
export type App_Thread_Aggregate = {
  __typename?: 'app_thread_aggregate';
  aggregate?: Maybe<App_Thread_Aggregate_Fields>;
  nodes: Array<App_Thread>;
};

export type App_Thread_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<App_Thread_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<App_Thread_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<App_Thread_Aggregate_Bool_Exp_Count>;
};

export type App_Thread_Aggregate_Bool_Exp_Bool_And = {
  arguments: App_Thread_Select_Column_App_Thread_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Thread_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_Thread_Aggregate_Bool_Exp_Bool_Or = {
  arguments: App_Thread_Select_Column_App_Thread_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Thread_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_Thread_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_Thread_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Thread_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app.thread" */
export type App_Thread_Aggregate_Fields = {
  __typename?: 'app_thread_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_Thread_Max_Fields>;
  min?: Maybe<App_Thread_Min_Fields>;
};


/** aggregate fields of "app.thread" */
export type App_Thread_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Thread_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app.thread" */
export type App_Thread_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_Thread_Max_Order_By>;
  min?: InputMaybe<App_Thread_Min_Order_By>;
};

/** input type for inserting array relation for remote table "app.thread" */
export type App_Thread_Arr_Rel_Insert_Input = {
  data: Array<App_Thread_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Thread_On_Conflict>;
};

/** Boolean expression to filter rows from the table "app.thread". All fields are combined with a logical 'AND'. */
export type App_Thread_Bool_Exp = {
  _and?: InputMaybe<Array<App_Thread_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<App_Thread_Bool_Exp>;
  _or?: InputMaybe<Array<App_Thread_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  agent?: InputMaybe<Agent_Agent_Bool_Exp>;
  agent_debug_mode?: InputMaybe<Boolean_Comparison_Exp>;
  agent_id?: InputMaybe<String_Comparison_Exp>;
  chat_list?: InputMaybe<App_Chat_Bool_Exp>;
  chat_list_aggregate?: InputMaybe<App_Chat_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  initiator_id?: InputMaybe<String_Comparison_Exp>;
  initiator_uid?: InputMaybe<Uuid_Comparison_Exp>;
  installation_id?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  visibility?: InputMaybe<Thread_Visibility_Comparison_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.thread" */
export type App_Thread_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'thread_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'thread_pk';

/** input type for inserting data into table "app.thread" */
export type App_Thread_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agent_debug_mode?: InputMaybe<Scalars['Boolean']>;
  /** ID for the Agent Associated with this thread */
  agent_id?: InputMaybe<Scalars['String']>;
  chat_list?: InputMaybe<App_Chat_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  initiator_id?: InputMaybe<Scalars['String']>;
  initiator_uid?: InputMaybe<Scalars['uuid']>;
  installation_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['thread_visibility']>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_Thread_Max_Fields = {
  __typename?: 'app_thread_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  /** ID for the Agent Associated with this thread */
  agent_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  initiator_id?: Maybe<Scalars['String']>;
  initiator_uid?: Maybe<Scalars['uuid']>;
  installation_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['thread_visibility']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "app.thread" */
export type App_Thread_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  /** ID for the Agent Associated with this thread */
  agent_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  initiator_uid?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_Thread_Min_Fields = {
  __typename?: 'app_thread_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  /** ID for the Agent Associated with this thread */
  agent_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  initiator_id?: Maybe<Scalars['String']>;
  initiator_uid?: Maybe<Scalars['uuid']>;
  installation_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['thread_visibility']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "app.thread" */
export type App_Thread_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  /** ID for the Agent Associated with this thread */
  agent_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  initiator_uid?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.thread" */
export type App_Thread_Mutation_Response = {
  __typename?: 'app_thread_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Thread>;
};

/** input type for inserting object relation for remote table "app.thread" */
export type App_Thread_Obj_Rel_Insert_Input = {
  data: App_Thread_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Thread_On_Conflict>;
};

/** on_conflict condition type for table "app.thread" */
export type App_Thread_On_Conflict = {
  constraint: App_Thread_Constraint;
  update_columns?: Array<App_Thread_Update_Column>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};

/** Ordering options when selecting data from "app.thread". */
export type App_Thread_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent?: InputMaybe<Agent_Agent_Order_By>;
  agent_debug_mode?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  chat_list_aggregate?: InputMaybe<App_Chat_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  initiator_uid?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app.thread */
export type App_Thread_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "app.thread" */
export type App_Thread_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_debug_mode'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'id'
  /** column name */
  | 'initiator_id'
  /** column name */
  | 'initiator_uid'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'title'
  /** column name */
  | 'type'
  /** column name */
  | 'visibility'
  /** column name */
  | 'workspace_id';

/** select "app_thread_aggregate_bool_exp_bool_and_arguments_columns" columns of table "app.thread" */
export type App_Thread_Select_Column_App_Thread_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'agent_debug_mode';

/** select "app_thread_aggregate_bool_exp_bool_or_arguments_columns" columns of table "app.thread" */
export type App_Thread_Select_Column_App_Thread_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'agent_debug_mode';

/** input type for updating data in table "app.thread" */
export type App_Thread_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_debug_mode?: InputMaybe<Scalars['Boolean']>;
  /** ID for the Agent Associated with this thread */
  agent_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  initiator_id?: InputMaybe<Scalars['String']>;
  initiator_uid?: InputMaybe<Scalars['uuid']>;
  installation_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['thread_visibility']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "app_thread" */
export type App_Thread_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Thread_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Thread_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_debug_mode?: InputMaybe<Scalars['Boolean']>;
  /** ID for the Agent Associated with this thread */
  agent_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  initiator_id?: InputMaybe<Scalars['String']>;
  initiator_uid?: InputMaybe<Scalars['uuid']>;
  installation_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['thread_visibility']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app.thread" */
export type App_Thread_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_debug_mode'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'id'
  /** column name */
  | 'initiator_id'
  /** column name */
  | 'initiator_uid'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'title'
  /** column name */
  | 'type'
  /** column name */
  | 'visibility'
  /** column name */
  | 'workspace_id';

export type App_Thread_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Thread_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Thread_Bool_Exp;
};

/** columns and relationships of "app.user" */
export type App_User = {
  __typename?: 'app_user';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  app_metadata?: Maybe<Scalars['jsonb']>;
  beta_access: Scalars['Boolean'];
  beta_access_code_id?: Maybe<Scalars['uuid']>;
  email: Scalars['String'];
  email_verified: Scalars['Boolean'];
  /** An array relationship */
  files: Array<App_File>;
  /** An aggregate relationship */
  files_aggregate: App_File_Aggregate;
  id: Scalars['String'];
  last_seen: Scalars['timestamptz'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** An array relationship */
  sessions: Array<Auth_Session>;
  /** An aggregate relationship */
  sessions_aggregate: Auth_Session_Aggregate;
  social_list?: Maybe<Scalars['jsonb']>;
  user_metadata?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  workspaceMembershipsByUserId: Array<App_Workspace_Membership>;
  /** An aggregate relationship */
  workspaceMembershipsByUserId_aggregate: App_Workspace_Membership_Aggregate;
  /** An array relationship */
  workspace_memberships: Array<App_Workspace_Membership>;
  /** An aggregate relationship */
  workspace_memberships_aggregate: App_Workspace_Membership_Aggregate;
};


/** columns and relationships of "app.user" */
export type App_UserApp_MetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "app.user" */
export type App_UserFilesArgs = {
  distinct_on?: InputMaybe<Array<App_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Order_By>>;
  where?: InputMaybe<App_File_Bool_Exp>;
};


/** columns and relationships of "app.user" */
export type App_UserFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Order_By>>;
  where?: InputMaybe<App_File_Bool_Exp>;
};


/** columns and relationships of "app.user" */
export type App_UserSessionsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


/** columns and relationships of "app.user" */
export type App_UserSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


/** columns and relationships of "app.user" */
export type App_UserSocial_ListArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "app.user" */
export type App_UserUser_MetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "app.user" */
export type App_UserWorkspaceMembershipsByUserIdArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


/** columns and relationships of "app.user" */
export type App_UserWorkspaceMembershipsByUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


/** columns and relationships of "app.user" */
export type App_UserWorkspace_MembershipsArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


/** columns and relationships of "app.user" */
export type App_UserWorkspace_Memberships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};

/** aggregated selection of "app.user" */
export type App_User_Aggregate = {
  __typename?: 'app_user_aggregate';
  aggregate?: Maybe<App_User_Aggregate_Fields>;
  nodes: Array<App_User>;
};

/** aggregate fields of "app.user" */
export type App_User_Aggregate_Fields = {
  __typename?: 'app_user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_User_Max_Fields>;
  min?: Maybe<App_User_Min_Fields>;
};


/** aggregate fields of "app.user" */
export type App_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App_User_Append_Input = {
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  social_list?: InputMaybe<Scalars['jsonb']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "app.user". All fields are combined with a logical 'AND'. */
export type App_User_Bool_Exp = {
  _and?: InputMaybe<Array<App_User_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<App_User_Bool_Exp>;
  _or?: InputMaybe<Array<App_User_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  app_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  beta_access?: InputMaybe<Boolean_Comparison_Exp>;
  beta_access_code_id?: InputMaybe<Uuid_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  files?: InputMaybe<App_File_Bool_Exp>;
  files_aggregate?: InputMaybe<App_File_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Auth_Session_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Bool_Exp>;
  social_list?: InputMaybe<Jsonb_Comparison_Exp>;
  user_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  workspaceMembershipsByUserId?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
  workspaceMembershipsByUserId_aggregate?: InputMaybe<App_Workspace_Membership_Aggregate_Bool_Exp>;
  workspace_memberships?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
  workspace_memberships_aggregate?: InputMaybe<App_Workspace_Membership_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "app.user" */
export type App_User_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'user__uid_uindex'
  /** unique or primary key constraint on columns "email" */
  | 'user_email_key'
  /** unique or primary key constraint on columns "email" */
  | 'user_email_uindex'
  /** unique or primary key constraint on columns "id" */
  | 'user_id_uindex'
  /** unique or primary key constraint on columns "_uid" */
  | 'user_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App_User_Delete_At_Path_Input = {
  app_metadata?: InputMaybe<Array<Scalars['String']>>;
  social_list?: InputMaybe<Array<Scalars['String']>>;
  user_metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App_User_Delete_Elem_Input = {
  app_metadata?: InputMaybe<Scalars['Int']>;
  social_list?: InputMaybe<Scalars['Int']>;
  user_metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App_User_Delete_Key_Input = {
  app_metadata?: InputMaybe<Scalars['String']>;
  social_list?: InputMaybe<Scalars['String']>;
  user_metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "app.user" */
export type App_User_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  beta_access?: InputMaybe<Scalars['Boolean']>;
  beta_access_code_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  files?: InputMaybe<App_File_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<Auth_Session_Arr_Rel_Insert_Input>;
  social_list?: InputMaybe<Scalars['jsonb']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
  workspaceMembershipsByUserId?: InputMaybe<App_Workspace_Membership_Arr_Rel_Insert_Input>;
  workspace_memberships?: InputMaybe<App_Workspace_Membership_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type App_User_Max_Fields = {
  __typename?: 'app_user_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  beta_access_code_id?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type App_User_Min_Fields = {
  __typename?: 'app_user_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  beta_access_code_id?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "app.user" */
export type App_User_Mutation_Response = {
  __typename?: 'app_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_User>;
};

/** input type for inserting object relation for remote table "app.user" */
export type App_User_Obj_Rel_Insert_Input = {
  data: App_User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_User_On_Conflict>;
};

/** on_conflict condition type for table "app.user" */
export type App_User_On_Conflict = {
  constraint: App_User_Constraint;
  update_columns?: Array<App_User_Update_Column>;
  where?: InputMaybe<App_User_Bool_Exp>;
};

/** Ordering options when selecting data from "app.user". */
export type App_User_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  app_metadata?: InputMaybe<Order_By>;
  beta_access?: InputMaybe<Order_By>;
  beta_access_code_id?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<App_File_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Order_By>;
  social_list?: InputMaybe<Order_By>;
  user_metadata?: InputMaybe<Order_By>;
  workspaceMembershipsByUserId_aggregate?: InputMaybe<App_Workspace_Membership_Aggregate_Order_By>;
  workspace_memberships_aggregate?: InputMaybe<App_Workspace_Membership_Aggregate_Order_By>;
};

/** primary key columns input for table: app.user */
export type App_User_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App_User_Prepend_Input = {
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  social_list?: InputMaybe<Scalars['jsonb']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "app.user" */
export type App_User_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'app_metadata'
  /** column name */
  | 'beta_access'
  /** column name */
  | 'beta_access_code_id'
  /** column name */
  | 'email'
  /** column name */
  | 'email_verified'
  /** column name */
  | 'id'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'name'
  /** column name */
  | 'picture'
  /** column name */
  | 'social_list'
  /** column name */
  | 'user_metadata';

/** input type for updating data in table "app.user" */
export type App_User_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  beta_access?: InputMaybe<Scalars['Boolean']>;
  beta_access_code_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  social_list?: InputMaybe<Scalars['jsonb']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "app_user" */
export type App_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_User_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  app_metadata?: InputMaybe<Scalars['jsonb']>;
  beta_access?: InputMaybe<Scalars['Boolean']>;
  beta_access_code_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  social_list?: InputMaybe<Scalars['jsonb']>;
  user_metadata?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "app.user" */
export type App_User_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'app_metadata'
  /** column name */
  | 'beta_access'
  /** column name */
  | 'beta_access_code_id'
  /** column name */
  | 'email'
  /** column name */
  | 'email_verified'
  /** column name */
  | 'id'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'name'
  /** column name */
  | 'picture'
  /** column name */
  | 'social_list'
  /** column name */
  | 'user_metadata';

export type App_User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<App_User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<App_User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<App_User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<App_User_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<App_User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_User_Bool_Exp;
};

/** columns and relationships of "app.workspace" */
export type App_Workspace = {
  __typename?: 'app_workspace';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An object relationship */
  agent?: Maybe<Agent_Agent>;
  /** An array relationship */
  agent_list: Array<Agent_Agent>;
  /** An aggregate relationship */
  agent_list_aggregate: Agent_Agent_Aggregate;
  agent_uid?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  api_key_list: Array<Auth_Api_Key>;
  /** An aggregate relationship */
  api_key_list_aggregate: Auth_Api_Key_Aggregate;
  /** An array relationship */
  dataset_list: Array<App_Dataset>;
  /** An aggregate relationship */
  dataset_list_aggregate: App_Dataset_Aggregate;
  /** An array relationship */
  file_list: Array<App_File>;
  /** An aggregate relationship */
  file_list_aggregate: App_File_Aggregate;
  id: Scalars['String'];
  image_key?: Maybe<Scalars['String']>;
  /** An array relationship */
  installation_list: Array<Agent_Installation>;
  /** An aggregate relationship */
  installation_list_aggregate: Agent_Installation_Aggregate;
  /** An array relationship */
  invite_list: Array<App_Invite>;
  /** An aggregate relationship */
  invite_list_aggregate: App_Invite_Aggregate;
  is_developer: Scalars['Boolean'];
  last_accessed?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  membership_list: Array<App_Workspace_Membership>;
  /** An aggregate relationship */
  membership_list_aggregate: App_Workspace_Membership_Aggregate;
  name: Scalars['String'];
  plan_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  session_list: Array<Auth_Session>;
  /** An aggregate relationship */
  session_list_aggregate: Auth_Session_Aggregate;
  stripe_account_id?: Maybe<Scalars['String']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  thread_list: Array<App_Thread>;
  /** An aggregate relationship */
  thread_list_aggregate: App_Thread_Aggregate;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceAgent_ListArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceAgent_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceApi_Key_ListArgs = {
  distinct_on?: InputMaybe<Array<Auth_Api_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Api_Key_Order_By>>;
  where?: InputMaybe<Auth_Api_Key_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceApi_Key_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Api_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Api_Key_Order_By>>;
  where?: InputMaybe<Auth_Api_Key_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceDataset_ListArgs = {
  distinct_on?: InputMaybe<Array<App_Dataset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Dataset_Order_By>>;
  where?: InputMaybe<App_Dataset_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceDataset_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Dataset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Dataset_Order_By>>;
  where?: InputMaybe<App_Dataset_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceFile_ListArgs = {
  distinct_on?: InputMaybe<Array<App_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Order_By>>;
  where?: InputMaybe<App_File_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceFile_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Order_By>>;
  where?: InputMaybe<App_File_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceInstallation_ListArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceInstallation_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceInvite_ListArgs = {
  distinct_on?: InputMaybe<Array<App_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Invite_Order_By>>;
  where?: InputMaybe<App_Invite_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceInvite_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Invite_Order_By>>;
  where?: InputMaybe<App_Invite_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceMembership_ListArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceMembership_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceSession_ListArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceSession_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceThread_ListArgs = {
  distinct_on?: InputMaybe<Array<App_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Thread_Order_By>>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};


/** columns and relationships of "app.workspace" */
export type App_WorkspaceThread_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Thread_Order_By>>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};

/** aggregated selection of "app.workspace" */
export type App_Workspace_Aggregate = {
  __typename?: 'app_workspace_aggregate';
  aggregate?: Maybe<App_Workspace_Aggregate_Fields>;
  nodes: Array<App_Workspace>;
};

export type App_Workspace_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<App_Workspace_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<App_Workspace_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<App_Workspace_Aggregate_Bool_Exp_Count>;
};

export type App_Workspace_Aggregate_Bool_Exp_Bool_And = {
  arguments: App_Workspace_Select_Column_App_Workspace_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Workspace_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_Workspace_Aggregate_Bool_Exp_Bool_Or = {
  arguments: App_Workspace_Select_Column_App_Workspace_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Workspace_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type App_Workspace_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_Workspace_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Workspace_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app.workspace" */
export type App_Workspace_Aggregate_Fields = {
  __typename?: 'app_workspace_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_Workspace_Max_Fields>;
  min?: Maybe<App_Workspace_Min_Fields>;
};


/** aggregate fields of "app.workspace" */
export type App_Workspace_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Workspace_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app.workspace" */
export type App_Workspace_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_Workspace_Max_Order_By>;
  min?: InputMaybe<App_Workspace_Min_Order_By>;
};

/** input type for inserting array relation for remote table "app.workspace" */
export type App_Workspace_Arr_Rel_Insert_Input = {
  data: Array<App_Workspace_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Workspace_On_Conflict>;
};

/** Boolean expression to filter rows from the table "app.workspace". All fields are combined with a logical 'AND'. */
export type App_Workspace_Bool_Exp = {
  _and?: InputMaybe<Array<App_Workspace_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<App_Workspace_Bool_Exp>;
  _or?: InputMaybe<Array<App_Workspace_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  agent?: InputMaybe<Agent_Agent_Bool_Exp>;
  agent_list?: InputMaybe<Agent_Agent_Bool_Exp>;
  agent_list_aggregate?: InputMaybe<Agent_Agent_Aggregate_Bool_Exp>;
  agent_uid?: InputMaybe<Uuid_Comparison_Exp>;
  api_key_list?: InputMaybe<Auth_Api_Key_Bool_Exp>;
  api_key_list_aggregate?: InputMaybe<Auth_Api_Key_Aggregate_Bool_Exp>;
  dataset_list?: InputMaybe<App_Dataset_Bool_Exp>;
  dataset_list_aggregate?: InputMaybe<App_Dataset_Aggregate_Bool_Exp>;
  file_list?: InputMaybe<App_File_Bool_Exp>;
  file_list_aggregate?: InputMaybe<App_File_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image_key?: InputMaybe<String_Comparison_Exp>;
  installation_list?: InputMaybe<Agent_Installation_Bool_Exp>;
  installation_list_aggregate?: InputMaybe<Agent_Installation_Aggregate_Bool_Exp>;
  invite_list?: InputMaybe<App_Invite_Bool_Exp>;
  invite_list_aggregate?: InputMaybe<App_Invite_Aggregate_Bool_Exp>;
  is_developer?: InputMaybe<Boolean_Comparison_Exp>;
  last_accessed?: InputMaybe<Timestamptz_Comparison_Exp>;
  membership_list?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
  membership_list_aggregate?: InputMaybe<App_Workspace_Membership_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  plan_id?: InputMaybe<Uuid_Comparison_Exp>;
  session_list?: InputMaybe<Auth_Session_Bool_Exp>;
  session_list_aggregate?: InputMaybe<Auth_Session_Aggregate_Bool_Exp>;
  stripe_account_id?: InputMaybe<String_Comparison_Exp>;
  stripe_customer_id?: InputMaybe<String_Comparison_Exp>;
  thread_list?: InputMaybe<App_Thread_Bool_Exp>;
  thread_list_aggregate?: InputMaybe<App_Thread_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "app.workspace" */
export type App_Workspace_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'unique_uid'
  /** unique or primary key constraint on columns "_uid" */
  | 'workspace__uid_uindex'
  /** unique or primary key constraint on columns "id" */
  | 'workspace_id_uindex'
  /** unique or primary key constraint on columns "id" */
  | 'workspace_pk';

/** input type for inserting data into table "app.workspace" */
export type App_Workspace_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agent_list?: InputMaybe<Agent_Agent_Arr_Rel_Insert_Input>;
  agent_uid?: InputMaybe<Scalars['uuid']>;
  api_key_list?: InputMaybe<Auth_Api_Key_Arr_Rel_Insert_Input>;
  dataset_list?: InputMaybe<App_Dataset_Arr_Rel_Insert_Input>;
  file_list?: InputMaybe<App_File_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  image_key?: InputMaybe<Scalars['String']>;
  installation_list?: InputMaybe<Agent_Installation_Arr_Rel_Insert_Input>;
  invite_list?: InputMaybe<App_Invite_Arr_Rel_Insert_Input>;
  is_developer?: InputMaybe<Scalars['Boolean']>;
  last_accessed?: InputMaybe<Scalars['timestamptz']>;
  membership_list?: InputMaybe<App_Workspace_Membership_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  plan_id?: InputMaybe<Scalars['uuid']>;
  session_list?: InputMaybe<Auth_Session_Arr_Rel_Insert_Input>;
  stripe_account_id?: InputMaybe<Scalars['String']>;
  stripe_customer_id?: InputMaybe<Scalars['String']>;
  thread_list?: InputMaybe<App_Thread_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type App_Workspace_Max_Fields = {
  __typename?: 'app_workspace_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_uid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['String']>;
  image_key?: Maybe<Scalars['String']>;
  last_accessed?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  plan_id?: Maybe<Scalars['uuid']>;
  stripe_account_id?: Maybe<Scalars['String']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "app.workspace" */
export type App_Workspace_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_uid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_key?: InputMaybe<Order_By>;
  last_accessed?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  stripe_account_id?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "app.workspace_membership" */
export type App_Workspace_Membership = {
  __typename?: 'app_workspace_membership';
  _cr: Scalars['timestamp'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamp'];
  id: Scalars['String'];
  role: Scalars['workspace_role'];
  /** An object relationship */
  user: App_User;
  user_id: Scalars['String'];
  user_uid: Scalars['uuid'];
  /** An object relationship */
  workspace: App_Workspace;
  workspace_id: Scalars['String'];
};

/** aggregated selection of "app.workspace_membership" */
export type App_Workspace_Membership_Aggregate = {
  __typename?: 'app_workspace_membership_aggregate';
  aggregate?: Maybe<App_Workspace_Membership_Aggregate_Fields>;
  nodes: Array<App_Workspace_Membership>;
};

export type App_Workspace_Membership_Aggregate_Bool_Exp = {
  count?: InputMaybe<App_Workspace_Membership_Aggregate_Bool_Exp_Count>;
};

export type App_Workspace_Membership_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app.workspace_membership" */
export type App_Workspace_Membership_Aggregate_Fields = {
  __typename?: 'app_workspace_membership_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_Workspace_Membership_Max_Fields>;
  min?: Maybe<App_Workspace_Membership_Min_Fields>;
};


/** aggregate fields of "app.workspace_membership" */
export type App_Workspace_Membership_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app.workspace_membership" */
export type App_Workspace_Membership_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<App_Workspace_Membership_Max_Order_By>;
  min?: InputMaybe<App_Workspace_Membership_Min_Order_By>;
};

/** input type for inserting array relation for remote table "app.workspace_membership" */
export type App_Workspace_Membership_Arr_Rel_Insert_Input = {
  data: Array<App_Workspace_Membership_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Workspace_Membership_On_Conflict>;
};

/** Boolean expression to filter rows from the table "app.workspace_membership". All fields are combined with a logical 'AND'. */
export type App_Workspace_Membership_Bool_Exp = {
  _and?: InputMaybe<Array<App_Workspace_Membership_Bool_Exp>>;
  _cr?: InputMaybe<Timestamp_Comparison_Exp>;
  _not?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
  _or?: InputMaybe<Array<App_Workspace_Membership_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Workspace_Role_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.workspace_membership" */
export type App_Workspace_Membership_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'workspace_membership_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'workspace_membership_pk'
  /** unique or primary key constraint on columns "user_id", "workspace_id" */
  | 'workspace_membership_user_workspace_idx';

/** input type for inserting data into table "app.workspace_membership" */
export type App_Workspace_Membership_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['workspace_role']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type App_Workspace_Membership_Max_Fields = {
  __typename?: 'app_workspace_membership_max_fields';
  _cr?: Maybe<Scalars['timestamp']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['workspace_role']>;
  user_id?: Maybe<Scalars['String']>;
  user_uid?: Maybe<Scalars['uuid']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "app.workspace_membership" */
export type App_Workspace_Membership_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_Workspace_Membership_Min_Fields = {
  __typename?: 'app_workspace_membership_min_fields';
  _cr?: Maybe<Scalars['timestamp']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['workspace_role']>;
  user_id?: Maybe<Scalars['String']>;
  user_uid?: Maybe<Scalars['uuid']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "app.workspace_membership" */
export type App_Workspace_Membership_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.workspace_membership" */
export type App_Workspace_Membership_Mutation_Response = {
  __typename?: 'app_workspace_membership_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Workspace_Membership>;
};

/** on_conflict condition type for table "app.workspace_membership" */
export type App_Workspace_Membership_On_Conflict = {
  constraint: App_Workspace_Membership_Constraint;
  update_columns?: Array<App_Workspace_Membership_Update_Column>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};

/** Ordering options when selecting data from "app.workspace_membership". */
export type App_Workspace_Membership_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_uid?: InputMaybe<Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app.workspace_membership */
export type App_Workspace_Membership_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "app.workspace_membership" */
export type App_Workspace_Membership_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'user_id'
  /** column name */
  | 'user_uid'
  /** column name */
  | 'workspace_id';

/** input type for updating data in table "app.workspace_membership" */
export type App_Workspace_Membership_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['workspace_role']>;
  user_id?: InputMaybe<Scalars['String']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "app_workspace_membership" */
export type App_Workspace_Membership_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Workspace_Membership_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Workspace_Membership_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamp']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['workspace_role']>;
  user_id?: InputMaybe<Scalars['String']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app.workspace_membership" */
export type App_Workspace_Membership_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'user_id'
  /** column name */
  | 'user_uid'
  /** column name */
  | 'workspace_id';

export type App_Workspace_Membership_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Workspace_Membership_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Workspace_Membership_Bool_Exp;
};

/** aggregate min on columns */
export type App_Workspace_Min_Fields = {
  __typename?: 'app_workspace_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_uid?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['String']>;
  image_key?: Maybe<Scalars['String']>;
  last_accessed?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  plan_id?: Maybe<Scalars['uuid']>;
  stripe_account_id?: Maybe<Scalars['String']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "app.workspace" */
export type App_Workspace_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_uid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_key?: InputMaybe<Order_By>;
  last_accessed?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  stripe_account_id?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.workspace" */
export type App_Workspace_Mutation_Response = {
  __typename?: 'app_workspace_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Workspace>;
};

/** input type for inserting object relation for remote table "app.workspace" */
export type App_Workspace_Obj_Rel_Insert_Input = {
  data: App_Workspace_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<App_Workspace_On_Conflict>;
};

/** on_conflict condition type for table "app.workspace" */
export type App_Workspace_On_Conflict = {
  constraint: App_Workspace_Constraint;
  update_columns?: Array<App_Workspace_Update_Column>;
  where?: InputMaybe<App_Workspace_Bool_Exp>;
};

/** Ordering options when selecting data from "app.workspace". */
export type App_Workspace_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent?: InputMaybe<Agent_Agent_Order_By>;
  agent_list_aggregate?: InputMaybe<Agent_Agent_Aggregate_Order_By>;
  agent_uid?: InputMaybe<Order_By>;
  api_key_list_aggregate?: InputMaybe<Auth_Api_Key_Aggregate_Order_By>;
  dataset_list_aggregate?: InputMaybe<App_Dataset_Aggregate_Order_By>;
  file_list_aggregate?: InputMaybe<App_File_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image_key?: InputMaybe<Order_By>;
  installation_list_aggregate?: InputMaybe<Agent_Installation_Aggregate_Order_By>;
  invite_list_aggregate?: InputMaybe<App_Invite_Aggregate_Order_By>;
  is_developer?: InputMaybe<Order_By>;
  last_accessed?: InputMaybe<Order_By>;
  membership_list_aggregate?: InputMaybe<App_Workspace_Membership_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  session_list_aggregate?: InputMaybe<Auth_Session_Aggregate_Order_By>;
  stripe_account_id?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
  thread_list_aggregate?: InputMaybe<App_Thread_Aggregate_Order_By>;
};

/** primary key columns input for table: app.workspace */
export type App_Workspace_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "app.workspace" */
export type App_Workspace_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_uid'
  /** column name */
  | 'id'
  /** column name */
  | 'image_key'
  /** column name */
  | 'is_developer'
  /** column name */
  | 'last_accessed'
  /** column name */
  | 'name'
  /** column name */
  | 'plan_id'
  /** column name */
  | 'stripe_account_id'
  /** column name */
  | 'stripe_customer_id';

/** select "app_workspace_aggregate_bool_exp_bool_and_arguments_columns" columns of table "app.workspace" */
export type App_Workspace_Select_Column_App_Workspace_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'is_developer';

/** select "app_workspace_aggregate_bool_exp_bool_or_arguments_columns" columns of table "app.workspace" */
export type App_Workspace_Select_Column_App_Workspace_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'is_developer';

/** input type for updating data in table "app.workspace" */
export type App_Workspace_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_uid?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
  image_key?: InputMaybe<Scalars['String']>;
  is_developer?: InputMaybe<Scalars['Boolean']>;
  last_accessed?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  plan_id?: InputMaybe<Scalars['uuid']>;
  stripe_account_id?: InputMaybe<Scalars['String']>;
  stripe_customer_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "app_workspace" */
export type App_Workspace_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Workspace_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Workspace_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  agent_uid?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
  image_key?: InputMaybe<Scalars['String']>;
  is_developer?: InputMaybe<Scalars['Boolean']>;
  last_accessed?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  plan_id?: InputMaybe<Scalars['uuid']>;
  stripe_account_id?: InputMaybe<Scalars['String']>;
  stripe_customer_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "app.workspace" */
export type App_Workspace_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'agent_uid'
  /** column name */
  | 'id'
  /** column name */
  | 'image_key'
  /** column name */
  | 'is_developer'
  /** column name */
  | 'last_accessed'
  /** column name */
  | 'name'
  /** column name */
  | 'plan_id'
  /** column name */
  | 'stripe_account_id'
  /** column name */
  | 'stripe_customer_id';

export type App_Workspace_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Workspace_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Workspace_Bool_Exp;
};

/** columns and relationships of "atrium.review_photos" */
export type Atrium_Review_Photos = {
  __typename?: 'atrium_review_photos';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  photo_url: Scalars['String'];
  review_uid: Scalars['uuid'];
  sort_order?: Maybe<Scalars['Int']>;
  /** An object relationship */
  tbl_9y9y3yt74loh2lew: Atrium_Tbl_9y9y3yt74loh2lew;
};

/** aggregated selection of "atrium.review_photos" */
export type Atrium_Review_Photos_Aggregate = {
  __typename?: 'atrium_review_photos_aggregate';
  aggregate?: Maybe<Atrium_Review_Photos_Aggregate_Fields>;
  nodes: Array<Atrium_Review_Photos>;
};

export type Atrium_Review_Photos_Aggregate_Bool_Exp = {
  count?: InputMaybe<Atrium_Review_Photos_Aggregate_Bool_Exp_Count>;
};

export type Atrium_Review_Photos_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Atrium_Review_Photos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "atrium.review_photos" */
export type Atrium_Review_Photos_Aggregate_Fields = {
  __typename?: 'atrium_review_photos_aggregate_fields';
  avg?: Maybe<Atrium_Review_Photos_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Atrium_Review_Photos_Max_Fields>;
  min?: Maybe<Atrium_Review_Photos_Min_Fields>;
  stddev?: Maybe<Atrium_Review_Photos_Stddev_Fields>;
  stddev_pop?: Maybe<Atrium_Review_Photos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Atrium_Review_Photos_Stddev_Samp_Fields>;
  sum?: Maybe<Atrium_Review_Photos_Sum_Fields>;
  var_pop?: Maybe<Atrium_Review_Photos_Var_Pop_Fields>;
  var_samp?: Maybe<Atrium_Review_Photos_Var_Samp_Fields>;
  variance?: Maybe<Atrium_Review_Photos_Variance_Fields>;
};


/** aggregate fields of "atrium.review_photos" */
export type Atrium_Review_Photos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Atrium_Review_Photos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "atrium.review_photos" */
export type Atrium_Review_Photos_Aggregate_Order_By = {
  avg?: InputMaybe<Atrium_Review_Photos_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Atrium_Review_Photos_Max_Order_By>;
  min?: InputMaybe<Atrium_Review_Photos_Min_Order_By>;
  stddev?: InputMaybe<Atrium_Review_Photos_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Atrium_Review_Photos_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Atrium_Review_Photos_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Atrium_Review_Photos_Sum_Order_By>;
  var_pop?: InputMaybe<Atrium_Review_Photos_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Atrium_Review_Photos_Var_Samp_Order_By>;
  variance?: InputMaybe<Atrium_Review_Photos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "atrium.review_photos" */
export type Atrium_Review_Photos_Arr_Rel_Insert_Input = {
  data: Array<Atrium_Review_Photos_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Atrium_Review_Photos_On_Conflict>;
};

/** aggregate avg on columns */
export type Atrium_Review_Photos_Avg_Fields = {
  __typename?: 'atrium_review_photos_avg_fields';
  sort_order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Avg_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "atrium.review_photos". All fields are combined with a logical 'AND'. */
export type Atrium_Review_Photos_Bool_Exp = {
  _and?: InputMaybe<Array<Atrium_Review_Photos_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
  _or?: InputMaybe<Array<Atrium_Review_Photos_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  photo_url?: InputMaybe<String_Comparison_Exp>;
  review_uid?: InputMaybe<Uuid_Comparison_Exp>;
  sort_order?: InputMaybe<Int_Comparison_Exp>;
  tbl_9y9y3yt74loh2lew?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
};

/** unique or primary key constraints on table "atrium.review_photos" */
export type Atrium_Review_Photos_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'review_photos_pkey';

/** input type for incrementing numeric columns in table "atrium.review_photos" */
export type Atrium_Review_Photos_Inc_Input = {
  sort_order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "atrium.review_photos" */
export type Atrium_Review_Photos_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  photo_url?: InputMaybe<Scalars['String']>;
  review_uid?: InputMaybe<Scalars['uuid']>;
  sort_order?: InputMaybe<Scalars['Int']>;
  tbl_9y9y3yt74loh2lew?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Atrium_Review_Photos_Max_Fields = {
  __typename?: 'atrium_review_photos_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  photo_url?: Maybe<Scalars['String']>;
  review_uid?: Maybe<Scalars['uuid']>;
  sort_order?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  photo_url?: InputMaybe<Order_By>;
  review_uid?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Atrium_Review_Photos_Min_Fields = {
  __typename?: 'atrium_review_photos_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  photo_url?: Maybe<Scalars['String']>;
  review_uid?: Maybe<Scalars['uuid']>;
  sort_order?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  photo_url?: InputMaybe<Order_By>;
  review_uid?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "atrium.review_photos" */
export type Atrium_Review_Photos_Mutation_Response = {
  __typename?: 'atrium_review_photos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Atrium_Review_Photos>;
};

/** on_conflict condition type for table "atrium.review_photos" */
export type Atrium_Review_Photos_On_Conflict = {
  constraint: Atrium_Review_Photos_Constraint;
  update_columns?: Array<Atrium_Review_Photos_Update_Column>;
  where?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
};

/** Ordering options when selecting data from "atrium.review_photos". */
export type Atrium_Review_Photos_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  photo_url?: InputMaybe<Order_By>;
  review_uid?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  tbl_9y9y3yt74loh2lew?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Order_By>;
};

/** primary key columns input for table: atrium.review_photos */
export type Atrium_Review_Photos_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'photo_url'
  /** column name */
  | 'review_uid'
  /** column name */
  | 'sort_order';

/** input type for updating data in table "atrium.review_photos" */
export type Atrium_Review_Photos_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  photo_url?: InputMaybe<Scalars['String']>;
  review_uid?: InputMaybe<Scalars['uuid']>;
  sort_order?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Atrium_Review_Photos_Stddev_Fields = {
  __typename?: 'atrium_review_photos_stddev_fields';
  sort_order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Stddev_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Atrium_Review_Photos_Stddev_Pop_Fields = {
  __typename?: 'atrium_review_photos_stddev_pop_fields';
  sort_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Stddev_Pop_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Atrium_Review_Photos_Stddev_Samp_Fields = {
  __typename?: 'atrium_review_photos_stddev_samp_fields';
  sort_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Stddev_Samp_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "atrium_review_photos" */
export type Atrium_Review_Photos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Atrium_Review_Photos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Atrium_Review_Photos_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  photo_url?: InputMaybe<Scalars['String']>;
  review_uid?: InputMaybe<Scalars['uuid']>;
  sort_order?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Atrium_Review_Photos_Sum_Fields = {
  __typename?: 'atrium_review_photos_sum_fields';
  sort_order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Sum_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** update columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'photo_url'
  /** column name */
  | 'review_uid'
  /** column name */
  | 'sort_order';

export type Atrium_Review_Photos_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Atrium_Review_Photos_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Atrium_Review_Photos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Atrium_Review_Photos_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Atrium_Review_Photos_Var_Pop_Fields = {
  __typename?: 'atrium_review_photos_var_pop_fields';
  sort_order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Var_Pop_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Atrium_Review_Photos_Var_Samp_Fields = {
  __typename?: 'atrium_review_photos_var_samp_fields';
  sort_order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Var_Samp_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Atrium_Review_Photos_Variance_Fields = {
  __typename?: 'atrium_review_photos_variance_fields';
  sort_order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "atrium.review_photos" */
export type Atrium_Review_Photos_Variance_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** columns and relationships of "atrium.reviewers" */
export type Atrium_Reviewers = {
  __typename?: 'atrium_reviewers';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An array relationship */
  tbl_9y9y3yt74loh2lews: Array<Atrium_Tbl_9y9y3yt74loh2lew>;
  /** An aggregate relationship */
  tbl_9y9y3yt74loh2lews_aggregate: Atrium_Tbl_9y9y3yt74loh2lew_Aggregate;
  user_avatar_url?: Maybe<Scalars['String']>;
  user_name: Scalars['String'];
};


/** columns and relationships of "atrium.reviewers" */
export type Atrium_ReviewersTbl_9y9y3yt74loh2lewsArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Order_By>>;
  where?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
};


/** columns and relationships of "atrium.reviewers" */
export type Atrium_ReviewersTbl_9y9y3yt74loh2lews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Order_By>>;
  where?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
};

/** aggregated selection of "atrium.reviewers" */
export type Atrium_Reviewers_Aggregate = {
  __typename?: 'atrium_reviewers_aggregate';
  aggregate?: Maybe<Atrium_Reviewers_Aggregate_Fields>;
  nodes: Array<Atrium_Reviewers>;
};

/** aggregate fields of "atrium.reviewers" */
export type Atrium_Reviewers_Aggregate_Fields = {
  __typename?: 'atrium_reviewers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Atrium_Reviewers_Max_Fields>;
  min?: Maybe<Atrium_Reviewers_Min_Fields>;
};


/** aggregate fields of "atrium.reviewers" */
export type Atrium_Reviewers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Atrium_Reviewers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "atrium.reviewers". All fields are combined with a logical 'AND'. */
export type Atrium_Reviewers_Bool_Exp = {
  _and?: InputMaybe<Array<Atrium_Reviewers_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Atrium_Reviewers_Bool_Exp>;
  _or?: InputMaybe<Array<Atrium_Reviewers_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  tbl_9y9y3yt74loh2lews?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
  tbl_9y9y3yt74loh2lews_aggregate?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Aggregate_Bool_Exp>;
  user_avatar_url?: InputMaybe<String_Comparison_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "atrium.reviewers" */
export type Atrium_Reviewers_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'reviewers_pkey';

/** input type for inserting data into table "atrium.reviewers" */
export type Atrium_Reviewers_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  tbl_9y9y3yt74loh2lews?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Arr_Rel_Insert_Input>;
  user_avatar_url?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Atrium_Reviewers_Max_Fields = {
  __typename?: 'atrium_reviewers_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  user_avatar_url?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Atrium_Reviewers_Min_Fields = {
  __typename?: 'atrium_reviewers_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  user_avatar_url?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "atrium.reviewers" */
export type Atrium_Reviewers_Mutation_Response = {
  __typename?: 'atrium_reviewers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Atrium_Reviewers>;
};

/** input type for inserting object relation for remote table "atrium.reviewers" */
export type Atrium_Reviewers_Obj_Rel_Insert_Input = {
  data: Atrium_Reviewers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Atrium_Reviewers_On_Conflict>;
};

/** on_conflict condition type for table "atrium.reviewers" */
export type Atrium_Reviewers_On_Conflict = {
  constraint: Atrium_Reviewers_Constraint;
  update_columns?: Array<Atrium_Reviewers_Update_Column>;
  where?: InputMaybe<Atrium_Reviewers_Bool_Exp>;
};

/** Ordering options when selecting data from "atrium.reviewers". */
export type Atrium_Reviewers_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  tbl_9y9y3yt74loh2lews_aggregate?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Aggregate_Order_By>;
  user_avatar_url?: InputMaybe<Order_By>;
  user_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: atrium.reviewers */
export type Atrium_Reviewers_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "atrium.reviewers" */
export type Atrium_Reviewers_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'user_avatar_url'
  /** column name */
  | 'user_name';

/** input type for updating data in table "atrium.reviewers" */
export type Atrium_Reviewers_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  user_avatar_url?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "atrium_reviewers" */
export type Atrium_Reviewers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Atrium_Reviewers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Atrium_Reviewers_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  user_avatar_url?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "atrium.reviewers" */
export type Atrium_Reviewers_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'user_avatar_url'
  /** column name */
  | 'user_name';

export type Atrium_Reviewers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Atrium_Reviewers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Atrium_Reviewers_Bool_Exp;
};

/** columns and relationships of "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  platform: Scalars['String'];
  review_body: Scalars['String'];
  /** An array relationship */
  review_photos: Array<Atrium_Review_Photos>;
  /** An aggregate relationship */
  review_photos_aggregate: Atrium_Review_Photos_Aggregate;
  review_timestamp: Scalars['timestamptz'];
  /** An object relationship */
  reviewer: Atrium_Reviewers;
  reviewer_uid: Scalars['uuid'];
  sentiment_label?: Maybe<Scalars['String']>;
  sentiment_score?: Maybe<Scalars['numeric']>;
  star_rating: Scalars['Int'];
  workspace_id: Scalars['uuid'];
};


/** columns and relationships of "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lewReview_PhotosArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Review_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Review_Photos_Order_By>>;
  where?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
};


/** columns and relationships of "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lewReview_Photos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atrium_Review_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Atrium_Review_Photos_Order_By>>;
  where?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
};

/** aggregated selection of "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Aggregate = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_aggregate';
  aggregate?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Aggregate_Fields>;
  nodes: Array<Atrium_Tbl_9y9y3yt74loh2lew>;
};

export type Atrium_Tbl_9y9y3yt74loh2lew_Aggregate_Bool_Exp = {
  count?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Aggregate_Bool_Exp_Count>;
};

export type Atrium_Tbl_9y9y3yt74loh2lew_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Aggregate_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_aggregate_fields';
  avg?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Max_Fields>;
  min?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Min_Fields>;
  stddev?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Fields>;
  stddev_pop?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Samp_Fields>;
  sum?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Sum_Fields>;
  var_pop?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Var_Pop_Fields>;
  var_samp?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Var_Samp_Fields>;
  variance?: Maybe<Atrium_Tbl_9y9y3yt74loh2lew_Variance_Fields>;
};


/** aggregate fields of "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Aggregate_Order_By = {
  avg?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Max_Order_By>;
  min?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Min_Order_By>;
  stddev?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Sum_Order_By>;
  var_pop?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Var_Samp_Order_By>;
  variance?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Arr_Rel_Insert_Input = {
  data: Array<Atrium_Tbl_9y9y3yt74loh2lew_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_On_Conflict>;
};

/** aggregate avg on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Avg_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_avg_fields';
  sentiment_score?: Maybe<Scalars['Float']>;
  star_rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Avg_Order_By = {
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "atrium.tbl_9y9y3yt74loh2lew". All fields are combined with a logical 'AND'. */
export type Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp = {
  _and?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
  _or?: InputMaybe<Array<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  platform?: InputMaybe<String_Comparison_Exp>;
  review_body?: InputMaybe<String_Comparison_Exp>;
  review_photos?: InputMaybe<Atrium_Review_Photos_Bool_Exp>;
  review_photos_aggregate?: InputMaybe<Atrium_Review_Photos_Aggregate_Bool_Exp>;
  review_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  reviewer?: InputMaybe<Atrium_Reviewers_Bool_Exp>;
  reviewer_uid?: InputMaybe<Uuid_Comparison_Exp>;
  sentiment_label?: InputMaybe<String_Comparison_Exp>;
  sentiment_score?: InputMaybe<Numeric_Comparison_Exp>;
  star_rating?: InputMaybe<Int_Comparison_Exp>;
  workspace_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'tbl_9y9y3yt74loh2lew__pk';

/** input type for incrementing numeric columns in table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Inc_Input = {
  sentiment_score?: InputMaybe<Scalars['numeric']>;
  star_rating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  platform?: InputMaybe<Scalars['String']>;
  review_body?: InputMaybe<Scalars['String']>;
  review_photos?: InputMaybe<Atrium_Review_Photos_Arr_Rel_Insert_Input>;
  review_timestamp?: InputMaybe<Scalars['timestamptz']>;
  reviewer?: InputMaybe<Atrium_Reviewers_Obj_Rel_Insert_Input>;
  reviewer_uid?: InputMaybe<Scalars['uuid']>;
  sentiment_label?: InputMaybe<Scalars['String']>;
  sentiment_score?: InputMaybe<Scalars['numeric']>;
  star_rating?: InputMaybe<Scalars['Int']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Max_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  platform?: Maybe<Scalars['String']>;
  review_body?: Maybe<Scalars['String']>;
  review_timestamp?: Maybe<Scalars['timestamptz']>;
  reviewer_uid?: Maybe<Scalars['uuid']>;
  sentiment_label?: Maybe<Scalars['String']>;
  sentiment_score?: Maybe<Scalars['numeric']>;
  star_rating?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  review_body?: InputMaybe<Order_By>;
  review_timestamp?: InputMaybe<Order_By>;
  reviewer_uid?: InputMaybe<Order_By>;
  sentiment_label?: InputMaybe<Order_By>;
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Min_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  platform?: Maybe<Scalars['String']>;
  review_body?: Maybe<Scalars['String']>;
  review_timestamp?: Maybe<Scalars['timestamptz']>;
  reviewer_uid?: Maybe<Scalars['uuid']>;
  sentiment_label?: Maybe<Scalars['String']>;
  sentiment_score?: Maybe<Scalars['numeric']>;
  star_rating?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  review_body?: InputMaybe<Order_By>;
  review_timestamp?: InputMaybe<Order_By>;
  reviewer_uid?: InputMaybe<Order_By>;
  sentiment_label?: InputMaybe<Order_By>;
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Mutation_Response = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Atrium_Tbl_9y9y3yt74loh2lew>;
};

/** input type for inserting object relation for remote table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Obj_Rel_Insert_Input = {
  data: Atrium_Tbl_9y9y3yt74loh2lew_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_On_Conflict>;
};

/** on_conflict condition type for table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_On_Conflict = {
  constraint: Atrium_Tbl_9y9y3yt74loh2lew_Constraint;
  update_columns?: Array<Atrium_Tbl_9y9y3yt74loh2lew_Update_Column>;
  where?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp>;
};

/** Ordering options when selecting data from "atrium.tbl_9y9y3yt74loh2lew". */
export type Atrium_Tbl_9y9y3yt74loh2lew_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  review_body?: InputMaybe<Order_By>;
  review_photos_aggregate?: InputMaybe<Atrium_Review_Photos_Aggregate_Order_By>;
  review_timestamp?: InputMaybe<Order_By>;
  reviewer?: InputMaybe<Atrium_Reviewers_Order_By>;
  reviewer_uid?: InputMaybe<Order_By>;
  sentiment_label?: InputMaybe<Order_By>;
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: atrium.tbl_9y9y3yt74loh2lew */
export type Atrium_Tbl_9y9y3yt74loh2lew_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'platform'
  /** column name */
  | 'review_body'
  /** column name */
  | 'review_timestamp'
  /** column name */
  | 'reviewer_uid'
  /** column name */
  | 'sentiment_label'
  /** column name */
  | 'sentiment_score'
  /** column name */
  | 'star_rating'
  /** column name */
  | 'workspace_id';

/** input type for updating data in table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  platform?: InputMaybe<Scalars['String']>;
  review_body?: InputMaybe<Scalars['String']>;
  review_timestamp?: InputMaybe<Scalars['timestamptz']>;
  reviewer_uid?: InputMaybe<Scalars['uuid']>;
  sentiment_label?: InputMaybe<Scalars['String']>;
  sentiment_score?: InputMaybe<Scalars['numeric']>;
  star_rating?: InputMaybe<Scalars['Int']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_stddev_fields';
  sentiment_score?: Maybe<Scalars['Float']>;
  star_rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Order_By = {
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Pop_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_stddev_pop_fields';
  sentiment_score?: Maybe<Scalars['Float']>;
  star_rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Pop_Order_By = {
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Samp_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_stddev_samp_fields';
  sentiment_score?: Maybe<Scalars['Float']>;
  star_rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Stddev_Samp_Order_By = {
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "atrium_tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Atrium_Tbl_9y9y3yt74loh2lew_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Atrium_Tbl_9y9y3yt74loh2lew_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  platform?: InputMaybe<Scalars['String']>;
  review_body?: InputMaybe<Scalars['String']>;
  review_timestamp?: InputMaybe<Scalars['timestamptz']>;
  reviewer_uid?: InputMaybe<Scalars['uuid']>;
  sentiment_label?: InputMaybe<Scalars['String']>;
  sentiment_score?: InputMaybe<Scalars['numeric']>;
  star_rating?: InputMaybe<Scalars['Int']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Sum_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_sum_fields';
  sentiment_score?: Maybe<Scalars['numeric']>;
  star_rating?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Sum_Order_By = {
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
};

/** update columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'platform'
  /** column name */
  | 'review_body'
  /** column name */
  | 'review_timestamp'
  /** column name */
  | 'reviewer_uid'
  /** column name */
  | 'sentiment_label'
  /** column name */
  | 'sentiment_score'
  /** column name */
  | 'star_rating'
  /** column name */
  | 'workspace_id';

export type Atrium_Tbl_9y9y3yt74loh2lew_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Atrium_Tbl_9y9y3yt74loh2lew_Set_Input>;
  /** filter the rows which have to be updated */
  where: Atrium_Tbl_9y9y3yt74loh2lew_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Var_Pop_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_var_pop_fields';
  sentiment_score?: Maybe<Scalars['Float']>;
  star_rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Var_Pop_Order_By = {
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Var_Samp_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_var_samp_fields';
  sentiment_score?: Maybe<Scalars['Float']>;
  star_rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Var_Samp_Order_By = {
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Atrium_Tbl_9y9y3yt74loh2lew_Variance_Fields = {
  __typename?: 'atrium_tbl_9y9y3yt74loh2lew_variance_fields';
  sentiment_score?: Maybe<Scalars['Float']>;
  star_rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "atrium.tbl_9y9y3yt74loh2lew" */
export type Atrium_Tbl_9y9y3yt74loh2lew_Variance_Order_By = {
  sentiment_score?: InputMaybe<Order_By>;
  star_rating?: InputMaybe<Order_By>;
};

/** columns and relationships of "auth.api_key" */
export type Auth_Api_Key = {
  __typename?: 'auth_api_key';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An object relationship */
  assignee?: Maybe<App_User>;
  assignee_uid: Scalars['uuid'];
  /** An object relationship */
  creator?: Maybe<App_User>;
  creator_uid?: Maybe<Scalars['uuid']>;
  hash: Scalars['String'];
  id: Scalars['String'];
  /** An object relationship */
  installation?: Maybe<Agent_Installation>;
  installation_id?: Maybe<Scalars['String']>;
  installation_uid?: Maybe<Scalars['uuid']>;
  is_dev_mode: Scalars['Boolean'];
  last_used?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type: Scalars['api_key_type'];
  /** An object relationship */
  workspace: App_Workspace;
  workspace_id: Scalars['String'];
};

/** aggregated selection of "auth.api_key" */
export type Auth_Api_Key_Aggregate = {
  __typename?: 'auth_api_key_aggregate';
  aggregate?: Maybe<Auth_Api_Key_Aggregate_Fields>;
  nodes: Array<Auth_Api_Key>;
};

export type Auth_Api_Key_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Auth_Api_Key_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Auth_Api_Key_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Auth_Api_Key_Aggregate_Bool_Exp_Count>;
};

export type Auth_Api_Key_Aggregate_Bool_Exp_Bool_And = {
  arguments: Auth_Api_Key_Select_Column_Auth_Api_Key_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Auth_Api_Key_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_Api_Key_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Auth_Api_Key_Select_Column_Auth_Api_Key_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Auth_Api_Key_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_Api_Key_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Api_Key_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Auth_Api_Key_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.api_key" */
export type Auth_Api_Key_Aggregate_Fields = {
  __typename?: 'auth_api_key_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Api_Key_Max_Fields>;
  min?: Maybe<Auth_Api_Key_Min_Fields>;
};


/** aggregate fields of "auth.api_key" */
export type Auth_Api_Key_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Api_Key_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.api_key" */
export type Auth_Api_Key_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Api_Key_Max_Order_By>;
  min?: InputMaybe<Auth_Api_Key_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.api_key" */
export type Auth_Api_Key_Arr_Rel_Insert_Input = {
  data: Array<Auth_Api_Key_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Api_Key_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.api_key". All fields are combined with a logical 'AND'. */
export type Auth_Api_Key_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Api_Key_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Auth_Api_Key_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Api_Key_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  assignee?: InputMaybe<App_User_Bool_Exp>;
  assignee_uid?: InputMaybe<Uuid_Comparison_Exp>;
  creator?: InputMaybe<App_User_Bool_Exp>;
  creator_uid?: InputMaybe<Uuid_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  installation?: InputMaybe<Agent_Installation_Bool_Exp>;
  installation_id?: InputMaybe<String_Comparison_Exp>;
  installation_uid?: InputMaybe<Uuid_Comparison_Exp>;
  is_dev_mode?: InputMaybe<Boolean_Comparison_Exp>;
  last_used?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Api_Key_Type_Comparison_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.api_key" */
export type Auth_Api_Key_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'api_key_uid_unique'
  /** unique or primary key constraint on columns "id" */
  | 'app_api_key_pk';

/** input type for inserting data into table "auth.api_key" */
export type Auth_Api_Key_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  assignee?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  assignee_uid?: InputMaybe<Scalars['uuid']>;
  creator?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation?: InputMaybe<Agent_Installation_Obj_Rel_Insert_Input>;
  installation_id?: InputMaybe<Scalars['String']>;
  installation_uid?: InputMaybe<Scalars['uuid']>;
  is_dev_mode?: InputMaybe<Scalars['Boolean']>;
  last_used?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['api_key_type']>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Api_Key_Max_Fields = {
  __typename?: 'auth_api_key_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  assignee_uid?: Maybe<Scalars['uuid']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  installation_uid?: Maybe<Scalars['uuid']>;
  last_used?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['api_key_type']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.api_key" */
export type Auth_Api_Key_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  assignee_uid?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  installation_uid?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Api_Key_Min_Fields = {
  __typename?: 'auth_api_key_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  assignee_uid?: Maybe<Scalars['uuid']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  installation_uid?: Maybe<Scalars['uuid']>;
  last_used?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['api_key_type']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.api_key" */
export type Auth_Api_Key_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  assignee_uid?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  installation_uid?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.api_key" */
export type Auth_Api_Key_Mutation_Response = {
  __typename?: 'auth_api_key_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Api_Key>;
};

/** on_conflict condition type for table "auth.api_key" */
export type Auth_Api_Key_On_Conflict = {
  constraint: Auth_Api_Key_Constraint;
  update_columns?: Array<Auth_Api_Key_Update_Column>;
  where?: InputMaybe<Auth_Api_Key_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.api_key". */
export type Auth_Api_Key_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  assignee?: InputMaybe<App_User_Order_By>;
  assignee_uid?: InputMaybe<Order_By>;
  creator?: InputMaybe<App_User_Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation?: InputMaybe<Agent_Installation_Order_By>;
  installation_id?: InputMaybe<Order_By>;
  installation_uid?: InputMaybe<Order_By>;
  is_dev_mode?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.api_key */
export type Auth_Api_Key_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.api_key" */
export type Auth_Api_Key_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'assignee_uid'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'hash'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'installation_uid'
  /** column name */
  | 'is_dev_mode'
  /** column name */
  | 'last_used'
  /** column name */
  | 'name'
  /** column name */
  | 'type'
  /** column name */
  | 'workspace_id';

/** select "auth_api_key_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.api_key" */
export type Auth_Api_Key_Select_Column_Auth_Api_Key_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'is_dev_mode';

/** select "auth_api_key_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.api_key" */
export type Auth_Api_Key_Select_Column_Auth_Api_Key_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'is_dev_mode';

/** input type for updating data in table "auth.api_key" */
export type Auth_Api_Key_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  assignee_uid?: InputMaybe<Scalars['uuid']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
  installation_uid?: InputMaybe<Scalars['uuid']>;
  is_dev_mode?: InputMaybe<Scalars['Boolean']>;
  last_used?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['api_key_type']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "auth_api_key" */
export type Auth_Api_Key_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Api_Key_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Api_Key_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  assignee_uid?: InputMaybe<Scalars['uuid']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
  installation_uid?: InputMaybe<Scalars['uuid']>;
  is_dev_mode?: InputMaybe<Scalars['Boolean']>;
  last_used?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['api_key_type']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.api_key" */
export type Auth_Api_Key_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'assignee_uid'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'hash'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'installation_uid'
  /** column name */
  | 'is_dev_mode'
  /** column name */
  | 'last_used'
  /** column name */
  | 'name'
  /** column name */
  | 'type'
  /** column name */
  | 'workspace_id';

export type Auth_Api_Key_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Api_Key_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Api_Key_Bool_Exp;
};

/** columns and relationships of "auth.session" */
export type Auth_Session = {
  __typename?: 'auth_session';
  _cr: Scalars['timestamptz'];
  _up: Scalars['timestamptz'];
  id: Scalars['uuid'];
  ip_info: Scalars['jsonb'];
  is_in_dev_mode: Scalars['Boolean'];
  last_seen: Scalars['timestamptz'];
  /** An object relationship */
  user: App_User;
  user_agent: Scalars['String'];
  user_id: Scalars['uuid'];
  /** An object relationship */
  workspace: App_Workspace;
  workspace_id: Scalars['String'];
  workspace_uid?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "auth.session" */
export type Auth_SessionIp_InfoArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.session" */
export type Auth_Session_Aggregate = {
  __typename?: 'auth_session_aggregate';
  aggregate?: Maybe<Auth_Session_Aggregate_Fields>;
  nodes: Array<Auth_Session>;
};

export type Auth_Session_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Auth_Session_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Auth_Session_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Auth_Session_Aggregate_Bool_Exp_Count>;
};

export type Auth_Session_Aggregate_Bool_Exp_Bool_And = {
  arguments: Auth_Session_Select_Column_Auth_Session_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Auth_Session_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_Session_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Auth_Session_Select_Column_Auth_Session_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Auth_Session_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_Session_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Auth_Session_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_Fields = {
  __typename?: 'auth_session_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Session_Max_Fields>;
  min?: Maybe<Auth_Session_Min_Fields>;
};


/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.session" */
export type Auth_Session_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Session_Max_Order_By>;
  min?: InputMaybe<Auth_Session_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Session_Append_Input = {
  ip_info?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.session" */
export type Auth_Session_Arr_Rel_Insert_Input = {
  data: Array<Auth_Session_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.session". All fields are combined with a logical 'AND'. */
export type Auth_Session_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Auth_Session_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ip_info?: InputMaybe<Jsonb_Comparison_Exp>;
  is_in_dev_mode?: InputMaybe<Boolean_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  user_agent?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
  workspace_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.session" */
export type Auth_Session_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'auth_session_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Session_Delete_At_Path_Input = {
  ip_info?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Session_Delete_Elem_Input = {
  ip_info?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Session_Delete_Key_Input = {
  ip_info?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.session" */
export type Auth_Session_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ip_info?: InputMaybe<Scalars['jsonb']>;
  is_in_dev_mode?: InputMaybe<Scalars['Boolean']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  user_agent?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Session_Max_Fields = {
  __typename?: 'auth_session_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _up?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  workspace_id?: Maybe<Scalars['String']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.session" */
export type Auth_Session_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  user_agent?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Session_Min_Fields = {
  __typename?: 'auth_session_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _up?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  workspace_id?: Maybe<Scalars['String']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.session" */
export type Auth_Session_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  user_agent?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.session" */
export type Auth_Session_Mutation_Response = {
  __typename?: 'auth_session_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Session>;
};

/** on_conflict condition type for table "auth.session" */
export type Auth_Session_On_Conflict = {
  constraint: Auth_Session_Constraint;
  update_columns?: Array<Auth_Session_Update_Column>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.session". */
export type Auth_Session_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_info?: InputMaybe<Order_By>;
  is_in_dev_mode?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  user_agent?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.session */
export type Auth_Session_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Session_Prepend_Input = {
  ip_info?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.session" */
export type Auth_Session_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_up'
  /** column name */
  | 'id'
  /** column name */
  | 'ip_info'
  /** column name */
  | 'is_in_dev_mode'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'user_agent'
  /** column name */
  | 'user_id'
  /** column name */
  | 'workspace_id'
  /** column name */
  | 'workspace_uid';

/** select "auth_session_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.session" */
export type Auth_Session_Select_Column_Auth_Session_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'is_in_dev_mode';

/** select "auth_session_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.session" */
export type Auth_Session_Select_Column_Auth_Session_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'is_in_dev_mode';

/** input type for updating data in table "auth.session" */
export type Auth_Session_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ip_info?: InputMaybe<Scalars['jsonb']>;
  is_in_dev_mode?: InputMaybe<Scalars['Boolean']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  user_agent?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "auth_session" */
export type Auth_Session_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Session_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Session_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ip_info?: InputMaybe<Scalars['jsonb']>;
  is_in_dev_mode?: InputMaybe<Scalars['Boolean']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  user_agent?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.session" */
export type Auth_Session_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_up'
  /** column name */
  | 'id'
  /** column name */
  | 'ip_info'
  /** column name */
  | 'is_in_dev_mode'
  /** column name */
  | 'last_seen'
  /** column name */
  | 'user_agent'
  /** column name */
  | 'user_id'
  /** column name */
  | 'workspace_id'
  /** column name */
  | 'workspace_uid';

export type Auth_Session_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Auth_Session_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Auth_Session_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Auth_Session_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Auth_Session_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Auth_Session_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Session_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Session_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "billing.feature" */
export type Billing_Feature = {
  __typename?: 'billing_feature';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  active: Scalars['Boolean'];
  id: Scalars['String'];
  is_offered?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  /** An object relationship */
  product: Billing_Product;
  product_id: Scalars['String'];
  quantity?: Maybe<Scalars['numeric']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregated selection of "billing.feature" */
export type Billing_Feature_Aggregate = {
  __typename?: 'billing_feature_aggregate';
  aggregate?: Maybe<Billing_Feature_Aggregate_Fields>;
  nodes: Array<Billing_Feature>;
};

export type Billing_Feature_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Billing_Feature_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Billing_Feature_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Billing_Feature_Aggregate_Bool_Exp_Count>;
};

export type Billing_Feature_Aggregate_Bool_Exp_Bool_And = {
  arguments: Billing_Feature_Select_Column_Billing_Feature_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Feature_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Feature_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Billing_Feature_Select_Column_Billing_Feature_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Feature_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Feature_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Billing_Feature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Feature_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "billing.feature" */
export type Billing_Feature_Aggregate_Fields = {
  __typename?: 'billing_feature_aggregate_fields';
  avg?: Maybe<Billing_Feature_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Feature_Max_Fields>;
  min?: Maybe<Billing_Feature_Min_Fields>;
  stddev?: Maybe<Billing_Feature_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Feature_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Feature_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Feature_Sum_Fields>;
  var_pop?: Maybe<Billing_Feature_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Feature_Var_Samp_Fields>;
  variance?: Maybe<Billing_Feature_Variance_Fields>;
};


/** aggregate fields of "billing.feature" */
export type Billing_Feature_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Feature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "billing.feature" */
export type Billing_Feature_Aggregate_Order_By = {
  avg?: InputMaybe<Billing_Feature_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Billing_Feature_Max_Order_By>;
  min?: InputMaybe<Billing_Feature_Min_Order_By>;
  stddev?: InputMaybe<Billing_Feature_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Billing_Feature_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Billing_Feature_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Billing_Feature_Sum_Order_By>;
  var_pop?: InputMaybe<Billing_Feature_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Billing_Feature_Var_Samp_Order_By>;
  variance?: InputMaybe<Billing_Feature_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "billing.feature" */
export type Billing_Feature_Arr_Rel_Insert_Input = {
  data: Array<Billing_Feature_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Feature_On_Conflict>;
};

/** aggregate avg on columns */
export type Billing_Feature_Avg_Fields = {
  __typename?: 'billing_feature_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "billing.feature" */
export type Billing_Feature_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billing.feature". All fields are combined with a logical 'AND'. */
export type Billing_Feature_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Feature_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Billing_Feature_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Feature_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_offered?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  product?: InputMaybe<Billing_Product_Bool_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.feature" */
export type Billing_Feature_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'billing_feature_pk';

/** input type for incrementing numeric columns in table "billing.feature" */
export type Billing_Feature_Inc_Input = {
  quantity?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "billing.feature" */
export type Billing_Feature_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  is_offered?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Billing_Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Billing_Feature_Max_Fields = {
  __typename?: 'billing_feature_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "billing.feature" */
export type Billing_Feature_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billing_Feature_Min_Fields = {
  __typename?: 'billing_feature_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "billing.feature" */
export type Billing_Feature_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "billing.feature" */
export type Billing_Feature_Mutation_Response = {
  __typename?: 'billing_feature_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Feature>;
};

/** on_conflict condition type for table "billing.feature" */
export type Billing_Feature_On_Conflict = {
  constraint: Billing_Feature_Constraint;
  update_columns?: Array<Billing_Feature_Update_Column>;
  where?: InputMaybe<Billing_Feature_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.feature". */
export type Billing_Feature_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_offered?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  product?: InputMaybe<Billing_Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.feature */
export type Billing_Feature_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "billing.feature" */
export type Billing_Feature_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'id'
  /** column name */
  | 'is_offered'
  /** column name */
  | 'name'
  /** column name */
  | 'product_id'
  /** column name */
  | 'quantity'
  /** column name */
  | 'type';

/** select "billing_feature_aggregate_bool_exp_bool_and_arguments_columns" columns of table "billing.feature" */
export type Billing_Feature_Select_Column_Billing_Feature_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'active'
  /** column name */
  | 'is_offered';

/** select "billing_feature_aggregate_bool_exp_bool_or_arguments_columns" columns of table "billing.feature" */
export type Billing_Feature_Select_Column_Billing_Feature_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'active'
  /** column name */
  | 'is_offered';

/** input type for updating data in table "billing.feature" */
export type Billing_Feature_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  is_offered?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Billing_Feature_Stddev_Fields = {
  __typename?: 'billing_feature_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "billing.feature" */
export type Billing_Feature_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billing_Feature_Stddev_Pop_Fields = {
  __typename?: 'billing_feature_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "billing.feature" */
export type Billing_Feature_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billing_Feature_Stddev_Samp_Fields = {
  __typename?: 'billing_feature_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "billing.feature" */
export type Billing_Feature_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "billing_feature" */
export type Billing_Feature_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Feature_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Feature_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  is_offered?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Billing_Feature_Sum_Fields = {
  __typename?: 'billing_feature_sum_fields';
  quantity?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "billing.feature" */
export type Billing_Feature_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "billing.feature" */
export type Billing_Feature_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'id'
  /** column name */
  | 'is_offered'
  /** column name */
  | 'name'
  /** column name */
  | 'product_id'
  /** column name */
  | 'quantity'
  /** column name */
  | 'type';

export type Billing_Feature_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Feature_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Feature_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Feature_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Feature_Var_Pop_Fields = {
  __typename?: 'billing_feature_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "billing.feature" */
export type Billing_Feature_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billing_Feature_Var_Samp_Fields = {
  __typename?: 'billing_feature_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "billing.feature" */
export type Billing_Feature_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billing_Feature_Variance_Fields = {
  __typename?: 'billing_feature_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "billing.feature" */
export type Billing_Feature_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** View of active subscriptions with product information, workspace, and installation details */
export type Billing_Gql_Subscription = {
  __typename?: 'billing_gql_subscription';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  active?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  installation_uid?: Maybe<Scalars['uuid']>;
  price_id?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  subscriber_uid?: Maybe<Scalars['uuid']>;
  trial_end?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "billing.gql_subscription" */
export type Billing_Gql_Subscription_Aggregate = {
  __typename?: 'billing_gql_subscription_aggregate';
  aggregate?: Maybe<Billing_Gql_Subscription_Aggregate_Fields>;
  nodes: Array<Billing_Gql_Subscription>;
};

/** aggregate fields of "billing.gql_subscription" */
export type Billing_Gql_Subscription_Aggregate_Fields = {
  __typename?: 'billing_gql_subscription_aggregate_fields';
  avg?: Maybe<Billing_Gql_Subscription_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Gql_Subscription_Max_Fields>;
  min?: Maybe<Billing_Gql_Subscription_Min_Fields>;
  stddev?: Maybe<Billing_Gql_Subscription_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Gql_Subscription_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Gql_Subscription_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Gql_Subscription_Sum_Fields>;
  var_pop?: Maybe<Billing_Gql_Subscription_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Gql_Subscription_Var_Samp_Fields>;
  variance?: Maybe<Billing_Gql_Subscription_Variance_Fields>;
};


/** aggregate fields of "billing.gql_subscription" */
export type Billing_Gql_Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Gql_Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Billing_Gql_Subscription_Avg_Fields = {
  __typename?: 'billing_gql_subscription_avg_fields';
  trial_end?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "billing.gql_subscription". All fields are combined with a logical 'AND'. */
export type Billing_Gql_Subscription_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Gql_Subscription_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Billing_Gql_Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Gql_Subscription_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  installation_id?: InputMaybe<String_Comparison_Exp>;
  installation_uid?: InputMaybe<Uuid_Comparison_Exp>;
  price_id?: InputMaybe<String_Comparison_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
  subscriber_uid?: InputMaybe<Uuid_Comparison_Exp>;
  trial_end?: InputMaybe<Int_Comparison_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Billing_Gql_Subscription_Max_Fields = {
  __typename?: 'billing_gql_subscription_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  installation_uid?: Maybe<Scalars['uuid']>;
  price_id?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  subscriber_uid?: Maybe<Scalars['uuid']>;
  trial_end?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Billing_Gql_Subscription_Min_Fields = {
  __typename?: 'billing_gql_subscription_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  installation_id?: Maybe<Scalars['String']>;
  installation_uid?: Maybe<Scalars['uuid']>;
  price_id?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  subscriber_uid?: Maybe<Scalars['uuid']>;
  trial_end?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "billing.gql_subscription". */
export type Billing_Gql_Subscription_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_id?: InputMaybe<Order_By>;
  installation_uid?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  subscriber_uid?: InputMaybe<Order_By>;
  trial_end?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** select columns of table "billing.gql_subscription" */
export type Billing_Gql_Subscription_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_id'
  /** column name */
  | 'installation_uid'
  /** column name */
  | 'price_id'
  /** column name */
  | 'product_id'
  /** column name */
  | 'subscriber_uid'
  /** column name */
  | 'trial_end'
  /** column name */
  | 'workspace_id';

/** aggregate stddev on columns */
export type Billing_Gql_Subscription_Stddev_Fields = {
  __typename?: 'billing_gql_subscription_stddev_fields';
  trial_end?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Billing_Gql_Subscription_Stddev_Pop_Fields = {
  __typename?: 'billing_gql_subscription_stddev_pop_fields';
  trial_end?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Billing_Gql_Subscription_Stddev_Samp_Fields = {
  __typename?: 'billing_gql_subscription_stddev_samp_fields';
  trial_end?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "billing_gql_subscription" */
export type Billing_Gql_Subscription_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Gql_Subscription_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Gql_Subscription_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  installation_id?: InputMaybe<Scalars['String']>;
  installation_uid?: InputMaybe<Scalars['uuid']>;
  price_id?: InputMaybe<Scalars['String']>;
  product_id?: InputMaybe<Scalars['String']>;
  subscriber_uid?: InputMaybe<Scalars['uuid']>;
  trial_end?: InputMaybe<Scalars['Int']>;
  workspace_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Billing_Gql_Subscription_Sum_Fields = {
  __typename?: 'billing_gql_subscription_sum_fields';
  trial_end?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Billing_Gql_Subscription_Var_Pop_Fields = {
  __typename?: 'billing_gql_subscription_var_pop_fields';
  trial_end?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Billing_Gql_Subscription_Var_Samp_Fields = {
  __typename?: 'billing_gql_subscription_var_samp_fields';
  trial_end?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Billing_Gql_Subscription_Variance_Fields = {
  __typename?: 'billing_gql_subscription_variance_fields';
  trial_end?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "billing.price" */
export type Billing_Price = {
  __typename?: 'billing_price';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  active: Scalars['Boolean'];
  currency?: Maybe<Scalars['price_enum']>;
  id: Scalars['String'];
  interval: Scalars['String'];
  interval_count: Scalars['Int'];
  /** An object relationship */
  product: Billing_Product;
  product_id: Scalars['String'];
  /** An array relationship */
  products: Array<Billing_Product>;
  /** An aggregate relationship */
  products_aggregate: Billing_Product_Aggregate;
  stripe_id: Scalars['String'];
  /** An array relationship */
  subscriptions: Array<Billing_Subscription>;
  /** An aggregate relationship */
  subscriptions_aggregate: Billing_Subscription_Aggregate;
  unit_amount: Scalars['Int'];
};


/** columns and relationships of "billing.price" */
export type Billing_PriceProductsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Product_Order_By>>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};


/** columns and relationships of "billing.price" */
export type Billing_PriceProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Product_Order_By>>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};


/** columns and relationships of "billing.price" */
export type Billing_PriceSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};


/** columns and relationships of "billing.price" */
export type Billing_PriceSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};

/** aggregated selection of "billing.price" */
export type Billing_Price_Aggregate = {
  __typename?: 'billing_price_aggregate';
  aggregate?: Maybe<Billing_Price_Aggregate_Fields>;
  nodes: Array<Billing_Price>;
};

export type Billing_Price_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Billing_Price_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Billing_Price_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Billing_Price_Aggregate_Bool_Exp_Count>;
};

export type Billing_Price_Aggregate_Bool_Exp_Bool_And = {
  arguments: Billing_Price_Select_Column_Billing_Price_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Price_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Price_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Billing_Price_Select_Column_Billing_Price_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Price_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Price_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Billing_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Price_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "billing.price" */
export type Billing_Price_Aggregate_Fields = {
  __typename?: 'billing_price_aggregate_fields';
  avg?: Maybe<Billing_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Price_Max_Fields>;
  min?: Maybe<Billing_Price_Min_Fields>;
  stddev?: Maybe<Billing_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Price_Sum_Fields>;
  var_pop?: Maybe<Billing_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Price_Var_Samp_Fields>;
  variance?: Maybe<Billing_Price_Variance_Fields>;
};


/** aggregate fields of "billing.price" */
export type Billing_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "billing.price" */
export type Billing_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Billing_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Billing_Price_Max_Order_By>;
  min?: InputMaybe<Billing_Price_Min_Order_By>;
  stddev?: InputMaybe<Billing_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Billing_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Billing_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Billing_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Billing_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Billing_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Billing_Price_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "billing.price" */
export type Billing_Price_Arr_Rel_Insert_Input = {
  data: Array<Billing_Price_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Price_On_Conflict>;
};

/** aggregate avg on columns */
export type Billing_Price_Avg_Fields = {
  __typename?: 'billing_price_avg_fields';
  interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "billing.price" */
export type Billing_Price_Avg_Order_By = {
  interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billing.price". All fields are combined with a logical 'AND'. */
export type Billing_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Price_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Billing_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Price_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  currency?: InputMaybe<Price_Enum_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  interval?: InputMaybe<String_Comparison_Exp>;
  interval_count?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Billing_Product_Bool_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Billing_Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Billing_Product_Aggregate_Bool_Exp>;
  stripe_id?: InputMaybe<String_Comparison_Exp>;
  subscriptions?: InputMaybe<Billing_Subscription_Bool_Exp>;
  subscriptions_aggregate?: InputMaybe<Billing_Subscription_Aggregate_Bool_Exp>;
  unit_amount?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.price" */
export type Billing_Price_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'billing_price_pk'
  /** unique or primary key constraint on columns "id" */
  | 'unique_price_id';

/** input type for incrementing numeric columns in table "billing.price" */
export type Billing_Price_Inc_Input = {
  interval_count?: InputMaybe<Scalars['Int']>;
  unit_amount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "billing.price" */
export type Billing_Price_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['price_enum']>;
  id?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<Scalars['String']>;
  interval_count?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Billing_Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Billing_Product_Arr_Rel_Insert_Input>;
  stripe_id?: InputMaybe<Scalars['String']>;
  subscriptions?: InputMaybe<Billing_Subscription_Arr_Rel_Insert_Input>;
  unit_amount?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Billing_Price_Max_Fields = {
  __typename?: 'billing_price_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['price_enum']>;
  id?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  interval_count?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['String']>;
  stripe_id?: Maybe<Scalars['String']>;
  unit_amount?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "billing.price" */
export type Billing_Price_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interval?: InputMaybe<Order_By>;
  interval_count?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stripe_id?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billing_Price_Min_Fields = {
  __typename?: 'billing_price_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['price_enum']>;
  id?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  interval_count?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['String']>;
  stripe_id?: Maybe<Scalars['String']>;
  unit_amount?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "billing.price" */
export type Billing_Price_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interval?: InputMaybe<Order_By>;
  interval_count?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stripe_id?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "billing.price" */
export type Billing_Price_Mutation_Response = {
  __typename?: 'billing_price_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Price>;
};

/** input type for inserting object relation for remote table "billing.price" */
export type Billing_Price_Obj_Rel_Insert_Input = {
  data: Billing_Price_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Price_On_Conflict>;
};

/** on_conflict condition type for table "billing.price" */
export type Billing_Price_On_Conflict = {
  constraint: Billing_Price_Constraint;
  update_columns?: Array<Billing_Price_Update_Column>;
  where?: InputMaybe<Billing_Price_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.price". */
export type Billing_Price_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interval?: InputMaybe<Order_By>;
  interval_count?: InputMaybe<Order_By>;
  product?: InputMaybe<Billing_Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Billing_Product_Aggregate_Order_By>;
  stripe_id?: InputMaybe<Order_By>;
  subscriptions_aggregate?: InputMaybe<Billing_Subscription_Aggregate_Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.price */
export type Billing_Price_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "billing.price" */
export type Billing_Price_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'currency'
  /** column name */
  | 'id'
  /** column name */
  | 'interval'
  /** column name */
  | 'interval_count'
  /** column name */
  | 'product_id'
  /** column name */
  | 'stripe_id'
  /** column name */
  | 'unit_amount';

/** select "billing_price_aggregate_bool_exp_bool_and_arguments_columns" columns of table "billing.price" */
export type Billing_Price_Select_Column_Billing_Price_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'active';

/** select "billing_price_aggregate_bool_exp_bool_or_arguments_columns" columns of table "billing.price" */
export type Billing_Price_Select_Column_Billing_Price_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'active';

/** input type for updating data in table "billing.price" */
export type Billing_Price_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['price_enum']>;
  id?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<Scalars['String']>;
  interval_count?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['String']>;
  stripe_id?: InputMaybe<Scalars['String']>;
  unit_amount?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Billing_Price_Stddev_Fields = {
  __typename?: 'billing_price_stddev_fields';
  interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "billing.price" */
export type Billing_Price_Stddev_Order_By = {
  interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billing_Price_Stddev_Pop_Fields = {
  __typename?: 'billing_price_stddev_pop_fields';
  interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "billing.price" */
export type Billing_Price_Stddev_Pop_Order_By = {
  interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billing_Price_Stddev_Samp_Fields = {
  __typename?: 'billing_price_stddev_samp_fields';
  interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "billing.price" */
export type Billing_Price_Stddev_Samp_Order_By = {
  interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "billing_price" */
export type Billing_Price_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Price_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Price_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['price_enum']>;
  id?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<Scalars['String']>;
  interval_count?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['String']>;
  stripe_id?: InputMaybe<Scalars['String']>;
  unit_amount?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Billing_Price_Sum_Fields = {
  __typename?: 'billing_price_sum_fields';
  interval_count?: Maybe<Scalars['Int']>;
  unit_amount?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "billing.price" */
export type Billing_Price_Sum_Order_By = {
  interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** update columns of table "billing.price" */
export type Billing_Price_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'currency'
  /** column name */
  | 'id'
  /** column name */
  | 'interval'
  /** column name */
  | 'interval_count'
  /** column name */
  | 'product_id'
  /** column name */
  | 'stripe_id'
  /** column name */
  | 'unit_amount';

export type Billing_Price_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Price_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Price_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Price_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Price_Var_Pop_Fields = {
  __typename?: 'billing_price_var_pop_fields';
  interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "billing.price" */
export type Billing_Price_Var_Pop_Order_By = {
  interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billing_Price_Var_Samp_Fields = {
  __typename?: 'billing_price_var_samp_fields';
  interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "billing.price" */
export type Billing_Price_Var_Samp_Order_By = {
  interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billing_Price_Variance_Fields = {
  __typename?: 'billing_price_variance_fields';
  interval_count?: Maybe<Scalars['Float']>;
  unit_amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "billing.price" */
export type Billing_Price_Variance_Order_By = {
  interval_count?: InputMaybe<Order_By>;
  unit_amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "billing.product" */
export type Billing_Product = {
  __typename?: 'billing_product';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  active: Scalars['Boolean'];
  /** An object relationship */
  agent: Agent_Agent;
  agent_id: Scalars['String'];
  /** An array relationship */
  agents: Array<Agent_Agent>;
  /** An aggregate relationship */
  agents_aggregate: Agent_Agent_Aggregate;
  default_price_id?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  /** An array relationship */
  feature_list: Array<Billing_Feature>;
  /** An aggregate relationship */
  feature_list_aggregate: Billing_Feature_Aggregate;
  id: Scalars['String'];
  name: Scalars['String'];
  /** An object relationship */
  price?: Maybe<Billing_Price>;
  /** An array relationship */
  price_list: Array<Billing_Price>;
  /** An aggregate relationship */
  price_list_aggregate: Billing_Price_Aggregate;
  stripe_id: Scalars['String'];
  trial_period_days: Scalars['Int'];
};


/** columns and relationships of "billing.product" */
export type Billing_ProductAgentsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


/** columns and relationships of "billing.product" */
export type Billing_ProductAgents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


/** columns and relationships of "billing.product" */
export type Billing_ProductFeature_ListArgs = {
  distinct_on?: InputMaybe<Array<Billing_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Feature_Order_By>>;
  where?: InputMaybe<Billing_Feature_Bool_Exp>;
};


/** columns and relationships of "billing.product" */
export type Billing_ProductFeature_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Feature_Order_By>>;
  where?: InputMaybe<Billing_Feature_Bool_Exp>;
};


/** columns and relationships of "billing.product" */
export type Billing_ProductPrice_ListArgs = {
  distinct_on?: InputMaybe<Array<Billing_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Price_Order_By>>;
  where?: InputMaybe<Billing_Price_Bool_Exp>;
};


/** columns and relationships of "billing.product" */
export type Billing_ProductPrice_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Price_Order_By>>;
  where?: InputMaybe<Billing_Price_Bool_Exp>;
};

/** aggregated selection of "billing.product" */
export type Billing_Product_Aggregate = {
  __typename?: 'billing_product_aggregate';
  aggregate?: Maybe<Billing_Product_Aggregate_Fields>;
  nodes: Array<Billing_Product>;
};

export type Billing_Product_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Billing_Product_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Billing_Product_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Billing_Product_Aggregate_Bool_Exp_Count>;
};

export type Billing_Product_Aggregate_Bool_Exp_Bool_And = {
  arguments: Billing_Product_Select_Column_Billing_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Product_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Product_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Billing_Product_Select_Column_Billing_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Product_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Billing_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Product_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "billing.product" */
export type Billing_Product_Aggregate_Fields = {
  __typename?: 'billing_product_aggregate_fields';
  avg?: Maybe<Billing_Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Product_Max_Fields>;
  min?: Maybe<Billing_Product_Min_Fields>;
  stddev?: Maybe<Billing_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Product_Sum_Fields>;
  var_pop?: Maybe<Billing_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Product_Var_Samp_Fields>;
  variance?: Maybe<Billing_Product_Variance_Fields>;
};


/** aggregate fields of "billing.product" */
export type Billing_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "billing.product" */
export type Billing_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Billing_Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Billing_Product_Max_Order_By>;
  min?: InputMaybe<Billing_Product_Min_Order_By>;
  stddev?: InputMaybe<Billing_Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Billing_Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Billing_Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Billing_Product_Sum_Order_By>;
  var_pop?: InputMaybe<Billing_Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Billing_Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Billing_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "billing.product" */
export type Billing_Product_Arr_Rel_Insert_Input = {
  data: Array<Billing_Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Billing_Product_Avg_Fields = {
  __typename?: 'billing_product_avg_fields';
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "billing.product" */
export type Billing_Product_Avg_Order_By = {
  trial_period_days?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billing.product". All fields are combined with a logical 'AND'. */
export type Billing_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Product_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Billing_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Product_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  agent?: InputMaybe<Agent_Agent_Bool_Exp>;
  agent_id?: InputMaybe<String_Comparison_Exp>;
  agents?: InputMaybe<Agent_Agent_Bool_Exp>;
  agents_aggregate?: InputMaybe<Agent_Agent_Aggregate_Bool_Exp>;
  default_price_id?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  feature_list?: InputMaybe<Billing_Feature_Bool_Exp>;
  feature_list_aggregate?: InputMaybe<Billing_Feature_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Billing_Price_Bool_Exp>;
  price_list?: InputMaybe<Billing_Price_Bool_Exp>;
  price_list_aggregate?: InputMaybe<Billing_Price_Aggregate_Bool_Exp>;
  stripe_id?: InputMaybe<String_Comparison_Exp>;
  trial_period_days?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.product" */
export type Billing_Product_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'billing_product_pk'
  /** unique or primary key constraint on columns "_uid" */
  | 'ux_billing_product__uid';

/** input type for incrementing numeric columns in table "billing.product" */
export type Billing_Product_Inc_Input = {
  trial_period_days?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "billing.product" */
export type Billing_Product_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  agent?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agent_id?: InputMaybe<Scalars['String']>;
  agents?: InputMaybe<Agent_Agent_Arr_Rel_Insert_Input>;
  default_price_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  feature_list?: InputMaybe<Billing_Feature_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Billing_Price_Obj_Rel_Insert_Input>;
  price_list?: InputMaybe<Billing_Price_Arr_Rel_Insert_Input>;
  stripe_id?: InputMaybe<Scalars['String']>;
  trial_period_days?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Billing_Product_Max_Fields = {
  __typename?: 'billing_product_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  default_price_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stripe_id?: Maybe<Scalars['String']>;
  trial_period_days?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "billing.product" */
export type Billing_Product_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  default_price_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  stripe_id?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billing_Product_Min_Fields = {
  __typename?: 'billing_product_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  default_price_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stripe_id?: Maybe<Scalars['String']>;
  trial_period_days?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "billing.product" */
export type Billing_Product_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  default_price_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  stripe_id?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "billing.product" */
export type Billing_Product_Mutation_Response = {
  __typename?: 'billing_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Product>;
};

/** input type for inserting object relation for remote table "billing.product" */
export type Billing_Product_Obj_Rel_Insert_Input = {
  data: Billing_Product_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Product_On_Conflict>;
};

/** on_conflict condition type for table "billing.product" */
export type Billing_Product_On_Conflict = {
  constraint: Billing_Product_Constraint;
  update_columns?: Array<Billing_Product_Update_Column>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.product". */
export type Billing_Product_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  agent?: InputMaybe<Agent_Agent_Order_By>;
  agent_id?: InputMaybe<Order_By>;
  agents_aggregate?: InputMaybe<Agent_Agent_Aggregate_Order_By>;
  default_price_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  feature_list_aggregate?: InputMaybe<Billing_Feature_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Billing_Price_Order_By>;
  price_list_aggregate?: InputMaybe<Billing_Price_Aggregate_Order_By>;
  stripe_id?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.product */
export type Billing_Product_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "billing.product" */
export type Billing_Product_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'default_price_id'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'stripe_id'
  /** column name */
  | 'trial_period_days';

/** select "billing_product_aggregate_bool_exp_bool_and_arguments_columns" columns of table "billing.product" */
export type Billing_Product_Select_Column_Billing_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'active';

/** select "billing_product_aggregate_bool_exp_bool_or_arguments_columns" columns of table "billing.product" */
export type Billing_Product_Select_Column_Billing_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'active';

/** input type for updating data in table "billing.product" */
export type Billing_Product_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  agent_id?: InputMaybe<Scalars['String']>;
  default_price_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  stripe_id?: InputMaybe<Scalars['String']>;
  trial_period_days?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Billing_Product_Stddev_Fields = {
  __typename?: 'billing_product_stddev_fields';
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "billing.product" */
export type Billing_Product_Stddev_Order_By = {
  trial_period_days?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billing_Product_Stddev_Pop_Fields = {
  __typename?: 'billing_product_stddev_pop_fields';
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "billing.product" */
export type Billing_Product_Stddev_Pop_Order_By = {
  trial_period_days?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billing_Product_Stddev_Samp_Fields = {
  __typename?: 'billing_product_stddev_samp_fields';
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "billing.product" */
export type Billing_Product_Stddev_Samp_Order_By = {
  trial_period_days?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "billing_product" */
export type Billing_Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Product_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  agent_id?: InputMaybe<Scalars['String']>;
  default_price_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  stripe_id?: InputMaybe<Scalars['String']>;
  trial_period_days?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Billing_Product_Sum_Fields = {
  __typename?: 'billing_product_sum_fields';
  trial_period_days?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "billing.product" */
export type Billing_Product_Sum_Order_By = {
  trial_period_days?: InputMaybe<Order_By>;
};

/** update columns of table "billing.product" */
export type Billing_Product_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'default_price_id'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'stripe_id'
  /** column name */
  | 'trial_period_days';

export type Billing_Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Product_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Product_Var_Pop_Fields = {
  __typename?: 'billing_product_var_pop_fields';
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "billing.product" */
export type Billing_Product_Var_Pop_Order_By = {
  trial_period_days?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billing_Product_Var_Samp_Fields = {
  __typename?: 'billing_product_var_samp_fields';
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "billing.product" */
export type Billing_Product_Var_Samp_Order_By = {
  trial_period_days?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billing_Product_Variance_Fields = {
  __typename?: 'billing_product_variance_fields';
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "billing.product" */
export type Billing_Product_Variance_Order_By = {
  trial_period_days?: InputMaybe<Order_By>;
};

/** columns and relationships of "billing.subscription" */
export type Billing_Subscription = {
  __typename?: 'billing_subscription';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  active: Scalars['Boolean'];
  /** An object relationship */
  agent?: Maybe<Agent_Agent>;
  agent_id?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['String'];
  /** An object relationship */
  installation: Agent_Installation;
  /** An array relationship */
  installation_list: Array<Agent_Installation>;
  /** An aggregate relationship */
  installation_list_aggregate: Agent_Installation_Aggregate;
  installation_uid: Scalars['uuid'];
  /** An object relationship */
  price: Billing_Price;
  price_id: Scalars['String'];
  stripe_id: Scalars['String'];
  subscriber_uid: Scalars['uuid'];
  trial_end?: Maybe<Scalars['Int']>;
  trial_period_days?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user: App_User;
  /** An object relationship */
  workspace: App_Workspace;
  /** An object relationship */
  workspaceByWorkspaceId: App_Workspace;
  workspace_id: Scalars['String'];
  workspace_uid: Scalars['uuid'];
};


/** columns and relationships of "billing.subscription" */
export type Billing_SubscriptionInstallation_ListArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


/** columns and relationships of "billing.subscription" */
export type Billing_SubscriptionInstallation_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};

/** aggregated selection of "billing.subscription" */
export type Billing_Subscription_Aggregate = {
  __typename?: 'billing_subscription_aggregate';
  aggregate?: Maybe<Billing_Subscription_Aggregate_Fields>;
  nodes: Array<Billing_Subscription>;
};

export type Billing_Subscription_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Billing_Subscription_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Billing_Subscription_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Billing_Subscription_Aggregate_Bool_Exp_Count>;
};

export type Billing_Subscription_Aggregate_Bool_Exp_Bool_And = {
  arguments: Billing_Subscription_Select_Column_Billing_Subscription_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Subscription_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Subscription_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Billing_Subscription_Select_Column_Billing_Subscription_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Subscription_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Subscription_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Subscription_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "billing.subscription" */
export type Billing_Subscription_Aggregate_Fields = {
  __typename?: 'billing_subscription_aggregate_fields';
  avg?: Maybe<Billing_Subscription_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Subscription_Max_Fields>;
  min?: Maybe<Billing_Subscription_Min_Fields>;
  stddev?: Maybe<Billing_Subscription_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Subscription_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Subscription_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Subscription_Sum_Fields>;
  var_pop?: Maybe<Billing_Subscription_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Subscription_Var_Samp_Fields>;
  variance?: Maybe<Billing_Subscription_Variance_Fields>;
};


/** aggregate fields of "billing.subscription" */
export type Billing_Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "billing.subscription" */
export type Billing_Subscription_Aggregate_Order_By = {
  avg?: InputMaybe<Billing_Subscription_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Billing_Subscription_Max_Order_By>;
  min?: InputMaybe<Billing_Subscription_Min_Order_By>;
  stddev?: InputMaybe<Billing_Subscription_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Billing_Subscription_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Billing_Subscription_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Billing_Subscription_Sum_Order_By>;
  var_pop?: InputMaybe<Billing_Subscription_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Billing_Subscription_Var_Samp_Order_By>;
  variance?: InputMaybe<Billing_Subscription_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "billing.subscription" */
export type Billing_Subscription_Arr_Rel_Insert_Input = {
  data: Array<Billing_Subscription_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Subscription_On_Conflict>;
};

/** aggregate avg on columns */
export type Billing_Subscription_Avg_Fields = {
  __typename?: 'billing_subscription_avg_fields';
  trial_end?: Maybe<Scalars['Float']>;
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "billing.subscription" */
export type Billing_Subscription_Avg_Order_By = {
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billing.subscription". All fields are combined with a logical 'AND'. */
export type Billing_Subscription_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Subscription_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Billing_Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Subscription_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  agent?: InputMaybe<Agent_Agent_Bool_Exp>;
  agent_id?: InputMaybe<String_Comparison_Exp>;
  canceled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  installation?: InputMaybe<Agent_Installation_Bool_Exp>;
  installation_list?: InputMaybe<Agent_Installation_Bool_Exp>;
  installation_list_aggregate?: InputMaybe<Agent_Installation_Aggregate_Bool_Exp>;
  installation_uid?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Billing_Price_Bool_Exp>;
  price_id?: InputMaybe<String_Comparison_Exp>;
  stripe_id?: InputMaybe<String_Comparison_Exp>;
  subscriber_uid?: InputMaybe<Uuid_Comparison_Exp>;
  trial_end?: InputMaybe<Int_Comparison_Exp>;
  trial_period_days?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspaceByWorkspaceId?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_id?: InputMaybe<String_Comparison_Exp>;
  workspace_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.subscription" */
export type Billing_Subscription_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'billing_subscription_pk'
  /** unique or primary key constraint on columns "workspace_id", "agent_id", "subscriber_uid" */
  | 'unique_active_subscription'
  /** unique or primary key constraint on columns "stripe_id" */
  | 'unique_stripe_id';

/** input type for incrementing numeric columns in table "billing.subscription" */
export type Billing_Subscription_Inc_Input = {
  trial_end?: InputMaybe<Scalars['Int']>;
  trial_period_days?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "billing.subscription" */
export type Billing_Subscription_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  agent?: InputMaybe<Agent_Agent_Obj_Rel_Insert_Input>;
  agent_id?: InputMaybe<Scalars['String']>;
  canceled_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  installation?: InputMaybe<Agent_Installation_Obj_Rel_Insert_Input>;
  installation_list?: InputMaybe<Agent_Installation_Arr_Rel_Insert_Input>;
  installation_uid?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Billing_Price_Obj_Rel_Insert_Input>;
  price_id?: InputMaybe<Scalars['String']>;
  stripe_id?: InputMaybe<Scalars['String']>;
  subscriber_uid?: InputMaybe<Scalars['uuid']>;
  trial_end?: InputMaybe<Scalars['Int']>;
  trial_period_days?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspaceByWorkspaceId?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Billing_Subscription_Max_Fields = {
  __typename?: 'billing_subscription_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  installation_uid?: Maybe<Scalars['uuid']>;
  price_id?: Maybe<Scalars['String']>;
  stripe_id?: Maybe<Scalars['String']>;
  subscriber_uid?: Maybe<Scalars['uuid']>;
  trial_end?: Maybe<Scalars['Int']>;
  trial_period_days?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['String']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "billing.subscription" */
export type Billing_Subscription_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_uid?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  stripe_id?: InputMaybe<Order_By>;
  subscriber_uid?: InputMaybe<Order_By>;
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billing_Subscription_Min_Fields = {
  __typename?: 'billing_subscription_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  agent_id?: Maybe<Scalars['String']>;
  canceled_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  installation_uid?: Maybe<Scalars['uuid']>;
  price_id?: Maybe<Scalars['String']>;
  stripe_id?: Maybe<Scalars['String']>;
  subscriber_uid?: Maybe<Scalars['uuid']>;
  trial_end?: Maybe<Scalars['Int']>;
  trial_period_days?: Maybe<Scalars['Int']>;
  workspace_id?: Maybe<Scalars['String']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "billing.subscription" */
export type Billing_Subscription_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  agent_id?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation_uid?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  stripe_id?: InputMaybe<Order_By>;
  subscriber_uid?: InputMaybe<Order_By>;
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "billing.subscription" */
export type Billing_Subscription_Mutation_Response = {
  __typename?: 'billing_subscription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Subscription>;
};

/** input type for inserting object relation for remote table "billing.subscription" */
export type Billing_Subscription_Obj_Rel_Insert_Input = {
  data: Billing_Subscription_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Subscription_On_Conflict>;
};

/** on_conflict condition type for table "billing.subscription" */
export type Billing_Subscription_On_Conflict = {
  constraint: Billing_Subscription_Constraint;
  update_columns?: Array<Billing_Subscription_Update_Column>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.subscription". */
export type Billing_Subscription_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  agent?: InputMaybe<Agent_Agent_Order_By>;
  agent_id?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  installation?: InputMaybe<Agent_Installation_Order_By>;
  installation_list_aggregate?: InputMaybe<Agent_Installation_Aggregate_Order_By>;
  installation_uid?: InputMaybe<Order_By>;
  price?: InputMaybe<Billing_Price_Order_By>;
  price_id?: InputMaybe<Order_By>;
  stripe_id?: InputMaybe<Order_By>;
  subscriber_uid?: InputMaybe<Order_By>;
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspaceByWorkspaceId?: InputMaybe<App_Workspace_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.subscription */
export type Billing_Subscription_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "billing.subscription" */
export type Billing_Subscription_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'canceled_at'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_uid'
  /** column name */
  | 'price_id'
  /** column name */
  | 'stripe_id'
  /** column name */
  | 'subscriber_uid'
  /** column name */
  | 'trial_end'
  /** column name */
  | 'trial_period_days'
  /** column name */
  | 'workspace_id'
  /** column name */
  | 'workspace_uid';

/** select "billing_subscription_aggregate_bool_exp_bool_and_arguments_columns" columns of table "billing.subscription" */
export type Billing_Subscription_Select_Column_Billing_Subscription_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'active';

/** select "billing_subscription_aggregate_bool_exp_bool_or_arguments_columns" columns of table "billing.subscription" */
export type Billing_Subscription_Select_Column_Billing_Subscription_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'active';

/** input type for updating data in table "billing.subscription" */
export type Billing_Subscription_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  agent_id?: InputMaybe<Scalars['String']>;
  canceled_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  installation_uid?: InputMaybe<Scalars['uuid']>;
  price_id?: InputMaybe<Scalars['String']>;
  stripe_id?: InputMaybe<Scalars['String']>;
  subscriber_uid?: InputMaybe<Scalars['uuid']>;
  trial_end?: InputMaybe<Scalars['Int']>;
  trial_period_days?: InputMaybe<Scalars['Int']>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Billing_Subscription_Stddev_Fields = {
  __typename?: 'billing_subscription_stddev_fields';
  trial_end?: Maybe<Scalars['Float']>;
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "billing.subscription" */
export type Billing_Subscription_Stddev_Order_By = {
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billing_Subscription_Stddev_Pop_Fields = {
  __typename?: 'billing_subscription_stddev_pop_fields';
  trial_end?: Maybe<Scalars['Float']>;
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "billing.subscription" */
export type Billing_Subscription_Stddev_Pop_Order_By = {
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billing_Subscription_Stddev_Samp_Fields = {
  __typename?: 'billing_subscription_stddev_samp_fields';
  trial_end?: Maybe<Scalars['Float']>;
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "billing.subscription" */
export type Billing_Subscription_Stddev_Samp_Order_By = {
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "billing_subscription" */
export type Billing_Subscription_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Subscription_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Subscription_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  agent_id?: InputMaybe<Scalars['String']>;
  canceled_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  installation_uid?: InputMaybe<Scalars['uuid']>;
  price_id?: InputMaybe<Scalars['String']>;
  stripe_id?: InputMaybe<Scalars['String']>;
  subscriber_uid?: InputMaybe<Scalars['uuid']>;
  trial_end?: InputMaybe<Scalars['Int']>;
  trial_period_days?: InputMaybe<Scalars['Int']>;
  workspace_id?: InputMaybe<Scalars['String']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Billing_Subscription_Sum_Fields = {
  __typename?: 'billing_subscription_sum_fields';
  trial_end?: Maybe<Scalars['Int']>;
  trial_period_days?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "billing.subscription" */
export type Billing_Subscription_Sum_Order_By = {
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** update columns of table "billing.subscription" */
export type Billing_Subscription_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'agent_id'
  /** column name */
  | 'canceled_at'
  /** column name */
  | 'id'
  /** column name */
  | 'installation_uid'
  /** column name */
  | 'price_id'
  /** column name */
  | 'stripe_id'
  /** column name */
  | 'subscriber_uid'
  /** column name */
  | 'trial_end'
  /** column name */
  | 'trial_period_days'
  /** column name */
  | 'workspace_id'
  /** column name */
  | 'workspace_uid';

export type Billing_Subscription_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Subscription_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Subscription_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Subscription_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Subscription_Var_Pop_Fields = {
  __typename?: 'billing_subscription_var_pop_fields';
  trial_end?: Maybe<Scalars['Float']>;
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "billing.subscription" */
export type Billing_Subscription_Var_Pop_Order_By = {
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billing_Subscription_Var_Samp_Fields = {
  __typename?: 'billing_subscription_var_samp_fields';
  trial_end?: Maybe<Scalars['Float']>;
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "billing.subscription" */
export type Billing_Subscription_Var_Samp_Order_By = {
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billing_Subscription_Variance_Fields = {
  __typename?: 'billing_subscription_variance_fields';
  trial_end?: Maybe<Scalars['Float']>;
  trial_period_days?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "billing.subscription" */
export type Billing_Subscription_Variance_Order_By = {
  trial_end?: InputMaybe<Order_By>;
  trial_period_days?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "block_type". All fields are combined with logical 'AND'. */
export type Block_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['block_type']>;
  _gt?: InputMaybe<Scalars['block_type']>;
  _gte?: InputMaybe<Scalars['block_type']>;
  _in?: InputMaybe<Array<Scalars['block_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['block_type']>;
  _lte?: InputMaybe<Scalars['block_type']>;
  _neq?: InputMaybe<Scalars['block_type']>;
  _nin?: InputMaybe<Array<Scalars['block_type']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** Boolean expression to compare columns of type "chat_processing_status". All fields are combined with logical 'AND'. */
export type Chat_Processing_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['chat_processing_status']>;
  _gt?: InputMaybe<Scalars['chat_processing_status']>;
  _gte?: InputMaybe<Scalars['chat_processing_status']>;
  _in?: InputMaybe<Array<Scalars['chat_processing_status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['chat_processing_status']>;
  _lte?: InputMaybe<Scalars['chat_processing_status']>;
  _neq?: InputMaybe<Scalars['chat_processing_status']>;
  _nin?: InputMaybe<Array<Scalars['chat_processing_status']>>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** Boolean expression to compare columns of type "dataset_visibility". All fields are combined with logical 'AND'. */
export type Dataset_Visibility_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['dataset_visibility']>;
  _gt?: InputMaybe<Scalars['dataset_visibility']>;
  _gte?: InputMaybe<Scalars['dataset_visibility']>;
  _in?: InputMaybe<Array<Scalars['dataset_visibility']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['dataset_visibility']>;
  _lte?: InputMaybe<Scalars['dataset_visibility']>;
  _neq?: InputMaybe<Scalars['dataset_visibility']>;
  _nin?: InputMaybe<Array<Scalars['dataset_visibility']>>;
};

/** Boolean expression to compare columns of type "deployment_status". All fields are combined with logical 'AND'. */
export type Deployment_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['deployment_status']>;
  _gt?: InputMaybe<Scalars['deployment_status']>;
  _gte?: InputMaybe<Scalars['deployment_status']>;
  _in?: InputMaybe<Array<Scalars['deployment_status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['deployment_status']>;
  _lte?: InputMaybe<Scalars['deployment_status']>;
  _neq?: InputMaybe<Scalars['deployment_status']>;
  _nin?: InputMaybe<Array<Scalars['deployment_status']>>;
};

/** Boolean expression to compare columns of type "dev_runtime_status". All fields are combined with logical 'AND'. */
export type Dev_Runtime_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['dev_runtime_status']>;
  _gt?: InputMaybe<Scalars['dev_runtime_status']>;
  _gte?: InputMaybe<Scalars['dev_runtime_status']>;
  _in?: InputMaybe<Array<Scalars['dev_runtime_status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['dev_runtime_status']>;
  _lte?: InputMaybe<Scalars['dev_runtime_status']>;
  _neq?: InputMaybe<Scalars['dev_runtime_status']>;
  _nin?: InputMaybe<Array<Scalars['dev_runtime_status']>>;
};

/** columns and relationships of "entity.address" */
export type Entity_Address = {
  __typename?: 'entity_address';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  components?: Maybe<Scalars['address_type_scalar']>;
  full_text?: Maybe<Scalars['tsvector']>;
  /** An array relationship */
  properties: Array<Entity_Property>;
  /** An aggregate relationship */
  properties_aggregate: Entity_Property_Aggregate;
};


/** columns and relationships of "entity.address" */
export type Entity_AddressPropertiesArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};


/** columns and relationships of "entity.address" */
export type Entity_AddressProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};

/** aggregated selection of "entity.address" */
export type Entity_Address_Aggregate = {
  __typename?: 'entity_address_aggregate';
  aggregate?: Maybe<Entity_Address_Aggregate_Fields>;
  nodes: Array<Entity_Address>;
};

/** aggregate fields of "entity.address" */
export type Entity_Address_Aggregate_Fields = {
  __typename?: 'entity_address_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Entity_Address_Max_Fields>;
  min?: Maybe<Entity_Address_Min_Fields>;
};


/** aggregate fields of "entity.address" */
export type Entity_Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Address_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "entity.address". All fields are combined with a logical 'AND'. */
export type Entity_Address_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Address_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Entity_Address_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Address_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  components?: InputMaybe<Address_Type_Scalar_Comparison_Exp>;
  full_text?: InputMaybe<Tsvector_Comparison_Exp>;
  properties?: InputMaybe<Entity_Property_Bool_Exp>;
  properties_aggregate?: InputMaybe<Entity_Property_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "entity.address" */
export type Entity_Address_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'address__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'address_pkey';

/** input type for inserting data into table "entity.address" */
export type Entity_Address_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  components?: InputMaybe<Scalars['address_type_scalar']>;
  properties?: InputMaybe<Entity_Property_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Entity_Address_Max_Fields = {
  __typename?: 'entity_address_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  components?: Maybe<Scalars['address_type_scalar']>;
};

/** aggregate min on columns */
export type Entity_Address_Min_Fields = {
  __typename?: 'entity_address_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  components?: Maybe<Scalars['address_type_scalar']>;
};

/** response of any mutation on the table "entity.address" */
export type Entity_Address_Mutation_Response = {
  __typename?: 'entity_address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Address>;
};

/** input type for inserting object relation for remote table "entity.address" */
export type Entity_Address_Obj_Rel_Insert_Input = {
  data: Entity_Address_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Address_On_Conflict>;
};

/** on_conflict condition type for table "entity.address" */
export type Entity_Address_On_Conflict = {
  constraint: Entity_Address_Constraint;
  update_columns?: Array<Entity_Address_Update_Column>;
  where?: InputMaybe<Entity_Address_Bool_Exp>;
};

/** Ordering options when selecting data from "entity.address". */
export type Entity_Address_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  components?: InputMaybe<Order_By>;
  full_text?: InputMaybe<Order_By>;
  properties_aggregate?: InputMaybe<Entity_Property_Aggregate_Order_By>;
};

/** primary key columns input for table: entity.address */
export type Entity_Address_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "entity.address" */
export type Entity_Address_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'components'
  /** column name */
  | 'full_text';

/** input type for updating data in table "entity.address" */
export type Entity_Address_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  components?: InputMaybe<Scalars['address_type_scalar']>;
};

/** Streaming cursor of the table "entity_address" */
export type Entity_Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Address_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Address_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  components?: InputMaybe<Scalars['address_type_scalar']>;
  full_text?: InputMaybe<Scalars['tsvector']>;
};

/** update columns of table "entity.address" */
export type Entity_Address_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'components';

export type Entity_Address_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Address_Set_Input>;
  /** filter the rows which have to be updated */
  where: Entity_Address_Bool_Exp;
};

/** columns and relationships of "entity.country" */
export type Entity_Country = {
  __typename?: 'entity_country';
  currency_code?: Maybe<Scalars['bpchar']>;
  iso_code: Scalars['bpchar'];
  name: Scalars['String'];
  phone_code?: Maybe<Scalars['String']>;
  /** An array relationship */
  states: Array<Entity_State>;
  /** An aggregate relationship */
  states_aggregate: Entity_State_Aggregate;
};


/** columns and relationships of "entity.country" */
export type Entity_CountryStatesArgs = {
  distinct_on?: InputMaybe<Array<Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_State_Order_By>>;
  where?: InputMaybe<Entity_State_Bool_Exp>;
};


/** columns and relationships of "entity.country" */
export type Entity_CountryStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_State_Order_By>>;
  where?: InputMaybe<Entity_State_Bool_Exp>;
};

/** aggregated selection of "entity.country" */
export type Entity_Country_Aggregate = {
  __typename?: 'entity_country_aggregate';
  aggregate?: Maybe<Entity_Country_Aggregate_Fields>;
  nodes: Array<Entity_Country>;
};

/** aggregate fields of "entity.country" */
export type Entity_Country_Aggregate_Fields = {
  __typename?: 'entity_country_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Entity_Country_Max_Fields>;
  min?: Maybe<Entity_Country_Min_Fields>;
};


/** aggregate fields of "entity.country" */
export type Entity_Country_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Country_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "entity.country". All fields are combined with a logical 'AND'. */
export type Entity_Country_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Country_Bool_Exp>>;
  _not?: InputMaybe<Entity_Country_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Country_Bool_Exp>>;
  currency_code?: InputMaybe<Bpchar_Comparison_Exp>;
  iso_code?: InputMaybe<Bpchar_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone_code?: InputMaybe<String_Comparison_Exp>;
  states?: InputMaybe<Entity_State_Bool_Exp>;
  states_aggregate?: InputMaybe<Entity_State_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "entity.country" */
export type Entity_Country_Constraint =
  /** unique or primary key constraint on columns "iso_code" */
  | 'country_pkey';

/** input type for inserting data into table "entity.country" */
export type Entity_Country_Insert_Input = {
  currency_code?: InputMaybe<Scalars['bpchar']>;
  iso_code?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  phone_code?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<Entity_State_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Entity_Country_Max_Fields = {
  __typename?: 'entity_country_max_fields';
  currency_code?: Maybe<Scalars['bpchar']>;
  iso_code?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  phone_code?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Entity_Country_Min_Fields = {
  __typename?: 'entity_country_min_fields';
  currency_code?: Maybe<Scalars['bpchar']>;
  iso_code?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  phone_code?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "entity.country" */
export type Entity_Country_Mutation_Response = {
  __typename?: 'entity_country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Country>;
};

/** input type for inserting object relation for remote table "entity.country" */
export type Entity_Country_Obj_Rel_Insert_Input = {
  data: Entity_Country_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Country_On_Conflict>;
};

/** on_conflict condition type for table "entity.country" */
export type Entity_Country_On_Conflict = {
  constraint: Entity_Country_Constraint;
  update_columns?: Array<Entity_Country_Update_Column>;
  where?: InputMaybe<Entity_Country_Bool_Exp>;
};

/** Ordering options when selecting data from "entity.country". */
export type Entity_Country_Order_By = {
  currency_code?: InputMaybe<Order_By>;
  iso_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone_code?: InputMaybe<Order_By>;
  states_aggregate?: InputMaybe<Entity_State_Aggregate_Order_By>;
};

/** primary key columns input for table: entity.country */
export type Entity_Country_Pk_Columns_Input = {
  iso_code: Scalars['bpchar'];
};

/** select columns of table "entity.country" */
export type Entity_Country_Select_Column =
  /** column name */
  | 'currency_code'
  /** column name */
  | 'iso_code'
  /** column name */
  | 'name'
  /** column name */
  | 'phone_code';

/** input type for updating data in table "entity.country" */
export type Entity_Country_Set_Input = {
  currency_code?: InputMaybe<Scalars['bpchar']>;
  iso_code?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  phone_code?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "entity_country" */
export type Entity_Country_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Country_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Country_Stream_Cursor_Value_Input = {
  currency_code?: InputMaybe<Scalars['bpchar']>;
  iso_code?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  phone_code?: InputMaybe<Scalars['String']>;
};

/** update columns of table "entity.country" */
export type Entity_Country_Update_Column =
  /** column name */
  | 'currency_code'
  /** column name */
  | 'iso_code'
  /** column name */
  | 'name'
  /** column name */
  | 'phone_code';

export type Entity_Country_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Country_Set_Input>;
  /** filter the rows which have to be updated */
  where: Entity_Country_Bool_Exp;
};

/** columns and relationships of "entity.owner" */
export type Entity_Owner = {
  __typename?: 'entity_owner';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  company_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  properties: Array<Entity_Property>;
  /** An aggregate relationship */
  properties_aggregate: Entity_Property_Aggregate;
  /** An object relationship */
  user?: Maybe<App_User>;
  user_uid?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "entity.owner" */
export type Entity_OwnerPropertiesArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};


/** columns and relationships of "entity.owner" */
export type Entity_OwnerProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};

/** aggregated selection of "entity.owner" */
export type Entity_Owner_Aggregate = {
  __typename?: 'entity_owner_aggregate';
  aggregate?: Maybe<Entity_Owner_Aggregate_Fields>;
  nodes: Array<Entity_Owner>;
};

/** aggregate fields of "entity.owner" */
export type Entity_Owner_Aggregate_Fields = {
  __typename?: 'entity_owner_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Entity_Owner_Max_Fields>;
  min?: Maybe<Entity_Owner_Min_Fields>;
};


/** aggregate fields of "entity.owner" */
export type Entity_Owner_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Owner_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "entity.owner". All fields are combined with a logical 'AND'. */
export type Entity_Owner_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Owner_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Entity_Owner_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Owner_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  properties?: InputMaybe<Entity_Property_Bool_Exp>;
  properties_aggregate?: InputMaybe<Entity_Property_Aggregate_Bool_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  user_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "entity.owner" */
export type Entity_Owner_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'owner__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'owner_pkey';

/** input type for inserting data into table "entity.owner" */
export type Entity_Owner_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Entity_Property_Arr_Rel_Insert_Input>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Entity_Owner_Max_Fields = {
  __typename?: 'entity_owner_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Entity_Owner_Min_Fields = {
  __typename?: 'entity_owner_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  company_name?: Maybe<Scalars['String']>;
  user_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "entity.owner" */
export type Entity_Owner_Mutation_Response = {
  __typename?: 'entity_owner_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Owner>;
};

/** input type for inserting object relation for remote table "entity.owner" */
export type Entity_Owner_Obj_Rel_Insert_Input = {
  data: Entity_Owner_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Owner_On_Conflict>;
};

/** on_conflict condition type for table "entity.owner" */
export type Entity_Owner_On_Conflict = {
  constraint: Entity_Owner_Constraint;
  update_columns?: Array<Entity_Owner_Update_Column>;
  where?: InputMaybe<Entity_Owner_Bool_Exp>;
};

/** Ordering options when selecting data from "entity.owner". */
export type Entity_Owner_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  properties_aggregate?: InputMaybe<Entity_Property_Aggregate_Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  user_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entity.owner */
export type Entity_Owner_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "entity.owner" */
export type Entity_Owner_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'user_uid';

/** input type for updating data in table "entity.owner" */
export type Entity_Owner_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "entity_owner" */
export type Entity_Owner_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Owner_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Owner_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  company_name?: InputMaybe<Scalars['String']>;
  user_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "entity.owner" */
export type Entity_Owner_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'company_name'
  /** column name */
  | 'user_uid';

export type Entity_Owner_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Owner_Set_Input>;
  /** filter the rows which have to be updated */
  where: Entity_Owner_Bool_Exp;
};

/** columns and relationships of "entity.property" */
export type Entity_Property = {
  __typename?: 'entity_property';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An object relationship */
  address?: Maybe<Entity_Address>;
  address_id?: Maybe<Scalars['uuid']>;
  area_unit?: Maybe<Scalars['String']>;
  bathrooms?: Maybe<Scalars['numeric']>;
  bedrooms?: Maybe<Scalars['smallint']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  description: Scalars['jsonb'];
  name: Scalars['String'];
  /** An object relationship */
  owner?: Maybe<Entity_Owner>;
  owner_uid?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  propertyTypeByPropertyType?: Maybe<Entity_Property_Type>;
  /** An array relationship */
  property_media: Array<Entity_Property_Media>;
  /** An aggregate relationship */
  property_media_aggregate: Entity_Property_Media_Aggregate;
  property_type?: Maybe<Scalars['Int']>;
  status: Scalars['property_status'];
  tags?: Maybe<Array<Scalars['String']>>;
  total_area?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user?: Maybe<App_User>;
  year_built?: Maybe<Scalars['smallint']>;
};


/** columns and relationships of "entity.property" */
export type Entity_PropertyDescriptionArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "entity.property" */
export type Entity_PropertyProperty_MediaArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Media_Order_By>>;
  where?: InputMaybe<Entity_Property_Media_Bool_Exp>;
};


/** columns and relationships of "entity.property" */
export type Entity_PropertyProperty_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Media_Order_By>>;
  where?: InputMaybe<Entity_Property_Media_Bool_Exp>;
};

/** aggregated selection of "entity.property" */
export type Entity_Property_Aggregate = {
  __typename?: 'entity_property_aggregate';
  aggregate?: Maybe<Entity_Property_Aggregate_Fields>;
  nodes: Array<Entity_Property>;
};

export type Entity_Property_Aggregate_Bool_Exp = {
  count?: InputMaybe<Entity_Property_Aggregate_Bool_Exp_Count>;
};

export type Entity_Property_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Entity_Property_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Entity_Property_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "entity.property" */
export type Entity_Property_Aggregate_Fields = {
  __typename?: 'entity_property_aggregate_fields';
  avg?: Maybe<Entity_Property_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Entity_Property_Max_Fields>;
  min?: Maybe<Entity_Property_Min_Fields>;
  stddev?: Maybe<Entity_Property_Stddev_Fields>;
  stddev_pop?: Maybe<Entity_Property_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entity_Property_Stddev_Samp_Fields>;
  sum?: Maybe<Entity_Property_Sum_Fields>;
  var_pop?: Maybe<Entity_Property_Var_Pop_Fields>;
  var_samp?: Maybe<Entity_Property_Var_Samp_Fields>;
  variance?: Maybe<Entity_Property_Variance_Fields>;
};


/** aggregate fields of "entity.property" */
export type Entity_Property_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Property_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "entity.property" */
export type Entity_Property_Aggregate_Order_By = {
  avg?: InputMaybe<Entity_Property_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Entity_Property_Max_Order_By>;
  min?: InputMaybe<Entity_Property_Min_Order_By>;
  stddev?: InputMaybe<Entity_Property_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Entity_Property_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Entity_Property_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Entity_Property_Sum_Order_By>;
  var_pop?: InputMaybe<Entity_Property_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Entity_Property_Var_Samp_Order_By>;
  variance?: InputMaybe<Entity_Property_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Entity_Property_Append_Input = {
  description?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "entity.property" */
export type Entity_Property_Arr_Rel_Insert_Input = {
  data: Array<Entity_Property_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Property_On_Conflict>;
};

/** aggregate avg on columns */
export type Entity_Property_Avg_Fields = {
  __typename?: 'entity_property_avg_fields';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  property_type?: Maybe<Scalars['Float']>;
  total_area?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "entity.property" */
export type Entity_Property_Avg_Order_By = {
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "entity.property". All fields are combined with a logical 'AND'. */
export type Entity_Property_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Property_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Entity_Property_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Property_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  address?: InputMaybe<Entity_Address_Bool_Exp>;
  address_id?: InputMaybe<Uuid_Comparison_Exp>;
  area_unit?: InputMaybe<String_Comparison_Exp>;
  bathrooms?: InputMaybe<Numeric_Comparison_Exp>;
  bedrooms?: InputMaybe<Smallint_Comparison_Exp>;
  creator_uid?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Entity_Owner_Bool_Exp>;
  owner_uid?: InputMaybe<Uuid_Comparison_Exp>;
  propertyTypeByPropertyType?: InputMaybe<Entity_Property_Type_Bool_Exp>;
  property_media?: InputMaybe<Entity_Property_Media_Bool_Exp>;
  property_media_aggregate?: InputMaybe<Entity_Property_Media_Aggregate_Bool_Exp>;
  property_type?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Property_Status_Comparison_Exp>;
  tags?: InputMaybe<String_Array_Comparison_Exp>;
  total_area?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  year_built?: InputMaybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "entity.property" */
export type Entity_Property_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'property__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'property_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Entity_Property_Delete_At_Path_Input = {
  description?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Entity_Property_Delete_Elem_Input = {
  description?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Entity_Property_Delete_Key_Input = {
  description?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "entity.property" */
export type Entity_Property_Inc_Input = {
  bathrooms?: InputMaybe<Scalars['numeric']>;
  bedrooms?: InputMaybe<Scalars['smallint']>;
  property_type?: InputMaybe<Scalars['Int']>;
  total_area?: InputMaybe<Scalars['Int']>;
  year_built?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "entity.property" */
export type Entity_Property_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  address?: InputMaybe<Entity_Address_Obj_Rel_Insert_Input>;
  address_id?: InputMaybe<Scalars['uuid']>;
  area_unit?: InputMaybe<Scalars['String']>;
  bathrooms?: InputMaybe<Scalars['numeric']>;
  bedrooms?: InputMaybe<Scalars['smallint']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Entity_Owner_Obj_Rel_Insert_Input>;
  owner_uid?: InputMaybe<Scalars['uuid']>;
  propertyTypeByPropertyType?: InputMaybe<Entity_Property_Type_Obj_Rel_Insert_Input>;
  property_media?: InputMaybe<Entity_Property_Media_Arr_Rel_Insert_Input>;
  property_type?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['property_status']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  total_area?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  year_built?: InputMaybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type Entity_Property_Max_Fields = {
  __typename?: 'entity_property_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  address_id?: Maybe<Scalars['uuid']>;
  area_unit?: Maybe<Scalars['String']>;
  bathrooms?: Maybe<Scalars['numeric']>;
  bedrooms?: Maybe<Scalars['smallint']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_uid?: Maybe<Scalars['uuid']>;
  property_type?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['property_status']>;
  tags?: Maybe<Array<Scalars['String']>>;
  total_area?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "entity.property" */
export type Entity_Property_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  address_id?: InputMaybe<Order_By>;
  area_unit?: InputMaybe<Order_By>;
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_uid?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** columns and relationships of "entity.property_media" */
export type Entity_Property_Media = {
  __typename?: 'entity_property_media';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  caption?: Maybe<Scalars['String']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  display_order: Scalars['Int'];
  duration?: Maybe<Scalars['Int']>;
  file_size?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['Int']>;
  is_primary: Scalars['Boolean'];
  media_type: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  mime_type?: Maybe<Scalars['String']>;
  original_name: Scalars['String'];
  /** An object relationship */
  property: Entity_Property;
  property_uid: Scalars['uuid'];
  s3_bucket: Scalars['String'];
  s3_key: Scalars['String'];
  sha_256_hash: Scalars['String'];
  url: Scalars['String'];
  /** An object relationship */
  user?: Maybe<App_User>;
  width?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "entity.property_media" */
export type Entity_Property_MediaMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "entity.property_media" */
export type Entity_Property_Media_Aggregate = {
  __typename?: 'entity_property_media_aggregate';
  aggregate?: Maybe<Entity_Property_Media_Aggregate_Fields>;
  nodes: Array<Entity_Property_Media>;
};

export type Entity_Property_Media_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Entity_Property_Media_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Entity_Property_Media_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Entity_Property_Media_Aggregate_Bool_Exp_Count>;
};

export type Entity_Property_Media_Aggregate_Bool_Exp_Bool_And = {
  arguments: Entity_Property_Media_Select_Column_Entity_Property_Media_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Entity_Property_Media_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Entity_Property_Media_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Entity_Property_Media_Select_Column_Entity_Property_Media_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Entity_Property_Media_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Entity_Property_Media_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Entity_Property_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Entity_Property_Media_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "entity.property_media" */
export type Entity_Property_Media_Aggregate_Fields = {
  __typename?: 'entity_property_media_aggregate_fields';
  avg?: Maybe<Entity_Property_Media_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Entity_Property_Media_Max_Fields>;
  min?: Maybe<Entity_Property_Media_Min_Fields>;
  stddev?: Maybe<Entity_Property_Media_Stddev_Fields>;
  stddev_pop?: Maybe<Entity_Property_Media_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entity_Property_Media_Stddev_Samp_Fields>;
  sum?: Maybe<Entity_Property_Media_Sum_Fields>;
  var_pop?: Maybe<Entity_Property_Media_Var_Pop_Fields>;
  var_samp?: Maybe<Entity_Property_Media_Var_Samp_Fields>;
  variance?: Maybe<Entity_Property_Media_Variance_Fields>;
};


/** aggregate fields of "entity.property_media" */
export type Entity_Property_Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Property_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "entity.property_media" */
export type Entity_Property_Media_Aggregate_Order_By = {
  avg?: InputMaybe<Entity_Property_Media_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Entity_Property_Media_Max_Order_By>;
  min?: InputMaybe<Entity_Property_Media_Min_Order_By>;
  stddev?: InputMaybe<Entity_Property_Media_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Entity_Property_Media_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Entity_Property_Media_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Entity_Property_Media_Sum_Order_By>;
  var_pop?: InputMaybe<Entity_Property_Media_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Entity_Property_Media_Var_Samp_Order_By>;
  variance?: InputMaybe<Entity_Property_Media_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Entity_Property_Media_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "entity.property_media" */
export type Entity_Property_Media_Arr_Rel_Insert_Input = {
  data: Array<Entity_Property_Media_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Property_Media_On_Conflict>;
};

/** aggregate avg on columns */
export type Entity_Property_Media_Avg_Fields = {
  __typename?: 'entity_property_media_avg_fields';
  display_order?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  file_size?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "entity.property_media" */
export type Entity_Property_Media_Avg_Order_By = {
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "entity.property_media". All fields are combined with a logical 'AND'. */
export type Entity_Property_Media_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Property_Media_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Entity_Property_Media_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Property_Media_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  caption?: InputMaybe<String_Comparison_Exp>;
  creator_uid?: InputMaybe<Uuid_Comparison_Exp>;
  display_order?: InputMaybe<Int_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  file_size?: InputMaybe<Bigint_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  is_primary?: InputMaybe<Boolean_Comparison_Exp>;
  media_type?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mime_type?: InputMaybe<String_Comparison_Exp>;
  original_name?: InputMaybe<String_Comparison_Exp>;
  property?: InputMaybe<Entity_Property_Bool_Exp>;
  property_uid?: InputMaybe<Uuid_Comparison_Exp>;
  s3_bucket?: InputMaybe<String_Comparison_Exp>;
  s3_key?: InputMaybe<String_Comparison_Exp>;
  sha_256_hash?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "entity.property_media" */
export type Entity_Property_Media_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'property_media__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'property_media_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Entity_Property_Media_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Entity_Property_Media_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Entity_Property_Media_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "entity.property_media" */
export type Entity_Property_Media_Inc_Input = {
  display_order?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['Int']>;
  file_size?: InputMaybe<Scalars['bigint']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "entity.property_media" */
export type Entity_Property_Media_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  caption?: InputMaybe<Scalars['String']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  display_order?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['Int']>;
  file_size?: InputMaybe<Scalars['bigint']>;
  height?: InputMaybe<Scalars['Int']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  media_type?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mime_type?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  property?: InputMaybe<Entity_Property_Obj_Rel_Insert_Input>;
  property_uid?: InputMaybe<Scalars['uuid']>;
  s3_bucket?: InputMaybe<Scalars['String']>;
  s3_key?: InputMaybe<Scalars['String']>;
  sha_256_hash?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Entity_Property_Media_Max_Fields = {
  __typename?: 'entity_property_media_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  caption?: Maybe<Scalars['String']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  display_order?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  file_size?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['Int']>;
  media_type?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  property_uid?: Maybe<Scalars['uuid']>;
  s3_bucket?: Maybe<Scalars['String']>;
  s3_key?: Maybe<Scalars['String']>;
  sha_256_hash?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "entity.property_media" */
export type Entity_Property_Media_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  caption?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  property_uid?: InputMaybe<Order_By>;
  s3_bucket?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  sha_256_hash?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Entity_Property_Media_Min_Fields = {
  __typename?: 'entity_property_media_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  caption?: Maybe<Scalars['String']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  display_order?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  file_size?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['Int']>;
  media_type?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  property_uid?: Maybe<Scalars['uuid']>;
  s3_bucket?: Maybe<Scalars['String']>;
  s3_key?: Maybe<Scalars['String']>;
  sha_256_hash?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "entity.property_media" */
export type Entity_Property_Media_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  caption?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  property_uid?: InputMaybe<Order_By>;
  s3_bucket?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  sha_256_hash?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "entity.property_media" */
export type Entity_Property_Media_Mutation_Response = {
  __typename?: 'entity_property_media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Property_Media>;
};

/** on_conflict condition type for table "entity.property_media" */
export type Entity_Property_Media_On_Conflict = {
  constraint: Entity_Property_Media_Constraint;
  update_columns?: Array<Entity_Property_Media_Update_Column>;
  where?: InputMaybe<Entity_Property_Media_Bool_Exp>;
};

/** Ordering options when selecting data from "entity.property_media". */
export type Entity_Property_Media_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  caption?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  is_primary?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  property?: InputMaybe<Entity_Property_Order_By>;
  property_uid?: InputMaybe<Order_By>;
  s3_bucket?: InputMaybe<Order_By>;
  s3_key?: InputMaybe<Order_By>;
  sha_256_hash?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entity.property_media */
export type Entity_Property_Media_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Entity_Property_Media_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "entity.property_media" */
export type Entity_Property_Media_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'caption'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'display_order'
  /** column name */
  | 'duration'
  /** column name */
  | 'file_size'
  /** column name */
  | 'height'
  /** column name */
  | 'is_primary'
  /** column name */
  | 'media_type'
  /** column name */
  | 'metadata'
  /** column name */
  | 'mime_type'
  /** column name */
  | 'original_name'
  /** column name */
  | 'property_uid'
  /** column name */
  | 's3_bucket'
  /** column name */
  | 's3_key'
  /** column name */
  | 'sha_256_hash'
  /** column name */
  | 'url'
  /** column name */
  | 'width';

/** select "entity_property_media_aggregate_bool_exp_bool_and_arguments_columns" columns of table "entity.property_media" */
export type Entity_Property_Media_Select_Column_Entity_Property_Media_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'is_primary';

/** select "entity_property_media_aggregate_bool_exp_bool_or_arguments_columns" columns of table "entity.property_media" */
export type Entity_Property_Media_Select_Column_Entity_Property_Media_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'is_primary';

/** input type for updating data in table "entity.property_media" */
export type Entity_Property_Media_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  caption?: InputMaybe<Scalars['String']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  display_order?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['Int']>;
  file_size?: InputMaybe<Scalars['bigint']>;
  height?: InputMaybe<Scalars['Int']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  media_type?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mime_type?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  property_uid?: InputMaybe<Scalars['uuid']>;
  s3_bucket?: InputMaybe<Scalars['String']>;
  s3_key?: InputMaybe<Scalars['String']>;
  sha_256_hash?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Entity_Property_Media_Stddev_Fields = {
  __typename?: 'entity_property_media_stddev_fields';
  display_order?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  file_size?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "entity.property_media" */
export type Entity_Property_Media_Stddev_Order_By = {
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Entity_Property_Media_Stddev_Pop_Fields = {
  __typename?: 'entity_property_media_stddev_pop_fields';
  display_order?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  file_size?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "entity.property_media" */
export type Entity_Property_Media_Stddev_Pop_Order_By = {
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Entity_Property_Media_Stddev_Samp_Fields = {
  __typename?: 'entity_property_media_stddev_samp_fields';
  display_order?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  file_size?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "entity.property_media" */
export type Entity_Property_Media_Stddev_Samp_Order_By = {
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "entity_property_media" */
export type Entity_Property_Media_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Property_Media_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Property_Media_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  caption?: InputMaybe<Scalars['String']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  display_order?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['Int']>;
  file_size?: InputMaybe<Scalars['bigint']>;
  height?: InputMaybe<Scalars['Int']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  media_type?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mime_type?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  property_uid?: InputMaybe<Scalars['uuid']>;
  s3_bucket?: InputMaybe<Scalars['String']>;
  s3_key?: InputMaybe<Scalars['String']>;
  sha_256_hash?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Entity_Property_Media_Sum_Fields = {
  __typename?: 'entity_property_media_sum_fields';
  display_order?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  file_size?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "entity.property_media" */
export type Entity_Property_Media_Sum_Order_By = {
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** update columns of table "entity.property_media" */
export type Entity_Property_Media_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'caption'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'display_order'
  /** column name */
  | 'duration'
  /** column name */
  | 'file_size'
  /** column name */
  | 'height'
  /** column name */
  | 'is_primary'
  /** column name */
  | 'media_type'
  /** column name */
  | 'metadata'
  /** column name */
  | 'mime_type'
  /** column name */
  | 'original_name'
  /** column name */
  | 'property_uid'
  /** column name */
  | 's3_bucket'
  /** column name */
  | 's3_key'
  /** column name */
  | 'sha_256_hash'
  /** column name */
  | 'url'
  /** column name */
  | 'width';

export type Entity_Property_Media_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Entity_Property_Media_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Entity_Property_Media_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Entity_Property_Media_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Entity_Property_Media_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Entity_Property_Media_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Entity_Property_Media_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Property_Media_Set_Input>;
  /** filter the rows which have to be updated */
  where: Entity_Property_Media_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Entity_Property_Media_Var_Pop_Fields = {
  __typename?: 'entity_property_media_var_pop_fields';
  display_order?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  file_size?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "entity.property_media" */
export type Entity_Property_Media_Var_Pop_Order_By = {
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Entity_Property_Media_Var_Samp_Fields = {
  __typename?: 'entity_property_media_var_samp_fields';
  display_order?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  file_size?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "entity.property_media" */
export type Entity_Property_Media_Var_Samp_Order_By = {
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Entity_Property_Media_Variance_Fields = {
  __typename?: 'entity_property_media_variance_fields';
  display_order?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  file_size?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "entity.property_media" */
export type Entity_Property_Media_Variance_Order_By = {
  display_order?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  file_size?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Entity_Property_Min_Fields = {
  __typename?: 'entity_property_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  address_id?: Maybe<Scalars['uuid']>;
  area_unit?: Maybe<Scalars['String']>;
  bathrooms?: Maybe<Scalars['numeric']>;
  bedrooms?: Maybe<Scalars['smallint']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_uid?: Maybe<Scalars['uuid']>;
  property_type?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['property_status']>;
  tags?: Maybe<Array<Scalars['String']>>;
  total_area?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "entity.property" */
export type Entity_Property_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  address_id?: InputMaybe<Order_By>;
  area_unit?: InputMaybe<Order_By>;
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_uid?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "entity.property" */
export type Entity_Property_Mutation_Response = {
  __typename?: 'entity_property_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Property>;
};

/** input type for inserting object relation for remote table "entity.property" */
export type Entity_Property_Obj_Rel_Insert_Input = {
  data: Entity_Property_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Property_On_Conflict>;
};

/** on_conflict condition type for table "entity.property" */
export type Entity_Property_On_Conflict = {
  constraint: Entity_Property_Constraint;
  update_columns?: Array<Entity_Property_Update_Column>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};

/** Ordering options when selecting data from "entity.property". */
export type Entity_Property_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  address?: InputMaybe<Entity_Address_Order_By>;
  address_id?: InputMaybe<Order_By>;
  area_unit?: InputMaybe<Order_By>;
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Entity_Owner_Order_By>;
  owner_uid?: InputMaybe<Order_By>;
  propertyTypeByPropertyType?: InputMaybe<Entity_Property_Type_Order_By>;
  property_media_aggregate?: InputMaybe<Entity_Property_Media_Aggregate_Order_By>;
  property_type?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entity.property */
export type Entity_Property_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Entity_Property_Prepend_Input = {
  description?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "entity.property" */
export type Entity_Property_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'address_id'
  /** column name */
  | 'area_unit'
  /** column name */
  | 'bathrooms'
  /** column name */
  | 'bedrooms'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'description'
  /** column name */
  | 'name'
  /** column name */
  | 'owner_uid'
  /** column name */
  | 'property_type'
  /** column name */
  | 'status'
  /** column name */
  | 'tags'
  /** column name */
  | 'total_area'
  /** column name */
  | 'year_built';

/** input type for updating data in table "entity.property" */
export type Entity_Property_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  address_id?: InputMaybe<Scalars['uuid']>;
  area_unit?: InputMaybe<Scalars['String']>;
  bathrooms?: InputMaybe<Scalars['numeric']>;
  bedrooms?: InputMaybe<Scalars['smallint']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  owner_uid?: InputMaybe<Scalars['uuid']>;
  property_type?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['property_status']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  total_area?: InputMaybe<Scalars['Int']>;
  year_built?: InputMaybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Entity_Property_Stddev_Fields = {
  __typename?: 'entity_property_stddev_fields';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  property_type?: Maybe<Scalars['Float']>;
  total_area?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "entity.property" */
export type Entity_Property_Stddev_Order_By = {
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Entity_Property_Stddev_Pop_Fields = {
  __typename?: 'entity_property_stddev_pop_fields';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  property_type?: Maybe<Scalars['Float']>;
  total_area?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "entity.property" */
export type Entity_Property_Stddev_Pop_Order_By = {
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Entity_Property_Stddev_Samp_Fields = {
  __typename?: 'entity_property_stddev_samp_fields';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  property_type?: Maybe<Scalars['Float']>;
  total_area?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "entity.property" */
export type Entity_Property_Stddev_Samp_Order_By = {
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "entity_property" */
export type Entity_Property_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Property_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Property_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  address_id?: InputMaybe<Scalars['uuid']>;
  area_unit?: InputMaybe<Scalars['String']>;
  bathrooms?: InputMaybe<Scalars['numeric']>;
  bedrooms?: InputMaybe<Scalars['smallint']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  owner_uid?: InputMaybe<Scalars['uuid']>;
  property_type?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['property_status']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  total_area?: InputMaybe<Scalars['Int']>;
  year_built?: InputMaybe<Scalars['smallint']>;
};

/** aggregate sum on columns */
export type Entity_Property_Sum_Fields = {
  __typename?: 'entity_property_sum_fields';
  bathrooms?: Maybe<Scalars['numeric']>;
  bedrooms?: Maybe<Scalars['smallint']>;
  property_type?: Maybe<Scalars['Int']>;
  total_area?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "entity.property" */
export type Entity_Property_Sum_Order_By = {
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** columns and relationships of "entity.property_type" */
export type Entity_Property_Type = {
  __typename?: 'entity_property_type';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  properties: Array<Entity_Property>;
  /** An aggregate relationship */
  properties_aggregate: Entity_Property_Aggregate;
  type_id: Scalars['Int'];
  type_name: Scalars['String'];
};


/** columns and relationships of "entity.property_type" */
export type Entity_Property_TypePropertiesArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};


/** columns and relationships of "entity.property_type" */
export type Entity_Property_TypeProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};

/** aggregated selection of "entity.property_type" */
export type Entity_Property_Type_Aggregate = {
  __typename?: 'entity_property_type_aggregate';
  aggregate?: Maybe<Entity_Property_Type_Aggregate_Fields>;
  nodes: Array<Entity_Property_Type>;
};

/** aggregate fields of "entity.property_type" */
export type Entity_Property_Type_Aggregate_Fields = {
  __typename?: 'entity_property_type_aggregate_fields';
  avg?: Maybe<Entity_Property_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Entity_Property_Type_Max_Fields>;
  min?: Maybe<Entity_Property_Type_Min_Fields>;
  stddev?: Maybe<Entity_Property_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Entity_Property_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entity_Property_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Entity_Property_Type_Sum_Fields>;
  var_pop?: Maybe<Entity_Property_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Entity_Property_Type_Var_Samp_Fields>;
  variance?: Maybe<Entity_Property_Type_Variance_Fields>;
};


/** aggregate fields of "entity.property_type" */
export type Entity_Property_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Property_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Entity_Property_Type_Avg_Fields = {
  __typename?: 'entity_property_type_avg_fields';
  type_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "entity.property_type". All fields are combined with a logical 'AND'. */
export type Entity_Property_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Property_Type_Bool_Exp>>;
  _not?: InputMaybe<Entity_Property_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Property_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  properties?: InputMaybe<Entity_Property_Bool_Exp>;
  properties_aggregate?: InputMaybe<Entity_Property_Aggregate_Bool_Exp>;
  type_id?: InputMaybe<Int_Comparison_Exp>;
  type_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "entity.property_type" */
export type Entity_Property_Type_Constraint =
  /** unique or primary key constraint on columns "type_id" */
  | 'property_type_pkey'
  /** unique or primary key constraint on columns "type_name" */
  | 'property_type_type_name_key';

/** input type for incrementing numeric columns in table "entity.property_type" */
export type Entity_Property_Type_Inc_Input = {
  type_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "entity.property_type" */
export type Entity_Property_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Entity_Property_Arr_Rel_Insert_Input>;
  type_id?: InputMaybe<Scalars['Int']>;
  type_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Entity_Property_Type_Max_Fields = {
  __typename?: 'entity_property_type_max_fields';
  description?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['Int']>;
  type_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Entity_Property_Type_Min_Fields = {
  __typename?: 'entity_property_type_min_fields';
  description?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['Int']>;
  type_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "entity.property_type" */
export type Entity_Property_Type_Mutation_Response = {
  __typename?: 'entity_property_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Property_Type>;
};

/** input type for inserting object relation for remote table "entity.property_type" */
export type Entity_Property_Type_Obj_Rel_Insert_Input = {
  data: Entity_Property_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Property_Type_On_Conflict>;
};

/** on_conflict condition type for table "entity.property_type" */
export type Entity_Property_Type_On_Conflict = {
  constraint: Entity_Property_Type_Constraint;
  update_columns?: Array<Entity_Property_Type_Update_Column>;
  where?: InputMaybe<Entity_Property_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "entity.property_type". */
export type Entity_Property_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  properties_aggregate?: InputMaybe<Entity_Property_Aggregate_Order_By>;
  type_id?: InputMaybe<Order_By>;
  type_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entity.property_type */
export type Entity_Property_Type_Pk_Columns_Input = {
  type_id: Scalars['Int'];
};

/** select columns of table "entity.property_type" */
export type Entity_Property_Type_Select_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'type_id'
  /** column name */
  | 'type_name';

/** input type for updating data in table "entity.property_type" */
export type Entity_Property_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  type_id?: InputMaybe<Scalars['Int']>;
  type_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Entity_Property_Type_Stddev_Fields = {
  __typename?: 'entity_property_type_stddev_fields';
  type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Entity_Property_Type_Stddev_Pop_Fields = {
  __typename?: 'entity_property_type_stddev_pop_fields';
  type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Entity_Property_Type_Stddev_Samp_Fields = {
  __typename?: 'entity_property_type_stddev_samp_fields';
  type_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "entity_property_type" */
export type Entity_Property_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Property_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Property_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  type_id?: InputMaybe<Scalars['Int']>;
  type_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Entity_Property_Type_Sum_Fields = {
  __typename?: 'entity_property_type_sum_fields';
  type_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "entity.property_type" */
export type Entity_Property_Type_Update_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'type_id'
  /** column name */
  | 'type_name';

export type Entity_Property_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Entity_Property_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Property_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Entity_Property_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Entity_Property_Type_Var_Pop_Fields = {
  __typename?: 'entity_property_type_var_pop_fields';
  type_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Entity_Property_Type_Var_Samp_Fields = {
  __typename?: 'entity_property_type_var_samp_fields';
  type_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Entity_Property_Type_Variance_Fields = {
  __typename?: 'entity_property_type_variance_fields';
  type_id?: Maybe<Scalars['Float']>;
};

/** update columns of table "entity.property" */
export type Entity_Property_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'address_id'
  /** column name */
  | 'area_unit'
  /** column name */
  | 'bathrooms'
  /** column name */
  | 'bedrooms'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'description'
  /** column name */
  | 'name'
  /** column name */
  | 'owner_uid'
  /** column name */
  | 'property_type'
  /** column name */
  | 'status'
  /** column name */
  | 'tags'
  /** column name */
  | 'total_area'
  /** column name */
  | 'year_built';

export type Entity_Property_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Entity_Property_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Entity_Property_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Entity_Property_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Entity_Property_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Entity_Property_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Entity_Property_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Property_Set_Input>;
  /** filter the rows which have to be updated */
  where: Entity_Property_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Entity_Property_Var_Pop_Fields = {
  __typename?: 'entity_property_var_pop_fields';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  property_type?: Maybe<Scalars['Float']>;
  total_area?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "entity.property" */
export type Entity_Property_Var_Pop_Order_By = {
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Entity_Property_Var_Samp_Fields = {
  __typename?: 'entity_property_var_samp_fields';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  property_type?: Maybe<Scalars['Float']>;
  total_area?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "entity.property" */
export type Entity_Property_Var_Samp_Order_By = {
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Entity_Property_Variance_Fields = {
  __typename?: 'entity_property_variance_fields';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  property_type?: Maybe<Scalars['Float']>;
  total_area?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "entity.property" */
export type Entity_Property_Variance_Order_By = {
  bathrooms?: InputMaybe<Order_By>;
  bedrooms?: InputMaybe<Order_By>;
  property_type?: InputMaybe<Order_By>;
  total_area?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
};

/** columns and relationships of "entity.state" */
export type Entity_State = {
  __typename?: 'entity_state';
  /** An object relationship */
  country: Entity_Country;
  country_code: Scalars['bpchar'];
  name: Scalars['String'];
  state_code: Scalars['String'];
};

/** aggregated selection of "entity.state" */
export type Entity_State_Aggregate = {
  __typename?: 'entity_state_aggregate';
  aggregate?: Maybe<Entity_State_Aggregate_Fields>;
  nodes: Array<Entity_State>;
};

export type Entity_State_Aggregate_Bool_Exp = {
  count?: InputMaybe<Entity_State_Aggregate_Bool_Exp_Count>;
};

export type Entity_State_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Entity_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Entity_State_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "entity.state" */
export type Entity_State_Aggregate_Fields = {
  __typename?: 'entity_state_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Entity_State_Max_Fields>;
  min?: Maybe<Entity_State_Min_Fields>;
};


/** aggregate fields of "entity.state" */
export type Entity_State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "entity.state" */
export type Entity_State_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Entity_State_Max_Order_By>;
  min?: InputMaybe<Entity_State_Min_Order_By>;
};

/** input type for inserting array relation for remote table "entity.state" */
export type Entity_State_Arr_Rel_Insert_Input = {
  data: Array<Entity_State_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_State_On_Conflict>;
};

/** Boolean expression to filter rows from the table "entity.state". All fields are combined with a logical 'AND'. */
export type Entity_State_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_State_Bool_Exp>>;
  _not?: InputMaybe<Entity_State_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_State_Bool_Exp>>;
  country?: InputMaybe<Entity_Country_Bool_Exp>;
  country_code?: InputMaybe<Bpchar_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  state_code?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "entity.state" */
export type Entity_State_Constraint =
  /** unique or primary key constraint on columns "state_code" */
  | 'state_pkey';

/** input type for inserting data into table "entity.state" */
export type Entity_State_Insert_Input = {
  country?: InputMaybe<Entity_Country_Obj_Rel_Insert_Input>;
  country_code?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  state_code?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Entity_State_Max_Fields = {
  __typename?: 'entity_state_max_fields';
  country_code?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  state_code?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "entity.state" */
export type Entity_State_Max_Order_By = {
  country_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  state_code?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Entity_State_Min_Fields = {
  __typename?: 'entity_state_min_fields';
  country_code?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  state_code?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "entity.state" */
export type Entity_State_Min_Order_By = {
  country_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  state_code?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "entity.state" */
export type Entity_State_Mutation_Response = {
  __typename?: 'entity_state_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_State>;
};

/** on_conflict condition type for table "entity.state" */
export type Entity_State_On_Conflict = {
  constraint: Entity_State_Constraint;
  update_columns?: Array<Entity_State_Update_Column>;
  where?: InputMaybe<Entity_State_Bool_Exp>;
};

/** Ordering options when selecting data from "entity.state". */
export type Entity_State_Order_By = {
  country?: InputMaybe<Entity_Country_Order_By>;
  country_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  state_code?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entity.state */
export type Entity_State_Pk_Columns_Input = {
  state_code: Scalars['String'];
};

/** select columns of table "entity.state" */
export type Entity_State_Select_Column =
  /** column name */
  | 'country_code'
  /** column name */
  | 'name'
  /** column name */
  | 'state_code';

/** input type for updating data in table "entity.state" */
export type Entity_State_Set_Input = {
  country_code?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  state_code?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "entity_state" */
export type Entity_State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_State_Stream_Cursor_Value_Input = {
  country_code?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['String']>;
  state_code?: InputMaybe<Scalars['String']>;
};

/** update columns of table "entity.state" */
export type Entity_State_Update_Column =
  /** column name */
  | 'country_code'
  /** column name */
  | 'name'
  /** column name */
  | 'state_code';

export type Entity_State_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_State_Set_Input>;
  /** filter the rows which have to be updated */
  where: Entity_State_Bool_Exp;
};

/** columns and relationships of "form.form" */
export type Form_Form = {
  __typename?: 'form_form';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  banner_url?: Maybe<Scalars['String']>;
  creator_uid: Scalars['uuid'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  form_fields: Array<Form_Form_Field>;
  /** An aggregate relationship */
  form_fields_aggregate: Form_Form_Field_Aggregate;
  /** An array relationship */
  form_responses: Array<Form_Form_Response>;
  /** An aggregate relationship */
  form_responses_aggregate: Form_Form_Response_Aggregate;
  name: Scalars['String'];
  require_login: Scalars['Boolean'];
  status: Scalars['String'];
  success_message?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  /** An object relationship */
  user: App_User;
  version: Scalars['Int'];
  /** An object relationship */
  workspace: App_Workspace;
  workspace_uid: Scalars['uuid'];
};


/** columns and relationships of "form.form" */
export type Form_FormForm_FieldsArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Field_Order_By>>;
  where?: InputMaybe<Form_Form_Field_Bool_Exp>;
};


/** columns and relationships of "form.form" */
export type Form_FormForm_Fields_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Field_Order_By>>;
  where?: InputMaybe<Form_Form_Field_Bool_Exp>;
};


/** columns and relationships of "form.form" */
export type Form_FormForm_ResponsesArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Bool_Exp>;
};


/** columns and relationships of "form.form" */
export type Form_FormForm_Responses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Bool_Exp>;
};

/** aggregated selection of "form.form" */
export type Form_Form_Aggregate = {
  __typename?: 'form_form_aggregate';
  aggregate?: Maybe<Form_Form_Aggregate_Fields>;
  nodes: Array<Form_Form>;
};

/** aggregate fields of "form.form" */
export type Form_Form_Aggregate_Fields = {
  __typename?: 'form_form_aggregate_fields';
  avg?: Maybe<Form_Form_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Form_Form_Max_Fields>;
  min?: Maybe<Form_Form_Min_Fields>;
  stddev?: Maybe<Form_Form_Stddev_Fields>;
  stddev_pop?: Maybe<Form_Form_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Form_Form_Stddev_Samp_Fields>;
  sum?: Maybe<Form_Form_Sum_Fields>;
  var_pop?: Maybe<Form_Form_Var_Pop_Fields>;
  var_samp?: Maybe<Form_Form_Var_Samp_Fields>;
  variance?: Maybe<Form_Form_Variance_Fields>;
};


/** aggregate fields of "form.form" */
export type Form_Form_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Form_Form_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Form_Form_Avg_Fields = {
  __typename?: 'form_form_avg_fields';
  version?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "form.form". All fields are combined with a logical 'AND'. */
export type Form_Form_Bool_Exp = {
  _and?: InputMaybe<Array<Form_Form_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Form_Form_Bool_Exp>;
  _or?: InputMaybe<Array<Form_Form_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  banner_url?: InputMaybe<String_Comparison_Exp>;
  creator_uid?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  form_fields?: InputMaybe<Form_Form_Field_Bool_Exp>;
  form_fields_aggregate?: InputMaybe<Form_Form_Field_Aggregate_Bool_Exp>;
  form_responses?: InputMaybe<Form_Form_Response_Bool_Exp>;
  form_responses_aggregate?: InputMaybe<Form_Form_Response_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  require_login?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  success_message?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<String_Array_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "form.form" */
export type Form_Form_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'form__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'form_pk';

/** columns and relationships of "form.form_field" */
export type Form_Form_Field = {
  __typename?: 'form_form_field';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  active: Scalars['Boolean'];
  config: Scalars['jsonb'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  form: Form_Form;
  /** An array relationship */
  form_response_answers: Array<Form_Form_Response_Answer>;
  /** An aggregate relationship */
  form_response_answers_aggregate: Form_Form_Response_Answer_Aggregate;
  form_uid: Scalars['uuid'];
  label: Scalars['String'];
  order_: Scalars['Int'];
  required: Scalars['Boolean'];
  type: Scalars['String'];
  validation?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "form.form_field" */
export type Form_Form_FieldConfigArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "form.form_field" */
export type Form_Form_FieldForm_Response_AnswersArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Answer_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};


/** columns and relationships of "form.form_field" */
export type Form_Form_FieldForm_Response_Answers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Answer_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};


/** columns and relationships of "form.form_field" */
export type Form_Form_FieldValidationArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "form.form_field" */
export type Form_Form_Field_Aggregate = {
  __typename?: 'form_form_field_aggregate';
  aggregate?: Maybe<Form_Form_Field_Aggregate_Fields>;
  nodes: Array<Form_Form_Field>;
};

export type Form_Form_Field_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Form_Form_Field_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Form_Form_Field_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Form_Form_Field_Aggregate_Bool_Exp_Count>;
};

export type Form_Form_Field_Aggregate_Bool_Exp_Bool_And = {
  arguments: Form_Form_Field_Select_Column_Form_Form_Field_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Form_Form_Field_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Form_Form_Field_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Form_Form_Field_Select_Column_Form_Form_Field_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Form_Form_Field_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Form_Form_Field_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Form_Form_Field_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Form_Form_Field_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "form.form_field" */
export type Form_Form_Field_Aggregate_Fields = {
  __typename?: 'form_form_field_aggregate_fields';
  avg?: Maybe<Form_Form_Field_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Form_Form_Field_Max_Fields>;
  min?: Maybe<Form_Form_Field_Min_Fields>;
  stddev?: Maybe<Form_Form_Field_Stddev_Fields>;
  stddev_pop?: Maybe<Form_Form_Field_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Form_Form_Field_Stddev_Samp_Fields>;
  sum?: Maybe<Form_Form_Field_Sum_Fields>;
  var_pop?: Maybe<Form_Form_Field_Var_Pop_Fields>;
  var_samp?: Maybe<Form_Form_Field_Var_Samp_Fields>;
  variance?: Maybe<Form_Form_Field_Variance_Fields>;
};


/** aggregate fields of "form.form_field" */
export type Form_Form_Field_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Form_Form_Field_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form.form_field" */
export type Form_Form_Field_Aggregate_Order_By = {
  avg?: InputMaybe<Form_Form_Field_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Form_Form_Field_Max_Order_By>;
  min?: InputMaybe<Form_Form_Field_Min_Order_By>;
  stddev?: InputMaybe<Form_Form_Field_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Form_Form_Field_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Form_Form_Field_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Form_Form_Field_Sum_Order_By>;
  var_pop?: InputMaybe<Form_Form_Field_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Form_Form_Field_Var_Samp_Order_By>;
  variance?: InputMaybe<Form_Form_Field_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Form_Form_Field_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  validation?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "form.form_field" */
export type Form_Form_Field_Arr_Rel_Insert_Input = {
  data: Array<Form_Form_Field_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Form_Form_Field_On_Conflict>;
};

/** aggregate avg on columns */
export type Form_Form_Field_Avg_Fields = {
  __typename?: 'form_form_field_avg_fields';
  order_?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "form.form_field" */
export type Form_Form_Field_Avg_Order_By = {
  order_?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "form.form_field". All fields are combined with a logical 'AND'. */
export type Form_Form_Field_Bool_Exp = {
  _and?: InputMaybe<Array<Form_Form_Field_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Form_Form_Field_Bool_Exp>;
  _or?: InputMaybe<Array<Form_Form_Field_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  form?: InputMaybe<Form_Form_Bool_Exp>;
  form_response_answers?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
  form_response_answers_aggregate?: InputMaybe<Form_Form_Response_Answer_Aggregate_Bool_Exp>;
  form_uid?: InputMaybe<Uuid_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  order_?: InputMaybe<Int_Comparison_Exp>;
  required?: InputMaybe<Boolean_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  validation?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "form.form_field" */
export type Form_Form_Field_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'form_question__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'form_question_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Form_Form_Field_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
  validation?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Form_Form_Field_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
  validation?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Form_Form_Field_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
  validation?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "form.form_field" */
export type Form_Form_Field_Inc_Input = {
  order_?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "form.form_field" */
export type Form_Form_Field_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  config?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  form?: InputMaybe<Form_Form_Obj_Rel_Insert_Input>;
  form_response_answers?: InputMaybe<Form_Form_Response_Answer_Arr_Rel_Insert_Input>;
  form_uid?: InputMaybe<Scalars['uuid']>;
  label?: InputMaybe<Scalars['String']>;
  order_?: InputMaybe<Scalars['Int']>;
  required?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  validation?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Form_Form_Field_Max_Fields = {
  __typename?: 'form_form_field_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  form_uid?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  order_?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "form.form_field" */
export type Form_Form_Field_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  form_uid?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  order_?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Form_Field_Min_Fields = {
  __typename?: 'form_form_field_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  form_uid?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  order_?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "form.form_field" */
export type Form_Form_Field_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  form_uid?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  order_?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "form.form_field" */
export type Form_Form_Field_Mutation_Response = {
  __typename?: 'form_form_field_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Form_Form_Field>;
};

/** input type for inserting object relation for remote table "form.form_field" */
export type Form_Form_Field_Obj_Rel_Insert_Input = {
  data: Form_Form_Field_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Form_Form_Field_On_Conflict>;
};

/** on_conflict condition type for table "form.form_field" */
export type Form_Form_Field_On_Conflict = {
  constraint: Form_Form_Field_Constraint;
  update_columns?: Array<Form_Form_Field_Update_Column>;
  where?: InputMaybe<Form_Form_Field_Bool_Exp>;
};

/** Ordering options when selecting data from "form.form_field". */
export type Form_Form_Field_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  form?: InputMaybe<Form_Form_Order_By>;
  form_response_answers_aggregate?: InputMaybe<Form_Form_Response_Answer_Aggregate_Order_By>;
  form_uid?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  order_?: InputMaybe<Order_By>;
  required?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validation?: InputMaybe<Order_By>;
};

/** primary key columns input for table: form.form_field */
export type Form_Form_Field_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Form_Form_Field_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  validation?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "form.form_field" */
export type Form_Form_Field_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'config'
  /** column name */
  | 'description'
  /** column name */
  | 'form_uid'
  /** column name */
  | 'label'
  /** column name */
  | 'order_'
  /** column name */
  | 'required'
  /** column name */
  | 'type'
  /** column name */
  | 'validation';

/** select "form_form_field_aggregate_bool_exp_bool_and_arguments_columns" columns of table "form.form_field" */
export type Form_Form_Field_Select_Column_Form_Form_Field_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'active'
  /** column name */
  | 'required';

/** select "form_form_field_aggregate_bool_exp_bool_or_arguments_columns" columns of table "form.form_field" */
export type Form_Form_Field_Select_Column_Form_Form_Field_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'active'
  /** column name */
  | 'required';

/** input type for updating data in table "form.form_field" */
export type Form_Form_Field_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  config?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  form_uid?: InputMaybe<Scalars['uuid']>;
  label?: InputMaybe<Scalars['String']>;
  order_?: InputMaybe<Scalars['Int']>;
  required?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  validation?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Form_Form_Field_Stddev_Fields = {
  __typename?: 'form_form_field_stddev_fields';
  order_?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "form.form_field" */
export type Form_Form_Field_Stddev_Order_By = {
  order_?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Form_Form_Field_Stddev_Pop_Fields = {
  __typename?: 'form_form_field_stddev_pop_fields';
  order_?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "form.form_field" */
export type Form_Form_Field_Stddev_Pop_Order_By = {
  order_?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Form_Form_Field_Stddev_Samp_Fields = {
  __typename?: 'form_form_field_stddev_samp_fields';
  order_?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "form.form_field" */
export type Form_Form_Field_Stddev_Samp_Order_By = {
  order_?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "form_form_field" */
export type Form_Form_Field_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Form_Form_Field_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Form_Form_Field_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  active?: InputMaybe<Scalars['Boolean']>;
  config?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  form_uid?: InputMaybe<Scalars['uuid']>;
  label?: InputMaybe<Scalars['String']>;
  order_?: InputMaybe<Scalars['Int']>;
  required?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  validation?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Form_Form_Field_Sum_Fields = {
  __typename?: 'form_form_field_sum_fields';
  order_?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "form.form_field" */
export type Form_Form_Field_Sum_Order_By = {
  order_?: InputMaybe<Order_By>;
};

/** update columns of table "form.form_field" */
export type Form_Form_Field_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'active'
  /** column name */
  | 'config'
  /** column name */
  | 'description'
  /** column name */
  | 'form_uid'
  /** column name */
  | 'label'
  /** column name */
  | 'order_'
  /** column name */
  | 'required'
  /** column name */
  | 'type'
  /** column name */
  | 'validation';

export type Form_Form_Field_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Form_Form_Field_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Form_Form_Field_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Form_Form_Field_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Form_Form_Field_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Form_Form_Field_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Form_Form_Field_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Form_Form_Field_Set_Input>;
  /** filter the rows which have to be updated */
  where: Form_Form_Field_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Form_Form_Field_Var_Pop_Fields = {
  __typename?: 'form_form_field_var_pop_fields';
  order_?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "form.form_field" */
export type Form_Form_Field_Var_Pop_Order_By = {
  order_?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Form_Form_Field_Var_Samp_Fields = {
  __typename?: 'form_form_field_var_samp_fields';
  order_?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "form.form_field" */
export type Form_Form_Field_Var_Samp_Order_By = {
  order_?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Form_Form_Field_Variance_Fields = {
  __typename?: 'form_form_field_variance_fields';
  order_?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "form.form_field" */
export type Form_Form_Field_Variance_Order_By = {
  order_?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "form.form" */
export type Form_Form_Inc_Input = {
  version?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "form.form" */
export type Form_Form_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  banner_url?: InputMaybe<Scalars['String']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  form_fields?: InputMaybe<Form_Form_Field_Arr_Rel_Insert_Input>;
  form_responses?: InputMaybe<Form_Form_Response_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  require_login?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  success_message?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  version?: InputMaybe<Scalars['Int']>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Form_Form_Max_Fields = {
  __typename?: 'form_form_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  banner_url?: Maybe<Scalars['String']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  success_message?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  version?: Maybe<Scalars['Int']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Form_Form_Min_Fields = {
  __typename?: 'form_form_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  banner_url?: Maybe<Scalars['String']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  success_message?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  version?: Maybe<Scalars['Int']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "form.form" */
export type Form_Form_Mutation_Response = {
  __typename?: 'form_form_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Form_Form>;
};

/** input type for inserting object relation for remote table "form.form" */
export type Form_Form_Obj_Rel_Insert_Input = {
  data: Form_Form_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Form_Form_On_Conflict>;
};

/** on_conflict condition type for table "form.form" */
export type Form_Form_On_Conflict = {
  constraint: Form_Form_Constraint;
  update_columns?: Array<Form_Form_Update_Column>;
  where?: InputMaybe<Form_Form_Bool_Exp>;
};

/** Ordering options when selecting data from "form.form". */
export type Form_Form_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  banner_url?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  form_fields_aggregate?: InputMaybe<Form_Form_Field_Aggregate_Order_By>;
  form_responses_aggregate?: InputMaybe<Form_Form_Response_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  require_login?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  success_message?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  version?: InputMaybe<Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: form.form */
export type Form_Form_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** columns and relationships of "form.form_response" */
export type Form_Form_Response = {
  __typename?: 'form_form_response';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  /** An object relationship */
  form: Form_Form;
  /** An array relationship */
  form_response_answers: Array<Form_Form_Response_Answer>;
  /** An aggregate relationship */
  form_response_answers_aggregate: Form_Form_Response_Answer_Aggregate;
  form_uid: Scalars['uuid'];
  listing_uid?: Maybe<Scalars['uuid']>;
  respondent_email?: Maybe<Scalars['String']>;
  respondent_name?: Maybe<Scalars['String']>;
  submitted_by?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user?: Maybe<App_User>;
};


/** columns and relationships of "form.form_response" */
export type Form_Form_ResponseForm_Response_AnswersArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Answer_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};


/** columns and relationships of "form.form_response" */
export type Form_Form_ResponseForm_Response_Answers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Answer_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};

/** aggregated selection of "form.form_response" */
export type Form_Form_Response_Aggregate = {
  __typename?: 'form_form_response_aggregate';
  aggregate?: Maybe<Form_Form_Response_Aggregate_Fields>;
  nodes: Array<Form_Form_Response>;
};

export type Form_Form_Response_Aggregate_Bool_Exp = {
  count?: InputMaybe<Form_Form_Response_Aggregate_Bool_Exp_Count>;
};

export type Form_Form_Response_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Form_Form_Response_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Form_Form_Response_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "form.form_response" */
export type Form_Form_Response_Aggregate_Fields = {
  __typename?: 'form_form_response_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Form_Form_Response_Max_Fields>;
  min?: Maybe<Form_Form_Response_Min_Fields>;
};


/** aggregate fields of "form.form_response" */
export type Form_Form_Response_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Form_Form_Response_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form.form_response" */
export type Form_Form_Response_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Form_Form_Response_Max_Order_By>;
  min?: InputMaybe<Form_Form_Response_Min_Order_By>;
};

/** columns and relationships of "form.form_response_answer" */
export type Form_Form_Response_Answer = {
  __typename?: 'form_form_response_answer';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  answer: Scalars['jsonb'];
  /** An object relationship */
  form_field: Form_Form_Field;
  /** An object relationship */
  form_response: Form_Form_Response;
  question_uid: Scalars['uuid'];
  response_uid: Scalars['uuid'];
};


/** columns and relationships of "form.form_response_answer" */
export type Form_Form_Response_AnswerAnswerArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "form.form_response_answer" */
export type Form_Form_Response_Answer_Aggregate = {
  __typename?: 'form_form_response_answer_aggregate';
  aggregate?: Maybe<Form_Form_Response_Answer_Aggregate_Fields>;
  nodes: Array<Form_Form_Response_Answer>;
};

export type Form_Form_Response_Answer_Aggregate_Bool_Exp = {
  count?: InputMaybe<Form_Form_Response_Answer_Aggregate_Bool_Exp_Count>;
};

export type Form_Form_Response_Answer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "form.form_response_answer" */
export type Form_Form_Response_Answer_Aggregate_Fields = {
  __typename?: 'form_form_response_answer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Form_Form_Response_Answer_Max_Fields>;
  min?: Maybe<Form_Form_Response_Answer_Min_Fields>;
};


/** aggregate fields of "form.form_response_answer" */
export type Form_Form_Response_Answer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form.form_response_answer" */
export type Form_Form_Response_Answer_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Form_Form_Response_Answer_Max_Order_By>;
  min?: InputMaybe<Form_Form_Response_Answer_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Form_Form_Response_Answer_Append_Input = {
  answer?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "form.form_response_answer" */
export type Form_Form_Response_Answer_Arr_Rel_Insert_Input = {
  data: Array<Form_Form_Response_Answer_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Form_Form_Response_Answer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "form.form_response_answer". All fields are combined with a logical 'AND'. */
export type Form_Form_Response_Answer_Bool_Exp = {
  _and?: InputMaybe<Array<Form_Form_Response_Answer_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
  _or?: InputMaybe<Array<Form_Form_Response_Answer_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  answer?: InputMaybe<Jsonb_Comparison_Exp>;
  form_field?: InputMaybe<Form_Form_Field_Bool_Exp>;
  form_response?: InputMaybe<Form_Form_Response_Bool_Exp>;
  question_uid?: InputMaybe<Uuid_Comparison_Exp>;
  response_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "form.form_response_answer" */
export type Form_Form_Response_Answer_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'form_response_answer__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'form_response_answer_pk'
  /** unique or primary key constraint on columns "response_uid", "question_uid" */
  | 'unique_answer_per_question';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Form_Form_Response_Answer_Delete_At_Path_Input = {
  answer?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Form_Form_Response_Answer_Delete_Elem_Input = {
  answer?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Form_Form_Response_Answer_Delete_Key_Input = {
  answer?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "form.form_response_answer" */
export type Form_Form_Response_Answer_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  answer?: InputMaybe<Scalars['jsonb']>;
  form_field?: InputMaybe<Form_Form_Field_Obj_Rel_Insert_Input>;
  form_response?: InputMaybe<Form_Form_Response_Obj_Rel_Insert_Input>;
  question_uid?: InputMaybe<Scalars['uuid']>;
  response_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Form_Form_Response_Answer_Max_Fields = {
  __typename?: 'form_form_response_answer_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  question_uid?: Maybe<Scalars['uuid']>;
  response_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "form.form_response_answer" */
export type Form_Form_Response_Answer_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  question_uid?: InputMaybe<Order_By>;
  response_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Form_Response_Answer_Min_Fields = {
  __typename?: 'form_form_response_answer_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  question_uid?: Maybe<Scalars['uuid']>;
  response_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "form.form_response_answer" */
export type Form_Form_Response_Answer_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  question_uid?: InputMaybe<Order_By>;
  response_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "form.form_response_answer" */
export type Form_Form_Response_Answer_Mutation_Response = {
  __typename?: 'form_form_response_answer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Form_Form_Response_Answer>;
};

/** on_conflict condition type for table "form.form_response_answer" */
export type Form_Form_Response_Answer_On_Conflict = {
  constraint: Form_Form_Response_Answer_Constraint;
  update_columns?: Array<Form_Form_Response_Answer_Update_Column>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};

/** Ordering options when selecting data from "form.form_response_answer". */
export type Form_Form_Response_Answer_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  answer?: InputMaybe<Order_By>;
  form_field?: InputMaybe<Form_Form_Field_Order_By>;
  form_response?: InputMaybe<Form_Form_Response_Order_By>;
  question_uid?: InputMaybe<Order_By>;
  response_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: form.form_response_answer */
export type Form_Form_Response_Answer_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Form_Form_Response_Answer_Prepend_Input = {
  answer?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "form.form_response_answer" */
export type Form_Form_Response_Answer_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'answer'
  /** column name */
  | 'question_uid'
  /** column name */
  | 'response_uid';

/** input type for updating data in table "form.form_response_answer" */
export type Form_Form_Response_Answer_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  answer?: InputMaybe<Scalars['jsonb']>;
  question_uid?: InputMaybe<Scalars['uuid']>;
  response_uid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "form_form_response_answer" */
export type Form_Form_Response_Answer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Form_Form_Response_Answer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Form_Form_Response_Answer_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  answer?: InputMaybe<Scalars['jsonb']>;
  question_uid?: InputMaybe<Scalars['uuid']>;
  response_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "form.form_response_answer" */
export type Form_Form_Response_Answer_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'answer'
  /** column name */
  | 'question_uid'
  /** column name */
  | 'response_uid';

export type Form_Form_Response_Answer_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Form_Form_Response_Answer_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Form_Form_Response_Answer_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Form_Form_Response_Answer_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Form_Form_Response_Answer_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Form_Form_Response_Answer_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Form_Form_Response_Answer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Form_Form_Response_Answer_Bool_Exp;
};

/** input type for inserting array relation for remote table "form.form_response" */
export type Form_Form_Response_Arr_Rel_Insert_Input = {
  data: Array<Form_Form_Response_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Form_Form_Response_On_Conflict>;
};

/** Boolean expression to filter rows from the table "form.form_response". All fields are combined with a logical 'AND'. */
export type Form_Form_Response_Bool_Exp = {
  _and?: InputMaybe<Array<Form_Form_Response_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Form_Form_Response_Bool_Exp>;
  _or?: InputMaybe<Array<Form_Form_Response_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  form?: InputMaybe<Form_Form_Bool_Exp>;
  form_response_answers?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
  form_response_answers_aggregate?: InputMaybe<Form_Form_Response_Answer_Aggregate_Bool_Exp>;
  form_uid?: InputMaybe<Uuid_Comparison_Exp>;
  listing_uid?: InputMaybe<Uuid_Comparison_Exp>;
  respondent_email?: InputMaybe<String_Comparison_Exp>;
  respondent_name?: InputMaybe<String_Comparison_Exp>;
  submitted_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
};

/** unique or primary key constraints on table "form.form_response" */
export type Form_Form_Response_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'form_response__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'form_response_pk';

/** input type for inserting data into table "form.form_response" */
export type Form_Form_Response_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  form?: InputMaybe<Form_Form_Obj_Rel_Insert_Input>;
  form_response_answers?: InputMaybe<Form_Form_Response_Answer_Arr_Rel_Insert_Input>;
  form_uid?: InputMaybe<Scalars['uuid']>;
  listing_uid?: InputMaybe<Scalars['uuid']>;
  respondent_email?: InputMaybe<Scalars['String']>;
  respondent_name?: InputMaybe<Scalars['String']>;
  submitted_by?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Form_Form_Response_Max_Fields = {
  __typename?: 'form_form_response_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  form_uid?: Maybe<Scalars['uuid']>;
  listing_uid?: Maybe<Scalars['uuid']>;
  respondent_email?: Maybe<Scalars['String']>;
  respondent_name?: Maybe<Scalars['String']>;
  submitted_by?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "form.form_response" */
export type Form_Form_Response_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  form_uid?: InputMaybe<Order_By>;
  listing_uid?: InputMaybe<Order_By>;
  respondent_email?: InputMaybe<Order_By>;
  respondent_name?: InputMaybe<Order_By>;
  submitted_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Form_Response_Min_Fields = {
  __typename?: 'form_form_response_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  form_uid?: Maybe<Scalars['uuid']>;
  listing_uid?: Maybe<Scalars['uuid']>;
  respondent_email?: Maybe<Scalars['String']>;
  respondent_name?: Maybe<Scalars['String']>;
  submitted_by?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "form.form_response" */
export type Form_Form_Response_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  form_uid?: InputMaybe<Order_By>;
  listing_uid?: InputMaybe<Order_By>;
  respondent_email?: InputMaybe<Order_By>;
  respondent_name?: InputMaybe<Order_By>;
  submitted_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "form.form_response" */
export type Form_Form_Response_Mutation_Response = {
  __typename?: 'form_form_response_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Form_Form_Response>;
};

/** input type for inserting object relation for remote table "form.form_response" */
export type Form_Form_Response_Obj_Rel_Insert_Input = {
  data: Form_Form_Response_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Form_Form_Response_On_Conflict>;
};

/** on_conflict condition type for table "form.form_response" */
export type Form_Form_Response_On_Conflict = {
  constraint: Form_Form_Response_Constraint;
  update_columns?: Array<Form_Form_Response_Update_Column>;
  where?: InputMaybe<Form_Form_Response_Bool_Exp>;
};

/** Ordering options when selecting data from "form.form_response". */
export type Form_Form_Response_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  form?: InputMaybe<Form_Form_Order_By>;
  form_response_answers_aggregate?: InputMaybe<Form_Form_Response_Answer_Aggregate_Order_By>;
  form_uid?: InputMaybe<Order_By>;
  listing_uid?: InputMaybe<Order_By>;
  respondent_email?: InputMaybe<Order_By>;
  respondent_name?: InputMaybe<Order_By>;
  submitted_by?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
};

/** primary key columns input for table: form.form_response */
export type Form_Form_Response_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "form.form_response" */
export type Form_Form_Response_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'form_uid'
  /** column name */
  | 'listing_uid'
  /** column name */
  | 'respondent_email'
  /** column name */
  | 'respondent_name'
  /** column name */
  | 'submitted_by';

/** input type for updating data in table "form.form_response" */
export type Form_Form_Response_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  form_uid?: InputMaybe<Scalars['uuid']>;
  listing_uid?: InputMaybe<Scalars['uuid']>;
  respondent_email?: InputMaybe<Scalars['String']>;
  respondent_name?: InputMaybe<Scalars['String']>;
  submitted_by?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "form_form_response" */
export type Form_Form_Response_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Form_Form_Response_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Form_Form_Response_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  form_uid?: InputMaybe<Scalars['uuid']>;
  listing_uid?: InputMaybe<Scalars['uuid']>;
  respondent_email?: InputMaybe<Scalars['String']>;
  respondent_name?: InputMaybe<Scalars['String']>;
  submitted_by?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "form.form_response" */
export type Form_Form_Response_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'form_uid'
  /** column name */
  | 'listing_uid'
  /** column name */
  | 'respondent_email'
  /** column name */
  | 'respondent_name'
  /** column name */
  | 'submitted_by';

export type Form_Form_Response_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Form_Form_Response_Set_Input>;
  /** filter the rows which have to be updated */
  where: Form_Form_Response_Bool_Exp;
};

/** select columns of table "form.form" */
export type Form_Form_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'banner_url'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'description'
  /** column name */
  | 'name'
  /** column name */
  | 'require_login'
  /** column name */
  | 'status'
  /** column name */
  | 'success_message'
  /** column name */
  | 'tags'
  /** column name */
  | 'version'
  /** column name */
  | 'workspace_uid';

/** input type for updating data in table "form.form" */
export type Form_Form_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  banner_url?: InputMaybe<Scalars['String']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  require_login?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  success_message?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  version?: InputMaybe<Scalars['Int']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Form_Form_Stddev_Fields = {
  __typename?: 'form_form_stddev_fields';
  version?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Form_Form_Stddev_Pop_Fields = {
  __typename?: 'form_form_stddev_pop_fields';
  version?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Form_Form_Stddev_Samp_Fields = {
  __typename?: 'form_form_stddev_samp_fields';
  version?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "form_form" */
export type Form_Form_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Form_Form_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Form_Form_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  banner_url?: InputMaybe<Scalars['String']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  require_login?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  success_message?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  version?: InputMaybe<Scalars['Int']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Form_Form_Sum_Fields = {
  __typename?: 'form_form_sum_fields';
  version?: Maybe<Scalars['Int']>;
};

/** update columns of table "form.form" */
export type Form_Form_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'banner_url'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'description'
  /** column name */
  | 'name'
  /** column name */
  | 'require_login'
  /** column name */
  | 'status'
  /** column name */
  | 'success_message'
  /** column name */
  | 'tags'
  /** column name */
  | 'version'
  /** column name */
  | 'workspace_uid';

export type Form_Form_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Form_Form_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Form_Form_Set_Input>;
  /** filter the rows which have to be updated */
  where: Form_Form_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Form_Form_Var_Pop_Fields = {
  __typename?: 'form_form_var_pop_fields';
  version?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Form_Form_Var_Samp_Fields = {
  __typename?: 'form_form_var_samp_fields';
  version?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Form_Form_Variance_Fields = {
  __typename?: 'form_form_variance_fields';
  version?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "invite_status". All fields are combined with logical 'AND'. */
export type Invite_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['invite_status']>;
  _gt?: InputMaybe<Scalars['invite_status']>;
  _gte?: InputMaybe<Scalars['invite_status']>;
  _in?: InputMaybe<Array<Scalars['invite_status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['invite_status']>;
  _lte?: InputMaybe<Scalars['invite_status']>;
  _neq?: InputMaybe<Scalars['invite_status']>;
  _nin?: InputMaybe<Array<Scalars['invite_status']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  app_grb0ts6wtxigdwbi?: Maybe<App_Grb0ts6wtxigdwbi_Mutation_Frontend>;
  /** delete data from the table: "agent.agent" */
  delete_agent_agent?: Maybe<Agent_Agent_Mutation_Response>;
  /** delete single row from the table: "agent.agent" */
  delete_agent_agent_by_pk?: Maybe<Agent_Agent>;
  /** delete data from the table: "agent.banner" */
  delete_agent_banner?: Maybe<Agent_Banner_Mutation_Response>;
  /** delete single row from the table: "agent.banner" */
  delete_agent_banner_by_pk?: Maybe<Agent_Banner>;
  /** delete data from the table: "agent.cron_job" */
  delete_agent_cron_job?: Maybe<Agent_Cron_Job_Mutation_Response>;
  /** delete single row from the table: "agent.cron_job" */
  delete_agent_cron_job_by_pk?: Maybe<Agent_Cron_Job>;
  /** delete data from the table: "agent.deployment" */
  delete_agent_deployment?: Maybe<Agent_Deployment_Mutation_Response>;
  /** delete single row from the table: "agent.deployment" */
  delete_agent_deployment_by_pk?: Maybe<Agent_Deployment>;
  /** delete data from the table: "agent.hook" */
  delete_agent_hook?: Maybe<Agent_Hook_Mutation_Response>;
  /** delete single row from the table: "agent.hook" */
  delete_agent_hook_by_pk?: Maybe<Agent_Hook>;
  /** delete data from the table: "agent.installation" */
  delete_agent_installation?: Maybe<Agent_Installation_Mutation_Response>;
  /** delete single row from the table: "agent.installation" */
  delete_agent_installation_by_pk?: Maybe<Agent_Installation>;
  /** delete data from the table: "agent.installation_variable" */
  delete_agent_installation_variable?: Maybe<Agent_Installation_Variable_Mutation_Response>;
  /** delete single row from the table: "agent.installation_variable" */
  delete_agent_installation_variable_by_pk?: Maybe<Agent_Installation_Variable>;
  /** delete data from the table: "agent.runtime" */
  delete_agent_runtime?: Maybe<Agent_Runtime_Mutation_Response>;
  /** delete single row from the table: "agent.runtime" */
  delete_agent_runtime_by_pk?: Maybe<Agent_Runtime>;
  /** delete data from the table: "agent.system_prompt" */
  delete_agent_system_prompt?: Maybe<Agent_System_Prompt_Mutation_Response>;
  /** delete single row from the table: "agent.system_prompt" */
  delete_agent_system_prompt_by_pk?: Maybe<Agent_System_Prompt>;
  /** delete data from the table: "app.blueprint" */
  delete_app_blueprint?: Maybe<App_Blueprint_Mutation_Response>;
  /** delete single row from the table: "app.blueprint" */
  delete_app_blueprint_by_pk?: Maybe<App_Blueprint>;
  /** delete data from the table: "app.chat" */
  delete_app_chat?: Maybe<App_Chat_Mutation_Response>;
  /** delete single row from the table: "app.chat" */
  delete_app_chat_by_pk?: Maybe<App_Chat>;
  /** delete data from the table: "app.dataset" */
  delete_app_dataset?: Maybe<App_Dataset_Mutation_Response>;
  /** delete single row from the table: "app.dataset" */
  delete_app_dataset_by_pk?: Maybe<App_Dataset>;
  /** delete data from the table: "app.file" */
  delete_app_file?: Maybe<App_File_Mutation_Response>;
  /** delete data from the table: "app.file_attachment" */
  delete_app_file_attachment?: Maybe<App_File_Attachment_Mutation_Response>;
  /** delete single row from the table: "app.file_attachment" */
  delete_app_file_attachment_by_pk?: Maybe<App_File_Attachment>;
  /** delete single row from the table: "app.file" */
  delete_app_file_by_pk?: Maybe<App_File>;
  /** delete data from the table: "app.invite" */
  delete_app_invite?: Maybe<App_Invite_Mutation_Response>;
  /** delete single row from the table: "app.invite" */
  delete_app_invite_by_pk?: Maybe<App_Invite>;
  /** delete data from the table: "app.thread" */
  delete_app_thread?: Maybe<App_Thread_Mutation_Response>;
  /** delete single row from the table: "app.thread" */
  delete_app_thread_by_pk?: Maybe<App_Thread>;
  /** delete data from the table: "app.user" */
  delete_app_user?: Maybe<App_User_Mutation_Response>;
  /** delete single row from the table: "app.user" */
  delete_app_user_by_pk?: Maybe<App_User>;
  /** delete data from the table: "app.workspace" */
  delete_app_workspace?: Maybe<App_Workspace_Mutation_Response>;
  /** delete single row from the table: "app.workspace" */
  delete_app_workspace_by_pk?: Maybe<App_Workspace>;
  /** delete data from the table: "app.workspace_membership" */
  delete_app_workspace_membership?: Maybe<App_Workspace_Membership_Mutation_Response>;
  /** delete single row from the table: "app.workspace_membership" */
  delete_app_workspace_membership_by_pk?: Maybe<App_Workspace_Membership>;
  /** delete data from the table: "auth.api_key" */
  delete_auth_api_key?: Maybe<Auth_Api_Key_Mutation_Response>;
  /** delete single row from the table: "auth.api_key" */
  delete_auth_api_key_by_pk?: Maybe<Auth_Api_Key>;
  /** delete data from the table: "auth.session" */
  delete_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** delete single row from the table: "auth.session" */
  delete_auth_session_by_pk?: Maybe<Auth_Session>;
  /** delete data from the table: "billing.feature" */
  delete_billing_feature?: Maybe<Billing_Feature_Mutation_Response>;
  /** delete single row from the table: "billing.feature" */
  delete_billing_feature_by_pk?: Maybe<Billing_Feature>;
  /** delete data from the table: "billing.price" */
  delete_billing_price?: Maybe<Billing_Price_Mutation_Response>;
  /** delete single row from the table: "billing.price" */
  delete_billing_price_by_pk?: Maybe<Billing_Price>;
  /** delete data from the table: "billing.product" */
  delete_billing_product?: Maybe<Billing_Product_Mutation_Response>;
  /** delete single row from the table: "billing.product" */
  delete_billing_product_by_pk?: Maybe<Billing_Product>;
  /** delete data from the table: "billing.subscription" */
  delete_billing_subscription?: Maybe<Billing_Subscription_Mutation_Response>;
  /** delete single row from the table: "billing.subscription" */
  delete_billing_subscription_by_pk?: Maybe<Billing_Subscription>;
  /** delete data from the table: "entity.address" */
  delete_entity_address?: Maybe<Entity_Address_Mutation_Response>;
  /** delete single row from the table: "entity.address" */
  delete_entity_address_by_pk?: Maybe<Entity_Address>;
  /** delete data from the table: "entity.country" */
  delete_entity_country?: Maybe<Entity_Country_Mutation_Response>;
  /** delete single row from the table: "entity.country" */
  delete_entity_country_by_pk?: Maybe<Entity_Country>;
  /** delete data from the table: "entity.owner" */
  delete_entity_owner?: Maybe<Entity_Owner_Mutation_Response>;
  /** delete single row from the table: "entity.owner" */
  delete_entity_owner_by_pk?: Maybe<Entity_Owner>;
  /** delete data from the table: "entity.property" */
  delete_entity_property?: Maybe<Entity_Property_Mutation_Response>;
  /** delete single row from the table: "entity.property" */
  delete_entity_property_by_pk?: Maybe<Entity_Property>;
  /** delete data from the table: "entity.property_media" */
  delete_entity_property_media?: Maybe<Entity_Property_Media_Mutation_Response>;
  /** delete single row from the table: "entity.property_media" */
  delete_entity_property_media_by_pk?: Maybe<Entity_Property_Media>;
  /** delete data from the table: "entity.property_type" */
  delete_entity_property_type?: Maybe<Entity_Property_Type_Mutation_Response>;
  /** delete single row from the table: "entity.property_type" */
  delete_entity_property_type_by_pk?: Maybe<Entity_Property_Type>;
  /** delete data from the table: "entity.state" */
  delete_entity_state?: Maybe<Entity_State_Mutation_Response>;
  /** delete single row from the table: "entity.state" */
  delete_entity_state_by_pk?: Maybe<Entity_State>;
  /** delete data from the table: "form.form" */
  delete_form_form?: Maybe<Form_Form_Mutation_Response>;
  /** delete single row from the table: "form.form" */
  delete_form_form_by_pk?: Maybe<Form_Form>;
  /** delete data from the table: "form.form_field" */
  delete_form_form_field?: Maybe<Form_Form_Field_Mutation_Response>;
  /** delete single row from the table: "form.form_field" */
  delete_form_form_field_by_pk?: Maybe<Form_Form_Field>;
  /** delete data from the table: "form.form_response" */
  delete_form_form_response?: Maybe<Form_Form_Response_Mutation_Response>;
  /** delete data from the table: "form.form_response_answer" */
  delete_form_form_response_answer?: Maybe<Form_Form_Response_Answer_Mutation_Response>;
  /** delete single row from the table: "form.form_response_answer" */
  delete_form_form_response_answer_by_pk?: Maybe<Form_Form_Response_Answer>;
  /** delete single row from the table: "form.form_response" */
  delete_form_form_response_by_pk?: Maybe<Form_Form_Response>;
  /** delete data from the table: "workflow.edge" */
  delete_workflow_edge?: Maybe<Workflow_Edge_Mutation_Response>;
  /** delete single row from the table: "workflow.edge" */
  delete_workflow_edge_by_pk?: Maybe<Workflow_Edge>;
  /** delete data from the table: "workflow.execution" */
  delete_workflow_execution?: Maybe<Workflow_Execution_Mutation_Response>;
  /** delete single row from the table: "workflow.execution" */
  delete_workflow_execution_by_pk?: Maybe<Workflow_Execution>;
  /** delete data from the table: "workflow.node" */
  delete_workflow_node?: Maybe<Workflow_Node_Mutation_Response>;
  /** delete single row from the table: "workflow.node" */
  delete_workflow_node_by_pk?: Maybe<Workflow_Node>;
  /** delete data from the table: "workflow.workflow" */
  delete_workflow_workflow?: Maybe<Workflow_Workflow_Mutation_Response>;
  /** delete single row from the table: "workflow.workflow" */
  delete_workflow_workflow_by_pk?: Maybe<Workflow_Workflow>;
  /** insert data into the table: "agent.agent" */
  insert_agent_agent?: Maybe<Agent_Agent_Mutation_Response>;
  /** insert a single row into the table: "agent.agent" */
  insert_agent_agent_one?: Maybe<Agent_Agent>;
  /** insert data into the table: "agent.banner" */
  insert_agent_banner?: Maybe<Agent_Banner_Mutation_Response>;
  /** insert a single row into the table: "agent.banner" */
  insert_agent_banner_one?: Maybe<Agent_Banner>;
  /** insert data into the table: "agent.cron_job" */
  insert_agent_cron_job?: Maybe<Agent_Cron_Job_Mutation_Response>;
  /** insert a single row into the table: "agent.cron_job" */
  insert_agent_cron_job_one?: Maybe<Agent_Cron_Job>;
  /** insert data into the table: "agent.deployment" */
  insert_agent_deployment?: Maybe<Agent_Deployment_Mutation_Response>;
  /** insert a single row into the table: "agent.deployment" */
  insert_agent_deployment_one?: Maybe<Agent_Deployment>;
  /** insert data into the table: "agent.hook" */
  insert_agent_hook?: Maybe<Agent_Hook_Mutation_Response>;
  /** insert a single row into the table: "agent.hook" */
  insert_agent_hook_one?: Maybe<Agent_Hook>;
  /** insert data into the table: "agent.installation" */
  insert_agent_installation?: Maybe<Agent_Installation_Mutation_Response>;
  /** insert a single row into the table: "agent.installation" */
  insert_agent_installation_one?: Maybe<Agent_Installation>;
  /** insert data into the table: "agent.installation_variable" */
  insert_agent_installation_variable?: Maybe<Agent_Installation_Variable_Mutation_Response>;
  /** insert a single row into the table: "agent.installation_variable" */
  insert_agent_installation_variable_one?: Maybe<Agent_Installation_Variable>;
  /** insert data into the table: "agent.runtime" */
  insert_agent_runtime?: Maybe<Agent_Runtime_Mutation_Response>;
  /** insert a single row into the table: "agent.runtime" */
  insert_agent_runtime_one?: Maybe<Agent_Runtime>;
  /** insert data into the table: "agent.system_prompt" */
  insert_agent_system_prompt?: Maybe<Agent_System_Prompt_Mutation_Response>;
  /** insert a single row into the table: "agent.system_prompt" */
  insert_agent_system_prompt_one?: Maybe<Agent_System_Prompt>;
  /** insert data into the table: "app.blueprint" */
  insert_app_blueprint?: Maybe<App_Blueprint_Mutation_Response>;
  /** insert a single row into the table: "app.blueprint" */
  insert_app_blueprint_one?: Maybe<App_Blueprint>;
  /** insert data into the table: "app.chat" */
  insert_app_chat?: Maybe<App_Chat_Mutation_Response>;
  /** insert a single row into the table: "app.chat" */
  insert_app_chat_one?: Maybe<App_Chat>;
  /** insert data into the table: "app.dataset" */
  insert_app_dataset?: Maybe<App_Dataset_Mutation_Response>;
  /** insert a single row into the table: "app.dataset" */
  insert_app_dataset_one?: Maybe<App_Dataset>;
  /** insert data into the table: "app.file" */
  insert_app_file?: Maybe<App_File_Mutation_Response>;
  /** insert data into the table: "app.file_attachment" */
  insert_app_file_attachment?: Maybe<App_File_Attachment_Mutation_Response>;
  /** insert a single row into the table: "app.file_attachment" */
  insert_app_file_attachment_one?: Maybe<App_File_Attachment>;
  /** insert a single row into the table: "app.file" */
  insert_app_file_one?: Maybe<App_File>;
  /** insert data into the table: "app.invite" */
  insert_app_invite?: Maybe<App_Invite_Mutation_Response>;
  /** insert a single row into the table: "app.invite" */
  insert_app_invite_one?: Maybe<App_Invite>;
  /** insert data into the table: "app.thread" */
  insert_app_thread?: Maybe<App_Thread_Mutation_Response>;
  /** insert a single row into the table: "app.thread" */
  insert_app_thread_one?: Maybe<App_Thread>;
  /** insert data into the table: "app.user" */
  insert_app_user?: Maybe<App_User_Mutation_Response>;
  /** insert a single row into the table: "app.user" */
  insert_app_user_one?: Maybe<App_User>;
  /** insert data into the table: "app.workspace" */
  insert_app_workspace?: Maybe<App_Workspace_Mutation_Response>;
  /** insert data into the table: "app.workspace_membership" */
  insert_app_workspace_membership?: Maybe<App_Workspace_Membership_Mutation_Response>;
  /** insert a single row into the table: "app.workspace_membership" */
  insert_app_workspace_membership_one?: Maybe<App_Workspace_Membership>;
  /** insert a single row into the table: "app.workspace" */
  insert_app_workspace_one?: Maybe<App_Workspace>;
  /** insert data into the table: "auth.api_key" */
  insert_auth_api_key?: Maybe<Auth_Api_Key_Mutation_Response>;
  /** insert a single row into the table: "auth.api_key" */
  insert_auth_api_key_one?: Maybe<Auth_Api_Key>;
  /** insert data into the table: "auth.session" */
  insert_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** insert a single row into the table: "auth.session" */
  insert_auth_session_one?: Maybe<Auth_Session>;
  /** insert data into the table: "billing.feature" */
  insert_billing_feature?: Maybe<Billing_Feature_Mutation_Response>;
  /** insert a single row into the table: "billing.feature" */
  insert_billing_feature_one?: Maybe<Billing_Feature>;
  /** insert data into the table: "billing.price" */
  insert_billing_price?: Maybe<Billing_Price_Mutation_Response>;
  /** insert a single row into the table: "billing.price" */
  insert_billing_price_one?: Maybe<Billing_Price>;
  /** insert data into the table: "billing.product" */
  insert_billing_product?: Maybe<Billing_Product_Mutation_Response>;
  /** insert a single row into the table: "billing.product" */
  insert_billing_product_one?: Maybe<Billing_Product>;
  /** insert data into the table: "billing.subscription" */
  insert_billing_subscription?: Maybe<Billing_Subscription_Mutation_Response>;
  /** insert a single row into the table: "billing.subscription" */
  insert_billing_subscription_one?: Maybe<Billing_Subscription>;
  /** insert data into the table: "entity.address" */
  insert_entity_address?: Maybe<Entity_Address_Mutation_Response>;
  /** insert a single row into the table: "entity.address" */
  insert_entity_address_one?: Maybe<Entity_Address>;
  /** insert data into the table: "entity.country" */
  insert_entity_country?: Maybe<Entity_Country_Mutation_Response>;
  /** insert a single row into the table: "entity.country" */
  insert_entity_country_one?: Maybe<Entity_Country>;
  /** insert data into the table: "entity.owner" */
  insert_entity_owner?: Maybe<Entity_Owner_Mutation_Response>;
  /** insert a single row into the table: "entity.owner" */
  insert_entity_owner_one?: Maybe<Entity_Owner>;
  /** insert data into the table: "entity.property" */
  insert_entity_property?: Maybe<Entity_Property_Mutation_Response>;
  /** insert data into the table: "entity.property_media" */
  insert_entity_property_media?: Maybe<Entity_Property_Media_Mutation_Response>;
  /** insert a single row into the table: "entity.property_media" */
  insert_entity_property_media_one?: Maybe<Entity_Property_Media>;
  /** insert a single row into the table: "entity.property" */
  insert_entity_property_one?: Maybe<Entity_Property>;
  /** insert data into the table: "entity.property_type" */
  insert_entity_property_type?: Maybe<Entity_Property_Type_Mutation_Response>;
  /** insert a single row into the table: "entity.property_type" */
  insert_entity_property_type_one?: Maybe<Entity_Property_Type>;
  /** insert data into the table: "entity.state" */
  insert_entity_state?: Maybe<Entity_State_Mutation_Response>;
  /** insert a single row into the table: "entity.state" */
  insert_entity_state_one?: Maybe<Entity_State>;
  /** insert data into the table: "form.form" */
  insert_form_form?: Maybe<Form_Form_Mutation_Response>;
  /** insert data into the table: "form.form_field" */
  insert_form_form_field?: Maybe<Form_Form_Field_Mutation_Response>;
  /** insert a single row into the table: "form.form_field" */
  insert_form_form_field_one?: Maybe<Form_Form_Field>;
  /** insert a single row into the table: "form.form" */
  insert_form_form_one?: Maybe<Form_Form>;
  /** insert data into the table: "form.form_response" */
  insert_form_form_response?: Maybe<Form_Form_Response_Mutation_Response>;
  /** insert data into the table: "form.form_response_answer" */
  insert_form_form_response_answer?: Maybe<Form_Form_Response_Answer_Mutation_Response>;
  /** insert a single row into the table: "form.form_response_answer" */
  insert_form_form_response_answer_one?: Maybe<Form_Form_Response_Answer>;
  /** insert a single row into the table: "form.form_response" */
  insert_form_form_response_one?: Maybe<Form_Form_Response>;
  /** insert data into the table: "workflow.edge" */
  insert_workflow_edge?: Maybe<Workflow_Edge_Mutation_Response>;
  /** insert a single row into the table: "workflow.edge" */
  insert_workflow_edge_one?: Maybe<Workflow_Edge>;
  /** insert data into the table: "workflow.execution" */
  insert_workflow_execution?: Maybe<Workflow_Execution_Mutation_Response>;
  /** insert a single row into the table: "workflow.execution" */
  insert_workflow_execution_one?: Maybe<Workflow_Execution>;
  /** insert data into the table: "workflow.node" */
  insert_workflow_node?: Maybe<Workflow_Node_Mutation_Response>;
  /** insert a single row into the table: "workflow.node" */
  insert_workflow_node_one?: Maybe<Workflow_Node>;
  /** insert data into the table: "workflow.workflow" */
  insert_workflow_workflow?: Maybe<Workflow_Workflow_Mutation_Response>;
  /** insert a single row into the table: "workflow.workflow" */
  insert_workflow_workflow_one?: Maybe<Workflow_Workflow>;
  mx__?: Maybe<Mx__Mx___Mutation_Frontend>;
  /** update data of the table: "agent.agent" */
  update_agent_agent?: Maybe<Agent_Agent_Mutation_Response>;
  /** update single row of the table: "agent.agent" */
  update_agent_agent_by_pk?: Maybe<Agent_Agent>;
  /** update multiples rows of table: "agent.agent" */
  update_agent_agent_many?: Maybe<Array<Maybe<Agent_Agent_Mutation_Response>>>;
  /** update data of the table: "agent.banner" */
  update_agent_banner?: Maybe<Agent_Banner_Mutation_Response>;
  /** update single row of the table: "agent.banner" */
  update_agent_banner_by_pk?: Maybe<Agent_Banner>;
  /** update multiples rows of table: "agent.banner" */
  update_agent_banner_many?: Maybe<Array<Maybe<Agent_Banner_Mutation_Response>>>;
  /** update data of the table: "agent.cron_job" */
  update_agent_cron_job?: Maybe<Agent_Cron_Job_Mutation_Response>;
  /** update single row of the table: "agent.cron_job" */
  update_agent_cron_job_by_pk?: Maybe<Agent_Cron_Job>;
  /** update multiples rows of table: "agent.cron_job" */
  update_agent_cron_job_many?: Maybe<Array<Maybe<Agent_Cron_Job_Mutation_Response>>>;
  /** update data of the table: "agent.deployment" */
  update_agent_deployment?: Maybe<Agent_Deployment_Mutation_Response>;
  /** update single row of the table: "agent.deployment" */
  update_agent_deployment_by_pk?: Maybe<Agent_Deployment>;
  /** update multiples rows of table: "agent.deployment" */
  update_agent_deployment_many?: Maybe<Array<Maybe<Agent_Deployment_Mutation_Response>>>;
  /** update data of the table: "agent.hook" */
  update_agent_hook?: Maybe<Agent_Hook_Mutation_Response>;
  /** update single row of the table: "agent.hook" */
  update_agent_hook_by_pk?: Maybe<Agent_Hook>;
  /** update multiples rows of table: "agent.hook" */
  update_agent_hook_many?: Maybe<Array<Maybe<Agent_Hook_Mutation_Response>>>;
  /** update data of the table: "agent.installation" */
  update_agent_installation?: Maybe<Agent_Installation_Mutation_Response>;
  /** update single row of the table: "agent.installation" */
  update_agent_installation_by_pk?: Maybe<Agent_Installation>;
  /** update multiples rows of table: "agent.installation" */
  update_agent_installation_many?: Maybe<Array<Maybe<Agent_Installation_Mutation_Response>>>;
  /** update data of the table: "agent.installation_variable" */
  update_agent_installation_variable?: Maybe<Agent_Installation_Variable_Mutation_Response>;
  /** update single row of the table: "agent.installation_variable" */
  update_agent_installation_variable_by_pk?: Maybe<Agent_Installation_Variable>;
  /** update multiples rows of table: "agent.installation_variable" */
  update_agent_installation_variable_many?: Maybe<Array<Maybe<Agent_Installation_Variable_Mutation_Response>>>;
  /** update data of the table: "agent.runtime" */
  update_agent_runtime?: Maybe<Agent_Runtime_Mutation_Response>;
  /** update single row of the table: "agent.runtime" */
  update_agent_runtime_by_pk?: Maybe<Agent_Runtime>;
  /** update multiples rows of table: "agent.runtime" */
  update_agent_runtime_many?: Maybe<Array<Maybe<Agent_Runtime_Mutation_Response>>>;
  /** update data of the table: "agent.system_prompt" */
  update_agent_system_prompt?: Maybe<Agent_System_Prompt_Mutation_Response>;
  /** update single row of the table: "agent.system_prompt" */
  update_agent_system_prompt_by_pk?: Maybe<Agent_System_Prompt>;
  /** update multiples rows of table: "agent.system_prompt" */
  update_agent_system_prompt_many?: Maybe<Array<Maybe<Agent_System_Prompt_Mutation_Response>>>;
  /** update data of the table: "app.blueprint" */
  update_app_blueprint?: Maybe<App_Blueprint_Mutation_Response>;
  /** update single row of the table: "app.blueprint" */
  update_app_blueprint_by_pk?: Maybe<App_Blueprint>;
  /** update multiples rows of table: "app.blueprint" */
  update_app_blueprint_many?: Maybe<Array<Maybe<App_Blueprint_Mutation_Response>>>;
  /** update data of the table: "app.chat" */
  update_app_chat?: Maybe<App_Chat_Mutation_Response>;
  /** update single row of the table: "app.chat" */
  update_app_chat_by_pk?: Maybe<App_Chat>;
  /** update multiples rows of table: "app.chat" */
  update_app_chat_many?: Maybe<Array<Maybe<App_Chat_Mutation_Response>>>;
  /** update data of the table: "app.dataset" */
  update_app_dataset?: Maybe<App_Dataset_Mutation_Response>;
  /** update single row of the table: "app.dataset" */
  update_app_dataset_by_pk?: Maybe<App_Dataset>;
  /** update multiples rows of table: "app.dataset" */
  update_app_dataset_many?: Maybe<Array<Maybe<App_Dataset_Mutation_Response>>>;
  /** update data of the table: "app.file" */
  update_app_file?: Maybe<App_File_Mutation_Response>;
  /** update data of the table: "app.file_attachment" */
  update_app_file_attachment?: Maybe<App_File_Attachment_Mutation_Response>;
  /** update single row of the table: "app.file_attachment" */
  update_app_file_attachment_by_pk?: Maybe<App_File_Attachment>;
  /** update multiples rows of table: "app.file_attachment" */
  update_app_file_attachment_many?: Maybe<Array<Maybe<App_File_Attachment_Mutation_Response>>>;
  /** update single row of the table: "app.file" */
  update_app_file_by_pk?: Maybe<App_File>;
  /** update multiples rows of table: "app.file" */
  update_app_file_many?: Maybe<Array<Maybe<App_File_Mutation_Response>>>;
  /** update data of the table: "app.invite" */
  update_app_invite?: Maybe<App_Invite_Mutation_Response>;
  /** update single row of the table: "app.invite" */
  update_app_invite_by_pk?: Maybe<App_Invite>;
  /** update multiples rows of table: "app.invite" */
  update_app_invite_many?: Maybe<Array<Maybe<App_Invite_Mutation_Response>>>;
  /** update data of the table: "app.thread" */
  update_app_thread?: Maybe<App_Thread_Mutation_Response>;
  /** update single row of the table: "app.thread" */
  update_app_thread_by_pk?: Maybe<App_Thread>;
  /** update multiples rows of table: "app.thread" */
  update_app_thread_many?: Maybe<Array<Maybe<App_Thread_Mutation_Response>>>;
  /** update data of the table: "app.user" */
  update_app_user?: Maybe<App_User_Mutation_Response>;
  /** update single row of the table: "app.user" */
  update_app_user_by_pk?: Maybe<App_User>;
  /** update multiples rows of table: "app.user" */
  update_app_user_many?: Maybe<Array<Maybe<App_User_Mutation_Response>>>;
  /** update data of the table: "app.workspace" */
  update_app_workspace?: Maybe<App_Workspace_Mutation_Response>;
  /** update single row of the table: "app.workspace" */
  update_app_workspace_by_pk?: Maybe<App_Workspace>;
  /** update multiples rows of table: "app.workspace" */
  update_app_workspace_many?: Maybe<Array<Maybe<App_Workspace_Mutation_Response>>>;
  /** update data of the table: "app.workspace_membership" */
  update_app_workspace_membership?: Maybe<App_Workspace_Membership_Mutation_Response>;
  /** update single row of the table: "app.workspace_membership" */
  update_app_workspace_membership_by_pk?: Maybe<App_Workspace_Membership>;
  /** update multiples rows of table: "app.workspace_membership" */
  update_app_workspace_membership_many?: Maybe<Array<Maybe<App_Workspace_Membership_Mutation_Response>>>;
  /** update data of the table: "auth.api_key" */
  update_auth_api_key?: Maybe<Auth_Api_Key_Mutation_Response>;
  /** update single row of the table: "auth.api_key" */
  update_auth_api_key_by_pk?: Maybe<Auth_Api_Key>;
  /** update multiples rows of table: "auth.api_key" */
  update_auth_api_key_many?: Maybe<Array<Maybe<Auth_Api_Key_Mutation_Response>>>;
  /** update data of the table: "auth.session" */
  update_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** update single row of the table: "auth.session" */
  update_auth_session_by_pk?: Maybe<Auth_Session>;
  /** update multiples rows of table: "auth.session" */
  update_auth_session_many?: Maybe<Array<Maybe<Auth_Session_Mutation_Response>>>;
  /** update data of the table: "billing.feature" */
  update_billing_feature?: Maybe<Billing_Feature_Mutation_Response>;
  /** update single row of the table: "billing.feature" */
  update_billing_feature_by_pk?: Maybe<Billing_Feature>;
  /** update multiples rows of table: "billing.feature" */
  update_billing_feature_many?: Maybe<Array<Maybe<Billing_Feature_Mutation_Response>>>;
  /** update data of the table: "billing.price" */
  update_billing_price?: Maybe<Billing_Price_Mutation_Response>;
  /** update single row of the table: "billing.price" */
  update_billing_price_by_pk?: Maybe<Billing_Price>;
  /** update multiples rows of table: "billing.price" */
  update_billing_price_many?: Maybe<Array<Maybe<Billing_Price_Mutation_Response>>>;
  /** update data of the table: "billing.product" */
  update_billing_product?: Maybe<Billing_Product_Mutation_Response>;
  /** update single row of the table: "billing.product" */
  update_billing_product_by_pk?: Maybe<Billing_Product>;
  /** update multiples rows of table: "billing.product" */
  update_billing_product_many?: Maybe<Array<Maybe<Billing_Product_Mutation_Response>>>;
  /** update data of the table: "billing.subscription" */
  update_billing_subscription?: Maybe<Billing_Subscription_Mutation_Response>;
  /** update single row of the table: "billing.subscription" */
  update_billing_subscription_by_pk?: Maybe<Billing_Subscription>;
  /** update multiples rows of table: "billing.subscription" */
  update_billing_subscription_many?: Maybe<Array<Maybe<Billing_Subscription_Mutation_Response>>>;
  /** update data of the table: "entity.address" */
  update_entity_address?: Maybe<Entity_Address_Mutation_Response>;
  /** update single row of the table: "entity.address" */
  update_entity_address_by_pk?: Maybe<Entity_Address>;
  /** update multiples rows of table: "entity.address" */
  update_entity_address_many?: Maybe<Array<Maybe<Entity_Address_Mutation_Response>>>;
  /** update data of the table: "entity.country" */
  update_entity_country?: Maybe<Entity_Country_Mutation_Response>;
  /** update single row of the table: "entity.country" */
  update_entity_country_by_pk?: Maybe<Entity_Country>;
  /** update multiples rows of table: "entity.country" */
  update_entity_country_many?: Maybe<Array<Maybe<Entity_Country_Mutation_Response>>>;
  /** update data of the table: "entity.owner" */
  update_entity_owner?: Maybe<Entity_Owner_Mutation_Response>;
  /** update single row of the table: "entity.owner" */
  update_entity_owner_by_pk?: Maybe<Entity_Owner>;
  /** update multiples rows of table: "entity.owner" */
  update_entity_owner_many?: Maybe<Array<Maybe<Entity_Owner_Mutation_Response>>>;
  /** update data of the table: "entity.property" */
  update_entity_property?: Maybe<Entity_Property_Mutation_Response>;
  /** update single row of the table: "entity.property" */
  update_entity_property_by_pk?: Maybe<Entity_Property>;
  /** update multiples rows of table: "entity.property" */
  update_entity_property_many?: Maybe<Array<Maybe<Entity_Property_Mutation_Response>>>;
  /** update data of the table: "entity.property_media" */
  update_entity_property_media?: Maybe<Entity_Property_Media_Mutation_Response>;
  /** update single row of the table: "entity.property_media" */
  update_entity_property_media_by_pk?: Maybe<Entity_Property_Media>;
  /** update multiples rows of table: "entity.property_media" */
  update_entity_property_media_many?: Maybe<Array<Maybe<Entity_Property_Media_Mutation_Response>>>;
  /** update data of the table: "entity.property_type" */
  update_entity_property_type?: Maybe<Entity_Property_Type_Mutation_Response>;
  /** update single row of the table: "entity.property_type" */
  update_entity_property_type_by_pk?: Maybe<Entity_Property_Type>;
  /** update multiples rows of table: "entity.property_type" */
  update_entity_property_type_many?: Maybe<Array<Maybe<Entity_Property_Type_Mutation_Response>>>;
  /** update data of the table: "entity.state" */
  update_entity_state?: Maybe<Entity_State_Mutation_Response>;
  /** update single row of the table: "entity.state" */
  update_entity_state_by_pk?: Maybe<Entity_State>;
  /** update multiples rows of table: "entity.state" */
  update_entity_state_many?: Maybe<Array<Maybe<Entity_State_Mutation_Response>>>;
  /** update data of the table: "form.form" */
  update_form_form?: Maybe<Form_Form_Mutation_Response>;
  /** update single row of the table: "form.form" */
  update_form_form_by_pk?: Maybe<Form_Form>;
  /** update data of the table: "form.form_field" */
  update_form_form_field?: Maybe<Form_Form_Field_Mutation_Response>;
  /** update single row of the table: "form.form_field" */
  update_form_form_field_by_pk?: Maybe<Form_Form_Field>;
  /** update multiples rows of table: "form.form_field" */
  update_form_form_field_many?: Maybe<Array<Maybe<Form_Form_Field_Mutation_Response>>>;
  /** update multiples rows of table: "form.form" */
  update_form_form_many?: Maybe<Array<Maybe<Form_Form_Mutation_Response>>>;
  /** update data of the table: "form.form_response" */
  update_form_form_response?: Maybe<Form_Form_Response_Mutation_Response>;
  /** update data of the table: "form.form_response_answer" */
  update_form_form_response_answer?: Maybe<Form_Form_Response_Answer_Mutation_Response>;
  /** update single row of the table: "form.form_response_answer" */
  update_form_form_response_answer_by_pk?: Maybe<Form_Form_Response_Answer>;
  /** update multiples rows of table: "form.form_response_answer" */
  update_form_form_response_answer_many?: Maybe<Array<Maybe<Form_Form_Response_Answer_Mutation_Response>>>;
  /** update single row of the table: "form.form_response" */
  update_form_form_response_by_pk?: Maybe<Form_Form_Response>;
  /** update multiples rows of table: "form.form_response" */
  update_form_form_response_many?: Maybe<Array<Maybe<Form_Form_Response_Mutation_Response>>>;
  /** update data of the table: "workflow.edge" */
  update_workflow_edge?: Maybe<Workflow_Edge_Mutation_Response>;
  /** update single row of the table: "workflow.edge" */
  update_workflow_edge_by_pk?: Maybe<Workflow_Edge>;
  /** update multiples rows of table: "workflow.edge" */
  update_workflow_edge_many?: Maybe<Array<Maybe<Workflow_Edge_Mutation_Response>>>;
  /** update data of the table: "workflow.execution" */
  update_workflow_execution?: Maybe<Workflow_Execution_Mutation_Response>;
  /** update single row of the table: "workflow.execution" */
  update_workflow_execution_by_pk?: Maybe<Workflow_Execution>;
  /** update multiples rows of table: "workflow.execution" */
  update_workflow_execution_many?: Maybe<Array<Maybe<Workflow_Execution_Mutation_Response>>>;
  /** update data of the table: "workflow.node" */
  update_workflow_node?: Maybe<Workflow_Node_Mutation_Response>;
  /** update single row of the table: "workflow.node" */
  update_workflow_node_by_pk?: Maybe<Workflow_Node>;
  /** update multiples rows of table: "workflow.node" */
  update_workflow_node_many?: Maybe<Array<Maybe<Workflow_Node_Mutation_Response>>>;
  /** update data of the table: "workflow.workflow" */
  update_workflow_workflow?: Maybe<Workflow_Workflow_Mutation_Response>;
  /** update single row of the table: "workflow.workflow" */
  update_workflow_workflow_by_pk?: Maybe<Workflow_Workflow>;
  /** update multiples rows of table: "workflow.workflow" */
  update_workflow_workflow_many?: Maybe<Array<Maybe<Workflow_Workflow_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Agent_AgentArgs = {
  where: Agent_Agent_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agent_Agent_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Agent_BannerArgs = {
  where: Agent_Banner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agent_Banner_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Agent_Cron_JobArgs = {
  where: Agent_Cron_Job_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agent_Cron_Job_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Agent_DeploymentArgs = {
  where: Agent_Deployment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agent_Deployment_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Agent_HookArgs = {
  where: Agent_Hook_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agent_Hook_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Agent_InstallationArgs = {
  where: Agent_Installation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agent_Installation_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Agent_Installation_VariableArgs = {
  where: Agent_Installation_Variable_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agent_Installation_Variable_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Agent_RuntimeArgs = {
  where: Agent_Runtime_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agent_Runtime_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Agent_System_PromptArgs = {
  where: Agent_System_Prompt_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agent_System_Prompt_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_App_BlueprintArgs = {
  where: App_Blueprint_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Blueprint_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_App_ChatArgs = {
  where: App_Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Chat_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_App_DatasetArgs = {
  where: App_Dataset_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Dataset_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_App_FileArgs = {
  where: App_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_File_AttachmentArgs = {
  where: App_File_Attachment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_File_Attachment_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_App_File_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_App_InviteArgs = {
  where: App_Invite_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Invite_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_App_ThreadArgs = {
  where: App_Thread_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Thread_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_App_UserArgs = {
  where: App_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_User_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_App_WorkspaceArgs = {
  where: App_Workspace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Workspace_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_App_Workspace_MembershipArgs = {
  where: App_Workspace_Membership_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Workspace_Membership_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Api_KeyArgs = {
  where: Auth_Api_Key_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Api_Key_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_SessionArgs = {
  where: Auth_Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Session_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Billing_FeatureArgs = {
  where: Billing_Feature_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Billing_Feature_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Billing_PriceArgs = {
  where: Billing_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Billing_Price_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Billing_ProductArgs = {
  where: Billing_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Billing_Product_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Billing_SubscriptionArgs = {
  where: Billing_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Billing_Subscription_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_AddressArgs = {
  where: Entity_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Address_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_CountryArgs = {
  where: Entity_Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Country_By_PkArgs = {
  iso_code: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_OwnerArgs = {
  where: Entity_Owner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Owner_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_PropertyArgs = {
  where: Entity_Property_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Property_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_Property_MediaArgs = {
  where: Entity_Property_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Property_Media_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_Property_TypeArgs = {
  where: Entity_Property_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Property_Type_By_PkArgs = {
  type_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_StateArgs = {
  where: Entity_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_State_By_PkArgs = {
  state_code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Form_FormArgs = {
  where: Form_Form_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Form_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Form_FieldArgs = {
  where: Form_Form_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Form_Field_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Form_ResponseArgs = {
  where: Form_Form_Response_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Form_Response_AnswerArgs = {
  where: Form_Form_Response_Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Form_Response_Answer_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Form_Response_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Workflow_EdgeArgs = {
  where: Workflow_Edge_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workflow_Edge_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Workflow_ExecutionArgs = {
  where: Workflow_Execution_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workflow_Execution_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Workflow_NodeArgs = {
  where: Workflow_Node_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workflow_Node_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Workflow_WorkflowArgs = {
  where: Workflow_Workflow_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workflow_Workflow_By_PkArgs = {
  _uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Agent_AgentArgs = {
  objects: Array<Agent_Agent_Insert_Input>;
  on_conflict?: InputMaybe<Agent_Agent_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Agent_OneArgs = {
  object: Agent_Agent_Insert_Input;
  on_conflict?: InputMaybe<Agent_Agent_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_BannerArgs = {
  objects: Array<Agent_Banner_Insert_Input>;
  on_conflict?: InputMaybe<Agent_Banner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Banner_OneArgs = {
  object: Agent_Banner_Insert_Input;
  on_conflict?: InputMaybe<Agent_Banner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Cron_JobArgs = {
  objects: Array<Agent_Cron_Job_Insert_Input>;
  on_conflict?: InputMaybe<Agent_Cron_Job_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Cron_Job_OneArgs = {
  object: Agent_Cron_Job_Insert_Input;
  on_conflict?: InputMaybe<Agent_Cron_Job_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_DeploymentArgs = {
  objects: Array<Agent_Deployment_Insert_Input>;
  on_conflict?: InputMaybe<Agent_Deployment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Deployment_OneArgs = {
  object: Agent_Deployment_Insert_Input;
  on_conflict?: InputMaybe<Agent_Deployment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_HookArgs = {
  objects: Array<Agent_Hook_Insert_Input>;
  on_conflict?: InputMaybe<Agent_Hook_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Hook_OneArgs = {
  object: Agent_Hook_Insert_Input;
  on_conflict?: InputMaybe<Agent_Hook_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_InstallationArgs = {
  objects: Array<Agent_Installation_Insert_Input>;
  on_conflict?: InputMaybe<Agent_Installation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Installation_OneArgs = {
  object: Agent_Installation_Insert_Input;
  on_conflict?: InputMaybe<Agent_Installation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Installation_VariableArgs = {
  objects: Array<Agent_Installation_Variable_Insert_Input>;
  on_conflict?: InputMaybe<Agent_Installation_Variable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Installation_Variable_OneArgs = {
  object: Agent_Installation_Variable_Insert_Input;
  on_conflict?: InputMaybe<Agent_Installation_Variable_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_RuntimeArgs = {
  objects: Array<Agent_Runtime_Insert_Input>;
  on_conflict?: InputMaybe<Agent_Runtime_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_Runtime_OneArgs = {
  object: Agent_Runtime_Insert_Input;
  on_conflict?: InputMaybe<Agent_Runtime_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_System_PromptArgs = {
  objects: Array<Agent_System_Prompt_Insert_Input>;
  on_conflict?: InputMaybe<Agent_System_Prompt_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agent_System_Prompt_OneArgs = {
  object: Agent_System_Prompt_Insert_Input;
  on_conflict?: InputMaybe<Agent_System_Prompt_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_BlueprintArgs = {
  objects: Array<App_Blueprint_Insert_Input>;
  on_conflict?: InputMaybe<App_Blueprint_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Blueprint_OneArgs = {
  object: App_Blueprint_Insert_Input;
  on_conflict?: InputMaybe<App_Blueprint_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_ChatArgs = {
  objects: Array<App_Chat_Insert_Input>;
  on_conflict?: InputMaybe<App_Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Chat_OneArgs = {
  object: App_Chat_Insert_Input;
  on_conflict?: InputMaybe<App_Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_DatasetArgs = {
  objects: Array<App_Dataset_Insert_Input>;
  on_conflict?: InputMaybe<App_Dataset_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Dataset_OneArgs = {
  object: App_Dataset_Insert_Input;
  on_conflict?: InputMaybe<App_Dataset_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_FileArgs = {
  objects: Array<App_File_Insert_Input>;
  on_conflict?: InputMaybe<App_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_File_AttachmentArgs = {
  objects: Array<App_File_Attachment_Insert_Input>;
  on_conflict?: InputMaybe<App_File_Attachment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_File_Attachment_OneArgs = {
  object: App_File_Attachment_Insert_Input;
  on_conflict?: InputMaybe<App_File_Attachment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_File_OneArgs = {
  object: App_File_Insert_Input;
  on_conflict?: InputMaybe<App_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_InviteArgs = {
  objects: Array<App_Invite_Insert_Input>;
  on_conflict?: InputMaybe<App_Invite_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Invite_OneArgs = {
  object: App_Invite_Insert_Input;
  on_conflict?: InputMaybe<App_Invite_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_ThreadArgs = {
  objects: Array<App_Thread_Insert_Input>;
  on_conflict?: InputMaybe<App_Thread_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Thread_OneArgs = {
  object: App_Thread_Insert_Input;
  on_conflict?: InputMaybe<App_Thread_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_UserArgs = {
  objects: Array<App_User_Insert_Input>;
  on_conflict?: InputMaybe<App_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_User_OneArgs = {
  object: App_User_Insert_Input;
  on_conflict?: InputMaybe<App_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_WorkspaceArgs = {
  objects: Array<App_Workspace_Insert_Input>;
  on_conflict?: InputMaybe<App_Workspace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Workspace_MembershipArgs = {
  objects: Array<App_Workspace_Membership_Insert_Input>;
  on_conflict?: InputMaybe<App_Workspace_Membership_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Workspace_Membership_OneArgs = {
  object: App_Workspace_Membership_Insert_Input;
  on_conflict?: InputMaybe<App_Workspace_Membership_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Workspace_OneArgs = {
  object: App_Workspace_Insert_Input;
  on_conflict?: InputMaybe<App_Workspace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Api_KeyArgs = {
  objects: Array<Auth_Api_Key_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Api_Key_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Api_Key_OneArgs = {
  object: Auth_Api_Key_Insert_Input;
  on_conflict?: InputMaybe<Auth_Api_Key_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_SessionArgs = {
  objects: Array<Auth_Session_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Session_OneArgs = {
  object: Auth_Session_Insert_Input;
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_FeatureArgs = {
  objects: Array<Billing_Feature_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Feature_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_Feature_OneArgs = {
  object: Billing_Feature_Insert_Input;
  on_conflict?: InputMaybe<Billing_Feature_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_PriceArgs = {
  objects: Array<Billing_Price_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_Price_OneArgs = {
  object: Billing_Price_Insert_Input;
  on_conflict?: InputMaybe<Billing_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_ProductArgs = {
  objects: Array<Billing_Product_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_Product_OneArgs = {
  object: Billing_Product_Insert_Input;
  on_conflict?: InputMaybe<Billing_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_SubscriptionArgs = {
  objects: Array<Billing_Subscription_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_Subscription_OneArgs = {
  object: Billing_Subscription_Insert_Input;
  on_conflict?: InputMaybe<Billing_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_AddressArgs = {
  objects: Array<Entity_Address_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Address_OneArgs = {
  object: Entity_Address_Insert_Input;
  on_conflict?: InputMaybe<Entity_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_CountryArgs = {
  objects: Array<Entity_Country_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Country_OneArgs = {
  object: Entity_Country_Insert_Input;
  on_conflict?: InputMaybe<Entity_Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_OwnerArgs = {
  objects: Array<Entity_Owner_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Owner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Owner_OneArgs = {
  object: Entity_Owner_Insert_Input;
  on_conflict?: InputMaybe<Entity_Owner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_PropertyArgs = {
  objects: Array<Entity_Property_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Property_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Property_MediaArgs = {
  objects: Array<Entity_Property_Media_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Property_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Property_Media_OneArgs = {
  object: Entity_Property_Media_Insert_Input;
  on_conflict?: InputMaybe<Entity_Property_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Property_OneArgs = {
  object: Entity_Property_Insert_Input;
  on_conflict?: InputMaybe<Entity_Property_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Property_TypeArgs = {
  objects: Array<Entity_Property_Type_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Property_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Property_Type_OneArgs = {
  object: Entity_Property_Type_Insert_Input;
  on_conflict?: InputMaybe<Entity_Property_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_StateArgs = {
  objects: Array<Entity_State_Insert_Input>;
  on_conflict?: InputMaybe<Entity_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_State_OneArgs = {
  object: Entity_State_Insert_Input;
  on_conflict?: InputMaybe<Entity_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_FormArgs = {
  objects: Array<Form_Form_Insert_Input>;
  on_conflict?: InputMaybe<Form_Form_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Form_FieldArgs = {
  objects: Array<Form_Form_Field_Insert_Input>;
  on_conflict?: InputMaybe<Form_Form_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Form_Field_OneArgs = {
  object: Form_Form_Field_Insert_Input;
  on_conflict?: InputMaybe<Form_Form_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Form_OneArgs = {
  object: Form_Form_Insert_Input;
  on_conflict?: InputMaybe<Form_Form_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Form_ResponseArgs = {
  objects: Array<Form_Form_Response_Insert_Input>;
  on_conflict?: InputMaybe<Form_Form_Response_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Form_Response_AnswerArgs = {
  objects: Array<Form_Form_Response_Answer_Insert_Input>;
  on_conflict?: InputMaybe<Form_Form_Response_Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Form_Response_Answer_OneArgs = {
  object: Form_Form_Response_Answer_Insert_Input;
  on_conflict?: InputMaybe<Form_Form_Response_Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Form_Response_OneArgs = {
  object: Form_Form_Response_Insert_Input;
  on_conflict?: InputMaybe<Form_Form_Response_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_EdgeArgs = {
  objects: Array<Workflow_Edge_Insert_Input>;
  on_conflict?: InputMaybe<Workflow_Edge_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_Edge_OneArgs = {
  object: Workflow_Edge_Insert_Input;
  on_conflict?: InputMaybe<Workflow_Edge_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_ExecutionArgs = {
  objects: Array<Workflow_Execution_Insert_Input>;
  on_conflict?: InputMaybe<Workflow_Execution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_Execution_OneArgs = {
  object: Workflow_Execution_Insert_Input;
  on_conflict?: InputMaybe<Workflow_Execution_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_NodeArgs = {
  objects: Array<Workflow_Node_Insert_Input>;
  on_conflict?: InputMaybe<Workflow_Node_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_Node_OneArgs = {
  object: Workflow_Node_Insert_Input;
  on_conflict?: InputMaybe<Workflow_Node_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_WorkflowArgs = {
  objects: Array<Workflow_Workflow_Insert_Input>;
  on_conflict?: InputMaybe<Workflow_Workflow_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_Workflow_OneArgs = {
  object: Workflow_Workflow_Insert_Input;
  on_conflict?: InputMaybe<Workflow_Workflow_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_AgentArgs = {
  _append?: InputMaybe<Agent_Agent_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Agent_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Agent_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Agent_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Agent_Prepend_Input>;
  _set?: InputMaybe<Agent_Agent_Set_Input>;
  where: Agent_Agent_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Agent_By_PkArgs = {
  _append?: InputMaybe<Agent_Agent_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Agent_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Agent_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Agent_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Agent_Prepend_Input>;
  _set?: InputMaybe<Agent_Agent_Set_Input>;
  pk_columns: Agent_Agent_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Agent_ManyArgs = {
  updates: Array<Agent_Agent_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_BannerArgs = {
  _set?: InputMaybe<Agent_Banner_Set_Input>;
  where: Agent_Banner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Banner_By_PkArgs = {
  _set?: InputMaybe<Agent_Banner_Set_Input>;
  pk_columns: Agent_Banner_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Banner_ManyArgs = {
  updates: Array<Agent_Banner_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Cron_JobArgs = {
  _append?: InputMaybe<Agent_Cron_Job_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Cron_Job_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Cron_Job_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Cron_Job_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Cron_Job_Prepend_Input>;
  _set?: InputMaybe<Agent_Cron_Job_Set_Input>;
  where: Agent_Cron_Job_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Cron_Job_By_PkArgs = {
  _append?: InputMaybe<Agent_Cron_Job_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Cron_Job_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Cron_Job_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Cron_Job_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Cron_Job_Prepend_Input>;
  _set?: InputMaybe<Agent_Cron_Job_Set_Input>;
  pk_columns: Agent_Cron_Job_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Cron_Job_ManyArgs = {
  updates: Array<Agent_Cron_Job_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_DeploymentArgs = {
  _inc?: InputMaybe<Agent_Deployment_Inc_Input>;
  _set?: InputMaybe<Agent_Deployment_Set_Input>;
  where: Agent_Deployment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Deployment_By_PkArgs = {
  _inc?: InputMaybe<Agent_Deployment_Inc_Input>;
  _set?: InputMaybe<Agent_Deployment_Set_Input>;
  pk_columns: Agent_Deployment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Deployment_ManyArgs = {
  updates: Array<Agent_Deployment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_HookArgs = {
  _append?: InputMaybe<Agent_Hook_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Hook_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Hook_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Hook_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Hook_Prepend_Input>;
  _set?: InputMaybe<Agent_Hook_Set_Input>;
  where: Agent_Hook_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Hook_By_PkArgs = {
  _append?: InputMaybe<Agent_Hook_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Hook_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Hook_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Hook_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Hook_Prepend_Input>;
  _set?: InputMaybe<Agent_Hook_Set_Input>;
  pk_columns: Agent_Hook_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Hook_ManyArgs = {
  updates: Array<Agent_Hook_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_InstallationArgs = {
  _append?: InputMaybe<Agent_Installation_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Installation_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Installation_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Installation_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Installation_Prepend_Input>;
  _set?: InputMaybe<Agent_Installation_Set_Input>;
  where: Agent_Installation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Installation_By_PkArgs = {
  _append?: InputMaybe<Agent_Installation_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Installation_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Installation_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Installation_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Installation_Prepend_Input>;
  _set?: InputMaybe<Agent_Installation_Set_Input>;
  pk_columns: Agent_Installation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Installation_ManyArgs = {
  updates: Array<Agent_Installation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Installation_VariableArgs = {
  _append?: InputMaybe<Agent_Installation_Variable_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Installation_Variable_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Installation_Variable_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Installation_Variable_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Installation_Variable_Prepend_Input>;
  _set?: InputMaybe<Agent_Installation_Variable_Set_Input>;
  where: Agent_Installation_Variable_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Installation_Variable_By_PkArgs = {
  _append?: InputMaybe<Agent_Installation_Variable_Append_Input>;
  _delete_at_path?: InputMaybe<Agent_Installation_Variable_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Agent_Installation_Variable_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Agent_Installation_Variable_Delete_Key_Input>;
  _prepend?: InputMaybe<Agent_Installation_Variable_Prepend_Input>;
  _set?: InputMaybe<Agent_Installation_Variable_Set_Input>;
  pk_columns: Agent_Installation_Variable_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Installation_Variable_ManyArgs = {
  updates: Array<Agent_Installation_Variable_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_RuntimeArgs = {
  _set?: InputMaybe<Agent_Runtime_Set_Input>;
  where: Agent_Runtime_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Runtime_By_PkArgs = {
  _set?: InputMaybe<Agent_Runtime_Set_Input>;
  pk_columns: Agent_Runtime_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_Runtime_ManyArgs = {
  updates: Array<Agent_Runtime_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_System_PromptArgs = {
  _set?: InputMaybe<Agent_System_Prompt_Set_Input>;
  where: Agent_System_Prompt_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_System_Prompt_By_PkArgs = {
  _set?: InputMaybe<Agent_System_Prompt_Set_Input>;
  pk_columns: Agent_System_Prompt_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agent_System_Prompt_ManyArgs = {
  updates: Array<Agent_System_Prompt_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_BlueprintArgs = {
  _inc?: InputMaybe<App_Blueprint_Inc_Input>;
  _set?: InputMaybe<App_Blueprint_Set_Input>;
  where: App_Blueprint_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Blueprint_By_PkArgs = {
  _inc?: InputMaybe<App_Blueprint_Inc_Input>;
  _set?: InputMaybe<App_Blueprint_Set_Input>;
  pk_columns: App_Blueprint_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_Blueprint_ManyArgs = {
  updates: Array<App_Blueprint_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_ChatArgs = {
  _append?: InputMaybe<App_Chat_Append_Input>;
  _delete_at_path?: InputMaybe<App_Chat_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Chat_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Chat_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Chat_Prepend_Input>;
  _set?: InputMaybe<App_Chat_Set_Input>;
  where: App_Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Chat_By_PkArgs = {
  _append?: InputMaybe<App_Chat_Append_Input>;
  _delete_at_path?: InputMaybe<App_Chat_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Chat_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Chat_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Chat_Prepend_Input>;
  _set?: InputMaybe<App_Chat_Set_Input>;
  pk_columns: App_Chat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_Chat_ManyArgs = {
  updates: Array<App_Chat_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_DatasetArgs = {
  _append?: InputMaybe<App_Dataset_Append_Input>;
  _delete_at_path?: InputMaybe<App_Dataset_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Dataset_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Dataset_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Dataset_Prepend_Input>;
  _set?: InputMaybe<App_Dataset_Set_Input>;
  where: App_Dataset_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Dataset_By_PkArgs = {
  _append?: InputMaybe<App_Dataset_Append_Input>;
  _delete_at_path?: InputMaybe<App_Dataset_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Dataset_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Dataset_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Dataset_Prepend_Input>;
  _set?: InputMaybe<App_Dataset_Set_Input>;
  pk_columns: App_Dataset_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_Dataset_ManyArgs = {
  updates: Array<App_Dataset_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_FileArgs = {
  _set?: InputMaybe<App_File_Set_Input>;
  where: App_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_File_AttachmentArgs = {
  _set?: InputMaybe<App_File_Attachment_Set_Input>;
  where: App_File_Attachment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_File_Attachment_By_PkArgs = {
  _set?: InputMaybe<App_File_Attachment_Set_Input>;
  pk_columns: App_File_Attachment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_File_Attachment_ManyArgs = {
  updates: Array<App_File_Attachment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_File_By_PkArgs = {
  _set?: InputMaybe<App_File_Set_Input>;
  pk_columns: App_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_File_ManyArgs = {
  updates: Array<App_File_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_InviteArgs = {
  _inc?: InputMaybe<App_Invite_Inc_Input>;
  _set?: InputMaybe<App_Invite_Set_Input>;
  where: App_Invite_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Invite_By_PkArgs = {
  _inc?: InputMaybe<App_Invite_Inc_Input>;
  _set?: InputMaybe<App_Invite_Set_Input>;
  pk_columns: App_Invite_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_Invite_ManyArgs = {
  updates: Array<App_Invite_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_ThreadArgs = {
  _set?: InputMaybe<App_Thread_Set_Input>;
  where: App_Thread_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Thread_By_PkArgs = {
  _set?: InputMaybe<App_Thread_Set_Input>;
  pk_columns: App_Thread_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_Thread_ManyArgs = {
  updates: Array<App_Thread_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_UserArgs = {
  _append?: InputMaybe<App_User_Append_Input>;
  _delete_at_path?: InputMaybe<App_User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_User_Delete_Key_Input>;
  _prepend?: InputMaybe<App_User_Prepend_Input>;
  _set?: InputMaybe<App_User_Set_Input>;
  where: App_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_User_By_PkArgs = {
  _append?: InputMaybe<App_User_Append_Input>;
  _delete_at_path?: InputMaybe<App_User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_User_Delete_Key_Input>;
  _prepend?: InputMaybe<App_User_Prepend_Input>;
  _set?: InputMaybe<App_User_Set_Input>;
  pk_columns: App_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_User_ManyArgs = {
  updates: Array<App_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_WorkspaceArgs = {
  _set?: InputMaybe<App_Workspace_Set_Input>;
  where: App_Workspace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Workspace_By_PkArgs = {
  _set?: InputMaybe<App_Workspace_Set_Input>;
  pk_columns: App_Workspace_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_Workspace_ManyArgs = {
  updates: Array<App_Workspace_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_App_Workspace_MembershipArgs = {
  _set?: InputMaybe<App_Workspace_Membership_Set_Input>;
  where: App_Workspace_Membership_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Workspace_Membership_By_PkArgs = {
  _set?: InputMaybe<App_Workspace_Membership_Set_Input>;
  pk_columns: App_Workspace_Membership_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_Workspace_Membership_ManyArgs = {
  updates: Array<App_Workspace_Membership_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Api_KeyArgs = {
  _set?: InputMaybe<Auth_Api_Key_Set_Input>;
  where: Auth_Api_Key_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Api_Key_By_PkArgs = {
  _set?: InputMaybe<Auth_Api_Key_Set_Input>;
  pk_columns: Auth_Api_Key_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Api_Key_ManyArgs = {
  updates: Array<Auth_Api_Key_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_SessionArgs = {
  _append?: InputMaybe<Auth_Session_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Session_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Session_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Session_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Session_Prepend_Input>;
  _set?: InputMaybe<Auth_Session_Set_Input>;
  where: Auth_Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Session_By_PkArgs = {
  _append?: InputMaybe<Auth_Session_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Session_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Session_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Session_Delete_Key_Input>;
  _prepend?: InputMaybe<Auth_Session_Prepend_Input>;
  _set?: InputMaybe<Auth_Session_Set_Input>;
  pk_columns: Auth_Session_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Session_ManyArgs = {
  updates: Array<Auth_Session_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_FeatureArgs = {
  _inc?: InputMaybe<Billing_Feature_Inc_Input>;
  _set?: InputMaybe<Billing_Feature_Set_Input>;
  where: Billing_Feature_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Feature_By_PkArgs = {
  _inc?: InputMaybe<Billing_Feature_Inc_Input>;
  _set?: InputMaybe<Billing_Feature_Set_Input>;
  pk_columns: Billing_Feature_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Feature_ManyArgs = {
  updates: Array<Billing_Feature_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_PriceArgs = {
  _inc?: InputMaybe<Billing_Price_Inc_Input>;
  _set?: InputMaybe<Billing_Price_Set_Input>;
  where: Billing_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Price_By_PkArgs = {
  _inc?: InputMaybe<Billing_Price_Inc_Input>;
  _set?: InputMaybe<Billing_Price_Set_Input>;
  pk_columns: Billing_Price_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Price_ManyArgs = {
  updates: Array<Billing_Price_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_ProductArgs = {
  _inc?: InputMaybe<Billing_Product_Inc_Input>;
  _set?: InputMaybe<Billing_Product_Set_Input>;
  where: Billing_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Product_By_PkArgs = {
  _inc?: InputMaybe<Billing_Product_Inc_Input>;
  _set?: InputMaybe<Billing_Product_Set_Input>;
  pk_columns: Billing_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Product_ManyArgs = {
  updates: Array<Billing_Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_SubscriptionArgs = {
  _inc?: InputMaybe<Billing_Subscription_Inc_Input>;
  _set?: InputMaybe<Billing_Subscription_Set_Input>;
  where: Billing_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Subscription_By_PkArgs = {
  _inc?: InputMaybe<Billing_Subscription_Inc_Input>;
  _set?: InputMaybe<Billing_Subscription_Set_Input>;
  pk_columns: Billing_Subscription_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Subscription_ManyArgs = {
  updates: Array<Billing_Subscription_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_AddressArgs = {
  _set?: InputMaybe<Entity_Address_Set_Input>;
  where: Entity_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Address_By_PkArgs = {
  _set?: InputMaybe<Entity_Address_Set_Input>;
  pk_columns: Entity_Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Address_ManyArgs = {
  updates: Array<Entity_Address_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_CountryArgs = {
  _set?: InputMaybe<Entity_Country_Set_Input>;
  where: Entity_Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Country_By_PkArgs = {
  _set?: InputMaybe<Entity_Country_Set_Input>;
  pk_columns: Entity_Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Country_ManyArgs = {
  updates: Array<Entity_Country_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_OwnerArgs = {
  _set?: InputMaybe<Entity_Owner_Set_Input>;
  where: Entity_Owner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Owner_By_PkArgs = {
  _set?: InputMaybe<Entity_Owner_Set_Input>;
  pk_columns: Entity_Owner_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Owner_ManyArgs = {
  updates: Array<Entity_Owner_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_PropertyArgs = {
  _append?: InputMaybe<Entity_Property_Append_Input>;
  _delete_at_path?: InputMaybe<Entity_Property_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Entity_Property_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Entity_Property_Delete_Key_Input>;
  _inc?: InputMaybe<Entity_Property_Inc_Input>;
  _prepend?: InputMaybe<Entity_Property_Prepend_Input>;
  _set?: InputMaybe<Entity_Property_Set_Input>;
  where: Entity_Property_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Property_By_PkArgs = {
  _append?: InputMaybe<Entity_Property_Append_Input>;
  _delete_at_path?: InputMaybe<Entity_Property_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Entity_Property_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Entity_Property_Delete_Key_Input>;
  _inc?: InputMaybe<Entity_Property_Inc_Input>;
  _prepend?: InputMaybe<Entity_Property_Prepend_Input>;
  _set?: InputMaybe<Entity_Property_Set_Input>;
  pk_columns: Entity_Property_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Property_ManyArgs = {
  updates: Array<Entity_Property_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Property_MediaArgs = {
  _append?: InputMaybe<Entity_Property_Media_Append_Input>;
  _delete_at_path?: InputMaybe<Entity_Property_Media_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Entity_Property_Media_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Entity_Property_Media_Delete_Key_Input>;
  _inc?: InputMaybe<Entity_Property_Media_Inc_Input>;
  _prepend?: InputMaybe<Entity_Property_Media_Prepend_Input>;
  _set?: InputMaybe<Entity_Property_Media_Set_Input>;
  where: Entity_Property_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Property_Media_By_PkArgs = {
  _append?: InputMaybe<Entity_Property_Media_Append_Input>;
  _delete_at_path?: InputMaybe<Entity_Property_Media_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Entity_Property_Media_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Entity_Property_Media_Delete_Key_Input>;
  _inc?: InputMaybe<Entity_Property_Media_Inc_Input>;
  _prepend?: InputMaybe<Entity_Property_Media_Prepend_Input>;
  _set?: InputMaybe<Entity_Property_Media_Set_Input>;
  pk_columns: Entity_Property_Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Property_Media_ManyArgs = {
  updates: Array<Entity_Property_Media_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Property_TypeArgs = {
  _inc?: InputMaybe<Entity_Property_Type_Inc_Input>;
  _set?: InputMaybe<Entity_Property_Type_Set_Input>;
  where: Entity_Property_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Property_Type_By_PkArgs = {
  _inc?: InputMaybe<Entity_Property_Type_Inc_Input>;
  _set?: InputMaybe<Entity_Property_Type_Set_Input>;
  pk_columns: Entity_Property_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Property_Type_ManyArgs = {
  updates: Array<Entity_Property_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_StateArgs = {
  _set?: InputMaybe<Entity_State_Set_Input>;
  where: Entity_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_State_By_PkArgs = {
  _set?: InputMaybe<Entity_State_Set_Input>;
  pk_columns: Entity_State_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_State_ManyArgs = {
  updates: Array<Entity_State_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Form_FormArgs = {
  _inc?: InputMaybe<Form_Form_Inc_Input>;
  _set?: InputMaybe<Form_Form_Set_Input>;
  where: Form_Form_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_By_PkArgs = {
  _inc?: InputMaybe<Form_Form_Inc_Input>;
  _set?: InputMaybe<Form_Form_Set_Input>;
  pk_columns: Form_Form_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_FieldArgs = {
  _append?: InputMaybe<Form_Form_Field_Append_Input>;
  _delete_at_path?: InputMaybe<Form_Form_Field_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Form_Form_Field_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Form_Form_Field_Delete_Key_Input>;
  _inc?: InputMaybe<Form_Form_Field_Inc_Input>;
  _prepend?: InputMaybe<Form_Form_Field_Prepend_Input>;
  _set?: InputMaybe<Form_Form_Field_Set_Input>;
  where: Form_Form_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_Field_By_PkArgs = {
  _append?: InputMaybe<Form_Form_Field_Append_Input>;
  _delete_at_path?: InputMaybe<Form_Form_Field_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Form_Form_Field_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Form_Form_Field_Delete_Key_Input>;
  _inc?: InputMaybe<Form_Form_Field_Inc_Input>;
  _prepend?: InputMaybe<Form_Form_Field_Prepend_Input>;
  _set?: InputMaybe<Form_Form_Field_Set_Input>;
  pk_columns: Form_Form_Field_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_Field_ManyArgs = {
  updates: Array<Form_Form_Field_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_ManyArgs = {
  updates: Array<Form_Form_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_ResponseArgs = {
  _set?: InputMaybe<Form_Form_Response_Set_Input>;
  where: Form_Form_Response_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_Response_AnswerArgs = {
  _append?: InputMaybe<Form_Form_Response_Answer_Append_Input>;
  _delete_at_path?: InputMaybe<Form_Form_Response_Answer_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Form_Form_Response_Answer_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Form_Form_Response_Answer_Delete_Key_Input>;
  _prepend?: InputMaybe<Form_Form_Response_Answer_Prepend_Input>;
  _set?: InputMaybe<Form_Form_Response_Answer_Set_Input>;
  where: Form_Form_Response_Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_Response_Answer_By_PkArgs = {
  _append?: InputMaybe<Form_Form_Response_Answer_Append_Input>;
  _delete_at_path?: InputMaybe<Form_Form_Response_Answer_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Form_Form_Response_Answer_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Form_Form_Response_Answer_Delete_Key_Input>;
  _prepend?: InputMaybe<Form_Form_Response_Answer_Prepend_Input>;
  _set?: InputMaybe<Form_Form_Response_Answer_Set_Input>;
  pk_columns: Form_Form_Response_Answer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_Response_Answer_ManyArgs = {
  updates: Array<Form_Form_Response_Answer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_Response_By_PkArgs = {
  _set?: InputMaybe<Form_Form_Response_Set_Input>;
  pk_columns: Form_Form_Response_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Form_Response_ManyArgs = {
  updates: Array<Form_Form_Response_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_EdgeArgs = {
  _inc?: InputMaybe<Workflow_Edge_Inc_Input>;
  _set?: InputMaybe<Workflow_Edge_Set_Input>;
  where: Workflow_Edge_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Edge_By_PkArgs = {
  _inc?: InputMaybe<Workflow_Edge_Inc_Input>;
  _set?: InputMaybe<Workflow_Edge_Set_Input>;
  pk_columns: Workflow_Edge_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Edge_ManyArgs = {
  updates: Array<Workflow_Edge_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_ExecutionArgs = {
  _append?: InputMaybe<Workflow_Execution_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Execution_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Execution_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Execution_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflow_Execution_Prepend_Input>;
  _set?: InputMaybe<Workflow_Execution_Set_Input>;
  where: Workflow_Execution_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Execution_By_PkArgs = {
  _append?: InputMaybe<Workflow_Execution_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Execution_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Execution_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Execution_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflow_Execution_Prepend_Input>;
  _set?: InputMaybe<Workflow_Execution_Set_Input>;
  pk_columns: Workflow_Execution_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Execution_ManyArgs = {
  updates: Array<Workflow_Execution_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_NodeArgs = {
  _append?: InputMaybe<Workflow_Node_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Node_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Node_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Node_Delete_Key_Input>;
  _inc?: InputMaybe<Workflow_Node_Inc_Input>;
  _prepend?: InputMaybe<Workflow_Node_Prepend_Input>;
  _set?: InputMaybe<Workflow_Node_Set_Input>;
  where: Workflow_Node_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Node_By_PkArgs = {
  _append?: InputMaybe<Workflow_Node_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Node_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Node_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Node_Delete_Key_Input>;
  _inc?: InputMaybe<Workflow_Node_Inc_Input>;
  _prepend?: InputMaybe<Workflow_Node_Prepend_Input>;
  _set?: InputMaybe<Workflow_Node_Set_Input>;
  pk_columns: Workflow_Node_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Node_ManyArgs = {
  updates: Array<Workflow_Node_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_WorkflowArgs = {
  _inc?: InputMaybe<Workflow_Workflow_Inc_Input>;
  _set?: InputMaybe<Workflow_Workflow_Set_Input>;
  where: Workflow_Workflow_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Workflow_By_PkArgs = {
  _inc?: InputMaybe<Workflow_Workflow_Inc_Input>;
  _set?: InputMaybe<Workflow_Workflow_Set_Input>;
  pk_columns: Workflow_Workflow_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Workflow_ManyArgs = {
  updates: Array<Workflow_Workflow_Updates>;
};

/** ordering argument of a cursor */
export type Mx__Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

export type Mx__Mx___Mutation_Frontend = {
  __typename?: 'mx__mx___mutation_frontend';
  /** delete data from the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  delete_wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Mutation_Response>;
  /** delete single row from the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  delete_wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_by_pk?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
  /** delete data from the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  delete_wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Mutation_Response>;
  /** delete single row from the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  delete_wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_by_pk?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
  /** insert data into the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  insert_wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Mutation_Response>;
  /** insert a single row into the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  insert_wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_one?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
  /** insert data into the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  insert_wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Mutation_Response>;
  /** insert a single row into the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  insert_wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_one?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
  /** update data of the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  update_wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Mutation_Response>;
  /** update single row of the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  update_wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_by_pk?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
  /** update multiples rows of table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  update_wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_many?: Maybe<Array<Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Mutation_Response>>>;
  /** update data of the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  update_wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Mutation_Response>;
  /** update single row of the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  update_wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_by_pk?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
  /** update multiples rows of table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  update_wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_many?: Maybe<Array<Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Mutation_Response>>>;
};


export type Mx__Mx___Mutation_FrontendDelete_Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2FdrdtArgs = {
  where: Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp;
};


export type Mx__Mx___Mutation_FrontendDelete_Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Mx__Mx___Mutation_FrontendDelete_Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4IArgs = {
  where: Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp;
};


export type Mx__Mx___Mutation_FrontendDelete_Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Mx__Mx___Mutation_FrontendInsert_Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2FdrdtArgs = {
  objects: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Insert_Input>;
  on_conflict?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_On_Conflict>;
};


export type Mx__Mx___Mutation_FrontendInsert_Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_OneArgs = {
  object: Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Insert_Input;
  on_conflict?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_On_Conflict>;
};


export type Mx__Mx___Mutation_FrontendInsert_Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4IArgs = {
  objects: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Insert_Input>;
  on_conflict?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_On_Conflict>;
};


export type Mx__Mx___Mutation_FrontendInsert_Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_OneArgs = {
  object: Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Insert_Input;
  on_conflict?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_On_Conflict>;
};


export type Mx__Mx___Mutation_FrontendUpdate_Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2FdrdtArgs = {
  _set?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Set_Input>;
  where: Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp;
};


export type Mx__Mx___Mutation_FrontendUpdate_Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_By_PkArgs = {
  _set?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Set_Input>;
  pk_columns: Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Pk_Columns_Input;
};


export type Mx__Mx___Mutation_FrontendUpdate_Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_ManyArgs = {
  updates: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Updates>;
};


export type Mx__Mx___Mutation_FrontendUpdate_Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4IArgs = {
  _set?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Set_Input>;
  where: Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp;
};


export type Mx__Mx___Mutation_FrontendUpdate_Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_By_PkArgs = {
  _set?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Set_Input>;
  pk_columns: Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Pk_Columns_Input;
};


export type Mx__Mx___Mutation_FrontendUpdate_Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_ManyArgs = {
  updates: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Updates>;
};

export type Mx__Mx___Query = {
  __typename?: 'mx__mx___query';
  /** fetch data from the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
  /** fetch aggregated fields from the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_aggregate: Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Aggregate;
  /** fetch data from the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" using primary key columns */
  wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_by_pk?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
  /** fetch data from the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
  /** fetch aggregated fields from the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_aggregate: Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Aggregate;
  /** fetch data from the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" using primary key columns */
  wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_by_pk?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
};


export type Mx__Mx___QueryWksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2FdrdtArgs = {
  distinct_on?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Order_By>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp>;
};


export type Mx__Mx___QueryWksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Order_By>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp>;
};


export type Mx__Mx___QueryWksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Mx__Mx___QueryWksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4IArgs = {
  distinct_on?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Order_By>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp>;
};


export type Mx__Mx___QueryWksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Order_By>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp>;
};


export type Mx__Mx___QueryWksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_By_PkArgs = {
  _uid: Scalars['uuid'];
};

export type Mx__Mx___Subscription = {
  __typename?: 'mx__mx___subscription';
  /** fetch data from the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
  /** fetch aggregated fields from the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_aggregate: Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Aggregate;
  /** fetch data from the table: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" using primary key columns */
  wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_by_pk?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
  /** fetch data from the table in a streaming manner: "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
  wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_stream: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
  /** fetch data from the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
  /** fetch aggregated fields from the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_aggregate: Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Aggregate;
  /** fetch data from the table: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" using primary key columns */
  wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_by_pk?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
  /** fetch data from the table in a streaming manner: "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
  wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_stream: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
};


export type Mx__Mx___SubscriptionWksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2FdrdtArgs = {
  distinct_on?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Order_By>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp>;
};


export type Mx__Mx___SubscriptionWksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Order_By>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp>;
};


export type Mx__Mx___SubscriptionWksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Mx__Mx___SubscriptionWksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Stream_Cursor_Input>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp>;
};


export type Mx__Mx___SubscriptionWksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4IArgs = {
  distinct_on?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Order_By>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp>;
};


export type Mx__Mx___SubscriptionWksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Order_By>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp>;
};


export type Mx__Mx___SubscriptionWksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Mx__Mx___SubscriptionWksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Stream_Cursor_Input>>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp>;
};

/** columns and relationships of "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
};

/** aggregated selection of "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Aggregate = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_aggregate';
  aggregate?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Aggregate_Fields>;
  nodes: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
};

/** aggregate fields of "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Aggregate_Fields = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Max_Fields>;
  min?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Min_Fields>;
};


/** aggregate fields of "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT". All fields are combined with a logical 'AND'. */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp = {
  _and?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp>;
  _or?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'form_uu25uezyhm2fdrdt_pk';

/** input type for inserting data into table "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Max_Fields = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Min_Fields = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Mutation_Response = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt>;
};

/** on_conflict condition type for table "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_On_Conflict = {
  constraint: Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Constraint;
  update_columns?: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Update_Column>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp>;
};

/** Ordering options when selecting data from "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT". */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up';

/** input type for updating data in table "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "wksp_FtOOGCKYHKfuN2CD_form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Mx__Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "wksp_FtOOGCKYHKfuN2CD.form_UU25UEZYHM2FDRDT" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up';

export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Set_Input>;
  /** filter the rows which have to be updated */
  where: Mx__Wksp_FtOogckyhKfuN2Cd_Form_Uu25Uezyhm2Fdrdt_Bool_Exp;
};

/** columns and relationships of "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I';
  _cr: Scalars['timestamptz'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  fqst_7CFPC0VDU3P7XS4Y_email?: Maybe<Scalars['String']>;
  fqst_8QD6K941A7OIIV1V_full_name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Aggregate = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_aggregate';
  aggregate?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Aggregate_Fields>;
  nodes: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
};

/** aggregate fields of "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Aggregate_Fields = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Max_Fields>;
  min?: Maybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Min_Fields>;
};


/** aggregate fields of "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I". All fields are combined with a logical 'AND'. */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp = {
  _and?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp>;
  _or?: InputMaybe<Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp>>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  fqst_7CFPC0VDU3P7XS4Y_email?: InputMaybe<String_Comparison_Exp>;
  fqst_8QD6K941A7OIIV1V_full_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Constraint =
  /** unique or primary key constraint on columns "_uid" */
  | 'form_x2iodl8kiho50u4i_pk';

/** input type for inserting data into table "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  fqst_7CFPC0VDU3P7XS4Y_email?: InputMaybe<Scalars['String']>;
  fqst_8QD6K941A7OIIV1V_full_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Max_Fields = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  fqst_7CFPC0VDU3P7XS4Y_email?: Maybe<Scalars['String']>;
  fqst_8QD6K941A7OIIV1V_full_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Min_Fields = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  fqst_7CFPC0VDU3P7XS4Y_email?: Maybe<Scalars['String']>;
  fqst_8QD6K941A7OIIV1V_full_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Mutation_Response = {
  __typename?: 'mx__wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I>;
};

/** on_conflict condition type for table "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_On_Conflict = {
  constraint: Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Constraint;
  update_columns?: Array<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Update_Column>;
  where?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp>;
};

/** Ordering options when selecting data from "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I". */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  fqst_7CFPC0VDU3P7XS4Y_email?: InputMaybe<Order_By>;
  fqst_8QD6K941A7OIIV1V_full_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'fqst_7CFPC0VDU3P7XS4Y_email'
  /** column name */
  | 'fqst_8QD6K941A7OIIV1V_full_name';

/** input type for updating data in table "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  fqst_7CFPC0VDU3P7XS4Y_email?: InputMaybe<Scalars['String']>;
  fqst_8QD6K941A7OIIV1V_full_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "wksp_FtOOGCKYHKfuN2CD_form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Mx__Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  fqst_7CFPC0VDU3P7XS4Y_email?: InputMaybe<Scalars['String']>;
  fqst_8QD6K941A7OIIV1V_full_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "wksp_FtOOGCKYHKfuN2CD.form_X2IODL8KIHO50U4I" */
export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'fqst_7CFPC0VDU3P7XS4Y_email'
  /** column name */
  | 'fqst_8QD6K941A7OIIV1V_full_name';

export type Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Set_Input>;
  /** filter the rows which have to be updated */
  where: Mx__Wksp_FtOogckyhKfuN2Cd_Form_X2Iodl8Kiho50U4I_Bool_Exp;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** Boolean expression to compare columns of type "price_enum". All fields are combined with logical 'AND'. */
export type Price_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['price_enum']>;
  _gt?: InputMaybe<Scalars['price_enum']>;
  _gte?: InputMaybe<Scalars['price_enum']>;
  _in?: InputMaybe<Array<Scalars['price_enum']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['price_enum']>;
  _lte?: InputMaybe<Scalars['price_enum']>;
  _neq?: InputMaybe<Scalars['price_enum']>;
  _nin?: InputMaybe<Array<Scalars['price_enum']>>;
};

/** Boolean expression to compare columns of type "property_status". All fields are combined with logical 'AND'. */
export type Property_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['property_status']>;
  _gt?: InputMaybe<Scalars['property_status']>;
  _gte?: InputMaybe<Scalars['property_status']>;
  _in?: InputMaybe<Array<Scalars['property_status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['property_status']>;
  _lte?: InputMaybe<Scalars['property_status']>;
  _neq?: InputMaybe<Scalars['property_status']>;
  _nin?: InputMaybe<Array<Scalars['property_status']>>;
};

export type Query_Root = {
  __typename?: 'query_root';
  actionName?: Maybe<SampleOutput>;
  /** fetch data from the table: "agent.agent" */
  agent_agent: Array<Agent_Agent>;
  /** fetch aggregated fields from the table: "agent.agent" */
  agent_agent_aggregate: Agent_Agent_Aggregate;
  /** fetch data from the table: "agent.agent" using primary key columns */
  agent_agent_by_pk?: Maybe<Agent_Agent>;
  /** fetch data from the table: "agent.banner" */
  agent_banner: Array<Agent_Banner>;
  /** fetch aggregated fields from the table: "agent.banner" */
  agent_banner_aggregate: Agent_Banner_Aggregate;
  /** fetch data from the table: "agent.banner" using primary key columns */
  agent_banner_by_pk?: Maybe<Agent_Banner>;
  /** fetch data from the table: "agent.cron_job" */
  agent_cron_job: Array<Agent_Cron_Job>;
  /** fetch aggregated fields from the table: "agent.cron_job" */
  agent_cron_job_aggregate: Agent_Cron_Job_Aggregate;
  /** fetch data from the table: "agent.cron_job" using primary key columns */
  agent_cron_job_by_pk?: Maybe<Agent_Cron_Job>;
  /** fetch data from the table: "agent.deployment" */
  agent_deployment: Array<Agent_Deployment>;
  /** fetch aggregated fields from the table: "agent.deployment" */
  agent_deployment_aggregate: Agent_Deployment_Aggregate;
  /** fetch data from the table: "agent.deployment" using primary key columns */
  agent_deployment_by_pk?: Maybe<Agent_Deployment>;
  /** fetch data from the table: "agent.hook" */
  agent_hook: Array<Agent_Hook>;
  /** fetch aggregated fields from the table: "agent.hook" */
  agent_hook_aggregate: Agent_Hook_Aggregate;
  /** fetch data from the table: "agent.hook" using primary key columns */
  agent_hook_by_pk?: Maybe<Agent_Hook>;
  /** fetch data from the table: "agent.installation" */
  agent_installation: Array<Agent_Installation>;
  /** fetch aggregated fields from the table: "agent.installation" */
  agent_installation_aggregate: Agent_Installation_Aggregate;
  /** fetch data from the table: "agent.installation" using primary key columns */
  agent_installation_by_pk?: Maybe<Agent_Installation>;
  /** fetch data from the table: "agent.installation_variable" */
  agent_installation_variable: Array<Agent_Installation_Variable>;
  /** fetch aggregated fields from the table: "agent.installation_variable" */
  agent_installation_variable_aggregate: Agent_Installation_Variable_Aggregate;
  /** fetch data from the table: "agent.installation_variable" using primary key columns */
  agent_installation_variable_by_pk?: Maybe<Agent_Installation_Variable>;
  /** fetch data from the table: "agent.runtime" */
  agent_runtime: Array<Agent_Runtime>;
  /** fetch aggregated fields from the table: "agent.runtime" */
  agent_runtime_aggregate: Agent_Runtime_Aggregate;
  /** fetch data from the table: "agent.runtime" using primary key columns */
  agent_runtime_by_pk?: Maybe<Agent_Runtime>;
  /** fetch data from the table: "agent.system_prompt" */
  agent_system_prompt: Array<Agent_System_Prompt>;
  /** fetch aggregated fields from the table: "agent.system_prompt" */
  agent_system_prompt_aggregate: Agent_System_Prompt_Aggregate;
  /** fetch data from the table: "agent.system_prompt" using primary key columns */
  agent_system_prompt_by_pk?: Maybe<Agent_System_Prompt>;
  /** fetch data from the table: "app.blueprint" */
  app_blueprint: Array<App_Blueprint>;
  /** fetch aggregated fields from the table: "app.blueprint" */
  app_blueprint_aggregate: App_Blueprint_Aggregate;
  /** fetch data from the table: "app.blueprint" using primary key columns */
  app_blueprint_by_pk?: Maybe<App_Blueprint>;
  /** fetch data from the table: "app.chat" */
  app_chat: Array<App_Chat>;
  /** fetch aggregated fields from the table: "app.chat" */
  app_chat_aggregate: App_Chat_Aggregate;
  /** fetch data from the table: "app.chat" using primary key columns */
  app_chat_by_pk?: Maybe<App_Chat>;
  /** fetch data from the table: "app.dataset" */
  app_dataset: Array<App_Dataset>;
  /** fetch aggregated fields from the table: "app.dataset" */
  app_dataset_aggregate: App_Dataset_Aggregate;
  /** fetch data from the table: "app.dataset" using primary key columns */
  app_dataset_by_pk?: Maybe<App_Dataset>;
  /** fetch data from the table: "app.file" */
  app_file: Array<App_File>;
  /** fetch aggregated fields from the table: "app.file" */
  app_file_aggregate: App_File_Aggregate;
  /** fetch data from the table: "app.file_attachment" */
  app_file_attachment: Array<App_File_Attachment>;
  /** fetch aggregated fields from the table: "app.file_attachment" */
  app_file_attachment_aggregate: App_File_Attachment_Aggregate;
  /** fetch data from the table: "app.file_attachment" using primary key columns */
  app_file_attachment_by_pk?: Maybe<App_File_Attachment>;
  /** fetch data from the table: "app.file" using primary key columns */
  app_file_by_pk?: Maybe<App_File>;
  app_grb0ts6wtxigdwbi?: Maybe<App_Grb0ts6wtxigdwbi_Query>;
  /** fetch data from the table: "app.invite" */
  app_invite: Array<App_Invite>;
  /** fetch aggregated fields from the table: "app.invite" */
  app_invite_aggregate: App_Invite_Aggregate;
  /** fetch data from the table: "app.invite" using primary key columns */
  app_invite_by_pk?: Maybe<App_Invite>;
  /** fetch data from the table: "app.thread" */
  app_thread: Array<App_Thread>;
  /** fetch aggregated fields from the table: "app.thread" */
  app_thread_aggregate: App_Thread_Aggregate;
  /** fetch data from the table: "app.thread" using primary key columns */
  app_thread_by_pk?: Maybe<App_Thread>;
  /** fetch data from the table: "app.user" */
  app_user: Array<App_User>;
  /** fetch aggregated fields from the table: "app.user" */
  app_user_aggregate: App_User_Aggregate;
  /** fetch data from the table: "app.user" using primary key columns */
  app_user_by_pk?: Maybe<App_User>;
  /** fetch data from the table: "app.workspace" */
  app_workspace: Array<App_Workspace>;
  /** fetch aggregated fields from the table: "app.workspace" */
  app_workspace_aggregate: App_Workspace_Aggregate;
  /** fetch data from the table: "app.workspace" using primary key columns */
  app_workspace_by_pk?: Maybe<App_Workspace>;
  /** fetch data from the table: "app.workspace_membership" */
  app_workspace_membership: Array<App_Workspace_Membership>;
  /** fetch aggregated fields from the table: "app.workspace_membership" */
  app_workspace_membership_aggregate: App_Workspace_Membership_Aggregate;
  /** fetch data from the table: "app.workspace_membership" using primary key columns */
  app_workspace_membership_by_pk?: Maybe<App_Workspace_Membership>;
  /** fetch data from the table: "auth.api_key" */
  auth_api_key: Array<Auth_Api_Key>;
  /** fetch aggregated fields from the table: "auth.api_key" */
  auth_api_key_aggregate: Auth_Api_Key_Aggregate;
  /** fetch data from the table: "auth.api_key" using primary key columns */
  auth_api_key_by_pk?: Maybe<Auth_Api_Key>;
  /** fetch data from the table: "auth.session" */
  auth_session: Array<Auth_Session>;
  /** fetch aggregated fields from the table: "auth.session" */
  auth_session_aggregate: Auth_Session_Aggregate;
  /** fetch data from the table: "auth.session" using primary key columns */
  auth_session_by_pk?: Maybe<Auth_Session>;
  /** fetch data from the table: "billing.feature" */
  billing_feature: Array<Billing_Feature>;
  /** fetch aggregated fields from the table: "billing.feature" */
  billing_feature_aggregate: Billing_Feature_Aggregate;
  /** fetch data from the table: "billing.feature" using primary key columns */
  billing_feature_by_pk?: Maybe<Billing_Feature>;
  /** fetch data from the table: "billing.gql_subscription" */
  billing_gql_subscription: Array<Billing_Gql_Subscription>;
  /** fetch aggregated fields from the table: "billing.gql_subscription" */
  billing_gql_subscription_aggregate: Billing_Gql_Subscription_Aggregate;
  /** fetch data from the table: "billing.price" */
  billing_price: Array<Billing_Price>;
  /** fetch aggregated fields from the table: "billing.price" */
  billing_price_aggregate: Billing_Price_Aggregate;
  /** fetch data from the table: "billing.price" using primary key columns */
  billing_price_by_pk?: Maybe<Billing_Price>;
  /** fetch data from the table: "billing.product" */
  billing_product: Array<Billing_Product>;
  /** fetch aggregated fields from the table: "billing.product" */
  billing_product_aggregate: Billing_Product_Aggregate;
  /** fetch data from the table: "billing.product" using primary key columns */
  billing_product_by_pk?: Maybe<Billing_Product>;
  /** fetch data from the table: "billing.subscription" */
  billing_subscription: Array<Billing_Subscription>;
  /** fetch aggregated fields from the table: "billing.subscription" */
  billing_subscription_aggregate: Billing_Subscription_Aggregate;
  /** fetch data from the table: "billing.subscription" using primary key columns */
  billing_subscription_by_pk?: Maybe<Billing_Subscription>;
  /** fetch data from the table: "entity.address" */
  entity_address: Array<Entity_Address>;
  /** fetch aggregated fields from the table: "entity.address" */
  entity_address_aggregate: Entity_Address_Aggregate;
  /** fetch data from the table: "entity.address" using primary key columns */
  entity_address_by_pk?: Maybe<Entity_Address>;
  /** fetch data from the table: "entity.country" */
  entity_country: Array<Entity_Country>;
  /** fetch aggregated fields from the table: "entity.country" */
  entity_country_aggregate: Entity_Country_Aggregate;
  /** fetch data from the table: "entity.country" using primary key columns */
  entity_country_by_pk?: Maybe<Entity_Country>;
  /** fetch data from the table: "entity.owner" */
  entity_owner: Array<Entity_Owner>;
  /** fetch aggregated fields from the table: "entity.owner" */
  entity_owner_aggregate: Entity_Owner_Aggregate;
  /** fetch data from the table: "entity.owner" using primary key columns */
  entity_owner_by_pk?: Maybe<Entity_Owner>;
  /** fetch data from the table: "entity.property" */
  entity_property: Array<Entity_Property>;
  /** fetch aggregated fields from the table: "entity.property" */
  entity_property_aggregate: Entity_Property_Aggregate;
  /** fetch data from the table: "entity.property" using primary key columns */
  entity_property_by_pk?: Maybe<Entity_Property>;
  /** fetch data from the table: "entity.property_media" */
  entity_property_media: Array<Entity_Property_Media>;
  /** fetch aggregated fields from the table: "entity.property_media" */
  entity_property_media_aggregate: Entity_Property_Media_Aggregate;
  /** fetch data from the table: "entity.property_media" using primary key columns */
  entity_property_media_by_pk?: Maybe<Entity_Property_Media>;
  /** fetch data from the table: "entity.property_type" */
  entity_property_type: Array<Entity_Property_Type>;
  /** fetch aggregated fields from the table: "entity.property_type" */
  entity_property_type_aggregate: Entity_Property_Type_Aggregate;
  /** fetch data from the table: "entity.property_type" using primary key columns */
  entity_property_type_by_pk?: Maybe<Entity_Property_Type>;
  /** fetch data from the table: "entity.state" */
  entity_state: Array<Entity_State>;
  /** fetch aggregated fields from the table: "entity.state" */
  entity_state_aggregate: Entity_State_Aggregate;
  /** fetch data from the table: "entity.state" using primary key columns */
  entity_state_by_pk?: Maybe<Entity_State>;
  /** fetch data from the table: "form.form" */
  form_form: Array<Form_Form>;
  /** fetch aggregated fields from the table: "form.form" */
  form_form_aggregate: Form_Form_Aggregate;
  /** fetch data from the table: "form.form" using primary key columns */
  form_form_by_pk?: Maybe<Form_Form>;
  /** fetch data from the table: "form.form_field" */
  form_form_field: Array<Form_Form_Field>;
  /** fetch aggregated fields from the table: "form.form_field" */
  form_form_field_aggregate: Form_Form_Field_Aggregate;
  /** fetch data from the table: "form.form_field" using primary key columns */
  form_form_field_by_pk?: Maybe<Form_Form_Field>;
  /** fetch data from the table: "form.form_response" */
  form_form_response: Array<Form_Form_Response>;
  /** fetch aggregated fields from the table: "form.form_response" */
  form_form_response_aggregate: Form_Form_Response_Aggregate;
  /** fetch data from the table: "form.form_response_answer" */
  form_form_response_answer: Array<Form_Form_Response_Answer>;
  /** fetch aggregated fields from the table: "form.form_response_answer" */
  form_form_response_answer_aggregate: Form_Form_Response_Answer_Aggregate;
  /** fetch data from the table: "form.form_response_answer" using primary key columns */
  form_form_response_answer_by_pk?: Maybe<Form_Form_Response_Answer>;
  /** fetch data from the table: "form.form_response" using primary key columns */
  form_form_response_by_pk?: Maybe<Form_Form_Response>;
  mx__?: Maybe<Mx__Mx___Query>;
  /** fetch data from the table: "workflow.edge" */
  workflow_edge: Array<Workflow_Edge>;
  /** fetch aggregated fields from the table: "workflow.edge" */
  workflow_edge_aggregate: Workflow_Edge_Aggregate;
  /** fetch data from the table: "workflow.edge" using primary key columns */
  workflow_edge_by_pk?: Maybe<Workflow_Edge>;
  /** fetch data from the table: "workflow.execution" */
  workflow_execution: Array<Workflow_Execution>;
  /** fetch aggregated fields from the table: "workflow.execution" */
  workflow_execution_aggregate: Workflow_Execution_Aggregate;
  /** fetch data from the table: "workflow.execution" using primary key columns */
  workflow_execution_by_pk?: Maybe<Workflow_Execution>;
  /** fetch data from the table: "workflow.node" */
  workflow_node: Array<Workflow_Node>;
  /** fetch aggregated fields from the table: "workflow.node" */
  workflow_node_aggregate: Workflow_Node_Aggregate;
  /** fetch data from the table: "workflow.node" using primary key columns */
  workflow_node_by_pk?: Maybe<Workflow_Node>;
  /** fetch data from the table: "workflow.workflow" */
  workflow_workflow: Array<Workflow_Workflow>;
  /** fetch aggregated fields from the table: "workflow.workflow" */
  workflow_workflow_aggregate: Workflow_Workflow_Aggregate;
  /** fetch data from the table: "workflow.workflow" using primary key columns */
  workflow_workflow_by_pk?: Maybe<Workflow_Workflow>;
};


export type Query_RootActionNameArgs = {
  arg1: SampleInput;
};


export type Query_RootAgent_AgentArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


export type Query_RootAgent_Agent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


export type Query_RootAgent_Agent_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAgent_BannerArgs = {
  distinct_on?: InputMaybe<Array<Agent_Banner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Banner_Order_By>>;
  where?: InputMaybe<Agent_Banner_Bool_Exp>;
};


export type Query_RootAgent_Banner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Banner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Banner_Order_By>>;
  where?: InputMaybe<Agent_Banner_Bool_Exp>;
};


export type Query_RootAgent_Banner_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAgent_Cron_JobArgs = {
  distinct_on?: InputMaybe<Array<Agent_Cron_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Cron_Job_Order_By>>;
  where?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
};


export type Query_RootAgent_Cron_Job_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Cron_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Cron_Job_Order_By>>;
  where?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
};


export type Query_RootAgent_Cron_Job_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAgent_DeploymentArgs = {
  distinct_on?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Deployment_Order_By>>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};


export type Query_RootAgent_Deployment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Deployment_Order_By>>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};


export type Query_RootAgent_Deployment_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootAgent_HookArgs = {
  distinct_on?: InputMaybe<Array<Agent_Hook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Hook_Order_By>>;
  where?: InputMaybe<Agent_Hook_Bool_Exp>;
};


export type Query_RootAgent_Hook_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Hook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Hook_Order_By>>;
  where?: InputMaybe<Agent_Hook_Bool_Exp>;
};


export type Query_RootAgent_Hook_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAgent_InstallationArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


export type Query_RootAgent_Installation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


export type Query_RootAgent_Installation_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAgent_Installation_VariableArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Variable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Variable_Order_By>>;
  where?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
};


export type Query_RootAgent_Installation_Variable_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Variable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Variable_Order_By>>;
  where?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
};


export type Query_RootAgent_Installation_Variable_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAgent_RuntimeArgs = {
  distinct_on?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Runtime_Order_By>>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};


export type Query_RootAgent_Runtime_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Runtime_Order_By>>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};


export type Query_RootAgent_Runtime_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootAgent_System_PromptArgs = {
  distinct_on?: InputMaybe<Array<Agent_System_Prompt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_System_Prompt_Order_By>>;
  where?: InputMaybe<Agent_System_Prompt_Bool_Exp>;
};


export type Query_RootAgent_System_Prompt_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_System_Prompt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_System_Prompt_Order_By>>;
  where?: InputMaybe<Agent_System_Prompt_Bool_Exp>;
};


export type Query_RootAgent_System_Prompt_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootApp_BlueprintArgs = {
  distinct_on?: InputMaybe<Array<App_Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Blueprint_Order_By>>;
  where?: InputMaybe<App_Blueprint_Bool_Exp>;
};


export type Query_RootApp_Blueprint_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Blueprint_Order_By>>;
  where?: InputMaybe<App_Blueprint_Bool_Exp>;
};


export type Query_RootApp_Blueprint_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootApp_ChatArgs = {
  distinct_on?: InputMaybe<Array<App_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Chat_Order_By>>;
  where?: InputMaybe<App_Chat_Bool_Exp>;
};


export type Query_RootApp_Chat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Chat_Order_By>>;
  where?: InputMaybe<App_Chat_Bool_Exp>;
};


export type Query_RootApp_Chat_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootApp_DatasetArgs = {
  distinct_on?: InputMaybe<Array<App_Dataset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Dataset_Order_By>>;
  where?: InputMaybe<App_Dataset_Bool_Exp>;
};


export type Query_RootApp_Dataset_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Dataset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Dataset_Order_By>>;
  where?: InputMaybe<App_Dataset_Bool_Exp>;
};


export type Query_RootApp_Dataset_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootApp_FileArgs = {
  distinct_on?: InputMaybe<Array<App_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Order_By>>;
  where?: InputMaybe<App_File_Bool_Exp>;
};


export type Query_RootApp_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Order_By>>;
  where?: InputMaybe<App_File_Bool_Exp>;
};


export type Query_RootApp_File_AttachmentArgs = {
  distinct_on?: InputMaybe<Array<App_File_Attachment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Attachment_Order_By>>;
  where?: InputMaybe<App_File_Attachment_Bool_Exp>;
};


export type Query_RootApp_File_Attachment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_File_Attachment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Attachment_Order_By>>;
  where?: InputMaybe<App_File_Attachment_Bool_Exp>;
};


export type Query_RootApp_File_Attachment_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootApp_File_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootApp_InviteArgs = {
  distinct_on?: InputMaybe<Array<App_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Invite_Order_By>>;
  where?: InputMaybe<App_Invite_Bool_Exp>;
};


export type Query_RootApp_Invite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Invite_Order_By>>;
  where?: InputMaybe<App_Invite_Bool_Exp>;
};


export type Query_RootApp_Invite_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootApp_ThreadArgs = {
  distinct_on?: InputMaybe<Array<App_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Thread_Order_By>>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};


export type Query_RootApp_Thread_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Thread_Order_By>>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};


export type Query_RootApp_Thread_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootApp_UserArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Query_RootApp_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Query_RootApp_User_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootApp_WorkspaceArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Order_By>>;
  where?: InputMaybe<App_Workspace_Bool_Exp>;
};


export type Query_RootApp_Workspace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Order_By>>;
  where?: InputMaybe<App_Workspace_Bool_Exp>;
};


export type Query_RootApp_Workspace_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootApp_Workspace_MembershipArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


export type Query_RootApp_Workspace_Membership_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


export type Query_RootApp_Workspace_Membership_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuth_Api_KeyArgs = {
  distinct_on?: InputMaybe<Array<Auth_Api_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Api_Key_Order_By>>;
  where?: InputMaybe<Auth_Api_Key_Bool_Exp>;
};


export type Query_RootAuth_Api_Key_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Api_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Api_Key_Order_By>>;
  where?: InputMaybe<Auth_Api_Key_Bool_Exp>;
};


export type Query_RootAuth_Api_Key_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Query_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Query_RootAuth_Session_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBilling_FeatureArgs = {
  distinct_on?: InputMaybe<Array<Billing_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Feature_Order_By>>;
  where?: InputMaybe<Billing_Feature_Bool_Exp>;
};


export type Query_RootBilling_Feature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Feature_Order_By>>;
  where?: InputMaybe<Billing_Feature_Bool_Exp>;
};


export type Query_RootBilling_Feature_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBilling_Gql_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Billing_Gql_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Gql_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Gql_Subscription_Bool_Exp>;
};


export type Query_RootBilling_Gql_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Gql_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Gql_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Gql_Subscription_Bool_Exp>;
};


export type Query_RootBilling_PriceArgs = {
  distinct_on?: InputMaybe<Array<Billing_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Price_Order_By>>;
  where?: InputMaybe<Billing_Price_Bool_Exp>;
};


export type Query_RootBilling_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Price_Order_By>>;
  where?: InputMaybe<Billing_Price_Bool_Exp>;
};


export type Query_RootBilling_Price_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootBilling_ProductArgs = {
  distinct_on?: InputMaybe<Array<Billing_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Product_Order_By>>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};


export type Query_RootBilling_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Product_Order_By>>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};


export type Query_RootBilling_Product_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBilling_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};


export type Query_RootBilling_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};


export type Query_RootBilling_Subscription_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootEntity_AddressArgs = {
  distinct_on?: InputMaybe<Array<Entity_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Address_Order_By>>;
  where?: InputMaybe<Entity_Address_Bool_Exp>;
};


export type Query_RootEntity_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Address_Order_By>>;
  where?: InputMaybe<Entity_Address_Bool_Exp>;
};


export type Query_RootEntity_Address_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootEntity_CountryArgs = {
  distinct_on?: InputMaybe<Array<Entity_Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Country_Order_By>>;
  where?: InputMaybe<Entity_Country_Bool_Exp>;
};


export type Query_RootEntity_Country_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Country_Order_By>>;
  where?: InputMaybe<Entity_Country_Bool_Exp>;
};


export type Query_RootEntity_Country_By_PkArgs = {
  iso_code: Scalars['bpchar'];
};


export type Query_RootEntity_OwnerArgs = {
  distinct_on?: InputMaybe<Array<Entity_Owner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Owner_Order_By>>;
  where?: InputMaybe<Entity_Owner_Bool_Exp>;
};


export type Query_RootEntity_Owner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Owner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Owner_Order_By>>;
  where?: InputMaybe<Entity_Owner_Bool_Exp>;
};


export type Query_RootEntity_Owner_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootEntity_PropertyArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};


export type Query_RootEntity_Property_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};


export type Query_RootEntity_Property_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootEntity_Property_MediaArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Media_Order_By>>;
  where?: InputMaybe<Entity_Property_Media_Bool_Exp>;
};


export type Query_RootEntity_Property_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Media_Order_By>>;
  where?: InputMaybe<Entity_Property_Media_Bool_Exp>;
};


export type Query_RootEntity_Property_Media_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootEntity_Property_TypeArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Type_Order_By>>;
  where?: InputMaybe<Entity_Property_Type_Bool_Exp>;
};


export type Query_RootEntity_Property_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Type_Order_By>>;
  where?: InputMaybe<Entity_Property_Type_Bool_Exp>;
};


export type Query_RootEntity_Property_Type_By_PkArgs = {
  type_id: Scalars['Int'];
};


export type Query_RootEntity_StateArgs = {
  distinct_on?: InputMaybe<Array<Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_State_Order_By>>;
  where?: InputMaybe<Entity_State_Bool_Exp>;
};


export type Query_RootEntity_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_State_Order_By>>;
  where?: InputMaybe<Entity_State_Bool_Exp>;
};


export type Query_RootEntity_State_By_PkArgs = {
  state_code: Scalars['String'];
};


export type Query_RootForm_FormArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Order_By>>;
  where?: InputMaybe<Form_Form_Bool_Exp>;
};


export type Query_RootForm_Form_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Order_By>>;
  where?: InputMaybe<Form_Form_Bool_Exp>;
};


export type Query_RootForm_Form_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootForm_Form_FieldArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Field_Order_By>>;
  where?: InputMaybe<Form_Form_Field_Bool_Exp>;
};


export type Query_RootForm_Form_Field_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Field_Order_By>>;
  where?: InputMaybe<Form_Form_Field_Bool_Exp>;
};


export type Query_RootForm_Form_Field_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootForm_Form_ResponseArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Bool_Exp>;
};


export type Query_RootForm_Form_Response_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Bool_Exp>;
};


export type Query_RootForm_Form_Response_AnswerArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Answer_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};


export type Query_RootForm_Form_Response_Answer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Answer_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};


export type Query_RootForm_Form_Response_Answer_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootForm_Form_Response_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootWorkflow_EdgeArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


export type Query_RootWorkflow_Edge_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


export type Query_RootWorkflow_Edge_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootWorkflow_ExecutionArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Execution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Execution_Order_By>>;
  where?: InputMaybe<Workflow_Execution_Bool_Exp>;
};


export type Query_RootWorkflow_Execution_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Execution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Execution_Order_By>>;
  where?: InputMaybe<Workflow_Execution_Bool_Exp>;
};


export type Query_RootWorkflow_Execution_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootWorkflow_NodeArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Node_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Node_Order_By>>;
  where?: InputMaybe<Workflow_Node_Bool_Exp>;
};


export type Query_RootWorkflow_Node_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Node_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Node_Order_By>>;
  where?: InputMaybe<Workflow_Node_Bool_Exp>;
};


export type Query_RootWorkflow_Node_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Query_RootWorkflow_WorkflowArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Workflow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Workflow_Order_By>>;
  where?: InputMaybe<Workflow_Workflow_Bool_Exp>;
};


export type Query_RootWorkflow_Workflow_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Workflow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Workflow_Order_By>>;
  where?: InputMaybe<Workflow_Workflow_Bool_Exp>;
};


export type Query_RootWorkflow_Workflow_By_PkArgs = {
  _uid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "agent.agent" */
  agent_agent: Array<Agent_Agent>;
  /** fetch aggregated fields from the table: "agent.agent" */
  agent_agent_aggregate: Agent_Agent_Aggregate;
  /** fetch data from the table: "agent.agent" using primary key columns */
  agent_agent_by_pk?: Maybe<Agent_Agent>;
  /** fetch data from the table in a streaming manner: "agent.agent" */
  agent_agent_stream: Array<Agent_Agent>;
  /** fetch data from the table: "agent.banner" */
  agent_banner: Array<Agent_Banner>;
  /** fetch aggregated fields from the table: "agent.banner" */
  agent_banner_aggregate: Agent_Banner_Aggregate;
  /** fetch data from the table: "agent.banner" using primary key columns */
  agent_banner_by_pk?: Maybe<Agent_Banner>;
  /** fetch data from the table in a streaming manner: "agent.banner" */
  agent_banner_stream: Array<Agent_Banner>;
  /** fetch data from the table: "agent.cron_job" */
  agent_cron_job: Array<Agent_Cron_Job>;
  /** fetch aggregated fields from the table: "agent.cron_job" */
  agent_cron_job_aggregate: Agent_Cron_Job_Aggregate;
  /** fetch data from the table: "agent.cron_job" using primary key columns */
  agent_cron_job_by_pk?: Maybe<Agent_Cron_Job>;
  /** fetch data from the table in a streaming manner: "agent.cron_job" */
  agent_cron_job_stream: Array<Agent_Cron_Job>;
  /** fetch data from the table: "agent.deployment" */
  agent_deployment: Array<Agent_Deployment>;
  /** fetch aggregated fields from the table: "agent.deployment" */
  agent_deployment_aggregate: Agent_Deployment_Aggregate;
  /** fetch data from the table: "agent.deployment" using primary key columns */
  agent_deployment_by_pk?: Maybe<Agent_Deployment>;
  /** fetch data from the table in a streaming manner: "agent.deployment" */
  agent_deployment_stream: Array<Agent_Deployment>;
  /** fetch data from the table: "agent.hook" */
  agent_hook: Array<Agent_Hook>;
  /** fetch aggregated fields from the table: "agent.hook" */
  agent_hook_aggregate: Agent_Hook_Aggregate;
  /** fetch data from the table: "agent.hook" using primary key columns */
  agent_hook_by_pk?: Maybe<Agent_Hook>;
  /** fetch data from the table in a streaming manner: "agent.hook" */
  agent_hook_stream: Array<Agent_Hook>;
  /** fetch data from the table: "agent.installation" */
  agent_installation: Array<Agent_Installation>;
  /** fetch aggregated fields from the table: "agent.installation" */
  agent_installation_aggregate: Agent_Installation_Aggregate;
  /** fetch data from the table: "agent.installation" using primary key columns */
  agent_installation_by_pk?: Maybe<Agent_Installation>;
  /** fetch data from the table in a streaming manner: "agent.installation" */
  agent_installation_stream: Array<Agent_Installation>;
  /** fetch data from the table: "agent.installation_variable" */
  agent_installation_variable: Array<Agent_Installation_Variable>;
  /** fetch aggregated fields from the table: "agent.installation_variable" */
  agent_installation_variable_aggregate: Agent_Installation_Variable_Aggregate;
  /** fetch data from the table: "agent.installation_variable" using primary key columns */
  agent_installation_variable_by_pk?: Maybe<Agent_Installation_Variable>;
  /** fetch data from the table in a streaming manner: "agent.installation_variable" */
  agent_installation_variable_stream: Array<Agent_Installation_Variable>;
  /** fetch data from the table: "agent.runtime" */
  agent_runtime: Array<Agent_Runtime>;
  /** fetch aggregated fields from the table: "agent.runtime" */
  agent_runtime_aggregate: Agent_Runtime_Aggregate;
  /** fetch data from the table: "agent.runtime" using primary key columns */
  agent_runtime_by_pk?: Maybe<Agent_Runtime>;
  /** fetch data from the table in a streaming manner: "agent.runtime" */
  agent_runtime_stream: Array<Agent_Runtime>;
  /** fetch data from the table: "agent.system_prompt" */
  agent_system_prompt: Array<Agent_System_Prompt>;
  /** fetch aggregated fields from the table: "agent.system_prompt" */
  agent_system_prompt_aggregate: Agent_System_Prompt_Aggregate;
  /** fetch data from the table: "agent.system_prompt" using primary key columns */
  agent_system_prompt_by_pk?: Maybe<Agent_System_Prompt>;
  /** fetch data from the table in a streaming manner: "agent.system_prompt" */
  agent_system_prompt_stream: Array<Agent_System_Prompt>;
  /** fetch data from the table: "app.blueprint" */
  app_blueprint: Array<App_Blueprint>;
  /** fetch aggregated fields from the table: "app.blueprint" */
  app_blueprint_aggregate: App_Blueprint_Aggregate;
  /** fetch data from the table: "app.blueprint" using primary key columns */
  app_blueprint_by_pk?: Maybe<App_Blueprint>;
  /** fetch data from the table in a streaming manner: "app.blueprint" */
  app_blueprint_stream: Array<App_Blueprint>;
  /** fetch data from the table: "app.chat" */
  app_chat: Array<App_Chat>;
  /** fetch aggregated fields from the table: "app.chat" */
  app_chat_aggregate: App_Chat_Aggregate;
  /** fetch data from the table: "app.chat" using primary key columns */
  app_chat_by_pk?: Maybe<App_Chat>;
  /** fetch data from the table in a streaming manner: "app.chat" */
  app_chat_stream: Array<App_Chat>;
  /** fetch data from the table: "app.dataset" */
  app_dataset: Array<App_Dataset>;
  /** fetch aggregated fields from the table: "app.dataset" */
  app_dataset_aggregate: App_Dataset_Aggregate;
  /** fetch data from the table: "app.dataset" using primary key columns */
  app_dataset_by_pk?: Maybe<App_Dataset>;
  /** fetch data from the table in a streaming manner: "app.dataset" */
  app_dataset_stream: Array<App_Dataset>;
  /** fetch data from the table: "app.file" */
  app_file: Array<App_File>;
  /** fetch aggregated fields from the table: "app.file" */
  app_file_aggregate: App_File_Aggregate;
  /** fetch data from the table: "app.file_attachment" */
  app_file_attachment: Array<App_File_Attachment>;
  /** fetch aggregated fields from the table: "app.file_attachment" */
  app_file_attachment_aggregate: App_File_Attachment_Aggregate;
  /** fetch data from the table: "app.file_attachment" using primary key columns */
  app_file_attachment_by_pk?: Maybe<App_File_Attachment>;
  /** fetch data from the table in a streaming manner: "app.file_attachment" */
  app_file_attachment_stream: Array<App_File_Attachment>;
  /** fetch data from the table: "app.file" using primary key columns */
  app_file_by_pk?: Maybe<App_File>;
  /** fetch data from the table in a streaming manner: "app.file" */
  app_file_stream: Array<App_File>;
  app_grb0ts6wtxigdwbi?: Maybe<App_Grb0ts6wtxigdwbi_Subscription>;
  /** fetch data from the table: "app.invite" */
  app_invite: Array<App_Invite>;
  /** fetch aggregated fields from the table: "app.invite" */
  app_invite_aggregate: App_Invite_Aggregate;
  /** fetch data from the table: "app.invite" using primary key columns */
  app_invite_by_pk?: Maybe<App_Invite>;
  /** fetch data from the table in a streaming manner: "app.invite" */
  app_invite_stream: Array<App_Invite>;
  /** fetch data from the table: "app.thread" */
  app_thread: Array<App_Thread>;
  /** fetch aggregated fields from the table: "app.thread" */
  app_thread_aggregate: App_Thread_Aggregate;
  /** fetch data from the table: "app.thread" using primary key columns */
  app_thread_by_pk?: Maybe<App_Thread>;
  /** fetch data from the table in a streaming manner: "app.thread" */
  app_thread_stream: Array<App_Thread>;
  /** fetch data from the table: "app.user" */
  app_user: Array<App_User>;
  /** fetch aggregated fields from the table: "app.user" */
  app_user_aggregate: App_User_Aggregate;
  /** fetch data from the table: "app.user" using primary key columns */
  app_user_by_pk?: Maybe<App_User>;
  /** fetch data from the table in a streaming manner: "app.user" */
  app_user_stream: Array<App_User>;
  /** fetch data from the table: "app.workspace" */
  app_workspace: Array<App_Workspace>;
  /** fetch aggregated fields from the table: "app.workspace" */
  app_workspace_aggregate: App_Workspace_Aggregate;
  /** fetch data from the table: "app.workspace" using primary key columns */
  app_workspace_by_pk?: Maybe<App_Workspace>;
  /** fetch data from the table: "app.workspace_membership" */
  app_workspace_membership: Array<App_Workspace_Membership>;
  /** fetch aggregated fields from the table: "app.workspace_membership" */
  app_workspace_membership_aggregate: App_Workspace_Membership_Aggregate;
  /** fetch data from the table: "app.workspace_membership" using primary key columns */
  app_workspace_membership_by_pk?: Maybe<App_Workspace_Membership>;
  /** fetch data from the table in a streaming manner: "app.workspace_membership" */
  app_workspace_membership_stream: Array<App_Workspace_Membership>;
  /** fetch data from the table in a streaming manner: "app.workspace" */
  app_workspace_stream: Array<App_Workspace>;
  /** fetch data from the table: "auth.api_key" */
  auth_api_key: Array<Auth_Api_Key>;
  /** fetch aggregated fields from the table: "auth.api_key" */
  auth_api_key_aggregate: Auth_Api_Key_Aggregate;
  /** fetch data from the table: "auth.api_key" using primary key columns */
  auth_api_key_by_pk?: Maybe<Auth_Api_Key>;
  /** fetch data from the table in a streaming manner: "auth.api_key" */
  auth_api_key_stream: Array<Auth_Api_Key>;
  /** fetch data from the table: "auth.session" */
  auth_session: Array<Auth_Session>;
  /** fetch aggregated fields from the table: "auth.session" */
  auth_session_aggregate: Auth_Session_Aggregate;
  /** fetch data from the table: "auth.session" using primary key columns */
  auth_session_by_pk?: Maybe<Auth_Session>;
  /** fetch data from the table in a streaming manner: "auth.session" */
  auth_session_stream: Array<Auth_Session>;
  /** fetch data from the table: "billing.feature" */
  billing_feature: Array<Billing_Feature>;
  /** fetch aggregated fields from the table: "billing.feature" */
  billing_feature_aggregate: Billing_Feature_Aggregate;
  /** fetch data from the table: "billing.feature" using primary key columns */
  billing_feature_by_pk?: Maybe<Billing_Feature>;
  /** fetch data from the table in a streaming manner: "billing.feature" */
  billing_feature_stream: Array<Billing_Feature>;
  /** fetch data from the table: "billing.gql_subscription" */
  billing_gql_subscription: Array<Billing_Gql_Subscription>;
  /** fetch aggregated fields from the table: "billing.gql_subscription" */
  billing_gql_subscription_aggregate: Billing_Gql_Subscription_Aggregate;
  /** fetch data from the table in a streaming manner: "billing.gql_subscription" */
  billing_gql_subscription_stream: Array<Billing_Gql_Subscription>;
  /** fetch data from the table: "billing.price" */
  billing_price: Array<Billing_Price>;
  /** fetch aggregated fields from the table: "billing.price" */
  billing_price_aggregate: Billing_Price_Aggregate;
  /** fetch data from the table: "billing.price" using primary key columns */
  billing_price_by_pk?: Maybe<Billing_Price>;
  /** fetch data from the table in a streaming manner: "billing.price" */
  billing_price_stream: Array<Billing_Price>;
  /** fetch data from the table: "billing.product" */
  billing_product: Array<Billing_Product>;
  /** fetch aggregated fields from the table: "billing.product" */
  billing_product_aggregate: Billing_Product_Aggregate;
  /** fetch data from the table: "billing.product" using primary key columns */
  billing_product_by_pk?: Maybe<Billing_Product>;
  /** fetch data from the table in a streaming manner: "billing.product" */
  billing_product_stream: Array<Billing_Product>;
  /** fetch data from the table: "billing.subscription" */
  billing_subscription: Array<Billing_Subscription>;
  /** fetch aggregated fields from the table: "billing.subscription" */
  billing_subscription_aggregate: Billing_Subscription_Aggregate;
  /** fetch data from the table: "billing.subscription" using primary key columns */
  billing_subscription_by_pk?: Maybe<Billing_Subscription>;
  /** fetch data from the table in a streaming manner: "billing.subscription" */
  billing_subscription_stream: Array<Billing_Subscription>;
  /** fetch data from the table: "entity.address" */
  entity_address: Array<Entity_Address>;
  /** fetch aggregated fields from the table: "entity.address" */
  entity_address_aggregate: Entity_Address_Aggregate;
  /** fetch data from the table: "entity.address" using primary key columns */
  entity_address_by_pk?: Maybe<Entity_Address>;
  /** fetch data from the table in a streaming manner: "entity.address" */
  entity_address_stream: Array<Entity_Address>;
  /** fetch data from the table: "entity.country" */
  entity_country: Array<Entity_Country>;
  /** fetch aggregated fields from the table: "entity.country" */
  entity_country_aggregate: Entity_Country_Aggregate;
  /** fetch data from the table: "entity.country" using primary key columns */
  entity_country_by_pk?: Maybe<Entity_Country>;
  /** fetch data from the table in a streaming manner: "entity.country" */
  entity_country_stream: Array<Entity_Country>;
  /** fetch data from the table: "entity.owner" */
  entity_owner: Array<Entity_Owner>;
  /** fetch aggregated fields from the table: "entity.owner" */
  entity_owner_aggregate: Entity_Owner_Aggregate;
  /** fetch data from the table: "entity.owner" using primary key columns */
  entity_owner_by_pk?: Maybe<Entity_Owner>;
  /** fetch data from the table in a streaming manner: "entity.owner" */
  entity_owner_stream: Array<Entity_Owner>;
  /** fetch data from the table: "entity.property" */
  entity_property: Array<Entity_Property>;
  /** fetch aggregated fields from the table: "entity.property" */
  entity_property_aggregate: Entity_Property_Aggregate;
  /** fetch data from the table: "entity.property" using primary key columns */
  entity_property_by_pk?: Maybe<Entity_Property>;
  /** fetch data from the table: "entity.property_media" */
  entity_property_media: Array<Entity_Property_Media>;
  /** fetch aggregated fields from the table: "entity.property_media" */
  entity_property_media_aggregate: Entity_Property_Media_Aggregate;
  /** fetch data from the table: "entity.property_media" using primary key columns */
  entity_property_media_by_pk?: Maybe<Entity_Property_Media>;
  /** fetch data from the table in a streaming manner: "entity.property_media" */
  entity_property_media_stream: Array<Entity_Property_Media>;
  /** fetch data from the table in a streaming manner: "entity.property" */
  entity_property_stream: Array<Entity_Property>;
  /** fetch data from the table: "entity.property_type" */
  entity_property_type: Array<Entity_Property_Type>;
  /** fetch aggregated fields from the table: "entity.property_type" */
  entity_property_type_aggregate: Entity_Property_Type_Aggregate;
  /** fetch data from the table: "entity.property_type" using primary key columns */
  entity_property_type_by_pk?: Maybe<Entity_Property_Type>;
  /** fetch data from the table in a streaming manner: "entity.property_type" */
  entity_property_type_stream: Array<Entity_Property_Type>;
  /** fetch data from the table: "entity.state" */
  entity_state: Array<Entity_State>;
  /** fetch aggregated fields from the table: "entity.state" */
  entity_state_aggregate: Entity_State_Aggregate;
  /** fetch data from the table: "entity.state" using primary key columns */
  entity_state_by_pk?: Maybe<Entity_State>;
  /** fetch data from the table in a streaming manner: "entity.state" */
  entity_state_stream: Array<Entity_State>;
  /** fetch data from the table: "form.form" */
  form_form: Array<Form_Form>;
  /** fetch aggregated fields from the table: "form.form" */
  form_form_aggregate: Form_Form_Aggregate;
  /** fetch data from the table: "form.form" using primary key columns */
  form_form_by_pk?: Maybe<Form_Form>;
  /** fetch data from the table: "form.form_field" */
  form_form_field: Array<Form_Form_Field>;
  /** fetch aggregated fields from the table: "form.form_field" */
  form_form_field_aggregate: Form_Form_Field_Aggregate;
  /** fetch data from the table: "form.form_field" using primary key columns */
  form_form_field_by_pk?: Maybe<Form_Form_Field>;
  /** fetch data from the table in a streaming manner: "form.form_field" */
  form_form_field_stream: Array<Form_Form_Field>;
  /** fetch data from the table: "form.form_response" */
  form_form_response: Array<Form_Form_Response>;
  /** fetch aggregated fields from the table: "form.form_response" */
  form_form_response_aggregate: Form_Form_Response_Aggregate;
  /** fetch data from the table: "form.form_response_answer" */
  form_form_response_answer: Array<Form_Form_Response_Answer>;
  /** fetch aggregated fields from the table: "form.form_response_answer" */
  form_form_response_answer_aggregate: Form_Form_Response_Answer_Aggregate;
  /** fetch data from the table: "form.form_response_answer" using primary key columns */
  form_form_response_answer_by_pk?: Maybe<Form_Form_Response_Answer>;
  /** fetch data from the table in a streaming manner: "form.form_response_answer" */
  form_form_response_answer_stream: Array<Form_Form_Response_Answer>;
  /** fetch data from the table: "form.form_response" using primary key columns */
  form_form_response_by_pk?: Maybe<Form_Form_Response>;
  /** fetch data from the table in a streaming manner: "form.form_response" */
  form_form_response_stream: Array<Form_Form_Response>;
  /** fetch data from the table in a streaming manner: "form.form" */
  form_form_stream: Array<Form_Form>;
  mx__?: Maybe<Mx__Mx___Subscription>;
  /** fetch data from the table: "workflow.edge" */
  workflow_edge: Array<Workflow_Edge>;
  /** fetch aggregated fields from the table: "workflow.edge" */
  workflow_edge_aggregate: Workflow_Edge_Aggregate;
  /** fetch data from the table: "workflow.edge" using primary key columns */
  workflow_edge_by_pk?: Maybe<Workflow_Edge>;
  /** fetch data from the table in a streaming manner: "workflow.edge" */
  workflow_edge_stream: Array<Workflow_Edge>;
  /** fetch data from the table: "workflow.execution" */
  workflow_execution: Array<Workflow_Execution>;
  /** fetch aggregated fields from the table: "workflow.execution" */
  workflow_execution_aggregate: Workflow_Execution_Aggregate;
  /** fetch data from the table: "workflow.execution" using primary key columns */
  workflow_execution_by_pk?: Maybe<Workflow_Execution>;
  /** fetch data from the table in a streaming manner: "workflow.execution" */
  workflow_execution_stream: Array<Workflow_Execution>;
  /** fetch data from the table: "workflow.node" */
  workflow_node: Array<Workflow_Node>;
  /** fetch aggregated fields from the table: "workflow.node" */
  workflow_node_aggregate: Workflow_Node_Aggregate;
  /** fetch data from the table: "workflow.node" using primary key columns */
  workflow_node_by_pk?: Maybe<Workflow_Node>;
  /** fetch data from the table in a streaming manner: "workflow.node" */
  workflow_node_stream: Array<Workflow_Node>;
  /** fetch data from the table: "workflow.workflow" */
  workflow_workflow: Array<Workflow_Workflow>;
  /** fetch aggregated fields from the table: "workflow.workflow" */
  workflow_workflow_aggregate: Workflow_Workflow_Aggregate;
  /** fetch data from the table: "workflow.workflow" using primary key columns */
  workflow_workflow_by_pk?: Maybe<Workflow_Workflow>;
  /** fetch data from the table in a streaming manner: "workflow.workflow" */
  workflow_workflow_stream: Array<Workflow_Workflow>;
};


export type Subscription_RootAgent_AgentArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


export type Subscription_RootAgent_Agent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Agent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Agent_Order_By>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


export type Subscription_RootAgent_Agent_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAgent_Agent_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agent_Agent_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Agent_Bool_Exp>;
};


export type Subscription_RootAgent_BannerArgs = {
  distinct_on?: InputMaybe<Array<Agent_Banner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Banner_Order_By>>;
  where?: InputMaybe<Agent_Banner_Bool_Exp>;
};


export type Subscription_RootAgent_Banner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Banner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Banner_Order_By>>;
  where?: InputMaybe<Agent_Banner_Bool_Exp>;
};


export type Subscription_RootAgent_Banner_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAgent_Banner_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agent_Banner_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Banner_Bool_Exp>;
};


export type Subscription_RootAgent_Cron_JobArgs = {
  distinct_on?: InputMaybe<Array<Agent_Cron_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Cron_Job_Order_By>>;
  where?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
};


export type Subscription_RootAgent_Cron_Job_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Cron_Job_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Cron_Job_Order_By>>;
  where?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
};


export type Subscription_RootAgent_Cron_Job_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAgent_Cron_Job_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agent_Cron_Job_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Cron_Job_Bool_Exp>;
};


export type Subscription_RootAgent_DeploymentArgs = {
  distinct_on?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Deployment_Order_By>>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};


export type Subscription_RootAgent_Deployment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Deployment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Deployment_Order_By>>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};


export type Subscription_RootAgent_Deployment_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootAgent_Deployment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agent_Deployment_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Deployment_Bool_Exp>;
};


export type Subscription_RootAgent_HookArgs = {
  distinct_on?: InputMaybe<Array<Agent_Hook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Hook_Order_By>>;
  where?: InputMaybe<Agent_Hook_Bool_Exp>;
};


export type Subscription_RootAgent_Hook_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Hook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Hook_Order_By>>;
  where?: InputMaybe<Agent_Hook_Bool_Exp>;
};


export type Subscription_RootAgent_Hook_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAgent_Hook_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agent_Hook_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Hook_Bool_Exp>;
};


export type Subscription_RootAgent_InstallationArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


export type Subscription_RootAgent_Installation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Order_By>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


export type Subscription_RootAgent_Installation_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAgent_Installation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agent_Installation_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Installation_Bool_Exp>;
};


export type Subscription_RootAgent_Installation_VariableArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Variable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Variable_Order_By>>;
  where?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
};


export type Subscription_RootAgent_Installation_Variable_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Installation_Variable_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Installation_Variable_Order_By>>;
  where?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
};


export type Subscription_RootAgent_Installation_Variable_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAgent_Installation_Variable_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agent_Installation_Variable_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Installation_Variable_Bool_Exp>;
};


export type Subscription_RootAgent_RuntimeArgs = {
  distinct_on?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Runtime_Order_By>>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};


export type Subscription_RootAgent_Runtime_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Runtime_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_Runtime_Order_By>>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};


export type Subscription_RootAgent_Runtime_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootAgent_Runtime_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agent_Runtime_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_Runtime_Bool_Exp>;
};


export type Subscription_RootAgent_System_PromptArgs = {
  distinct_on?: InputMaybe<Array<Agent_System_Prompt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_System_Prompt_Order_By>>;
  where?: InputMaybe<Agent_System_Prompt_Bool_Exp>;
};


export type Subscription_RootAgent_System_Prompt_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_System_Prompt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agent_System_Prompt_Order_By>>;
  where?: InputMaybe<Agent_System_Prompt_Bool_Exp>;
};


export type Subscription_RootAgent_System_Prompt_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAgent_System_Prompt_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agent_System_Prompt_Stream_Cursor_Input>>;
  where?: InputMaybe<Agent_System_Prompt_Bool_Exp>;
};


export type Subscription_RootApp_BlueprintArgs = {
  distinct_on?: InputMaybe<Array<App_Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Blueprint_Order_By>>;
  where?: InputMaybe<App_Blueprint_Bool_Exp>;
};


export type Subscription_RootApp_Blueprint_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Blueprint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Blueprint_Order_By>>;
  where?: InputMaybe<App_Blueprint_Bool_Exp>;
};


export type Subscription_RootApp_Blueprint_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootApp_Blueprint_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_Blueprint_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Blueprint_Bool_Exp>;
};


export type Subscription_RootApp_ChatArgs = {
  distinct_on?: InputMaybe<Array<App_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Chat_Order_By>>;
  where?: InputMaybe<App_Chat_Bool_Exp>;
};


export type Subscription_RootApp_Chat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Chat_Order_By>>;
  where?: InputMaybe<App_Chat_Bool_Exp>;
};


export type Subscription_RootApp_Chat_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootApp_Chat_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_Chat_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Chat_Bool_Exp>;
};


export type Subscription_RootApp_DatasetArgs = {
  distinct_on?: InputMaybe<Array<App_Dataset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Dataset_Order_By>>;
  where?: InputMaybe<App_Dataset_Bool_Exp>;
};


export type Subscription_RootApp_Dataset_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Dataset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Dataset_Order_By>>;
  where?: InputMaybe<App_Dataset_Bool_Exp>;
};


export type Subscription_RootApp_Dataset_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootApp_Dataset_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_Dataset_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Dataset_Bool_Exp>;
};


export type Subscription_RootApp_FileArgs = {
  distinct_on?: InputMaybe<Array<App_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Order_By>>;
  where?: InputMaybe<App_File_Bool_Exp>;
};


export type Subscription_RootApp_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Order_By>>;
  where?: InputMaybe<App_File_Bool_Exp>;
};


export type Subscription_RootApp_File_AttachmentArgs = {
  distinct_on?: InputMaybe<Array<App_File_Attachment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Attachment_Order_By>>;
  where?: InputMaybe<App_File_Attachment_Bool_Exp>;
};


export type Subscription_RootApp_File_Attachment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_File_Attachment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_File_Attachment_Order_By>>;
  where?: InputMaybe<App_File_Attachment_Bool_Exp>;
};


export type Subscription_RootApp_File_Attachment_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootApp_File_Attachment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_File_Attachment_Stream_Cursor_Input>>;
  where?: InputMaybe<App_File_Attachment_Bool_Exp>;
};


export type Subscription_RootApp_File_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootApp_File_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_File_Stream_Cursor_Input>>;
  where?: InputMaybe<App_File_Bool_Exp>;
};


export type Subscription_RootApp_InviteArgs = {
  distinct_on?: InputMaybe<Array<App_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Invite_Order_By>>;
  where?: InputMaybe<App_Invite_Bool_Exp>;
};


export type Subscription_RootApp_Invite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Invite_Order_By>>;
  where?: InputMaybe<App_Invite_Bool_Exp>;
};


export type Subscription_RootApp_Invite_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootApp_Invite_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_Invite_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Invite_Bool_Exp>;
};


export type Subscription_RootApp_ThreadArgs = {
  distinct_on?: InputMaybe<Array<App_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Thread_Order_By>>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};


export type Subscription_RootApp_Thread_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Thread_Order_By>>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};


export type Subscription_RootApp_Thread_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootApp_Thread_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_Thread_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Thread_Bool_Exp>;
};


export type Subscription_RootApp_UserArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Subscription_RootApp_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_User_Order_By>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Subscription_RootApp_User_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootApp_User_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_User_Stream_Cursor_Input>>;
  where?: InputMaybe<App_User_Bool_Exp>;
};


export type Subscription_RootApp_WorkspaceArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Order_By>>;
  where?: InputMaybe<App_Workspace_Bool_Exp>;
};


export type Subscription_RootApp_Workspace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Order_By>>;
  where?: InputMaybe<App_Workspace_Bool_Exp>;
};


export type Subscription_RootApp_Workspace_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootApp_Workspace_MembershipArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


export type Subscription_RootApp_Workspace_Membership_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Workspace_Membership_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Workspace_Membership_Order_By>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


export type Subscription_RootApp_Workspace_Membership_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootApp_Workspace_Membership_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_Workspace_Membership_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Workspace_Membership_Bool_Exp>;
};


export type Subscription_RootApp_Workspace_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<App_Workspace_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Workspace_Bool_Exp>;
};


export type Subscription_RootAuth_Api_KeyArgs = {
  distinct_on?: InputMaybe<Array<Auth_Api_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Api_Key_Order_By>>;
  where?: InputMaybe<Auth_Api_Key_Bool_Exp>;
};


export type Subscription_RootAuth_Api_Key_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Api_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Api_Key_Order_By>>;
  where?: InputMaybe<Auth_Api_Key_Bool_Exp>;
};


export type Subscription_RootAuth_Api_Key_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuth_Api_Key_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Auth_Api_Key_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Api_Key_Bool_Exp>;
};


export type Subscription_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_Session_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_Session_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Auth_Session_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootBilling_FeatureArgs = {
  distinct_on?: InputMaybe<Array<Billing_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Feature_Order_By>>;
  where?: InputMaybe<Billing_Feature_Bool_Exp>;
};


export type Subscription_RootBilling_Feature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Feature_Order_By>>;
  where?: InputMaybe<Billing_Feature_Bool_Exp>;
};


export type Subscription_RootBilling_Feature_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBilling_Feature_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Feature_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Feature_Bool_Exp>;
};


export type Subscription_RootBilling_Gql_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Billing_Gql_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Gql_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Gql_Subscription_Bool_Exp>;
};


export type Subscription_RootBilling_Gql_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Gql_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Gql_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Gql_Subscription_Bool_Exp>;
};


export type Subscription_RootBilling_Gql_Subscription_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Gql_Subscription_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Gql_Subscription_Bool_Exp>;
};


export type Subscription_RootBilling_PriceArgs = {
  distinct_on?: InputMaybe<Array<Billing_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Price_Order_By>>;
  where?: InputMaybe<Billing_Price_Bool_Exp>;
};


export type Subscription_RootBilling_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Price_Order_By>>;
  where?: InputMaybe<Billing_Price_Bool_Exp>;
};


export type Subscription_RootBilling_Price_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootBilling_Price_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Price_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Price_Bool_Exp>;
};


export type Subscription_RootBilling_ProductArgs = {
  distinct_on?: InputMaybe<Array<Billing_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Product_Order_By>>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};


export type Subscription_RootBilling_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Product_Order_By>>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};


export type Subscription_RootBilling_Product_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBilling_Product_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Product_Bool_Exp>;
};


export type Subscription_RootBilling_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};


export type Subscription_RootBilling_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscription_Order_By>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};


export type Subscription_RootBilling_Subscription_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBilling_Subscription_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Subscription_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Subscription_Bool_Exp>;
};


export type Subscription_RootEntity_AddressArgs = {
  distinct_on?: InputMaybe<Array<Entity_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Address_Order_By>>;
  where?: InputMaybe<Entity_Address_Bool_Exp>;
};


export type Subscription_RootEntity_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Address_Order_By>>;
  where?: InputMaybe<Entity_Address_Bool_Exp>;
};


export type Subscription_RootEntity_Address_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootEntity_Address_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Entity_Address_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Address_Bool_Exp>;
};


export type Subscription_RootEntity_CountryArgs = {
  distinct_on?: InputMaybe<Array<Entity_Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Country_Order_By>>;
  where?: InputMaybe<Entity_Country_Bool_Exp>;
};


export type Subscription_RootEntity_Country_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Country_Order_By>>;
  where?: InputMaybe<Entity_Country_Bool_Exp>;
};


export type Subscription_RootEntity_Country_By_PkArgs = {
  iso_code: Scalars['bpchar'];
};


export type Subscription_RootEntity_Country_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Entity_Country_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Country_Bool_Exp>;
};


export type Subscription_RootEntity_OwnerArgs = {
  distinct_on?: InputMaybe<Array<Entity_Owner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Owner_Order_By>>;
  where?: InputMaybe<Entity_Owner_Bool_Exp>;
};


export type Subscription_RootEntity_Owner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Owner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Owner_Order_By>>;
  where?: InputMaybe<Entity_Owner_Bool_Exp>;
};


export type Subscription_RootEntity_Owner_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootEntity_Owner_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Entity_Owner_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Owner_Bool_Exp>;
};


export type Subscription_RootEntity_PropertyArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};


export type Subscription_RootEntity_Property_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Order_By>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};


export type Subscription_RootEntity_Property_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootEntity_Property_MediaArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Media_Order_By>>;
  where?: InputMaybe<Entity_Property_Media_Bool_Exp>;
};


export type Subscription_RootEntity_Property_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Media_Order_By>>;
  where?: InputMaybe<Entity_Property_Media_Bool_Exp>;
};


export type Subscription_RootEntity_Property_Media_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootEntity_Property_Media_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Entity_Property_Media_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Property_Media_Bool_Exp>;
};


export type Subscription_RootEntity_Property_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Entity_Property_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Property_Bool_Exp>;
};


export type Subscription_RootEntity_Property_TypeArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Type_Order_By>>;
  where?: InputMaybe<Entity_Property_Type_Bool_Exp>;
};


export type Subscription_RootEntity_Property_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Property_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_Property_Type_Order_By>>;
  where?: InputMaybe<Entity_Property_Type_Bool_Exp>;
};


export type Subscription_RootEntity_Property_Type_By_PkArgs = {
  type_id: Scalars['Int'];
};


export type Subscription_RootEntity_Property_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Entity_Property_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Property_Type_Bool_Exp>;
};


export type Subscription_RootEntity_StateArgs = {
  distinct_on?: InputMaybe<Array<Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_State_Order_By>>;
  where?: InputMaybe<Entity_State_Bool_Exp>;
};


export type Subscription_RootEntity_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Entity_State_Order_By>>;
  where?: InputMaybe<Entity_State_Bool_Exp>;
};


export type Subscription_RootEntity_State_By_PkArgs = {
  state_code: Scalars['String'];
};


export type Subscription_RootEntity_State_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Entity_State_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_State_Bool_Exp>;
};


export type Subscription_RootForm_FormArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Order_By>>;
  where?: InputMaybe<Form_Form_Bool_Exp>;
};


export type Subscription_RootForm_Form_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Order_By>>;
  where?: InputMaybe<Form_Form_Bool_Exp>;
};


export type Subscription_RootForm_Form_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootForm_Form_FieldArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Field_Order_By>>;
  where?: InputMaybe<Form_Form_Field_Bool_Exp>;
};


export type Subscription_RootForm_Form_Field_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Field_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Field_Order_By>>;
  where?: InputMaybe<Form_Form_Field_Bool_Exp>;
};


export type Subscription_RootForm_Form_Field_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootForm_Form_Field_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Form_Form_Field_Stream_Cursor_Input>>;
  where?: InputMaybe<Form_Form_Field_Bool_Exp>;
};


export type Subscription_RootForm_Form_ResponseArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Bool_Exp>;
};


export type Subscription_RootForm_Form_Response_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Bool_Exp>;
};


export type Subscription_RootForm_Form_Response_AnswerArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Answer_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};


export type Subscription_RootForm_Form_Response_Answer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Form_Response_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Form_Form_Response_Answer_Order_By>>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};


export type Subscription_RootForm_Form_Response_Answer_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootForm_Form_Response_Answer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Form_Form_Response_Answer_Stream_Cursor_Input>>;
  where?: InputMaybe<Form_Form_Response_Answer_Bool_Exp>;
};


export type Subscription_RootForm_Form_Response_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootForm_Form_Response_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Form_Form_Response_Stream_Cursor_Input>>;
  where?: InputMaybe<Form_Form_Response_Bool_Exp>;
};


export type Subscription_RootForm_Form_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Form_Form_Stream_Cursor_Input>>;
  where?: InputMaybe<Form_Form_Bool_Exp>;
};


export type Subscription_RootWorkflow_EdgeArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


export type Subscription_RootWorkflow_Edge_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


export type Subscription_RootWorkflow_Edge_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootWorkflow_Edge_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workflow_Edge_Stream_Cursor_Input>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


export type Subscription_RootWorkflow_ExecutionArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Execution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Execution_Order_By>>;
  where?: InputMaybe<Workflow_Execution_Bool_Exp>;
};


export type Subscription_RootWorkflow_Execution_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Execution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Execution_Order_By>>;
  where?: InputMaybe<Workflow_Execution_Bool_Exp>;
};


export type Subscription_RootWorkflow_Execution_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootWorkflow_Execution_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workflow_Execution_Stream_Cursor_Input>>;
  where?: InputMaybe<Workflow_Execution_Bool_Exp>;
};


export type Subscription_RootWorkflow_NodeArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Node_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Node_Order_By>>;
  where?: InputMaybe<Workflow_Node_Bool_Exp>;
};


export type Subscription_RootWorkflow_Node_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Node_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Node_Order_By>>;
  where?: InputMaybe<Workflow_Node_Bool_Exp>;
};


export type Subscription_RootWorkflow_Node_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootWorkflow_Node_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workflow_Node_Stream_Cursor_Input>>;
  where?: InputMaybe<Workflow_Node_Bool_Exp>;
};


export type Subscription_RootWorkflow_WorkflowArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Workflow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Workflow_Order_By>>;
  where?: InputMaybe<Workflow_Workflow_Bool_Exp>;
};


export type Subscription_RootWorkflow_Workflow_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Workflow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Workflow_Order_By>>;
  where?: InputMaybe<Workflow_Workflow_Bool_Exp>;
};


export type Subscription_RootWorkflow_Workflow_By_PkArgs = {
  _uid: Scalars['uuid'];
};


export type Subscription_RootWorkflow_Workflow_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workflow_Workflow_Stream_Cursor_Input>>;
  where?: InputMaybe<Workflow_Workflow_Bool_Exp>;
};

/** Boolean expression to compare columns of type "thread_visibility". All fields are combined with logical 'AND'. */
export type Thread_Visibility_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['thread_visibility']>;
  _gt?: InputMaybe<Scalars['thread_visibility']>;
  _gte?: InputMaybe<Scalars['thread_visibility']>;
  _in?: InputMaybe<Array<Scalars['thread_visibility']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['thread_visibility']>;
  _lte?: InputMaybe<Scalars['thread_visibility']>;
  _neq?: InputMaybe<Scalars['thread_visibility']>;
  _nin?: InputMaybe<Array<Scalars['thread_visibility']>>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "tsvector". All fields are combined with logical 'AND'. */
export type Tsvector_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['tsvector']>;
  _gt?: InputMaybe<Scalars['tsvector']>;
  _gte?: InputMaybe<Scalars['tsvector']>;
  _in?: InputMaybe<Array<Scalars['tsvector']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['tsvector']>;
  _lte?: InputMaybe<Scalars['tsvector']>;
  _neq?: InputMaybe<Scalars['tsvector']>;
  _nin?: InputMaybe<Array<Scalars['tsvector']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "workflow.edge" */
export type Workflow_Edge = {
  __typename?: 'workflow_edge';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  animated?: Maybe<Scalars['Boolean']>;
  condition?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  /** An object relationship */
  node: Workflow_Node;
  /** An object relationship */
  nodeByTargetUid: Workflow_Node;
  priority?: Maybe<Scalars['Int']>;
  source_handle?: Maybe<Scalars['String']>;
  source_uid: Scalars['uuid'];
  target_handle?: Maybe<Scalars['String']>;
  target_uid: Scalars['uuid'];
  /** An object relationship */
  workflow: Workflow_Workflow;
  workflow_uid: Scalars['uuid'];
};

/** aggregated selection of "workflow.edge" */
export type Workflow_Edge_Aggregate = {
  __typename?: 'workflow_edge_aggregate';
  aggregate?: Maybe<Workflow_Edge_Aggregate_Fields>;
  nodes: Array<Workflow_Edge>;
};

export type Workflow_Edge_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Workflow_Edge_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Workflow_Edge_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Workflow_Edge_Aggregate_Bool_Exp_Count>;
};

export type Workflow_Edge_Aggregate_Bool_Exp_Bool_And = {
  arguments: Workflow_Edge_Select_Column_Workflow_Edge_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workflow_Edge_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Workflow_Edge_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Workflow_Edge_Select_Column_Workflow_Edge_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workflow_Edge_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Workflow_Edge_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workflow_Edge_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workflow.edge" */
export type Workflow_Edge_Aggregate_Fields = {
  __typename?: 'workflow_edge_aggregate_fields';
  avg?: Maybe<Workflow_Edge_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Workflow_Edge_Max_Fields>;
  min?: Maybe<Workflow_Edge_Min_Fields>;
  stddev?: Maybe<Workflow_Edge_Stddev_Fields>;
  stddev_pop?: Maybe<Workflow_Edge_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workflow_Edge_Stddev_Samp_Fields>;
  sum?: Maybe<Workflow_Edge_Sum_Fields>;
  var_pop?: Maybe<Workflow_Edge_Var_Pop_Fields>;
  var_samp?: Maybe<Workflow_Edge_Var_Samp_Fields>;
  variance?: Maybe<Workflow_Edge_Variance_Fields>;
};


/** aggregate fields of "workflow.edge" */
export type Workflow_Edge_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workflow.edge" */
export type Workflow_Edge_Aggregate_Order_By = {
  avg?: InputMaybe<Workflow_Edge_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workflow_Edge_Max_Order_By>;
  min?: InputMaybe<Workflow_Edge_Min_Order_By>;
  stddev?: InputMaybe<Workflow_Edge_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Workflow_Edge_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Workflow_Edge_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Workflow_Edge_Sum_Order_By>;
  var_pop?: InputMaybe<Workflow_Edge_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Workflow_Edge_Var_Samp_Order_By>;
  variance?: InputMaybe<Workflow_Edge_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "workflow.edge" */
export type Workflow_Edge_Arr_Rel_Insert_Input = {
  data: Array<Workflow_Edge_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Edge_On_Conflict>;
};

/** aggregate avg on columns */
export type Workflow_Edge_Avg_Fields = {
  __typename?: 'workflow_edge_avg_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "workflow.edge" */
export type Workflow_Edge_Avg_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "workflow.edge". All fields are combined with a logical 'AND'. */
export type Workflow_Edge_Bool_Exp = {
  _and?: InputMaybe<Array<Workflow_Edge_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Workflow_Edge_Bool_Exp>;
  _or?: InputMaybe<Array<Workflow_Edge_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  animated?: InputMaybe<Boolean_Comparison_Exp>;
  condition?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  node?: InputMaybe<Workflow_Node_Bool_Exp>;
  nodeByTargetUid?: InputMaybe<Workflow_Node_Bool_Exp>;
  priority?: InputMaybe<Int_Comparison_Exp>;
  source_handle?: InputMaybe<String_Comparison_Exp>;
  source_uid?: InputMaybe<Uuid_Comparison_Exp>;
  target_handle?: InputMaybe<String_Comparison_Exp>;
  target_uid?: InputMaybe<Uuid_Comparison_Exp>;
  workflow?: InputMaybe<Workflow_Workflow_Bool_Exp>;
  workflow_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workflow.edge" */
export type Workflow_Edge_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'edge__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'workflow_edge_pk';

/** input type for incrementing numeric columns in table "workflow.edge" */
export type Workflow_Edge_Inc_Input = {
  priority?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "workflow.edge" */
export type Workflow_Edge_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  animated?: InputMaybe<Scalars['Boolean']>;
  condition?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  node?: InputMaybe<Workflow_Node_Obj_Rel_Insert_Input>;
  nodeByTargetUid?: InputMaybe<Workflow_Node_Obj_Rel_Insert_Input>;
  priority?: InputMaybe<Scalars['Int']>;
  source_handle?: InputMaybe<Scalars['String']>;
  source_uid?: InputMaybe<Scalars['uuid']>;
  target_handle?: InputMaybe<Scalars['String']>;
  target_uid?: InputMaybe<Scalars['uuid']>;
  workflow?: InputMaybe<Workflow_Workflow_Obj_Rel_Insert_Input>;
  workflow_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Workflow_Edge_Max_Fields = {
  __typename?: 'workflow_edge_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  condition?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  source_handle?: Maybe<Scalars['String']>;
  source_uid?: Maybe<Scalars['uuid']>;
  target_handle?: Maybe<Scalars['String']>;
  target_uid?: Maybe<Scalars['uuid']>;
  workflow_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "workflow.edge" */
export type Workflow_Edge_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  condition?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  source_handle?: InputMaybe<Order_By>;
  source_uid?: InputMaybe<Order_By>;
  target_handle?: InputMaybe<Order_By>;
  target_uid?: InputMaybe<Order_By>;
  workflow_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workflow_Edge_Min_Fields = {
  __typename?: 'workflow_edge_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  condition?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  source_handle?: Maybe<Scalars['String']>;
  source_uid?: Maybe<Scalars['uuid']>;
  target_handle?: Maybe<Scalars['String']>;
  target_uid?: Maybe<Scalars['uuid']>;
  workflow_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "workflow.edge" */
export type Workflow_Edge_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  condition?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  source_handle?: InputMaybe<Order_By>;
  source_uid?: InputMaybe<Order_By>;
  target_handle?: InputMaybe<Order_By>;
  target_uid?: InputMaybe<Order_By>;
  workflow_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workflow.edge" */
export type Workflow_Edge_Mutation_Response = {
  __typename?: 'workflow_edge_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workflow_Edge>;
};

/** on_conflict condition type for table "workflow.edge" */
export type Workflow_Edge_On_Conflict = {
  constraint: Workflow_Edge_Constraint;
  update_columns?: Array<Workflow_Edge_Update_Column>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};

/** Ordering options when selecting data from "workflow.edge". */
export type Workflow_Edge_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  animated?: InputMaybe<Order_By>;
  condition?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  node?: InputMaybe<Workflow_Node_Order_By>;
  nodeByTargetUid?: InputMaybe<Workflow_Node_Order_By>;
  priority?: InputMaybe<Order_By>;
  source_handle?: InputMaybe<Order_By>;
  source_uid?: InputMaybe<Order_By>;
  target_handle?: InputMaybe<Order_By>;
  target_uid?: InputMaybe<Order_By>;
  workflow?: InputMaybe<Workflow_Workflow_Order_By>;
  workflow_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workflow.edge */
export type Workflow_Edge_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "workflow.edge" */
export type Workflow_Edge_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'animated'
  /** column name */
  | 'condition'
  /** column name */
  | 'label'
  /** column name */
  | 'priority'
  /** column name */
  | 'source_handle'
  /** column name */
  | 'source_uid'
  /** column name */
  | 'target_handle'
  /** column name */
  | 'target_uid'
  /** column name */
  | 'workflow_uid';

/** select "workflow_edge_aggregate_bool_exp_bool_and_arguments_columns" columns of table "workflow.edge" */
export type Workflow_Edge_Select_Column_Workflow_Edge_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'animated';

/** select "workflow_edge_aggregate_bool_exp_bool_or_arguments_columns" columns of table "workflow.edge" */
export type Workflow_Edge_Select_Column_Workflow_Edge_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'animated';

/** input type for updating data in table "workflow.edge" */
export type Workflow_Edge_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  animated?: InputMaybe<Scalars['Boolean']>;
  condition?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  source_handle?: InputMaybe<Scalars['String']>;
  source_uid?: InputMaybe<Scalars['uuid']>;
  target_handle?: InputMaybe<Scalars['String']>;
  target_uid?: InputMaybe<Scalars['uuid']>;
  workflow_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Workflow_Edge_Stddev_Fields = {
  __typename?: 'workflow_edge_stddev_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "workflow.edge" */
export type Workflow_Edge_Stddev_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Workflow_Edge_Stddev_Pop_Fields = {
  __typename?: 'workflow_edge_stddev_pop_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "workflow.edge" */
export type Workflow_Edge_Stddev_Pop_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Workflow_Edge_Stddev_Samp_Fields = {
  __typename?: 'workflow_edge_stddev_samp_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "workflow.edge" */
export type Workflow_Edge_Stddev_Samp_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "workflow_edge" */
export type Workflow_Edge_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workflow_Edge_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workflow_Edge_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  animated?: InputMaybe<Scalars['Boolean']>;
  condition?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  source_handle?: InputMaybe<Scalars['String']>;
  source_uid?: InputMaybe<Scalars['uuid']>;
  target_handle?: InputMaybe<Scalars['String']>;
  target_uid?: InputMaybe<Scalars['uuid']>;
  workflow_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Workflow_Edge_Sum_Fields = {
  __typename?: 'workflow_edge_sum_fields';
  priority?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "workflow.edge" */
export type Workflow_Edge_Sum_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** update columns of table "workflow.edge" */
export type Workflow_Edge_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'animated'
  /** column name */
  | 'condition'
  /** column name */
  | 'label'
  /** column name */
  | 'priority'
  /** column name */
  | 'source_handle'
  /** column name */
  | 'source_uid'
  /** column name */
  | 'target_handle'
  /** column name */
  | 'target_uid'
  /** column name */
  | 'workflow_uid';

export type Workflow_Edge_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workflow_Edge_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflow_Edge_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workflow_Edge_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workflow_Edge_Var_Pop_Fields = {
  __typename?: 'workflow_edge_var_pop_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "workflow.edge" */
export type Workflow_Edge_Var_Pop_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Workflow_Edge_Var_Samp_Fields = {
  __typename?: 'workflow_edge_var_samp_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "workflow.edge" */
export type Workflow_Edge_Var_Samp_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Workflow_Edge_Variance_Fields = {
  __typename?: 'workflow_edge_variance_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "workflow.edge" */
export type Workflow_Edge_Variance_Order_By = {
  priority?: InputMaybe<Order_By>;
};

/** columns and relationships of "workflow.execution" */
export type Workflow_Execution = {
  __typename?: 'workflow_execution';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  completed_at?: Maybe<Scalars['timestamptz']>;
  error?: Maybe<Scalars['String']>;
  node_results: Scalars['jsonb'];
  started_at: Scalars['timestamptz'];
  status: Scalars['String'];
  triggered_by?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user?: Maybe<App_User>;
  /** An object relationship */
  workflow: Workflow_Workflow;
  workflow_uid: Scalars['uuid'];
};


/** columns and relationships of "workflow.execution" */
export type Workflow_ExecutionNode_ResultsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "workflow.execution" */
export type Workflow_Execution_Aggregate = {
  __typename?: 'workflow_execution_aggregate';
  aggregate?: Maybe<Workflow_Execution_Aggregate_Fields>;
  nodes: Array<Workflow_Execution>;
};

export type Workflow_Execution_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workflow_Execution_Aggregate_Bool_Exp_Count>;
};

export type Workflow_Execution_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workflow_Execution_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workflow_Execution_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workflow.execution" */
export type Workflow_Execution_Aggregate_Fields = {
  __typename?: 'workflow_execution_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Workflow_Execution_Max_Fields>;
  min?: Maybe<Workflow_Execution_Min_Fields>;
};


/** aggregate fields of "workflow.execution" */
export type Workflow_Execution_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workflow_Execution_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workflow.execution" */
export type Workflow_Execution_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workflow_Execution_Max_Order_By>;
  min?: InputMaybe<Workflow_Execution_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Execution_Append_Input = {
  node_results?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "workflow.execution" */
export type Workflow_Execution_Arr_Rel_Insert_Input = {
  data: Array<Workflow_Execution_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Execution_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workflow.execution". All fields are combined with a logical 'AND'. */
export type Workflow_Execution_Bool_Exp = {
  _and?: InputMaybe<Array<Workflow_Execution_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Workflow_Execution_Bool_Exp>;
  _or?: InputMaybe<Array<Workflow_Execution_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  error?: InputMaybe<String_Comparison_Exp>;
  node_results?: InputMaybe<Jsonb_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  triggered_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  workflow?: InputMaybe<Workflow_Workflow_Bool_Exp>;
  workflow_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workflow.execution" */
export type Workflow_Execution_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'execution__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'workflow_execution_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Workflow_Execution_Delete_At_Path_Input = {
  node_results?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Workflow_Execution_Delete_Elem_Input = {
  node_results?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Workflow_Execution_Delete_Key_Input = {
  node_results?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "workflow.execution" */
export type Workflow_Execution_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  error?: InputMaybe<Scalars['String']>;
  node_results?: InputMaybe<Scalars['jsonb']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  triggered_by?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  workflow?: InputMaybe<Workflow_Workflow_Obj_Rel_Insert_Input>;
  workflow_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Workflow_Execution_Max_Fields = {
  __typename?: 'workflow_execution_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  error?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  triggered_by?: Maybe<Scalars['uuid']>;
  workflow_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "workflow.execution" */
export type Workflow_Execution_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  triggered_by?: InputMaybe<Order_By>;
  workflow_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workflow_Execution_Min_Fields = {
  __typename?: 'workflow_execution_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  error?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  triggered_by?: Maybe<Scalars['uuid']>;
  workflow_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "workflow.execution" */
export type Workflow_Execution_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  triggered_by?: InputMaybe<Order_By>;
  workflow_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workflow.execution" */
export type Workflow_Execution_Mutation_Response = {
  __typename?: 'workflow_execution_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workflow_Execution>;
};

/** on_conflict condition type for table "workflow.execution" */
export type Workflow_Execution_On_Conflict = {
  constraint: Workflow_Execution_Constraint;
  update_columns?: Array<Workflow_Execution_Update_Column>;
  where?: InputMaybe<Workflow_Execution_Bool_Exp>;
};

/** Ordering options when selecting data from "workflow.execution". */
export type Workflow_Execution_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  node_results?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  triggered_by?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  workflow?: InputMaybe<Workflow_Workflow_Order_By>;
  workflow_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workflow.execution */
export type Workflow_Execution_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Execution_Prepend_Input = {
  node_results?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "workflow.execution" */
export type Workflow_Execution_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'completed_at'
  /** column name */
  | 'error'
  /** column name */
  | 'node_results'
  /** column name */
  | 'started_at'
  /** column name */
  | 'status'
  /** column name */
  | 'triggered_by'
  /** column name */
  | 'workflow_uid';

/** input type for updating data in table "workflow.execution" */
export type Workflow_Execution_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  error?: InputMaybe<Scalars['String']>;
  node_results?: InputMaybe<Scalars['jsonb']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  triggered_by?: InputMaybe<Scalars['uuid']>;
  workflow_uid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "workflow_execution" */
export type Workflow_Execution_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workflow_Execution_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workflow_Execution_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  error?: InputMaybe<Scalars['String']>;
  node_results?: InputMaybe<Scalars['jsonb']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  triggered_by?: InputMaybe<Scalars['uuid']>;
  workflow_uid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "workflow.execution" */
export type Workflow_Execution_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'completed_at'
  /** column name */
  | 'error'
  /** column name */
  | 'node_results'
  /** column name */
  | 'started_at'
  /** column name */
  | 'status'
  /** column name */
  | 'triggered_by'
  /** column name */
  | 'workflow_uid';

export type Workflow_Execution_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Workflow_Execution_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Workflow_Execution_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Workflow_Execution_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Workflow_Execution_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Workflow_Execution_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflow_Execution_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workflow_Execution_Bool_Exp;
};

/** columns and relationships of "workflow.node" */
export type Workflow_Node = {
  __typename?: 'workflow_node';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  config: Scalars['jsonb'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  edges: Array<Workflow_Edge>;
  /** An array relationship */
  edgesByTargetUid: Array<Workflow_Edge>;
  /** An aggregate relationship */
  edgesByTargetUid_aggregate: Workflow_Edge_Aggregate;
  /** An aggregate relationship */
  edges_aggregate: Workflow_Edge_Aggregate;
  error?: Maybe<Scalars['String']>;
  inputs?: Maybe<Scalars['jsonb']>;
  label: Scalars['String'];
  outputs?: Maybe<Scalars['jsonb']>;
  position_x: Scalars['numeric'];
  position_y: Scalars['numeric'];
  result?: Maybe<Scalars['jsonb']>;
  status?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  /** An object relationship */
  workflow: Workflow_Workflow;
  workflow_uid: Scalars['uuid'];
};


/** columns and relationships of "workflow.node" */
export type Workflow_NodeConfigArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "workflow.node" */
export type Workflow_NodeEdgesArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


/** columns and relationships of "workflow.node" */
export type Workflow_NodeEdgesByTargetUidArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


/** columns and relationships of "workflow.node" */
export type Workflow_NodeEdgesByTargetUid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


/** columns and relationships of "workflow.node" */
export type Workflow_NodeEdges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


/** columns and relationships of "workflow.node" */
export type Workflow_NodeInputsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "workflow.node" */
export type Workflow_NodeOutputsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "workflow.node" */
export type Workflow_NodeResultArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "workflow.node" */
export type Workflow_Node_Aggregate = {
  __typename?: 'workflow_node_aggregate';
  aggregate?: Maybe<Workflow_Node_Aggregate_Fields>;
  nodes: Array<Workflow_Node>;
};

export type Workflow_Node_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workflow_Node_Aggregate_Bool_Exp_Count>;
};

export type Workflow_Node_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workflow_Node_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workflow_Node_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workflow.node" */
export type Workflow_Node_Aggregate_Fields = {
  __typename?: 'workflow_node_aggregate_fields';
  avg?: Maybe<Workflow_Node_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Workflow_Node_Max_Fields>;
  min?: Maybe<Workflow_Node_Min_Fields>;
  stddev?: Maybe<Workflow_Node_Stddev_Fields>;
  stddev_pop?: Maybe<Workflow_Node_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workflow_Node_Stddev_Samp_Fields>;
  sum?: Maybe<Workflow_Node_Sum_Fields>;
  var_pop?: Maybe<Workflow_Node_Var_Pop_Fields>;
  var_samp?: Maybe<Workflow_Node_Var_Samp_Fields>;
  variance?: Maybe<Workflow_Node_Variance_Fields>;
};


/** aggregate fields of "workflow.node" */
export type Workflow_Node_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workflow_Node_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workflow.node" */
export type Workflow_Node_Aggregate_Order_By = {
  avg?: InputMaybe<Workflow_Node_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workflow_Node_Max_Order_By>;
  min?: InputMaybe<Workflow_Node_Min_Order_By>;
  stddev?: InputMaybe<Workflow_Node_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Workflow_Node_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Workflow_Node_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Workflow_Node_Sum_Order_By>;
  var_pop?: InputMaybe<Workflow_Node_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Workflow_Node_Var_Samp_Order_By>;
  variance?: InputMaybe<Workflow_Node_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Node_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  inputs?: InputMaybe<Scalars['jsonb']>;
  outputs?: InputMaybe<Scalars['jsonb']>;
  result?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "workflow.node" */
export type Workflow_Node_Arr_Rel_Insert_Input = {
  data: Array<Workflow_Node_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Node_On_Conflict>;
};

/** aggregate avg on columns */
export type Workflow_Node_Avg_Fields = {
  __typename?: 'workflow_node_avg_fields';
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "workflow.node" */
export type Workflow_Node_Avg_Order_By = {
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "workflow.node". All fields are combined with a logical 'AND'. */
export type Workflow_Node_Bool_Exp = {
  _and?: InputMaybe<Array<Workflow_Node_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Workflow_Node_Bool_Exp>;
  _or?: InputMaybe<Array<Workflow_Node_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  edges?: InputMaybe<Workflow_Edge_Bool_Exp>;
  edgesByTargetUid?: InputMaybe<Workflow_Edge_Bool_Exp>;
  edgesByTargetUid_aggregate?: InputMaybe<Workflow_Edge_Aggregate_Bool_Exp>;
  edges_aggregate?: InputMaybe<Workflow_Edge_Aggregate_Bool_Exp>;
  error?: InputMaybe<String_Comparison_Exp>;
  inputs?: InputMaybe<Jsonb_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  outputs?: InputMaybe<Jsonb_Comparison_Exp>;
  position_x?: InputMaybe<Numeric_Comparison_Exp>;
  position_y?: InputMaybe<Numeric_Comparison_Exp>;
  result?: InputMaybe<Jsonb_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  workflow?: InputMaybe<Workflow_Workflow_Bool_Exp>;
  workflow_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workflow.node" */
export type Workflow_Node_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'node__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'workflow_node_pk';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Workflow_Node_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
  inputs?: InputMaybe<Array<Scalars['String']>>;
  outputs?: InputMaybe<Array<Scalars['String']>>;
  result?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Workflow_Node_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
  inputs?: InputMaybe<Scalars['Int']>;
  outputs?: InputMaybe<Scalars['Int']>;
  result?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Workflow_Node_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
  inputs?: InputMaybe<Scalars['String']>;
  outputs?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "workflow.node" */
export type Workflow_Node_Inc_Input = {
  position_x?: InputMaybe<Scalars['numeric']>;
  position_y?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "workflow.node" */
export type Workflow_Node_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  config?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  edges?: InputMaybe<Workflow_Edge_Arr_Rel_Insert_Input>;
  edgesByTargetUid?: InputMaybe<Workflow_Edge_Arr_Rel_Insert_Input>;
  error?: InputMaybe<Scalars['String']>;
  inputs?: InputMaybe<Scalars['jsonb']>;
  label?: InputMaybe<Scalars['String']>;
  outputs?: InputMaybe<Scalars['jsonb']>;
  position_x?: InputMaybe<Scalars['numeric']>;
  position_y?: InputMaybe<Scalars['numeric']>;
  result?: InputMaybe<Scalars['jsonb']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  workflow?: InputMaybe<Workflow_Workflow_Obj_Rel_Insert_Input>;
  workflow_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Workflow_Node_Max_Fields = {
  __typename?: 'workflow_node_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  position_x?: Maybe<Scalars['numeric']>;
  position_y?: Maybe<Scalars['numeric']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workflow_uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "workflow.node" */
export type Workflow_Node_Max_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  workflow_uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workflow_Node_Min_Fields = {
  __typename?: 'workflow_node_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  position_x?: Maybe<Scalars['numeric']>;
  position_y?: Maybe<Scalars['numeric']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workflow_uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "workflow.node" */
export type Workflow_Node_Min_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  workflow_uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workflow.node" */
export type Workflow_Node_Mutation_Response = {
  __typename?: 'workflow_node_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workflow_Node>;
};

/** input type for inserting object relation for remote table "workflow.node" */
export type Workflow_Node_Obj_Rel_Insert_Input = {
  data: Workflow_Node_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Node_On_Conflict>;
};

/** on_conflict condition type for table "workflow.node" */
export type Workflow_Node_On_Conflict = {
  constraint: Workflow_Node_Constraint;
  update_columns?: Array<Workflow_Node_Update_Column>;
  where?: InputMaybe<Workflow_Node_Bool_Exp>;
};

/** Ordering options when selecting data from "workflow.node". */
export type Workflow_Node_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  edgesByTargetUid_aggregate?: InputMaybe<Workflow_Edge_Aggregate_Order_By>;
  edges_aggregate?: InputMaybe<Workflow_Edge_Aggregate_Order_By>;
  error?: InputMaybe<Order_By>;
  inputs?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  outputs?: InputMaybe<Order_By>;
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  workflow?: InputMaybe<Workflow_Workflow_Order_By>;
  workflow_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workflow.node */
export type Workflow_Node_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Node_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  inputs?: InputMaybe<Scalars['jsonb']>;
  outputs?: InputMaybe<Scalars['jsonb']>;
  result?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "workflow.node" */
export type Workflow_Node_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'config'
  /** column name */
  | 'description'
  /** column name */
  | 'error'
  /** column name */
  | 'inputs'
  /** column name */
  | 'label'
  /** column name */
  | 'outputs'
  /** column name */
  | 'position_x'
  /** column name */
  | 'position_y'
  /** column name */
  | 'result'
  /** column name */
  | 'status'
  /** column name */
  | 'type'
  /** column name */
  | 'workflow_uid';

/** input type for updating data in table "workflow.node" */
export type Workflow_Node_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  config?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  error?: InputMaybe<Scalars['String']>;
  inputs?: InputMaybe<Scalars['jsonb']>;
  label?: InputMaybe<Scalars['String']>;
  outputs?: InputMaybe<Scalars['jsonb']>;
  position_x?: InputMaybe<Scalars['numeric']>;
  position_y?: InputMaybe<Scalars['numeric']>;
  result?: InputMaybe<Scalars['jsonb']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  workflow_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Workflow_Node_Stddev_Fields = {
  __typename?: 'workflow_node_stddev_fields';
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "workflow.node" */
export type Workflow_Node_Stddev_Order_By = {
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Workflow_Node_Stddev_Pop_Fields = {
  __typename?: 'workflow_node_stddev_pop_fields';
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "workflow.node" */
export type Workflow_Node_Stddev_Pop_Order_By = {
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Workflow_Node_Stddev_Samp_Fields = {
  __typename?: 'workflow_node_stddev_samp_fields';
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "workflow.node" */
export type Workflow_Node_Stddev_Samp_Order_By = {
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "workflow_node" */
export type Workflow_Node_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workflow_Node_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workflow_Node_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  config?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  error?: InputMaybe<Scalars['String']>;
  inputs?: InputMaybe<Scalars['jsonb']>;
  label?: InputMaybe<Scalars['String']>;
  outputs?: InputMaybe<Scalars['jsonb']>;
  position_x?: InputMaybe<Scalars['numeric']>;
  position_y?: InputMaybe<Scalars['numeric']>;
  result?: InputMaybe<Scalars['jsonb']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  workflow_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Workflow_Node_Sum_Fields = {
  __typename?: 'workflow_node_sum_fields';
  position_x?: Maybe<Scalars['numeric']>;
  position_y?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "workflow.node" */
export type Workflow_Node_Sum_Order_By = {
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
};

/** update columns of table "workflow.node" */
export type Workflow_Node_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'config'
  /** column name */
  | 'description'
  /** column name */
  | 'error'
  /** column name */
  | 'inputs'
  /** column name */
  | 'label'
  /** column name */
  | 'outputs'
  /** column name */
  | 'position_x'
  /** column name */
  | 'position_y'
  /** column name */
  | 'result'
  /** column name */
  | 'status'
  /** column name */
  | 'type'
  /** column name */
  | 'workflow_uid';

export type Workflow_Node_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Workflow_Node_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Workflow_Node_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Workflow_Node_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Workflow_Node_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workflow_Node_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Workflow_Node_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflow_Node_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workflow_Node_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workflow_Node_Var_Pop_Fields = {
  __typename?: 'workflow_node_var_pop_fields';
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "workflow.node" */
export type Workflow_Node_Var_Pop_Order_By = {
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Workflow_Node_Var_Samp_Fields = {
  __typename?: 'workflow_node_var_samp_fields';
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "workflow.node" */
export type Workflow_Node_Var_Samp_Order_By = {
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Workflow_Node_Variance_Fields = {
  __typename?: 'workflow_node_variance_fields';
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "workflow.node" */
export type Workflow_Node_Variance_Order_By = {
  position_x?: InputMaybe<Order_By>;
  position_y?: InputMaybe<Order_By>;
};

/** columns and relationships of "workflow.workflow" */
export type Workflow_Workflow = {
  __typename?: 'workflow_workflow';
  _cr: Scalars['timestamptz'];
  _sc: Scalars['String'];
  _uid: Scalars['uuid'];
  _up: Scalars['timestamptz'];
  creator_uid: Scalars['uuid'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  edges: Array<Workflow_Edge>;
  /** An aggregate relationship */
  edges_aggregate: Workflow_Edge_Aggregate;
  /** An array relationship */
  executions: Array<Workflow_Execution>;
  /** An aggregate relationship */
  executions_aggregate: Workflow_Execution_Aggregate;
  name: Scalars['String'];
  /** An array relationship */
  nodes: Array<Workflow_Node>;
  /** An aggregate relationship */
  nodes_aggregate: Workflow_Node_Aggregate;
  run_count: Scalars['Int'];
  status: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  /** An object relationship */
  user: App_User;
  version: Scalars['Int'];
  /** An object relationship */
  workspace: App_Workspace;
  workspace_uid: Scalars['uuid'];
};


/** columns and relationships of "workflow.workflow" */
export type Workflow_WorkflowEdgesArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


/** columns and relationships of "workflow.workflow" */
export type Workflow_WorkflowEdges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Edge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Edge_Order_By>>;
  where?: InputMaybe<Workflow_Edge_Bool_Exp>;
};


/** columns and relationships of "workflow.workflow" */
export type Workflow_WorkflowExecutionsArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Execution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Execution_Order_By>>;
  where?: InputMaybe<Workflow_Execution_Bool_Exp>;
};


/** columns and relationships of "workflow.workflow" */
export type Workflow_WorkflowExecutions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Execution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Execution_Order_By>>;
  where?: InputMaybe<Workflow_Execution_Bool_Exp>;
};


/** columns and relationships of "workflow.workflow" */
export type Workflow_WorkflowNodesArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Node_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Node_Order_By>>;
  where?: InputMaybe<Workflow_Node_Bool_Exp>;
};


/** columns and relationships of "workflow.workflow" */
export type Workflow_WorkflowNodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Node_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workflow_Node_Order_By>>;
  where?: InputMaybe<Workflow_Node_Bool_Exp>;
};

/** aggregated selection of "workflow.workflow" */
export type Workflow_Workflow_Aggregate = {
  __typename?: 'workflow_workflow_aggregate';
  aggregate?: Maybe<Workflow_Workflow_Aggregate_Fields>;
  nodes: Array<Workflow_Workflow>;
};

/** aggregate fields of "workflow.workflow" */
export type Workflow_Workflow_Aggregate_Fields = {
  __typename?: 'workflow_workflow_aggregate_fields';
  avg?: Maybe<Workflow_Workflow_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Workflow_Workflow_Max_Fields>;
  min?: Maybe<Workflow_Workflow_Min_Fields>;
  stddev?: Maybe<Workflow_Workflow_Stddev_Fields>;
  stddev_pop?: Maybe<Workflow_Workflow_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workflow_Workflow_Stddev_Samp_Fields>;
  sum?: Maybe<Workflow_Workflow_Sum_Fields>;
  var_pop?: Maybe<Workflow_Workflow_Var_Pop_Fields>;
  var_samp?: Maybe<Workflow_Workflow_Var_Samp_Fields>;
  variance?: Maybe<Workflow_Workflow_Variance_Fields>;
};


/** aggregate fields of "workflow.workflow" */
export type Workflow_Workflow_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workflow_Workflow_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Workflow_Workflow_Avg_Fields = {
  __typename?: 'workflow_workflow_avg_fields';
  run_count?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "workflow.workflow". All fields are combined with a logical 'AND'. */
export type Workflow_Workflow_Bool_Exp = {
  _and?: InputMaybe<Array<Workflow_Workflow_Bool_Exp>>;
  _cr?: InputMaybe<Timestamptz_Comparison_Exp>;
  _not?: InputMaybe<Workflow_Workflow_Bool_Exp>;
  _or?: InputMaybe<Array<Workflow_Workflow_Bool_Exp>>;
  _sc?: InputMaybe<String_Comparison_Exp>;
  _uid?: InputMaybe<Uuid_Comparison_Exp>;
  _up?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator_uid?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  edges?: InputMaybe<Workflow_Edge_Bool_Exp>;
  edges_aggregate?: InputMaybe<Workflow_Edge_Aggregate_Bool_Exp>;
  executions?: InputMaybe<Workflow_Execution_Bool_Exp>;
  executions_aggregate?: InputMaybe<Workflow_Execution_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nodes?: InputMaybe<Workflow_Node_Bool_Exp>;
  nodes_aggregate?: InputMaybe<Workflow_Node_Aggregate_Bool_Exp>;
  run_count?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<String_Array_Comparison_Exp>;
  user?: InputMaybe<App_User_Bool_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
  workspace?: InputMaybe<App_Workspace_Bool_Exp>;
  workspace_uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workflow.workflow" */
export type Workflow_Workflow_Constraint =
  /** unique or primary key constraint on columns "_sc" */
  | 'workflow__sc_key'
  /** unique or primary key constraint on columns "_uid" */
  | 'workflow_pk';

/** input type for incrementing numeric columns in table "workflow.workflow" */
export type Workflow_Workflow_Inc_Input = {
  run_count?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "workflow.workflow" */
export type Workflow_Workflow_Insert_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  edges?: InputMaybe<Workflow_Edge_Arr_Rel_Insert_Input>;
  executions?: InputMaybe<Workflow_Execution_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  nodes?: InputMaybe<Workflow_Node_Arr_Rel_Insert_Input>;
  run_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  user?: InputMaybe<App_User_Obj_Rel_Insert_Input>;
  version?: InputMaybe<Scalars['Int']>;
  workspace?: InputMaybe<App_Workspace_Obj_Rel_Insert_Input>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Workflow_Workflow_Max_Fields = {
  __typename?: 'workflow_workflow_max_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  run_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  version?: Maybe<Scalars['Int']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Workflow_Workflow_Min_Fields = {
  __typename?: 'workflow_workflow_min_fields';
  _cr?: Maybe<Scalars['timestamptz']>;
  _sc?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['uuid']>;
  _up?: Maybe<Scalars['timestamptz']>;
  creator_uid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  run_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  version?: Maybe<Scalars['Int']>;
  workspace_uid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "workflow.workflow" */
export type Workflow_Workflow_Mutation_Response = {
  __typename?: 'workflow_workflow_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workflow_Workflow>;
};

/** input type for inserting object relation for remote table "workflow.workflow" */
export type Workflow_Workflow_Obj_Rel_Insert_Input = {
  data: Workflow_Workflow_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Workflow_On_Conflict>;
};

/** on_conflict condition type for table "workflow.workflow" */
export type Workflow_Workflow_On_Conflict = {
  constraint: Workflow_Workflow_Constraint;
  update_columns?: Array<Workflow_Workflow_Update_Column>;
  where?: InputMaybe<Workflow_Workflow_Bool_Exp>;
};

/** Ordering options when selecting data from "workflow.workflow". */
export type Workflow_Workflow_Order_By = {
  _cr?: InputMaybe<Order_By>;
  _sc?: InputMaybe<Order_By>;
  _uid?: InputMaybe<Order_By>;
  _up?: InputMaybe<Order_By>;
  creator_uid?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  edges_aggregate?: InputMaybe<Workflow_Edge_Aggregate_Order_By>;
  executions_aggregate?: InputMaybe<Workflow_Execution_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  nodes_aggregate?: InputMaybe<Workflow_Node_Aggregate_Order_By>;
  run_count?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  user?: InputMaybe<App_User_Order_By>;
  version?: InputMaybe<Order_By>;
  workspace?: InputMaybe<App_Workspace_Order_By>;
  workspace_uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workflow.workflow */
export type Workflow_Workflow_Pk_Columns_Input = {
  _uid: Scalars['uuid'];
};

/** select columns of table "workflow.workflow" */
export type Workflow_Workflow_Select_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'description'
  /** column name */
  | 'name'
  /** column name */
  | 'run_count'
  /** column name */
  | 'status'
  /** column name */
  | 'tags'
  /** column name */
  | 'version'
  /** column name */
  | 'workspace_uid';

/** input type for updating data in table "workflow.workflow" */
export type Workflow_Workflow_Set_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  run_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  version?: InputMaybe<Scalars['Int']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Workflow_Workflow_Stddev_Fields = {
  __typename?: 'workflow_workflow_stddev_fields';
  run_count?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Workflow_Workflow_Stddev_Pop_Fields = {
  __typename?: 'workflow_workflow_stddev_pop_fields';
  run_count?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Workflow_Workflow_Stddev_Samp_Fields = {
  __typename?: 'workflow_workflow_stddev_samp_fields';
  run_count?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "workflow_workflow" */
export type Workflow_Workflow_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workflow_Workflow_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workflow_Workflow_Stream_Cursor_Value_Input = {
  _cr?: InputMaybe<Scalars['timestamptz']>;
  _sc?: InputMaybe<Scalars['String']>;
  _uid?: InputMaybe<Scalars['uuid']>;
  _up?: InputMaybe<Scalars['timestamptz']>;
  creator_uid?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  run_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  version?: InputMaybe<Scalars['Int']>;
  workspace_uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Workflow_Workflow_Sum_Fields = {
  __typename?: 'workflow_workflow_sum_fields';
  run_count?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

/** update columns of table "workflow.workflow" */
export type Workflow_Workflow_Update_Column =
  /** column name */
  | '_cr'
  /** column name */
  | '_sc'
  /** column name */
  | '_uid'
  /** column name */
  | '_up'
  /** column name */
  | 'creator_uid'
  /** column name */
  | 'description'
  /** column name */
  | 'name'
  /** column name */
  | 'run_count'
  /** column name */
  | 'status'
  /** column name */
  | 'tags'
  /** column name */
  | 'version'
  /** column name */
  | 'workspace_uid';

export type Workflow_Workflow_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workflow_Workflow_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflow_Workflow_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workflow_Workflow_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workflow_Workflow_Var_Pop_Fields = {
  __typename?: 'workflow_workflow_var_pop_fields';
  run_count?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Workflow_Workflow_Var_Samp_Fields = {
  __typename?: 'workflow_workflow_var_samp_fields';
  run_count?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Workflow_Workflow_Variance_Fields = {
  __typename?: 'workflow_workflow_variance_fields';
  run_count?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "workspace_role". All fields are combined with logical 'AND'. */
export type Workspace_Role_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['workspace_role']>;
  _gt?: InputMaybe<Scalars['workspace_role']>;
  _gte?: InputMaybe<Scalars['workspace_role']>;
  _in?: InputMaybe<Array<Scalars['workspace_role']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['workspace_role']>;
  _lte?: InputMaybe<Scalars['workspace_role']>;
  _neq?: InputMaybe<Scalars['workspace_role']>;
  _nin?: InputMaybe<Array<Scalars['workspace_role']>>;
};

export type ResizeBlueprintsMutationVariables = Exact<{
  blueprints: Array<App_Blueprint_Insert_Input> | App_Blueprint_Insert_Input;
}>;


export type ResizeBlueprintsMutation = { __typename?: 'mutation_root', insert_app_blueprint?: { __typename?: 'app_blueprint_mutation_response', affected_rows: number } | null };

export type SetColumnRequiredMutationVariables = Exact<{
  _id: Scalars['uuid'];
  required: Scalars['Boolean'];
}>;


export type SetColumnRequiredMutation = { __typename?: 'mutation_root', update_app_blueprint?: { __typename?: 'app_blueprint_mutation_response', returning: Array<{ __typename?: 'app_blueprint', id: string, _uid: any }> } | null };

export type InsertInviteListMutationVariables = Exact<{
  objects: Array<App_Invite_Insert_Input> | App_Invite_Insert_Input;
}>;


export type InsertInviteListMutation = { __typename?: 'mutation_root', insert_app_invite?: { __typename?: 'app_invite_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'app_invite', id: string, _uid: any, _cr: any, _up: any, email: string, num_reminders: number, status?: any | null, last_reminder?: any | null, workspace_id: string, inviter_id: string, promo_name?: string | null }> } | null };

export type RejectInviteMutationVariables = Exact<{
  invite_id: Scalars['uuid'];
}>;


export type RejectInviteMutation = { __typename?: 'mutation_root', update_app_invite?: { __typename?: 'app_invite_mutation_response', returning: Array<{ __typename?: 'app_invite', id: string, _uid: any, email: string, status?: any | null }> } | null };

export type AnnulInviteMutationVariables = Exact<{
  invite_id: Scalars['uuid'];
}>;


export type AnnulInviteMutation = { __typename?: 'mutation_root', delete_app_invite?: { __typename?: 'app_invite_mutation_response', returning: Array<{ __typename?: 'app_invite', id: string, _uid: any }> } | null };

export type AgentQueryVariables = Exact<{
  agent_id: Scalars['String'];
}>;


export type AgentQuery = { __typename?: 'query_root', agent_agent: Array<{ __typename?: 'agent_agent', id: string, description: any, _up: any, visibility: any, headline?: string | null, name?: string | null }> };

export type BillingSubscriptionFieldsFragment = { __typename?: 'billing_subscription', id: string, _uid: any, _cr: any, installation_uid: any, active: boolean, workspace_id: string, trial_end?: number | null, canceled_at?: any | null, installation: { __typename?: 'agent_installation', workspace_id: string, id: string, agent: { __typename?: 'agent_agent', name?: string | null, avatar_url?: string | null, id: string } }, price: { __typename?: 'billing_price', interval: string, interval_count: number, unit_amount: number, product: { __typename?: 'billing_product', name: string, trial_period_days: number } } };

export type BillingSubscriptionForWorkspaceSubscriptionVariables = Exact<{
  workspace_id: Scalars['String'];
}>;


export type BillingSubscriptionForWorkspaceSubscription = { __typename?: 'subscription_root', billing_subscription: Array<{ __typename?: 'billing_subscription', id: string, _uid: any, _cr: any, installation_uid: any, active: boolean, workspace_id: string, trial_end?: number | null, canceled_at?: any | null, installation: { __typename?: 'agent_installation', workspace_id: string, id: string, agent: { __typename?: 'agent_agent', name?: string | null, avatar_url?: string | null, id: string } }, price: { __typename?: 'billing_price', interval: string, interval_count: number, unit_amount: number, product: { __typename?: 'billing_product', name: string, trial_period_days: number } } }> };

export type FetchDatasetQueryVariables = Exact<{
  workspace_id: Scalars['String'];
}>;


export type FetchDatasetQuery = { __typename?: 'query_root', app_dataset: Array<{ __typename?: 'app_dataset', id: string, _uid: any, _cr: any, _up: any, name: string, workspace_id: string }> };

export type FetchPublicDataframeQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchPublicDataframeQuery = { __typename?: 'query_root', app_dataset: Array<{ __typename?: 'app_dataset', id: string, _uid: any, _up: any, name: string, db_table?: string | null, tags?: any | null }> };

export type FetchPublicDataframeByPublicSlugQueryVariables = Exact<{
  public_slug?: InputMaybe<Scalars['String']>;
}>;


export type FetchPublicDataframeByPublicSlugQuery = { __typename?: 'query_root', app_dataset: Array<{ __typename?: 'app_dataset', id: string, _uid: any, name: string, db_table?: string | null, tags?: any | null }> };

export type FetchBlueprintByDataframeIdQueryVariables = Exact<{
  dataframe_id: Scalars['String'];
}>;


export type FetchBlueprintByDataframeIdQuery = { __typename?: 'query_root', app_blueprint: Array<{ __typename?: 'app_blueprint', slug: string, display_name: string }> };

export type GetNamespaceMembershipQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetNamespaceMembershipQuery = { __typename?: 'query_root', workspace_membership: Array<{ __typename?: 'app_workspace_membership', id: string, _uid: any, workspace: { __typename?: 'app_workspace', id: string, _uid: any, name: string } }> };

export type AgentFieldsFragment = { __typename?: 'agent_agent', id: string, _uid: any, _up: any, _cr: any, name?: string | null, headline?: string | null, description: any, creator_id: string, avatar_url?: string | null, enabled: boolean, visibility: any, workspace_id: string, default_product_id?: string | null };

export type AgentInstallationFieldsFragment = { __typename?: 'agent_installation', id: string, agent_id: string, _cr: any, _up: any, active: boolean, subscription?: { __typename?: 'billing_subscription', price_id: string, price: { __typename?: 'billing_price', product_id: string } } | null };

export type DeploymentFieldsFragment = { __typename?: 'agent_deployment', _cr: any, duration?: number | null, status: any, user: { __typename?: 'app_user', name?: string | null } };

export type PriceFieldsFragment = { __typename?: 'billing_price', id: string, unit_amount: number, currency?: any | null, interval: string, interval_count: number };

export type FeatureFieldsFragment = { __typename?: 'billing_feature', id: string, type?: string | null, name: string, quantity?: any | null, is_offered?: boolean | null };

export type ProductFieldsFragment = { __typename?: 'billing_product', id: string, description: string, name: string, default_price_id?: string | null, trial_period_days: number, price_list: Array<{ __typename?: 'billing_price', id: string, unit_amount: number, currency?: any | null, interval: string, interval_count: number }>, feature_list: Array<{ __typename?: 'billing_feature', id: string, type?: string | null, name: string, quantity?: any | null, is_offered?: boolean | null }> };

export type AgentChatFieldsFragment = { __typename?: 'app_chat', id: string, _cr: any, body_richtext: any, generator_id?: string | null, pair_id?: string | null, type: any };

export type ThreadFieldsFragment = { __typename?: 'app_thread', id: string, _cr: any, _up: any, _uid: any, agent_id: string, title: string, chat_list: Array<{ __typename?: 'app_chat', id: string, _cr: any, body_richtext: any, generator_id?: string | null, pair_id?: string | null, type: any }> };

export type AgentStreamSubscriptionVariables = Exact<{
  workspace_id: Scalars['String'];
}>;


export type AgentStreamSubscription = { __typename?: 'subscription_root', agent_agent: Array<{ __typename?: 'agent_agent', id: string, _uid: any, _up: any, _cr: any, name?: string | null, headline?: string | null, description: any, creator_id: string, avatar_url?: string | null, enabled: boolean, visibility: any, workspace_id: string, default_product_id?: string | null, runtime?: { __typename?: 'agent_runtime', id: string, dev_status: any } | null }> };

export type GetAgentInstallStreamSubscriptionVariables = Exact<{
  workspace_id: Scalars['String'];
  search?: InputMaybe<Scalars['String']>;
}>;


export type GetAgentInstallStreamSubscription = { __typename?: 'subscription_root', agent_installation: Array<{ __typename?: 'agent_installation', _cr: any, _uid: any, _up: any, agent_id: string, cron_schedule?: string | null, installer_id?: string | null, id: string, workspace: { __typename?: 'app_workspace', name: string, id: string }, agent: { __typename?: 'agent_agent', id: string, _uid: any, _up: any, _cr: any, name?: string | null, headline?: string | null, description: any, creator_id: string, avatar_url?: string | null, enabled: boolean, visibility: any, workspace_id: string, default_product_id?: string | null, creator: { __typename?: 'app_user', name?: string | null, id: string, picture?: string | null } } }> };

export type AgentInstallationByPkSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type AgentInstallationByPkSubscription = { __typename?: 'subscription_root', installation?: { __typename?: 'agent_installation', id: string, agent_id: string, _cr: any, _up: any, active: boolean, subscription?: { __typename?: 'billing_subscription', price_id: string, price: { __typename?: 'billing_price', product_id: string } } | null } | null };

export type AgentByPk_EditorSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type AgentByPk_EditorSubscription = { __typename?: 'subscription_root', agent?: { __typename?: 'agent_agent', id: string, _uid: any, _up: any, _cr: any, name?: string | null, headline?: string | null, description: any, creator_id: string, avatar_url?: string | null, enabled: boolean, visibility: any, workspace_id: string, default_product_id?: string | null, runtime?: { __typename?: 'agent_runtime', dev_password_hash: string, dev_endpoint: string, last_accessed: any, dev_status: any } | null, banner_list: Array<{ __typename?: 'agent_banner', id: string, url: string, file_type?: string | null, is_primary?: boolean | null, original_name: string, _cr: any }>, deployment_list: Array<{ __typename?: 'agent_deployment', _cr: any, duration?: number | null, status: any, user: { __typename?: 'app_user', name?: string | null } }>, creator: { __typename?: 'app_user', id: string, name?: string | null, picture?: string | null }, thread_list: Array<{ __typename?: 'app_thread', id: string, _cr: any, _up: any, _uid: any, agent_id: string, title: string, chat_list: Array<{ __typename?: 'app_chat', id: string, _cr: any, body_richtext: any, generator_id?: string | null, pair_id?: string | null, type: any }> }>, product_list: Array<{ __typename?: 'billing_product', id: string, description: string, name: string, default_price_id?: string | null, trial_period_days: number, price_list: Array<{ __typename?: 'billing_price', id: string, unit_amount: number, currency?: any | null, interval: string, interval_count: number }>, feature_list: Array<{ __typename?: 'billing_feature', id: string, type?: string | null, name: string, quantity?: any | null, is_offered?: boolean | null }> }> } | null };

export type AgentByPk_ConsumerSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type AgentByPk_ConsumerSubscription = { __typename?: 'subscription_root', agent?: { __typename?: 'agent_agent', id: string, _uid: any, _up: any, _cr: any, name?: string | null, headline?: string | null, description: any, creator_id: string, avatar_url?: string | null, enabled: boolean, visibility: any, workspace_id: string, default_product_id?: string | null, banner_list: Array<{ __typename?: 'agent_banner', id: string, url: string, file_type?: string | null, is_primary?: boolean | null, original_name: string, _cr: any }>, creator: { __typename?: 'app_user', id: string, name?: string | null, picture?: string | null }, installation_list: Array<{ __typename?: 'agent_installation', id: string, _cr: any }>, thread_list: Array<{ __typename?: 'app_thread', id: string, _cr: any, _up: any, _uid: any, agent_id: string, title: string, chat_list: Array<{ __typename?: 'app_chat', id: string, _cr: any, body_richtext: any, generator_id?: string | null, pair_id?: string | null, type: any }> }>, product_list: Array<{ __typename?: 'billing_product', id: string, description: string, name: string, default_price_id?: string | null, trial_period_days: number, price_list: Array<{ __typename?: 'billing_price', id: string, unit_amount: number, currency?: any | null, interval: string, interval_count: number }>, feature_list: Array<{ __typename?: 'billing_feature', id: string, type?: string | null, name: string, quantity?: any | null, is_offered?: boolean | null }> }> } | null };

export type AgentSubscriptionsSubscriptionVariables = Exact<{
  agent_id: Scalars['String'];
}>;


export type AgentSubscriptionsSubscription = { __typename?: 'subscription_root', agent_installation: Array<{ __typename?: 'agent_installation', subscriptions: Array<{ __typename?: 'billing_subscription', active: boolean, _cr: any, trial_end?: number | null, canceled_at?: any | null, workspace: { __typename?: 'app_workspace', name: string, image_key?: string | null }, user: { __typename?: 'app_user', name?: string | null, picture?: string | null, email: string }, price: { __typename?: 'billing_price', product: { __typename?: 'billing_product', name: string, price?: { __typename?: 'billing_price', currency?: any | null, interval: string, interval_count: number, unit_amount: number } | null } } }> }> };

export type AgentInstallationVariablesSubscriptionVariables = Exact<{
  agent_installation_id: Scalars['String'];
}>;


export type AgentInstallationVariablesSubscription = { __typename?: 'subscription_root', agent_installation: Array<{ __typename?: 'agent_installation', id: string, installation_variables: Array<{ __typename?: 'agent_installation_variable', id: string, comment?: string | null, key: string, _up: any, _cr: any, is_secret: boolean, value_json?: any | null, value_string?: string | null, value_type: string, value_url?: string | null, editor?: { __typename?: 'app_user', email: string, name?: string | null, picture?: string | null } | null }> }> };

export type AgentInstallationCronJobsSubscriptionVariables = Exact<{
  agent_installation_id: Scalars['String'];
}>;


export type AgentInstallationCronJobsSubscription = { __typename?: 'subscription_root', agent_installation: Array<{ __typename?: 'agent_installation', id: string, cron_jobs: Array<{ __typename?: 'agent_cron_job', id: string, name: string, description?: string | null, frequency?: string | null, body?: any | null, _cr: any, _up: any }> }> };

export type AgentInstallationHooksSubscriptionVariables = Exact<{
  agent_installation_id: Scalars['String'];
}>;


export type AgentInstallationHooksSubscription = { __typename?: 'subscription_root', agent_installation: Array<{ __typename?: 'agent_installation', id: string, hooks: Array<{ __typename?: 'agent_hook', id: string, target_endpoint: string, headers: any, _cr: any, _up: any }> }> };

export type AgentInstallationFileSubscriptionVariables = Exact<{
  agent_installation_id?: InputMaybe<Scalars['String']>;
}>;


export type AgentInstallationFileSubscription = { __typename?: 'subscription_root', file: Array<{ __typename?: 'app_file', presigned_url: string, id: string, _cr: any, original_name: string, type?: string | null }> };

export type FileListSubscriptionVariables = Exact<{
  fileIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type FileListSubscription = { __typename?: 'subscription_root', file_list: Array<{ __typename?: 'app_file', presigned_url: string, original_name: string, id: string, chat_id?: string | null }> };

export type InviteDetailsSubscriptionVariables = Exact<{
  inviteId: Scalars['String'];
}>;


export type InviteDetailsSubscription = { __typename?: 'subscription_root', app_invite: Array<{ __typename?: 'app_invite', id: string, inviter_id: string, email: string, _cr: any, workspace: { __typename?: 'app_workspace', image_key?: string | null, id: string, name: string }, inviter: { __typename?: 'app_user', id: string, name?: string | null, picture?: string | null, email: string } }> };

export type UserFieldsFragment = { __typename?: 'app_user', id: string, _uid: any, email: string, name?: string | null, last_seen: any, picture?: string | null, _up: any, email_verified: boolean };

export type WorkspaceFieldsFragment = { __typename?: 'app_workspace', stripe_customer_id?: string | null, plan_id?: any | null, name: string, id: string, _uid: any, _cr: any, _up: any, is_developer: boolean, image_key?: string | null };

export type SessionSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type SessionSubscription = { __typename?: 'subscription_root', session?: { __typename?: 'auth_session', id: any, user_id: any, workspace_id: string, is_in_dev_mode: boolean, user: { __typename?: 'app_user', id: string, _uid: any, email: string, name?: string | null, last_seen: any, picture?: string | null, _up: any, email_verified: boolean, workspace_list: Array<{ __typename?: 'app_workspace_membership', role: any, workspace: { __typename?: 'app_workspace', stripe_customer_id?: string | null, plan_id?: any | null, name: string, id: string, _uid: any, _cr: any, _up: any, is_developer: boolean, image_key?: string | null } }> }, workspace: { __typename?: 'app_workspace', stripe_customer_id?: string | null, plan_id?: any | null, name: string, id: string, _uid: any, _cr: any, _up: any, is_developer: boolean, image_key?: string | null, members: Array<{ __typename?: 'app_workspace_membership', role: any, user: { __typename?: 'app_user', id: string, _uid: any, email: string, name?: string | null, last_seen: any, picture?: string | null, _up: any, email_verified: boolean } }>, api_key_list: Array<{ __typename?: 'auth_api_key', assignee_uid: any, creator_uid?: any | null, id: string, last_used?: any | null, name?: string | null, _cr: any, _up: any, type: any, creator?: { __typename?: 'app_user', id: string, name?: string | null, picture?: string | null } | null, assignee?: { __typename?: 'app_user', id: string, name?: string | null, picture?: string | null } | null, installation?: { __typename?: 'agent_installation', agent: { __typename?: 'agent_agent', id: string, avatar_url?: string | null, name?: string | null } } | null }> } } | null };

export type ChatFieldsFragment = { __typename?: 'app_chat', body_richtext: any, _cr: any, type: any, id: string, thread_id: string, _up: any, pair_id?: string | null, parent_id: string, file_attachment_list: Array<{ __typename?: 'app_file_attachment', file: { __typename?: 'app_file', presigned_url: string, s3_key: string, sha256_hexdigest: string, original_name: string } }> };

export type ChatInThreadSubscriptionVariables = Exact<{
  thread_id: Scalars['String'];
}>;


export type ChatInThreadSubscription = { __typename?: 'subscription_root', chat: Array<{ __typename?: 'app_chat', body_richtext: any, _cr: any, type: any, id: string, thread_id: string, _up: any, pair_id?: string | null, parent_id: string, file_attachment_list: Array<{ __typename?: 'app_file_attachment', file: { __typename?: 'app_file', presigned_url: string, s3_key: string, sha256_hexdigest: string, original_name: string } }> }> };

export type ThreadSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type ThreadSubscription = { __typename?: 'subscription_root', thread?: { __typename?: 'app_thread', id: string, initiator_id: string, type: string, title: string, visibility: any, workspace_id: string, agent_id: string, agent_debug_mode: boolean, chat_list: Array<{ __typename?: 'app_chat', body_richtext: any, _cr: any, type: any, id: string, thread_id: string, _up: any, pair_id?: string | null, parent_id: string, file_attachment_list: Array<{ __typename?: 'app_file_attachment', file: { __typename?: 'app_file', presigned_url: string, s3_key: string, sha256_hexdigest: string, original_name: string } }> }>, agent: { __typename?: 'agent_agent', name?: string | null, id: string } } | null };

export type GetUserStreamSubscriptionVariables = Exact<{
  _uid: Scalars['uuid'];
}>;


export type GetUserStreamSubscription = { __typename?: 'subscription_root', user: Array<{ __typename?: 'app_user', id: string, _uid: any, _up: any, email: string, name?: string | null, email_verified: boolean, picture?: string | null }> };

export type GetNamespaceMembershipStreamSubscriptionVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetNamespaceMembershipStreamSubscription = { __typename?: 'subscription_root', workspace_membership: Array<{ __typename?: 'app_workspace_membership', id: string, _uid: any, _cr: any, _up: any, workspace_id: string, role: any, workspace: { __typename?: 'app_workspace', id: string, _uid: any, name: string, image_key?: string | null, stripe_customer_id?: string | null, plan_id?: any | null } }> };

export type GetNamespaceMembersStreamSubscriptionVariables = Exact<{
  workspace_id: Scalars['String'];
}>;


export type GetNamespaceMembersStreamSubscription = { __typename?: 'subscription_root', workspace_membership: Array<{ __typename?: 'app_workspace_membership', id: string, _uid: any, _cr: any, _up: any, workspace_id: string, role: any, user: { __typename?: 'app_user', id: string, _uid: any, _cr: any, _up: any, name?: string | null, email: string, picture?: string | null, last_seen: any } }> };

export type GetCompanyAndWorkspaceByUserIdSubscriptionVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetCompanyAndWorkspaceByUserIdSubscription = { __typename?: 'subscription_root', workspace: Array<{ __typename?: 'app_workspace', id: string, _uid: any, name: string, image_key?: string | null, stripe_customer_id?: string | null, plan_id?: any | null }> };

export type GetPendingInvitesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetPendingInvitesSubscription = { __typename?: 'subscription_root', app_invite: Array<{ __typename?: 'app_invite', id: string, _uid: any, email: string, role: any }> };

export const BillingSubscriptionFieldsFragmentDoc = gql`
    fragment BillingSubscriptionFields on billing_subscription {
  id
  _uid
  _cr
  installation_uid
  active
  workspace_id
  trial_end
  canceled_at
  installation {
    workspace_id
    agent {
      name
      avatar_url
      id
    }
    id
  }
  price {
    product {
      name
      trial_period_days
    }
    interval
    interval_count
    unit_amount
  }
  installation_uid
  active
}
    `;
export const AgentFieldsFragmentDoc = gql`
    fragment AgentFields on agent_agent {
  id
  _uid
  _up
  _cr
  name
  headline
  description
  creator_id
  avatar_url
  enabled
  visibility
  workspace_id
  default_product_id
}
    `;
export const AgentInstallationFieldsFragmentDoc = gql`
    fragment AgentInstallationFields on agent_installation {
  id
  agent_id
  _cr
  _up
  active
  subscription {
    price_id
    price {
      product_id
    }
  }
}
    `;
export const DeploymentFieldsFragmentDoc = gql`
    fragment DeploymentFields on agent_deployment {
  _cr
  duration
  status
  user {
    name
  }
}
    `;
export const PriceFieldsFragmentDoc = gql`
    fragment PriceFields on billing_price {
  id
  unit_amount
  currency
  interval
  interval_count
}
    `;
export const FeatureFieldsFragmentDoc = gql`
    fragment FeatureFields on billing_feature {
  id
  type
  name
  quantity
  is_offered
}
    `;
export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on billing_product {
  id
  description
  name
  default_price_id
  trial_period_days
  price_list(where: {active: {_eq: true}}) {
    ...PriceFields
  }
  feature_list(order_by: {_cr: desc}) {
    ...FeatureFields
  }
}
    ${PriceFieldsFragmentDoc}
${FeatureFieldsFragmentDoc}`;
export const AgentChatFieldsFragmentDoc = gql`
    fragment AgentChatFields on app_chat {
  id
  _cr
  body_richtext
  generator_id
  pair_id
  type
}
    `;
export const ThreadFieldsFragmentDoc = gql`
    fragment ThreadFields on app_thread {
  id
  _cr
  _up
  _uid
  agent_id
  title
  chat_list(order_by: {_cr: desc}) {
    ...AgentChatFields
  }
}
    ${AgentChatFieldsFragmentDoc}`;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on app_user {
  id
  _uid
  email
  name
  last_seen
  picture
  _up
  email_verified
}
    `;
export const WorkspaceFieldsFragmentDoc = gql`
    fragment WorkspaceFields on app_workspace {
  stripe_customer_id
  plan_id
  name
  id
  _uid
  _cr
  _up
  is_developer
  image_key
}
    `;
export const ChatFieldsFragmentDoc = gql`
    fragment ChatFields on app_chat {
  body_richtext
  _cr
  type
  id
  thread_id
  _up
  pair_id
  parent_id
  file_attachment_list {
    file {
      presigned_url
      s3_key
      sha256_hexdigest
      original_name
    }
  }
}
    `;
export const ResizeBlueprintsDocument = gql`
    mutation ResizeBlueprints($blueprints: [app_blueprint_insert_input!]!) {
  insert_app_blueprint(
    objects: $blueprints
    on_conflict: {constraint: blueprint_pk, update_columns: [width]}
  ) {
    affected_rows
  }
}
    `;
export type ResizeBlueprintsMutationFn = Apollo.MutationFunction<ResizeBlueprintsMutation, ResizeBlueprintsMutationVariables>;

/**
 * __useResizeBlueprintsMutation__
 *
 * To run a mutation, you first call `useResizeBlueprintsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResizeBlueprintsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resizeBlueprintsMutation, { data, loading, error }] = useResizeBlueprintsMutation({
 *   variables: {
 *      blueprints: // value for 'blueprints'
 *   },
 * });
 */
export function useResizeBlueprintsMutation(baseOptions?: Apollo.MutationHookOptions<ResizeBlueprintsMutation, ResizeBlueprintsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResizeBlueprintsMutation, ResizeBlueprintsMutationVariables>(ResizeBlueprintsDocument, options);
      }
export type ResizeBlueprintsMutationHookResult = ReturnType<typeof useResizeBlueprintsMutation>;
export type ResizeBlueprintsMutationResult = Apollo.MutationResult<ResizeBlueprintsMutation>;
export type ResizeBlueprintsMutationOptions = Apollo.BaseMutationOptions<ResizeBlueprintsMutation, ResizeBlueprintsMutationVariables>;
export const SetColumnRequiredDocument = gql`
    mutation SetColumnRequired($_id: uuid!, $required: Boolean!) {
  update_app_blueprint(_set: {required: $required}, where: {_uid: {_eq: $_id}}) {
    returning {
      id
      _uid
    }
  }
}
    `;
export type SetColumnRequiredMutationFn = Apollo.MutationFunction<SetColumnRequiredMutation, SetColumnRequiredMutationVariables>;

/**
 * __useSetColumnRequiredMutation__
 *
 * To run a mutation, you first call `useSetColumnRequiredMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetColumnRequiredMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setColumnRequiredMutation, { data, loading, error }] = useSetColumnRequiredMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      required: // value for 'required'
 *   },
 * });
 */
export function useSetColumnRequiredMutation(baseOptions?: Apollo.MutationHookOptions<SetColumnRequiredMutation, SetColumnRequiredMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetColumnRequiredMutation, SetColumnRequiredMutationVariables>(SetColumnRequiredDocument, options);
      }
export type SetColumnRequiredMutationHookResult = ReturnType<typeof useSetColumnRequiredMutation>;
export type SetColumnRequiredMutationResult = Apollo.MutationResult<SetColumnRequiredMutation>;
export type SetColumnRequiredMutationOptions = Apollo.BaseMutationOptions<SetColumnRequiredMutation, SetColumnRequiredMutationVariables>;
export const InsertInviteListDocument = gql`
    mutation InsertInviteList($objects: [app_invite_insert_input!]!) {
  insert_app_invite(objects: $objects) {
    affected_rows
    returning {
      id
      _uid
      _cr
      _up
      email
      num_reminders
      status
      last_reminder
      workspace_id
      inviter_id
      promo_name
    }
  }
}
    `;
export type InsertInviteListMutationFn = Apollo.MutationFunction<InsertInviteListMutation, InsertInviteListMutationVariables>;

/**
 * __useInsertInviteListMutation__
 *
 * To run a mutation, you first call `useInsertInviteListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertInviteListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertInviteListMutation, { data, loading, error }] = useInsertInviteListMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertInviteListMutation(baseOptions?: Apollo.MutationHookOptions<InsertInviteListMutation, InsertInviteListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertInviteListMutation, InsertInviteListMutationVariables>(InsertInviteListDocument, options);
      }
export type InsertInviteListMutationHookResult = ReturnType<typeof useInsertInviteListMutation>;
export type InsertInviteListMutationResult = Apollo.MutationResult<InsertInviteListMutation>;
export type InsertInviteListMutationOptions = Apollo.BaseMutationOptions<InsertInviteListMutation, InsertInviteListMutationVariables>;
export const RejectInviteDocument = gql`
    mutation RejectInvite($invite_id: uuid!) {
  update_app_invite(where: {_uid: {_eq: $invite_id}}, _set: {status: "DECLINED"}) {
    returning {
      id
      _uid
      email
      status
    }
  }
}
    `;
export type RejectInviteMutationFn = Apollo.MutationFunction<RejectInviteMutation, RejectInviteMutationVariables>;

/**
 * __useRejectInviteMutation__
 *
 * To run a mutation, you first call `useRejectInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectInviteMutation, { data, loading, error }] = useRejectInviteMutation({
 *   variables: {
 *      invite_id: // value for 'invite_id'
 *   },
 * });
 */
export function useRejectInviteMutation(baseOptions?: Apollo.MutationHookOptions<RejectInviteMutation, RejectInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectInviteMutation, RejectInviteMutationVariables>(RejectInviteDocument, options);
      }
export type RejectInviteMutationHookResult = ReturnType<typeof useRejectInviteMutation>;
export type RejectInviteMutationResult = Apollo.MutationResult<RejectInviteMutation>;
export type RejectInviteMutationOptions = Apollo.BaseMutationOptions<RejectInviteMutation, RejectInviteMutationVariables>;
export const AnnulInviteDocument = gql`
    mutation AnnulInvite($invite_id: uuid!) {
  delete_app_invite(where: {_uid: {_eq: $invite_id}}) {
    returning {
      id
      _uid
    }
  }
}
    `;
export type AnnulInviteMutationFn = Apollo.MutationFunction<AnnulInviteMutation, AnnulInviteMutationVariables>;

/**
 * __useAnnulInviteMutation__
 *
 * To run a mutation, you first call `useAnnulInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnnulInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [annulInviteMutation, { data, loading, error }] = useAnnulInviteMutation({
 *   variables: {
 *      invite_id: // value for 'invite_id'
 *   },
 * });
 */
export function useAnnulInviteMutation(baseOptions?: Apollo.MutationHookOptions<AnnulInviteMutation, AnnulInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AnnulInviteMutation, AnnulInviteMutationVariables>(AnnulInviteDocument, options);
      }
export type AnnulInviteMutationHookResult = ReturnType<typeof useAnnulInviteMutation>;
export type AnnulInviteMutationResult = Apollo.MutationResult<AnnulInviteMutation>;
export type AnnulInviteMutationOptions = Apollo.BaseMutationOptions<AnnulInviteMutation, AnnulInviteMutationVariables>;
export const AgentDocument = gql`
    query Agent($agent_id: String!) {
  agent_agent(where: {id: {_eq: $agent_id}}, order_by: {_cr: asc}) {
    id
    description
    _up
    visibility
    headline
    name
  }
}
    `;

/**
 * __useAgentQuery__
 *
 * To run a query within a React component, call `useAgentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAgentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentQuery({
 *   variables: {
 *      agent_id: // value for 'agent_id'
 *   },
 * });
 */
export function useAgentQuery(baseOptions: Apollo.QueryHookOptions<AgentQuery, AgentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AgentQuery, AgentQueryVariables>(AgentDocument, options);
      }
export function useAgentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AgentQuery, AgentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AgentQuery, AgentQueryVariables>(AgentDocument, options);
        }
export type AgentQueryHookResult = ReturnType<typeof useAgentQuery>;
export type AgentLazyQueryHookResult = ReturnType<typeof useAgentLazyQuery>;
export type AgentQueryResult = Apollo.QueryResult<AgentQuery, AgentQueryVariables>;
export const BillingSubscriptionForWorkspaceDocument = gql`
    subscription BillingSubscriptionForWorkspace($workspace_id: String!) {
  billing_subscription(
    where: {workspace: {id: {_eq: $workspace_id}}}
    order_by: {_cr: desc}
  ) {
    ...BillingSubscriptionFields
  }
}
    ${BillingSubscriptionFieldsFragmentDoc}`;

/**
 * __useBillingSubscriptionForWorkspaceSubscription__
 *
 * To run a query within a React component, call `useBillingSubscriptionForWorkspaceSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBillingSubscriptionForWorkspaceSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBillingSubscriptionForWorkspaceSubscription({
 *   variables: {
 *      workspace_id: // value for 'workspace_id'
 *   },
 * });
 */
export function useBillingSubscriptionForWorkspaceSubscription(baseOptions: Apollo.SubscriptionHookOptions<BillingSubscriptionForWorkspaceSubscription, BillingSubscriptionForWorkspaceSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BillingSubscriptionForWorkspaceSubscription, BillingSubscriptionForWorkspaceSubscriptionVariables>(BillingSubscriptionForWorkspaceDocument, options);
      }
export type BillingSubscriptionForWorkspaceSubscriptionHookResult = ReturnType<typeof useBillingSubscriptionForWorkspaceSubscription>;
export type BillingSubscriptionForWorkspaceSubscriptionResult = Apollo.SubscriptionResult<BillingSubscriptionForWorkspaceSubscription>;
export const FetchDatasetDocument = gql`
    query fetchDataset($workspace_id: String!) {
  app_dataset(where: {workspace_id: {_eq: $workspace_id}}) {
    id
    _uid
    _cr
    _up
    name
    workspace_id
  }
}
    `;

/**
 * __useFetchDatasetQuery__
 *
 * To run a query within a React component, call `useFetchDatasetQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchDatasetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchDatasetQuery({
 *   variables: {
 *      workspace_id: // value for 'workspace_id'
 *   },
 * });
 */
export function useFetchDatasetQuery(baseOptions: Apollo.QueryHookOptions<FetchDatasetQuery, FetchDatasetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchDatasetQuery, FetchDatasetQueryVariables>(FetchDatasetDocument, options);
      }
export function useFetchDatasetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchDatasetQuery, FetchDatasetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchDatasetQuery, FetchDatasetQueryVariables>(FetchDatasetDocument, options);
        }
export type FetchDatasetQueryHookResult = ReturnType<typeof useFetchDatasetQuery>;
export type FetchDatasetLazyQueryHookResult = ReturnType<typeof useFetchDatasetLazyQuery>;
export type FetchDatasetQueryResult = Apollo.QueryResult<FetchDatasetQuery, FetchDatasetQueryVariables>;
export const FetchPublicDataframeDocument = gql`
    query fetchPublicDataframe {
  app_dataset {
    id
    _uid
    _up
    name
    db_table
    tags
  }
}
    `;

/**
 * __useFetchPublicDataframeQuery__
 *
 * To run a query within a React component, call `useFetchPublicDataframeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPublicDataframeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPublicDataframeQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchPublicDataframeQuery(baseOptions?: Apollo.QueryHookOptions<FetchPublicDataframeQuery, FetchPublicDataframeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPublicDataframeQuery, FetchPublicDataframeQueryVariables>(FetchPublicDataframeDocument, options);
      }
export function useFetchPublicDataframeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPublicDataframeQuery, FetchPublicDataframeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPublicDataframeQuery, FetchPublicDataframeQueryVariables>(FetchPublicDataframeDocument, options);
        }
export type FetchPublicDataframeQueryHookResult = ReturnType<typeof useFetchPublicDataframeQuery>;
export type FetchPublicDataframeLazyQueryHookResult = ReturnType<typeof useFetchPublicDataframeLazyQuery>;
export type FetchPublicDataframeQueryResult = Apollo.QueryResult<FetchPublicDataframeQuery, FetchPublicDataframeQueryVariables>;
export const FetchPublicDataframeByPublicSlugDocument = gql`
    query fetchPublicDataframeByPublicSlug($public_slug: String) {
  app_dataset(
    where: {public_slug: {_eq: $public_slug}}
    order_by: {_up: desc_nulls_last}
  ) {
    id
    _uid
    name
    db_table
    tags
  }
}
    `;

/**
 * __useFetchPublicDataframeByPublicSlugQuery__
 *
 * To run a query within a React component, call `useFetchPublicDataframeByPublicSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPublicDataframeByPublicSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPublicDataframeByPublicSlugQuery({
 *   variables: {
 *      public_slug: // value for 'public_slug'
 *   },
 * });
 */
export function useFetchPublicDataframeByPublicSlugQuery(baseOptions?: Apollo.QueryHookOptions<FetchPublicDataframeByPublicSlugQuery, FetchPublicDataframeByPublicSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPublicDataframeByPublicSlugQuery, FetchPublicDataframeByPublicSlugQueryVariables>(FetchPublicDataframeByPublicSlugDocument, options);
      }
export function useFetchPublicDataframeByPublicSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPublicDataframeByPublicSlugQuery, FetchPublicDataframeByPublicSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPublicDataframeByPublicSlugQuery, FetchPublicDataframeByPublicSlugQueryVariables>(FetchPublicDataframeByPublicSlugDocument, options);
        }
export type FetchPublicDataframeByPublicSlugQueryHookResult = ReturnType<typeof useFetchPublicDataframeByPublicSlugQuery>;
export type FetchPublicDataframeByPublicSlugLazyQueryHookResult = ReturnType<typeof useFetchPublicDataframeByPublicSlugLazyQuery>;
export type FetchPublicDataframeByPublicSlugQueryResult = Apollo.QueryResult<FetchPublicDataframeByPublicSlugQuery, FetchPublicDataframeByPublicSlugQueryVariables>;
export const FetchBlueprintByDataframeIdDocument = gql`
    query fetchBlueprintByDataframeId($dataframe_id: String!) {
  app_blueprint(where: {dataset_id: {_eq: $dataframe_id}}) {
    slug
    display_name
  }
}
    `;

/**
 * __useFetchBlueprintByDataframeIdQuery__
 *
 * To run a query within a React component, call `useFetchBlueprintByDataframeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchBlueprintByDataframeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBlueprintByDataframeIdQuery({
 *   variables: {
 *      dataframe_id: // value for 'dataframe_id'
 *   },
 * });
 */
export function useFetchBlueprintByDataframeIdQuery(baseOptions: Apollo.QueryHookOptions<FetchBlueprintByDataframeIdQuery, FetchBlueprintByDataframeIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchBlueprintByDataframeIdQuery, FetchBlueprintByDataframeIdQueryVariables>(FetchBlueprintByDataframeIdDocument, options);
      }
export function useFetchBlueprintByDataframeIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchBlueprintByDataframeIdQuery, FetchBlueprintByDataframeIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchBlueprintByDataframeIdQuery, FetchBlueprintByDataframeIdQueryVariables>(FetchBlueprintByDataframeIdDocument, options);
        }
export type FetchBlueprintByDataframeIdQueryHookResult = ReturnType<typeof useFetchBlueprintByDataframeIdQuery>;
export type FetchBlueprintByDataframeIdLazyQueryHookResult = ReturnType<typeof useFetchBlueprintByDataframeIdLazyQuery>;
export type FetchBlueprintByDataframeIdQueryResult = Apollo.QueryResult<FetchBlueprintByDataframeIdQuery, FetchBlueprintByDataframeIdQueryVariables>;
export const GetNamespaceMembershipDocument = gql`
    query getNamespaceMembership($user_id: String!) {
  workspace_membership: app_workspace_membership(
    where: {user_id: {_eq: $user_id}}
  ) {
    id
    _uid
    workspace {
      id
      _uid
      name
    }
  }
}
    `;

/**
 * __useGetNamespaceMembershipQuery__
 *
 * To run a query within a React component, call `useGetNamespaceMembershipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNamespaceMembershipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNamespaceMembershipQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetNamespaceMembershipQuery(baseOptions: Apollo.QueryHookOptions<GetNamespaceMembershipQuery, GetNamespaceMembershipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNamespaceMembershipQuery, GetNamespaceMembershipQueryVariables>(GetNamespaceMembershipDocument, options);
      }
export function useGetNamespaceMembershipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNamespaceMembershipQuery, GetNamespaceMembershipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNamespaceMembershipQuery, GetNamespaceMembershipQueryVariables>(GetNamespaceMembershipDocument, options);
        }
export type GetNamespaceMembershipQueryHookResult = ReturnType<typeof useGetNamespaceMembershipQuery>;
export type GetNamespaceMembershipLazyQueryHookResult = ReturnType<typeof useGetNamespaceMembershipLazyQuery>;
export type GetNamespaceMembershipQueryResult = Apollo.QueryResult<GetNamespaceMembershipQuery, GetNamespaceMembershipQueryVariables>;
export const AgentStreamDocument = gql`
    subscription AgentStream($workspace_id: String!) {
  agent_agent(where: {workspace_id: {_eq: $workspace_id}}) {
    ...AgentFields
    runtime {
      id
      dev_status
    }
  }
}
    ${AgentFieldsFragmentDoc}`;

/**
 * __useAgentStreamSubscription__
 *
 * To run a query within a React component, call `useAgentStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAgentStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentStreamSubscription({
 *   variables: {
 *      workspace_id: // value for 'workspace_id'
 *   },
 * });
 */
export function useAgentStreamSubscription(baseOptions: Apollo.SubscriptionHookOptions<AgentStreamSubscription, AgentStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AgentStreamSubscription, AgentStreamSubscriptionVariables>(AgentStreamDocument, options);
      }
export type AgentStreamSubscriptionHookResult = ReturnType<typeof useAgentStreamSubscription>;
export type AgentStreamSubscriptionResult = Apollo.SubscriptionResult<AgentStreamSubscription>;
export const GetAgentInstallStreamDocument = gql`
    subscription GetAgentInstallStream($workspace_id: String!, $search: String) {
  agent_installation(
    where: {_and: {active: {_eq: true}, workspace_id: {_eq: $workspace_id}, agent: {name: {_ilike: $search}}}}
    order_by: {_cr: desc}
  ) {
    _cr
    _uid
    _up
    agent_id
    cron_schedule
    installer_id
    id
    workspace {
      name
      id
    }
    agent {
      ...AgentFields
      creator {
        name
        id
        picture
      }
    }
  }
}
    ${AgentFieldsFragmentDoc}`;

/**
 * __useGetAgentInstallStreamSubscription__
 *
 * To run a query within a React component, call `useGetAgentInstallStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetAgentInstallStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAgentInstallStreamSubscription({
 *   variables: {
 *      workspace_id: // value for 'workspace_id'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetAgentInstallStreamSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetAgentInstallStreamSubscription, GetAgentInstallStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetAgentInstallStreamSubscription, GetAgentInstallStreamSubscriptionVariables>(GetAgentInstallStreamDocument, options);
      }
export type GetAgentInstallStreamSubscriptionHookResult = ReturnType<typeof useGetAgentInstallStreamSubscription>;
export type GetAgentInstallStreamSubscriptionResult = Apollo.SubscriptionResult<GetAgentInstallStreamSubscription>;
export const AgentInstallationByPkDocument = gql`
    subscription AgentInstallationByPk($id: String!) {
  installation: agent_installation_by_pk(id: $id) {
    ...AgentInstallationFields
  }
}
    ${AgentInstallationFieldsFragmentDoc}`;

/**
 * __useAgentInstallationByPkSubscription__
 *
 * To run a query within a React component, call `useAgentInstallationByPkSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAgentInstallationByPkSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentInstallationByPkSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAgentInstallationByPkSubscription(baseOptions: Apollo.SubscriptionHookOptions<AgentInstallationByPkSubscription, AgentInstallationByPkSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AgentInstallationByPkSubscription, AgentInstallationByPkSubscriptionVariables>(AgentInstallationByPkDocument, options);
      }
export type AgentInstallationByPkSubscriptionHookResult = ReturnType<typeof useAgentInstallationByPkSubscription>;
export type AgentInstallationByPkSubscriptionResult = Apollo.SubscriptionResult<AgentInstallationByPkSubscription>;
export const AgentByPk_EditorDocument = gql`
    subscription AgentByPk_Editor($id: String!) {
  agent: agent_agent_by_pk(id: $id) {
    ...AgentFields
    runtime {
      dev_password_hash
      dev_endpoint
      last_accessed
      dev_status
    }
    banner_list {
      id
      url
      file_type
      is_primary
      original_name
      _cr
    }
    deployment_list(order_by: {_cr: desc}) {
      ...DeploymentFields
    }
    creator {
      id
      name
      picture
    }
    thread_list(order_by: {_cr: desc}) {
      ...ThreadFields
    }
    product_list(order_by: {price_list_aggregate: {min: {unit_amount: asc}}}) {
      ...ProductFields
    }
  }
}
    ${AgentFieldsFragmentDoc}
${DeploymentFieldsFragmentDoc}
${ThreadFieldsFragmentDoc}
${ProductFieldsFragmentDoc}`;

/**
 * __useAgentByPk_EditorSubscription__
 *
 * To run a query within a React component, call `useAgentByPk_EditorSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAgentByPk_EditorSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentByPk_EditorSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAgentByPk_EditorSubscription(baseOptions: Apollo.SubscriptionHookOptions<AgentByPk_EditorSubscription, AgentByPk_EditorSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AgentByPk_EditorSubscription, AgentByPk_EditorSubscriptionVariables>(AgentByPk_EditorDocument, options);
      }
export type AgentByPk_EditorSubscriptionHookResult = ReturnType<typeof useAgentByPk_EditorSubscription>;
export type AgentByPk_EditorSubscriptionResult = Apollo.SubscriptionResult<AgentByPk_EditorSubscription>;
export const AgentByPk_ConsumerDocument = gql`
    subscription AgentByPk_Consumer($id: String!) {
  agent: agent_agent_by_pk(id: $id) {
    ...AgentFields
    banner_list {
      id
      url
      file_type
      is_primary
      original_name
      _cr
    }
    creator {
      id
      name
      picture
    }
    installation_list(where: {active: {_eq: true}}) {
      id
      _cr
    }
    thread_list(order_by: {_cr: desc}) {
      ...ThreadFields
    }
    product_list(order_by: {price_list_aggregate: {min: {unit_amount: asc}}}) {
      ...ProductFields
    }
  }
}
    ${AgentFieldsFragmentDoc}
${ThreadFieldsFragmentDoc}
${ProductFieldsFragmentDoc}`;

/**
 * __useAgentByPk_ConsumerSubscription__
 *
 * To run a query within a React component, call `useAgentByPk_ConsumerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAgentByPk_ConsumerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentByPk_ConsumerSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAgentByPk_ConsumerSubscription(baseOptions: Apollo.SubscriptionHookOptions<AgentByPk_ConsumerSubscription, AgentByPk_ConsumerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AgentByPk_ConsumerSubscription, AgentByPk_ConsumerSubscriptionVariables>(AgentByPk_ConsumerDocument, options);
      }
export type AgentByPk_ConsumerSubscriptionHookResult = ReturnType<typeof useAgentByPk_ConsumerSubscription>;
export type AgentByPk_ConsumerSubscriptionResult = Apollo.SubscriptionResult<AgentByPk_ConsumerSubscription>;
export const AgentSubscriptionsDocument = gql`
    subscription AgentSubscriptions($agent_id: String!) {
  agent_installation(where: {agent_id: {_eq: $agent_id}}) {
    subscriptions {
      workspace {
        name
        image_key
      }
      user {
        name
        picture
        email
      }
      active
      _cr
      trial_end
      canceled_at
      price {
        product {
          name
          price {
            currency
            interval
            interval_count
            unit_amount
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAgentSubscriptionsSubscription__
 *
 * To run a query within a React component, call `useAgentSubscriptionsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAgentSubscriptionsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentSubscriptionsSubscription({
 *   variables: {
 *      agent_id: // value for 'agent_id'
 *   },
 * });
 */
export function useAgentSubscriptionsSubscription(baseOptions: Apollo.SubscriptionHookOptions<AgentSubscriptionsSubscription, AgentSubscriptionsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AgentSubscriptionsSubscription, AgentSubscriptionsSubscriptionVariables>(AgentSubscriptionsDocument, options);
      }
export type AgentSubscriptionsSubscriptionHookResult = ReturnType<typeof useAgentSubscriptionsSubscription>;
export type AgentSubscriptionsSubscriptionResult = Apollo.SubscriptionResult<AgentSubscriptionsSubscription>;
export const AgentInstallationVariablesDocument = gql`
    subscription AgentInstallationVariables($agent_installation_id: String!) {
  agent_installation(where: {id: {_eq: $agent_installation_id}}) {
    id
    installation_variables {
      id
      comment
      key
      _up
      _cr
      editor {
        email
        name
        picture
      }
      is_secret
      value_json
      value_string
      value_type
      value_url
    }
  }
}
    `;

/**
 * __useAgentInstallationVariablesSubscription__
 *
 * To run a query within a React component, call `useAgentInstallationVariablesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAgentInstallationVariablesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentInstallationVariablesSubscription({
 *   variables: {
 *      agent_installation_id: // value for 'agent_installation_id'
 *   },
 * });
 */
export function useAgentInstallationVariablesSubscription(baseOptions: Apollo.SubscriptionHookOptions<AgentInstallationVariablesSubscription, AgentInstallationVariablesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AgentInstallationVariablesSubscription, AgentInstallationVariablesSubscriptionVariables>(AgentInstallationVariablesDocument, options);
      }
export type AgentInstallationVariablesSubscriptionHookResult = ReturnType<typeof useAgentInstallationVariablesSubscription>;
export type AgentInstallationVariablesSubscriptionResult = Apollo.SubscriptionResult<AgentInstallationVariablesSubscription>;
export const AgentInstallationCronJobsDocument = gql`
    subscription AgentInstallationCronJobs($agent_installation_id: String!) {
  agent_installation(where: {id: {_eq: $agent_installation_id}}) {
    id
    cron_jobs {
      id
      name
      description
      frequency
      body
      _cr
      _up
    }
  }
}
    `;

/**
 * __useAgentInstallationCronJobsSubscription__
 *
 * To run a query within a React component, call `useAgentInstallationCronJobsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAgentInstallationCronJobsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentInstallationCronJobsSubscription({
 *   variables: {
 *      agent_installation_id: // value for 'agent_installation_id'
 *   },
 * });
 */
export function useAgentInstallationCronJobsSubscription(baseOptions: Apollo.SubscriptionHookOptions<AgentInstallationCronJobsSubscription, AgentInstallationCronJobsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AgentInstallationCronJobsSubscription, AgentInstallationCronJobsSubscriptionVariables>(AgentInstallationCronJobsDocument, options);
      }
export type AgentInstallationCronJobsSubscriptionHookResult = ReturnType<typeof useAgentInstallationCronJobsSubscription>;
export type AgentInstallationCronJobsSubscriptionResult = Apollo.SubscriptionResult<AgentInstallationCronJobsSubscription>;
export const AgentInstallationHooksDocument = gql`
    subscription AgentInstallationHooks($agent_installation_id: String!) {
  agent_installation(where: {id: {_eq: $agent_installation_id}}) {
    id
    hooks {
      id
      target_endpoint
      headers
      _cr
      _up
    }
  }
}
    `;

/**
 * __useAgentInstallationHooksSubscription__
 *
 * To run a query within a React component, call `useAgentInstallationHooksSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAgentInstallationHooksSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentInstallationHooksSubscription({
 *   variables: {
 *      agent_installation_id: // value for 'agent_installation_id'
 *   },
 * });
 */
export function useAgentInstallationHooksSubscription(baseOptions: Apollo.SubscriptionHookOptions<AgentInstallationHooksSubscription, AgentInstallationHooksSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AgentInstallationHooksSubscription, AgentInstallationHooksSubscriptionVariables>(AgentInstallationHooksDocument, options);
      }
export type AgentInstallationHooksSubscriptionHookResult = ReturnType<typeof useAgentInstallationHooksSubscription>;
export type AgentInstallationHooksSubscriptionResult = Apollo.SubscriptionResult<AgentInstallationHooksSubscription>;
export const AgentInstallationFileDocument = gql`
    subscription AgentInstallationFile($agent_installation_id: String) {
  file: app_file(
    where: {_and: [{agent_installation_id: {_eq: $agent_installation_id}}, {app_type: {_eq: "INSTALLATION"}}]}
    order_by: {_cr: desc}
  ) {
    presigned_url
    id
    _cr
    original_name
    type
  }
}
    `;

/**
 * __useAgentInstallationFileSubscription__
 *
 * To run a query within a React component, call `useAgentInstallationFileSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAgentInstallationFileSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentInstallationFileSubscription({
 *   variables: {
 *      agent_installation_id: // value for 'agent_installation_id'
 *   },
 * });
 */
export function useAgentInstallationFileSubscription(baseOptions?: Apollo.SubscriptionHookOptions<AgentInstallationFileSubscription, AgentInstallationFileSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AgentInstallationFileSubscription, AgentInstallationFileSubscriptionVariables>(AgentInstallationFileDocument, options);
      }
export type AgentInstallationFileSubscriptionHookResult = ReturnType<typeof useAgentInstallationFileSubscription>;
export type AgentInstallationFileSubscriptionResult = Apollo.SubscriptionResult<AgentInstallationFileSubscription>;
export const FileListDocument = gql`
    subscription FileList($fileIds: [String!]!) {
  file_list: app_file(where: {id: {_in: $fileIds}}) {
    presigned_url
    original_name
    id
    chat_id
  }
}
    `;

/**
 * __useFileListSubscription__
 *
 * To run a query within a React component, call `useFileListSubscription` and pass it any options that fit your needs.
 * When your component renders, `useFileListSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileListSubscription({
 *   variables: {
 *      fileIds: // value for 'fileIds'
 *   },
 * });
 */
export function useFileListSubscription(baseOptions: Apollo.SubscriptionHookOptions<FileListSubscription, FileListSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<FileListSubscription, FileListSubscriptionVariables>(FileListDocument, options);
      }
export type FileListSubscriptionHookResult = ReturnType<typeof useFileListSubscription>;
export type FileListSubscriptionResult = Apollo.SubscriptionResult<FileListSubscription>;
export const InviteDetailsDocument = gql`
    subscription InviteDetails($inviteId: String!) {
  app_invite(where: {id: {_eq: $inviteId}}) {
    id
    workspace {
      image_key
      id
      name
    }
    inviter_id
    email
    inviter {
      id
      name
      picture
      email
    }
    _cr
  }
}
    `;

/**
 * __useInviteDetailsSubscription__
 *
 * To run a query within a React component, call `useInviteDetailsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useInviteDetailsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInviteDetailsSubscription({
 *   variables: {
 *      inviteId: // value for 'inviteId'
 *   },
 * });
 */
export function useInviteDetailsSubscription(baseOptions: Apollo.SubscriptionHookOptions<InviteDetailsSubscription, InviteDetailsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<InviteDetailsSubscription, InviteDetailsSubscriptionVariables>(InviteDetailsDocument, options);
      }
export type InviteDetailsSubscriptionHookResult = ReturnType<typeof useInviteDetailsSubscription>;
export type InviteDetailsSubscriptionResult = Apollo.SubscriptionResult<InviteDetailsSubscription>;
export const SessionDocument = gql`
    subscription Session($id: uuid!) {
  session: auth_session_by_pk(id: $id) {
    id
    user_id
    workspace_id
    user {
      ...UserFields
    }
    is_in_dev_mode
    workspace {
      ...WorkspaceFields
      members: membership_list {
        user {
          ...UserFields
        }
        role
      }
      api_key_list(order_by: {_cr: desc}) {
        assignee_uid
        creator_uid
        id
        creator {
          id
          name
          picture
        }
        assignee {
          id
          name
          picture
        }
        last_used
        name
        _cr
        _up
        type
        installation {
          agent {
            id
            avatar_url
            name
          }
        }
      }
    }
    user {
      workspace_list: workspace_memberships {
        workspace {
          ...WorkspaceFields
        }
        role
      }
    }
  }
}
    ${UserFieldsFragmentDoc}
${WorkspaceFieldsFragmentDoc}`;

/**
 * __useSessionSubscription__
 *
 * To run a query within a React component, call `useSessionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSessionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSessionSubscription(baseOptions: Apollo.SubscriptionHookOptions<SessionSubscription, SessionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SessionSubscription, SessionSubscriptionVariables>(SessionDocument, options);
      }
export type SessionSubscriptionHookResult = ReturnType<typeof useSessionSubscription>;
export type SessionSubscriptionResult = Apollo.SubscriptionResult<SessionSubscription>;
export const ChatInThreadDocument = gql`
    subscription ChatInThread($thread_id: String!) {
  chat: app_chat(where: {thread_id: {_eq: $thread_id}}, order_by: {_cr: asc}) {
    ...ChatFields
  }
}
    ${ChatFieldsFragmentDoc}`;

/**
 * __useChatInThreadSubscription__
 *
 * To run a query within a React component, call `useChatInThreadSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatInThreadSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatInThreadSubscription({
 *   variables: {
 *      thread_id: // value for 'thread_id'
 *   },
 * });
 */
export function useChatInThreadSubscription(baseOptions: Apollo.SubscriptionHookOptions<ChatInThreadSubscription, ChatInThreadSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ChatInThreadSubscription, ChatInThreadSubscriptionVariables>(ChatInThreadDocument, options);
      }
export type ChatInThreadSubscriptionHookResult = ReturnType<typeof useChatInThreadSubscription>;
export type ChatInThreadSubscriptionResult = Apollo.SubscriptionResult<ChatInThreadSubscription>;
export const ThreadDocument = gql`
    subscription Thread($id: String!) {
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
      ...ChatFields
    }
    agent {
      name
      id
    }
  }
}
    ${ChatFieldsFragmentDoc}`;

/**
 * __useThreadSubscription__
 *
 * To run a query within a React component, call `useThreadSubscription` and pass it any options that fit your needs.
 * When your component renders, `useThreadSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useThreadSubscription(baseOptions: Apollo.SubscriptionHookOptions<ThreadSubscription, ThreadSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ThreadSubscription, ThreadSubscriptionVariables>(ThreadDocument, options);
      }
export type ThreadSubscriptionHookResult = ReturnType<typeof useThreadSubscription>;
export type ThreadSubscriptionResult = Apollo.SubscriptionResult<ThreadSubscription>;
export const GetUserStreamDocument = gql`
    subscription GetUserStream($_uid: uuid!) {
  user: app_user(where: {_uid: {_eq: $_uid}}) {
    id
    _uid
    _up
    email
    name
    email_verified
    picture
  }
}
    `;

/**
 * __useGetUserStreamSubscription__
 *
 * To run a query within a React component, call `useGetUserStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetUserStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserStreamSubscription({
 *   variables: {
 *      _uid: // value for '_uid'
 *   },
 * });
 */
export function useGetUserStreamSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetUserStreamSubscription, GetUserStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetUserStreamSubscription, GetUserStreamSubscriptionVariables>(GetUserStreamDocument, options);
      }
export type GetUserStreamSubscriptionHookResult = ReturnType<typeof useGetUserStreamSubscription>;
export type GetUserStreamSubscriptionResult = Apollo.SubscriptionResult<GetUserStreamSubscription>;
export const GetNamespaceMembershipStreamDocument = gql`
    subscription GetNamespaceMembershipStream($user_id: String!) {
  workspace_membership: app_workspace_membership(
    where: {user_id: {_eq: $user_id}}
  ) {
    id
    _uid
    _cr
    _up
    workspace_id
    role
    workspace {
      id
      _uid
      name
      image_key
      stripe_customer_id
      plan_id
    }
  }
}
    `;

/**
 * __useGetNamespaceMembershipStreamSubscription__
 *
 * To run a query within a React component, call `useGetNamespaceMembershipStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetNamespaceMembershipStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNamespaceMembershipStreamSubscription({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetNamespaceMembershipStreamSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetNamespaceMembershipStreamSubscription, GetNamespaceMembershipStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetNamespaceMembershipStreamSubscription, GetNamespaceMembershipStreamSubscriptionVariables>(GetNamespaceMembershipStreamDocument, options);
      }
export type GetNamespaceMembershipStreamSubscriptionHookResult = ReturnType<typeof useGetNamespaceMembershipStreamSubscription>;
export type GetNamespaceMembershipStreamSubscriptionResult = Apollo.SubscriptionResult<GetNamespaceMembershipStreamSubscription>;
export const GetNamespaceMembersStreamDocument = gql`
    subscription GetNamespaceMembersStream($workspace_id: String!) {
  workspace_membership: app_workspace_membership(
    where: {workspace_id: {_eq: $workspace_id}}
  ) {
    id
    _uid
    _cr
    _up
    workspace_id
    role
    user {
      id
      _uid
      _cr
      _up
      name
      email
      picture
      last_seen
    }
  }
}
    `;

/**
 * __useGetNamespaceMembersStreamSubscription__
 *
 * To run a query within a React component, call `useGetNamespaceMembersStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetNamespaceMembersStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNamespaceMembersStreamSubscription({
 *   variables: {
 *      workspace_id: // value for 'workspace_id'
 *   },
 * });
 */
export function useGetNamespaceMembersStreamSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetNamespaceMembersStreamSubscription, GetNamespaceMembersStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetNamespaceMembersStreamSubscription, GetNamespaceMembersStreamSubscriptionVariables>(GetNamespaceMembersStreamDocument, options);
      }
export type GetNamespaceMembersStreamSubscriptionHookResult = ReturnType<typeof useGetNamespaceMembersStreamSubscription>;
export type GetNamespaceMembersStreamSubscriptionResult = Apollo.SubscriptionResult<GetNamespaceMembersStreamSubscription>;
export const GetCompanyAndWorkspaceByUserIdDocument = gql`
    subscription GetCompanyAndWorkspaceByUserId($user_id: String!) {
  workspace: app_workspace(where: {membership_list: {user_id: {_eq: $user_id}}}) {
    id
    _uid
    name
    image_key
    stripe_customer_id
    plan_id
  }
}
    `;

/**
 * __useGetCompanyAndWorkspaceByUserIdSubscription__
 *
 * To run a query within a React component, call `useGetCompanyAndWorkspaceByUserIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyAndWorkspaceByUserIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyAndWorkspaceByUserIdSubscription({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetCompanyAndWorkspaceByUserIdSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetCompanyAndWorkspaceByUserIdSubscription, GetCompanyAndWorkspaceByUserIdSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetCompanyAndWorkspaceByUserIdSubscription, GetCompanyAndWorkspaceByUserIdSubscriptionVariables>(GetCompanyAndWorkspaceByUserIdDocument, options);
      }
export type GetCompanyAndWorkspaceByUserIdSubscriptionHookResult = ReturnType<typeof useGetCompanyAndWorkspaceByUserIdSubscription>;
export type GetCompanyAndWorkspaceByUserIdSubscriptionResult = Apollo.SubscriptionResult<GetCompanyAndWorkspaceByUserIdSubscription>;
export const GetPendingInvitesDocument = gql`
    subscription GetPendingInvites {
  app_invite(where: {status: {_eq: "PENDING"}}) {
    id
    _uid
    email
    role
  }
}
    `;

/**
 * __useGetPendingInvitesSubscription__
 *
 * To run a query within a React component, call `useGetPendingInvitesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetPendingInvitesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPendingInvitesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetPendingInvitesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetPendingInvitesSubscription, GetPendingInvitesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetPendingInvitesSubscription, GetPendingInvitesSubscriptionVariables>(GetPendingInvitesDocument, options);
      }
export type GetPendingInvitesSubscriptionHookResult = ReturnType<typeof useGetPendingInvitesSubscription>;
export type GetPendingInvitesSubscriptionResult = Apollo.SubscriptionResult<GetPendingInvitesSubscription>;