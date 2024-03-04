import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PlayerCards } from './player-cards/player-cards.component';
import { PlayersService } from './services/players.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [TopBarComponent, PlayerCards, CommonModule, NgFor]
})
export class AppComponent {
  title = 'RiskOfRain2Randomizer';
  players = this.playersService.players;

  constructor(private playersService: PlayersService){}
}
