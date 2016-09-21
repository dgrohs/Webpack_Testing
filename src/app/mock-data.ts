import { Build } from './builds/build';
import { Feat } from './features/feature';
import { Scen } from './scenarios/scenario';
import { Step } from './steps/step';
export var BUILDS: Build[] = [
  {id:10 ,name: 'Build 0815',succ: false, duration: 120,scenNr: 5,scenNrFailed: 2 },
  {id:20 ,name: 'Build 42',succ: true, duration: 120,scenNr: 5,scenNrFailed: 0 }
]

export var FEATURES: Feat[] = [
      {buildId: 10, id:11 ,name: 'Feature AAA',succ: true,   duration: 120,  scenNr: 10,scenNrFailed: 0},
      {buildId: 10, id:12 ,name: 'Feature VVV',succ: true,   duration: 60,   scenNr: 10,scenNrFailed: 0},
      {buildId: 10, id:13 ,name: 'Feature SSS',succ: true,   duration: 30,   scenNr: 10,scenNrFailed: 0},
      {buildId: 10, id:14 ,name: 'Feature DDD',succ: false,  duration: 10,   scenNr: 10,scenNrFailed: 8},
      {buildId: 10, id:15 ,name: 'Feature FFF',succ: false,  duration: 2,    scenNr: 10,scenNrFailed: 9},
      {buildId: 20, id:21 ,name: 'Feature XXX',succ: true,   duration: 120,  scenNr: 10,scenNrFailed: 0},
      {buildId: 20, id:22 ,name: 'Feature YYY',succ: true,   duration: 60,   scenNr: 10,scenNrFailed: 0},
      {buildId: 20, id:23 ,name: 'Feature XXX',succ: true,   duration: 30,   scenNr: 10,scenNrFailed: 0},
      {buildId: 20, id:24 ,name: 'Feature YYY',succ: true,  duration: 10,   scenNr: 10,scenNrFailed: 0},
      {buildId: 20, id:25 ,name: 'Feature XXX',succ: true,  duration: 2,    scenNr: 10,scenNrFailed: 0}
]

export var SCENARIOS: Scen[] = [
      {featId: 11, id:111 ,name: 'Scenario AAA',succ: true,   duration: 120,  scenNr: 10,scenNrFailed: 0},
      {featId: 11, id:112 ,name: 'Scenario VVV',succ: true,   duration: 60,   scenNr: 10,scenNrFailed: 0},
      {featId: 11, id:113 ,name: 'Scenario SSS',succ: true,   duration: 30,   scenNr: 10,scenNrFailed: 0},
      {featId: 11, id:114 ,name: 'Scenario DDD',succ: false,  duration: 10,   scenNr: 10,scenNrFailed: 8},
      {featId: 11, id:115 ,name: 'Scenario FFF',succ: false,  duration: 2,    scenNr: 10,scenNrFailed: 9},
      {featId: 21, id:211 ,name: 'Scenario XXX',succ: true,   duration: 120,  scenNr: 10,scenNrFailed: 0},
      {featId: 21, id:212 ,name: 'Scenario YYY',succ: true,   duration: 60,   scenNr: 10,scenNrFailed: 0},
      {featId: 21, id:213 ,name: 'Scenario XXX',succ: true,   duration: 30,   scenNr: 10,scenNrFailed: 0},
      {featId: 21, id:214 ,name: 'Scenario YYY',succ: true,  duration: 10,   scenNr: 10,scenNrFailed: 0},
      {featId: 21, id:215 ,name: 'Scenario XXX',succ: true,  duration: 2,    scenNr: 10,scenNrFailed: 0}
]

export var STEPS: Step[] = [
      {scenId: 111, id: 1111, name: 'Step 1', succ: true, },
      {scenId: 111, id: 1112, name: 'Step 2', succ: true, },
      {scenId: 111, id: 1113, name: 'Step 3', succ: true, },
      {scenId: 111, id: 1114, name: 'Step 4', succ: true, },
      {scenId: 111, id: 1115, name: 'Step 5', succ: true, },
      {scenId: 111, id: 1116, name: 'Step 6', succ: true, },
      {scenId: 111, id: 1117, name: 'Step 7', succ: true, },
      {scenId: 111, id: 1118, name: 'Step 8', succ: true, },
      {scenId: 111, id: 1119, name: 'Step 9', succ: true, },
      {scenId: 121, id: 1211, name: 'Step 10', succ: true, },
      {scenId: 121, id: 1212, name: 'Step 11', succ: true, },
      {scenId: 121, id: 1213, name: 'Step 12', succ: true, }
]
