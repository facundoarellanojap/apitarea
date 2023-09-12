let url = "https://restcountries.com/v3.1/all"
let contenedor = document.getElementById('c');

fetch(url)
  .then(response => response.json())
  .then(data => {

    data.forEach(pais => {

      let html = '<div><p>Pais: ' + pais.name.common +
                                '</p><p> Nombre oficial: ' + pais.name.official +
                                '</p><p> Capital: ' + pais.capital + 
                                '</p><p> Region: ' + pais.region + '</p></div> <hr>'
    
        contenedor.innerHTML += html;
    });
  })
