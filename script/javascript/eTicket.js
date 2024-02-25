const getToken = () => fetch("https://eticket.railway.uz/api/v1/get/token", {
  method: "POST",
})

const request = () => fetch("https://eticket.railway.uz/api/v3/trains/availability/space/between/stations", {
  body: JSON.stringify({
    direction: [
      {
        depDate: "30.12.2023",
        fullday: true,
        type: "Forward"
      }
    ],
    stationFrom: "2900000",
    stationTo: "2900720",
    detailNumPlaces: 1,
    showWithoutPlaces: 0
  }),
  method: "POST",
  mode: "cors",
  credentials: "include"
});

async function findAfrosiyob() {
  try {
    const data = await request().then((res) => res.json())

    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
}


// Init
(() => {
  getToken()
})()