import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { QuoteContainerComponent } from './components/quote-container/quote-container.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { FormComponent } from './components/form/form.component';
// for using form
import { FormsModule } from '@angular/forms';
import { TimeCountPipe } from './pipes/time-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteContainerComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    FormComponent,
    TimeCountPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
