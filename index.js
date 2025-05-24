import { initListeners } from "./scripts/eventListener.js";
import { initDataOnStartup } from "./scripts/utils.js";


/* initDataOnStartup */
initDataOnStartup();

initListeners()


/* 
-DarkTheme :
[x]*create function => toggleDarkMode

-Tasks :
   [x] *saveToDB
    [x]*initDataOnStartup
    [x]*initTaskList
    [x]*create function => renderTaskList
    [x]*addTask
    [x]*deleteTask
    [x]*toggleTask
    [x]*toggleCompletedTask
    [x]*Empty State
    
*/