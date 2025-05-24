import { darkThemeElement,
    getCheckboxElements,
    getDeleteIcons,
    taskListElement, 
    taskListLink,
    taskSearchBarButton 
  } from "./elements";
import { addTask, darkThemeMode, deleteTask, toggleTask } from "./utils";



export const initTaskListener=()=>{
    getDeleteIcons().forEach((icon,index)=>{
    icon.addEventListener("click",(e)=> deleteTask(e,index));
    })

    getCheckboxElements().forEach((box,index)=>{
        box.addEventListener('click',(e) => toggleTask(e,index))
        box.addEventListener('keydown',(e) =>{
            e.key==='Enter' && toggleTask(e,index);
        })
    })
}


export const initListeners = () => {
  darkThemeElement.addEventListener("click", darkThemeMode);
  taskSearchBarButton?.addEventListener("click", addTask);
  taskListLink?.addEventListener("click", () => {
    taskListElement?.classList.toggle("TaskList__list--hideCompleted");
    taskListLink?.classList.toggle("TaskList__link--isActive");
  });
};