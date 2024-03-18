import data from '../../data/data.json';
import { statusData } from '../../utils/Common';
import CustomChart from '../Chart/CustomChart';

const Status = () => {
  
  const labels = statusData();
  const counts = new Array(labels.length).fill(0);

  data.forEach(item => {
    const index = labels.indexOf(item.state);
    if (index !== -1) {
      counts[index]++;
    }
  });

  const options = {
    chart: {
      type: 'donut',
    },
    labels
};

  const series = counts;

  return (
  <CustomChart 
       title={"State"}
       options={options}
       series={series}
       type="donut"
  />);
}

export default Status;