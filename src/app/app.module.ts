import { HttpModule } from '@angular/http';
import { CountryService } from './shared/Services/Country.service';
import { UserService } from './shared/Services/user.service';
import { RegisterService } from './shared/Services/register.service';
import { ProductService } from './shared/Services/product.service';

import { AuthGuard } from './shared/Services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import { UploadFileService } from "./shared/Services/uploadservice/upload-file-service.service";

import { RegisteruploadComponent } from "./pages/authentication/registration/registerupload/registerupload.component";
// import { WithBgImageComponent } from "./pages/authentication/login/with-bg-image/with-bg-image.component";
import { ProductsComponent } from "./pages/products/products.component";
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent
    ,

    RegisteruploadComponent,
    // WithBgImageComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ClickOutsideModule,
    SharedModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,
    UserService,
    CountryService,
    RegisterService,
    UploadFileService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
