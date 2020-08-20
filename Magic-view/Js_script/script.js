alert("This website is only for practice purpose.")
// Main content....
function prnt(){
    alert("This will damage your device.")
    var ctnt=document.getElementById("inp").value;
    console.log(ctnt)
    document.getElementById("prnt").textContent=ctnt;
    function msg(){    
    while (true) {
        document.getElementById("prnt").textContent=ctnt;
    }};
    msg();
}