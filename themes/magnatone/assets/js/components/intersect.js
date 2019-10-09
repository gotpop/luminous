// let options = {
//     root: document.querySelector('#scrollArea'),
//     rootMargin: '0px',
//     threshold: 1.0
// }

// let observer = new IntersectionObserver(callback, options);

// document.addEventListener("DOMContentLoaded", function () {
//     const imageObserver = new IntersectionObserver((entries, imgObserver) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 const lazyImage = entry.target
//                 console.log("lazy loading ", lazyImage)
//                 lazyImage.src = lazyImage.dataset.src
//                 lazyImage.classList.remove("lzy_img");
//                 imgObserver.unobserve(lazyImage);
//             }
//         })
//     });
//     const arr = document.querySelectorAll('img.lzy_img')
//     arr.forEach((v) => {
//         imageObserver.observe(v);
//     })
// });
