import { input } from "./utils.mjs";

async function adivinaPalabra(){
    const palabra = "Casa"
    const separado = palabra.split("")
    let letra = "a"
    let intentos = 15
    let l = 0
    while(true){
        letra = await input("Adivina la letra: ")
        if(letra === separado[l]){
            console.warn(`La letra ${letra} es correcta, siguiente letra`)
            l++
            if(l === separado.length){
                console.clear()
                console.log(`Felicidades, has adivinado la palabra: ${palabra}`)
                if(intentos >= 15){
                    console.log("Tu puntaje es de 100")
                }
                else if(intentos >= 12){
                    console.log("tu puntaje es de 80")
                }
                else if(intentos >= 9){
                    console.log("Tu puntaje es de 60")
                }
                else if(intentos >= 6){
                    console.log("Tu puntaje es de 40")
                }
                else if(intentos >= 3){
                    console.log("Tu puntaje es de 20")
                }
                await input("")
                console.clear()
                return
            }
        }
        else if(letra !== separado[l]){
            console.warn("Letra incorrecta, intenta de nuevo")
            intentos--
            if(intentos === 0){
                console.clear()
                console.error(`Te has quedado sin intentos, la palabra era: ${palabra}`)
                console.log("Tu puntaje es de 0")
                await input("")
                console.clear()
                return
            }
        }
    }
}

adivinaPalabra()