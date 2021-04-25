import { authHeader } from "@/services/headers.service.js";

const API_ENDPOINT = "http://localhost:9090/api";

export async function addNewCar(carData) {
	var header = authHeader();
	return await fetch(`${API_ENDPOINT}/cars`, {
		headers: {
			Accept: "application/json",
			"Content-Type": "multipart/form-data",
			...header,
		},
		body: carData,
	})
		.then((res) => {
			if (res.status != 201) {
				return res.json();
			} else {
				return null;
			}
		})
		.catch((err) => console.log(err));
}
