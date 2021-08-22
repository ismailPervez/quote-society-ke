import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  newData: object;

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

  getUpvotes(data: object) {
    this.newData = data;
    // console.log(this.newData)
    this.updateQuotes(this.newData)
  }

  // this method updates the quotes
  updateQuotes(data: any) {
    this.quotes.map(quote => {
      if (data.id === quote.id) {
        quote.upvotes = data.upvotes
      }
    })

    this.quotes = this.quotes.sort(this.sortVotes)
    console.log(this.quotes)
  }

  // getting the quote with the highest upvote
  sortVotes(a: any, b: any) {
    if ( a.upvotes > b.upvotes ){
      return -1;
    }
    if ( a.upvotes < b.upvotes ){
      return 1;
    }
    return 0;
  }


  // after getting the upvote data from the child component, we need to update the quotes, specifically, the quote item with the gotten id from child component
  // then we sort this data, and if it has the highest upvote, we add a styling

}
