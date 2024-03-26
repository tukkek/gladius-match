import * as rpg from './rpg.js'

const FACTIONS=[
  ['Astra militarum','Space marines','Adepta sororitas','Adeptus mechanicus'],
  ['Orks'],
  ['Necrons'],
  ['Drukarhi','Craftworld aeldari'],
  ["T'au"],
  ["Chaos space marines"],
  ["Tyranids"],
]

class Team{
  constructor(factions){
    this.factions=factions
  }
  
  generate(size=2){
    let factions=[]
    while(factions.length<size) factions.push(rpg.pick(this.factions))
    return factions
  }
  
  get name(){
    return `Team ${String.fromCharCode(97+teams.indexOf(this)).toUpperCase()}`
  }
}

export var teams=FACTIONS.map(f=>new Team(f))
