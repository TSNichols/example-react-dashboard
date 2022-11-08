import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material'
import { mockLineData as data } from '../data/mockData'

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme()

  return (
    <ResponsiveLine
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
        colors={[ theme.palette.accent.red.light, theme.palette.accent.green.light, theme.palette.accent.blue.light ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: -20,
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={ isDashboard ? null : 
          {
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
        axisLeft={ isDashboard ? null :
          {
            orient: 'left',
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        enableCrosshair={true}
        crosshairType="cross"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 1,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default LineChart