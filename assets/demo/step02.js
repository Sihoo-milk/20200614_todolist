//折れ線グラフ
var ctx = document.getElementById("chart-line01");
var myLineChart = new Chart(ctx, {
  //グラフの種類
  type: 'line',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
      //データセット
      datasets: [{
          //凡例
          label: "お問い合わせ件数",
          //背景色
          backgroundColor: "rgba(75,192,192,0.4)",
          //枠線の色
          borderColor: "rgba(75,192,192,1)",
          //グラフのデータ
          data: [12, 19, 3, 5, 2, 3]
      }]
  },
  //オプションの設定
  options: {
      scales: {
          //縦軸の設定
          yAxes: [{
              ticks: {
                  //最小値を0にする
                  beginAtZero: true
              }
          }]
      }
  }
});

//折れ線グラフ
var ctx = document.getElementById("chart-line02");
var myLineChart = new Chart(ctx, {
  //グラフの種類
  type: 'line',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
      //データセット
      datasets: [{
          //凡例
          label: "お問い合わせ件数",
          //背景色
          backgroundColor: "rgba(75,192,192,0.4)",
          //枠線の色
          borderColor: "rgba(75,192,192,1)",
          //グラフのデータ
          data: [12, 19, 3, 5, 2, 3]
      }]
  },
  //オプションの設定
  options: {
      scales: {
          //縦軸の設定
          yAxes: [{
              ticks: {
                  //最小値を0にする
                  beginAtZero: true
              }
          }]
      }
  }
});

//折れ線グラフ
var ctx = document.getElementById("chart-line03");
var myLineChart = new Chart(ctx, {
  //グラフの種類
  type: 'line',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
      //データセット
      datasets: [{
          //凡例
          label: "お問い合わせ件数",
          //背景色
          backgroundColor: "rgba(75,192,192,0.4)",
          //枠線の色
          borderColor: "rgba(75,192,192,1)",
          //グラフのデータ
          data: [12, 19, 3, 5, 2, 3]
      }]
  },
  //オプションの設定
  options: {
      scales: {
          //縦軸の設定
          yAxes: [{
              ticks: {
                  //最小値を0にする
                  beginAtZero: true
              }
          }]
      }
  }
});

//折れ線グラフ
var ctx = document.getElementById("chart-line04");
var myLineChart = new Chart(ctx, {
  //グラフの種類
  type: 'line',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
      //データセット
      datasets: [{
          //凡例
          label: "お問い合わせ件数",
          //背景色
          backgroundColor: "rgba(75,192,192,0.4)",
          //枠線の色
          borderColor: "rgba(75,192,192,1)",
          //グラフのデータ
          data: [12, 19, 3, 5, 2, 3]
      }]
  },
  //オプションの設定
  options: {
      scales: {
          //縦軸の設定
          yAxes: [{
              ticks: {
                  //最小値を0にする
                  beginAtZero: true
              }
          }]
      }
  }
});
