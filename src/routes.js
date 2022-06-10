import { Router } from "express";

import CartsController from "./controllers/CartsController";
import TransactionController from "./controllers/TransactionController";

const routes = new Router();

routes.get("/carts", CartsController.index);
routes.post("/carts", CartsController.create);
routes.put("/carts/:id", CartsController.update);
routes.delete("/carts/:id", CartsController.destroy);

routes.post("/transactions", TransactionController.create);

export default routes;
