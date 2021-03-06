import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { MdModule } from './md.module';
import { BuildService } from './builds/build.service';
import { FeatureService } from './features/features.service';
import { ScenarioService } from './scenarios/scenarios.service.ts';
import { StepService } from './steps/steps.service.ts';

/**
 * Additional Meterial2 providers
 * @todo: implement provider dispenser in MdModule barrel
 */
import { MdIconRegistry } from '@angular2-material/icon';
import { OVERLAY_PROVIDERS } from '@angular2-material/core';

import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { BuildComponent } from './builds/builds.component';
import { FeatureComponent } from './features/features.component';
import { ScenarioComponent } from './scenarios/scenarios.component';
import { StepsComponent } from './steps/steps.component';

// Import diretives
import { XLarge } from './home/x-large';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    About,
    Home,
    BuildComponent,
    FeatureComponent,
    ScenarioComponent,
    StepsComponent,
    NoContent,
    XLarge
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    MdModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    MdIconRegistry,
    OVERLAY_PROVIDERS,
    BuildService,
    FeatureService,
    ScenarioService,
    StepService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    this.appState._state = store.state;
    this.appRef.tick();
    delete store.state;
  }
  hmrOnDestroy(store) {
    var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    var state = this.appState._state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation)
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts()
    delete store.disposeOldHosts;
  }
}
