import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5)
  // })

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    precio: [ , [Validators.required, Validators.min(0)]],
    existencias: [ , [Validators.required, Validators.min(0)]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.miFormulario.reset({
        nombre: 'RTX 4080ti',
        precio: 1600
      })
  }

  validField(field: string): boolean | null {
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched
  }

  save(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
