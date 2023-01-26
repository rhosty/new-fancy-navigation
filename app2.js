const icon = document.getElementById('icon');
const menuBar = document.getElementsByClassName('menuBar')
const menuOverlay = document.getElementById('menuOverlay');
const backButton = document.getElementById('back');

// eventlisteners 
icon.addEventListener('click', turnNavIcon)
icon.addEventListener('click', toggleMenuBar)
Array.from(menuBar).forEach((item) => {
    item.addEventListener('click', expandMenuBarHorizontal)
});
Array.from(menuBar).forEach((item) => {
    item.addEventListener('click', showBackButton)
});
Array.from(menuBar).forEach((item) => {
    item.addEventListener('click', hideIcon)
});
back.addEventListener('click', backButtonFunction)

// function that turns the navbar icon
function turnNavIcon(){
    icon.style.transform += 'rotate(90deg)';
};

//  makes the menuBars slide in with a delay
function toggleMenuBar(){
    let delay = 1;
    Array.from(menuBar).forEach((menuBar) => {
    setTimeout(() => {
        menuBar.classList.toggle('active');
        console.log()
    }, 100 * (delay++));
    });
    };

// expand and collapse menurBar horizontally
function expandMenuBarHorizontal(){
    Array.from(menuBar).forEach((menuBar) => {
        this.classList.toggle('horizontal')
        menuBar.classList.toggle('menubarCollapsed')
    })
 };

 //make backButton appear
function showBackButton(){
    back.classList.toggle('showBackButton');
}

//hide navbar icon 
function hideIcon(){
    icon.classList.toggle('hideIcon');
}

//functionallity for back button
function backButtonFunction(){
    Array.from(menuBar).forEach((menuBar) => {
        menuBar.classList.remove('horizontal');
        menuBar.classList.remove('menubarCollapsed');
        icon.classList.toggle('hideIcon');
        back.classList.toggle('showBackButton');
    })
};
