import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // this is the value that will be sent to the main app component and then sent to form component in order to toggle it
  @Output() formActiveStatus: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm() {
    var number = Math.random() * 10;
    this.formActiveStatus.emit(number);
    console.log("toggled: ", number);
  }

}
