import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../models/contact";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Input() contacts: Contact[];


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
