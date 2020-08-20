{
   const powitanie = () => {
      console.log("hello")
   };
   powitanie();
   const container__headerInput = document.querySelector(".container__headerInput")
   container__headerInput.focus();

   const tasks = [
      {
         content: "nagrać lekcję",
         done: false,
      },
      {
         content: "zjeść pierogi",
         done: true,
      },

   ];

     // funkcja która renderuje widok czyli wpisze tekst do listy ul
     const render = () => {
      let htmlString = "";    //tu buduje tekst w js który trafi do html
      for (const task of tasks) {
         htmlString += `
            <li class="container__sectionListIteam js-task"
            ${task.done ? " style=\"text-decoration: line-through\"" : ""}
            >
               <button class="tasks__buttonToggle tasks__buttonToggle--done js-toggleDone">
               ✔
               </button>
               ${task.content}
               <button class="tasks__buttonRemove tasks__buttonRemove--done js-remove">
               🗑
               </button>
            </li>
            `;
      };
      document.querySelector(".js-tasks").innerHTML = htmlString;
      bindEvents();
   };
   
   const init = () => {
      render();
      const form = document.querySelector(".js-form");
      form.addEventListener("submit", onFormSubmit);
   };
   init();

};
