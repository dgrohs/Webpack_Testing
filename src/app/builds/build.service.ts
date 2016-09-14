import { Build } from './build';
import { BUILDS } from '../mock-data';
import { Injectable } from '@angular/core';

@Injectable()
export class BuildService {
  getBuilds(): Promise<Build[]> {
    return Promise.resolve(BUILDS);
  }

  getBuild(id: number): Promise<Build> {
    return this.getBuilds()
                .then(builds => builds.find(build => build.id === id));
  }
}
