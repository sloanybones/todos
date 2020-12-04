
// Have a button that triggers a call to get your todos and displays your them to your UI
// Have buttons that filter todos that are complete and are not complete
// Be able to toggle a todo being complete or not
// Be able to sort todos by title and/or userId
// Add some custom styles



// userId: 1,
//  id: 1, 
//  title: "delectus aut autem",
//  completed: false



axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
  console.log(res.data);
  state.tasks = res.data;
    render();
  })
  .catch((err) => {
    console.log(err)
    render();
  });


  let state = {
    tasks: [],
    completed: false,
    completedToggle: true,

  };

    const renderToDos = (task) => {
    const {tasks} = state; 
    let tasksStringArray = tasks.map((task) => {
          return renderTodo(task);
       });
       return `<div class='grid'> ${tasksStringArray.join("")} </div>`;
      };

  const renderTodo = (task) => {
    return  `<div class='card'>
                <h2>${task.title}</h2>
                <p>Completed? ${task.completed}</p>
                <p>Your Id: ${task.id}</p>
  
               <div class='card-footer'>
                  <button onclick='deleteTask(${task})'> Delete Task </button>
                  <button onclick='toggleTask(${task.completed})'>  Completed? </button>
               </div>
                </div>`;
   
  }
  
  const toggleTask = (taskcompleted) => {
    console.log(taskcompleted)
    //when the button is clicked I want the value of completed to change

  }
const deleteTask = (taskid) => {
    console.log('delete working')
    //when the button is clicked I want to delete the task
    
  }

  const filterToDos = () => {
    console.log("filter working")
    
    // if (completedToggle == true) {
    //   state.tasks.sort((a, b) => b.completed - a.completed);
    //   completedToggle = false
    // }
    // else (completedToggle == false) {
    // state.tasks.sort((a, b) => a.completed - b.completed);
    // completedToggle = true
    // }
    
    // render();
    
  };

  function filterId() {
  console.log("filter working");
  state.tasks.sort((a, b) => b.userId - a.userId);
  render();

}
  
  
  const render = () => {
    let htmlString = "<div>";
        htmlString += "<h1>To do's</h1>"
        htmlString += "<button onclick ='renderToDos()'>Show List </button>"
        htmlString += "<button onclick ='filterToDos()'>Filter Complete/Not Complete</button>"
        htmlString += "<button onclick ='filterId()'>Filter by User Id</button>"
        htmlString += "</div>";
        htmlString += renderToDos();
        
     
      

    document.getElementById("app").innerHTML = htmlString;
  }
  render();