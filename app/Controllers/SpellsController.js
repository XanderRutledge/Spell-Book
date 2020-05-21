import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _drawSpells() {
  let spells = store.State.spells;
  let template = ''
  spells.forEach(s => template += s.Template)
  document.getElementById("spells").innerHTML = template
}


function _drawMySpells() {
  let mySpells = store.State.mySpells;
  let template = ''
  mySpells.forEach(s => template += s.mySpellTemplate)
  document.getElementById("mySpells").innerHTML = template
}

function _drawActiveSpell() {
  let activeSpell = store.State.activeSpell;
  document.getElementById("activeSpell").innerHTML = activeSpell.ActiveTemplate

}


//Public
export default class SpellsController {
  constructor() {
    store.subscribe("spells", _drawSpells);
    store.subscribe("mySpells", _drawMySpells);
    store.subscribe("activeSpell", _drawActiveSpell);

  }

  getSpellDetails(id) {
    SpellsService.getSpellDetails(id)
  }

  addSpell() {
    SpellsService.addSpell()
  }

  removeSpell(id) {
    SpellsService.removeSpell(id)
  }

  setMyActive(id) {
    SpellsService.setMyActive(id)
  }

}
