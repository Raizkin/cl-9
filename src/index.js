const buttonEl = document.getElementById("add")
const noted = JSON.parse(localStorage.getItem("notesIvana")) || []


buttonEl.addEventListener("click", () => {
    const text = prompt("Введіть нотатку")

    if(!text)  return

      notes.push({id: Date.now(), text,column: "to-do"})
localStorage.setItem("notesIvana", JSON.stringify("notes"))
render()

function render (){
    const bordColimnEl = document.querySelectorAll(".colimn")
}
})