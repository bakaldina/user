$(document).ready(function() {
  $("#userInfo").on("click", function() {
    $(this)
      .closest("li")
      .toggleClass("active");
  });

  $("#menu_icon").on("click", function() {
    $(this)
      .closest(".header_menu")
      .toggleClass("active");
    return false;
  });
});
