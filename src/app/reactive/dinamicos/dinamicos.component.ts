import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required)
  })

  newFavotite: FormControl = this.formBuilder.control('', Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  validField(field: string): boolean | null {
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched
  }

  addFavorite(){
    if(this.newFavotite.invalid){return;}
    this.favoritosArr.push( new FormControl(this.newFavotite.value, Validators.required));
    this.newFavotite.reset();
  }

  save() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  remove(index: number){
    this.favoritosArr.removeAt(index);
  }

}
