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

  getScenarios():void {
    this.scenarioService.getScenario(this.appState.get("FeatId")).then(scenarios => this.scenarios = scenarios);
  }

  ngOnInit(): void {
    this.getScenarios();
  }

  onSelect(scenario: Scen): void {
    this.selectedScenario = scenario;
    this.appState.set('ScenId', this.selectedScenario.id);

  }
}
