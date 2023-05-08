import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.scss']
})
export class ChecklistFormComponent {

  form:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(controlsConfig:{
      collaboratorName: [null],
      cpf:[null],
      contribution:[null]

    });
  }

  onSubmit() {

  }

  onCancel() {

  }

}
