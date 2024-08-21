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


/* THIS INFORMATION ABOUT PCS IS HERE FOR TESTING PURPOSES. LATER THIS WILL BE DRAWN FROM A DATABASE. */
const cade = {
    'name': 'Cade',
    'race': 'human',
    'class': 'rogue',
    'headshot': './assets/Cade_Headshot.jpg',
    'currentHP': 0,
    'maxHP': 0
};

const hammer = {
    'name': 'Hammer',
    'race': 'dwarf',
    'class': 'fighter',
    'headshot': './assets/Hammer_Headshot.jpg',
    'currentHP': 0,
    'maxHP': 0
};

const harbeck = {
    'name': 'Harbeck',
    'race': 'dwarf',
    'class': 'cleric',
    'headshot': './assets/Harbeck_Headshot.jpg',
    'currentHP': 0,
    'maxHP': 0
};

const waldor = {
    'name': 'Waldor',
    'race': 'elf',
    'class': 'wizard',
    'headshot': './assets/Waldor_Headshot.jpg',
    'currentHP': 0,
    'maxHP': 0
};



/* THIS FUNCTION RUNS WHEN A PC IS SELECTED, AND FILLS IN THE INFORMATION */
fillInfoBox = (character) => {
    headshot.setAttribute('src', character.headshot);
    test.innerHTML = character.name;
    test2.innerHTML = character.race + ' ' + character.class;

    currentHP.innerHTML = character.currentHP;
    maxHP.innerHTML = character.maxHP;

    selector.style.display = 'none';
    player.style.display = 'flex';
};



/* THESE FUNCTIONS SELECT THE PC. THIS NEEDS TO BE REFACTORED. */

let selectedPC;

cadeSelect.addEventListener('click', () => {
    selectedPC = cade;
    fillInfoBox(cade);
});

hammerSelect.addEventListener('click', () => {
    selectedPC = hammer;
    fillInfoBox(hammer);
});

harbeckSelect.addEventListener('click', () => {
    selectedPC = harbeck;
    fillInfoBox(harbeck);
});

waldorSelect.addEventListener('click', () => {
    selectedPC = waldor;
    fillInfoBox(waldor);
});



/* THESE FOUR FUNCTION HANDLE THE HP UP/DOWN BUTTONS */
/* These are written in such a way that current HP cannot go above the max HP, and max HP cannot go below current HP */
document.querySelector('.currentHP_up').addEventListener('click', () => {
    if (selectedPC.currentHP < selectedPC.maxHP) {
        selectedPC.currentHP += 1;
        currentHP.innerHTML = selectedPC.currentHP;
    };
});

document.querySelector('.currentHP_down').addEventListener('click', () => {
    if (selectedPC.currentHP > 0) {
        selectedPC.currentHP -= 1;
        currentHP.innerHTML = selectedPC.currentHP;
    };
});

document.querySelector('.maxHP_up').addEventListener('click', () => {
    selectedPC.maxHP += 1;
    maxHP.innerHTML = selectedPC.maxHP;
});

document.querySelector('.maxHP_down').addEventListener('click', () => {
    if (selectedPC.maxHP > 0 && selectedPC.maxHP > selectedPC.currentHP) {
        selectedPC.maxHP -= 1;
        maxHP.innerHTML = selectedPC.maxHP;
    };
});