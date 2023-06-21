import axios from "axios";
import { ApiKey } from "../ApiKey/ApiKey";



type PutParams = {
  tile: string;
  content: string;
  column: string;
}

export const PutApi = async (id: string, title: string, content: string, column: string): Promise<PutParams> => {
  try {
    const headers = {
      "x-api-key": ApiKey.token,
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("AUTH_TOKEN"),
    };

    const response = await axios.put(
      `https://arnia-kanban.vercel.app/api/card/${id}`,
      {
        id,
        title,
        content,
        column: column

      },
      { headers }
    );
    
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
