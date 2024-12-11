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

// fetch(
//   "https://api.auroras.live/v1/?type=all&lat=40.7813913&long=-73.976902&forecast=true&threeday=true"
// )
//   .then((Response) => Response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const locationName = "New York City";

fetch(
  `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    locationName
  )}&format=json&limit=1`,
  {
    headers: {
      "User-Agent": "YourAppName/1.0", // Replace with your own app name
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      console.log(`Latitude: ${lat}, Longitude: ${lon}`);
    } else {
      console.log("Location not found.");
    }
  })
  .catch((error) => {
    console.error("Error during geocoding:", error);
  });
