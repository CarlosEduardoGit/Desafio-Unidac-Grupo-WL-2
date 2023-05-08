import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ChecklistRoutingModule } from './checklist-routing.module';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistFormComponent } from './checklist-form/checklist-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChecklistComponent,
    ChecklistFormComponent
  ],
  imports: [
    CommonModule,
    ChecklistRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ChecklistModule { }
