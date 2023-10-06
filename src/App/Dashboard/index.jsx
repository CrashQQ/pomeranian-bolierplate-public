import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData';
import './styles.css';

export function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <Blocks />
      <MyData />
    </div>
  );
}
