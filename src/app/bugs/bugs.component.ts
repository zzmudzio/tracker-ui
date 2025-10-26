import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BugsService } from '../services/bugs.service';
import { Bug } from './bug.model';
import { DatePipe } from '@angular/common';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-bugs',
  imports: [RouterModule, DatePipe],
  templateUrl: './bugs.component.html',
  styleUrl: './bugs.component.css'
})
export class BugsComponent {

  bugs$!: Observable<Bug[]>;
  
  constructor(private activatedRoute: ActivatedRoute, private bugsService: BugsService) {}

  ngOnInit() {
    this.bugs$ = this.activatedRoute.params.pipe(
      switchMap((param) => {
        switch(param['type']) {
          case 'all':
            return this.bugsService.getAllBugs();
          default:
            return this.bugsService.getAllBugs();
        }
      }))
  }

}