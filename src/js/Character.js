export default class Character {
  constructor(name, type) {
    this.name = name;
    if ((this.name.length < 2) || (this.name.length > 10)) { throw new Error('Количество букв в имени персонажа должно быть не менее 1, но не более 10!'); }
    const charTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    this.type = type;
    if (!charTypes.includes(this.type)) { throw new Error('Ошибка типа персонажа!!'); }
    this.health = 100;
    this.level = 1;
    this.attack = 1;
    this.defence = 1;
  }
}
