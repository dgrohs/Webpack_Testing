import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Step } from './step';
import { StepService } from './steps.service';
import { AppState } from '../app.service';

@Component ({
  selector: 'step-list',
  styleUrls: ['./steps.style.css'],
  templateUrl: './steps.template.html'
})

export class StepsComponent {
  steps: Step[];
  selectedStep: Step;

  constructor (
    public appState: AppState,
    private stepService: StepService
  ) { }

  getSteps():void {
    this.stepService.getStep(this.appState.get("ScenId")).then(steps => this.steps = steps);
  }

  ngOnInit(): void {
    this.getSteps();
  }

  onSelect(step: Step): void {
    this.selectedStep = step;
    this.appState.set('StepId', this.selectedStep.id);

  }
}
