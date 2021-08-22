import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  // we need the @Input() decorator since we need to access data passed down from parent component qpp-quote
  // since we are just accessing a single quote, we do not need [] after Quote, like this Quote[]
  @Input() quote: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
