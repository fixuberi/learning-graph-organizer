import { Group, Item } from '@learning-graph/graph-ql';

export type FromDbGroup = Omit<
  Group,
  'parentGroup' | 'childGroups' | 'items'
> & {
  parentGroupId?: string;
  childGroupIds: Array<string>;
  itemIds: Array<string>;
};

export const GROUPS: FromDbGroup[] = [
  {
    id: '1',
    name: 'frontend',
    childGroupIds: ['2', '3'],
    itemIds: [],
  },
  {
    id: '2',
    name: 'angular',
    parentGroupId: '1',
    childGroupIds: [],
    itemIds: ['101', '102'],
  },
  {
    id: '3',
    name: 'ngrx',
    parentGroupId: '1',
    childGroupIds: [],
    itemIds: ['103', '104'],
  },
  {
    id: '4',
    name: 'backend',
    childGroupIds: ['5', '6'],
    itemIds: [],
  },
  {
    id: '5',
    name: 'nestjs',
    parentGroupId: '4',
    childGroupIds: [],
    itemIds: ['105', '106'],
  },
  {
    id: '6',
    name: 'db design',
    parentGroupId: '4',
    childGroupIds: [],
    itemIds: ['107', '108'],
  },
  {
    id: '7',
    name: 'devops',
    childGroupIds: ['8', '9'],
    itemIds: [],
  },
  {
    id: '8',
    name: 'Nx',
    parentGroupId: '7',
    childGroupIds: [],
    itemIds: ['109', '110'],
  },
  {
    id: '9',
    name: 'aes',
    parentGroupId: '7',
    childGroupIds: [],
    itemIds: ['111', '112'],
  },
];

export const ITEMS: Item[] = [
  { id: '101', name: 'Angular Component 1' },
  { id: '102', name: 'Angular Component 2' },
  { id: '103', name: 'Ngrx Action 1' },
  { id: '104', name: 'Ngrx Action 2' },
  { id: '105', name: 'NestJS Controller 1' },
  { id: '106', name: 'NestJS Controller 2' },
  { id: '107', name: 'Database Design Schema 1' },
  { id: '108', name: 'Database Design Schema 2' },
  { id: '109', name: 'Nx Script 1' },
  { id: '110', name: 'Nx Script 2' },
  { id: '111', name: 'AES Deployment Script 1' },
  { id: '112', name: 'AES Deployment Script 2' },
];
