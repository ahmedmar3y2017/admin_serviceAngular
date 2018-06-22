import { ProductsComponent } from './pages/products/products.component';
import { AuthGuard } from './shared/Services/auth.guard';
import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

export const AppRoutes: Routes = [

  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path:'',
        redirectTo: 'authentication/login',
        pathMatch:'full',


      } ,
      {
        path:'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule',


      } ,

    ]
  } ,
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        canActivate:[AuthGuard],
        loadChildren: './pages/dashboard/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      }, {
        path: 'basic',
        loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      }, {
        path: 'notifications',
        loadChildren: './pages/ui-elements/advance/notifications/notifications.module#NotificationsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module#BasicBootstrapModule',
      }, {
        path: 'map',
        loadChildren: './pages/map/google-map/google-map.module#GoogleMapModule',
      }, {
        path: 'user',
        loadChildren: './pages/user/profile/profile.module#ProfileModule'
      }, {
        path: 'simple-page',
        loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      },
      {
        path: 'products',
        component: ProductsComponent,
        // loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'

      }
    ]
  }
];
