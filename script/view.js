import * as team from './team.js'
import * as rpg from './rpg.js'

const VIEW=document.querySelector('#teams')
const TEAM=document.querySelector('template#team').content.children[0]
const NTEAMS=document.querySelector('input#nteams')
const NFACTIONS=document.querySelector('input#nfactions')

function generate(){
  for(let team of VIEW.querySelectorAll('.team')) team.remove()
  for(let faction of rpg.shuffle(team.teams).slice(0,NTEAMS.value)){
    let t=TEAM.cloneNode(true)
    t.querySelector('.name').textContent=faction.name
    t.querySelector('.factions').textContent=faction.generate(NFACTIONS.value).join(', ')
    VIEW.appendChild(t)
  }
}

export function setup(){
  NTEAMS.onchange=generate
  NFACTIONS.onchange=generate
  generate()
}
