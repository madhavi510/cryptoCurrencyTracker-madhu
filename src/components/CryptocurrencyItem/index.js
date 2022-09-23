// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrenciesList} = props
  const {
    id,
    currencyLogo,
    currencyName,
    euroValue,
    usdValue,
  } = cryptoCurrenciesList

  return (
    <li className="list-container" key={id}>
      <div className="coinType-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>

      <div className="currency-details-container">
        <p className="usd-type">{usdValue}</p>
        <p className="euro-type">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
