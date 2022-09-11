document.addEventListener("DOMContentLoaded", ()=>{
    peticion(random())
})

const random = ()=>{
   return Math.floor(Math.random() * (151 - 1) + 1);
}

const peticion = async (id) => {   
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json()

        const objetos = {
            image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
            name: data.name,
            vida: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            ataqueEspecial: data.stats[3].base_stat
        }

        const imagen = document.querySelector(".img-principal").setAttribute(`src`, `${objetos.image}`)
        const name = document.querySelector(".nombre").textContent = `${objetos.name}`
        const vida = document.querySelector(".especie").textContent = `${objetos.vida} Hp`
        const caracteristicas1 = document.querySelectorAll(".caracteristicas div h2")[0].textContent = `${objetos.ataque}`
        const caracteristicas2 = document.querySelectorAll(".caracteristicas div h2")[1].textContent = `${objetos.defensa}`
        const caracteristicas3 = document.querySelectorAll(".caracteristicas div h2")[2].textContent = `${objetos.ataqueEspecial}`
        

        console.log(data) 
}

const boton = document.querySelector(".btn button")
boton.addEventListener("click", ()=>{
    peticion(random())
})





