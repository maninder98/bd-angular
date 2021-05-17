import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {NgModule} from "@angular/core";
import {ContactNamePipe} from "./pipes/contact-name.pipe";
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactRowComponent} from './components/contact-row/contact-row.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactNamePipe,
    ContactListComponent,
    ContactRowComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
