const titleNode = document.getElementById('todo-title')
const descriptionNode = document.querySelector('#todo-desc')
const button = document.querySelector('.btn-add')
const selector = document.querySelector('#todo-filter-select')

// document.querySelector('.btn-add') => Node | null
// document.querySelectorAll('.btn-add') => Node[]

if (titleNode == null || descriptionNode == null || button == null) {
    throw new Error('Requried elements were bot found')
}

if ([titleNode, descriptionNode, button].some(el => el == null)) {
    throw new Error('Requried elements were bot found')
}

const checkEmptyState = () => {
    const items = document.getElementsByClassName('todo-item')
    if (items.length != 0) {
        document.getElementById('empty-state')
            .classList.add('hidden')
    } else {
        document.getElementById('empty-state')
            .classList.remove('hidden')
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    const title = titleNode.value
    const description = descriptionNode.value
    console.log('Click', title, description)

    if (!title) {
        console.log('Empty title')

        document.querySelector('.error').classList.remove('hidden')

        return;
    }

    const item = document.createElement('div')
    item.classList.add('todo-item')

    if (selector.value === 'star') {
        item.classList.add('hidden')
    }

    const titleEl = document.createElement('div')
    titleEl.classList.add('todo-title')
    titleEl.textContent = title

    const descriptionEl = document.createElement('div')
    descriptionEl.classList.add('todo-desc')
    descriptionEl.textContent = description

    const deleteEl = document.createElement('div')
    deleteEl.classList.add('btn-delete')
    const icon = document.createElement('i')
    icon.classList.add("fa-solid", "fa-trash")
    deleteEl.addEventListener('click', () => {
        item.addEventListener('animationend', () => {
            item.remove()
        })
        item.classList.add('fall-out')
    })
    deleteEl.appendChild(icon)

    const date = document.querySelector('#todo-date').value
    console.log(date)
    const dateEl = document.createElement('div')
    dateEl.textContent = date

    const checkBoxEl = document.createElement('input')
    checkBoxEl.setAttribute('type', 'checkbox')
    checkBoxEl.addEventListener('change', () => {
        console.log('checkBoxEl', checkBoxEl.checked)

        if (checkBoxEl.checked) {
            item.classList.add('line-through')
        } else {
            item.classList.remove('line-through')
        }
    })

    const starEL = document.createElement('i')
    starEL.classList.add("fa-regular", "fa-star")
    starEL.addEventListener('click', () => {
        if (starEL.classList.contains('fa-solid')) {
            starEL.classList.add("fa-regular")
            starEL.classList.remove("fa-solid")
        } else {
            starEL.classList.remove("fa-regular")
            starEL.classList.add("fa-solid")
        }
    })

    item.appendChild(checkBoxEl)
    item.appendChild(starEL)
    item.appendChild(dateEl)
    item.appendChild(titleEl)
    item.appendChild(descriptionEl)
    item.appendChild(deleteEl)


    document.getElementById('todo-list')
        .appendChild(item)

    titleNode.value = ''
    descriptionNode.value = ''

    checkEmptyState()
})

titleNode.addEventListener('input', () => {
    console.log('input', titleNode.value)
    if (titleNode.value.length !== 0) {
        document.querySelector('.error')
            .classList.add('hidden')
    }

    // if (titleNode.value.length == 0) {
    //     button.setAttribute('disabled', 'true')
    // } else {
    //     button.setAttribute('disabled', 'false')
    // }
})

selector.addEventListener('change', () => {
    console.log('Filter', selector.value)
    // if (selector.value === 'all') {

    // } else if (selector.value === 'star') {

    // }

    switch (selector.value) {
        case 'all': {
            const allTodos = document.getElementsByClassName('todo-item')
            for (const todo of allTodos) {
                todo.classList.remove('hidden')
            }
            break;
        }
        case 'star': {
            const allRegularTodos = document
                .querySelectorAll('.todo-item .fa-regular')
            for (const todo of allRegularTodos) {
                todo.parentNode.classList.add('hidden')
            }
            break;
        }
    }
})