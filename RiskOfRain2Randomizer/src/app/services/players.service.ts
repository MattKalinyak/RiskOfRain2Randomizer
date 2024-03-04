import { Injectable } from '@angular/core';
import { Player } from '../model/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  players: Player[] = [
      { username: 'MrKlassyKiwi', name: 'Greg' },
      { username: 'Flyerminer', name: 'Jack' },
      { username: 'Matikiya', name: 'Matt' },
      { username: 'StormyForest', name: 'Nick' },
  ]

  constructor() { }
}