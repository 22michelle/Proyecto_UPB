import { Router } from "express"
import usertCtrl from "../controllers/ejeControllers.js";
const route = Router();

route.get("/", usertCtrl.getData);
route.get("/:id", usertCtrl.getDataByid);

route.post("/", usertCtrl.saveData);
route.put("/:id", usertCtrl.actualizar);
route.delete("/:id", usertCtrl.eliminar);

export default route;