// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rndNumber = Math.random();
//     if (rndNumber > 0.5) {
//       resolve(rndNumber);
//     } else {
//       reject(new Error("ERROR!!!"));
//     }
//   }, 1000);
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// try {
//   console.log(huh);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("THIS WILL RUN EITHERWAY");
// }

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) =>
//     res.json().then((data) => {
//       console.log(data);
//     })
//   )
//   .catch((err) => {
//     console.log(err);
//   });

fetch("https://random.dog/woof.json")
  .then((res) =>
    res.json().then((data) => {
      getData(data.url);
    })
  )
  .catch((err) => {
    console.log(err);
  });

function getData(imgsrc) {
  const dogImgElem = document.createElement("img");
  dogImgElem.src = imgsrc;
  dogImgElem.style.height = "200";
  document.body.append(dogImgElem);
}
