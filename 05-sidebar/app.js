const sidebar = document.querySelector('.sidebar');
const togglebtn = document.querySelector('.sidebar-toggle');
const closebtn = document.querySelector('.close-btn');

togglebtn.addEventListener('click',()=>{
    sidebar.classList.toggle('show-sidebar');
});

closebtn.addEventListener('click',()=>{
    sidebar.classList.remove('show-sidebar');
})
