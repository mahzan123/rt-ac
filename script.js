function whatsapp() {
  const message = `Hallo! ${'Rinjani AC'}`
  const whatsapp = `https://wa.me/6287724377700?text=${message}`
  open(whatsapp, "_blank")
}

const alert = document.querySelector('.alert');

function alert() {
  alert.classList.toggle('d-none');
}
