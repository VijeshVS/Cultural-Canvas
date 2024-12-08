'use server'

import PrismaClientManager from "../pgConnect"
import jwt from 'jsonwebtoken'

const prisma = PrismaClientManager.getInstance().getPrismaClient();
const SECRET_KEY = process.env.SECRET_KEY || "";

export const checkAuthentication = async (token: string): Promise<boolean> => {
    try {
      jwt.verify(token, SECRET_KEY); // Verifies the token using the secret key
      return true; // If token is valid, return true
    } catch {
      return false; // If token verification fails, return false
    }
};

export async function login(username:string,password:string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                username,
                password
            }
        })

        if(!user) {
            return {
                status: 404,
                token: ""
            }
        }

        const token = jwt.sign({id:user.id},SECRET_KEY);
    
        return {
            status: 200,
            token: token
        }
    }
    catch {
        return {
            status: 500,
            token : ""
        }
    }
}

export async function register(name:string,username:string,email:string,password:string,state:string,bio:string) {
    try {
        const user = await prisma.user.create({
            data: {
                name,
                username,
                email,
                password,
                state,
                bio,
                token: 0
            }
        })
    
        const token = jwt.sign({id:user.id},SECRET_KEY);
    
        return {
            status: 200,
            token: token
        }
    }
    catch {
        return {
            status: 500,
            token: ""
        }
    }
}