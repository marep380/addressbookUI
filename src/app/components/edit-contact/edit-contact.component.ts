import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { AddressBookService } from 'src/app/services/address-book.service';
import { ServiceResponse } from 'src/app/models/service-response';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import {MatDialog} from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { Observable } from 'rxjs';


export interface ConfirmData
{
  isConfirmed:boolean;
}

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})

export class EditContactComponent implements OnInit {
  @Input() contact?: Contact;
  @Output() contactsUpdated = new EventEmitter<Contact[]>(); // update event

  constructor(private addressBookService: AddressBookService, public dialog: MatDialog){}

  ngOnInit() : void
  {
    
  }

  updateContact(contact: Contact)
  {
    this.addressBookService.updateContact(contact)
      .subscribe({
        next : (response) => this.addressBookService.getContacts().subscribe((res) => this.contactsUpdated.emit(res.data)),
        error : (err) => {
         // console.log("Update error: " + err.error.message)
         this.openErrorDialog(err.error.message);
        }
      });

  }


  deleteContact(contact: Contact)
  {   
    //this.addressBookService.deleteContact(contact);  
   
    // opens dialog/modal
    const dialogRef = this.dialog.open(DeleteModalComponent)
    .afterClosed().subscribe({next: response => {
      if(response)
      {
            // User clicked on OK/Delete
            this.addressBookService.deleteContact(contact);          
      }
      else
      {
        // Cancle
      }
    }    
    });
  }

  createContact(contact: Contact)
  {
    this.addressBookService.createContact(contact)
      .subscribe({
        next: (res) => {
          this.addressBookService.getContacts().subscribe((res) => this.contactsUpdated.emit(res.data));
          this.contact = new Contact();
        }, 
        error: (err) => {
          //console.log("(CREATE) Error occured: " + err.message + " " + err.error.message + " | " + err.error.successfull)
          this.openErrorDialog(err.error.message);
      }
      });

  }

  // Opens dialog/modal to show the error
  openErrorDialog(error:Text) {
    this.dialog.open(ErrorModalComponent,
      {
        data:{
          error: error                    
        }
      });
  }



}
