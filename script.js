function showValue() {
 
    var name = document.getElementById('text_input').value;
    document.getElementById('show').innerHTML = name;


    if(document.getElementById('show').innerHTML == ''){
      document.getElementById("show").classList.add("defaultFont");
      noneFunction();
    }

    // console.log(document.getElementById('show').innerHTML);
}
  function defaultfont(){
    // var name = document.getElementById('text_input').value;
    document.getElementById("show").classList.add("defaultFont");

  }

//  all font funtion start from here

  function fancyFont(){
    document.getElementById("show").classList.remove("defaultFont");
    document.getElementById("show").style.fontFamily = "fancy";
   

  }
  function impactFont(){
    document.getElementById("show").classList.remove("defaultFont");
    document.getElementById('show').style.fontFamily =  "Impact";
  }
  function verdanaFont(){
    document.getElementById("show").classList.remove("defaultFont");
    document.getElementById('show').style.fontFamily = "Verdana" ;
  }

  function ConsolasFont(){
    document.getElementById("show").classList.remove("defaultFont");
    document.getElementById('show').style.fontFamily =  "Consolas";
  }


 function GaramondFont(){
  document.getElementById("show").classList.remove("defaultFont");
    document.getElementById('show').style.fontFamily =  "Garamond";
  }
  
//  all font funtion end here



// none animation starts

function noneFunction(){
    document.getElementById("show").classList.remove("rainbow");
    document.getElementById("show").classList.remove("test1");
    document.getElementById("show").classList.remove("wavy");
    document.getElementById("show").classList.remove("text_glow");
    document.getElementById("show").classList.remove("span");
}
// none animation ends


// animation function start 

 function moveFunction(){
    document.getElementById("show").classList.remove("rainbow");
    document.getElementById("show").classList.remove("wavy");
    document.getElementById("show").classList.remove("text_glow");
    document.getElementById("show").classList.remove("span");
    document.getElementById("show").classList.add("test1");
    
 }

  function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
                console.log(document.getElementById('blah').src)
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }                 
  $("#imgInp").change(function(){
           readURL(this);
    });


//  Text animation funtion start from here

function textFunction(){

      document.getElementById("show").classList.remove("rainbow");
      document.getElementById("show").classList.remove("test1");
      document.getElementById("show").classList.remove("wavy");
      document.getElementById("show").classList.remove("text_glow");
      // document.getElementById("show").classList.remove("span");
      document.getElementById("show").classList.add("span");

      const text = document.querySelector('.fancy');
      console.log(text);
      const strText = text.textContent;
      // console.log(strText);
      const splitText = strText.split("");
      // console.log(splitText);
      text.textContent = "";

      for(let i =0; i < splitText.length; i++){
            text.innerHTML += "<span>" + splitText[i] + "</span>";
      }

      let char = 0;
      let timer = setInterval(onTick,50);

      function onTick(){
          const span = text.querySelectorAll('span')[char];
          span.classList.add('fade');
          char++;
          if(char === splitText.length){
              complete();
              return;
          }
      }
      function complete(){
          clearInterval(timer);
          timer = null;
      }  
}
//  Text animation funtion end here



//  rainbow animation funtion start from here
function raibowFunction(){
      // console.log("for checking purpose");
    document.getElementById("show").classList.remove("test1");
    document.getElementById("show").classList.remove("wavy");
    document.getElementById("show").classList.remove("text_glow");
    document.getElementById("show").classList.remove("span");
    document.getElementById("show").classList.add("rainbow");
        // element.classList.add("my-class");
   }
//  rainbow animation funtion end here

//  Text fill animation funtion start from here
function glowFunction(){
  //console.log("it's working");
    document.getElementById("show").classList.remove("rainbow");
    document.getElementById("show").classList.remove("test1");
    
    const text = document.getElementById("show");
    const p = document.getElementsByTagName('p');
    console.log(p);
    const b = text.querySelectorAll('b');
    // console.log(b);

    console.log(document.querySelectorAll('b')[1]);
    const l = document.getElementsByClassName("each").length;

    for(var i=0; i< l; i++){
      document.querySelectorAll('b')[i].classList.remove("each");
    }
    if(document.querySelector('b')){

      document.querySelector('b').classList.remove("each");
    }
 

    document.getElementById("show").classList.remove("wavy");
    // document.getElementsByTagName("show").classList.remove("wavy");
    
    document.getElementById("show").classList.remove("span");
    document.getElementById("show").classList.add("text_glow");
}

//  text fill animation funtion ends here



// wavy animation starts here
function wavyFunction(){

    document.getElementById("show").classList.remove("rainbow");
    document.getElementById("show").classList.remove("test1");
    document.getElementById("show").classList.remove("text_glow");
    document.getElementById("show").classList.remove("span");
    document.getElementById("show").classList.add("wavy");

    const text = document.querySelector('.fancy');
    console.log(text);
    const strText = text.textContent;

    const splitText = strText.split("");
    // console.log(splitText);
    text.textContent = "";
    var j;
    for(let i =0; i < splitText.length; i++){
        text.innerHTML += "<b class = 'wavy'; style='--j:i+1;'>" + splitText[i] + "</b>";
        
       
    }
    let char = 0;
    let timer = setInterval(onTick,50);

    function onTick(){
        const b = text.querySelectorAll('b')[char];
        b.classList.add('each');
        char++;
        if(char === splitText.length){
            complete();
            return;
        }
    }
    function complete(){
        clearInterval(timer);
        timer = null;
    }

}
// wavy animation ends here
