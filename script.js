(function(){

    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1HE7mALl01MHvbPFmbgrJQFjH67ivNLOgNNx03eFw2no/edit?usp=sharing';

    function init() {
      Tabletop.init( { key: publicSpreadsheetUrl,
                       callback: showInfo,
                       simpleSheet: true } )
    }
    
    function showInfo(data, tabletop) {
      alert('Successfully processed!')
        // console.log(data);
        data.forEach(data => {
        console.log(data.Country_code , data.New_cases);
           
        });
        

    }
    
    window.addEventListener('DOMContentLoaded', init)

})();


