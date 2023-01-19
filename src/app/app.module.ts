import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatPaginatorModule} from '@angular/material/paginator';       
import {MatTableModule} from '@angular/material/table';               // table materials
import {MatButtonModule} from '@angular/material/button';             // button materials
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';      // form field
import {MatDialogModule} from '@angular/material/dialog';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';             // modal

@NgModule({
  declarations: [
    AppComponent,
    EditContactComponent,
    ErrorModalComponent,
    DeleteModalComponent,           
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
