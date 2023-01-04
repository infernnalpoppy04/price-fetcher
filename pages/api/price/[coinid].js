const superagent = require("superagent");

export const config = {
  api: {
    externalResolver: true,
  },
}

export default function handler(req, res) {
  const { coinid } = req.query;

  superagent.get(`https://api.coingecko.com/api/v3/coins/${coinid}`).then((response) => {
    const data = JSON.parse(response.text)

    res.status(200).send(data.market_data.current_price.usd);
  });
}
