import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fluent-validation',
  templateUrl: './fluent-validation.component.html',
  styleUrls: ['./fluent-validation.component.css']
})

export class FluentValidationComponent implements OnInit {
  model: any = {};

  constructor() { }
  ngOnInit() {
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
