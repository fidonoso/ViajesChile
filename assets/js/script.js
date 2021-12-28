/*configuracion del smooth scroll*/
$(document).ready(function(){

    $("a").click(function(){
        var identificador=this.hash
        $("html, body").animate(
            {
                scrollTop: $(identificador).offset().top-10
            }, 800)
    })
})

// para que funcione el tooltips de bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})