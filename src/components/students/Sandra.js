import React from "react";
import Profile from "../Profile";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Sandra = ({ chartDataSandra, sortedByProject, StudentProfile }) => {
  const SandraData = sortedByProject.filter(
    (person) => person.name === `Sandra`
  );

  const getChartSandra = () => {
    chartDataSandra.labels = SandraData.map((data) => data.project)
    chartDataSandra.datasets[0].data = SandraData.map((data) => data.fun);
    chartDataSandra.datasets[1].data = SandraData.map(
      (data) => data.difficulty
    );
  };
  getChartSandra();

  return (
    <div>
      <h4>Student</h4>
      <Profile StudentProfile={StudentProfile[7]}></Profile>
      <h5>The charts are sorted as last chosen by all students table; sort by default by refreshing page</h5>
      <h4>Bar Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Bar data={chartDataSandra} />
      <h4>Line Chart</h4>
      <h6>
        Click on the label fun rating/ difficulty rating to exclude/ include the
        data
      </h6>
      <Line data={chartDataSandra} />
    </div>
  );
};

export default Sandra;
