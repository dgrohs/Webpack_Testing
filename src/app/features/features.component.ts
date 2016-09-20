import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Feat } from './feature.ts';
import { FeatureService } from './features.service';
import { AppState } from '../app.service';

@Component ({
  selector: 'feature-list',
  styleUrls: ['./features.style.css'],
  templateUrl: './features.template.html'
})

export class FeatureComponent {
  features: Feat[];
  selectedFeature: Feat;

  constructor (
    public appState: AppState,
    private featureService: FeatureService
  ) { }

  getFeatures ():void {
    this.featureService.getFeature(this.appState.get("BuildId")).then(features => this.features = features);
  }

  ngOnInit(): void {
    this.getFeatures();
  }

  onSelect(feature: Feat): void {
    this.selectedFeature = feature;
    this.appState.set('FeatId', this.selectedFeature.id);

  }
}
