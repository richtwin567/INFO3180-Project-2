import { authHeader } from "@/services/headers.service.js";

const API_ENDPOINT = "https://united-auto-sales.herokuapp.com/api";

export async function addNewCar(carData) {
  var header = authHeader();
  return await fetch(`${API_ENDPOINT}/cars`, {
    method: "POST",
    headers: {
      ...header,
    },
    body: carData,
  })
    .then(async (res) => {
      if (res.status != 201) {
        return res.json();
      } else {
        return res.json();
      }
    })
    .catch((err) => console.log(err));
}
