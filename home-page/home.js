let sideBar = document.getElementById('sidebar');
let openSideBar = document.getElementById('btn');
let closeSideBar = document.getElementById('bod');


openSideBar.addEventListener ('click', function (e) {
    if (sideBar.style.width == '0%'){
        sideBar.style.width = '65%';
        sideBar.style.padding ='20px'
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
    };
   
})


