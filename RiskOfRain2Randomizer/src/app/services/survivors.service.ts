import { Injectable } from '@angular/core';
import { Player } from '../model/player.model';
import { Survivor } from '../model/survivor.model';

@Injectable({
  providedIn: 'root',
})
export class SurvivorsService {
  survivors: Survivor[] = [
      { name: 'Acrid', imageSrc: '../../assets/SurvivorImages/Acrid.webp' },
      { name: 'Artificer', imageSrc: '../../assets/SurvivorImages/Artificer.webp' },
      { name: 'Bandit', imageSrc: '../../assets/SurvivorImages/Bandit.webp' },
      { name: 'Captain', imageSrc: '../../assets/SurvivorImages/Captain.webp' },
      { name: 'Chef', imageSrc: '../../assets/SurvivorImages/Chef.webp' },
      { name: 'Commando', imageSrc: '../../assets/SurvivorImages/Commando.webp' },
      { name: 'Engineer', imageSrc: '../../assets/SurvivorImages/Engineer.webp' },
      { name: 'Heretic', imageSrc: '../../assets/SurvivorImages/Heretic.webp' },
      { name: 'Huntress', imageSrc: '../../assets/SurvivorImages/Huntress.webp' },
      { name: 'Loader', imageSrc: '../../assets/SurvivorImages/Loader.webp' },
      { name: 'Mercenary', imageSrc: '../../assets/SurvivorImages/Mercenary.webp' },
      { name: 'MUL-T', imageSrc: '../../assets/SurvivorImages/MUL-T.webp' },
      { name: 'Railgunner', imageSrc: '../../assets/SurvivorImages/Railgunner.webp' },
      { name: 'Rex', imageSrc: '../../assets/SurvivorImages/REX.webp' },
      { name: 'Void Fiend', imageSrc: '../../assets/SurvivorImages/Void_Fiend.webp' },
  ]

  constructor() { }
}