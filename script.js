const cellElements = document.querySelectorAll('[data-cell]');

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true}) //This means.. only ever fire this event listener once.
})

function handleClick(e) {
    console.log('clicked');
}