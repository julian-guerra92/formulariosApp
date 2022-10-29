import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    prducto: '',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.miFormulario?.controls['producto']?.invalid &&
           this.miFormulario?.controls['producto'].touched
  }

  validPrice(): boolean {
    return this.miFormulario?.controls['precio']?.invalid &&
           this.miFormulario?.controls['precio'].touched
  }

  customDirectiva(){
    return this.miFormulario?.controls['existencias']?.errors;
  }

  // guardar(miFormulario: NgForm){
  guardar() {
    // console.log(this.miFormulario.value);
    console.log('Posteo Realizado con Éxito');
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

}
