const input = document.getElementById("todoInput")
const ulParent = document.getElementById("ulParent")


function addTodo() {
    if (!input.value) {
        alert("Enter Todo Values")
        return
    }


    let liElement = document.createElement("li")
    let liTxt = document.createTextNode(input.value)
    liElement.appendChild(liTxt)
    // console.log(liElement)


    let div = document.createElement("div")
    let editButton = document.createElement("button")
    let deleteBtn = document.createElement("button")
    editButton.innerHTML = "Edit Todo"
    deleteBtn.innerHTML = "DELETE"

    //classes\\

    editButton.className="editBtn"
    deleteBtn.className="deleteBtn"


    editButton.setAttribute("onclick", "editTodo(this)")
    deleteBtn.setAttribute("onclick", "deleteTodo(this)")
    div.appendChild(editButton)
    div.appendChild(deleteBtn)
    liElement.appendChild(div)
    ulParent.appendChild(liElement)
    input.value = ""

}
function editTodo(el) {
    // console.log("editTodo()", el.parentNode.parentNode.
    //     firstChild.nodeValue)
    let li = el.parentNode.parentNode
    let placeHolder = li.firstChild.nodeValue
    var editValue = prompt("Edit Todo", placeHolder)



    li.firstChild.nodeValue = editValue

}
function deleteTodo(elem) {
    elem.parentNode.parentNode.remove()
}
function deleteAll() {
    ulParent.innerHTML = ""
}