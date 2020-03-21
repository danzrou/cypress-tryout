import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmpButtonModule, SmpPopoverModule, SmpSpinnerModule } from '@siemplify/ui';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SmpButtonModule,
    SmpPopoverModule,
    SmpSpinnerModule
  ]
})
export class DashboardModule { }
