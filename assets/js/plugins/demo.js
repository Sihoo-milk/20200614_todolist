//択一チェックボックス

$('.checkbox').on('click', function () {
    $('.checkbox').prop('checked', false)
    $(this).prop('checked', true)
})

//チェックで切り替え
$(function () {
    $('#tab02-per')
        .css('visibility', 'hidden')
        .css('opacity', '0')
        .css('height', '0')
    $('#tab03-per')
        .css('visibility', 'hidden')
        .css('opacity', '0')
        .css('height', '0')
    $('#tab04-per')
        .css('visibility', 'hidden')
        .css('opacity', '0')
        .css('height', '0')
    $('#tab02-all')
        .css('visibility', 'hidden')
        .css('opacity', '0')
        .css('height', '0')
    $('#tab03-all')
        .css('visibility', 'hidden')
        .css('opacity', '0')
        .css('height', '0')
    $('#tab04-all')
        .css('visibility', 'hidden')
        .css('opacity', '0')
        .css('height', '0')
    $('input[name="check"]').change(function () {
        var check01 = $('#Docbase').prop('checked')
        var check02 = $('#Slack').prop('checked')
        var check03 = $('#DoStamp').prop('checked')
        var check04 = $('#Action').prop('checked')
        if (check01) {
            $('#tab-01').prop('checked', true)
            $('#tab-02').prop('checked', false)
            $('#tab01-per')
                .css('visibility', 'visible')
                .css('opacity', '1')
                .css('height', '100%')
            $('#tab02-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab03-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab04-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab01-all')
                .css('visibility', 'visible')
                .css('opacity', '1')
                .css('height', '100%')
            $('#tab02-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab03-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab04-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
        }
        if (check02) {
            $('#tab-01').prop('checked', true)
            $('#tab-02').prop('checked', false)
            $('#tab01-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab02-per')
                .css('visibility', 'visible')
                .css('opacity', '1')
                .css('height', '100%')
            $('#tab03-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab04-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab01-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab02-all')
                .css('visibility', 'visible')
                .css('opacity', '1')
                .css('height', '100%')
            $('#tab03-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab04-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
        }
        if (check03) {
            $('#tab-01').prop('checked', true)
            $('#tab-02').prop('checked', false)
            $('#tab01-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab02-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab03-per')
                .css('visibility', 'visible')
                .css('opacity', '1')
                .css('height', '100%')
            $('#tab04-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab01-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab02-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab03-all')
                .css('visibility', 'visible')
                .css('opacity', '1')
                .css('height', '100%')
            $('#tab04-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
        }
        if (check04) {
            $('#tab-01').prop('checked', true)
            $('#tab-02').prop('checked', false)
            $('#tab01-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab02-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab03-per')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab04-per')
                .css('visibility', 'visible')
                .css('opacity', '1')
                .css('height', '100%')
            $('#tab01-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab02-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab03-all')
                .css('visibility', 'hidden')
                .css('opacity', '0')
                .css('height', '0')
            $('#tab04-all')
                .css('visibility', 'visible')
                .css('opacity', '1')
                .css('height', '100%')
        }
    })
})

//線グラフ
var ctx = document.getElementById('chart-bar01')
var myBarChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [
            {
                label: 'PJの進捗',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(75,192,19,0.4)',
                borderColor: 'rgba(75,192,19,1)',
                borderWidth: 1,
      },
    ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
        },
      ],
        },
    },
})

//線グラフ
var ctx = document.getElementById('chart-bar02')
var myBarChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [
            {
                label: 'PJの進捗',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
      },
    ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
        },
      ],
        },
    },
})

//線グラフ
var ctx = document.getElementById('chart-bar03')
var myBarChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [
            {
                label: 'PJの進捗',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(75,190,10,0.4)',
                borderColor: 'rgba(75,190,10,1)',
                borderWidth: 1,
      },
    ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
        },
      ],
        },
    },
})

//線グラフ
var ctx = document.getElementById('chart-bar04')
var myBarChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [
            {
                label: 'PJの進捗',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(179,50,157,0.4)',
                borderColor: 'rgba(179,50,157,1)',
                borderWidth: 1,
      },
    ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
        },
      ],
        },
    },
})

//棒グラフ
var ctx = document.getElementById('chart-bar05')
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['入田', '入田', '二ノ宮', '入田', '入田', '入田'],
        datasets: [
            {
                label: 'PJの進捗',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
          '#ccc',
          '#ccc',
          'rgba(70,192,192,1)',
          '#ccc',
          '#ccc',
          '#ccc',
        ],
      },
    ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
        },
      ],
        },
    },
})

//棒グラフ
var ctx = document.getElementById('chart-bar06')
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['入田', '入田', '二ノ宮', '入田', '入田', '入田'],
        datasets: [
            {
                label: 'PJの進捗',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
          '#ccc',
          '#ccc',
          'rgba(70,192,192,1)',
          '#ccc',
          '#ccc',
          '#ccc',
        ],
      },
    ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
        },
      ],
        },
    },
})

//棒グラフ
var ctx = document.getElementById('chart-bar07')
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['入田', '入田', '二ノ宮', '入田', '入田', '入田'],
        datasets: [
            {
                label: 'PJの進捗',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
          '#ccc',
          '#ccc',
          'rgba(70,192,192,1)',
          '#ccc',
          '#ccc',
          '#ccc',
        ],
      },
    ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
        },
      ],
        },
    },
})

//棒グラフ
var ctx = document.getElementById('chart-bar08')
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['入田', '入田', '二ノ宮', '入田', '入田', '入田'],
        datasets: [
            {
                label: 'PJの進捗',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
          '#ccc',
          '#ccc',
          'rgba(70,192,192,1)',
          '#ccc',
          '#ccc',
          '#ccc',
        ],
      },
    ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
        },
      ],
        },
    },
})

//円グラフ PROGRESS
var ctx = document.getElementById('chart-pie01')
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#40b477', '#bdd8ca'],
                data: [70, 30],
                borderWidth: [0, 0],
      },
    ],
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
})

//円グラフ A
var ctx = document.getElementById('chart-pie02')
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#4072b4', '#a0b9da'],
                data: [80, 20],
                borderWidth: [0, 0],
      },
    ],
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
})

//円グラフ B
var ctx = document.getElementById('chart-pie03')
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#3cb6b7', '#9edbdb'],
                data: [64, 36],
                borderWidth: [0, 0],
      },
    ],
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
})

//円グラフ C
var ctx = document.getElementById('chart-pie04')
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#eea361', '#f7d1b0'],
                data: [48, 52],
                borderWidth: [0, 0],
      },
    ],
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
})

//円グラフ D
var ctx = document.getElementById('chart-pie05')
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#ff9a89', '#ffcdc4'],
                data: [32, 68],
                borderWidth: [0, 0],
      },
    ],
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
})

//円グラフ E
var ctx = document.getElementById('chart-pie06')
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#ee6161', '#ec9f9f'],
                data: [16, 84],
                borderWidth: [0, 0],
      },
    ],
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
})

//円グラフ S
var ctx = document.getElementById('chart-pie07')
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#40b477'],
                data: [100],
                borderWidth: [0],
      },
    ],
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
})

// function addText() {
//   var canvas = document.getElementById('chart-pie01')
//   var ctx = document.getElementById('chart-pie01').getContext('2d')

//   var cx = canvas.width / 2
//   var cy = canvas.height / 2

//   ctx.textAlign = 'center'
//   ctx.textBaseline = 'middle'
//   ctx.font = '14px verdana'
//   ctx.fillStyle = 'black'
//   ctx.fillText('Text Here', cx, cy)
// }
