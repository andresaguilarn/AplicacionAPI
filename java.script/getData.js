const API ="https://jsonplaceholder.typicode.com/users";

const getData = (api) => {
    fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json);
    })

};
const llenarDatos = (data) => {
  let html = "";

  data.forEach((pj) => {
    html += '<div>';
    html += '<div class="list-group-item shadow-sm p-3 mb-5 card border-primary mb-2 bg-warning text-dark">';
    html += `<h5 class="fs-3">${pj.name}</h5>`;
    html += `<a href="#" class="fs-5 btn btn-primary">${pj.email}</a>`;
    html += `<p class="card-text fs-5 ">${pj.address.city}</p>`;
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosU").innerHTML = html;
};
getData(API);