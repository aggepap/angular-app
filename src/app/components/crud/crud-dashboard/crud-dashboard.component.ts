import { Component } from '@angular/core';
import { CrudCreateExampleComponent } from '../crud-create-example/crud-create-example.component';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-crud-dashboard',
  standalone: true,
  imports: [CrudCreateExampleComponent, CrudNavbarComponent],
  templateUrl: './crud-dashboard.component.html',
  styleUrl: './crud-dashboard.component.css',
})
export class CrudDashboardComponent {}
