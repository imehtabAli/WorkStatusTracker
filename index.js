const modalHTML = `<div class="modal-container">
    <form id="createForm">
        
        <span><i class="fa-solid fa-xmark"></i></span>
        <input name="title" type="text" placeholder="Title" required>
        <input name="Assignee" placeholder="Assignee" required>
        <select name="status" id="" required>
            <option value="TODO">TO DO</option>
            <option value="IN_PROGRESS">In Progess</option>
            <option value="DONE">Done</option>
        </select>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <button>Create</button>
    </form>
</div>`;


const createElement = document.getElementById("create");

const button = document.querySelector(".create");

button.addEventListener("click", ()=>{
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = modalHTML;
    document.body.appendChild(modal);

    const form = document.getElementById("createForm");
    const removeFormListener = () =>{
        form.removeEventListener("submit", formDataListener);
    }
    const formDataListener = (e)=>{
        e.preventDefault();

        let elements = e.target.elements;
        let taskObject = {};

        for(let i = 0; i < elements.length; i++){
            elements[i].name && (taskObject[elements[i].name] = elements[i].value);
        }
        createTask(taskObject);
        modal.remove();
        removeFormListener();
    }
    form.addEventListener("submit", formDataListener);

    const modalClose = document.querySelector(".fa-xmark");

modalClose.addEventListener("click", ()=>{
    modal.remove();
        removeFormListener();
});

});

function createTask(taskObject){
    const taskContainer = document.createElement("div");
    taskContainer.className = "task";
    taskContainer.draggable = "true";

    taskContainer.innerHTML = `
    <b>${taskObject.title}</b>
    <strong>${taskObject.Assignee}</strong>
    <p>${taskObject.description}</p>
    `;

    const panel = document.getElementById(taskObject.status);
    panel.appendChild(taskContainer);

}