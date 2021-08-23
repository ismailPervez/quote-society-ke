import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // getting data from app component - parent component
  @Input() formActiveStatus: boolean;

  closeBtn = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
