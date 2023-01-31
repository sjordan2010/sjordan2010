const colors = ['green', 'rgba(133,122,200)', '#f15025', 'blue', 'red', 'gray', 'black', 'purple']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')
btn.addEventListener('click', function() {
    let num = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[num]
    color.textContent = colors[num]
    console.log(colors[num])
})
console.log()