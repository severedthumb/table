const selector = document.querySelector('.selector');
const player = document.querySelector('.player');

const cadeSelect = document.getElementById('CadeSelect');
const hammerSelect = document.getElementById('HammerSelect');
const harbeckSelect = document.getElementById('HarbeckSelect');
const waldorSelect = document.getElementById('WaldorSelect');



const test = document.getElementById('test');
const test2 = document.getElementById('test2');
const headshot = document.querySelector('.headshot')
const currentHP = document.getElementById('currentHP');
const maxHP = document.getElementById('maxHP');

const cade = {
    'name': 'Cade',
    'race': 'human',
    'class': 'rogue',
    'headshot': './assets/Cade_Headshot.jpg',
    'currentHP': 12,
    'maxHP': 48
};

const hammer = {
    'name': 'Hammer',
    'race': 'dwarf',
    'class': 'fighter',
    'headshot': './assets/Hammer_Headshot.jpg',
    'currentHP': 51,
    'maxHP': 61
};

const harbeck = {
    'name': 'Harbeck',
    'race': 'dwarf',
    'class': 'cleric',
    'headshot': './assets/Harbeck_Headshot.jpg',
    'currentHP': 44,
    'maxHP': 44
};

const waldor = {
    'name': 'Waldor',
    'race': 'elf',
    'class': 'wizard',
    'headshot': './assets/Waldor_Headshot.jpg',
    'currentHP': 12,
    'maxHP': 13
};



fillInfoBox = (character) => {
    headshot.setAttribute('src', character.headshot);
    test.innerHTML = character.name;
    test2.innerHTML = character.race + ' ' + character.class;

    currentHP.innerHTML = character.currentHP;
    maxHP.innerHTML = character.maxHP;

    selector.style.display = 'none';
    player.style.display = 'flex';
};



cadeSelect.addEventListener('click', () => {
    fillInfoBox(cade);
});

hammerSelect.addEventListener('click', () => {
    fillInfoBox(hammer);
});

harbeckSelect.addEventListener('click', () => {
    fillInfoBox(harbeck);
});

waldorSelect.addEventListener('click', () => {
    fillInfoBox(waldor);
});



