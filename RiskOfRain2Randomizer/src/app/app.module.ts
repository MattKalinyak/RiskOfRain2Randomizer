import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [BrowserModule, TopBarComponent],   
  declarations: [
      AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}