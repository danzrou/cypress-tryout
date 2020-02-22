import { Component } from '@angular/core';
import { SmpDialogService } from '@siemplify/ui';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  options = [
    {
      label: '1',
      value: 1
    },
    {
      label: '2',
      value: 2
    }
  ];

  value;

  constructor(private dialog: SmpDialogService) {}

  openDialog(name: string) {
    this.dialog.open(DialogComponent, {
      content: {
        name
      }
    });
  }
}
