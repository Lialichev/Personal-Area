$(function () {

//table init
    $(window).on("load resize ", function() {
        var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
        $('.tbl-header').css({'padding-right':scrollWidth});
    }).resize();

//chart init
    var chartBlock = document.getElementById('vertical');
    if (chartBlock) {
        var myChart = new Chart(chartBlock, {
            type: 'bar',
            data: {
                labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота', 'Воскресенье'],
                datasets: [
                    {
                        label: 'Прибыль',
                        data: [100, 200, 220, 170, 130, 90, 321],
                        backgroundColor: 'rgba(60, 141, 188, 1)'
                    },
                    {
                        label: 'Расходы',
                        data: [231, 42, 241, 322, 145, 290, 132],
                        backgroundColor: 'rgba(245, 130, 32, 1)'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }
    var chartBlockPip = document.getElementById('pip');
    if (chartBlockPip) {
        var myPieChart = new Chart (chartBlockPip, {
            type: 'pie',
            data: {
                labels: ['Один', 'Два', 'Три', 'Чет', 'Пять'],
                datasets: [
                    {
                        data: [100, 200, 220, 170, 130],
                        backgroundColor: [
                            '#36a2eb',
                            '#ff6384',
                            '#ff9f40',
                            '#4bc0c0',
                            '#ffcd56'
                        ]
                    }]
            }
        })
    }
    var chartBlockLine = document.getElementById('myLineChart');
    if (chartBlockLine) {
        var myLineChart  = new Chart(chartBlockLine, {
            type: 'line',
            data: {
                labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота', 'Воскресенье'],
                datasets: [
                    {
                        label: 'Прибыль',
                        data: [100, 200, 220, 170, 130, 90, 321],
                        backgroundColor: 'rgba(60, 141, 188, 1)',
                        fill: false,
                        borderColor: 'rgba(60, 141, 188, 1)'
                    },
                    {
                        label: 'Расходы',
                        data: [231, 42, 241, 322, 145, 290, 132],
                        backgroundColor: 'rgba(245, 130, 32, 1)',
                        fill: false,
                        borderColor: 'rgba(245, 130, 32, 1)'
                    },
                    {
                        label: 'Данные',
                        data: [261, 12, 141, 12, 115, 90, 172],
                        backgroundColor: '#ff6384',
                        fill: false,
                        borderColor: '#ff6384'
                    }
                ]
            },
            options: {
                responsive: true
            }
        })
    }
    var chartBlockLineTwo = document.getElementById('myLineChartTwo');
    if (chartBlockLineTwo) {
        var myLineChartTwo  = new Chart(chartBlockLineTwo, {
            type: 'line',
            data: {
                labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота', 'Воскресенье'],
                datasets: [
                    {
                        label: 'Прибыль',
                        data: [100, 200, 220, 170, 130, 90, 321],
                        backgroundColor: 'rgba(60, 141, 188, 1)'
                    }
                ]
            },
            options: {
                responsive: true
            }
        })
    }
});












