import data from '../../data/data.json';
import { typeData } from '../../utils/Common';
import CustomChart from '../Chart/CustomChart';

const Type = () => {
  
  const labels = typeData();
  const counts = new Array(labels.length).fill(0);

  data.forEach(item => {
    const index = labels.indexOf(item.type);
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
       title={"Types"}
       options={options}
       series={series}
       type="donut"
  />);
}

export default Type;