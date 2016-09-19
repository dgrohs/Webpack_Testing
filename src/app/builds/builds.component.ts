import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Build } from './build';
import { BuildService } from './build.service';
import { AppState } from '../app.service';

@Component ({
  selector: 'build-list',
  templateUrl: './builds.template.html',
  styleUrls: ['./builds.style.css']

})
export class BuildComponent implements OnInit {
  builds: Build[];
  selectedBuild: Build;

  constructor(
    public appState: AppState,
    private buildService: BuildService
  ) { }

  getBuilds(): void {
    this.buildService.getBuilds().then(builds => this.builds = builds);
  }

  ngOnInit(): void {
    this.getBuilds();
  }

  onSelect(build: Build): void {
    this.selectedBuild = build;
    this.appState.set('BuildId', this.selectedBuild.id);
  }
}
