import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: 'Krilin',
    power: 1000
  }, {
    name: 'Goku',
    power: 9500
  },
  { name: 'Vegeta', power: 10000 }]

  onNewCharacter(character: Character): void {
    console.log(character)
    this.characters.push(character)
    console.log('Characters: ', this.characters)
  }

  onDeleteCharacter(characterIndex: number){
    this.characters.splice(characterIndex, 1)
  }
}
