$(document).ready(
    $.ajax({
        url:'https://apipetshop.herokuapp.com/api/articulos',
        success: function(info) {
            var data = info.response;
            miPrograma(data)
        }
            
    })
)

// Activador Materialize //
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});

// Mi Programa JS
function miPrograma (data) {
    
    const juguetes = []
    console.log("miPrograma -> juguetes", juguetes)
    const medicamentos = []

    data.map( articulo => {
        if(articulo.tipo == "Juguete") {
            juguetes.push(articulo)
        }
        else {
            medicamentos.push(articulo)
        }
    })


    const colCLass = 'col'
    const s3 = 's3'
    const cardClass = 'card'
    const cardImgClass = 'card-image'
    const cardContentClass = 'card-content'
    const cardTitleClass = 'card-title'
    const blackText = 'black-text'
    const botonFloating = 'btn-floating'
    const halfway = 'halfway-fab'
    const red = 'red'
    const materialIconst = 'material-icons'
    const right = 'right'
    const cardReveal = 'card-reveal'
    const activador = 'activator'
    const waveEffect = 'waves-effect'
    const waveBlock = 'waves-block'
    const waveLight = 'waves-light'
    const medium = 'medium'
    const textoRojo = 'red-text'

    function creadorGondolas (productosVenta, gondola) {
        productosVenta.map (articulo => {
            // Card //
            let col = document.createElement('div')
            col.classList.add(colCLass ,s3 ,medium)
            let card = document.createElement('div')
            card.classList.add(cardClass)
            // Card Img // 
            let cardImg = document.createElement('div')
            cardImg.classList.add(cardImgClass)
            let img = document.createElement('img')
            img.src= articulo.imagen
                // Boton Compra //
                let botonCompra = document.createElement('a')
                botonCompra.classList.add(botonFloating ,halfway ,red ,waveEffect ,waveLight ,waveBlock)
                let elementoI = document.createElement('i')
                elementoI.classList.add(materialIconst)
                elementoI.innerText = 'shopping_cart'
            // Card Content //
            let cardContent = document.createElement('div')
            cardContent.classList.add(cardContentClass ,blackText)
                // Título //
                let titulo = document.createElement('span')
                titulo.classList.add(cardTitleClass ,activador)
                titulo.innerText = articulo.nombre
            // Boton más info //
            let masInfo = document.createElement ('div')
            masInfo.classList.add(cardReveal)
            let descripcion = document.createElement('span')
            descripcion.classList.add(blackText ,cardTitleClass)
            descripcion.innerText = articulo.descripcion
            let close = document.createElement('i')
                close.classList.add(materialIconst ,right)
                close.innerText = 'close'
            // Precio //
            let precio = document.createElement('p')
            precio.innerText= 'Precio:'+ ' ' + '$'+ `${articulo.precio}`
            // Stock //
            let stock = document.createElement('p')
            stock.innerText = 'Stock:' + ' ' + `${articulo.stock}`
            if(articulo.stock <= 5) {
                stock.classList.add(textoRojo)
            }

            
            
            card.appendChild(cardImg)
            cardImg.appendChild(img)
            cardImg.appendChild(botonCompra)
            botonCompra.appendChild(elementoI)
            card.appendChild(cardContent)
            cardContent.appendChild(titulo)
            cardContent.appendChild(precio)
            cardContent.appendChild(stock)
            card.appendChild(masInfo)
            masInfo.appendChild(descripcion)
            descripcion.appendChild(close)
            col.appendChild(card)
            gondola.appendChild(col)
        })
    }


    const gondolaJuguetes = document.querySelector('#gondolaJugueteria')
    const gondolaMedicamentos = document.querySelector('#gondolaFarmacia')

     if(gondolaJuguetes != null){
        creadorGondolas(juguetes, gondolaJuguetes)   
    }   else if (gondolaMedicamentos != null) {
        creadorGondolas(medicamentos, gondolaMedicamentos)
    }   else {
        return;
    }

    // Sweet Alert //
    
    
}

function validation() {
    swal({
        title: "Formulario enviado con éxito",
        text: "Nos comunicaremos a la brevedad",
        icon: "success",
    });
}

// boton.addEventListener( () => )
