import mongoose from "mongoose";
import { IUser } from "./IUser";

export interface IDream {
    title : string;
    image : string;
    content : string;
    keyword : [string];
    dreamer : IUser;
    owner : IUser;
    price : number;
    date : Date;
    sold : boolean;
    auctioning : boolean;
}

export interface IDreamInputDTO {
    title : string;
    image : string;
    content : string;
    keyword : [string];
    dreamer : IUser;
    owner : IUser;
    price : number;
    date : Date;
    sold : boolean;
    auctioning : boolean;
}
