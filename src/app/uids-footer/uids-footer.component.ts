import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uids-footer, [uids-footer]',
  templateUrl: './uids-footer.component.html',
  styleUrls: [
    './uids-footer.component.css',
    '../uids-iowa-bar/logo.css',
    '../flex.css',
  ],
})
export class UidsFooterComponent implements OnInit {
  year = 2021;
  constructor() {}

  ngOnInit(): void {
    const today = new Date();
    this.year = today.getFullYear();
  }
}
