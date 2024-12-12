import { Request } from "express";
export interface params extends Request{
    params:{
        id:string
    }
} 