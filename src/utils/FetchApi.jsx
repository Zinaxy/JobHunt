import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // Standard HTTP error response
            const { status } = error.response;
            if (status === 401) {
                localStorage.removeItem("ACCESS_TOKEN");
                // Redirect user to login or handle authentication error
            } else if (status === 404) {
                // Handle not found error
            }
            // Add more specific error handling as needed
        } else {
            // Non-standard error (e.g., network error)
            // console.error('Network error:', error.message);
            localStorage.removeItem("ACCESS_TOKEN");
            alert("Something Went Wrong : " + error.message);
        }

        throw error;
    }
);

export default axiosClient;
