// // //   SELECT COLOR   // // //
const colorContainer = document.querySelector(".color-list");
const allColorThumbs = colorContainer.querySelectorAll(".color");

function toggleColorThumb(colorThumb) {
  allColorThumbs.forEach((thumb) => {
    thumb.classList.remove("border-black");
  });

  colorThumb.classList.add("border-black");
}

allColorThumbs.forEach((colorThumb) => {
  colorThumb.addEventListener("click", function () {
    toggleColorThumb(this);
  });
});

// // //   SELECT SIZE   // // //
const sizeContainer = document.getElementById("size-list");
const allSizeParagraphs = sizeContainer.querySelectorAll(".size");

function toggleSize(sizeParagraph) {
  allSizeParagraphs.forEach((paragraph) => {
    paragraph.classList.remove("border-black");
  });

  sizeParagraph.classList.add("border-black");
}

allSizeParagraphs.forEach((sizeParagraph) => {
  sizeParagraph.addEventListener("click", function () {
    toggleSize(this);
  });
});
