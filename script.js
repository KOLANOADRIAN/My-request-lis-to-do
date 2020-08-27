{
   const powitanie = () => {
      console.log("hello")
   };

   const container__headerInput = document.querySelector(".container__input")

   let tasks = [];
   let hideDoneTasks = false;

   const addNewTask = (newTaskContent) => {
      tasks = [...tasks, { content: newTaskContent }];
      // tasks.push({
      //    content: newTaskContent,
      // });
      render();
   };

   const removeTask = (index) => {
      tasks = [
         ...tasks.slice(0, index),
         ...tasks.slice(index + 1),
      ];
      // tasks.splice(index, 1);
      render();
   };
   const toggleTaskDone = (index) => {
      tasks = [
         ...tasks.slice(0, index),
         {
            ...tasks[index],
            done: !tasks[index].done,
         },
         ...tasks.slice(index + 1),
      ];
      // tasks[index].done = !tasks[index].done;
      render();
   };
   const markAllTasksDone = () => {
      tasks = tasks.map((task) => ({
         ...task,
         done: true,
      }));
      render();
   };
   const toggleHideDoneTasks = () => {
      hideDoneTasks = !hideDoneTasks;
      render();
   }
   const resetForm = () => {
      document.querySelector(".js-form").reset();
   };
   const renderTasks = () => {
      // let htmlString = "";
      // for (const task of tasks) {
      //    htmlString += 
      const taskToHTML = task =>
         `<li class="container__listIteam${task.done && hideDoneTasks ? "tasks__item--hidden" : ""} js-task" >
               <button class="tasks__buttonToggle tasks__buttonToggle--done js-toggleDone">
               ${task.done ? " ✔ " : ""}
               </button>
               <span class="tasks__content${ task.done ? " tasks__content--done" : " "}">  ${task.content} </span>
              
               <button class="tasks__buttonRemove tasks__buttonRemove--done js-remove">
               🗑
               </button>
            </li>
            `;
      const tasksElement = document.querySelector(".js-tasks");
      tasksElement.innerHTML = tasks.map(taskToHTML).join("");
      // document.querySelector(".js-tasks").innerHTML = htmlString;
   };

   const renderButtons = () => { 
      // const buttonsElement = document.querySelector(".js-buttons");

      // if (!tasks.length) {
      //    buttonsElement.innerHTML = "";
      //    return;
      // };

      // buttonsElement.innerHTML = `
      // <button class="buttons__button js-toggleHideDoneTasks">
      //    ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      // </button>
      // <button
      // ${tasks.every(({done}) => done) ? "disabled" : ""}
      // >
      // Ukończone wszystkie
      // </button>
      // `;
   };

   const bindButtonsEvents = () => {
      // if jakiś przycisk pokasz jakiś przycisk
   };

   const render = () => {
      renderTasks();
      renderButtons();
      bindEvents();
      bindToggleDoneEvents();
      bindButtonsEvents();
   };


   const bindEvents = () => {
      const removeBottons = document.querySelectorAll(".js-remove");
      console.log(removeBottons);

      removeBottons.forEach((removeBottons, index) => {
         removeBottons.addEventListener("click", () => {
            removeTask(index);
         });
      });
   };
   const bindToggleDoneEvents = () => {
      const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");
      toggleDoneButtons.forEach((toggleDoneButtons, index) => {
         toggleDoneButtons.addEventListener("click", () => {
            toggleTaskDone(index);
         });
      });
   };
   const onFormSubmit = (event) => {
      event.preventDefault();
      const newTaskContent = document.querySelector(".js-newTask").value.trim();

      if (newTaskContent === "") {
         return;
      } else {
         resetForm();
      }
      addNewTask(newTaskContent);
      container__headerInput.focus();

   };
   const init = () => {
      render();
      powitanie();
      const form = document.querySelector(".js-form");
      form.addEventListener("submit", onFormSubmit);
   };
   init();

};
