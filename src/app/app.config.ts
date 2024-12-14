import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BsModalService } from 'ngx-bootstrap/modal';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    BsModalService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [BsModalService],
      useFactory: (bsModalService: BsModalService) => {
        return () => {
          bsModalService.config.animated = true;
          bsModalService.config.backdrop = "static";
          bsModalService.config.focus = true;
          bsModalService.config.ignoreBackdropClick = true;
          bsModalService.config.keyboard = false;
          bsModalService.config.class = "modal-dialog-centered";
        };
      }
    }
  ]
};
