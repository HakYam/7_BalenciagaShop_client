import axios from "axios";
const VITE_APIURL = import.meta.env.VITE_APIURL; // Or your preferred method
const VITE_UploadURL = import.meta.env.VITE_strapiAPIToken;


export const makeRequest = axios.create({
  baseURL: VITE_APIURL,
  headers: {
    Authorization: "Bearer " + `${VITE_UploadURL}` // Assuming token is obtained securely
  }

});
