import { Router } from "express";
import  { methods  as developerController }  from "../controllers/developer.controller";

const router = Router();

router.get('/', developerController.getContAsyncDevelopers);
router.post('/', developerController.postContAsyncDeveloper);
router.put('/:Id', developerController.updateContAsyncDeveloper);
router.delete('/:Id', developerController.deleteContAsyncDeveloper);

export default router;