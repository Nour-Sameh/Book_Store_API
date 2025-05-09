import { Request, Response, NextFunction } from "express";
export function validator(req:Request,res:Response,next:NextFunction){
    const {id,title,author} = req.body;
    if(id===undefined||
        typeof id!=="number"||
        !title||typeof title!=="string"||
        !author||typeof author!=="string"){
        res.status(400).json("All fields are required");
    }
    else{
        next();
    }
}