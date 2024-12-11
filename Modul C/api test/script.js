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
        const { lat, lon, display_name } = data[0];
        return { lat, lon, display_name };
      } else {
        throw new Error("Location not found");
      }
    })
    .then(({ lat, lon, display_name }) => {
      const auroraApiUrl = `https://api.auroras.live/v1/?type=location&lat=${lat}&long=${lon}`;

      console.log(auroraApiUrl);
      return fetch(auroraApiUrl)
        .then((response) => response.json())
        .then((auroraData) => {
          const resultDiv = document.getElementById("result");
          resultDiv.innerHTML = `<p><strong>Location:</strong> ${display_name}</p>
                                <p><strong>Coordinates:</strong> ${lat}, ${lon}</p>
                                <h4>Aurora Data:</h4>
                                <pre>${JSON.stringify(
                                  auroraData,
                                  null,
                                  2
                                )}</pre>`;
        });
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").textContent = error.message;
    });
});
