function countwords() {
    var noc = document.getElementById('words').value.length;
   var now = document.getElementById('words').value;
   now = now.match( /\w+/g);
   now =now.length;
    // alert(noc);
    document.getElementById('showdata').innerHTML = "The total characters =" + noc;
    document.getElementById('showwordscount').innerHTML = "The total words =" + now;
    
}        