// function customizeSection() {
//   let sectionHeight = document.querySelector("body").offsetHeight;
//   let bodyHeight = window.innerHeight;
//   console.log(sectionHeight, bodyHeight);
//   if (sectionHeight < bodyHeight) {
//     $(".fyt-customize-section").removeClass(
//       "fyt-customize-section_full-height"
//     );
//   } else {
//     $(".fyt-customize-section").addClass("fyt-customize-section_full-height");
//   }
// }

function wizard() {
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    var target = $(e.target);
    // console.log(target);
    // setTimeout(() => {
    //   customizeSection();
    // }, 2000);

    if (target.parent().hasClass("disabled")) {
      return false;
    }
  });

  function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
  }

  function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
    $(".wizard-inner-indicator li.active").last().removeClass("active");
  }

  $(".next-step").click(function (e) {
    var active = $(".wizard .wizard-inner-indicator li.active");
    active.next().removeClass("disabled");
    nextTab(active);
    // customizeSection();
  });

  $(".prev-step").click(function (e) {
    var active = $(".wizard .wizard-inner-indicator li.active");
    prevTab(active);
  });

  $(".wizard-inner-indicator").on("click", "li", function () {
    // $(".wizard-inner-indicator li.active").removeClass("active");
    $(this).addClass("active");
  });
}

(function () {
  $(document).ready(function () {
    // customizeSection();
    wizard();

    $(".fyt-switch-input-btn_save").click(function () {
      $(".fyt-switch-input-btn_edit").removeClass("d-none");
      $(this).addClass("d-none");
    });

    $(".fyt-switch-input-btn_edit").click(function () {
      $(this).addClass("d-none");
      $(".fyt-switch-input-btn_save").removeClass("d-none");
      $(".fyt-switch-input-target").removeAttr("readonly");
      $(".fyt-switch-input-target").focus();
    });
  });
})();
