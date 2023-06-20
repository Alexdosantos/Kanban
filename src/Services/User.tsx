import axios from "axios";
import { UserApi } from "../Types/UserApi/User";
import { UserToken } from "../ApiKey/ApiKey";
import { ApiKey } from "../ApiKey/ApiKey";


export const LoginUsers = async ({
  email,
  password,
}: UserApi): Promise<UserToken> => {


  try {
    const headers = {
      "x-api-key": ApiKey.token,
      "Content-Type": "application/json",
      'Authorization': localStorage.getItem("AUTH_TOKEN") || "",
    };

    const response = await axios.post(
      "https://arnia-kanban.vercel.app/api/user/login",
      {
        email,
        password,
      },
      { headers }
    );

    localStorage.setItem("USER_NAME", response.data.name);

    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error("Usuário não encontrado ");
  }
};
