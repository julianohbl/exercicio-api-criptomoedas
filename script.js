
//Api key
let apiKey = {
  key: '266b3bf0-f733-4d54-9087-c023a5ae4450'
}
//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
  apiKey.key)
  .then((response) => {
    if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
  })
  .then((api) => {
    let text = "";
    //Get 10 coins and symbols
    for (let i = 0; i < 10; i++) {
      //Show API information
      text = text +
        `
          <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60" />
            <div class="media-body">
              <h5 class="mt-2">${api.data[i].name}</h5>
              <p>${api.data[i].symbol} - ${api.data[i].first_historical_data}</p>
              <p></p>
            </div>
          </div>
          `;

      document.getElementById("coins").innerHTML = text;
    }

  })
  .catch((error) => {
    console.error(error.message);
  });

