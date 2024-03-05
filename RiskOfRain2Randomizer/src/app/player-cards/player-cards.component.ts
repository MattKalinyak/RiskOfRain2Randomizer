import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable, Subscription } from 'rxjs';
import { Survivor } from '../model/survivor.model';
import { SurvivorsService } from '../services/survivors.service';

@Component({
  selector: 'app-player-cards',
  templateUrl: './player-cards.component.html',
  styleUrl: './player-cards.component.scss',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class PlayerCards implements OnInit, OnDestroy {
    @Input() username: string = 'username';
    @Input() name: string = 'name';

    @Input() rollEvent!: Observable<void>;
    rollEventsSubscription!: Subscription;

    survivorImage: string = "../../assets/Radar_Scanner.webp"
    survivorName: string = "Roll to find out";

    rollCount: number = 0;
    currentIndex: number = -1;

    buttonText: string = "Roll";

    constructor(private survivorsService: SurvivorsService) {
        console.log(survivorsService.survivors);
    }

    ngOnInit(): void {
        this.rollEventsSubscription = this.rollEvent.subscribe(() => this.rollRandomSurvivor());
    }

    ngOnDestroy(): void {
        this.rollEventsSubscription.unsubscribe();
    }

    rollRandomSurvivor() {
        let index = -1;

        for (let i = 0; i < this.survivorsService.survivors.length; i++) {
            this.setSurvivor(this.survivorsService.survivors[i]);
        }
        
        do {
            index = this.randomIntFromInterval(0, this.survivorsService.survivors.length);
            this.setSurvivor(this.survivorsService.survivors[index]);
        } while (index === this.currentIndex)
        
        this.currentIndex = index;
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