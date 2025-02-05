import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Attach Authorization token (Example: JWT token)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log("Request Intercepted:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log("Response Intercepted:", response);
    return response.data; // Modify response data if needed
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
        // Redirect to login page if unauthorized
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

// Example API call using the Axios instance
async function fetchData() {
  try {
    const data = await apiClient.get("/data");
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("API Error:", error);
  }
}

fetchData();
