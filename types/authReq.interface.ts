import { Request } from "express";
export interface AuthRequst extends Request{
    user:any
}