import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: string[] = [
    "master ougway said this",
    "this is a quote",
    "he is the kung fu panda"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
