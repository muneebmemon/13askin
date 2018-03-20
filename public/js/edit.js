 
 var modal = document.getElementById('myModal');

 // Get the button that opens the modal
 var btn = document.getElementsByClassName("btn btn-info btn-lg");
 
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
 
  // When the user clicks on the button, open the modal 
  btn.onclick = function() {
      modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
 modal.style.display = "none";
 }
 
  // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
 if (event.target == modal) {
    modal.style.display = "none";
     }
  }

  var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn btn-info btn-lg");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on the button, open the modal 
 btn.onclick = function() {
     modal.style.display = "block";
 }
 // When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

 // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
   modal.style.display = "none";
    }
 }
 var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));

 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 var DOMURL = self.URL || self.webkitURL || self;
 var img = new Image();
 var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
 var url = DOMURL.createObjectURL(svg);
 img.onload = function() {
     ctx.drawImage(img, 0, 0);
     var png = canvas.toDataURL("image/png");
     document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';
     DOMURL.revokeObjectURL(png);
 };
 img.src = url;
 
 

 $( "#color2" ).change(function() {
    alert( "Handler for .change() called." );
  });
       