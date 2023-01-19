import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';
import { ServiceResponse } from '../models/service-response';
 
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  url = "AddressBook";
  apiUrl ="";

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.addressBookApiUrl;
  }

   /* starting to see 405 error
      No solution found
  */


  public getContacts() : Observable<ServiceResponse<Contact[]>> {
    return this.httpClient.get<ServiceResponse<Contact[]>>(`${this.apiUrl}/${this.url}`);
  }

  public getContactsCount() : Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/${this.url}/contacts/count`);
  }

  public getContactsPerPage(page: number, contactsPerPage: number) : Observable<ServiceResponse<Contact[]>> {
    return this.httpClient.get<ServiceResponse<Contact[]>>(`${this.apiUrl}/${this.url}/${page}/${contactsPerPage}`);
  }

  public createContact(contact: Contact) : Observable<ServiceResponse<Contact>>
  {
      return this.httpClient.post<ServiceResponse<Contact>>('https://localhost:7147/api/AddressBook', contact)
  }

  public updateContact(contact: Contact): Observable<ServiceResponse<Contact>>{
    return this.httpClient.put<ServiceResponse<Contact>>('https://localhost:7147/api/AddressBook', contact);
  }

 

  public deleteContact(contact: Contact){
    return this.httpClient.delete<ServiceResponse<Contact>>(`${this.apiUrl}/${this.url}/${contact.id}`);
  }


}
