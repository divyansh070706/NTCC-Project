import api from "./api";

export const fetchCustomers = async () => {
  const response = await api.get("/customers");

  return response.data;
};