document.addEventListener("DOMContentLoaded", function () {
  const changingWord = document.querySelector("#changing-word");

  const fontClasses = [
    "font-monoton",
    "font-bytesized",
    "font-arbutus",
    "font-cutive",
    "font-alien",
    "font-yuji",
    "font-chokokutai",
    "font-syne",
    "font-foldit",
    "font-climate",
    "font-smokum",
    "font-jacquarda",
    "font-bitcount",
    "font-special"
  ];

  let currentFont = 0;

  function changeFont() {
    if (!changingWord) return;

    changingWord.classList.remove(...fontClasses);
    changingWord.classList.add(fontClasses[currentFont]);

    currentFont = (currentFont + 1) % fontClasses.length;
  }

  changeFont();
  setInterval(changeFont, 1000);
});