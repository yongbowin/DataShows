if($(window).width() > 991) {
	var total = window.innerHeight;
	document.getElementById("title").style.height = total * 0.1 + "px";
	document.getElementById("main").style.height = total * 0.9 + "px";
	title = document.getElementById("title");
	main = document.getElementById("main");

	box02 = document.getElementById("box02");
	box03 = document.getElementById("box03");
	box04 = document.getElementById("box04");
	title_h = title.offsetHeight;
	main_h = main.offsetHeight;

	box02_h = box02.offsetHeight;
	box03_h = box03.offsetHeight;
	box04_h = box04.offsetHeight;
	document.getElementById("box01").style.height = main_h * 0.99 + "px";
	// document.getElementById("box8-box").style.height = main_h * 0.3 + "px";
	box02.style.height = main_h * 0.62 + "px";
	document.getElementById("box9-box").style.height = main_h * 0.3 + "px";
	box03.style.height = main_h * 0.475 + "px";
	box04.style.height = main_h * 0.475 + "px";
	box01 = document.getElementById("box01");
	box01_h = box01.offsetHeight;
	document.getElementById("total-mn1").style.height = box01_h * 0.02 + "px";
	document.getElementById("total-mn2").style.height = box01_h * 0.02 + "px";
	// document.getElementById("live-box").style.height = box01_h * 0.05 + "px";
	document.getElementById("ym-menu").style.height = box03_h * 0.1 + "px";
};
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
	$http({
		method: 'get',
		url: '/resources/data/da.json'
	}).then(function(res) {
		$scope.listHead = res.data.listHead; //数据列表-头
		$scope.listContent = res.data.listContent; //数据列表
		$scope.listData1 = res.data.listData1; //数据列表
		//日均额					
		var worldMapContainer2 = document.getElementById('box2');
		var box01 = document.getElementById("box01");
		var box01_h = box01.offsetHeight;
		var box01_w = box01.offsetWidth;
		//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		var resizeWorldMapContainer2 = function() {
			worldMapContainer2.style.width = box01_w * 0.96 + 'px';
			worldMapContainer2.style.height = box01_h * 0.46 + 'px';
		};
		//设置容器高宽
		resizeWorldMapContainer2();
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(worldMapContainer2);
		var option = {
			color: ['#38b3f1'],
			// tooltip: {
			// 	trigger: 'axis',
			// 	axisPointer: { // 坐标轴指示器，坐标轴触发有效
			// 		type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			// 	}
			// },
			textStyle: {
				color: '#ccc'
			},
			grid: {
				top: '10%',
				left: '3%',
				right: '3%',
				bottom: '13%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: res.data.titleList,
				axisTick: {
					alignWithLabel: true
				},
                //设置字体倾斜
                axisLabel:{
                    interval:0,
                    rotate:45,//倾斜度 -90 至 90 默认为0
                    margin:12
                }
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
				name: '直接访问',
				type: 'bar',
				barWidth: '60%',
				data: res.data.dataList
			}]
		};
		myChart.setOption(option);

		//用于使chart自适应高度和宽度
		window.onresize = function() {
			//重置容器高宽
			resizeWorldMapContainer2();
			myChart.resize();
		};
		
		//资产在贷余额					
		var worldMapContainer4 = document.getElementById('box4');
		//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		var resizeWorldMapContainer4 = function() {
			worldMapContainer4.style.width = box01_w * 0.96 + 'px';
			worldMapContainer4.style.height = box01_h * 0.42 + 'px';
		};
		//设置容器高宽
		resizeWorldMapContainer4();
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(worldMapContainer4);

        // var data = [
        // 	{value: 111,name: '数字所'},
        // 	{value: 18,name: '技术平台'},
        // 	{value: 6,name: '电动车研发中心'},
        // 	{value: 6,name: '工程中心'},
        // 	{value: 8,name: '脑所'},
        // 	{value: 29,name: '其他'},
        // 	{value: 39,name: '医药所'},
        // 	{value: 232,name: '集成所'},
        // 	{value: 191,name: '医工所'},
        // ];
        // option = {
        //     title: {
        //         text: '注册资金',
        //         subtext: '2016年',
        //         x: 'center',
        //         y: 'center',
        //         textStyle: {
        //             fontWeight: 'normal',
        //             fontSize: 16
        //         }
        //     },
        //     tooltip: {
        //         show: false,
        //         trigger: 'item',
        //         formatter: "{b}: {c} ({d}%)"
        //     },
        //     legend: {
        //         orient: 'horizontal',
        //         bottom: '0%',
        //         data: ['数字所', '技术平台', '电动车研发中心', '工程中心', '脑所', '其他', '医药所', '集成所', '医工所']
        //     },
        //     series: [{
        //         type: 'pie',
        //         selectedMode: 'single',
        //         radius: ['25%', '58%'],
        //         color: [
        //             '#2CEDED',
        //             '#7049F0',
        //             '#B347FF',
        //             '#E70E65',
        //             '#FF714A',
        //             '#F6B768',
        //             '#B0DF5D',
        //             '#FC7DBC',
        //             '#0A9FFD'
        //         ],
        //
        //         label: {
        //             normal: {
        //                 position: 'inner',
        //                 formatter: '{d}%',
        //
        //                 textStyle: {
        //                     color: '#fff',
        //                     fontWeight: 'bold',
        //                     fontSize: 14
        //                 }
        //             }
        //         },
        //         labelLine: {
        //             normal: {
        //                 show: false
        //             }
        //         },
        //         data: data
        //     }]
        // };

		// 指定图表的配置项和数据(左側餅狀圖)
        var dataName = ['数字所', '技术平台', '电动车研发中心', '工程中心', '脑所', '其他', '医药所', '集成所', '医工所'];
        var dataName2 = ['数字所', '技术平台', '电动车研发中心', '工程中心', '脑所', '其他', '医药所', '集成所', '医工所'];
        var value = [111, 18, 6, 6, 8, 29, 39, 232, 191]
        var dataarr = []
        var max = value[0];
        var dataarr2 = []
        value.forEach(function(ele,index){
            if(ele>max) {
                max = ele;
            }
            dataarr.push({
                value:ele,
                name:dataName[index]
            })
            dataarr2.push({
                value:ele,
                name:dataName2[index]
            })
        })


        var option = {
            // backgroundColor: '#424956',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",

            },
            legend: {

                // orient: 'vertical',
                orient:'horizontal',
                y: 'bottom',
                itemWidth: 24,
                itemGap:15,
                itemHeight: 14,
                align: 'left',

                data: dataName,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                center: ['45%','45%'],
                radius: ['30%', '55%'],
                color: [
                    '#2CEDED',
                    '#7049F0',
                    '#B347FF',
                    '#E70E65',
                    '#FF714A',
                    '#F6B768',
                    '#B0DF5D',
                    '#FC7DBC',
                    '#0A9FFD'
                ],
                label: {
                    normal: {
                        formatter: '{b}\n{d}%',
                        fontSize: 16
                    },

                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 10,
                        length2: 24
                    }
                },
                data: dataarr
            },{
                name: '访问来源',
                type: 'pie',
                center: ['45%','45%'],
                radius: ['30%', '65%'],
                color: [
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'rgba(252,125,188,0.5)',
                    'transparent'
                ],
                label: {
                    normal: {
                        show: false
                    },

                },
                labelLine: {
                    normal: {
                        show: false,
                    }
                },
                data: dataarr2,
                zlevel:2
            }]
        };

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);

		//用于使chart自适应高度和宽度
		window.onresize = function() {
			//重置容器高宽
			resizeWorldMapContainer4();
			myChart.resize();
		};
		//					所贷金额用途
		// var worldMapContainer8 = document.getElementById('box8');
		// box8_box = document.getElementById("box8-box");
		// box8_box_h = box8_box.offsetHeight;
		// box8_box_w = box8_box.offsetWidth;
		// //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		// var resizeWorldMapContainer8 = function() {
		// 	worldMapContainer8.style.width = box8_box_w * 0.96 + 'px';
		// 	worldMapContainer8.style.height = box8_box_h * 0.87 + 'px';
		// };
		// //设置容器高宽
		// resizeWorldMapContainer8();
		// // 基于准备好的dom，初始化echarts实例
		// var myChart = echarts.init(worldMapContainer8);
		// // 指定图表的配置项和数据
		// var option = {
        //
		// 	tooltip: {
		// 		trigger: 'item',
		// 		formatter: "{a} <br/>{b} : {c}%"
		// 	},
        //
		// 	legend: {
		// 		data: res.data.titleList6,
		// 		x: 'center',
		// 		y: 'bottom',
		// 		textStyle: {
		// 			color: '#ccc'
		// 		}
		// 	},
		// 	calculable: true,
		// 	series: [{
		// 		name: '所贷金额用途',
		// 		type: 'funnel',
		// 		left: '10%',
		// 		top: '5%',
		// 		//x2: 80,
		// 		bottom: '17%',
		// 		width: '80%',
		// 		// height: {totalHeight} - y - y2,
		// 		min: 0,
		// 		max: 100,
		// 		minSize: '0%',
		// 		maxSize: '100%',
		// 		sort: 'descending',
		// 		gap: 2,
		// 		label: {
		// 			normal: {
		// 				show: true,
		// 				position: 'inside'
		// 			},
		// 			emphasis: {
		// 				textStyle: {
		// 					fontSize: 24
		// 				}
		// 			}
		// 		},
		// 		labelLine: {
		// 			normal: {
		// 				length: 10,
		// 				lineStyle: {
		// 					width: 1,
		// 					type: 'solid'
		// 				}
		// 			}
		// 		},
		// 		itemStyle: {
		// 			normal: {
		// 				borderColor: '#ccc',
		// 				borderWidth: 1
		// 			}
		// 		},
		// 		color: ['#c7353a', '#f5b91e', '#2455d0', '#ff7d4e', '#049cfa'],
		// 		data: function() {
		// 			var serie = [];
		// 			for(var i = 0; i < res.data.titleList6.length; i++) {
		// 				var item = {
		// 					name: res.data.titleList6[i],
		// 					value: res.data.dataList6[i]
		// 				};
		// 				serie.push(item);
		// 			}
		// 			return serie;
		// 		}()
        //
		// 	}]
		// };
        //
		// // 使用刚指定的配置项和数据显示图表。
		// myChart.setOption(option);

		//用于使chart自适应高度和宽度
		window.onresize = function() {
			//重置容器高宽
			resizeWorldMapContainer8();
			myChart.resize();
		};
		//					资产占比和资金占比--1
		var worldMapContainer = document.getElementById('box3');
		box03 = document.getElementById("box03");
		box03_h = box03.offsetHeight;
		box03_w = box04.offsetWidth;
		//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		var resizeWorldMapContainer = function() {
			worldMapContainer.style.width = box03_w * 1 + 'px';
			worldMapContainer.style.height = box03_h * 0.8 + 'px';
		};
		//设置容器高宽
		resizeWorldMapContainer();
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(worldMapContainer);

		// 指定图表的配置项和数据
		/*var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			grid: {
				height: '40%',
				y: '5%',
				x: '14%'
			},
			legend: {
				x: 'center',
				y: 'bottom',
				textStyle: {
					color: '#ccc'
				},
				data: res.data.legendList3
			},
			series: [{
					color: ['#7627cb', '#259fd2', '#e26021', '#c7353a', '#f5b91e'],
					name: '资金占比',
					type: 'pie',
					selectedMode: 'single',
					radius: '40%',
					center: ['50%', '40%'],

					label: {
						normal: {
							position: 'inner'
						}
					},
					labelLine: {
						normal: {
							show: true
						}
					},
					data: function() {
						var serie = [];
						for(var i = 0; i < res.data.titleList4.length; i++) {
							var item = {
								name: res.data.titleList4[i],
								value: res.data.dataList4[i]
							};
							serie.push(item);
						}
						return serie;
					}()

				},
				{
					name: '资产占比',
					type: 'pie',
					center: ['50%', '40%'],
					radius: ['50%', '65%'],
					color: ['#d9a503', '#2551bb', '#81b740', '#da70d6', '#ff7f50'],
					data: function() {
						var serie = [];
						for(var i = 0; i < res.data.titleList3.length; i++) {
							var item = {
								name: res.data.titleList3[i],
								value: res.data.dataList3[i]
							};
							serie.push(item);
						}
						return serie;
					}()

				}
			]
		};*/

		// 2010年項目檔案數據
        var option = {
            color: [
                "#FF6868","#FFCC68","#BEFF68","#68FFC2","#68CBFF","#6896FF","#8368FF","#CB68FF","#FB6888",
                "#FF9D68","#FFF668","#69FF68","#68FBFF","#68BCFF","#6873FF","#A368FF","#FB68FF","#FF6BB5",
            ],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    color: '#ccc'
                },
                data:['电动车研发中心','集成所','技术平台','科研处','脑所','数字所','医工所','医药所']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
					center: ['50%', '40%'],
                    radius: ['50%', '65%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:1, name:'电动车研发中心'},
                        {value:38, name:'集成所'},
                        {value:5, name:'技术平台'},
                        {value:1, name:'科研处'},
                        {value:2, name:'脑所'},
                        {value:8, name:'数字所'},
                        {value:42, name:'医工所'},
                        {value:5, name:'医药所'}
                    ]
                }
            ]
        };

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);

		//用于使chart自适应高度和宽度
		window.onresize = function() {
			//重置容器高宽
			resizeWorldMapContainer();
			myChart.resize();
		};
		//					资产占比和资金占比---2
		var worldMapContainer = document.getElementById('boxes3');
		box03 = document.getElementById("box03");
		box03_h = box03.offsetHeight;
		box03_w = box04.offsetWidth;
		//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		var resizeWorldMapContainer = function() {
			worldMapContainer.style.width = box03_w * 1 + 'px';
			worldMapContainer.style.height = box03_h * 0.8 + 'px';
		};
		//设置容器高宽
		resizeWorldMapContainer();
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(worldMapContainer);

		// 指定图表的配置项和数据
		/*var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			grid: {
				height: '40%',
				y: '5%',
				x: '14%'
			},
			legend: {
				x: 'center',
				y: 'bottom',
				textStyle: {
					color: '#ccc'
				},
				data: res.data.legendList3
			},
			series: [{
					color: ['#7627cb', '#259fd2', '#e26021', '#c7353a', '#f5b91e'],
					name: '资金占比',
					type: 'pie',
					selectedMode: 'single',
					radius: '40%',
					center: ['50%', '40%'],

					label: {
						normal: {
							position: 'inner'
						}
					},
					labelLine: {
						normal: {
							show: true
						}
					},
					data: function() {
						var serie = [];
						for(var i = 0; i < res.data.titleList4.length; i++) {
							var item = {
								name: res.data.titleList4[i],
								value: res.data.dataList42[i]
							};
							serie.push(item);
						}
						return serie;
					}()

				},
				{
					name: '资产占比',
					type: 'pie',
					center: ['50%', '40%'],
					radius: ['50%', '65%'],
					color: ['#d9a503', '#2551bb', '#81b740', '#da70d6', '#ff7f50'],
					data: function() {
						var serie = [];
						for(var i = 0; i < res.data.titleList3.length; i++) {
							var item = {
								name: res.data.titleList3[i],
								value: res.data.dataList32[i]
							};
							serie.push(item);
						}
						return serie;
					}()

				}
			]
		};*/

        // 2011年項目檔案數據
        var option = {
            color: [
                "#FF6868","#FFCC68","#BEFF68","#68FFC2","#68CBFF","#6896FF","#8368FF","#CB68FF","#FB6888",
                "#FF9D68","#FFF668","#69FF68","#68FBFF","#68BCFF","#6873FF","#A368FF","#FB68FF","#FF6BB5",
            ],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    color: '#ccc'
                },
                data:['工程中心','集成所','技术平台','可视计算研究中心','脑所','汽车电子研究中心','数字所','医工所','医药所','育成中心']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    center: ['50%', '40%'],
                    radius: ['50%', '65%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:3, name:'工程中心'},
                        {value:50, name:'集成所'},
                        {value:5, name:'技术平台'},
                        {value:1, name:'可视计算研究中心'},
                        {value:2, name:'脑所'},
                        {value:1, name:'汽车电子研究中心'},
                        {value:31, name:'数字所'},
                        {value:48, name:'医工所'},
                        {value:10, name:'医药所'},
                        {value:1, name:'育成中心'}
                    ]
                }
            ]
        };

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);

		//用于使chart自适应高度和宽度
		window.onresize = function() {
			//重置容器高宽
			resizeWorldMapContainer();
			myChart.resize();
		};
		//              计划放款与累计放款
		var worldMapContainer5 = document.getElementById('box5');
		box04 = document.getElementById("box04");
		box04_h = box04.offsetHeight;
		box04_w = box04.offsetWidth;
		//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		var resizeWorldMapContainer5 = function() {
			worldMapContainer5.style.width = box04_w * 0.96 + 'px';
			worldMapContainer5.style.height = box04_h * 0.96 + 'px';
		};
		//设置容器高宽
		resizeWorldMapContainer5();
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(worldMapContainer5);

		// 指定图表的配置项和数据
		// 右下角、橫向、柱狀圖
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: null // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: '<div style="text-align: center;">各所档案数量统计</div>{b} : {c}'
            },
            grid: {
                top: '10%',
                left: '3%',
                right: '3%',
                bottom: '6%',
                containLabel: true
            },
            xAxis: [{
                type: 'value',
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                splitLine: {           // 分隔线
                    show: true,        // 默认显示，属性show控制显示与否
                    // onGap: null,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: ['#ccc'],
                        width: 1,
                        type: 'solid'
                    }
                },
                //保留网格区域
                // splitArea : {
                // 	show : true,
					// color: '#fff'
                // }

            }],
            yAxis: [{
                type: 'category',
                boundaryGap: true,
                axisTick: {
                    show: true
                },
                axisLabel: {
                    interval: null,
                    show: true,
                    textStyle: {
                        color: '#83c7e3',
                        fontSize: 12,
                    },
                },
                data: res.data.titleList5,
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '流量',
                type: 'bar',
                barWidth: 25,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#38b5f4'
                    }
                },
                itemStyle:{
                    normal: {
                        // color: '#e68b55'
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            var colorList = [
                                '#e68b55','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                '#38b5f4','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex];
                        }
                    }
                },
                data: res.data.dataList5,
            }]
        };

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);

		//用于使chart自适应高度和宽度
		window.onresize = function() {
			//重置容器高宽
			resizeWorldMapContainer5();
			myChart.resize();
		};
		//              业务数据分布
		var worldMapContainer1 = document.getElementById('box1');
		box02 = document.getElementById("box02");
		box02_h = box02.offsetHeight;
		box02_w = box02.offsetWidth;
		//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		var resizeWorldMapContainer1 = function() {
			worldMapContainer1.style.width = box02_w * 0.9 + 'px';
			worldMapContainer1.style.height = box02_h * 0.82 + 'px';
		};
		//设置容器高宽
		resizeWorldMapContainer1();
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(worldMapContainer1);
		// 指定图表的配置项和数据
		function randomData() {
			return Math.round(Math.random() * 3000);
		}
		var option = {
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				y: 'bottom',
				data: [
					'数据1',
					'数据2',
					'数据3'
				],
				textStyle: {
					color: '#ccc'
				}
			},
			visualMap: {
				min: 0,
				max: 2500,
				left: 'right',
				top: 'bottom',
				// text: ['高', '低'], // 文本，默认为数值文本
				calculable: true,
				//		color: ['#26cfe4', '#f2b600', '#ec5845'],
				textStyle: {
					color: '#fff'
				}
			},
			series: [{
					name: '数据1',
					type: 'map',
					aspectScale: 0.75,
					zoom: 1.2,
					mapType: 'china',
					roam: false,
					label: {
						normal: {
							show: false
						},
						emphasis: {
							show: false
						}
					},
					data: function() {
						var serie = [];
						for(var i = 0; i < res.data.titleList7.length; i++) {
							var item = {
								name: res.data.titleList7[i],
								value: randomData()
							};
							serie.push(item);
						}
						return serie;
					}()

				},
				{
					name: '数据2',
					type: 'map',
					mapType: 'china',
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: true
						}
					},
					data: function() {
						var serie = [];
						for(var i = 0; i < res.data.titleList8.length; i++) {
							var item = {
								name: res.data.titleList8[i],
								value: randomData()
							};
							serie.push(item);
						}
						return serie;
					}()

				},
				{
					name: '数据3',
					type: 'map',
					mapType: 'china',
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: true
						}
					},
					data: function() {
						var serie = [];
						for(var i = 0; i < res.data.titleList9.length; i++) {
							var item = {
								name: res.data.titleList9[i],
								value: randomData()
							};
							serie.push(item);
						}
						return serie;
					}()

				}
			]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);

		//用于使chart自适应高度和宽度
		window.onresize = function() {
			//重置容器高宽
			resizeWorldMapContainer1();
			myChart.resize();
		};
	});
});