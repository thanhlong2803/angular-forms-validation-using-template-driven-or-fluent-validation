import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-validation';

  isChoice: boolean = true;
  onSelectionChange(entry): void {
    this.isChoice = entry;
  }
}
