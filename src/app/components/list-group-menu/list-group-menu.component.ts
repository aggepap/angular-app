import { Component } from '@angular/core';
import type { MenuEntry } from '../../shared/interfaces/menu-entry';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css',
})
export class ListGroupMenuComponent {
  menu: MenuEntry[] = [
    { text: 'Component Input Example', routerLink: 'component-input-example' },
    { text: '@for Directive Example', routerLink: 'for-directive-example' },
    { text: 'Event Bind Example', routerLink: 'event-bind-example' },
    { text: 'Simple Data Table', routerLink: 'simple-datatable' },
    { text: 'Output Example', routerLink: 'output-example' },
    {
      text: 'Template Driver Form Example',
      routerLink: 'template-driven-forms',
    },
    { text: 'Reactive Forms Example', routerLink: 'reactive-forms' },
    { text: 'Http Client Example', routerLink: 'http-client-example' },
    { text: 'User Registration Example', routerLink: 'user-registration' },
    {
      text: 'Restricted Content example',
      routerLink: 'restricted-content-example',
    },
    {
      text: 'CRUD Example',
      routerLink: 'crud-example',
    },
  ];
}
