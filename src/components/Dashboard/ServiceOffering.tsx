import data from '../../data/data.json';
import { serviceOffering} from '../../utils/Common';
import CustomChart from '../Chart/CustomChart';

const ServiceOfferning = () => {
  
  const labels = serviceOffering();
  const counts = new Array(labels.length).fill(0);

  data.forEach(item => {
    const index = labels.indexOf(item.serviceOffering);
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

export default ServiceOfferning;