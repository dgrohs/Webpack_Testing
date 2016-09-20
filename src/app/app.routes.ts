import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';
import { BuildComponent } from './builds/builds.component';
import { FeatureComponent } from './features/features.component';
import { ScenarioComponent } from './scenarios/scenarios.component';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: 'builds', component: BuildComponent },
  { path: 'features', component: FeatureComponent },
  { path: 'scenarios', component: ScenarioComponent},
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
