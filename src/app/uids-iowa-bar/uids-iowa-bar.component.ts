import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExternalLink } from '../models/external-link';
import { HeaderUser } from '../models/header-user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'uids-iowa-bar',
  templateUrl: './uids-iowa-bar.component.html',
  styleUrls: [
    './uids-iowa-bar.component.css',
    './logo.css',
    './iowa-bar.css',
    'site-name.css',
  ],
})
export class UidsIowaBarComponent implements OnInit {
  @Input() siteName = 'Awesome Site Name';
  @Input() externalLinks?: ExternalLink[];
  @Input() user?: HeaderUser;
  @Input() showStopImpersonation = false;
  @Output() stopImpersonation = new EventEmitter<void>();
  @Input() showTestWarning = false;

  constructor(
    private readonly loginService: LoginService,
  ) {}

  ngOnInit() {
    this.user = {
      userName: 'abc',
      originalUserName: 'changhxu',
    };
  }

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
  }
}
