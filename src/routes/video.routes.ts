import { Router } from "express";
import { VideoController } from "../controllers/video.controller";

export const videoRoutes = Router()

videoRoutes.post('/:id', new VideoController().create)