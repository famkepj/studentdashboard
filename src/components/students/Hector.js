import React from "react";
import Profile from "../Profile";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Hector = ({ chartDataHector, sortedByProject, StudentProfile }) => {
  const HectorData = sortedByProject.filter(
    (person) => person.name === `Hector`
  );

  const getChartHector = () => {
    chartDataHector.labels = HectorData.map((data) => data.project)
    chartDataHector.datasets[0].data = HectorData.map((data) => data.fun);
    chartDataHector.datasets[1].data = HectorData.map(
      (data) => data.difficulty
    );
  };
  getChartHector();

  return (
    <div>
      <h4>Student</h4>
      <Profile StudentProfile={StudentProfile[3]}></Profile>
      <h4>Bar Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Bar data={chartDataHector} />
      <h4>Line Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Line data={chartDataHector} />
    </div>
  );
};

export default Hector;
