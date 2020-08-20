{
   const powitanie = () => {
      console.log("hello")
   };
   powitanie();
   const container__headerInput = document.querySelector(".container__headerInput")
   container__headerInput.focus();
   // moja lista 
   const tasks = [

   ];
   // funkcja która dodaje do listy 
   const addNewTask = (newTaskContent) => {
      tasks.push({
         content: newTaskContent,
         //  done: thru,
      });
      render();
   };
   // funkcja usuwa z listy
   const removeTask = (index) => {
      tasks.splice(index, 1);
      render();
   };
   const toggleTaskDone = (index) => {
      tasks[index].done = !tasks[index].done;
      render();
   }

   // funkcja która renderuje widok czyli wpisze tekst do listy ul
   const render = () => {
      let htmlString = "";    //tu buduje tekst w js który trafi do html
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
      // przycisk usuwania
      const removeBottons = document.querySelectorAll(".js-remove");
      console.log(removeBottons);
      // tu definiuje usuwanie 
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
         // pobranie watrości z inputa
         const newTaskContent = document.querySelector(".js-newTask").value.trim();
         //   zostawiam console.log żeby widzieć czy zadanie jest przekazywane 
         // console.log(newTaskContent);

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
