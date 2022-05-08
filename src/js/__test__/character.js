import Character from '../character';

test('check name', () => {
  expect(() => {
    const result = new Character('l', 'Bowman');
    return result;
  }).toThrow();
});
