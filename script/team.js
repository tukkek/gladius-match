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
  
  generate(size,allowed){
    let factions=this.factions.filter(f=>allowed.includes(f))
    if(factions.length==0) return []
    let team=[]
    while(team.length<size) team.push(rpg.pick(factions))
    return team
  }
}

export var teams=FACTIONS.map(f=>new Team(f))
