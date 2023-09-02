import axios from "axios";

const instance = axios.create({
	baseURL: 'https://64ebaeb4e51e1e82c577948d.mockapi.io/',
});

export const appAPI = {
	catogories() {
		return instance.get(`catogories`).then(response => response.data)
	},
}