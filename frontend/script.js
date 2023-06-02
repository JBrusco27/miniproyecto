function newBus() {
  event.preventDefault();
  const omnibus_matricula = document.querySelector("#matricula").value;
  const omnibus_marca = document.querySelector("#marca").value;
  const omnibus_pasajeros = document.querySelector("#pasajeros").value;
  const omnibus_altura = document.querySelector("#altura").value;
  const omnibus_peso = document.querySelector("#peso").value;
  const omnibus_largo = document.querySelector("#largo").value;
  const omnibus_ejes = document.querySelector("#ejes").value;
  const omnibus_empresa = document.querySelector("#empresa").value;

  const data = {
    omnibus_matricula,
    omnibus_marca,
    omnibus_pasajeros,
    omnibus_altura,
    omnibus_peso,
    omnibus_largo,
    omnibus_ejes,
    omnibus_empresa
  };
  console.log(data);
  axios
    .post("http://localhost:3000", data, { headers: { 'Authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmaG91YWNlYXZhYm1nZmdoaWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3MDcyMzAsImV4cCI6MjAwMDI4MzIzMH0.9ymp6avHtt28P15TWi9_ZbJOHDNsR3I-Y8dk_M3_xVQ' } })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

  function createBus(){

    axios
    .get('http://localhost:3000', { headers: { 'Authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmaG91YWNlYXZhYm1nZmdoaWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3MDcyMzAsImV4cCI6MjAwMDI4MzIzMH0.9ymp6avHtt28P15TWi9_ZbJOHDNsR3I-Y8dk_M3_xVQ' } })
    .then(response => {
      response.data.data.forEach(element => {
        let userData = {
          omnibus_matricula: element.omnibus_matricula,
          omnibus_marca: element.omnibus_marca,
          omnibus_pasajeros: element.omnibus_pasajeros,
          omnibus_altura: element.omnibus_altura,
          omnibus_peso: element.omnibus_peso,
          omnibus_largo: element.omnibus_largo,
          omnibus_ejes: element.omnibus_ejes,
          omnibus_empresa: element.omnibus_empresa
        }
        const busProperties = [
          { name: "matricula", value:userData.omnibus_matricula },
          { name: "marca", value:userData.omnibus_marca },
          { name: "pasajeros", value:userData.omnibus_pasajeros },
          { name: "altura", value:userData.omnibus_altura},
          { name: "peso", value:userData.omnibus_peso},
          { name: "largo", value:userData.omnibus_largo},
          { name: "ejes", value:userData.omnibus_ejes},
          { name: "empresa", value:userData.omnibus_empresa}
        ];
  
        
        const busDiv = document.createElement("div");
        busDiv.classList.add("bus");
        document.querySelector(".buses-div").appendChild(busDiv);
        for (i = 0; i < busProperties.length; i++) {
          const busP = document.createElement("p");
          const busSpan1 = document.createElement("span");
          const br = document.createElement("br");
          const busSpan2 = document.createElement("span");
          
          busDiv.appendChild(busP);
          busP.appendChild(busSpan1);
          busP.appendChild(br);
          busP.appendChild(busSpan2);
          
          busSpan1.classList.add("item-name");
          busSpan2.classList.add("item-value");
          busSpan1.innerHTML = busProperties[i].name;
          busSpan2.innerHTML = busProperties[i].value;
        }
        
      });
  

    }).catch(error => {
      console.error('Error sending data:', error);
    });

  }

  createBus();
  function refresh() {
    const busDivs = document.querySelectorAll(".buses-div .bus");
  
    busDivs.forEach(busDiv => {
      busDiv.remove();
    });
    createBus();
  }
