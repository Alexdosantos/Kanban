import axios from "axios";
import { ApiKey } from "../ApiKey/ApiKey";



type UpdateParams = {
  tile: string;
  content: string;
  column: string;
  id: string;
};

export const Update = async (id:string,title: string, content: string, newColumn: string): Promise<UpdateParams> => {
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
        column: newColumn

      },
      { headers }
    );
    
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
