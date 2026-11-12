$(document).ready(function(){                   
$(".navbar a, footer a[href='#myPage']").on('click', function(event) {
if (this.hash !== "") {                        
event.preventDefault();                 
var hash = this.hash;               
// Smooth scroll animation to the target section
$('html, body').animate({
scrollTop: $(hash).offset().top            
}, 900, function(){                         
window.location.hash = hash;                
});
}
});
});