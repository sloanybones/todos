
// Have a button that triggers a call to get your todos and displays your them to your UI
// Have buttons that filter todos that are complete and are not complete
// Be able to toggle a todo being complete or not
// Be able to sort todos by title and/or userId
// Add some custom styles
// Add a reset button that doesn't need a new API call to reset todos


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
  
               <div class='card-footer'>
                  <button onclick='deleteTask(${task.id})'> Delete Task </button>
                  <button onclick='toggleTask(${task.id})'>  Completed? </button>
               </div>
                </div>`;
   
  }
  
  
  
  const render = () => {
    let htmlString = "<div>";
        htmlString += "<h1>To do's</h1>"
        htmlString += "<button onclick ='renderToDos()'>Show List </button>"
        htmlString += "</div>";
        htmlString += renderToDos();
        
     
      

    document.getElementById("app").innerHTML = htmlString;
  }
  render();