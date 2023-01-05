import { Router } from "express";
import { SubjectController } from "../controllers/subject.controller";

export const subjetctRoutes = Router()



subjetctRoutes.post('/', new SubjectController().create)

