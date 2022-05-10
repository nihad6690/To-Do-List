const input = document.querySelector('.toDo_form');
const inputItem = document.getElementById('inputItem')
let item = document.querySelector('.item')

const deleteItem = (e) =>{
    const itemToBeDeleted = e.currentTarget.parentNode
    item.removeChild(itemToBeDeleted)
    localStorage.removeItem(itemToBeDeleted)
    
}

const addItem = (e) =>{
    e.preventDefault();
    const itemName = inputItem.value;
    let newItem = document.createElement('div');
    newItem.innerHTML =   
    `<p class="inputItem" style="display: inline;">${itemName}</p>
    <button class = "editBtn"> 
        <i class="fa-solid fa-pencil"></i>
    </button>
    <button class = "deleteBtn">
        <i class="fa-solid fa-minus"></i>
    </button>`;
    saveData(newItem);
    item.appendChild(newItem);
    const editBtn = document.querySelector('.editBtn');
    const deleteBtn = newItem.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', deleteItem)

}

input.addEventListener('submit', addItem)

//----------Local Storage----------
const saveData = (newItem) =>{
    localStorage.setItem(newItem,newItem)
}