import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoading$ = new Subject<boolean>();

  private timer$ = timer(5000);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.isLoading$.next(true);
    this.timer$.pipe(
      finalize(() => this.isLoading$.next(false))
    ).subscribe(() => this.router.navigate(['home']));
  }

}
