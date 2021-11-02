import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type, ...args) {
    super(name, type, ...args);
    this.attack *= 40;
    this.defence *= 10;
  }
}
