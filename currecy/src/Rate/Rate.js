import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc'



class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {}
    };
    this.currency = ['USD', 'PLN', 'EUR']
    this.getRate();
  }
  getRate = () => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ date: data[0].exchangedate })
        let result = {};
        data.forEach(item => {
          for (let i = 0; i < this.currency.length; i++) {
            if (item.cc === this.currency[i]) {
              result[this.currency[i]] = item.rate;
            }
          }
        });
        this.setState({ currencyRate: result });
      });
  }

  render() {
    return (
      <div className='rate'>
        <h3>Курс валют на сегодня : {this.state.date} </h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) =>
          (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)} UAH</div>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>

    );
  }
}

export default Rate;
