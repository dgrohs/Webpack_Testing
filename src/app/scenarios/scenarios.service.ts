import { Scen } from './scenario';
import { SCENARIOS } from '../mock-data';
import { Injectable } from '@angular/core';
import { AppState } from '../app.service';

@Injectable()
export class ScenarioService {
  getScenarios(): Promise<Scen[]> {
    return Promise.resolve(SCENARIOS);
  }

  getScenario(id: number): Promise<Scen[]> {
    return this.getScenarios()
                .then(scenarios => scenarios.filter(scenario => scenario.featId === id));

  }
}
