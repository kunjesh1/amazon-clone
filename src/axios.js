import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-6d9cd.cloudfunctions.net/api"
  // THE API (cloud function ) URL
});

export default instance;
// "http://localhost:5001/clone-6d9cd/us-central1/api"
