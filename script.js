let esMasculino = true;

const card = documentquerySelector (".perfil-card");
const nombre = document.getElementById ("nombre");
const ocupacion = document.getElementById ("ocupacion")

card.addEventListener ("click",()=> 
if (esMasculino)

{
    nombre.textContent = "Andrea Pierinaa Gignac";
    ocupacion.textContent = "Futbolista Delantera (version femenina)";
    
}