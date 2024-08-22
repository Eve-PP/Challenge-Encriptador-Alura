//let mensaje = document.getElementById('texto_entrada').value;
//let mensaje= "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober";
mensaje = "aaaaaa";
// const cifrado = ["b","c"];

// cifrado = mensaje.split('');
const vocales5 = ["a","e","i","o","u"];
let mensaje_cifrado = ""
let eliminados =[]




let aux = 0
let posicion = 0
let siguiente = 0
let aux2 =0


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */




function mostrar_resultado_x(){

    if(aux2==0){
        let respuesta = document.getElementById("img_0");
        //respuesta.outerHTML = `<p class="aplicacion_resultado_texto_final"> ${mensaje_cifrado} </p>`;
        respuesta.outerHTML = `<textarea class="aplicacion_resultado_texto_final"> ${mensaje_cifrado} </textarea>`;  
       

        let elem1 = document.getElementById("text_0_1");
        elem1.remove();
    
        let elem2 = document.getElementById("text_0_2");
        elem2.remove();

        ajuste_texto_resultado()

        insertar_boton();

    }else{
        let respuesta = document.querySelector("textarea.aplicacion_resultado_texto_final");
        respuesta.innerText = mensaje_cifrado;
        ajuste_texto_resultado()
    };

    
    
    

}

function ajuste_texto_resultado(){
    let respuesta_texto = document.querySelector("textarea.aplicacion_resultado_texto_final");
        
    
        respuesta_texto.style.height = 60 + 'px';

        respuesta_texto.style.height = (respuesta_texto.scrollHeight + 10) + 'px';

       
      
        /*respuesta_texto.setAttribute("rows","10");*/

    let respuesta_alineacion = document.querySelector(".aplicacion_resultados_visualizacion");
    respuesta_alineacion.style.justifyContent = "space-between";
 


}

function insertar_boton(){

    const copiar = document.createElement("button");
    copiar.innerHTML = "Copiar";
    document.querySelector("div.aplicacion_resultado_boton").appendChild(copiar);
    copiar.setAttribute("id", "copiar");
    copiar.setAttribute("onclick", "copiar_texto_final()");

}


function encriptar (){

    mensaje = String(document.getElementById('texto_entrada').value);
    let cifrado = mensaje.split('');

  
    for (let x in cifrado) {
        if (vocales5.includes(cifrado[x])) {    
            if (cifrado[x]=="e"){
                cifrado[x]= "enter"
                } else{
                    if (cifrado[x]=="i"){
                        cifrado[x] ="imes"
                    }else{
                        if(cifrado[x]=="a"){
                            cifrado[x]="ai"
                        }else{
                            if (cifrado[x]=="o"){
                                cifrado[x]="ober"
                            }else{
                                cifrado[x]="ufat"
                            }
                        }
                    }
                
                }
        };
        
        };
    mensaje_cifrado = cifrado.join('');
    
      
  mostrar_resultado_x();
  aux2++

    
};


function desencriptar(){

    mensaje = String(document.getElementById('texto_entrada').value);
    let cifrado = mensaje.split('');

    
    


    for (let x in cifrado) {
        if (vocales5.includes(cifrado[x])) {    
            if (cifrado[x]=="e"){
                posicion= parseInt(x);
                /*console.log(posicion);*/
                siguiente= posicion+1;
                //console.log(siguiente);
                if(cifrado[siguiente]=="n" && cifrado[siguiente+1]=="t" && cifrado[siguiente+2]=="e" && cifrado[siguiente+3]=="r"){
                    cifrado.splice(siguiente,4);
                    }else {
                         aux++ 
                         //console.log(aux);
                    }
            }else{
                if (cifrado[x]=="i"){
                    posicion= parseInt(x);                    
                    siguiente= posicion+1;                    
                    if(cifrado[siguiente]=="m" && cifrado[siguiente+1]=="e" && cifrado[siguiente+2]=="s"){
                        cifrado.splice(siguiente,3);
                        }else {
                             aux++ 
                             //console.log(aux);
                        } 



                    
                }else{
                    if(cifrado[x]=="a"){
                        posicion= parseInt(x);                    
                        siguiente= posicion+1;                    
                        if(cifrado[siguiente]=="i"){
                            cifrado.splice(siguiente,1);
                            }else {
                                 aux++ 
                                //console.log(aux);
                            } 
                    
                    
                    
                    
                        
                    }else{
                        if (cifrado[x]=="o"){
                            posicion= parseInt(x);                    
                            siguiente= posicion+1;                    
                            if(cifrado[siguiente]=="b" && cifrado[siguiente+1]=="e" && cifrado[siguiente+2]=="r"){
                                cifrado.splice(siguiente,3);
                                }else {
                                     aux++ 
                                     //console.log(aux);
                                } 





                        }else{
                            posicion= parseInt(x);                    
                            siguiente= posicion+1;                    
                            if(cifrado[siguiente]=="f" && cifrado[siguiente+1]=="a" && cifrado[siguiente+2]=="t"){
                                cifrado.splice(siguiente,3);
                            }else {
                                 aux++ 
                                //console.log(aux);
                            } 


                        }
                        }
                    }
                
                }
        };
        
        };
    mensaje_cifrado = cifrado.join('');
    
    
    mostrar_resultado_x();
  aux2++

    

};


function copiar_texto_final(){


    //<input id="input" type="text" /> <button id="copy">Copy</button>

    /*function copy() {
        let copyText = document.querySelector("#input");
        copyText.select();
        document.execCommand("copy");
      }
      
      document.querySelector("#copy").addEventListener("click", copy);*/

      //<button onclick="copy();" class="copiar1" id="copiar1"> copiar1</button>


    let copiar_texto = document.querySelector(".aplicacion_resultado_texto_final");
    copiar_texto.select();
    document.execCommand("copy");
      
}
