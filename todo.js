const tasks = [];
const tasksList= document.getElementById("list");  //this is list
const addTaskInputBox= document.getElementById("add-task"); //this is inputbox,user will put data here



function addTodo (task){
   tasks.push(task);
}


function deleteTodo (taskId){
   const newTasks = tasks.filter(function(task){
       return task.id !== taskId;
   })
   tasks=newTasks;
}


function renderList(){

}

function checkTodo (){

}