import {useContext} from 'react';
import {ThemeContext} from '../Provider';

const CardTotal = ({data}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`card card-${theme} card-totals ${data.platform}`}>
      <div className="card-totals-header">
        <img src={`images/icon-${data.platform}.svg`} alt={data.platform} />
        <div>@{data.username}</div>
      </div>
      <div className="card-totals-body">
        <h2 className={theme}>{data.total}</h2>
        <p>{data.type}</p>
      </div>
      <div className="card-totals-footer">
        <img src={`images/icon-${data.resultType}.svg`} alt={data.resultType} />
        <div className={data.resultType}>{data.result} Today</div>
      </div>
    </div>
    );
}

export default CardTotal;