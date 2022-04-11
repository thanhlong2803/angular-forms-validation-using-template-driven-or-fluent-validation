import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})

export class FormValidationComponent implements OnInit {
  model: any = {};

  constructor() { }
  ngOnInit() {
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
