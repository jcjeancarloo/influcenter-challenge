import NoData from '@components/Common/NoData'
import Title from '@components/Common/Title'
import Chart from 'react-apexcharts'
import { useTranslation } from 'react-i18next'

type PieProps = {
  data: any
}

const settings = {
  options: {
    dataLabels: {
      enabled: true,
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
              show: false,
              showAlways: false,
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

const Pie = ({ data }: PieProps) => {
  const { t } = useTranslation()
  const labels = [`${t('overview.donut.totalUsers')}`, `${t('overview.donut.totalSales')}`]

  return data.series.length ? (
    <div className="flex flex-col h-full w-full gap-y-4">
      <Title name={t('overview.pie.title')} />
      <Chart
        options={{ ...settings.options, labels }}
        series={data.series}
        type="pie"
        width={'100%'}
        height={'100%'}
      />
    </div>
  ) : (
    <NoData />
  )
}

export default Pie
