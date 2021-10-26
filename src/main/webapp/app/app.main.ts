import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GatewaysigmapAppModule } from './app.module';

platformBrowserDynamic()
  .bootstrapModule(GatewaysigmapAppModule, { preserveWhitespaces: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('Application started'))
  .catch(err => console.error(err));
