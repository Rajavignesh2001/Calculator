function clr() {
  document.getElementById("result").value = "";
}
function display(val){
    document.getElementById("result").value+=val;
}
function equate(){
    x=eval(document.getElementById("result").value);
    document.getElementById("result").value=x;
}
