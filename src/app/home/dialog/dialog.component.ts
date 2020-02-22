import { Component, Input } from '@angular/core';
import { SmpDialogRef } from '@siemplify/ui';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() name: string;

  constructor(private dialogRef: SmpDialogRef<DialogComponent>) {}

  close(data?: any) {
    this.dialogRef.close(data);
  }
}
