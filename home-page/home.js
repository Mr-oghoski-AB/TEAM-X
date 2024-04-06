let sideBar = document.getElementById('sidebar');
let openSideBar = document.getElementById('btn');
let closeSideBar = document.querySelector('#bod');



openSideBar.addEventListener ('click', function (e) {
    if (sideBar.style.width == '0%'){
        sideBar.style.width = '65%';
        sideBar.style.padding ='20px'
        sideBar.style.transition = '0.2s linear'
    }
    else {
        sideBar.style.width = '65%';
        sideBar.style.padding ='20px';
    }
})

closeSideBar.addEventListener ('click', function (e){
    if (sideBar.style.width == '65%'){
        sideBar.style.width = '0%';
        sideBar.style.padding = '0px'
        sideBar.style.transition = '0.1s'
    };
   
})


