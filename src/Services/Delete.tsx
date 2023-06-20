import axios from "axios";
import { ApiKey } from "../ApiKey/ApiKey";

export const GetDelete = async (id:string|null) => {
  try {
    const headers = {
      "x-api-key": ApiKey.token,
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("AUTH_TOKEN"),
    };

    await axios.delete(`https://arnia-kanban.vercel.app/api/card/${id}`, { headers });

    console.log("Cartão excluído com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir:", error);
  }
};
