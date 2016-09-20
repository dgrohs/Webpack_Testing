import { Build } from './builds/build';
import { Feat } from './features/feature';
export var BUILDS: Build[] = [
  {id:10 ,name: 'Build 0815',succ: false, duration: 120,scenNr: 5,scenNrFailed: 2 },
  {id:20 ,name: 'Build 42',succ: true, duration: 120,scenNr: 5,scenNrFailed: 0 }
]
export var FEATURES: Feat[] = [
      {buildId: 10, id:11 ,name: 'Scenario AAA',succ: true,   duration: 120,  scenNr: 10,scenNrFailed: 0},
      {buildId: 10, id:12 ,name: 'Scenario VVV',succ: true,   duration: 60,   scenNr: 10,scenNrFailed: 0},
      {buildId: 10, id:13 ,name: 'Scenario SSS',succ: true,   duration: 30,   scenNr: 10,scenNrFailed: 0},
      {buildId: 10, id:14 ,name: 'Scenario DDD',succ: false,  duration: 10,   scenNr: 10,scenNrFailed: 8},
      {buildId: 10, id:15 ,name: 'Scenario FFF',succ: false,  duration: 2,    scenNr: 10,scenNrFailed: 9},
      {buildId: 20, id:21 ,name: 'Scenario XXX',succ: true,   duration: 120,  scenNr: 10,scenNrFailed: 0},
      {buildId: 20, id:22 ,name: 'Scenario YYY',succ: true,   duration: 60,   scenNr: 10,scenNrFailed: 0},
      {buildId: 20, id:23 ,name: 'Scenario XXX',succ: true,   duration: 30,   scenNr: 10,scenNrFailed: 0},
      {buildId: 20, id:24 ,name: 'Scenario YYY',succ: true,  duration: 10,   scenNr: 10,scenNrFailed: 0},
      {buildId: 20, id:25 ,name: 'Scenario XXX',succ: true,  duration: 2,    scenNr: 10,scenNrFailed: 0}
]

export var SCENARIOS: Feat[] = [
      {scenId: 11, id:111 ,name: 'Scenario AAA',succ: true,   duration: 120,  scenNr: 10,scenNrFailed: 0},
      {scenId: 11, id:112 ,name: 'Scenario VVV',succ: true,   duration: 60,   scenNr: 10,scenNrFailed: 0},
      {scenId: 11, id:113 ,name: 'Scenario SSS',succ: true,   duration: 30,   scenNr: 10,scenNrFailed: 0},
      {scenId: 11, id:114 ,name: 'Scenario DDD',succ: false,  duration: 10,   scenNr: 10,scenNrFailed: 8},
      {scenId: 11, id:115 ,name: 'Scenario FFF',succ: false,  duration: 2,    scenNr: 10,scenNrFailed: 9},
      {scenId: 21, id:211 ,name: 'Scenario XXX',succ: true,   duration: 120,  scenNr: 10,scenNrFailed: 0},
      {scenId: 21, id:212 ,name: 'Scenario YYY',succ: true,   duration: 60,   scenNr: 10,scenNrFailed: 0},
      {scenId: 21, id:213 ,name: 'Scenario XXX',succ: true,   duration: 30,   scenNr: 10,scenNrFailed: 0},
      {scenId: 21, id:214 ,name: 'Scenario YYY',succ: true,  duration: 10,   scenNr: 10,scenNrFailed: 0},
      {scenId: 21, id:215 ,name: 'Scenario XXX',succ: true,  duration: 2,    scenNr: 10,scenNrFailed: 0}
]
