import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quote-container',
  templateUrl: './quote-container.component.html',
  styleUrls: ['./quote-container.component.css']
})
export class QuoteContainerComponent implements OnInit {

  // receive new quote from app component and send it, pass it down to quote component
  @Input() new_quote: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
