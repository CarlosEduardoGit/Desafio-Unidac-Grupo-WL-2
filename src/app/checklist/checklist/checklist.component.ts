import { ChecklistService } from './../services/checklist.service';
import { Component } from '@angular/core';
import { Checklist } from '../model/checklist';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {

  checklists$: Observable<Checklist[]>;
  displayedColumns = ['collaboratorName', 'cpf', 'contribution','actions'];

  constructor(
    private checklistService: ChecklistService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute


    ) {

    this.checklists$ = this.checklistService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar registro.');
        return of([])
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit():void {

  }

  onAdd() {
    //console.log('onAdd');
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
