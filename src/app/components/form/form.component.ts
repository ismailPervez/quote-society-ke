import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Quote } from 'src/app/models/quote';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {

  // getting data from app component - parent component
  @Input() formActiveStatus: number;
  // emmit/send the new created quote to the quote component
  @Output() sendNewQuote: EventEmitter<Quote> = new EventEmitter<Quote>();
  // newQuote: Quote;

  // value that will be used
  formStatus: number;

  // values from form
  content: string;
  author: string;
  user: string;

  closeBtn = faTimes;

  constructor(private quotesService: QuotesService) { }

  // create a new quote object and update it from values in field
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges has fired!")
    console.log("status is: ", changes["formActiveStatus"].currentValue)
    this.formStatus = changes["formActiveStatus"].currentValue;

  }

  ngOnInit() {
  }

  // form submit
  submit(formDetails: any) {
    if (!this.content) {
      alert("please add the quote!");
    }

    else if (!this.author) {
      alert("please add an author");
    }

    else if (!this.user) {
      alert("please add a username for the user")
    }

    else {
      // this.sendNewQuote.emit(this.newQuote)
      var newQuote = new Quote(0, this.content, this.author, this.user, 0, 0, new Date(), false);
      this.quotesService.updateData(newQuote);
    }
  }

  // close popup 
  closeForm() {
    this.formStatus = -this.formStatus;
    console.log(this.formStatus)
  }

}
