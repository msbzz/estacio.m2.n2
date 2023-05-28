const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const testfunc = () => {
  alert("Foi");
};



const carregarList = (arrayNumeros) => {
  
  const tagLi = document.getElementById("valores");
  
  while (tagLi.firstChild) {
    tagLi.removeChild(tagLi.firstChild);
  }
  arrayNumeros.map((item) => {
    // console.log(item);

    const docitem = document.createElement("li");
    docitem.appendChild(document.createTextNode(item));
    tagLi.appendChild(docitem);
  });
};


const removeList= ()=>{
  const tagLi = document.getElementById("valores");
  
  while (tagLi.firstChild) {
    tagLi.removeChild(tagLi.firstChild);
  }
}
 

/* func verifica se existe o numero no array aprensetado na pagina */
const Finded = (num,param_array) => {
  let finded = false;
  param_array.map((item) => {
 
    if (item == num) {
      finded = true;
    }
  });

  return finded;
};



/*********************************************************************************************
  * 
      a) Função swap, com o objetivo de trocar os valores de duas posições de um vetor,
tendo como parâmetros de entrada o vetor e as posições
*/

const swap = (arrayNumeros, posIni,posFim) => {
  const temp = arrayNumeros[posIni];
  arrayNumeros[posIni] = arrayNumeros[posFim];
  arrayNumeros[posFim] = temp;
};

/*
    b) Função shuffle, com o objetivo de embaralhar os elementos de um vetor, tendo
como parâmetros de entrada o vetor e a quantidade de trocas

*/
 
const shuffle = (arrayNumeros, quantidade) => {
   
  /* 
    contador de itens(indices) de num randomicos inseridos no array
    que representam os indices do array lista recebido por issi
    não podem ser repetidos
  */ 
  let contador = -1;
  
  /* array com indices */ 
  let arrayTemp=[]

  while (contador < (quantidade-1)) {
    
    let addNew = Math.floor(Math.random() * (quantidade));/* quantidade usando lenght */ 
    console.log("Math addNew ", arrayTemp);
     /** na inicialização e undefined  */
    if (arrayTemp[0] == undefined) {
    
        contador += 1;
        arrayTemp.push(addNew);
    
    } else {
      
        if (!Finded(addNew,arrayTemp)) {
           arrayTemp.push(addNew);
           contador += 1;
       }
    }
  }

  /* 
     aki o vetor temporario vai receber
     os itens do array da lista em função 
     dos indices randomicos definidos  
  */

  let new_temporario =[]; 

  let j=0;
  
  arrayTemp.map(i=>{
    new_temporario.push(arrayNumeros[i]);
  });
  
  return new_temporario


};


/*
    c) Função bubble_sort, para ordenar um vetor de inteiros com o algoritmo Bubble
Sort, tendo como parâmetro de entrada o vetor de inteiros
*/
const bubble_sort = (arrayNumeros) => {
  const lengthNums = arrayNumeros.length;
  for (let i = 0; i < lengthNums; i++) {
    for (let j = i; j < lengthNums; j++) {
      if (arrayNumeros[i] > arrayNumeros[j]) {
        const temp = arrayNumeros[i];
        arrayNumeros[i] = arrayNumeros[j];
        arrayNumeros[j] = temp;
      }
    }
  }

  return arrayNumeros;
};
/*
    d) Função selection_sort, para ordenar um vetor de inteiros utilizando o algoritmo
Selection Sort, tendo como parâmetro de entrada o vetor de valores inteiros
*/

const selection_sort = (arrayNumeros) => {
  const lengthNums = arrayNumeros.length;
  for (let i = 0; i < lengthNums-1; i++) {
    // considera o primeiro index menor
    let primeiroIndex = i;
    // compara todos os proximos indices ao primeiro selecionado no for exeterno
    for (let j = i+1; j < lengthNums; j++) {
      if (arrayNumeros[j] < arrayNumeros[primeiroIndex]) {
        //achou item de valor menor que posição inicial, 
        //atribui valor do indice atual para o indice do loop externo
        primeiroIndex = j;
      }
    }

    // se houve mudança na marcação do indice inicial(primeiroIndex)
    //quer dizer que este item atual(indice i) precisa ser trocado com
    // o indice atualizado(primeiroIndex) pois
    // este(indice i) aponta para um valor maior que o inicial(primeiroIndex)
    if (primeiroIndex !== i) {
      let temp = arrayNumeros[i];
      arrayNumeros[i] = arrayNumeros[primeiroIndex];
      arrayNumeros[primeiroIndex] = temp;
    }
  }
 
  return arrayNumeros;
};
/*
    e) Função quick_sort, para ordenar um vetor de inteiros com o algoritmo Quick Sort,
recursivo, tendo como parâmetros o vetor, posição inicial e posição final
*/
const quick_sort = (arrayNumeros, posIni, posFim) => {
  if (posIni < posFim) {
    
    pivot = particionamento(arrayNumeros, posIni, posFim);
    quick_sort(arrayNumeros, posIni, pivot - 1);
    quick_sort(arrayNumeros, pivot + 1, posFim);
  }
  
  return arrayNumeros;
};

/*
    f) Função particionamento, de apoio a quick_sort, tendo como parâmetros o vetor,
posição inicial, posição final e valor do pivot
*/
 
const particionamento = (arrayNumeros,posIni, posFim) => {
  let pivot = arrayNumeros[posFim];
  let i = posIni - 1;

  for (let j = posIni; j <= posFim - 1; j++) {
    if (arrayNumeros[j] < pivot) {
      i++;
      swap(arrayNumeros, i, j);
    }
  }

  swap(arrayNumeros, i + 1, posFim);
  return i + 1;

};
