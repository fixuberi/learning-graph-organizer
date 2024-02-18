import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GroupService } from './group.service';


@Resolver('Group')
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

  @Query('group')
  async getGroup(@Args('id') id: string) {
    return this.groupService.findOne(id);
  }

  @Query('groups')
  async getGroups() {
    return this.groupService.findAll();
  }

  @Mutation('createGroup')
  async createGroup(
    @Args('name') name: string,
    @Args('parentId') parentId: string,
  ) {
    return this.groupService.create(name, parentId);
  }

  @Mutation('updateGroup')
  async updateGroup(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('parentId') parentId: string,
  ) {
    return this.groupService.update(id, name, parentId);
  }

  @Mutation('deleteGroup')
  async deleteGroup(@Args('id') id: string) {
    return this.groupService.remove(id);
  }
}
