alert("This website is only for practice purpose.")
// Main content....
function prnt(){
    alert("This will damage your device.")
    var i= 0;
    var ctnt=document.getElementById("inp").value;
    console.log(ctnt)
    document.getElementById("prnt").textContent=ctnt;
    function msg(){    
    while (i<250,i++) {
        if (ctnt=== undefined){
            return document.getElementById("prnt").textContent="Enter Somthing.."
        }
        else{
        document.getElementById("prnt").textContent=ctnt;
        }
    }};
    msg();
}