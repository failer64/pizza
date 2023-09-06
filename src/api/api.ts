import axios from "axios";

const instance = axios.create({
	baseURL: 'https://64ebaeb4e51e1e82c577948d.mockapi.io/',
});

export const appAPI = {
	async getCatogories() {
		return await instance.get(`catogories`).then(response => response.data)
	},
	async getItems() {
		return await instance.get(`items`).then(response => response.data)
	},
}