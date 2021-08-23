import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // this is the value that will be sent to the main app component and then sent to form component in order to toggle it
  @Output() formActiveStatus: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.formActiveStatus.emit(true);
    console.log("toggled")
  }

}
