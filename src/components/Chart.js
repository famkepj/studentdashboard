import { Bar, Line} from 'react-chartjs-2'
const Chart = ({chartData, chartAllStudents, studentNames, spreadsheetData}) => {

  const getChartAll = () => {
    chartData.labels = chartAllStudents.map((data) => data.project)
    chartData.datasets[0].data = chartAllStudents.map((data) => data.avgFun)
    chartData.datasets[1].data = chartAllStudents.map((data) => data.avgDif)
  }
  getChartAll()

  return (
    <div className="chart">
      <h4>Bar chart from all students</h4>
      <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
      <Bar data={chartData}/>
      <h6>Click on the label fun rating/ difficulty rating to exclude/ include the data</h6>
      <Line data={chartData}/>
    </div>
  );
}

export default Chart
