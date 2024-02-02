// // //   CHANGE IMAGE   // // //
const productParts = document.querySelectorAll(".product-part");
const mainParts = document.querySelectorAll(".main-part");

function changemainPart(event) {
  if (event.target.classList.contains("thumb")) {
    const parentProductPart = event.target.closest(".product-part");
    const mainPart = parentProductPart.querySelector(".main-part");
    mainPart.src = event.target.src;
  }
}

function addOrRemoveEventListener() {
  const isLargeScreen = window.innerWidth > 640;

  productParts.forEach((productPart, index) => {
    if (isLargeScreen) {
      productPart.addEventListener("click", changemainPart);
    } else {
      productPart.removeEventListener("click", changemainPart);
    }
  });
}

// Panggil fungsi pertama kali untuk menyesuaikan status saat halaman dimuat
addOrRemoveEventListener();

// Tambahkan event listener resize untuk memeriksa perubahan lebar layar
window.addEventListener("resize", addOrRemoveEventListener);
