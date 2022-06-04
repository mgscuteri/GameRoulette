import SteamAPI from 'steamapi';

export interface SteamUser {
  player?: SteamAPI.PlayerSummary;
  ownedGames?: SteamAPI.Game[];
}
