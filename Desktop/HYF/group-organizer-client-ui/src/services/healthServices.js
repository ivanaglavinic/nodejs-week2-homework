import http from "../common/httpCommon";

export const getHealth = async () => {
  const result = await http.get("/members");
  return result.data;
};

export const create = async (data = {}) => {
  const result = await http.post("/members", data);
  return result;
};

export const update = async (id = 0, data = {}) => {
  const result = await http.put(`/members/${id}`, data);
  return result;
};