import NoData from '@components/Common/NoData'
import Chart from 'react-apexcharts'

type DonutProps = {
  data: any
}

const settings = {
  options: {
    chart: {
      foreColor: '#64748b',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth' as const,
    },
    xaxis: {
      type: 'datetime' as const,
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
}

const Area = ({ data }: DonutProps) => {
  return data.length ? (
    <Chart
      options={settings.options}
      series={data.series}
      type="area"
      width={'100%'}
      height={'100%'}
    />
  ) : (
    <NoData />
  )
}

export default Area
