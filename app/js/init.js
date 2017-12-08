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
    var chartBlock = document.getElementById('myChart');
    if (chartBlock) {
        var myChart = new Chart(chartBlock, {
            type: 'bar',
            data: {
                labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
                datasets: [
                    {
                        label: 'Signups',
                        data: [100, 200, 220, 170, 130, 90, 321, 192, 234],
                        backgroundColor: 'rgba(128, 191, 202, 1)'
                    },
                    {
                        label: 'FTD',
                        data: [231, 42, 241, 322, 145, 290, 132, 152, 289],
                        backgroundColor: 'rgba(255, 154, 56, 1)'
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
});












