import express from "express";
const router = express.Router();

import { checkQueryParam } from "../interceptor/checks";
import { getAllGames, getGamesFiltered } from "../controller/games";
import { rawgWrap } from "../model/games";

// List all games
router.get("/games", function (req, res) {
  console.log("/games");
  getAllGames().subscribe(
    (games: rawgWrap) => {
      if (games) {
        console.log(games);
        console.log(`Found ${games.count} games`);
        res.send(games);
      }
    },
    (error) => {
      console.error(error);
    }
  );
});

// Search games by filter
router.get("/games/filter", checkQueryParam(["search"]), function (req, res) {
  getGamesFiltered(req.query.search.toString()).subscribe(
    (games: rawgWrap) => {
      if (games) {
        console.log(`Found ${games.count} games`);
        res.send(games);
      }
    },
    (error) => {
      console.error(error);
    }
  );
});

export { router };
