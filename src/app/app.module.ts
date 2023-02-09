import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';

@NgModule({
<<<<<<< Updated upstream
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
=======
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
>>>>>>> Stashed changes
})
export class AppModule {}