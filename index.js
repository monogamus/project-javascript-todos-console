// JavaScript Simple
// Show Todo Texts
const todos = ["Write the letter", "Eat some lunch", "Run around the city"]

const showTodos = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        console.log(`[${index + 1}] ${item}`)
    }
}

showTodos(todos)



// Search Todo Texts
const searchTodos = (data, textToSearch) => {
    let newTodos = []

    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        const lowerCasedItem = item.toLowerCase()
        const lowerCasedText = textToSearch.toLowerCase()

        if (lowerCasedItem.includes(lowerCasedText)) {
            newTodos.push(item)
        }
    }

    return newTodos
}

/*const foundTodos = searchTodos(todos, "eat")
// ['Run around the city']
showTodos(foundTodos)*/

const foundTodos = searchTodos(todos, "the")
// ['Write the letter', 'Run around the city']
showTodos(foundTodos)


//////////////////////////////////////////////////////


// JavaScript Complex
// Array of Todo Objects
const myTodos = [
    {
        id: 1,
        text: "Write the letter",
        tags: ["important", "writing"],
        favorite: true,
        completed: true
    },
    {
        id: 2,
        text: "Eat some lunch",
        tags: ["food"],
        favorite: true,
        completed: false,
    },
    {
        id: 3,
        text: "Run around the city",
        favorite: false,
        completed: true
    }
]

// Show Todos
const showingTodos = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        let itemString = ""

        itemString += item.completed ? "☑" : "x" // Example: ☑
        itemString += `${item.text}` // Example: The todo text
        itemString += item.favorite ? "★" : "x" // Example: ★
        // ☐ The todo text ★ 

        console.log(itemString)
    }
}

// Call showTodos
showingTodos(myTodos)


//Search Todos Text
const searchingTodosText = (data, searchText) => {
    let newTodos = []

    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        const lowerCasedItemText = item.text.toLowerCase()
        const lowerCasedSearchText = searchText.toLowerCase()

        if (lowerCasedItemText.includes(lowerCasedSearchText)) {
            newTodos.push(item)
        }
    }

    return newTodos
}

// Call searchTodosText
const findTodos = searchingTodosText(myTodos, "the")

showingTodos(findTodos)