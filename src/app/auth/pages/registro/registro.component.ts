import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { nameLastnamePattern, emailPattern, doNotCanBeStrider } from '../../../shared/validators/validators'; Mejor usar el service
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.nameLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emaliValidator]],
    username: ['', [Validators.required, this.validatorsService.doNotCanBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [this.validatorsService.equalFields('password', 'confirmPassword')]
  })

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.['required']) { return 'Email es obligatorio' }
    if (errors?.['pattern']) { return 'El valor ingresado no tiene formato de email' }
    if (errors?.['emailTomado']) { return 'El email ya se encuentra regstrado en nuesta base de datos' }
    return '';
  }

  constructor(private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService,
    private emaliValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Julian Rodriguez',
      email: 'test1@test.com',
      username: 'julianguerra92',
      password: 123456,
      confirmPassword: 123456

    })
  }

  invalidField(field: string) {
    return this.myForm.get(field)?.invalid
      && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
