import axios from "axios";
import { ApiKey } from "../ApiKey/ApiKey";

export const GetDados = async () => {
  try {
    const headers = {
      "x-api-key": ApiKey.token,
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("AUTH_TOKEN"),
    };

    const response = await axios.get(
      "https://arnia-kanban.vercel.app/api/card",
      { headers }
    );

    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
  }
};
