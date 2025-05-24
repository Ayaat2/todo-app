import { appElement, inputElement, taskListElement } from "./elements";
import { initTaskListener } from './eventListener';

// so that function dynamic instead of write "tasks" , write key in arugament 
export const fetchData=(key)=>{
    const data=localStorage.getItem(key);
    return data? JSON.parse(data) : false;
}

export const darkThemeMode=()=>{
    appElement?.classList.toggle('App--isDark');
    saveToDB('darkModeFlag',appElement?.classList.contains('App--isDark'));
}

export const renderTaskList=(tasks)=>{
    let taskList='';
    tasks.forEach((task) => {
        taskList+=`
    <li class="TaskList__taskContent${task.isCompleted ? " TaskList__taskContent--isActive": ""}">
        <div class="TaskList__checkbox" tabindex="0" role="button">
            <img class="TaskList__checkboxImg" src="/todo-app/assets/icon-checkmark.svg" alt="icon-checkmark"/>
        </div>
        <div class="TaskList__valueContent">
            <p class="TaskList__value">
                ${task.value}
            </p>
            <img class="TaskList__deleteIcon" src="/todo-app/assets/icon-basket.svg" alt="basket-icon"/>
        </div>
    </li>
    `
    })

    taskListElement.innerHTML=taskList;
    inputElement.value = "";
}

export const deleteTask=(e,index)=>{
    const answer=confirm('هل انت متأكد من حذف المهمة');
    if(answer===false) return;

    const tasks=fetchData("tasks");
    // method to delete task
    tasks.splice(index,1);
    // To save data in DB
    saveToDB("tasks",tasks);
    // To put it in DOM
    initTaskList(tasks);

}

export const addTask=(e)=>{
    e.preventDefault();
    const taskValue=inputElement.value ;

    if(!taskValue) return;

    const task={
        value:taskValue,
        isCompleted:false,
    }

    const tasks=fetchData("tasks") || [];

    tasks.push(task);
    saveToDB("tasks",tasks);

    initTaskList(tasks);
}

export const saveToDB=(key,data)=>{
    localStorage.setItem(key, JSON.stringify(data));
}

export const initDataOnStartup=()=>{
    fetchData('darkModeFlag') && darkThemeMode();
    initTaskList(fetchData('tasks'));
}

export const renderEmptyState=()=>{
    taskListElement.innerHTML=`
    <li class='EmptyList' />
        <img class="EmptyList__img" src='/todo-app/assets/icon-empty.svg' alt='list is empty'/>
        <p> قائمة المهام فارغة </p>
    </li>
    `;
}

export const initTaskList=(tasks)=>{

    if(tasks?.length){
        renderTaskList(tasks);
        initTaskListener();
    }
    else{
        renderEmptyState();
    }
    
}

export const toggleTask = (e, index) => {
    const tasks = fetchData("tasks");

    e.currentTarget.parentElement.classList.toggle('TaskList__taskContent--isActive');
    tasks[index].isCompleted = !tasks[index].isCompleted;
    saveToDB("tasks", tasks);
}