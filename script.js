const selector = document.getElementById('selector');

const cadeSelect = document.getElementById('CadeSelect');
const hammerSelect = document.getElementById('HammerSelect');
const harbeckSelect = document.getElementById('HarbeckSelect');
const waldorSelect = document.getElementById('WaldorSelect');

cadeSelect.addEventListener('click', () => {
    selector.style.display = 'none';
    alert('You clicked Cade. Later, this will do something.');
})

hammerSelect.addEventListener('click', () => {
    selector.style.display = 'none';
    alert('You clicked Hammer. Later, this will do something.');
})

harbeckSelect.addEventListener('click', () => {
    selector.style.display = 'none';
    alert('You clicked Harbeck. Later, this will do something.');
})

waldorSelect.addEventListener('click', () => {
    selector.style.display = 'none';
    alert('You clicked Waldor. Later, this will do something.');
});