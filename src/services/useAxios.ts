import axios from "axios";

// Singleton pattern for Axios instance

const BASE_URL = "https://catfact.ninja";
// console.log(import.meta.env.VITE_MAIN_PATH)
// const BASE_URL = import.meta.env.VITE_MAIN_PATH;
const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

// Service Get Random Cat เเบบที่ 1
export const fetchRandomCat1 = async () => {
  try {
    const response = await httpClient.get("/fact");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching random cat fact:", error);
    throw error;
  }
};

// Service Get Random Cat เเบบที่ 2
export const fetchRandomCat2 = async () => {
  axios
    .get("https://catfact.ninja/fact")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching random cat fact:", error);
      return error;
    });
};

// Service Post Login
export const fetchLogin = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    //ขึ้นอยู่กับหลังบ้านว่าจะรับ request raw JSON
    const payloads = {
        Username: payload.email,
        Password: payload.password
    }

    //ขึ้นอยู่กับหลังบ้านว่าจะรับ request formData
    const fd = new FormData();
    fd.append("Email", payload.email)
    fd.append("Password", payload.password)

    const response = await axios.post("http://localhost:8080/login", payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching login:", error);
    throw error;
  }
};
