import { Router } from "express";
import { SubjectController } from "../controllers/subject.controller";
import { SubjectService } from "../services/subject.service";

export const subjetctRoutes = Router()



subjetctRoutes.post('/subject', new SubjectController().create)

