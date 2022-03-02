const personas = [


    {
        nombre: "matias"
        edad: 29,
        dni: 37191228
    }


{
        nombre: "rocio"
        edad: 21,
        dni: 41556766
    }


{
        nombre: "martin"
        edad: 25,
        dni: 37145786
    }
]



function cardCreator() {
    const cards = personas.map(persona => `
    < div class= "card" style = "width: 18rem;" >
    <div class="card-body">
        <h5 class="card-title">${persona.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Edad: ${persona.edad}</h6>
        <p class="card-text">DNI: ${persona.dni}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div >
    `)
        
        
        document.write(cards)
        
}

    cardCreator ()

