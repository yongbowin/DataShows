<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
	<!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<title>Home</title>
		<meta name="description" content="">
		<meta name="author" content="">
		<!-- Mobile Meta -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Favicon -->
		<link href="/resources/bootstrap/css/bootstrap.css" rel="stylesheet">
		<link href="/resources/fonts/font-awesome/css/font-awesome.css" rel="stylesheet">
		<link href="/resources/css/animations.css" rel="stylesheet">
		<link href="/resources/css/content1.0.css" rel="stylesheet">
		<script type="text/javascript" src="/resources/plugins/jquery.min.js"></script>
		<script type="text/javascript" src="/resources/js/times.js"></script>

	</head>

	<body ng-app="myApp" ng-controller="customersCtrl">
		<!-- banner start -->
		<div class="banner-caption clearfix">
			<div id="title">
				<div class="caption-title clearfix">
					<i class="title-left"><img src="/resources/images/title-left.png" ></i>
					<p class="title-left-title-font">深圳先进院综合档案系统</p>
					<i class="title-left"><img src="/resources/images/title-right.png" ></i>
				</div>
				<div class="title-date" style="height: 40px;">
					<p id="DateTime" style="height: 40px;text-align: center;">实时数据</p>
				</div>
			</div>
			<div id="main">
				<div class="col-md-12">
					<div class="row">
						<div id="title01" class="col-xs-12 col-sm-12 col-md-3">
							<div class="data-box1 clearfix" id="box01">
								<i class="topL"></i>
								<i class="topR"></i>
								<i class="bottomL"></i>
								<i class="bottomR"></i>
								<div class="data-title">
									<b class="data-title-left">[</b>
									<span>科研项目档案</span>
									<b class="data-title-right">]</b>
								</div>
								<div class="total-mn" id="total-mn1">
									<span>概览</span>
									<!--<span class="live-box-font1"><span style="font-size: 2rem;">549462</span> 万元</span>-->
								</div>
								<div id="box1_top">
									<div id="box2" class="box-echart box-bottom">
									</div>
								</div>
								<div class="total-mn" id="total-mn2">
									<span>各所部项目档案占比</span>
									<!--<span class="live-box-font1"><span style="font-size: 2rem;">549462</span> 万元</span>-->
								</div>
								<div id="box1_bottom">
									<div id="box4" class="box-echart">
									</div>
								</div>
								<%--<ul class="live-box" id="live-box">
									<li style="margin-right: 2%;">
										<p>年数量</p>
										<p class="live-box-font1"><span style="font-size: 2rem;">5462</span> 份</p>
									</li>
									<li>
										<p>年存档</p>
										<p class="live-box-font1"><span style="font-size: 2rem;">80%</span></p>
									</li>
								</ul>--%>
							</div>
							<%--<div class="data-box1" id="box8-box" style="margin-top: 30px;">
								<i class="topL"></i>
								<i class="topR"></i>
								<i class="bottomL"></i>
								<i class="bottomR"></i>
								<div class="data-title">
									<b class="data-title-left">[</b>
									<span>档案数量对比</span>
									<b class="data-title-right">]</b>
								</div>
								<div id="box8" class="box-echart">
								</div>
							</div>--%>
						</div>
						<div id="title02" class="col-xs-12 col-sm-12 col-md-6 panel-top panel-bottom">
							<div class="data-box1 box1-back" id="box02">
								<i class="topL"></i>
								<i class="topR"></i>
								<i class="bottomL"></i>
								<i class="bottomR"></i>
								<div class="data-title">
									<b class="data-title-left">[</b>
									<span>合作机构分布</span>
									<b class="data-title-right">]</b>
								</div>
								<ul class="data-box1-data clearfix">
									<p class="data-box1-font1">目前档案总数量为</p>
									<li class="data-box1-panel">19461</li>
									<li class="data-box1-font1" style="padding-top: 1rem;">份</li>
								</ul>
								<%--<div class="total-mn">
									<span>近一年档案数量</span>
									<span class="live-box-font1"><span style="font-size: 2.2rem;">5149</span> 份</span>
								</div>--%>
								<%--檔案分佈地圖--%>
								<%--<div id="box1" class="box-echart-china">
								</div>--%>
								<%--檔案統計--%>
								<div id="box5" class="box-echart-china">
								</div>
							</div>

							<div class="data-box1" id="box9-box" style="margin-top: 30px;">
								<i class="topL"></i>
								<i class="topR"></i>
								<i class="bottomL"></i>
								<i class="bottomR"></i>
								<div class="data-title" style="width: 227px">
									<b class="data-title-left">[</b>
									<span>项目数据分析-列表</span>
									<b class="data-title-right">]</b>
								</div>
								<div id="box9" class="box9-1">
									<table class="panel-table">
										<thead>
											<tr>
												<th ng-repeat="x in listHead">{{ x.categories }}</th>
											</tr>
										</thead>
										<tbody>
											<tr ng-repeat="y in listContent">
												<td>{{ y.categories }}</td>
												<td>{{ y.data1 }}</td>
												<td>{{ y.data2 }}</td>
												<td>{{ y.data3 }}</td>
												<td>{{ y.data4 }}</td>
												<td>{{ y.data5 }}</td>
												<td>{{ y.data6 }}</td>
												<td>{{ y.data7 }}</td>
												<td>{{ y.data8 }}</td>
												<td>{{ y.data9 }}</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="box9-2">
									<table class="panel-table">
										<thead>
											<tr>
												<th width="50%">资产端</th>
												<td>前隆</td>
											</tr>
										</thead>
										<tbody>
											<tr ng-repeat="z in listData1">
												<th>{{ z.categories }}</th>
												<td>{{ z.data1 }}</td>
											</tr>
										</tbody>
									</table>
									<table class="panel-table">
										<thead>
											<tr>
												<th width="50%">资产端</th>
												<td>用钱宝</td>
											</tr>
										</thead>
										<tbody>
											<tr ng-repeat="q in listData1">
												<th>{{ q.categories }}</th>
												<td>{{ q.data2 }}</td>
											</tr>
										</tbody>
									</table>
									<table class="panel-table">
										<thead>
											<tr>
												<th width="50%">资产端</th>
												<td>闪银奇异</td>
											</tr>
										</thead>
										<tbody>
											<tr ng-repeat="w in listData1">
												<th>{{ w.categories }}</th>
												<td>{{ w.data3 }}</td>
											</tr>

										</tbody>
									</table>
									<table class="panel-table">
										<thead>
											<tr>
												<th width="50%">资产端</th>
												<td>借贷宝</td>
											</tr>
										</thead>
										<tbody>
											<tr ng-repeat="e in listData1">
												<th>{{ e.categories }}</th>
												<td>{{ e.data4 }}</td>
											</tr>

										</tbody>
									</table>
									<table class="panel-table">
										<thead>
											<tr>
												<th width="50%">资产端</th>
												<td>蚂蚁借呗</td>
											</tr>
										</thead>
										<tbody>
											<tr ng-repeat="t in listData1">
												<th>{{ t.categories }}</th>
												<td>{{ t.data5 }}</td>
											</tr>

										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div id="title03" class="col-xs-12 col-sm-12 col-md-3">
							<div class="data-box1" id="box03">
								<i class="topL"></i>
								<i class="topR"></i>
								<i class="bottomL"></i>
								<i class="bottomR"></i>
								<div class="data-title" style="width: 238px">
									<b class="data-title-left">[</b>
									<span>各所部项目档案占比</span>
									<b class="data-title-right">]</b>
								</div>

								<ul class="ym-menu clearfix" id="ym-menu">
									<li class="ym-active">
										<a href="">近一年</a>
									</li>
									<li class="taba">
										<a href="">去年</a>
									</li>
								</ul>

								<div id="box3" class="box-echart tabcontent">
								</div>
								<div id="boxes3" class="box-echart tabcontent" style="display: none;">
								</div>
							</div>
							<div class="data-box1" id="box04" style="margin-top: 30px;">
								<i class="topL"></i>
								<i class="topR"></i>
								<i class="bottomL"></i>
								<i class="bottomR"></i>
								<div class="data-title" style="width: 238px">
									<b class="data-title-left">[</b>
									<span>&nbsp;各类档案-数量统计&nbsp;</span>
									<b class="data-title-right">]</b>
								</div>
								<%--<div class="total-mn">
									<span>占比</span>
								</div>--%>
								<%--檔案統計--%>
								<%--<div id="box5" class="box-echart">
								</div>--%>
								<%--檔案分佈地圖--%>
								<div id="box1" class="box-echart">
								</div>
							</div>

						</div>
					</div>
					<!--asad-->
				</div>
			</div>

		</div>
		</div>
		<!-- JavaScript -->
		<script type="text/javascript" src="/resources/bootstrap/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="/resources/js/echarts.min.js"></script>
		<script type="text/javascript" src="/resources/js/china.js"></script>
		<script type="text/javascript" src="/resources/js/angular.min.js"></script>
		<script type="text/javascript" src="/resources/js/mycharts.js"></script>
		<script>
			$(document).ready(function() {
				$('.ym-menu li').click(function() {
					var index = $(this).index();
					$(this).attr('class', "ym-active").siblings('li').attr('class', 'taba');
					$('.tabcontent').eq(index).show(200).siblings('.tabcontent').hide();
				});
				var t = 0;
				var timer = setInterval(function() {
					if(t == $('.ym-menu li').length) t = 0;
					$('.ym-menu li:eq(' + t + ')').click();
					t++;
				}, 3000)
			})
		</script>
	</body>

</html>