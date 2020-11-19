import React, { useEffect } from 'react';

const TradingView = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
          "symbols": [
              {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500"
              },
              {
              "proName": "FOREXCOM:NSXUSD",
              "title": "Nasdaq 100"
              },
              {
              "proName": "FX_IDC:EURUSD",
              "title": "EUR/USD"
              },
              {
              "proName": "BITSTAMP:BTCUSD",
              "title": "BTC/USD"
              },
              {
              "proName": "BITSTAMP:ETHUSD",
              "title": "ETH/USD"
              }
          ],
          "colorTheme": "light",
          "isTransparent": false,
          "displayMode": "adaptive",
          "locale": "en"
          })
        document.getElementById("tradingView").appendChild(script);
      });
    
      return (
        <div id="tradingView">
            <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
      )
}

export default TradingView;