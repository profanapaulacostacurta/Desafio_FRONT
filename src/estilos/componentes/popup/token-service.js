import { LoginService } from './login-service';

export const token = "0";

export const TokenService = async () => {
   return token = await LoginService();
}