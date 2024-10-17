// const input = document.querySelector('input')
// const lista = document.querySelector('ul')

// input.addEventListener('keyup', handleKeyUp);

// function handleKeyUp(e) {
//     if (e.key === 'Enter') {
//         const newLi = document.createElement('li')
//         newLi.innerText = input.value
//         lista.appendChild(newLi)
//         input.value = ''
// }
// }

// PROJETO LUTA (COM CLASSES)
// import * as Classes from './classes.js';

// class Personagem {

//     _life = 1;
//     maxLife = 1;
//     attack = 0;
//     defense = 0;

//     constructor(name) {
//         this.name = name
//     }

//     get life () {
//         return this._life
//     }

//     set life (newLife)  {
//         this._life = newLife < 0 ? 0 : newLife;
//     }
// }

// class Knight extends Personagem {
//     constructor(name) {
//         super(name);
//         this.life = 100;
//         this.maxLife = this.life;
//         this.attack = 10;
//         this.defense = 8;
//     }
// }
// class Sorcerer extends Personagem {
//     constructor(name) {
//         super(name);
//         this.life = 80;
//         this.maxLife = this.life;
//         this.attack = 15;
//         this.defense = 3;
//     }
// }

// class LittleMonster extends Personagem {    
//     constructor() {
//         super('LittleMonster');
//         this.life = 40;
//         this.maxLife = this.life;
//         this.attack = 4;
//         this.defense = 4;
//     }
// }

// class BigMonster extends Personagem {
//     constructor() {
//         super('BigMonster');
//         this.life = 120;
//         this.maxLife = this.life;
//         this.attack = 16;
//         this.defense = 6;
//     }
// }

// class Log{

//     list=[];


//     constructor(listEl){
//         this.listEl = listEl;
//     }

//     render(){
//         this.listEl.innerHTML = '';

//         for(let i in this.list){
//            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
//         }
//     }

//     addMessage(msg){
//         this.list.push(msg);
//         this.render();
//     }

// }

// class Stage {
//     constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
//         this.fighter1 = fighter1;
//         this.fighter2 = fighter2;
//         this.fighter1El = fighter1El;
//         this.fighter2El = fighter2El;
//         this.log = logObject;
//      }

//     start() {
//         this.update();

//         this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2) );
//         this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1) );
//     }

//     update() {
//         // Fighter 1
//         this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
//         let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
//         this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;
//         // Fighter 2
//         this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
//         let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
//         this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
//     }
//     doAttack(attacking, attacked) {

//         if (attacked.life <= 0){
//             this.log.addMessage('Atacando cachorro morto...')
//             return;
//         }

//         else if (attacking.life <= 0) {
//             this.log.addMessage('Morto não ataca')
//             return;
//         }
        
//         let attackFactor = (Math.random() * 2).toFixed(1);
//         let defenseFactor = (Math.random() * 2).toFixed(1);

//         let actualAttack = attacking.attack * attackFactor;
//         let actualDefense = attacked.defense * defenseFactor;
        
//         if (actualAttack > actualDefense) {
//             attacked.life = attacked.life - actualAttack;
//             this.log.addMessage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`)
            
//         } else {
//             this.log.addMessage(`${attacked.name} conseguiu defender...`)
//             }

//         this.update();
//     }

// }


// const listEl = document.querySelector('#log');
// const log = new Log(listEl);
// // const log= new Log(document.querySelector('#log'));
// const knight_1 = new Knight('Cavaleiro');
// const monstro_1 = new BigMonster();
// const stage = new Stage(knight_1, monstro_1, document.querySelector('#char'), document.querySelector('#monster'), log);
// stage.start();


// PROJETO LUTA (PPROGRAMAÇÃO FUNCIONAL)

// function createPerson(nome, lastName, age){
//     return{
//         nome,
//         lastName,
//         age
//     }
// }

// let1= createPerson('João', 'Silva', 25)
// console.log(let1.age)

// let person = {
//     nome: 'João',
//     lastName: 'Silva',
//     age: 25,
//     getFullName(){
//         return `${this.nome} ${this.lastName}`
//     }
// }

// console.log(person.getFullName()) 

const personagemPadrao = {
    life:1,
    maxLife:1,
    attack:0,
    defense:0
}

const createKnight = (name) => {
    return {
        ...personagemPadrao,
        name, 
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...personagemPadrao,
        name, 
        life: 70,
        maxLife: 70,
        attack: 14,
        defense: 6
    }
}

const createBigMonster = () => {
    return {
        ...personagemPadrao,
        name: 'Big Monster', 
        life: 120,
        maxLife: 120,
        attack: 10,
        defense: 8
    }
}

const createSmallMonster = () => {
    return {
        ...personagemPadrao,
        name: 'Little Monster', 
        life: 60,
        maxLife: 60,
        attack: 6,
        defense: 6
    }
}

const personagem1 = createKnight('João');
const personagem2 = createSorcerer('Lucas');
const monstro1 = createBigMonster();
const monstro2 = createSmallMonster();

const stage = {
    figther1 : null,
    figther2 : null,
    figther1El : null,
    figther2El : null,
    
    start(figther1, figther2, figther1El, figther2El){
        this.figther1 = figther1;
        this.figther2 = figther2;   
        this.figther1El = figther1El;
        this.figther2El = figther2El;

        this.figther1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figther1, this.figther2));
        this.figther2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figther2, this.figther1));

        this.update();

    },
    update(){
        this.figther1El.querySelector('.name').innerHTML = `${this.figther1.name} - ${this.figther1.life.toFixed(1)} HP`;
        let f1Pct = (this.figther1.life / this.figther1.maxLife) * 100
        this.figther1El.querySelector('.bar').style.width = `${f1Pct}%`;



        this.figther2El.querySelector('.name').innerHTML = `${this.figther2.name} - ${this.figther2.life.toFixed(1)} HP`;
        let f2Pct = (this.figther2.life / this.figther2.maxLife) * 100
        this.figther2El.querySelector('.bar').style.width = `${f2Pct}%`;

    },

    doAttack(attacking, attacked){

        if (attacked.life <= 0){
            log.addMessage('Atacando cachorro morto...')
            return;
                }
            
        else if (attacking.life <= 0) {
            log.addMessage('Morto não ataca')
            return;
                }

        const attackFactor = (Math.random() * 2).toFixed(1);
        const defenseFactor = (Math.random() * 2).toFixed(1);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;
        
        if (actualAttack > actualDefense) {
            attacked.life = attacked.life - actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;

            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
            
        } else {
            log.addMessage(`${attacked.name} conseguiu defender...`)
            }

        this.update();   
    }
}

const log = {
    list:[],
    addMessage(msg){
        this.list.push(msg);
        this.render()
    },
    render(){
        const logEl = document.querySelector('.log');
        logEl.innerHTML='';

        for(let i in this.list){
            logEl.innerHTML +=`<li>${this.list[i]}</li>`
        }
    }
}


stage.start(personagem1, monstro2, document.querySelector('#char'), document.querySelector('#monster'));

