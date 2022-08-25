//Função que pega os dados do BD pegando a função subscription - Essa função será usada no botão
import app from "./app.js" //importando o bando de dados
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToded(subscriprition) {

    const db = getFirestore(app)
    const dedCollection = collection(db, 'clube-D&D') //essa collection recebe os dados do projeto criado no firebase
    const docRef = await addDoc(dedCollection, subscriprition) //adicionando os dados ao BD - Função assync / por ser assync ela precisa do await      
    return docRef.id
}