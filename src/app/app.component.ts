import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { AddressBookService } from './services/address-book.service';
import { ServiceResponse } from './models/service-response';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AddressBook.UI';
  contacts: Contact[] = [];
  contactToEdit?: Contact;
  totalContacts?:number;
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'phoneNumber', 'updateColumn'];
  constructor (private addressBookService: AddressBookService){}

  //C#: void OnInitialized()
  ngOnInit() : void{
    this.addressBookService
    .getContacts()
    .subscribe((result: ServiceResponse<Contact[]>) => (this.contacts = result.data)); 
    
    // Get contacts total count
      this.getContactCount();
  } 

  editContact(contact: Contact){
    this.contactToEdit = contact;
  }

  createContact(){
      this.contactToEdit = new Contact();
  }

 
  updateContacts(contacts: Contact[]){
    this.contacts = contacts;
    this.getContactCount();
  }


  getContactCount()
  {
    // Total contact count
    this.addressBookService.getContactsCount().subscribe(res => this.totalContacts = res);
  }


  onPage(page?: any)
  {
    //console.log(pageEvent);
    // previousPageIndex, pageIndex, pageSize, length
    // use pageIndex amd PageSize to retrieve data from api
    this.addressBookService.getContactsPerPage(page.pageIndex, page.pageSize)
      .subscribe({
        next: response => {
          this.contacts = response.data;
        }

      });
  }

}


