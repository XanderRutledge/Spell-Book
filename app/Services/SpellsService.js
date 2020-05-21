import store from "../store.js";
import Spell from "../Models/Spell.js";

const _apiSpells = axios.create({
    baseURL: "http://bcw-sandbox.herokuapp.com/api/spells",
    timeout: 15000
})


const _apiMySpells = axios.create({
    baseURL: "http://bcw-sandbox.herokuapp.com/api/XanderAndJustin/spells",
    timeout: 15000
})

class SpellsService {
    constructor() {
        this.getSpells();
        this.getMySpells();
    }
    getSpells() {
        _apiSpells.get()
            .then(res => {
                let spellsNames = res.data.map(s => new Spell(s))
                store.commit("spells", spellsNames)
            })
    }
    getSpellDetails(id) {
        _apiSpells.get(id)
            .then(res => {
                let activeSpell = new Spell(res.data)
                store.commit("activeSpell", activeSpell)

            })
    }

    getMySpells() {
        _apiMySpells.get()
            .then(res => {
                let mySpell = res.data.data.map(s => new Spell(s))
                store.commit("mySpells", mySpell)
            }

            )

    }

    addSpell() {
        _apiMySpells.post("", store.State.activeSpell)
            .then(res => {
                this.getMySpells()

            })
    }

    removeSpell(id) {
        _apiMySpells.delete(id)
            .then(res => {
                this.getMySpells()
            })

    }

    setMyActive(id) {
        let found = (store.State.mySpells.find(s => s.id == id))
        store.commit("activeSpell", found)
    }

}

const SPELLSSERVICE = new SpellsService();
export default SPELLSSERVICE;
