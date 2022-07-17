const inputAddTask = document.querySelector('#input-new-task');
const btnAddTask = document.querySelector('#add-task');
const containerTask = document.querySelector('.container-task');
let li;
inputAddTask.addEventListener('keypress', function(e) {
   if (e.keyCode === 13){
      createTask()
   }
})

btnAddTask.addEventListener('click', createTask)
function createTask (){
   if (!inputAddTask.value) return;
   const task = inputAddTask.value;
   createLi()
   li.append(task)
   addClassLi()
   containerTask.appendChild(li)
   saveTasks();
   cleanInput()
   createBtnDelete()
}
function createLi() {
   li = document.createElement('li')
}
function addClassLi() {
   li.classList.add('task');
}
function addClassBtnDelete(btnDelete){
   btnDelete.setAttribute('class', 'delete')
   btnDelete.setAttribute('title', 'Delete task')
}
function saveTasks() {
   const liTasks = containerTask.querySelectorAll('li')
   const toDoList = [];
   for (let task of liTasks) {
      let taskText = task.innerText;
      toDoList.push(taskText);
   }
   const taskJSON = JSON.stringify(toDoList)
   localStorage.setItem('tasks', taskJSON)
}
function addbBackupTask(){
   const tasks = localStorage.getItem('tasks')
   const toDoList = JSON.parse(tasks)
   for (let task of toDoList) {
      console.log(task)
   }
}
addbBackupTask()
function cleanInput(){
   inputAddTask.value = '';
   inputAddTask.focus();
}
function createBtnDelete(){
   const btnDelete = document.createElement('button')
   li.appendChild(btnDelete)
   addClassBtnDelete(btnDelete)
}
document.addEventListener('click', function(e) {
   const el = e.target;
   if (el.classList.contains('delete')) {
      el.parentElement.remove()
      saveTasks()
   }
})



