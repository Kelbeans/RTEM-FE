import axios from "axios";

const apiManager = axios.create();
// TO DO - make sure to remove all console.logs in production build
const enableLogs = true;

if (enableLogs) {
  apiManager.interceptors.request.use((request) => {
    const method = request.method ? request.method.toUpperCase() : "UNKNOWN";
    console.log(method, request.url);
    console.log("Headers:", JSON.stringify(request.headers));
    if (request.params !== undefined && request.params !== null)
      console.log("Params:", JSON.stringify(request.params));
    if (request.data !== undefined && request.data !== null)
      console.log("Data:", JSON.stringify(request.data));
    return request;
  });

  apiManager.interceptors.response.use((response) => {
    console.log("Status:", JSON.stringify(response.status));
    if (response.data !== undefined && response.data !== null)
      console.log("Data:", JSON.stringify(response.data));
    return response;
  });
}

// apiManager.interceptors.request.use(
//   async (config) => {
//     const user = await retrieveUserSession();
//     if (user && user.token) {
//       const token = user.token;
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default apiManager;
