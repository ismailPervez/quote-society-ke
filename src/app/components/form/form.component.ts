import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Quote } from 'src/app/models/quote';

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

  // value that will be used
  formStatus: number;

  closeBtn = faTimes;

  constructor() { }

  // create a new quote object and update it from values in field
  newQuote = new Quote(0, "quote content", "author", "user", 0, 0, new Date(), false);
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges has fired!")
    console.log("status is: ", changes["formActiveStatus"].currentValue)
    this.formStatus = changes["formActiveStatus"].currentValue;

  }

  // form submit
  submit(formDetails: any) {
    console.log('submitted!', formDetails.form.invalid)
    if (formDetails.form.invalid) {
      alert("make sure to fill in any fields!")
    }

    else {
      // console.log(this.newQuote);
      this.sendNewQuote.emit(this.newQuote)
    }
  }

  // close popup 
  closeForm() {
    this.formStatus = -this.formStatus;
    console.log(this.formStatus)
  }

}
