$(function () {
//modal init
    var modalBtn = $('[data-modal]');

    modalBtn.on('click', function (e) {

        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).bPopup({
            closeClass: 'close'
        });
    });

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
});












