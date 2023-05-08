import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Checklist } from '../model/checklist';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  //private readonly API = '/assets/checklist.json';
  //private readonly API = 'checklist';
  private readonly API = 'http://localhost:8080/checklist';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Checklist[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(checklists => console.log(checklists))
    );
  }
}
