import { Component } from '@angular/core';
import { ExternalLink } from './models/external-link';
import { HeaderUser } from './models/header-user';
import { InternalRoute } from './models/internal-route';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  externalLinks?: ExternalLink[];
  internalRoutes?: InternalRoute[];
  user?: HeaderUser;

  ngOnInit() {
    this.user = {
      userName: 'abc',
      originalUserName: 'changhxu',
    };

    this.externalLinks = [
      new ExternalLink(
        'Employee Self-Service',
        'https://hris.uiowa.edu/portal18'
      ),
      new ExternalLink('Grant Accounting Office', 'https://gao.fo.uiowa.edu/'),
      new ExternalLink(
        'PAR Instructions',
        'https://gao.fo.uiowa.edu/effort-reporting/par-instructions'
      ),
    ];

    this.internalRoutes = [
      new InternalRoute('Home', 'home'),
      new InternalRoute('Faculty', 'faculty'),
      new InternalRoute('Undergraduate Students', 'undergrad'),
      new InternalRoute('Graduate Students', '', [
        new InternalRoute('Program Overview', 'grad/overview'),
        new InternalRoute('Master Degree', 'grad/master'),
        new InternalRoute('PhD Degree', 'grad/phd'),
      ]),
    ];
  }
}
