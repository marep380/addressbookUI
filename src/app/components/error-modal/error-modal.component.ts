import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ErrorDialogData } from 'src/app/models/error';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent {

   constructor(@Inject(MAT_DIALOG_DATA) public data: ErrorDialogData) {}
}
