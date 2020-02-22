import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmpButtonModule, SmpDialogComponentsModule, SmpDialogModule, SmpSelectModule } from '@siemplify/ui';
import { DialogComponent } from './dialog/dialog.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SmpSelectModule,
    SmpDialogModule.forChild(),
    SmpDialogComponentsModule,
    SmpButtonModule
  ],
  declarations: [HomeComponent, DialogComponent],
  entryComponents: [DialogComponent]
})
export class HomeModule {}
