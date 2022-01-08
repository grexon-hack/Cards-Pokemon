const targetas = document.querySelector('#targetas');
const container = document.getElementById('container-pokemon');
const cabecera = document.querySelector('.cabecera');
const zoom = document.querySelector('.zoom');
const cuerpo = document.body;
const valueInput = document.querySelector('#valueInput');
const botonDerecha = document.querySelector('.left');
const botonIzquierda = document.querySelector('.right');
const atrasar = document.getElementById('derecha');
const avanzar = document.getElementById('izquierda');
const botonAtras = document.createElement('button');
botonAtras.classList.add('botonAtras')
botonAtras.innerHTML='Atras';
botonAtras.style.opacity='0';
container.appendChild(botonAtras);
const pantalla = document.createElement('div');
pantalla.style.display='none';
pantalla.style.width='100%';
pantalla.style.height='740px';
pantalla.classList.add('pantalla');
pantalla.style.position='absolute';
pantalla.style.top='-180px'
container.appendChild(pantalla);



function Inicio() {
    container.style.filter='blur(4px)';
    cabecera.style.filter='blur(4px)';
    zoom.style.zIndex='1';
    zoom.style.position='absolute';
    zoom.style.top='300px';
    zoom.style.left='500px';
    zoom.style.transform='scale(2)';
    setTimeout(() => {
        container.style.filter='blur(0px)';
        cabecera.style.filter='blur(0px)';
        zoom.remove()
    }, 4000);
    
}

const CallFetch = async (id) => {
   await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((c) => {
        Cards(c);
        console.log(c)
    }).catch((err) => console.log(err));
};

const Numerador = (number) => {
    for (let i = 1; i <= number; i++) {
        CallFetch(i)
        
    }
}


const Cards = (card) => {
   if (card.types[0].type.name == 'fire') {
        targetas.innerHTML +=`<div class="pokemones" onclick="viewer(this)" style="background-image:url(https://images.fineartamerica.com/images-medium-large/fire-hot-vickie-beasley.jpg)" > 
            <p style="color:white" class="id"><span>#${card.id}</span></p> 
             <img class="imagen" src=${card.sprites.front_default}>  
             <h2 style="color:white">${card.name}</h2>
             <br />
             <div id="infoMax">
             <p >${card.types[0].type.name}</p>
            <p>Nivel de Batalla: ${card.base_experience}</p>
            <h3>Ability</h3>
            <ul>
                <li>${card.abilities[0].ability.name}</li>
                <li>${card.abilities[1].ability.name}</li>
            </ul>
            </div>
             </div>`;
   } else{
    if (card.types[0].type.name == 'water') {
    targetas.innerHTML +=`<div class="pokemones" onclick="viewer(this)" style="background-image:url(https://ak0.picdn.net/shutterstock/videos/24753860/thumb/1.jpg)"> 
       <p class="id"><span>#${card.id}</span></p> 
        <img class="imagen" src=${card.sprites.front_default}>  
        <h2>${card.name}</h2>
        <br />
             <div id="infoMax">
             <p >${card.types[0].type.name}</p>
            <p>Nivel de Batalla: ${card.base_experience}</p>
            <h3>Ability</h3>
            <ul>
                <li>${card.abilities[0].ability.name}</li>
                <li>${card.abilities[1].ability.name}</li>
            </ul>
            </div>
        </div>`;
    }else{
        if (card.types[0].type.name == 'psychic') {
            targetas.innerHTML +=`<div class="pokemones" onclick="viewer(this)" style="background-image:url(https://www.elmetropolitanodigital.com/wp-content/uploads/2018/04/universo.jpg)" > 
                <p style="color:white" class="id"><span>#${card.id}</span></p> 
                 <img class="imagen" src=${card.sprites.front_default}>  
                 <h2 style="color:white">${card.name}</h2>
                 <br />
                 <div id="infoMax">
                 <p >${card.types[0].type.name}</p>
                <p>Nivel de Batalla: ${card.base_experience}</p>
                <h3>Ability</h3>
                <ul>
                    <li>${card.abilities[0].ability.name}</li>
                    <li>${card.abilities[1].ability.name}</li>
                </ul>
                </div>
                 </div>`;
       }else{
            if (card.types[0].type.name == 'rock') {
                targetas.innerHTML +=`<div class="pokemones" onclick="viewer(this)" style="background-image:url(https://images7.alphacoders.com/686/thumb-1920-686953.jpg)"> 
                   <p style="color:black" class="id"><span>#${card.id}</span></p> 
                    <img class="imagen" src=${card.sprites.front_default}>  
                    <h2>${card.name}</h2>
                    <br />
                        <div id="infoMax">
                        <p >type:${card.types[0].type.name}</p>
                        <p>  Nivel de Batalla: ${card.base_experience}   </p>
                        <h3>Ability</h3>
                        <ul>
                            <li>${card.abilities[0].ability.name}</li>
                            <li>${card.abilities[1].ability.name}</li>
                        </ul>
                        </div>
                    
                        </div>`;
            
            }else{
                if (card.types[0].type.name == 'electric') {
                    targetas.innerHTML +=`<div class="pokemones" onclick="viewer(this)" style="background-image:url(https://bpic.588ku.com/audio_copy/cover_img/18/07/17/9eb70f6df36355db66702c1db31640e9.jpg)"> 
                    <p style="color:black" class="id"><span>#${card.id}</span></p> 
                     <img class="imagen" src=${card.sprites.front_default}>  
                     <h2>${card.name}</h2>
                     <br />
                         <div id="infoMax">
                         <p >type:${card.types[0].type.name}</p>
                         <p>  Nivel de Batalla: ${card.base_experience}   </p>
                         <h3>Ability</h3>
                         <ul>
                             <li>${card.abilities[0].ability.name}</li>
                             <li>${card.abilities[1].ability.name}</li>
                         </ul>
                         </div>
                     
                         </div>`; 
                }
                    targetas.innerHTML +=`<div class="pokemones" onclick="viewer(this)" style="background-image:url(https://assets.landwatch.com/resizedimages/10000/10000/h/80/1-3795313590)"> 
                    <p style="color:black" class="id"><span>#${card.id}</span></p> 
                    <img class="imagen" src=${card.sprites.front_default}>  
                    <h2>${card.name}</h2>
                    <br />
                    <div id="infoMax">
                    <p >type:${card.types[0].type.name}</p>
                    <p>  Nivel de Batalla: ${card.base_experience}   </p>
                    <h3>Ability</h3>
                    <ul>
                   <li>${card.abilities[0].ability.name}</li>
                   <li>${card.abilities[1].ability.name}</li>
                    </ul>
                    </div>
           
                    </div>`;
            
            }   
        }

        
    
    
   }
   
    
   }   
}
const arreglo = [];

