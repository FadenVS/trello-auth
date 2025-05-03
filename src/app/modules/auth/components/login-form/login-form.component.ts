import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceTsService } from 'src/app/service/auth.service.ts.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: 'init' | 'success' | 'failed' | 'loading' = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthServiceTsService
  ) { }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      // TODO
      this.authService.login(email, password).subscribe({ next: () =>{ 
        this.status = 'success'; 
        this.router.navigate(['/app']);
        },
        
        error: () => {
          this.status = 'failed'
        }
            });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
