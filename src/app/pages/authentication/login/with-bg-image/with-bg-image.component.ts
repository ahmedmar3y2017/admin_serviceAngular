import { UserService } from './../../../../shared/Services/user.service';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { AuthComponent } from './../../../../layout/auth/auth.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../../shared/Services/register.service';
import { Admin } from '../../../../shared/Entities/admin';


@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html',
  styleUrls: ['./with-bg-image.component.css']
})
export class WithBgImageComponent implements OnInit {
  IsAuth: boolean;


  complexForm: FormGroup;

  admin: Admin[];

  constructor( private loginService: UserService, private loginRouter: Router, fb: FormBuilder) {

    this.complexForm = fb.group({

      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],

      'password': [null, Validators.required],

    });

   

  }

  ngOnInit() {

  }

  loginFun(e) {
    e.preventDefault();
    var user = e.target.elements[0].value;
    var pass = e.target.elements[1].value;


    console.log(user);
    if (user == "admin@gmail.com" && pass == "admin") {
      this.loginService.SetUserLoggedIn();
      this.loginRouter.navigate(['dashboard']);
    }
    else {
      this.loginRouter.navigate(['authentication/login']);
    }
  }

}
