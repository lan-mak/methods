export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    const parametersCharacter = {
      Bowman: '25/25',
      Swordsman: '40/10',
      Magician: '10/40',
      Undead: '25/25',
      Zombie: '40/10',
      Daemon: '10/40',
    };

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно иметь длинну от 2 до 10 знаков');
    }

    if ((type in parametersCharacter)) {
      this.attack = Number(parametersCharacter[type].split('/')[0]);
      this.defence = Number(parametersCharacter[type].split('/')[1]);
    } else {
      throw new Error('Неправильный тип');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
