import axios from "axios";

const BASE_URL = "http://localhost:8085/api/inspiration";

export const getInspirationsByUser = (userId, page = 0, size = 5) =>
  axios.get(`${BASE_URL}/user/${userId}?page=${page}&size=${size}`);

export const addInspiration = (inspiration) =>
  axios.post(BASE_URL, inspiration);
