import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnChanges {

  newData: object;

  // new quote from quote-container (from form)
  @Input() newQuote: Quote;

  quotes: Quote[] = [
    {
      id: 1,
      content: "this is a quote",
      author: "john wick",
      user: "ismailpervez",
      upvotes: 0,
      downvotes: 0,
      createDate: new Date(),
      mostLiked: false
    },
    {
      id: 2,
      content: "be like water",
      author: "bruce lee",
      user: "ismailpervez",
      upvotes: 0,
      downvotes: 0,
      createDate: new Date(),
      mostLiked: false
    },
    {
      id: 3,
      content: "learn like you will live forever",
      author: "mahatma gandi",
      user: "ismailpervez",
      upvotes: 0,
      downvotes: 0,
      createDate: new Date(),
      mostLiked: false
    }
  ]

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // update the quotes
    if (changes["newQuote"].currentValue !== undefined) {
      let quote = changes["newQuote"].currentValue

      // before pushing to quote / updating the quotes
      // lets check the length of the quotes array and set the id of the new quote to the last index
      var quotesLength = this.quotes.length
      quote.id = quotesLength + 1;
      this.quotes.push(quote);
    }
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

    this.sortVotes()
  }

  // getting the quote with the highest upvote
  sortVotes() {
    var mostUpvotes = 0;
    var mostUpvotesID: any;
    this.quotes.map(quote => {
      if (mostUpvotes < quote.upvotes) {
        mostUpvotes = quote.upvotes;
        mostUpvotesID = quote.id;
        quote.mostLiked = true;
      }

      else {
        quote.mostLiked = false;
      }
    })

    // this sets the mostLiked property of the other quotes to false
    this.quotes.map(quote => {
      if (quote.id !== mostUpvotesID) {
        quote.mostLiked = false;
      }
    })
  }

  // add new quote and update current quote list
  addQuote() {
    this.quotes.push(this.newQuote)
  }

  // delete quote
  deleteQuote(quote: Quote) {
    var deletedQuote = quote.id;
    this.quotes = this.quotes.filter(quote => {
      if (quote.id !== deletedQuote) {
        return quote;
      }
    })
  }

  /**
   * I think, quote should have another property called mostLiked, which will be a boolean and all will start out as false, but as a user upvotes, and the sortVotes() method runs, we update the quote property mostLiked to true for the quote which has most upvotes
   */


  // after getting the upvote data from the child component, we need to update the quotes, specifically, the quote item with the gotten id from child component
  // then we sort this data, and if it has the highest upvote, we add a styling

}
