import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gcarrier',
  templateUrl: './gcarrier.component.html',
  styleUrls: ['./gcarrier.component.css']
})
export class GcarrierComponent implements OnInit {

  showForm: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  gcform = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    confirm_email: new FormControl('', Validators.required),
    telephone_number: new FormControl('', Validators.required),
    streetAdd: new FormControl('', Validators.required),
    address_2: new FormControl(''),
    city: new FormControl('', Validators.required),
    state: new FormControl('', [Validators.required]),
    zip_code: new FormControl('', Validators.required),
    birthDate: new FormControl(new Date(), Validators.required),
    height_feet: new FormControl('', Validators.required),
    height_in: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    children: new FormControl('', Validators.required),
    miscarriages: new FormControl('', Validators.required),
    C_sections: new FormControl('', Validators.required),
    children_living_with: new FormControl('', Validators.required),
    citizen: new FormControl('', Validators.required),
    abstain_alcohol: new FormControl('', Validators.required),
    pregnant: new FormControl('', Validators.required),
    breastfeeding: new FormControl('', Validators.required),
    Intrauterine: new FormControl('', Validators.required),
    Pre_eclampsia: new FormControl('', Validators.required),
    Placenta: new FormControl('', Validators.required),
    medications: new FormControl('', Validators.required),
    felony: new FormControl('', Validators.required),
    tribe: new FormControl('', Validators.required),
    nicotine: new FormControl('', Validators.required),
    drugs: new FormControl('', Validators.required),
    endometrial: new FormControl('', Validators.required),
    Essure: new FormControl('', Validators.required),
    hear_about_us: new FormControl('', Validators.required)
  })

  onSubmit() {
    if (this.gcform.valid) {
      console.log("Form Submitted!", this.gcform.value);
      /* this.Submit(this.service.form.value).subscribe((result) => {
        console.warn("Result is here", result);
      }) */
    }
  }

}
