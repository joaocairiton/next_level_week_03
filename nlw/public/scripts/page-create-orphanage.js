const mymap = L.map("mapid").setView([-16.6917919, -49.272583], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

mymap.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  
  marker && mymap.removeLayer(marker);
  

  marker = L.marker([lat, lng], { icon }).addTo(mymap);
});


function addPhotoField() {
 
  const container = document.querySelector("#images");
 
  const fieldsContainer = document.querySelectorAll(".new-upload");
 
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  //limpar campo antes de adicionar ao container
  input.value = "";
  //fazer o clone ao container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }
  //deletar o campo
  span.parentNode.remove();
}
function toggleSelect(event) {
  //retirar a classe active dos botões
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  //colocar a class .active nesse botao clicado
  const button = event.currentTarget;
  button.classList.add("active");
  //atualizar o meu imput hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {
  //validar se lat e lng estao preenchidos
  const verLatLng = document.querySelector("[name=lat]").value;

  if (!verLatLng) {
    event.preventDefault();
    alert("Selecione um ponto no mapa!");
  }
}
