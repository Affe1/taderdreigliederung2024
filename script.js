
let sel = document.getElementById('slct');
let down = document.getElementById('down');
sel.addEventListener ("change", function () {

    if(this.value == "englisch")
    {
        down.href ='plakat(eng).pdf'
        down.download ='poster.pdf'
    }
    if(this.value == "deutsch")
    {
        down.href ='plakat.pdf'
        down.download ='plakat.pdf'
    }
    if(this.value == "russisch")
    {
        down.href ='plakat(rus).pdf'
        down.download ='плакат.pdf'
    }
      if(this.value == "französisch")
    {
        down.href ='plakat(fr).pdf'
        down.download ='affiche.pdf'
    }
 
});