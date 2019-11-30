import axios from "axios";
import { DEV_WAS_DOMAIN } from "../../shared/Contants";

axios.defaults.baseURL = `http://${DEV_WAS_DOMAIN}/api/v1`;

export const getUsers = () => axios.get("/users");

export const createUser = ({ user }) =>
  axios.post("/users", user, {
    headers: {
      "Content-Type": "application/json"
    }
  });

export const getUser = ({ idx }) => {
  axios.get("/users/" + idx);
};

export const updateUser = ({ user, idx }) => {
  axios.put("/users/" + idx, user);
};
