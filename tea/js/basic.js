
    // window.onload=function qq () {
    //  // var oShow=document.getElementById("qqshow");
    //  // var oDiv=document.getElementById("qqdiv");

    //  qqshow.onmouseover=function change3(){
    //      // console.log();
    //          qqshow.style.display="none";
    //          qqdiv.style.display="block";
                
    //  }
        
    //  qqdiv.onmouseout=function change2(){
        
    //          qqshow.style.display="block";
    //          qqdiv.style.display="none";
                
    //  }
        
    // }
    /////////////////////qq显示隐藏///////////////初级///////////加载之前 先去清除下setInterval否则会多次加载效果，速度加快//////
    // window.onload=function  () {
        
    //     //a最左边出现的QQ头像
    //     var a=document.getElementById('qqshow');

    //     var b=document.getElementById("qqdiv");
    //     a.onmouseover=function  () {
    //         startMove();
    //     }
    //     b.onclick=function  () {
    //         startMove2();
    //     }
    //     var timer=null;
       

    //     function startMove () {
    //         var a=document.getElementById('qqshow');
    //             clearInterval(timer);
    //         timer=setInterval(function(){

    //                 if(b.offsetLeft>=0){
    //                     clearInterval(timer);
    //                 }else{
    //                     a.style.display="none";
    //                     b.style.left=b.offsetLeft+30+'px';
    //                 }},30);
    //     };
    //     function startMove2 () {
    //         var a=document.getElementById('qqshow');
    //             clearInterval(timer);
    //             timer=setInterval(function(){

    //             if(b.offsetLeft==-150){
    //                 clearInterval(timer);
    //             }else{
    //                 a.style.display="block";
    //                 b.style.left=b.offsetLeft-30+'px';
    //             }},30);
    //     };
        
    // }
    /////////////////////////////整合代码////////////////用传参的方式///////////////
    // window.onload=function  () {
        
    //     //a最左边出现的QQ头像
    //     var a=document.getElementById('qqshow');

    //     var b=document.getElementById("qqdiv");
    //     a.onmouseover=function  () {
    //         startMove(10,0,"none");
    //     }
    //     b.onclick=function  () {
    //         startMove(-10,-150,"block");
    //     }
    //     var timer=null;

    //     function startMove (speed,target,disPlay) {
    //         var a=document.getElementById('qqshow');
    //             clearInterval(timer);
    //         timer=setInterval(function(){

    //                 if(b.offsetLeft==target){
    //                     clearInterval(timer);
    //                 }else{
    //                     a.style.display=disPlay;
    //                     b.style.left=b.offsetLeft+speed+'px';
    //                 }},30);
    //     };
        
        
    // }
//////////////////////qq加动画///////////////////////////////
window.onscroll=function  () {
    var sTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var oBtn=document.getElementById("top");
    if(sTop>=500){
        oBtn.style.display="block";
    }else{
        oBtn.style.display="none";
    }

   
}
    window.onload=function  () {
        
        //a最左边出现的QQ头像
        var a=document.getElementById('qqshow');

        var b=document.getElementById("qqdiv");
        a.onmouseover=function  () {
            startMove(0,"none");
        }
        b.onclick=function  () {
            startMove(-150,"block");
        }
        var timer=null;

        function startMove (target,disPlay) {
            var a=document.getElementById('qqshow');
                clearInterval(timer);
            timer=setInterval(function(){
                    var speed=0;
                    if(b.offsetLeft<target){
                        speed=10;
                    }else{
                        speed=-10;
                    }
                    if(b.offsetLeft==target){
                        clearInterval(timer);
                    }else{
                        a.style.display=disPlay;
                        b.style.left=b.offsetLeft+speed+'px';
                    }},30);
        };
        //////////////////////////返回顶部/////////////

        var oImg=document.getElementById("imgTop");
        oImg.onmouseover=function  () {
            oImg.src="img/totop.jpg";
        }
        oImg.onmouseout=function  () {
            oImg.src="img/totop.png";
        }

        var oBtn=document.getElementById("top");

       
        var timer=null;
        oBtn.onclick=function  () {

            timer=setInterval(function  () {
                var sTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                        ////ie////////////////////////////////safari////////////////ie
                var speed=Math.floor(sTop/10);
                // console.log(speed,sTop);
                    document.documentElement.scrollTop-=speed;
                    document.body.scrollTop-=speed;
                    window.pageYOffset.scrollTop-=speed;
                    if(sTop<=10){
                        clearInterval(timer);
                        document.documentElement.scrollTop=0;
                        document.body.scrollTop=0;
                        window.pageYOffset.scrollTop=0;
                        oBtn.style.display="none";
                    }

            },30)
        }

    }
///////////////////////继续简化参数，把speed去掉/////////////////////////////////////////////////
 

// function toTop(id,show){
//     var oTop = document.getElementById(id);
//     var bShow = show;
//     if(!bShow){
//         oTop.style.display = 'none';
//         setTimeout(btnShow,50);
//     }
//     oTop.onclick = scrollToTop;
//     function scrollToTop(){
//         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//         var iSpeed = Math.floor(-scrollTop/2);
//         if(scrollTop <= 0){
//             if(!bShow){
//                 oTop.style.display = 'none';
//             }
//             return;
//         }
//         document.documentElement.scrollTop = document.body.scrollTop = scrollTop + iSpeed;
//         setTimeout(arguments.callee,50);
//     }
//     function btnShow(){
//         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//         if(scrollTop <= 0 ){
//             oTop.style.display = 'none';
//         }else{
//             oTop.style.display = 'block';
//         }
//         setTimeout(arguments.callee,50);
//     }
// }