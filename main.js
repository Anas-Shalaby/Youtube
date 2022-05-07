let btn = document.querySelector(".logo");
let aside = document.querySelector("aside");
let video = document.querySelectorAll(".video");
let videoTitle = document.querySelectorAll(".video-title");
let creator = document.querySelectorAll(".video-creator");
let span = document.querySelectorAll(".title span");



btn.onclick = function() {
    if (aside.style.display == "none") {
        aside.style.display="block";
    }else {
        aside.style.display="none";
    }
    

    video.forEach((vid) =>{
        if (vid.style.width==330+"px") {
            vid.style.width=310+"px";
        }else {
            vid.style.width=330+"px";
        }
    })


    if (btn.classList.contains("toggle")) {
        btn.classList.remove("toggle");
        btn.style.transition=.1+"s";
    }else {
        btn.classList.add("toggle");
    }


   videoTitle.forEach(video => {
       if (video.style.fontSize === 2 +"rem") {
            video.style.fontSize=1.6+ "rem";
       }else {
           video.style.fontSize=2 + "rem";
       }
   });

   creator.forEach((creator =>{
       if (creator.style.fontSize=== 1.5 +"rem") {
            creator.style.fontSize = 1.2 +"rem";
       } else {
           creator.style.fontSize = 1.5 + "rem";
       }
   }))

   span.forEach((span =>{
       if (span.style.fontSize===1.3 +"rem") {
            span.style.fontSize = 1.2 +"rem";
       }else {
            span.style.fontSize=1.3 +"rem";
       }
   }))

}

