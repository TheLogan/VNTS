import Character from "./Character";
import Dialogue from "./Dialogue";

export default class Scene {
  name: string;
  characters: Character[];
  dialogue: Dialogue[];
  // background:

  constructor(name: string, characters: Character[] = [], dialogue: Dialogue[] = []) {
    this.name = name;
    this.characters = characters;
    this.dialogue = dialogue;
    
  }

}