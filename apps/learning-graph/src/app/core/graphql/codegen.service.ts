import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateGroupInput = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateItemInput = {
  groupId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type Group = {
  __typename?: 'Group';
  childGroups?: Maybe<Array<Maybe<Group>>>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<Item>>>;
  name: Scalars['String']['output'];
  parentGroup?: Maybe<Group>;
};

export type Item = {
  __typename?: 'Item';
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGroup?: Maybe<Group>;
  createItem?: Maybe<Item>;
  deleteGroup?: Maybe<Scalars['Boolean']['output']>;
  deleteItem?: Maybe<Scalars['Boolean']['output']>;
  updateGroup?: Maybe<Group>;
  updateItem?: Maybe<Item>;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};

export type Query = {
  __typename?: 'Query';
  group?: Maybe<Group>;
  groups?: Maybe<Array<Maybe<Group>>>;
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryItemArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateGroupInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateItemInput = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNewGroupMutationVariables = Exact<{
  input: CreateGroupInput;
}>;


export type CreateNewGroupMutation = { __typename?: 'Mutation', createGroup?: { __typename?: 'Group', id: string, name: string } | null };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup?: boolean | null };

export type UpdateExistingGroupMutationVariables = Exact<{
  input: UpdateGroupInput;
}>;


export type UpdateExistingGroupMutation = { __typename?: 'Mutation', updateGroup?: { __typename?: 'Group', id: string, name: string } | null };

export type GetAllGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGroupsQuery = { __typename?: 'Query', groups?: Array<{ __typename?: 'Group', id: string, name: string, parentGroup?: { __typename?: 'Group', id: string, name: string } | null, childGroups?: Array<{ __typename?: 'Group', id: string, name: string } | null> | null, items?: Array<{ __typename?: 'Item', id: string, name: string } | null> | null } | null> | null };

export type GetGroupQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetGroupQuery = { __typename?: 'Query', group?: { __typename?: 'Group', id: string, name: string, parentGroup?: { __typename?: 'Group', id: string, name: string } | null, childGroups?: Array<{ __typename?: 'Group', id: string, name: string } | null> | null, items?: Array<{ __typename?: 'Item', id: string, name: string } | null> | null } | null };

export type GetItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetItemQuery = { __typename?: 'Query', item?: { __typename?: 'Item', id: string, name: string, group?: { __typename?: 'Group', id: string, name: string } | null } | null };

export const CreateNewGroupDocument = gql`
    mutation CreateNewGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNewGroupGQL extends Apollo.Mutation<CreateNewGroupMutation, CreateNewGroupMutationVariables> {
    override document = CreateNewGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteGroupDocument = gql`
    mutation DeleteGroup($id: ID!) {
  deleteGroup(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteGroupGQL extends Apollo.Mutation<DeleteGroupMutation, DeleteGroupMutationVariables> {
    override document = DeleteGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateExistingGroupDocument = gql`
    mutation UpdateExistingGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateExistingGroupGQL extends Apollo.Mutation<UpdateExistingGroupMutation, UpdateExistingGroupMutationVariables> {
    override document = UpdateExistingGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllGroupsDocument = gql`
    query GetAllGroups {
  groups {
    id
    name
    parentGroup {
      id
      name
    }
    childGroups {
      id
      name
    }
    items {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllGroupsGQL extends Apollo.Query<GetAllGroupsQuery, GetAllGroupsQueryVariables> {
    override document = GetAllGroupsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetGroupDocument = gql`
    query GetGroup($id: ID!) {
  group(id: $id) {
    id
    name
    parentGroup {
      id
      name
    }
    childGroups {
      id
      name
    }
    items {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetGroupGQL extends Apollo.Query<GetGroupQuery, GetGroupQueryVariables> {
    override document = GetGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetItemDocument = gql`
    query GetItem($id: ID!) {
  item(id: $id) {
    id
    name
    group {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetItemGQL extends Apollo.Query<GetItemQuery, GetItemQueryVariables> {
    override document = GetItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }