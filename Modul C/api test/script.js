document.getElementById("searchBtn").addEventListener("click", () => {
  const locationName = document.getElementById("locationInput").value.trim();

  if (!locationName) {
    alert("Please enter a location");
    return;
  }

  fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      locationName
    )}&format=json&limit=1`,
    {
      headers: {
        "User-Agent": "YourAppName/1.0",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        let latitude = parseFloat(data[0].lat).toFixed(4);
        let longitude = parseFloat(data[0].lon).toFixed(4);
        const display_name = data[0].display_name;
        return { lat: latitude, lon: longitude, display_name };
      } else {
        throw new Error("Location not found");
      }
    })
    .then(({ lat, lon, display_name }) => {
      const auroraApiUrl = `https://api.auroras.live/v1/?type=ace&data=threeday&data=probability&lat=${lat}&long=${lon}`;

      console.log(auroraApiUrl);
      return fetch(auroraApiUrl)
        .then((response) => response.json())
        .then((auroraData) => {
          const { date, colour, value } = auroraData;

          const dateObj = new Date(date);

          const formattedDate = dateObj.toLocaleString("nb-NO", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });

          const resultDiv = document.getElementById("result");
          resultDiv.innerHTML = `<p><strong>Location:</strong> ${display_name}</p>
                                <h4>Aurora Data:</h4>
                                <p><strong>Date:</strong> ${formattedDate}</p>
                                <p><strong>Colour:</strong> ${colour}</p>
                                <p><strong>Value:</strong> ${value}</p>`;
        });
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").textContent = error.message;
    });
});
