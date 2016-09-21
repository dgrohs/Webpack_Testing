import { Step } from './step';
import { STEPS } from '../mock-data';
import { Injectable } from '@angular/core';
import { AppState } from '../app.service';

@Injectable()
export class StepService {
  getSteps(): Promise<Step[]> {
    return Promise.resolve(STEPS);
  }

  getStep(id: number): Promise<Step[]> {
    return this.getSteps()
                .then(Steps => Steps.filter(Steps => Steps.scenId === id));

  }
}
