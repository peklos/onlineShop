console.log('asdasda')
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
    });

// const grayBuy = document.querySelector('.hpc-bna');
// const redBuy = document.querySelector('.hpc-ba');

// grayBuy.addEventListener('click', () => {
//   grayBuy.style.display = 'none';
//   redBuy.style.display = 'inline-block'; // inline-block для сохранения размера
// });

// //Дополнительно: вернем серый сердечко обратно при повторном нажатии
// redBuy.addEventListener('click', () => {
//   redBuy.style.display = 'none';
//   grayBuy.style.display = 'inline-block';
// });

// function handleHeartClicks() {
//   const grayHearts = document.querySelectorAll('.hpc-lna');
//   const redHearts = document.querySelectorAll('.hpc-la');

//   grayHearts.forEach((grayHeart, index) => {
//     const redHeart = redHearts[index];  //  Важно:  предполагается, что индексы совпадают

//     if (redHeart) { // проверка на существование соответствующего красного сердечка
//       grayHeart.addEventListener('click', () => {
//         grayHeart.style.display = 'none';
//         redHeart.style.display = 'inline-block';
//       });

//       redHeart.addEventListener('click', () => {
//         redHeart.style.display = 'none';
//         grayHeart.style.display = 'inline-block';
//       });
//     } else {
//       console.warn(`Красное сердечко не найдено для серого сердечка с индексом ${index}`);
//     }
//   });
// }


// document.addEventListener('DOMContentLoaded', handleHeartClicks);


function handleAllClicks() {
  const grayHearts = document.querySelectorAll('.hpc-lna');
  const redHearts = document.querySelectorAll('.hpc-la');
  const grayCompares = document.querySelectorAll('.hpc-cna');
  const redCompares = document.querySelectorAll('.hpc-ca');
  const grayBuys = document.querySelectorAll('.hpc-bna');
  const redBuys = document.querySelectorAll('.hpc-ba');

  grayHearts.forEach((grayHeart, index) => {
    const redHeart = redHearts[index];
    const grayCompare = grayCompares[index];
    const redCompare = redCompares[index];
    const grayBuy = grayBuys[index];
    const redBuy = redBuys[index];

    if (redHeart) { // проверка на существование соответствующего красного сердечка
      grayHeart.addEventListener('click', () => {
        grayHeart.style.display = 'none';
        redHeart.style.display = 'inline-block';
      });

      redHeart.addEventListener('click', () => {
        redHeart.style.display = 'none';
        grayHeart.style.display = 'inline-block';
      });
    } else {
      console.warn(`Красное сердечко не найдено для серого сердечка с индексом ${index}`);
    }
    if (redCompare) { // проверка на существование соответствующего красного сердечка
      grayCompare.addEventListener('click', () => {
        grayCompare.style.display = 'none';
        redCompare.style.display = 'inline-block';
      });

      redCompare.addEventListener('click', () => {
        redCompare.style.display = 'none';
        grayCompare.style.display = 'inline-block';
      });
    } else {
      console.warn(`Активных сравнений не найдено для серого сравнения с индексом ${index}`);
    }
    if (redBuy) { // проверка на существование соответствующего красного сердечка
      grayBuy.addEventListener('click', () => {
        grayBuy.style.display = 'none';
        redBuy.style.display = 'inline-block';
      });

      redBuy.addEventListener('click', () => {
        redBuy.style.display = 'none';
        grayBuy.style.display = 'inline-block';
      });
    } else {
      console.warn(`Активной корзины не найдено для инактивной корзины с индексом ${index}`);
    }
  });
}

document.addEventListener('DOMContentLoaded', handleAllClicks);
