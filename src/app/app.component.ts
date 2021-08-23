import { Component } from '@angular/core';
import { Quote } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeStatus: boolean = false;
  newQuote: Quote;

  // data for toggling form
  setActiveStatus(data: boolean) {
    this.activeStatus = data
  }

  // data for new quote
  /**
   * after getting the new quote, we need to send it to the quote component - which means it will first pass through quote-container component
   */
  getNewQuote(data: Quote) {
    console.log(data)
    this.newQuote = data;
  }
}
