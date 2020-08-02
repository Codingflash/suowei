window.onload=function(){
      var win=document.getElementsByClassName("window")[0];
      var box=document.getElementsByClassName("box")[0];
      var btns=document.querySelectorAll(".btns li");
      var winW=parseInt(getComputedStyle(win,null).width);


    //   自动轮播
      var num=0;
      function move(){
        num++;
          if(num>btns.length-1){
            animate(box,{
             "margin-left":-num*winW
         },500,Tween.Linear,function(){
               box.style.marginLeft=0;
         })
         num=0;

          }else{

          
         animate(box,{
             "margin-left":-num*winW
         },500)
        }
         for(var i=0;i<btns.length;i++){
             btns[i].style.background="#686868";
         }
         btns[num].style.background="#C6C6C6";
        
      }
      var t=setInterval(move,3000);


    //   按钮轮播
    for(let i=0;i<btns.length;i++){
        btns[i].onclick=function(){
            num=i;
            animate(box,{
             "margin-left":-num*winW
         },500)
         for(var j=0;j<btns.length;j++){
             btns[j].style.background="#686868";
         }
         btns[num].style.background="#C6C6C6";
        }
    }


    // 鼠标移入移出
     win.onmouseover=function(){
         clearInterval(t);
     }


     win.onmouseout=function(){
        t=setInterval(move,3000);
    }
    




    // 固定导航栏
    var gu = document.querySelector(".gu-nav-box");
    var aboutTitle = document.querySelector(".about-title");
    var aboutMid = document.querySelector(".about-mid");
    window.onscroll = function () {
        var st = document.documentElement.scrollTop;
        if (st > 30) {
            animate(gu, {
                top: 0
            },300)
        } else {
            animate(gu, {
                top:-100
            },300)
        }
        if (st > 140) {
            animate(aboutTitle, {
                display: "block",
                opacity:1
            },300)
        }
        if (st > 170) {
            animate(aboutMid, {
                opacity:1
            },600)
        }
    }
}