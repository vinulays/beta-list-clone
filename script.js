var like = parseInt($(".number").text()) + 1;
var flag = true;
var timeline1 = gsap.timeline({ repeatDelay: 0.7, paused: true });
timeline1

  .to(".like", { duration: 0.2, opacity: 0 }, "-=0.7")
  .to(".number", { duration: 0.2, opacity: 0, fontSize: 0 }, "-=0.7")
  .to(".fa", { duration: 0.1, display: "inline-block" }, "-=0.1")
  .to(".button", { duration: 0.7, width: 70 })
    
  
  .to(
    ".number",
    { duration: 0.2, opacity: 1, text: like, fontSize: 20 },
    "-=0.1"
  );

// $(".button").click(function () {
//   event.stopPropagation();
//   flag ? timeline1.play() : timeline1.progress(0).pause();
//   flag = !flag;
// });


