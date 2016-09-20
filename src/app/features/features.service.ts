import { Feat } from './feature';
import { FEATURES } from '../mock-data';
import { Injectable } from '@angular/core';
import { AppState } from '../app.service';

@Injectable()
export class FeatureService {
  getFeatures(): Promise<Feat[]> {
    return Promise.resolve(FEATURES);
  }

  getFeature(id: number): Promise<Feat[]> {
    return this.getFeatures()
                .then(features => features.filter(feature => feature.buildId === id));

  }
}
