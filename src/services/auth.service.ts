import { classicRequest } from "@/api/request.api";
import { saveTokens } from "@/shared/cookie/tokens.cookie";
import { IUser } from "@/shared/interfaces/user.interface";
import { TypeLogin } from "@/shared/types/auth.type";

class AuthService {
  private saveTokensToCookies = (data: IUser | null): void => {
    if (data?.accessToken)
      saveTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
  };
  async login({ login, password }: TypeLogin): Promise<IUser | null> {
    const { data } = await classicRequest<IUser>({
      method: "POST",
      url: "/auth/login",
      body: {
        login,
        password,
      },
    });

    this.saveTokensToCookies(data);

    return data;
  }
  async register({ login, password }: TypeLogin): Promise<IUser | null> {
    const { data } = await classicRequest<IUser>({
      method: "POST",
      url: "/auth/register",
      body: {
        login,
        password,
      },
    });
    this.saveTokensToCookies(data);

    return data;
  }
}

export default new AuthService();
