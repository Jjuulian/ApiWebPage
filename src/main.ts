import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { destroyPlatform, getPlatform } from '@angular/core';

// Verificar si existe una plataforma Angular y destruirla si es necesario
if (getPlatform()) {
  destroyPlatform();
}

// Inicializar la aplicación Angular
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).then(ref => {
  // Almacenar la referencia de la plataforma en window.ngRef
  (window as any).ngRef = ref;
}).catch(err => console.error(err));