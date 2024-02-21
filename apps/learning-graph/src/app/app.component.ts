import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetAllGroupsGQL } from './core/graphql/codegen.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'learning-graph-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  allGroupsQuery = inject(GetAllGroupsGQL);
  groups$  = this.allGroupsQuery.watch().valueChanges
  title = 'learning-graph';
}
