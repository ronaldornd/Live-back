import axios from "axios";
import "dotenv/config";
import prismaClient from "../prisma";
import { sign } from "jsonwebtoken";
interface IaccesTokenResponse {
    access_token: string;
}

interface IUserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string
}


class AuthenticateUserServiceApp {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const { data: accessTokenResponse } = await axios.post<IaccesTokenResponse>(url, null, {
            params: {
                client_id: process.env.CLIENT_ID_NATIVE,
                client_secret: process.env.CLIENT_SECRET_NATIVE,
                code
            },
            headers: {
                "accept": "application/json"
            }

        })
        console.log({ data: accessTokenResponse });
        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers: {
                authorization: `Bearer ${accessTokenResponse.access_token}`
            }
        })

        const { login, id, avatar_url, name } = response.data;
        let user = await prismaClient.user.findFirst({ where: { github_id: id } });

        if (!user) {
            user = await prismaClient.user.create({
                data: {
                    github_id: id,
                    login: login,
                    avatar_url: avatar_url,
                    name: name
                }
            })
        }

        const token = sign({
            user: {
                name: user.name,
                avatar_url: user.avatar_url,
                id: user.id
            }

        },
            process.env.JWT_SECRET as string,
            {
                subject: user.id,
                expiresIn: "1d",
                algorithm: "HS256"
            })
        return { token, user };
    }
}

export { AuthenticateUserServiceApp }