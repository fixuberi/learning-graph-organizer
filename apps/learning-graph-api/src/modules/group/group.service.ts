import { Injectable } from '@nestjs/common';
import { Group } from '@learning-graph/graph-ql';

@Injectable()
export class GroupService {
  private groups: Group[] = [
    {
      id: '1',
      name: 'Initial Group',
      parentGroup: null,
      childGroups: [],
      items: [],
    },
  ];

  async findOne(id: string): Promise<Group> {
    const group = this.groups.find(group => group.id === id);
    return group || null;
  }

  async findAll(): Promise<Group[]> {
    return this.groups;
  }

  async create(name: string, parentId?: string): Promise<Group> {
    const newGroup: Group = {
      id: (this.groups.length + 1).toString(),
      name,
      parentGroup: parentId ? this.groups.find(group => group.id === parentId) || null : null,
      childGroups: [],
      items: [],
    };

    if (parentId) {
      const parentGroup = this.groups.find(group => group.id === parentId);
      if (parentGroup && parentGroup.childGroups) {
        parentGroup.childGroups.push(newGroup);
      }
    }

    this.groups.push(newGroup);
    return newGroup;
  }

  async update(id: string, name: string, parentId: string): Promise<Group> {
    const groupIndex = this.groups.findIndex(group => group.id === id);
    if (groupIndex === -1) return null;

    const updatedGroup = { ...this.groups[groupIndex], name, parentId };
    this.groups[groupIndex] = updatedGroup;

    return updatedGroup;
  }

  async remove(id: string): Promise<boolean> {
    const groupIndex = this.groups.findIndex(group => group.id === id);
    if (groupIndex === -1) return false;

    this.groups.splice(groupIndex, 1);
    return true;
  }
}
