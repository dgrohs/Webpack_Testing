import { Scen } from './scenario';
import { SCENARIOS } from '../mock-data';
import { Injectable } from '@angular/core';
import { AppState } from '../app.service';

@Injectable()
export class ScenarioService {
  getFeatures(): Promise<Scen[]> {
    return Promise.resolve(SCENARIOS);
  }

  getFeature(id: number): Promise<Scen[]> {
    return this.getFeatures()
                .then(scenarios => scenarios.filter(scenario => scenario.featId === id));

  }
}
