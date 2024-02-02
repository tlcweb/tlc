// // //   GRID OPTION PRODUCT   // // //
const mainProductImage = document.getElementById("main-product-image");
const productOption = document.getElementById("product-option");
const sectionProduct = document.querySelector("section");

// Fungsi untuk memindahkan #product-option menjadi anak dari #main-product-image
function moveProductOption() {
  if (window.innerWidth > 1024) {
    sectionProduct.appendChild(productOption);
  } else {
    // Jika lebar layar kurang dari atau sama dengan 1000px, kembalikan ke posisi awal
    mainProductImage.insertBefore(productOption, mainProductImage.children[1]);
  }
}

// Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
window.onload = moveProductOption;
window.onresize = moveProductOption;

// // // IMAGE SLIDER // // //
const initSlider = () => {
  const imageList = document.querySelector("#product-image .image-list");
  const slideButton = document.querySelectorAll("#product-image .slide-button");

  slideButton.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-image" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};
window.addEventListener("load", initSlider);

// // //   ZOOM IMAGE   // // //
const zoomImage = document.getElementById("zoomImage");

zoomImage.addEventListener("mousemove", function (e) {
  // Check screen width
  if (window.innerWidth >= 640) {
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;

    const xPercentage = (offsetX / clientWidth) * 100;
    const yPercentage = (offsetY / clientHeight) * 100;

    const transformOriginValue = `${xPercentage}% ${yPercentage}%`;
    const transformValue = `scale(5)`;

    zoomImage.style.transformOrigin = transformOriginValue;
    zoomImage.style.transform = transformValue;
  }
});

zoomImage.addEventListener("mouseleave", function () {
  // Check screen width
  if (window.innerWidth >= 640) {
    zoomImage.style.transformOrigin = "center center";
    zoomImage.style.transform = "scale(1)";
    // Move indicator off-screen on mouse leave
  }
});

// // //   CHANGE IMAGE   // // //
const productImage = document.getElementById("product-page");
const mainImage = document.querySelector(".main-image");

function changeMainImage(event) {
  // cek apakah yang di klik adalah thumb
  if (event.target.classList.contains("thumb")) {
    mainImage.src = event.target.src;
  }
}

function addOrRemoveEventListener() {
  const isLargeScreen = window.innerWidth > 640;

  if (isLargeScreen) {
    productImage.addEventListener("click", changeMainImage);
  } else {
    productImage.removeEventListener("click", changeMainImage);
  }
}

// Panggil fungsi pertama kali untuk menyesuaikan status saat halaman dimuat
addOrRemoveEventListener();

// Tambahkan event listener resize untuk memeriksa perubahan lebar layar
window.addEventListener("resize", addOrRemoveEventListener);

// // //   SIZE CHART   // // //
const sizeTitle = document.querySelector(".size-title");
const sizeChart = document.querySelector(".size-chart");
const closeChart = document.querySelector(".close-chart");

sizeTitle.addEventListener("click", function () {
  sizeChart.classList.remove("scale-0");
  sizeChart.classList.add("scale-100");
});
closeChart.addEventListener("click", function () {
  sizeChart.classList.add("scale-0");
  sizeChart.classList.remove("scale-100");
});

// // FITUR BORDER KLIK
function initializeSelection(containerId, itemClass) {
  const container = document.getElementById(containerId);
  const allItems = container.querySelectorAll(`.${itemClass}`);

  function toggleSelectedItem(selectedItem) {
    allItems.forEach((item) => {
      item.classList.remove("border-black");
    });

    selectedItem.classList.add("border-black");
  }

  allItems.forEach((item) => {
    item.addEventListener("click", function () {
      toggleSelectedItem(this);
    });
  });
}

// Inisialisasi pemilihan warna
initializeSelection("color-list", "color");

// Inisialisasi pemilihan ukuran
initializeSelection("size-list", "size");

// // //   JUMLAH PRODUK   // // //
const quantityContainer = document.querySelector(".quantityContainer");
const quantityValueElement = document.querySelector(".quantityValue");
const incrementButton = document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");

// Menambahkan event listener pada tombol "+"
incrementButton.addEventListener("click", function () {
  // Mendapatkan nilai saat ini
  let currentValue = parseInt(quantityValueElement.innerText);

  // Memastikan nilai minimum adalah 1
  if (currentValue < 1) {
    currentValue = 1;
  } else {
    // Menambah satu ke nilai saat ini
    currentValue++;
  }

  // Mengupdate nilai span
  quantityValueElement.innerText = currentValue;
});

// Menambahkan event listener pada tombol "-"
decrementButton.addEventListener("click", function () {
  // Mendapatkan nilai saat ini
  let currentValue = parseInt(quantityValueElement.innerText);

  // Memastikan nilai minimum adalah 1
  if (currentValue > 1) {
    // Mengurangkan satu dari nilai saat ini
    currentValue--;
  }

  // Mengupdate nilai span
  quantityValueElement.innerText = currentValue;
});

// /// Ambil elemen-elemen yang diperlukan
// const container = document.getElementById("product-page");
// const left = document.getElementById("main-product-image");
// const right = document.getElementById("product-option");

// // Fungsi untuk menangani event scroll
// const handleScroll = () => {
//   const screenWidth = window.innerWidth;

//   // Cek apakah lebar layar lebih besar atau sama dengan 1024px
//   if (screenWidth >= 1024) {
//     // Menghitung tinggi div kanan
//     const rightHeight = right.offsetHeight;

//     // Tambahkan kondisi untuk mengubah posisi "sticky" pada div kanan
//     if (left.getBoundingClientRect().bottom <= 0) {
//       right.style.position = "sticky";
//       right.style.top = "0";
//     } else {
//       right.style.position = "static";
//     }
//   }
// };

// // Tambahkan event listener untuk mengubah posisi "sticky" pada div kanan saat melakukan scroll
// left.addEventListener("scroll", handleScroll);

// // Tambahkan event listener untuk menanggapi perubahan lebar layar
// window.addEventListener("resize", handleScroll);
