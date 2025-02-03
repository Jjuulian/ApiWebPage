import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { destroyPlatform, getPlatform } from '@angular/core';

if (getPlatform()) {
  destroyPlatform();
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).then(ref => {

  (window as any).ngRef = ref;
}).catch(err => console.error(err));