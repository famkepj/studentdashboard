import React from "react";
import Profile from "../Profile";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Floris = ({ chartDataFloris, sortedByProject, StudentProfile }) => {
  const FlorisData = sortedByProject.filter(
    (person) => person.name === `Floris`
  );

  const getChartFloris = () => {
    chartDataFloris.datasets[0].data = FlorisData.map((data) => data.fun);
    chartDataFloris.datasets[1].data = FlorisData.map(
      (data) => data.difficulty
    );
  };
  getChartFloris();

  return (
    <div>
      <h4>Student</h4>
      <Profile StudentProfile={StudentProfile[2]}></Profile>
      <h4>Bar Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Bar data={chartDataFloris} />
      <h4>Line Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Line data={chartDataFloris} />
    </div>
  );
};

export default Floris;
