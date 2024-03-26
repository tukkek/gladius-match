import * as team from './team.js'
import * as rpg from './rpg.js'

const VIEW=document.querySelector('#teams')
const TEAM=VIEW.querySelector('template#team').content.children[0]
const NTEAMS=document.querySelector('input#nteams')
const NFACTIONS=document.querySelector('input#nfactions')
const WHITELIST=document.querySelector('#allowed')
const DLC=WHITELIST.querySelector('template').content.children[0]

function name(i){
  return `Team ${String.fromCharCode(97+i).toUpperCase()}`
}

function generate(){
  for(let team of VIEW.querySelectorAll('.team')) team.remove()
  let allowed=Array.from(WHITELIST.querySelectorAll('div')).filter(d=>d.querySelector('input').checked).map(d=>d.querySelector('span').textContent)
  let teams=0
  for(let faction of rpg.shuffle(team.teams)){
    let factions=faction.generate(NFACTIONS.value,allowed)
    if(factions.length==0) continue
    let t=TEAM.cloneNode(true)
    t.querySelector('.name').textContent=name(teams)
    t.querySelector('.factions').textContent=factions.join(', ')
    VIEW.appendChild(t)
    teams+=1
    if(teams==NTEAMS.value) break
  }
}

export function setup(){
  for(let f of team.teams.flatMap(t=>t.factions).sort()){
    let dlc=DLC.cloneNode(true)
    dlc.querySelector('span').textContent=f
    dlc.querySelector('input').onchange=generate
    WHITELIST.append(dlc)
  }
  NTEAMS.onchange=generate
  NFACTIONS.onchange=generate
  generate()
}
