import Scene from "./Scene";

export default class Project {
  name: string;
  version: string;
  scenes: Scene[]
  
  constructor(name: string, version: string = '0.0.1', scenes: Scene[] = []) {
    this.name = name;
    this.version = version;
    this.scenes = scenes;
  }
}