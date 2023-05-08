import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistFormComponent } from './checklist-form/checklist-form.component';


const routes: Routes = [
  { path: '', component: ChecklistComponent },
  { path: 'new', component: ChecklistFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }
