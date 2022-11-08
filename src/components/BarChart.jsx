import { useTheme } from "@mui/material"
import { ResponsiveBar } from "@nivo/bar"
import { mockBarData as data } from '../data/mockData'

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme()

  return (
    <ResponsiveBar
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.neutral.main,
              }
            },
            legend: {
              text: {
                fill: theme.palette.neutral.main,
              },
            },
            ticks: {
              link: {
                stroke: theme.palette.neutral.main,
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.neutral.main,
              },
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
        keys={[
            'Hot Dog',
            'Burger',
            'Sandwich',
            'Kebab',
            'Fries',
            'Donut'
        ]}
        indexBy="Country"
        margin={ isDashboard ?
          {
            top: 0,
            right: 100,
            bottom: 45,
            left: 0
          } :
          {
            top: 50,
            right: 130,
            bottom: 50,
            left: 60
          }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={ isDashboard ? null : 
          {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Country',
            legendPosition: 'middle',
            legendOffset: 32
          }}
        axisLeft={ isDashboard ? null :
          {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Food',
            legendPosition: 'middle',
            legendOffset: -40
          }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
  )
}

export default BarChart