import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({ providedIn: 'root' }) // El servicio se vuelve un singelton en la aplicacion
export class DbzService {
  constructor() { }
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  { id:uuid(), name: 'Vegeta', power: 10000 }]

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character, // Espace este objeto en el objeto actual
      id: uuid(),
    }
    console.log(newCharacter)
    this.characters.push(newCharacter)
    console.log('Characters: ', this.characters)
  }

  onDeleteCharacter(characterIndex: number) {
    this.characters.splice(characterIndex, 1)
  }

  deleteCharacterById(id:string){
    if (id === undefined) return
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
