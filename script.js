(function(){

    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1HE7mALl01MHvbPFmbgrJQFjH67ivNLOgNNx03eFw2no/edit?usp=sharing';

    function init() {
      Tabletop.init( { key: publicSpreadsheetUrl,
                       callback: showInfo,
                       simpleSheet: true } )
    }

    
    var dataArray;

    function showInfo(data, tabletop) {
      alert('Successfully processed!')
      //  console.log(data[0]);
      
       google.charts.load('current', {'packages':['corechart']});
       google.charts.setOnLoadCallback(drawChart);
      //  console.log(data[0].Date_reported);

        dataArray = new Array(data.length);
      
       
        // Loop to create 2D array using 1D array
        for (var i = 0; i < dataArray.length; i++) {
          dataArray[i] = new Array(2);
        }
          
        var h = 0;
          
        // Loop to initialize 2D array elements.
        for (var i = 0; i < dataArray.length; i++) {
            for (var j = 0; j < 2; j++) {
              
              if(i==0 && j==0)
              {
                dataArray[i][j] =  "Date_reported";
              }
              else if(i==0 && j==1)
              {
                dataArray[i][j] =  "New_cases";
              }
              else if( i>0 && j==0)
              {
                dataArray[i][j] = data[i].Date_reported;
              }
              else if( i>0 && j==1)
              {
                dataArray[i][j] = Number(data[i].New_cases);
              }
              
            }
        }

        

    }
    

    

    function drawChart() {
      var data = google.visualization.arrayToDataTable(dataArray);

      var options = {
        title: 'Pakistan Covid-19 Stats',
        curveType: 'function',
        legend: { position: 'right' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
      chart.draw(data, options);

      localStorage.setItem("key",chart.container.innerHTML);
      console.log(chart);

    }

    //assigning local storage
    var chart = document.getElementById("curve_chart");
    chart.innerHTML =localStorage.getItem("key");
    


    
    
    window.addEventListener('DOMContentLoaded', init)

})();


