import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tags = [];

  constructor() { }

  ngOnInit() { }

  newTag(data) {

    if (data.key === 'Enter' || data.key === ',') {
      if (data.target.value) this.tags.push(data.target.value);
      data.target.value = '';
    }
  }

  removeTag(index) {
    this.tags.splice(index, 1)
  }
}
