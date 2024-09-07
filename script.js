function shrinkOverlay() {
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    left.classList.add('shrinklr');  // Add the class to trigger the shrinking animation
    right.classList.add('shrinklr');  // Add the class to trigger the shrinking animation
    const top = document.getElementById('top');
    const bottom = document.getElementById('bottom');
    top.classList.add('shrinktb');  // Add the class to trigger the shrinking animation
    bottom.classList.add('shrinktb');  // Add the class to trigger the shrinking animation
    const logo = document.getElementById('logo');
    const login = document.getElementById('login');
    logo.classList.remove('icon');
    // Optionally hide the overlay after the animation completes
    setTimeout(() => {
        login.classList.add('mv');
    }, 1000);  // Matches animation duration
}

function openmodal() {
    const login = document.getElementById('login');
    
    login.classList.add('open'); 
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    const top = document.getElementById('top');
    const bottom = document.getElementById('bottom');
    left.classList.remove('spreadlr')
    right.classList.remove('spreadlr')
    top.classList.remove('spreadtb')
    bottom.classList.remove('spreadtb')
    setTimeout(() => {
       chk();
        // logo.classList.add('mv');
    }, 1000);  // Matches animation duration
}

function openlogo(){
    const logo = document.getElementById('logo');
    logo.classList.add('icon');
    setTimeout(() => {
       
        
       
        
    }, 2000); 
}


function spread() {
    const con = document.getElementById('container');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
   
    con.classList.add('con');  // Add the class to trigger the shrinking animation
    left.classList.add('spreadlr');  // Add the class to trigger the shrinking animation
    right.classList.add('spreadlr');  // Add the class to trigger the shrinking animation
    const top = document.getElementById('top');
    const bottom = document.getElementById('bottom');
    top.classList.add('spreadtb');  // Add the class to trigger the shrinking animation
    bottom.classList.add('spreadtb');
       // Add the class to trigger the shrinking animation
   
    // Optionally hide the overlay after the animation completes
    setTimeout(() => {
        openmodal()
        openlogo()
      
    }, 2000);  // Matches animation duration
}



window.onload = spread();

function chk (){
    const btn = document.getElementById('btn');
    const sg = document.getElementById('sg');
    const heading = document.getElementById('heading');
    const sub = document.getElementById('sub');
    const inp1 = document.getElementById('inp1');
    const inp2 = document.getElementById('inp2');
    const ck = document.getElementById('ck');
    const ck2 = document.getElementById('ck2');

    btn.classList.add('upm');
    sg.classList.add('up');
    heading.classList.add('upm');
    sub.classList.add('up');
    inp1.classList.add('up');
    inp2.classList.add('up');
    ck.classList.add('up');
    ck2.classList.add('up');
}