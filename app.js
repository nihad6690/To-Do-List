const input = document.querySelector('.toDo_form');
const inputItem = document.getElementById('inputItem')
let newItem = document.querySelector('.newItem')
let key = 0;

let allItems = []
let checkId = []
function deleteItem(e) {
    const itemToBeDeleted = e.currentTarget.parentNode
    removeDate(itemToBeDeleted.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim());
    window.location.reload();
    displayItems()

}
const addItem = (e) => {
    e.preventDefault();
    key = key + 1
    const itemName = inputItem.value;
    const item = new Object();
    item.name = itemName
    const copyName = itemName;
    item.id = key;

    allItems.push(item)
    saveData()
    displayItems()

}

function displayItems() {

    allItems = getData();
    allItems.forEach(item => {
        if (!checkId.includes(item.id)) {
            checkId.push(item.id)
            let nextItem = document.createElement('div');
            nextItem.innerHTML =
                `<p class="task" ">${item.name}</p>
            
                <button class = "deleteBtn">
                <i class="fa-solid fa-minus"></i>
                </button>
            `;
            newItem.appendChild(nextItem);
            const editBtn = nextItem.querySelector('.editBtn');
            const deleteBtn = nextItem.querySelector('.deleteBtn');
            deleteBtn.addEventListener('click', deleteItem)
        }

    })
}


//----------Local Storage----------
const saveData = () => {
    localStorage.setItem("items", JSON.stringify(allItems))
}
const getData = () => {
    const task = localStorage.getItem("items")
    return task ? JSON.parse(task) : []
}
const removeDate = (itemName) => {
    allItems = getData();
    allItems = allItems.filter(function (item) {
        console.log(item.name.length)
        console.log(item.name)
        console.log(itemName.length)
        console.log(itemName)
        if (item.name !== itemName) {
            return item
        }
    })
    localStorage.setItem("items", JSON.stringify(allItems))
}

window.addEventListener('load', () => {

    allItems = getData
    displayItems()


})

input.addEventListener('submit', addItem)