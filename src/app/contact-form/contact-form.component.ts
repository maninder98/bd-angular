import {Component, OnInit} from '@angular/core';
import {Contact} from "../models/contact";


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contacts: Contact[];
  newContact = {} as Contact;
  bedrag = 50.99;


  ngOnInit() {
    this.contacts = [
      {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com', editing: false},
      {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com', editing: false},
      {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk', editing: false}
    ];
  }


  addContact(): void {
    this.contacts.push(this.newContact);
    this.newContact = {} as Contact;
  }

  deleteContact(contact: Contact) {
    const index: number = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1)
  }

  editContact(contact) {
    contact.editing = true;
  }

  saveContact(contact) {
    contact.editing = false;
  }
}
