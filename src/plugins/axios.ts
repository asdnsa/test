import axios from "axios";

const $axios = axios.create({
  baseURL:process.env.VUE_APP_API_URL+process.env.VUE_APP_API_STORE_ID,
  headers:{
    common:{
      Authorization:`Bearer ${process.env.VUE_APP_API_TOKEN}`
    }
  }
});
export default $axios;
