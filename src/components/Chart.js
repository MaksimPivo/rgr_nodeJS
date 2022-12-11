import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React from "react";
import { Bar } from "react-chartjs-2";
import store from '../store/index';
import { useNavigate } from "react-router-dom";

const Chart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const max = 25;
  const navigate = useNavigate();

  return (
    <>
    <div>
      <tbody>
        <table>
          <tr>
            <td>
              <h3><button onClick={function(){
              store.dispatch({type: "logOut"})
              window.location.href = '/';
              }}>Logout</button> </h3>
            </td>
            <td>
              <h3><button onClick={function(){
              store.dispatch({type: "logIn"})
              navigate("/user");
              }}>Users</button> </h3>
            </td>
          </tr>
        </table>
      </tbody>
    </div>
      <Bar
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Bar Chart',
            },
          },
        }}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [Math.random()*max, Math.random()*max, Math.random()*max, Math.random()*max, Math.random()*max, Math.random()*max, Math.random()*max],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Dataset 2',
              data: [Math.random()*max, Math.random()*max, Math.random()*max, Math.random()*max, Math.random()*max, Math.random()*max, Math.random()*max],
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        }}
      />
    </>
  );
};
export default Chart;