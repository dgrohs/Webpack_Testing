import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Build } from './build';
import { BuildService } from './build.service';

@Component ({
  selector: 'build-list',
  template: `<h2>Recent Builds</h2>
<ul class="builds">
  <li *ngFor="let build of builds">
    <md-card><span class="badge">ID:{{build.id}}</span>   Successful:{{build.succ}}    Name:{{build.name}}   Duration:{{build.duration}}h</md-card>
  </li>
</ul>`

})
export class BuildComponent implements OnInit {
  builds: Build[];

  constructor(
    private buildService: BuildService
  ) { }

  getBuilds(): void {
    this.buildService.getBuilds().then(builds => this.builds = builds);
  }

  ngOnInit(): void {
    this.getBuilds();
  }
}
