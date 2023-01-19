import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})

// Could be renamed as ConfirmComponent
// Could inject data for eg: naming of buttons and texts
// constructor(public dialogRef: MatDialogRef<DeleteModalComponent>, @Inject(MAT_DIALOG_DATA) public data: SomeDataObjectWithParametersForEgButtonsEtc) {}
export class DeleteModalComponent {

  constructor(public dialogRef: MatDialogRef<DeleteModalComponent>) {}

  onYesClick()
  {
    this.dialogRef.close(true);
  }

  onNoClick()
  {
    this.dialogRef.close(false);
  }



  

}


