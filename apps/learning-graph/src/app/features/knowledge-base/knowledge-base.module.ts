import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeBaseRoutingModule } from './knowledge-base-routing.module';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';


@NgModule({
  declarations: [KnowledgeBaseComponent],
  imports: [
    CommonModule,
    KnowledgeBaseRoutingModule
  ]
})
export class KnowledgeBaseModule { }
