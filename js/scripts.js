$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var spongebob = 0;
    var patrick = 0;
    var sandy = 0;
    var squidward = 0;
    var iceCream = parseInt($("#ice").val());
    var activity = $("#activity").val();
    var music = $("#music").val();

    if(iceCream === 1) {
      sandy += 1;
    } else if (iceCream === 2) {
      patrick += 1;
    } else if (iceCream === 3) {
      spongebob += 1;
    } else if (iceCream === 4) {
      squidward += 1;
    }

    if(activity === 'A') {
      sandy += 1;
    } else if (activity === 'B') {
      squidward += 1;
    } else if (activity === 'C') {
      patrick += 1;
    } else if (activity === 'D') {
      spongebob += 1;
    }

    if(music === 'A') {
      sandy += 1;
    } else if (music === 'B') {
      squidward += 1;
    } else if (music === 'C') {
      patrick += 1;
    } else if (music === 'D') {
      spongebob += 1;
    }

    if (sandy >= squidward && sandy >= spongebob && sandy >= patrick) {
      $(".sandy").show();
      $(".patrick").hide();
      $(".squidward").hide();
      $(".spongebob").hide();
    } else if (patrick >= squidward && patrick >= spongebob && patrick >= sandy) {
      $(".patrick").show();
      $(".sandy").hide();
      $(".squidward").hide();
      $(".spongebob").hide();
    } else if (squidward >= sandy && squidward >= spongebob && squidward >= patrick) {
      $(".squidward").show();
      $(".patrick").hide();
      $(".spongebob").hide();
      $(".sandy").hide();
    } else if (spongebob >= squidward && spongebob >= sandy && spongebob >= patrick) {
      $(".spongebob").show();
      $(".patrick").hide();
      $(".squidward").hide();
      $(".sandy").hide();
    }

    event.preventDefault();
  });
});
