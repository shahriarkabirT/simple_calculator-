let resultflag = 0;
function appendToDisplay(value){
    if(resultflag == 0){
        document.getElementById('display').value += value;
    }
    else{
        resultflag = 0;
        document.getElementById('display').value = '';
        document.getElementById('display').value += value;
    }

}

function clearDisplay() {
    document.getElementById('display').value = '';
}

    function calculate() {
        resultflag = 1;
        try{
            var result = eval(document.getElementById('display').value);
            if(result != 'Infinity'){
                document.getElementById('display').value = result;
            }
            else if(result == 'Infinity'){
                document.getElementById('display').value = 'undefined';
            }
        console.log(result);
         }
        catch(e){
            document.getElementById('display').value = "Error";
        }
    }


function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1); 
}
