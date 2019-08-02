import { Component, Inject } from '@angular/core';            
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/service/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent {
  form: FormGroup;
  feedback: string;

  constructor(private fb: FormBuilder,  @Inject('AuthService') private authService: AuthService, @Inject('UserService') private userService: UserService, private router: Router) {}

  submitForm(): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    if(this.form.valid){
      let userAux = this.form.getRawValue();
    
      let user: User  = new User(3, userAux.name, userAux.email, userAux.password, userAux.phone, '');
      this.userService.addUser(user);
      if(this.authService.login(userAux.email, userAux.password)){
        this.router.navigate(['/home'])
      }else{
        this.feedback = 'Erro ao cadastrar usuário';
      }
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.form.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
  }
}
