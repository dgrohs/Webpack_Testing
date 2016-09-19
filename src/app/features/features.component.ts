import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Feat} from './feature.ts';
import { AppState } from '../app.service';

@Component ({
  selector: 'feature-list',
  styleUrls: ['./features.style.css'],
  template: './feature.template.html'
})
export class FeatureComponent {
  features: Feat[];
  selectedFeature: Feat;

  constructor (
    public appState: AppState,

  ) { }
  
}
