import { subscribeToded } from "./firebase/d&d.js" //Função que pega os dados do BD pegando a função subscription - Essa função será usada no botão



const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

const btnSubcribe = document.getElementById('btnSubcribe');


//Ação que irá acontecer qdo o botão for clicado
btnSubcribe.addEventListener('click', async() => {

    const subscriprition = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        } // atributos que serão enviados para o BD

    //salvar no banco de dados pegando a função do arquivo d&d.js
    const subscripritionId = await subscribeToded(subscriprition)
    const subscribeToded = await subscribeToded(subscriprition)

})