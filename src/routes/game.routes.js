import { Router } from "express";
import { methods  as gameController }  from "../controllers/game.controller";

const router = Router();

router.get('/', gameController.getContAsyncGames);
router.post('/', gameController.postContAsyncGame);
router.put('/:Id', gameController.updateContAsyncGame);
router.delete('/:Id', gameController.deleteContAsyncGame);

export default router;