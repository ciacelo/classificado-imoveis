import { Component, OnInit, Inject } from '@angular/core';
import { Property } from 'src/app/service/property/property';
import { PropertyService } from 'src/app/service/property/property.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  validateForm: FormGroup;
  demoValue = 100;
  constructor(@Inject('PropertyService') private propertyService: PropertyService , private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      note: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      type: [null, [Validators.required]]
    });
  }

getProperties(): Property[]{
  return this.propertyService.getProperties();
}


submitForm(): void {
  for (const i in this.validateForm.controls) {
    this.validateForm.controls[i].markAsDirty();
    this.validateForm.controls[i].updateValueAndValidity();
  }
}

search(event: Event): void{
  console.log(event);
}

genderChange(value: string): void {
  this.validateForm.get('note');
}
}

