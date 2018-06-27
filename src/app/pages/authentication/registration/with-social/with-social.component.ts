import { CountryService } from './../../../../shared/Services/Country.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { RegisterService } from '../../../../shared/Services/register.service';
import { Admin } from '../../../../shared/Entities/admin';
import { Business } from '../../../../shared/Entities/Business';
import { UploadFileService } from '../../../../shared/Services/uploadservice/upload-file-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// declare var jquery:any;
// declare var $ :any;

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html',
  styleUrls: ['./with-social.component.css']
})
export class WithSocialComponent implements OnInit {



  // mar3y
  // **************upload image ************************

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  confirmAdminPass: string = "";

  admin: Admin = {

    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    active: 1,
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    postalCode: 0,
    lastActive: new Date(),
    registerDate: new Date(),
    role: "",
    username: "",
    adminLevel: "",
    available: true

  };
  business: Business = {

    id: 0,
    name: "",
    logo: "",
    contact: "",
    available: true,
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: 0,
    url: "",
    description: "",
    notes: "",
    paymentMethods: "",
    active: 1

  };
  selectedCountry = '';
  city: any = [{}]

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    $('.f1 fieldset:first').fadeIn('slow');
    this.SlideFun();

  }
  registerForm: FormGroup;
  // payment_methods:[];
  data: any = [{}];

  constructor(private registerService: RegisterService,
    private fb: FormBuilder, private country: CountryService,
    private uploadService: UploadFileService,
    private router: Router

  ) {

    this.getAllCountries();



    this.registerForm = fb.group({
      "BiName": [null, Validators.required],
      "BiContact": [null, Validators.compose([Validators.required, Validators.maxLength(11)])],
      "BiEmail": [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],

      "BiCountry": [null, Validators.required],
      "BiCity": [null, Validators.required],
      "BiState": [null, Validators.required],

      "BiPostalCode": [null, Validators.required],

      // "BiDescription":[null],
      //  this.:[null,Validators.required] ,

      "AdminFirstName": [null, Validators.required],
      "AdminLastName": [null, Validators.required],

      "AdminContact": [null, Validators.compose([Validators.required, Validators.maxLength(11)])],
      "AdminEmail": [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      "AdminPassword": [null, Validators.compose([Validators.required])],

      "AdminCountry": [null, Validators.required],
      "AdminCity": [null, Validators.required],
      "AdminState": [null, Validators.required],

    });



  }


  // **************************** mar3y *************************
  RegisterClick() {
    console.log("Register");


  }
  mySubmit({ value, valid }: { value: any, valid: boolean }) {
    // if (!valid) {
    //   console.log("Invalid");

    // } else {
    //   console.log("Valid");

    // }


    // check First Admin And Business Accounts if Exists 

    // ****************** save Business First ****************

    this.registerService.saveBusiness(this.business).subscribe(data => {

      this.registerService.saveAdmins(this.admin, data.id).subscribe(dd => {


        // redirect To Login To Login As Admin 
        this.router.navigate(['authentication/login']);



      }, error => {
        console.log(JSON.stringify(error.json()));
      });


    }, error => {
      console.log(JSON.stringify(error.json()));
    });

  }

  // on change event on country selected 
  onChange(newValue) {
    console.log("New Value : " + newValue);
    this.business.country = newValue;
    // change city combobox data 
    this.getCity(newValue);

  }

  getAllCountries() {
    this.country.getData().subscribe(data => {
      this.data = data;


    });
  }
  getCity(e) {
    this.registerService.getCity(e).subscribe(city => {
      this.city = city;
    });

  }

  // ********************** upload image *****************************


  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }

  // *********************************************************************

  SlideFun() {



    // next step
    $('.f1 .btn-next').on('click', function () {
      var parent_fieldset = $(this).parents('fieldset');
      var next_step = true;
      // navigation steps / progress steps
      var current_active_step = $(this).parents('.f1').find('.f1-step.active');
      var progress_line = $(this).parents('.f1').find('.f1-progress-line');


      // fields validation

      if (next_step) {
        parent_fieldset.fadeOut(400, function () {
          // change icons
          current_active_step.removeClass('active').addClass('activated').next().addClass('active');
          // progress bar
          bar_progress(progress_line, 'right');
          // show next step
          $(this).next().fadeIn();
          // scroll window to beginning of the form
          scroll_to_class($('.f1'), 20);
        });
      }

      // previous step
      $('.f1 .btn-previous').on('click', function () {
        // navigation steps / progress steps
        var current_active_step = $(this).parents('.f1').find('.f1-step.active');
        var progress_line = $(this).parents('.f1').find('.f1-progress-line');

        $(this).parents('fieldset').fadeOut(400, function () {
          // change icons
          current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
          // progress bar
          bar_progress(progress_line, 'left');
          // show previous step
          $(this).prev().fadeIn();
          // scroll window to beginning of the form
          scroll_to_class($('.f1'), 20);
        });
      });


    });


    function bar_progress(progress_line_object, direction) {
      var number_of_steps = progress_line_object.data('number-of-steps');
      var now_value = progress_line_object.data('now-value');
      var new_value = 0;
      if (direction == 'right') {
        new_value = now_value + (100 / number_of_steps);
      }
      else if (direction == 'left') {
        new_value = now_value - (100 / number_of_steps);
      }
      progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
    }



    function scroll_to_class(element_class, removed_height) {
      var scroll_to = $(element_class).offset().top - removed_height;
      if ($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({ scrollTop: scroll_to }, 0);
      }
    }

  }




}








// }

// ngOnInit() {




// }






