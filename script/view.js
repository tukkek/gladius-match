import * as team from './team.js'
import * as rpg from './rpg.js'

const VIEW=document.querySelector('#teams')
const TEAM=document.querySelector('template#team').content.children[0]

export function setup(){
  for(let faction of rpg.shuffle(team.teams).slice(0,2)){
    let t=TEAM.cloneNode(true)
    t.querySelector('.name').textContent=faction.name
    t.querySelector('.factions').textContent=faction.generate(2).join(', ')
    VIEW.appendChild(t)
  }
}
