import Chart from 'react-apexcharts'

type DonutProps = {
  data: any
}

const settings = {
  options: {
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom' as const,
      fontColor: 'white',
      labels: {
        colors: 'white',
      },
    },
    theme: {
      palette: 'palette1',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '85%',
          labels: {
            show: true,
            name: {
              show: true,
              color: 'white',
            },
            value: {
              show: true,
              color: 'white',
            },
            total: {
              show: true,
              showAlways: true,
              color: 'white',
            },
          },
        },
      },
    },
    stroke: {
      show: false,
    },
  },
}

const Donut = ({ data }: DonutProps) => {
  return (
    <Chart
      options={settings.options}
      series={data.series}
      type="donut"
      width={'100%'}
      height={'100%'}
    />
  )
}

export default Donut
