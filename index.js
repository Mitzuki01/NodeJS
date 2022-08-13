// var n1=6;
// var n2=7;

// if(n1 > n2){

//   console.log('o numero 1 é maior que o numero 2')

// } else{

//   console.log('o numero 2 é maior que o numero 1')

// }

// for(let i=1; i <= 20; i++){

//   console.log('primeiros passos em Node')

// }

// const alimento = ['macarrão','arroz','feijão','batata frita','carne']
// const calorias = ['200','100','80','250','120']

// for (let c=0; c<=4; c++){
//   console.log('o(a)',alimento[c],'possúi',calorias[c],'kg');
// }

import {promises as fs} from 'fs';

async function getDataJson(){
//   o comando readfile é um modulo nativo do nodeJS e ele serve para podermos fazer a leitura
//   de arquivo em nosso sistema.


try{
      const data = JSON.parse(await fs.readFile('./src/people.json'));

      console.log(data)

  }catch(error){

      console.log('houve um erro' , error)

    }
}
getDataJson();