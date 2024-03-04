import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Survivor } from '../model/survivor.model';
import { SurvivorsService } from '../services/survivors.service';

@Component({
  selector: 'app-player-cards',
  templateUrl: './player-cards.component.html',
  styleUrl: './player-cards.component.scss',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class PlayerCards {
    @Input() username: string = 'username';
    @Input() name: string = 'name';

    survivorImage: string = "../../assets/Radar_Scanner.webp"
    survivorName: string = "Roll to find out";

    rollCount: number = 0;

    buttonText: string = "Roll";

    constructor(private survivorsService: SurvivorsService) {
        console.log(survivorsService.survivors);
    }

    rollRandomSurvivor() {
        // setInterval()
        for (let i = 0; i < this.survivorsService.survivors.length; i++) {
            this.setSurvivor(this.survivorsService.survivors[i]);
        }

        let index = this.randomIntFromInterval(0, this.survivorsService.survivors.length);
        this.setSurvivor(this.survivorsService.survivors[index])

        this.rollCount++;
        this.setButtonText();
    }

    setSurvivor(survivor: Survivor) {
        this.survivorImage = survivor.imageSrc;
        this.survivorName = survivor.name;
    }

    randomIntFromInterval(min: number, max:number): number { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    blockRoll(): boolean {
        return this.rollCount >= 2;
    }

    setButtonText(): void {
        if (this.blockRoll()) {
            this.buttonText = "Nope";
        }else {
            this.buttonText = "Re-Roll";
        } 
    }
}