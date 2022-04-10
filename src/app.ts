import express from "express";
import config from "./util/config";
import { checkAuth } from "./interceptor/checks";

const app = express();

import { router as gamesRoutes } from "./routes/games";

app.use(checkAuth);

app.use(gamesRoutes);

app.listen(config.PORT, () => {
  return console.log(`server is listening on ${config.PORT}`);
});
