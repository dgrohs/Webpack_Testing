import { Build } from './builds/build';
import { Feat } from './features/feature';
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
      {buildId: 20, id:24 ,name: 'Feature YYY',succ: false,  duration: 10,   scenNr: 10,scenNrFailed: 0},
      {buildId: 20, id:25 ,name: 'Feature XXX',succ: false,  duration: 2,    scenNr: 10,scenNrFailed: 0}
]
