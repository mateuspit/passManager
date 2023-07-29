import { Request, Response } from "express";
import { singUpInData } from "@/protocols";
import httpStatus from "http-status";
import userServices from "@/services";

export async function createUserController(req: Request<{}, {}, singUpInData>, res: Response) {
    const { email, password } = req.body;
    try {
        await userServices.createUserServices(email: string, password: string);
        return res.sendStatus(httpStatus.CREATED);
    }
    catch (error) {

    }
} 