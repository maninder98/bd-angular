import {Component, OnInit} from '@angular/core';
import {Contact} from "../models/contact";
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contacts: Contact[];
  newContact = {} as Contact;
  addContactForm: FormGroup; //for model driven form ReactiveFormsModule


  ngOnInit() {

    //for model driven form ReactiveFormsModule
    this.addContactForm = new FormGroup({

      'firstName': new FormControl(null, [Validators.required,
        Validators.pattern('^[a-zA-Z -]+$')]),
      'surname': new FormControl(null, [Validators.required,
        Validators.pattern('^[a-zA-Z -]+$')]),
      'email': new FormControl(null, [Validators.required, this.emailValidator])
    });

    this.contacts = [
      {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com', editing: false},
      {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com', editing: false},
      {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk', editing: false}
    ];
  }


  //Custom validator for email (model driven form )
  emailValidator(control: FormControl) {
    if (!control.value) {
      return null;
    }
    let pattern = /^.+@.+\.[a-zA-Z]+$/;
    return pattern.test(control.value) ? null : {email: {valid: false}};

  }


  addContact(form: NgForm): void {
    this.contacts.push(this.newContact);
    this.newContact = {} as Contact;
  }

  addContact2() {
    this.contacts.push(this.addContactForm.value);
    this.addContactForm.reset();

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
