import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    {
      id: 1,
      content: "this is a quote",
      author: "john wick",
      user: "ismailpervez",
      upvotes: 0,
      downvotes: 0
    },
    {
      id: 2,
      content: "be like water",
      author: "bruce lee",
      user: "ismailpervez",
      upvotes: 0,
      downvotes: 0
    },
    {
      id: 3,
      content: "learn like you will live forever",
      author: "mahatma gandi",
      user: "ismailpervez",
      upvotes: 0,
      downvotes: 0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
