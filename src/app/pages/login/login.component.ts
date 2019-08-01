import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  form: FormGroup;

  constructor(private fb: FormBuilder, @Inject('AuthService') private authService: AuthService) {
    console.log(this.authService.isAuthenticated());
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
      
      if(this.form.valid){
        let email: string =  this.form.getRawValue().email;
        let password: string =  this.form.getRawValue().password;
        this.authService.login(email, password);
      }

    }
  }
}