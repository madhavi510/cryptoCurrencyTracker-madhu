// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoCurrenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getListDetails()
  }

  getListDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedListData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptoCurrenciesList: updatedListData, isLoading: false})
  }

  render() {
    const {cryptoCurrenciesList, isLoading} = this.state

    return isLoading ? (
      <div testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="app-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <div className="app-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            className="app-image"
            alt="cryptocurrency"
          />
        </div>
        <div className="cryptocurrency-item-container">
          <div className="item-details-container">
            <p className="coin-type">Coin Type</p>
            <div className="money-details">
              <p className="usd">USD</p>
              <p className="euro">EURO</p>
            </div>
          </div>
          <div className="currency-list-container">
            {cryptoCurrenciesList.map(eachItem => (
              <CryptocurrencyItem
                cryptoCurrenciesList={eachItem}
                key={eachItem.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
