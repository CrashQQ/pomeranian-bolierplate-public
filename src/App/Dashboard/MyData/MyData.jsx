import { RoundedImage } from '../../Components/RoundedImage';
import snowWolf from '../../Images/snow-wolf.png';
import './styles.css';

export const MyData = () => {
  return (
    <div className="mydata-dashboard">
      <RoundedImage src={snowWolf} size={{ width: 90, height: 90 }} />
      <div className="mydata-section">
        <h3>Adrian Pawlata</h3>
        <p>Białystok</p>
      </div>
      <div className="mydata-section">
        <p>e-mail:</p>
        <p>adrianpawlata1@gmail.com</p>
      </div>
      <div className="mydata-section">
        <p>telefon</p>
        <p>505 913 854</p>
      </div>
    </div>
  );
};
