import Team from '../app.js';
import Character from '../character.js';

describe('Team', () => {
    let team;
    let character1;
    let character2;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Hero1');
        character2 = new Character('Hero2');
    });

    test('добавление персонажа в команду', () => {
        team.add(character1);
        expect(team.toArray()).toContain(character1);
    });

    test('добавление одного и того же персонажа вызывает ошибку', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Персонаж уже добавлен в команду.');
    });

    test('добавление нескольких персонажей', () => {
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));
    });

    test('добавление дубликатов через addAll игнорируется', () => {
        team.addAll(character1, character2);
        team.addAll(character1);
        expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));
    });

    test('конвертация в массив', () => {
        team.add(character1);
        expect(team.toArray()).toEqual([character1]);
    });
});
