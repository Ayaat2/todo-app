(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const _=document.querySelector(".DarkThemeToggle"),r=document.querySelector(".App"),k=document.querySelector(".TaskSearchBar__button"),f=document.querySelector(".TaskSearchBar__input"),a=document.querySelector(".TaskList__list"),i=document.querySelector(".TaskList__link"),L=()=>document.querySelectorAll(".TaskList__deleteIcon"),T=()=>document.querySelectorAll(".TaskList__checkbox"),l=t=>{const e=localStorage.getItem(t);return e?JSON.parse(e):!1},g=()=>{r==null||r.classList.toggle("App--isDark"),d("darkModeFlag",r==null?void 0:r.classList.contains("App--isDark"))},v=t=>{let e="";t.forEach(s=>{e+=`
    <li class="TaskList__taskContent${s.isCompleted?" TaskList__taskContent--isActive":""}">
        <div class="TaskList__checkbox" tabindex="0" role="button">
            <img class="TaskList__checkboxImg" src="/todo-app/assets/icon-checkmark.svg" alt="icon-checkmark"/>
        </div>
        <div class="TaskList__valueContent">
            <p class="TaskList__value">
                ${s.value}
            </p>
            <img class="TaskList__deleteIcon" src="/todo-app/assets/icon-basket.svg" alt="basket-icon"/>
        </div>
    </li>
    `}),a.innerHTML=e,f.value=""},y=(t,e)=>{if(confirm("هل انت متأكد من حذف المهمة")===!1)return;const n=l("tasks");n.splice(e,1),d("tasks",n),m(n)},h=t=>{t.preventDefault();const e=f.value;if(!e)return;const s={value:e,isCompleted:!1},n=l("tasks")||[];n.push(s),d("tasks",n),m(n)},d=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},S=()=>{l("darkModeFlag")&&g(),m(l("tasks"))},E=()=>{a.innerHTML=`
    <li class='EmptyList'>
        <img class="EmptyList__img" src="/todo-app/assets/icon-empty.svg" alt='list is empty'/>
        <p> قائمة المهام فارغة </p>
    </li>
    `},m=t=>{t!=null&&t.length?(v(t),b()):E()},p=(t,e)=>{const s=l("tasks");t.currentTarget.parentElement.classList.toggle("TaskList__taskContent--isActive"),s[e].isCompleted=!s[e].isCompleted,d("tasks",s)},b=()=>{L().forEach((t,e)=>{t.addEventListener("click",s=>y(s,e))}),T().forEach((t,e)=>{t.addEventListener("click",s=>p(s,e)),t.addEventListener("keydown",s=>{s.key==="Enter"&&p(s,e)})})},C=()=>{_.addEventListener("click",g),k==null||k.addEventListener("click",h),i==null||i.addEventListener("click",()=>{a==null||a.classList.toggle("TaskList__list--hideCompleted"),i==null||i.classList.toggle("TaskList__link--isActive")})};S();C();
