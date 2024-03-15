var result=document.getElementById("result");
function display(number){
    result.value+=number;

}
function calc(){
    var f_number=result.value;
    var f_result=eval(f_number);
    result.value=f_result;
}
function clrs(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}
