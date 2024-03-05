import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GetAllGroupsGQL } from '../../../../core/graphql/codegen.service';

@Component({
  selector: 'learning-graph-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrl: './knowledge-base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnowledgeBaseComponent {
  allGroupsQuery = inject(GetAllGroupsGQL);
  groups$ = this.allGroupsQuery.watch().valueChanges;
}
