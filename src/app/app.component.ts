import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeStatus: boolean = false;

  setActiveStatus(data: boolean) {
    this.activeStatus = data
  }
}
