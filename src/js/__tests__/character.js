import Character from '../character';

const dataTest = {
  type: 'Daemon',
  health: 100,
  level: 1,
  name: 'Goga',
  attack: 10,
  defence: 40,
};

test('Длинна name = 1', () => {
  expect(() => {
    const result = new Character('G', 'Daemon');
    return result;
  }).toThrowError(new Error('Имя должно иметь длинну от 2 до 10 знаков'));
});

test('Длинна name = 17', () => {
  expect(() => {
    const result = new Character('Gfdfdfdfaasdfdfdf', 'Daemon');
    return result;
  }).toThrowError(new Error('Имя должно иметь длинну от 2 до 10 знаков'));
});

test('неправильный тип', () => {
  expect(() => {
    const result = new Character('Goga', 'Dae');
    return result;
  }).toThrowError(new Error('Неправильный тип'));
});

test('Name и Type - правильные', () => {
  const result = new Character('Goga', 'Daemon');
  expect(result).toEqual(dataTest);
});

test('Здоровье 100 => Здоровье после урона 70', () => {
  const result = new Character('Goga', 'Daemon');
  result.damage(50);
  expect(result.health).toBe(70);
});

test('Здоровье 100 => Здоровье после урона 0', () => {
  const result = new Character('Goga', 'Daemon');
  result.damage(5000);
  expect(result.health).toBe(0);
});
