// VARIABLES --------------------------
let counter = 0;
let student;
const students = ['Aimee', 'Beda', 'Carlos', 'Charli', 'Christoph', 'Dalibor', 'Daniel', 'Francesco', 'Habid', 'Jonathan', 'Lucas', 'Lui', 'Martin', 'Mo', 'Norman', 'Priya', 'Shinhee', 'Shreekesh', 'Tim']
const deleteIcon = '<i class="far fa-trash-alt delete"></i>'
const display = document.querySelector('#display')
const form = document.querySelector('form')
const listContainer = document.querySelector('.list-container')
const list = document.querySelector('.list')
const resetBtn = document.querySelector('#reset')
const editBtn = document.querySelector('#edit')
const addBtn = document.querySelector('#add')
const closeBtn = document.querySelector('#close')
const pickOneBtn = document.querySelector('#pickOne')
const bgMusic = new Audio('./assets/music.mp3')
const successSound = new Audio('./assets/success.mp3')
bgMusic.volume = 0.2
successSound.volume = 0.1


// CLASS (for the animation) --------------------------
class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '$!<>-_\\/[]@&{}—=+*^?#_____'
        this.update = this.update.bind(this)
    }

    setText(newText) {
        const oldText = this.el.innerText
        const length = 14
        // const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }

        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }

    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="symbol">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    
    randomChar() {
        return getRandom(this.chars)
    }
}
// instance
const scrambleText = new TextScramble(display)

// FUNCTIONS --------------------------
const getRandom = array => array[Math.floor(Math.random() * array.length)];

const displayOnList = item => {
    const div = document.createElement('div')
    div.innerHTML = `<span>${item}</span>`;
    div.innerHTML += deleteIcon;    
    listContainer.firstElementChild.appendChild(div)
}

const removeItem = item => students.splice(students.indexOf(item), 1);

const pickOne = () => getRandom(students);

// const reset = () => {}

const next = () => {
    scrambleText.setText(students[counter]).then(() => {
        setTimeout(next, 1)
    })
    counter = (counter + 1) % students.length;
}

const stop = item => scrambleText.setText(item);


// EVENTS --------------------------

window.addEventListener('load', ()=> {
    students.forEach(item => displayOnList(item))
    bgMusic.play()
})

editBtn.addEventListener('click', ()=> {
    listContainer.style.display = 'inline-block';
})

listContainer.addEventListener('click', (e) => {
    const input = document.querySelector('input')
    e.preventDefault()
    if (e.target.id === 'close'){
        listContainer.style.display = 'none'
    } else if (e.target.id === 'add') {
        if (input.value){
            students.push(input.value)
            displayOnList(input.value)
            input.value = '';
        }
    } else if (e.target.className.includes('delete')){
        e.target.parentElement.remove()
        removeItem(e.target.previousSibling.textContent)
    }
})

resetBtn.addEventListener('click', ()=>{
    window.location.reload()
})

pickOneBtn.addEventListener('click', ()=>{
    bgMusic.play()
    next()
    setTimeout(()=> {
        student = pickOne()
        stop(student)
        removeItem(student)
        Array.from(list.children).forEach(item => {
            if (item.innerText === student){
                item.firstElementChild.style.color = '#757575';
            }
        })
    }, 2500)
    setTimeout(()=> {
        bgMusic.pause()
        successSound.play()
    }, 3200)
})


  

