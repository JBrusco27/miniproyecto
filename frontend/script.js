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
    .post("", data)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

  function createBus(){

    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      response.data.forEach(element => {
        let userData = {
          userIdData: element.userId, 
          IdData: element.id,
          titleData: element.title, 
          bodyData: element.body
        }
        const busProperties = [
          { name: "matricula", value:userData.IdData },
          { name: "marca", value:userData.userIdData },
          { name: "pasajeros", value:userData.userIdData },
          { name: "altura", value:userData.userIdData},
          { name: "peso", value:userData.userIdData},
          { name: "largo", value:userData.userIdData},
          { name: "ejes", value:userData.userIdData},
          { name: "empresa", value:userData.userIdData}
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