function valorInput() {
    
    let valor = Number(valueInput.value);
    
    if (valor != '') {
        Numerador(valor);
        valueInput.value = '';
        arreglo.push(targetas.childNodes)
        targetas.innerHTML = '';
        
    }
    if (valor > 8) {
        targetas.style.overflowY='scroll';
        
    }else{
        targetas.style.overflowY='hidden';
        Numerador(0)
    }
        
    
    
}
const Arreglo2 = [];
let indice = 0;

function viewer(target){
    
    for (let i = 0; i < arreglo[0].length; i++) {
        Arreglo2.push(arreglo[0][i]);
        
    }
    
    indice = Arreglo2.indexOf(target);
    pantalla.style.display='block';
    Arreglo2[indice].style.position='absolute';
    Arreglo2[indice].style.top='calc((744px-400px) / 2)';
    Arreglo2[indice].style.left='calc((1350px-300px)/ 2)';
    Arreglo2[indice].style.width='300px';
    Arreglo2[indice].style.height='400px';
    Arreglo2[indice].style.transform='rotateY(360deg)';
    Arreglo2[indice].style.justifyContent='space-around';
    botonDerecha.style.opacity='1';
    botonIzquierda.style.opacity='1';
    botonAtras.style.opacity='1';   


   
}
avanzar.addEventListener('click', () => {
    Arreglo2[indice].style.position='relative';
    Arreglo2[indice].style.width='196px';
    Arreglo2[indice].style.height='260px';
    Arreglo2[indice].style.zIndex='0';
    Arreglo2[indice].style.justifyContent='initial';
    setTimeout(() => {
        indice += 1;
        console.log(indice)
        if (indice >= Arreglo2.length) {
            
            let aviso = document.createElement('div');
            aviso.classList.add('Aviso');
            aviso.innerHTML='Te quedaste sin POKEMONES en tu lista';
            targetas.appendChild(aviso);
            
            
        }
        Arreglo2[indice].style.position='absolute';
        Arreglo2[indice].style.zIndex='1';
        Arreglo2[indice].style.top='calc((744px-400px) / 2)';
        Arreglo2[indice].style.left='calc((1350px-300px)/ 2)';
        Arreglo2[indice].style.width='300px';
        Arreglo2[indice].style.height='400px';
        Arreglo2[indice].style.transform='rotateY(360deg)';
        Arreglo2[indice].style.justifyContent='space-around';
        
    }, 1000);
    
   
})

atrasar.addEventListener('click', () => {
    
    Arreglo2[indice].style.position='relative';
    Arreglo2[indice].style.width='196px';
    Arreglo2[indice].style.height='260px';
    Arreglo2[indice].style.zIndex='0';
    
    setTimeout(() => {
        indice = indice - 1;
         if (indice <= 0) {
            
            let aviso = document.createElement('div');
            aviso.classList.add('Aviso');
            aviso.innerHTML='Te quedaste sin POKEMONES en tu lista';
            targetas.appendChild(aviso);
            
            
        }
        Arreglo2[indice].style.position='absolute';
        Arreglo2[indice].style.zIndex='1';
        Arreglo2[indice].style.top='calc((744px-400px) / 2)';
        Arreglo2[indice].style.left='calc((1350px-300px)/ 2)';
        Arreglo2[indice].style.width='300px';
        Arreglo2[indice].style.height='400px';
        Arreglo2[indice].style.transform='rotateY(360deg)';
        Arreglo2[indice].style.justifyContent='space-around';
    }, 1000);    
         
})

botonAtras.addEventListener('click', () => {
    pantalla.style.display='none';
    let poke = document.querySelector('.pokemones');
    targetas.innerHTML='';
    botonDerecha.style.opacity='0';
    botonIzquierda.style.opacity='0';
    botonAtras.style.opacity='0'; 
    targetas.style.overflowY='hidden';
});