import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  newGame: string = '';

  persona: Persona = {
    nombre: 'Julián',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'DeathStranding'}
    ]
  }

  validName(): boolean {
    return this.miFormulario?.controls['nombre']?.invalid &&
           this.miFormulario?.controls['nombre'].touched
  }

  guardar(){
    console.log('Formulario Posteado');
    this.miFormulario.resetForm({
      nombre: ''
    });
  }

  addGame(){
    const newFavorite: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.newGame
    }
    this.persona.favoritos.push({... newFavorite});
    this.newGame = '';
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

}
