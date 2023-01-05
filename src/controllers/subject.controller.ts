import { Request, Response } from "express";
import { iCreateSubject } from "../interfaces/subject.create.interface";
import { SubjectService } from "../services/subject.service";

export class SubjectController {
    async create(req: Request, res: Response){
        const body: iCreateSubject = req.body
        const subject =  new SubjectService().create(body)
        return res.status(201).json(subject)
    }
}