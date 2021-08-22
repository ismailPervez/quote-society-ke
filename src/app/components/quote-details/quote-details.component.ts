import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  // we need the @Input() decorator since we need to access data passed down from parent component qpp-quote
  // since we are just accessing a single quote, we do not need [] after Quote, like this Quote[]
  @Input() quote: Quote;

  // now we need to take the upvotes and move it to the parent component so that we can add some styling to the quote that has most upvotes
  @Output() notify: EventEmitter<number> = new EventEmitter<number>()

  // everytime we upvote a quote, the event emmitter will send the current upvotes to the parent component

  // defining the icons that will act us our upvote and downvote button
  upvoteBtn = faArrowUp;
  downvoteBtn = faArrowDown;

  constructor() { }

  ngOnInit(): void {
  }

  // upvoting and downvoting functions
  upvote() {
    this.quote.upvotes += 1;
    this.notify.emit(this.quote.upvotes);
  }

  downvote() {
    this.quote.downvotes += 1;
  }

}
