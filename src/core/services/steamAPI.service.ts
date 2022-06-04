import { Injectable } from '@angular/core';
import SteamAPI from 'steamapi-webpack-5-fork';
import config from '../../../config.json';

@Injectable({
  providedIn: 'root',
})
export class SteamApiService {
  steam: SteamAPI;

  constructor() {
    const steamWebApiKey = config['steamWebApiKey'];
    const corOrigin = config['corOrigin'];

    this.steam = new SteamAPI(steamWebApiKey, { corsOrigin: corOrigin });
  }

  async getPlayerSummary(
    steam64ID: string
  ): Promise<SteamAPI.PlayerSummary | undefined> {
    try {
      const playerSummary = await this.steam.getUserSummary(steam64ID);
      return playerSummary;
    } catch (e) {
      console.log(`Whoops: ${e}`);
      return undefined;
    }
  }

  async getPlayerOwnedGames(
    steam64ID: string
  ): Promise<SteamAPI.Game[] | undefined> {
    try {
      const playerOwnedGames = await this.steam.getUserOwnedGames(steam64ID);
      return playerOwnedGames;
    } catch (e) {
      console.log(`Whoops: ${e}`);
      return undefined;
    }
  }
}
