import { CountryService } from './../../../../shared/Services/Country.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators  } from '@angular/forms';
import * as $ from 'jquery';
// declare var jquery:any;
// declare var $ :any;

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html',
  styleUrls: ['./with-social.component.css']
})
export class WithSocialComponent implements OnInit {

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    $('.f1 fieldset:first').fadeIn('slow');
    this.SlideFun();

  }
  registerForm : FormGroup;
  // payment_methods:[];
  data:any = [{}]

  constructor(private fb:FormBuilder , private country:CountryService) {

    this.getAllCountries();

    this.registerForm = fb.group({
      "BiName":[null,Validators.required],
      "BiContact":[null,Validators.compose([Validators.required ,Validators.maxLength(11) ])],
      "BiEmail":  [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],

      "BiCountry":[null,Validators.required],
      "BiCity":[null,Validators.required],
       "BiState":[null,Validators.required],

      "BiPostalCode":[null , Validators.required],

      // "BiDescription":[null],
    //  this.:[null,Validators.required] ,

      "AdminName":[null,Validators.required],
      "AdminContact":[null,Validators.compose([Validators.required ,Validators.maxLength(11) ])],
      "AdminEmail":  [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      "AdminPassword":[null , Validators.compose([Validators.required, Validators.pattern("[]")])],

      "AdminCountry":[null,Validators.required],
      "AdminCity":[null,Validators.required],
      "AdminState":[null,Validators.required],





    });


}



getAllCountries(){
  this.country.getData().subscribe(data=> {
  this.data = data ;


  });
}


SlideFun(){



  // next step
  $('.f1 .btn-next').on('click', function() {
  var parent_fieldset = $(this).parents('fieldset');
  var next_step = true;
  // navigation steps / progress steps
  var current_active_step = $(this).parents('.f1').find('.f1-step.active');
  var progress_line = $(this).parents('.f1').find('.f1-progress-line');


  // fields validation

  if( next_step ) {
   parent_fieldset.fadeOut(400, function() {
     // change icons
     current_active_step.removeClass('active').addClass('activated').next().addClass('active');
     // progress bar
    bar_progress(progress_line, 'right');
     // show next step
     $(this).next().fadeIn();
     // scroll window to beginning of the form
      scroll_to_class( $('.f1'), 20 );
   });
  }

  // previous step
  $('.f1 .btn-previous').on('click', function() {
    // navigation steps / progress steps
    var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    var progress_line = $(this).parents('.f1').find('.f1-progress-line');

    $(this).parents('fieldset').fadeOut(400, function() {
      // change icons
      current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
      // progress bar
    bar_progress(progress_line, 'left');
      // show previous step
      $(this).prev().fadeIn();
      // scroll window to beginning of the form
    scroll_to_class( $('.f1'), 20 );
    });
  });


  });


  function bar_progress(progress_line_object, direction) {
  var number_of_steps = progress_line_object.data('number-of-steps');
  var now_value = progress_line_object.data('now-value');
  var new_value = 0;
  if(direction == 'right') {
    new_value = now_value + ( 100 / number_of_steps );
  }
  else if(direction == 'left') {
    new_value = now_value - ( 100 / number_of_steps );
  }
  progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
  }



  function scroll_to_class(element_class, removed_height) {
  var scroll_to = $(element_class).offset().top - removed_height;
  if($(window).scrollTop() != scroll_to) {
    $('html, body').stop().animate({scrollTop: scroll_to}, 0);
  }
  }

  }




}








// }

// ngOnInit() {




// }




// getCity(e){
//     this.country.getCity(e.target.value).subscribe(city =>{

//       console.log(city);

// });

// }

