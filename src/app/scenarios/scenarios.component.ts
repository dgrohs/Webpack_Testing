import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Scen } from './scenario.ts';
import { ScenarioService } from './scenarios.service';
import { AppState } from '../app.service';

@Component ({
  selector: 'scenario-list',
  styleUrls: ['./scenarios.style.css'],
  templateUrl: './scenarios.template.html'
})

export class ScenarioComponent {
  scenarios: Scen[];
  selectedScenario: Scen;

  constructor (
    public appState: AppState,
    private scenarioService: ScenarioService
  ) { }

  getFeatures ():void {
    this.scenarioService.getFeature(this.appState.get("BuildId")).then(features => this.scenarios = features);
  }

  ngOnInit(): void {
    this.getFeatures();
  }

  onSelect(feature: Scen): void {
    this.selectedScenario = feature;
    this.appState.set('ScendId', this.selectedScenario.id);

  }
}
