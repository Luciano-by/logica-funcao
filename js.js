function sum(){

    let n1 = document.getElementById('inptNumber_1');
    let n2 = document.getElementById('inptNumber_2');
    let Poutput_1 = document.getElementById('POutput_1')
        if(n1.value === "" || n2.value === ""){
            alert("Preencha todos os campos")
        } else {
            let _n1 = Number(n1.value);
            let _n2 = Number(n2.value);
            let soma = _n1 + _n2        
            
            Poutput_1.innerHTML = soma
        }
}
function media(){

    let Poutput_2 = document.getElementById('POutput_2')
    let num1 = document.getElementById('inptNumber_3');
    let num2 = document.getElementById('inptNumber_4');
    
        if(num1.value === "" || num2.value === ""){
            alert("Prencha todos os campos")
        } else {
    
            let _num1 = Number(num1.value)
            let _num2 = Number(num2.value)
            function media(a, b) {
                return (a + b) / 2;
            }
            let resultado = media(_num1, _num2);
            console.log("A média é: " + resultado);
            
            function situacao(resultado) {
                if (resultado >= 7) {
                    return "Aprovado";
                } else if (resultado >= 5 && resultado < 7) {
                    return "Recuperação";
                } else {
                    return "Reprovado";
                }
            }
            Poutput_2.innerHTML = `Resultado: ${resultado}. Sua situação é: ${situacao(resultado)}`
        }
}
function sub(){

    let n5 = document.getElementById('inptNumber_5');
    let n6 = document.getElementById('inptNumber_6');
    let Poutput_3 = document.getElementById('POutput_3')
        if(n5.value === "" || n6.value === ""){
            alert("Preencha todos os campos")
        } else {
            
            let _n5 = Number(n5.value);
            let _n6 = Number(n6.value);
            let sub = _n5 - _n6
            if(_n5 == null || _n6 == null){
                alert("Preenche todos os valores")
            } else {
                
                Poutput_3.innerHTML = sub
            }
        }
}
function divisao(){
    
    let n7 = document.getElementById('inptNumber_7');
    let n8 = document.getElementById('inptNumber_8');
    let Poutput_4 = document.getElementById('POutput_4')
        if(n7.value === "" || n8.value === ""){
            alert("Preencha todos os campos")
        } else {
            
            let _n7 = Number(n7.value);
            let _n8 = Number(n8.value);
            let div = _n7 / _n8
            
            Poutput_4.innerHTML = div
        }
}
function Mult(){

    let n9 = document.getElementById('inptNumber_9');
    let n10 = document.getElementById('inptNumber_10');
    let Poutput_5 = document.getElementById('POutput_5')
        if(n9.value === "" || n10.value === ""){
            alert("Preencha todos os campos")
        } else {
            
            let _n9 = Number(n9.value);
            let _n10 = Number(n10.value);
            let mult = _n9 * _n10
            
            Poutput_5.innerHTML = mult
        }
}
function Raiz(){

    let n11 = document.getElementById('inptNumber_11');
    let Poutput_6 = document.getElementById('POutput_6')
        if(n11.value === ""){
            alert("Preencha todos os campos")
        } else {
            
            let _n11 = Number(n11.value);
            let raiz = Math.sqrt(_n11)
            
            Poutput_6.innerHTML = raiz
        }
}
function Pont(){

    let n12 = document.getElementById('inptNumber_12');
    let n13 = document.getElementById('inptNumber_13');
    let Poutput_7 = document.getElementById('POutput_7')
        if(n12.value === "" || n13.value === ""){
            alert("Preencha todos os campos")
        } else {
            
            let _n12 = Number(n12.value);
            let _n13 = Number(n13.value);
            let pont = _n12 ** _n13
            
            Poutput_7.innerHTML = pont
        }
}
function tabuadaSum(){

    let tsn1 = document.getElementById('inptNumber_TS1');
    let resultadoDiv = document.getElementById('result');
        if(tsn1.value === ""){
            alert('Preencha todos os campos');
        } else {
            
            let _tsn1 = Number(tsn1.value);
            resultadoDiv.innerHTML = ""
            // let resultado = " "
            // let ts = 10;
            for(let ny = _tsn1; ny > 0; ny--){
                let p = document.createElement('p');
                p.textContent = `${_tsn1} + ${ny} = ${_tsn1 + ny}`;
                resultadoDiv.appendChild(p);
            }
        }
}
function tabuadaSub(){

    let tsn2 = document.getElementById('inptNumber_TS2');
    let resultadoDiv2 = document.getElementById('result2');
        if(tsn2.value === ""){
            alert('Preencha todos os campos');
        } else {
            
            let _tsn2 = Number(tsn2.value);
            resultadoDiv2.innerHTML = ""
            // let resultado = " "
            // let ts = 10;
            for(let ny = _tsn2; ny > 0; ny--){
                let p = document.createElement('p');
                p.textContent = `${_tsn2} - ${ny} = ${_tsn2 - ny}`;
                resultadoDiv2.appendChild(p);
            }
        }
}
function tabuadaDivsao(){

    let tsn3 = document.getElementById('inptNumber_TS3');
    let resultadoDiv3 = document.getElementById('result3');
        if(tsn3.value === ""){
            alert('Preencha todos os campos');
        } else {
            
            let _tsn3 = Number(tsn3.value);
            resultadoDiv3.innerHTML = ""
            // let resultado = " "
            // let ts = 10;
            for(let ny = _tsn3; ny > 0; ny--){
                let p = document.createElement('p');
                p.textContent = `${_tsn3} / ${ny} = ${_tsn3 / ny}`;
                resultadoDiv3.appendChild(p);
            }
        }
}
function tabuadaMult(){

    let tsn4 = document.getElementById('inptNumber_TS4');
    let resultadoDiv4 = document.getElementById('result4');
        if(tsn4.value === ""){
            alert('Preencha todos os campos');
        } else {
            let _tsn4 = Number(tsn4.value);
            resultadoDiv4.innerHTML = ""
            // let resultado = " "
            // let ts = 10;
            for(let ny = _tsn4; ny > 0; ny--){
                let p = document.createElement('p');
                p.textContent = `${_tsn4} x ${ny} = ${_tsn4 * ny}`;
                resultadoDiv4.appendChild(p);
            }
        }
}
function tabuadaRaiz(){

    let tsn5 = document.getElementById('inptNumber_TS5');
    let resultadoDiv5 = document.getElementById('result5');
        if(tsn5.value === ""){
            alert('Preencha todos os campos');
        } else {
            
            let _tsn5 = Number(tsn5.value);
            resultadoDiv5.innerHTML = ""
            // let resultado = " "
            // let ts = 10;
            for(let ny = _tsn5; ny > 0; ny--){
                let p = document.createElement('p');
                p.textContent = `Raiz de ${ny} = ${Math.sqrt(ny)}`;
                resultadoDiv5.appendChild(p);
            }
        }
}
function tabuadaPont(){
    let tsn6 = document.getElementById('inptNumber_TS6');
    let resultadoDiv6 = document.getElementById('result6');
        if(tsn6.value === ""){
            alert('Preencha todos os campos');
        } else {
            
            let _tsn6 = Number(tsn6.value);
            resultadoDiv6.innerHTML = ""
            // let resultado = " "
            // let ts = 10;
            for(let ny = _tsn6; ny > 0; ny--){
                let p = document.createElement('p');
                p.textContent = `${_tsn6} x ${ny} = ${_tsn6 ** ny}`;
                resultadoDiv6.appendChild(p);
            }
        }
}