export default class Spell {
    constructor(data) {
        this.name = data.name
        this.description = data.desc || data.description || ""
        this.id = data._id || data.id
        this.range = data.range
        this.level = data.level
        this.duration = data.duration || ""
        this.components = data.components || ""
        this.description = this.description.toString()
    }

    get Template() {
        return /*html*/`
<div class="card" onclick="app.spellsController.getSpellDetails('${this.id}')" >
    <div class="card-body">
        <h4 class="card-title">${this.name}</h4>
    </div>
</div>
`
    }

    get mySpellTemplate() {
        return /*html*/`
<div class="card">
    <div class="card-body d-flex justify-content-between">
        <h4 class="card-title d-inline" onclick="app.spellsController.setMyActive('${this.id}')">${this.name}</h4>
        <button class="btn btn-primary d-inline" onclick="app.spellsController.removeSpell('${ this.id}')"> Remove</button>
    </div>
</div>
`
    }


    get ActiveTemplate() {
        return /*html*/`
            <div div class="card" >
                <div class="card-body">
                    <h4 class="card-title">${this.name}</h4>
                    <h5 class="card-text">Range: ${this.range} | Level: ${this.level}</h5>
                    <p class="card-text">${this.description}</p>
                    <div class= "text-center"><button onclick="app.spellsController.addSpell()" class="btn btn-primary">Add Spell</button></div>
                </div>
</div>

            `
    }
}
