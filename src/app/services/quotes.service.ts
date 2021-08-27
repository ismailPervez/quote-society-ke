import { Injectable } from '@angular/core';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  data: Quote[] = [
    {
      id: 1,
      content: "speak a good word or remain silent",
      author: "Prophet Muhammad (peace be upon him)",
      user: "ismailpervez",
      upvotes: 0,
      downvotes: 0,
      createDate: new Date(),
      mostLiked: false
    }
  ]

  constructor() { }

  getData() {
    console.log("getData(): ", this.data)
    return this.data;
  }

  updateData(newData: Quote) {
    var dataLength = this.data.length;
    newData.id = dataLength + 1;
    this.data.push(newData);
    console.log("updateData(): ", this.data)
  }

  deleteData(data: Quote) {
    this.data = this.data.filter(quote => {
      if (quote.id !== data.id) {
        return quote;
      }
    })
  }

}
