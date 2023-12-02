// Tüm h2 etiketlerininin rengini kırmızıya çevir.
$("h2").css("color", "red");

// Tüm butonların arka plan rengini yeşile çevir.
$("button").css("background-color", "green");

// paragraf-2 id'li paragrafı etiketini gizle.
$("#paragraf-2").hide();

// hide-me id'li butona tıklandığında hiding-text elementini gizle.
$("#hide-me").click(function () {
  $("#hiding-text").hide();
});

// Keyboard events
$("body").keydown(function (e) {
  switch (e.key) {
    case "h": // 'h' tuşu
      $("#keyboard-event-text").hide(); // Paragrafı gizle
      break;

    case "s": // 's' tuşu
      $("#keyboard-event-text").show(); // Paragrafı göster
      break;

    default:
      return; // Diğer tuşlara basıldığında hiçbir şey yapma
  }
  e.preventDefault(); // Tuşun varsayılan işlevini engelle
});

// Delayed and animated events
$("body").keydown(function (e) {
  switch (e.key) {
    case "k": // 'k' tuşu
      $("#delayed-text").hide(2000); // Paragrafı gizle
      break;

    case "l": // 'l' tuşu
      $("#delayed-text").show(2000); // Paragrafı göster
      break;

    default:
      return; // Diğer tuşlara basıldığında hiçbir şey yapma
  }
  e.preventDefault(); // Tuşun varsayılan işlevini engelle
});

// Toggle
$("#toggle-button").click(function () {
  $("#toggle-text").toggle("slow");
});

// Fade out
$("#fade-out-button").click(function () {
  $("#fade-out-text").fadeToggle();
});

// Fade to
$("#fade-to-button").click(function () {
  $("#fade-to-text").fadeTo("slow", 0.5);
});

// Slide Toggle. Sidebar yapımı ve hamburger menü yapımında kullanılabilir.
$("#slideToggleButton").click(function () {
  $("#slideToggleText").slideToggle("slow");
});

// Animate Method
let isWide = false;
$("#animateButton").click(() => {
  if (isWide) {
    $("#animateText").animate({ width: "200px" }, 1000, "swing");
    isWide = false;
  } else {
    $("#animateText").animate({ width: "400px" }, 1000, "swing");
    isWide = true;
  }
});

// DOM Manipulation

//text metodu
$("#changeButton").click(function () {
  $("#textToChange").text("Yazı değişti!");
});

// html metodu
$("#htmlChangeButton").click(function () {
  $("#htmlToChange").html(
    "<strong>Aşağıdaki butona bastığınızda bu paragrafın tümü strong etiketiyle vurgulanacaktır.</strong>"
  );
});

// Form İşlemleri

// Focus
$("input").focus(function () {
  $(this).css("background-color", "yellow");
});

// Blur
$("input").blur(function () {
  $(this).css("background-color", "");
});

// Submit
$("#reg-form").submit(function (event) {
  event.preventDefault();
  alert("Formunuz başarıyla gönderildi!");
});
