import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterService } from './shared/Services/register.service';
import { ProductsComponent } from './pages/products/products.component';
import { HttpModule } from '@angular/http';
import { CountryService } from './shared/Services/Country.service';
import { UserService } from './shared/Services/user.service';
import { AuthGuard } from './shared/Services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppRoutes} from './app.routing';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import {TitleComponent} from './layout/admin/title/title.component';
import {AuthComponent} from './layout/auth/auth.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ChangePasswordComponent } from './pages/user/change-password/change-password.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    ProductsComponent,
    OrdersComponent,
    ChangePasswordComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ClickOutsideModule,
    SharedModule ,
    FormsModule,
    ReactiveFormsModule,

    HttpModule
  ],
  providers: [AuthGuard , UserService , CountryService  ,RegisterService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
