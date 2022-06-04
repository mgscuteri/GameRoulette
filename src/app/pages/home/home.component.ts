import { Component, OnInit } from '@angular/core';
import { SteamUser } from '@core/models/steamModels';
import { SteamApiService } from '@core/services/steamAPI.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private steamApiService: SteamApiService) {}

  players: SteamUser[] = [];

  async ngOnInit() {
    const mySteamId = 76561198000805784;
    const mySummary = await this.steamApiService.getPlayerSummary(
      '76561198000805784'
    );
    alert(mySummary);
    const myGames = await this.steamApiService.getPlayerOwnedGames(
      '76561198000805784'
    );
    alert(myGames);
  }

  addPlayer(steam64ID: string): void {
    this.getPlayerData;
  }

  removePlayer(): void {}

  async getPlayerData(steam64ID: string): Promise<SteamUser> {
    const playerSummary = await this.steamApiService.getPlayerSummary(
      steam64ID
    );
    if (!playerSummary) {
      this.handleUnableToGetPlayerSummary(steam64ID);
    }

    const playerOwnedGames = await this.steamApiService.getPlayerOwnedGames(
      steam64ID
    );
    if (!playerOwnedGames) {
      this.handleUnableToGetPlayerOwnedGames(steam64ID);
    }

    return {
      player: playerSummary,
      ownedGames: playerOwnedGames,
    };
  }

  handleUnableToGetPlayerSummary(steam64ID: string) {
    // TODO: handle user not found
  }

  handleUnableToGetPlayerOwnedGames(steam64ID: string) {
    // TODO: handle unable to retrieve user's games. Does this user own any games?
  }
}
