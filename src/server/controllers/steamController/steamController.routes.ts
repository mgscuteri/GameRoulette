import express from 'express';
import { SteamController } from './steamController';

const steamController = new SteamController();

const router = express.Router();

router.get('/playerSummary/:steamid', async (req, res) => {
  const playerSummary = await steamController.getPlayerSummary(
    req.params.steamid
  );
  res.send(playerSummary);
});

router.get('/playerOwnedGames:steamid', async (req, res) => {
  const playerOwnedGames = await steamController.getPlayerOwnedGames(
    req.params.steamid
  );
  res.send(playerOwnedGames);
});
