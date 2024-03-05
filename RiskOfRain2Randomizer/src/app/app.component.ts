import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PlayerCards } from './player-cards/player-cards.component';
import { PlayersService } from './services/players.service';
import { CommonModule, NgFor } from '@angular/common';
import { Subject } from 'rxjs';

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
  
  rollAllEventSubject: Subject<void> = new Subject<void>();

  constructor(private playersService: PlayersService){}

  rollAllPlayers() {
    this.rollAllEventSubject.next();
  }
}
