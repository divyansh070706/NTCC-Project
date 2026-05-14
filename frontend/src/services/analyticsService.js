import api from "./api";

export const fetchAnalytics = async () => {
  const response = await api.get("/analytics");

  return response.data;
};