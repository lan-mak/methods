import Bowman from '../Bowman';

test('Здоровье 100 => Здоровье после урона 85', () => {
  const result = new Bowman('lan');
  result.damage(20);
  expect(result.health).toBe(85);
});

test('Здоровье 100 => Здоровье после урона 0', () => {
  const result = new Bowman('lan');
  result.damage(5000);
  expect(result.health).toBe(0);
});

test('Получение нового уровня', () => {
  const result = new Bowman('lan');
  result.levelUp();
  const dataCheck = {
    name: 'lan',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 36,
  };
  expect(result).toEqual(dataCheck);
});

test('Здоровье 0 => Ошибка получения нового уровня', () => {
  const result = new Bowman('lan');
  result.health = 0;
  expect(() => {
    result.levelUp();
  }).toThrowError(new Error('Нельзя повысить левел умершего'));
});
