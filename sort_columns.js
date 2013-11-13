// sort table columns function
$.fn.sort_columns = function( options ) {
    var settings = $.extend({      
      columnClass    : ".col1",    // column class to sort
      reverse        : false,      // reverse sort order
      date           : false
    }, options);
    
    var table = $(this);
    var columns = $('article', table).get();
    columns.sort(function(a, b) {
      if(settings.date) {
         // date sort
         var dateA = new Date($(a).find(settings.columnClass).text());
         var dateB = new Date($(b).find(settings.columnClass).text());
         var compA = dateA.getTime();
         var compB = dateB.getTime();
      } else {
         var compA = $(a).find(settings.columnClass).text(); 
         var compB = $(b).find(settings.columnClass).text(); 
      }
      return (compA < compB) ? -1 : 1;
    });
    
    // reverse
    (settings.reverse)?columns.reverse():false;
  
    $.each(columns, function(i, itm) {
      table.append(itm);
    });
}
