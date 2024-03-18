import data from '../../data/data.json';
import { serviceOffering} from '../../utils/Common';
import CustomChart from '../Chart/CustomChart';

const NewChanges = () => {

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    },
  } 
   
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
  <CustomChart 
       title={"No. of new changes"}
       options={options}
       series={series}
       type="bar"
  />);
}

export default NewChanges;