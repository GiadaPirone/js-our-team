// array che contiene gli oggetti
const membri = [
     membroUno = {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },

    membroDue = {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },

    membroTre = {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },

    membroQuattro = {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },

    membroCinque = {
        nome: "Angela Lopez",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },

    membroSei = {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
    
];


//ciclo che mi suddivide e prende tutti gli oggetty all'interno dell'array membri

for (let i = 0; i < membri.length; i++) {
    const membro = membri[i];

    // console.log(membro);
    cicloForIn (membro);
}


// funzione che mi stampa per ogni membro chiave e valore
function cicloForIn (membro){

    for ( let key in membro){
        const chiave = membro[key];

        console.log(key);
        console.log(membro[key]);
    }
    
}
