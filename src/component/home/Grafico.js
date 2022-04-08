import Chart from 'react-apexcharts'

export const GraficoBack =()=>{
    return  (
        <div className='mt-5'>
            {/* grafico de barras backend */}
            <Chart type="bar" width={500} height={230}  
            series={[
              {
                name:'BackEnd',
                data:[50,60,65,50,45,60]
              }
            ]}
            options={{
              chaer:{
                type:'bar',
                height:380
                
              },
              plotOptions: {
                bar: {
                  barHeight: '100%',
                  distributed: true,
                  horizontal: true,
                  dataLabels: {
                    position: 'bottom'
                  },
                }
              },
              colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f'
            ],
            dataLabels: {
              enabled: true,
              textAnchor: 'start',
              style: {
                colors: ['#fff']
              },
              formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
              },
              offsetX: 0,
              dropShadow: {
                enabled: true
              }
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            xaxis: {
              categories: ['python','java','javaScript','pl/sql','c#','node js',
              ],
            },
            yaxis: {
              labels: {
                show: false
              }
            },
            title: {
                text: 'BackEnd',
                align: 'center',
                floating: true
            },  
            subtitle: {
              text: 'Categoria valorada del 1 al 100',
              align: 'center',
          },
             tooltip: {
              theme: 'dark',
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: function () {
                    return ''
                  }
                }
              }
            }
    
            }}
            />
        </div>
        )
}

export const GraficoFront=()=>{
    return (
        <div>
            <Chart type="bar" width={500} height={230}  
           series={[
            {
                name:'conocimientos',
                data: [40,40,70,55,60,70,40,50]
              }
          ]}
          options= {{
              
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                dropShadow: {
                  enabled: true,
                  blur: 1,
                  opacity: 0.25
                }
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                  barHeight: '60%',
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: 2,
              },
              title: {
                text: 'FrontEnd y Base de datos',
              align: 'center',

              },
              xaxis: {
                categories: ['vue3','django','bootstrap','react','SQL Oracle','MongoDB','PostgresSQL','MySQL'],
              },
              yaxis: {
                title: {
                  text: undefined
                },
              },
              tooltip: {
                shared: false,
                y: {
                  formatter: function (val) {
                    return val + "%"
                  }
                }
              },
              fill: {
                type: 'pattern',
                opacity: 1,
                pattern: {
                  style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings
              
                }
              },
              states: {
                hover: {
                  filter: 'none'
                }
              },
              legend: {
                position: 'right',
                offsetY: 40
              }
            }
            }
          
          
          
        
        />
        </div>
    )
}