import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule]
})
export class TopBarComponent {

  buttonDisabled: boolean = false;

  @Output()
  rollEventEmitter = new EventEmitter<void>();

  rollForAllPlayers() {
    this.buttonDisabled = true;
    this.rollEventEmitter.emit();
  }
}