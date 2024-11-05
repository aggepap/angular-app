import type { Routes } from '@angular/router';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { OutputExampleComponent } from './components/output-example/output-example.component';
import { TemplateDriverFormsComponent } from './components/template-driver-forms/template-driver-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { RestrictedContentExampleComponent } from './components/restricted-content-example/restricted-content-example.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

import { authGuard } from './shared/guards/auth.guard';
import { CrudDashboardComponent } from './components/crud/crud-dashboard/crud-dashboard.component';
import { CrudCreateExampleComponent } from './components/crud/crud-create-example/crud-create-example.component';
import { CrudReadExampleComponent } from './components/crud/crud-read-example/crud-read-example.component';
import { CrudUpdateExampleComponent } from './components/crud/crud-update-example/crud-update-example.component';
import { CrudDeleteExampleComponent } from './components/crud/crud-delete-example/crud-delete-example.component';

export const routes: Routes = [
  { path: 'component-input-example', component: InputExampleComponent },
  { path: 'for-directive-example', component: ForDirectiveExampleComponent },
  { path: 'event-bind-example', component: EventBindExampleComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'simple-datatable', component: SimpleDatatableComponent },
  { path: 'output-example', component: OutputExampleComponent },
  { path: 'template-driven-forms', component: TemplateDriverFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'http-client-example', component: HttpClientExampleComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  {
    path: 'restricted-content-example',
    component: RestrictedContentExampleComponent,
    canActivate: [authGuard],
  },
  {
    path: 'crud-example',
    component: CrudDashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'crud-example/create',
    component: CrudCreateExampleComponent,
    canActivate: [authGuard],
  },
  {
    path: 'crud-example/read',
    component: CrudReadExampleComponent,
    canActivate: [authGuard],
  },
  {
    path: 'crud-example/update',
    component: CrudUpdateExampleComponent,
    canActivate: [authGuard],
  },
  {
    path: 'crud-example/delete',
    component: CrudDeleteExampleComponent,
    canActivate: [authGuard],
  },

  { path: 'login', component: UserLoginComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
