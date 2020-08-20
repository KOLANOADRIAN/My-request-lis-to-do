{
   const powitanie = () => {
      console.log("hello")
   };
   powitanie();
   const container__headerInput = document.querySelector(".container__headerInput")
   container__headerInput.focus();
   
   const tasks = [];
   
   const addNewTask = (newTaskContent) => {
      tasks.push({
         content: newTaskContent,
      });
      render();
   };

   const removeTask = (index) => {
      tasks.splice(index, 1);
      render();
   };
   const toggleTaskDone = (index) => {
      tasks[index].done = !tasks[index].done;
      render();
   }


   const render = () => {
      let htmlString = "";
      for (const task of tasks) {
         htmlString += `<li class="container__sectionListIteam js-task" >
               <button class="tasks__buttonToggle tasks__buttonToggle--done js-toggleDone">
               ${task.done ? " ✔ " : ""}
               </button>
               <span class="tasks__content${ task.done ? " tasks__content--done" : ""}">  ${task.content} </span>
              
               <button class="tasks__buttonRemove tasks__buttonRemove--done js-remove">
               🗑
               </button>
            </li>
            `;
      };
      document.querySelector(".js-tasks").innerHTML = htmlString;
      bindEvents();
      bindToggleDoneEvents();
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
      };
      addNewTask(newTaskContent);
   };
   const init = () => {
      render();
      const form = document.querySelector(".js-form");
      form.addEventListener("submit", onFormSubmit);
   };
   init();
};
