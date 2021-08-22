import {useContext} from 'react';
import {ThemeContext} from '../Provider';

const CardOverview = ({data}) => {
  const {theme} = useContext(ThemeContext);
  return (
  <div class={`card card-${theme} card-overview`}>
    <div class="card-overview-content">
      <div>{data.type}</div>
      <img src={`images/icon-${data.platform}.svg`} alt={data.platform} />
    </div>
    <div class="card-overview-content">
      <h4 className={theme}>{data.total}</h4>
      <div class={`card-overview-change ${data.resultType}`}>
        <img src={`images/icon-${data.resultType}.svg`} alt="Up" />
        {data.result}%
      </div>
    </div>
  </div>
  );
}

export default CardOverview;