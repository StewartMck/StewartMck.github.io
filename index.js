$(function () {

  $(".nav-button").click(() => {
    $(".contact-sidebar").css("width", "6em");
    $(".nav-button").css("visibility", "hidden");
  });

  $(".contact-sidebar .close-btn").click(() => {
    $(".contact-sidebar").css("width", "0");
    $(".nav-button").css("visibility", "visible");
  });

  $(".menu").click(() => {
    const chev = $(".menu-container").find("i").css("display");
    const selectProjects = $(".menu-selected-projects").css("display");
    const futureProjects = $(".menu-future-projects").css("display");
    const currentLearn = $(".menu-currently-learning").css("display");

    if (
      chev === "block" &&
      selectProjects === "block" &&
      futureProjects === "block" &&
      currentLearn === "block"
    ) {
      $(".menu-container").find("i").css("display", "none");
      $(".menu-selected-projects").css("display", "none");
      $(".menu-future-projects").css("display", "none");
      $(".menu-currently-learning").css("display", "none");
    } else {
      $(".menu-container").find("i").css("display", "block");
      $(".menu-selected-projects").css("display", "block");
      $(".menu-future-projects").css("display", "block");
      $(".menu-currently-learning").css("display", "block");
    }
  });

  $(".menu-currently-learning").click(() => {
    $(".projects").css("display", "none");
    $(".future-projects").css("display", "none");
    $(".continued-education").css("display", "flex");
  });

  $(".menu-selected-projects").click(() => {
    $(".projects").css("display", "flex");
    $(".future-projects").css("display", "none");
    $(".continued-education").css("display", "none");
  });

  $(".menu-future-projects").click(() => {
    $(".future-projects").css("display", "flex");
    $(".continued-education").css("display", "none");
    $(".projects").css("display", "none");
  });

  $('.contact-sidebar').click(()=>{
    $(".contact-sidebar").css("width", "0");
    $(".nav-button").css("visibility", "visible");
  })


});
