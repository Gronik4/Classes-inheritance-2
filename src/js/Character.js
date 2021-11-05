export default class Character {
  constructor(name, type) {
    try {
      if ((name.length < 2) || (name.length > 10)) {
        throw new Error('Ошибка: в имени должно быть min - 2 символа, max - 10');
      } else { this.name = name; }
    } catch(e) {
      this.name = e.message;
      return this.name;
    }
    const charTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    try {
      if (!charTypes.includes(type)) {
        throw new Error('Ошибка типа персонажа!!');
      } else { this.type = type; }
    } catch(e) {
      this.type = e.message;
      return this.type;
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    try {
      if (this.health > 0) {
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
      } else {
        throw new Error('Нельзя повысить уровень умершего!');
      }
    } catch(e) {
      this.health = e.message;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else { this.health = 'Бить бесполезно. Умер.'; }
  }
}
