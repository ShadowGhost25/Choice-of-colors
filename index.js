const cols = document.querySelectorAll('div.col');

console.log(cols);

function gereneraterRandomColor() {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

function setRandomColors() {    
    cols.forEach((col) => {
        const text = col.querySelector('h2')
        const color = gereneraterRandomColor()

        text.textContent = color
        col.style.background = gereneraterRandomColor()
    })
}
setRandomColors()
