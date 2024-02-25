
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateGroupInput {
    name: string;
    parentId?: Nullable<string>;
}

export interface UpdateGroupInput {
    id: string;
    name?: Nullable<string>;
    parentId?: Nullable<string>;
}

export interface CreateItemInput {
    name: string;
    groupId: string;
}

export interface UpdateItemInput {
    id: string;
    name?: Nullable<string>;
    groupId?: Nullable<string>;
}

export interface IQuery {
    group(id?: Nullable<string>): Nullable<Group> | Promise<Nullable<Group>>;
    groups(): Nullable<Nullable<Group>[]> | Promise<Nullable<Nullable<Group>[]>>;
    item(id: string): Nullable<Item> | Promise<Nullable<Item>>;
    items(): Nullable<Nullable<Item>[]> | Promise<Nullable<Nullable<Item>[]>>;
}

export interface IMutation {
    createGroup(input: CreateGroupInput): Nullable<Group> | Promise<Nullable<Group>>;
    updateGroup(input: UpdateGroupInput): Nullable<Group> | Promise<Nullable<Group>>;
    deleteGroup(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;
    createItem(input: CreateItemInput): Nullable<Item> | Promise<Nullable<Item>>;
    updateItem(input: UpdateItemInput): Nullable<Item> | Promise<Nullable<Item>>;
    deleteItem(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export interface Group {
    id?: Nullable<string>;
    name?: Nullable<string>;
    parentGroup?: Nullable<Group>;
    childGroups?: Nullable<Nullable<Group>[]>;
    items?: Nullable<Nullable<Item>[]>;
}

export interface Item {
    id: string;
    name: string;
    group?: Nullable<Group>;
}

type Nullable<T> = T | null;
