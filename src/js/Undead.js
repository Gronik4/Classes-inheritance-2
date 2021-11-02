import Character from './Character';

export default class Undead extends Character {
  constructor(name, type, ...args) {
    super(name, type, ...args);
    this.attack *= 25;
    this.defence *= 25;
  }
}
