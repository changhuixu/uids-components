import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExternalLink } from '../models/external-link';
import { HeaderUser } from '../models/header-user';
import { InternalRoute } from '../models/internal-route';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'uiowa-header',
  templateUrl: './uiowa-header.component.html',
  styleUrls: [
    './uiowa-header.component.css',
    './logo.css',
    './site-name.css',
    './iowa-bar.css',
    './main-menu.css',
    './external-links.css',
  ],
})
export class UiowaHeaderComponent implements OnInit {
  @Input() siteName = 'Awesome Site Name';
  @Input() externalLinks?: ExternalLink[];
  @Input() internalRoutes?: InternalRoute[];
  @Input() user?: HeaderUser;
  @Input() showStopImpersonation = false;
  @Output() stopImpersonation = new EventEmitter<void>();
  @Input() showTestWarning = false;
  showNavBar = false;

  constructor(private readonly loginService: LoginService) {}

  ngOnInit() {}

  logout() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login();
  }
}