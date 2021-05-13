import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
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
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
