import { ResponsivePie } from '@nivo/pie'
import { useTheme } from '@mui/material'
import { mockPieData as data } from '../data/mockData'

const PieChart = () => {
  const theme = useTheme()

  return (
    <ResponsivePie
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.neutral.main,
              },
            },
            legend: {
              text: {
                fill: theme.palette.neutral.main,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.neutral.main,
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.neutral.main
              }
            },
          },
          legends: {
            text: {
              fill: theme.palette.neutral.main,
            },
          },
          tooltip: {
            container: {
              color: theme.palette.neutral.main,
              background: theme.palette.secondary.main,
              fontSize: 16,
            },
          },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.neutral.main}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: theme.palette.neutral.main,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                          
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default PieChart