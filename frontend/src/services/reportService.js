import api from "./api";

export const fetchReports = async () => {
  const response = await api.get("/reports");

  return response.data;
};

export const generateReport = async () => {
  const response = await api.post("/reports/generate");

  return response.data;
};