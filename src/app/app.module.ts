import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {NgModule} from "@angular/core";
import {ContactNamePipe} from "./pipes/contact-name.pipe";
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactNamePipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
