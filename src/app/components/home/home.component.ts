import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import AOS from 'aos';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();

     // Element Motion Effect
    //  var moveForce = 20; // max popup movement in pixels
    //  var rotateForce = 10; // max popup rotation in deg
    //  if ($(window).width() >= 992) {
    //    // do something here
    //    $(document).mousemove(function (e) {
    //      var docX = $(document).width();
    //      var docY = $(document).height();
    //      var moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
    //      var moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce;
    //      var rotateY = (e.pageX / docX * rotateForce * 2) - rotateForce;
    //      var rotateX = -((e.pageY / docY * rotateForce * 2) - rotateForce);
    //      $('.motion-effect')
    //        .css('left', moveX + 'px')
    //        .css('top', moveY + 'px')
    //        .css('transform', 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
    //    });
    //  }
     
  }


  
  // onclick scroll to div
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  // ngx-intl-tel-input
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
 	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}



  
}
