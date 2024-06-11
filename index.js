function calculateResult(){

    if(!document.getElementById('distance').value){
        alert("กรุณากรอกข้อมูลระยะทาง");
    }
    var distance = document.getElementById('distance').value;
    distance = parseFloat(distance);

    var time;
    if(!document.getElementById('time').value){
        time = 0;
    }else{
        time = document.getElementById('time').value;
        time = parseFloat(time);
    }

    var total;
    if (distance <= 1) {
        total = 35;
    } 
    else if (distance <= 10) {
        total = 35 + (distance - 1) * 6.50;
    } 
    else if (distance <= 20) {
        total = 35 + (9 * 6.50) + (distance - 10) * 7;
    } 
    else if (distance <= 40) {
        total = 35 + (9 * 6.50) + (10 * 7) + (distance - 20) * 8;
    } 
    else if (distance <= 60) {
        total = 35 + (9 * 6.50) + (10 * 7) + (20 * 8) + (distance - 40) * 8.50;
    } 
    else if (distance <= 80) {
        total = 35 + (9 * 6.50) + (10 * 7) + (20 * 8) + (20 * 8.50) + (distance - 60) * 9;
    } 
    else {
        total = 35 + (9 * 6.50) + (10 * 7) + (20 * 8) + (20 * 8.50) + (20 * 9) + (distance - 80) * 10.50;
    }

    total = total + (time*3);
    total = Math.ceil(total);

    var result = document.getElementById('result');
    result.innerHTML = total + ' บาท';
    
}