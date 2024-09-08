function shrinkOverlay() {
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    left.classList.add('shrinklr');  
    right.classList.add('shrinklr');
    const top = document.getElementById('top');
    const bottom = document.getElementById('bottom');
    top.classList.add('shrinktb'); 
    bottom.classList.add('shrinktb'); 
    const logo = document.getElementById('logo');
    const login = document.getElementById('login');
    logo.classList.remove('icon');
    const celeb = document.getElementById('celeb');
     celeb.style.display = "none"
  
    setTimeout(() => {
        login.classList.add('mv');
    }, 1000);  
}


function login() {
    const btn = document.getElementById('btn');
    btn.innerHTML="";
    btn.innerHTML=`  <div class="spinner"></div>`;

 
    setTimeout(() => {
        shrinkOverlay();
    }, 1300); 
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
     
    }, 1000);  
}

function openlogo(){
    const logo = document.getElementById('logo');
    const celeb = document.getElementById('celeb');
    logo.classList.add('icon');
    
    setTimeout(() => {
       
        chk();
       celeb.style.display = "block"
        
    }, 2000); 
}


function spread() {
    const con = document.getElementById('container');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
   
    con.classList.add('con');  
    left.classList.add('spreadlr');  
    right.classList.add('spreadlr');  
    const top = document.getElementById('top');
    const bottom = document.getElementById('bottom');
    top.classList.add('spreadtb'); 
    bottom.classList.add('spreadtb');
     
    setTimeout(() => {
        openmodal()
        openlogo()
      
    }, 2000);
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


function mutatecheckbox(){
    const box = document.getElementById('checkbox');
    if(box.innerHTML === ''){

        box.innerHTML = '&#10004;'
    }
    else{
        box.innerHTML = ''
    }
}

function changeborder(x){
    const inp1 = document.getElementById('inp1');
    const inp2 = document.getElementById('inp2');
    if(x===1){
        inp1.style.border = '1px solid #50dfc7'
        inp2.style.border = '1px solid #868686'
    }
    else{
         inp2.style.border = '1px solid #50dfc7'
        inp1.style.border = '1px solid #868686'
    }

}


function validateinput(){
    const inp1 = document.getElementById('i1').value;
    
    const inp2 = document.getElementById('i2').value;
    const btn = document.getElementById('btn');

    if(inp1 && inp2){
        console.log(inp1, inp2)
        btn.style.backgroundColor="#007663";
        btn.disabled = false;
    }
    else{

       
        btn.style.backgroundColor="#919292";
        btn.disabled = true;
    }
}


function label1(){
    const inp1 = document.getElementById('i1');
    
    
    if(inp1.value){
        inp1.classList.add('has-content');
    }
    else{
        inp1.classList.remove('has-content');
    }
}

function label2(){

    const inp2 = document.getElementById('i2');
    
    if(inp2.value){
        inp2.classList.add('has-content');
    }
    else{
        inp2.classList.remove('has-content');
    }
}