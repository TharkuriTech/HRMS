import axios from "axios";

// Base config for all API calls
const API_BASE_URL = "https://localhost:5001/api"; // Change this to your actual API base URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Common GET method
export const apiGet = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return { success: true, data: response.data };
  } catch (error) {
    handleApiError(error);
    return { success: false, error: error.response?.data || error.message };
    throw error;
  }
};

// Common POST method
export const apiPost = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
     return { success: true, data: response.data };
  } catch (error) {
    handleApiError(error);
    return { success: false, error: error.response?.data || error.message };
    throw error;
  }
};

// PUT
export const apiPut = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return { success: true, data: response.data };
  } catch (error) {
    handleApiError(error);
    return { success: false, error: error.response?.data || error.message };
    throw error;
  }
};

// DELETE
export const apiDelete = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return { success: true, data: response.data };
    return response.data;
  } catch (error) {
    handleApiError(error);
    return { success: false, error: error.response?.data || error.message };
    throw error;
  }
};

// Common error handler
const handleApiError = (error) => {
    
  if (error.response) {
    console.error("API Error:", error.response.status, error.response.data);
  } else {
    console.error("API Error:", error.message);
  }
};
