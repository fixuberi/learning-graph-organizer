import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';

const routes: Routes = [
  {path: '', component: KnowledgeBaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeBaseRoutingModule { }
