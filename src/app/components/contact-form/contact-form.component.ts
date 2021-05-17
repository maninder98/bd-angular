import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Contact} from "../../models/contact";

//Custom validator for email (model driven form )
function emailValidator(control: FormControl) {
  if (!control.value) {
    return null;
  }
  let pattern = /^.+@.+\.[a-zA-Z]+$/;
  return pattern.test(control.value) ? null : {email: {valid: false}};

}

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  // contacts: Contact[];
  newContact = {} as Contact;
  addContactForm: FormGroup; //for model driven form ReactiveFormsModule
  @Output() add = new EventEmitter<Contact>();


  ngOnInit() {

    //for model driven form ReactiveFormsModule
    this.addContactForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required,
        Validators.pattern('^[a-zA-Z -]+$')]),
      'surname': new FormControl(null, [Validators.required,
        Validators.pattern('^[a-zA-Z -]+$')]),
      'email': new FormControl(null, [Validators.required, emailValidator])
    });

    /*   this.contacts = [
         {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com', editing: false},
         {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com', editing: false},
         {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk', editing: false}
       ];*/
  }


  addContact(form: NgForm): void {
    this.add.emit(this.newContact);
    this.newContact = {} as Contact;
    form.reset();
  }


  //model driven form
  addContact2() {
    this.add.emit(this.addContactForm.value);
    this.addContactForm.reset();
  }


}
