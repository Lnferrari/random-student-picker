// variables
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

// functions
const getRandom = array => array[Math.floor(Math.random() * array.length)];

const displayOnList = item => {
    const div = document.createElement('div')
    div.innerHTML = `<span>${item}</span>`;
    div.innerHTML += deleteIcon;    
    listContainer.firstElementChild.appendChild(div)
}

const removeItem = item => students.splice(students.indexOf(item), 1);

const pickOne = () => {
    return getRandom(students)    
}

// events
window.addEventListener('load', ()=> students.forEach(item => displayOnList(item)))

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
        console.log(students)
    }
})

resetBtn.addEventListener('click', ()=>{
    window.location.reload()
})

pickOneBtn.addEventListener('click', ()=>{
    const student = pickOne()
    removeItem(student)
    Array.from(list.children).forEach(item => {
        if (item.innerText === student){
            item.firstElementChild.style.textDecoration = 'line-through'
            item.firstElementChild.style.textDecorationColor = 'red'
            item.firstElementChild.style.textDecorationThickness = '3px'
        }
    })
})