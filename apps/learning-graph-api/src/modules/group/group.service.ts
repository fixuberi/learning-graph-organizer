import { Group, Item } from '@learning-graph/graph-ql';
import { Injectable } from '@nestjs/common';
import { FromDbGroup, GROUPS, ITEMS } from './mocks';

@Injectable()
export class GroupService {
  private groups: FromDbGroup[] = GROUPS;
  private items: Item[] = ITEMS;

  async findOne(id?: string): Promise<Group | null> {
    if (!id) {
      // If no id provided, return root level groups
      const rootGroups = this.groups.filter((group) => !group.parentGroupId);
      return {
        id: null,
        name: 'Root Level Groups',
        parentGroup: null,
        childGroups: rootGroups.map((group) => this.resolveGroup(group)),
        items: [],
      };
    }
    // If id provided, return the corresponding group with resolved relationships
    const group = this.groups.find((group) => group.id === id);
    if (!group) return null;

    return this.resolveGroup(group);
  }

  private resolveGroup(group: FromDbGroup): Group {
    const parentGroup = group.parentGroupId ? this.groups.find((g) => g.id === group.parentGroupId) : null;
    const childGroups = group.childGroupIds.map((childId) => this.groups.find((g) => g.id === childId));
    const items = group.itemIds.map((itemId) => this.items.find((item) => item.id === itemId));

    return {
      ...group,
      parentGroup,
      childGroups,
      items,
    };
  }

  // async findAll(): Promise<Group[]> {
  //   return this.groups;
  // }

  // async create(name: string, parentId?: string): Promise<Group> {
  //   const newGroup: Group = {
  //     id: (this.groups.length + 1).toString(),
  //     name,
  //     parentGroup: parentId ? this.groups.find(group => group.id === parentId) || null : null,
  //     childGroups: [],
  //     items: [],
  //   };

  //   if (parentId) {
  //     const parentGroup = this.groups.find(group => group.id === parentId);
  //     if (parentGroup && parentGroup.childGroups) {
  //       parentGroup.childGroups.push(newGroup);
  //     }
  //   }

  //   this.groups.push(newGroup);
  //   return newGroup;
  // }

  // async update(id: string, name: string, parentId: string): Promise<Group> {
  //   const groupIndex = this.groups.findIndex(group => group.id === id);
  //   if (groupIndex === -1) return null;

  //   const updatedGroup = { ...this.groups[groupIndex], name, parentId };
  //   this.groups[groupIndex] = updatedGroup;

  //   return updatedGroup;
  // }

  // async remove(id: string): Promise<boolean> {
  //   const groupIndex = this.groups.findIndex(group => group.id === id);
  //   if (groupIndex === -1) return false;

  //   this.groups.splice(groupIndex, 1);
  //   return true;
  // }
}
