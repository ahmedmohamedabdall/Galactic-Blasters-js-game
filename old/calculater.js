function calc() {
    var v1 = parseInt(document.querySelector("#val1").value);
    var v2 = parseInt(document.querySelector("#val2").value);
    var op = document.querySelector("#op").value;
    var calculate;
    if (op == '+') {
        
        calculate = v1 + v2;
        
    } else if ( op == '-') {
        calculate = v1 - v2;
        
    }else if ( op == '/') {
        calculate = v1 / v2;
        
    }else if ( op == '*') {
        calculate = v1 * v2;
        
    }
    else {
        document.getElementById('result').innerHTML = 'error';
    }
    document.getElementById('result').innerHTML = calculate;
}