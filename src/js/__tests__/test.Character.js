import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

const expected = [
  [['name', 'Ваня'], ['type', 'Bowman'], ['health', 100], ['level', 1], ['attack', 25], ['defence', 25]],
  [['name', 'Ваня'], ['type', 'Swordsman'], ['health', 100], ['level', 1], ['attack', 40], ['defence', 10]],
  [['name', 'Ваня'], ['type', 'Magician'], ['health', 100], ['level', 1], ['attack', 10], ['defence', 40]],
  [['name', 'Ваня'], ['type', 'Daemon'], ['health', 100], ['level', 1], ['attack', 10], ['defence', 40]],
  [['name', 'Ваня'], ['type', 'Undead'], ['health', 100], ['level', 1], ['attack', 25], ['defence', 25]],
  [['name', 'Ваня'], ['type', 'Zombie'], ['health', 100], ['level', 1], ['attack', 40], ['defence', 10]],
];

test('Test Bowerman', () => {
  const resalt = new Bowerman('Ваня', 'Bowman');
  expect(Object.entries(resalt)).toEqual(expected[0]);
});

test('Test Swordsman', () => {
  const resalt = new Swordsman('Ваня', 'Swordsman');
  expect(Object.entries(resalt)).toEqual(expected[1]);
});

test('Test Magician', () => {
  const resalt = new Magician('Ваня', 'Magician');
  expect(Object.entries(resalt)).toEqual(expected[2]);
});

test('Test Daemon', () => {
  const resalt = new Daemon('Ваня', 'Daemon');
  expect(Object.entries(resalt)).toEqual(expected[3]);
});

test('Test Undead', () => {
  const resalt = new Undead('Ваня', 'Undead');
  expect(Object.entries(resalt)).toEqual(expected[4]);
});

test('Test Zombie', () => {
  const resalt = new Zombie('Ваня', 'Zombie');
  expect(Object.entries(resalt)).toEqual(expected[5]);
});
