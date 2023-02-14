document.getElementById("OB").onclick =  function() {
    console.log("capturamos el evento");
    document.getElementById("obs").innerHTML = "Practica Pre Profesional: Tareas de relevamiento para armado del indice de limpieza de la ciudad"
}

document.getElementById("ST").onclick =  function() {
    console.log("Stallion");
    document.getElementById("obs").innerHTML = "Cofundador: Encargado de supervisar la producción de sustratos para huerta y jardín. Tareas de administración y logística. Atención al cliente."

}
document.getElementById("FB").onclick =  function() {
    console.log("Stallion");
    document.getElementById("obs").innerHTML = "Ayudante de Cátedra  de Edafología: Asistente de tareas de laboratorio. Participe como docente dentro del dictado de clases."
       
}
document.getElementById("SM").onclick =  function() {
    console.log("Stallion");
    document.getElementById("obs").innerHTML = "Promotor ambiental: Encargado de fomentar, concientizar y resolver inquietudes de los vecinos del partido, acerca de la separación de los residuos domiciliarios."

}



const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#Correo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:jose.adrogue@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}