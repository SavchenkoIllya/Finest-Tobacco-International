import axios from "axios";

export const axiosClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_STRAPI_URL
      : process.env.NEXT_PUBLIC_STRAPI_DEVELOP_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_STRAPI_API_KEY : process.env.NEXT_PUBLIC_STRAPI_API_DEVELOP_KEY}`,
  },
});
