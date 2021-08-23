import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // getting data from app component - parent component
  @Input() formActiveStatus: boolean;
  // emmit/send the new created quote to the quote component
  @Output() sendNewQuote: EventEmitter<Quote> = new EventEmitter<Quote>();

  closeBtn = faTimes;

  constructor() { }

  // create a new quote object and update it from values in field
  newQuote = new Quote(0, "quote content", "author", "user", 0, 0, false);
  ngOnInit(): void {
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

}
