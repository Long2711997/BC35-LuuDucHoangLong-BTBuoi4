var btn_sort = document.getElementById('sort');
btn_sort.onclick = function() {
    // Get data 
    var a = document.getElementById('n1').value * 1;
    var b = document.getElementById('n2').value * 1;
    var c = document.getElementById('n3').value * 1;

    //Handel data
    if ( a > b && b > c && a > c) {
        // Print out result
        document.getElementById('sort-result').innerHTML = c + ' <' + b + ' <' + a;
    } else if ( a > b && c > b && a > c) {
        document.getElementById('sort-result').innerHTML = b + ' <' + c + ' <' + a;
    } else if ( a > b && c > a && c > b) {
        document.getElementById('sort-result').innerHTML = b + ' <' + a + ' <' + c;
    } else if ( b > a && b > c && a > c) {
        document.getElementById('sort-result').innerHTML = c + ' <' + a + ' <' + b;
    } else if ( b > c && c > a && b > a) {
        document.getElementById('sort-result').innerHTML = a + ' <' + c + ' <' + b;
    } else {
        document.getElementById('sort-result').innerHTML = a + ' <' + b + ' <' + c;
    }
}

var btn_greet = document.getElementById('greet');
btn_greet.onclick = function() {
    // Get data
    var d = document.getElementById('fam').value*1;
    
    switch (d){
        // Handle data
    case 1: 
        // Print out
        document.getElementById('result2').innerHTML = 'Hello MOM';
        break;
    case 2: 
        document.getElementById('result2').innerHTML = 'Hello DAD';
        break;
    case 3: 
        document.getElementById('result2').innerHTML = 'Hello BIG BRO';
        break;
    case 4: 
        document.getElementById('result2').innerHTML = 'Hello LIL SIS';
        break;   
    }
}

var btn_count = document.getElementById('count');
btn_count.onclick = function() {
    // Get data
    var a = document.getElementById('a').value*1;
    var b = document.getElementById('b').value*1;
    var c = document.getElementById('c').value*1;
    var count = 0;
    var le = 0;

    // Handle data:
        // Validate even numbers
    if ( a % 2 == 0) {
        count += 1
    } 
    if ( b % 2 == 0) {
        count += 1
    } 
    if ( c % 2 == 0) {
        count += 1
    } 
        // Odd numbers = quantity - even numbers
    le = 3 - count;
    
    // Print out
    document.getElementById('result3').innerHTML = 'Co ' + count + ' so chan va ' + le + ' so le';
}

var authen = document.getElementById('authen');
authen.onclick = function () {
    // Get data
    var c1 = document.getElementById('c1').value*1;
    var c2 = document.getElementById('c2').value*1;
    var c3 = document.getElementById('c3').value*1;

    // Handle data
        // Triangle with 2 sides equal to each other -> isosceles triangle
    if ( ( c1 == c2 && c1 != c3 ) || (c1 == c3 && c1!= c2) || ( c2 == c3 && c2!= c1) ) {
        document.getElementById('result4').innerHTML = 'Tam giac can'
        // Triangle with all equal 3 sides -> equilateral triangle
    } else if ( c1 == c2 && c2 == c3 && c1 == c3 ) {
        document.getElementById('result4').innerHTML = 'Tam giac deu'
        // right triangle with Pythagorean theorem
    } else if ( (c1*c1 == (c2*c2 + c3*c3)) || (c2*c2 == (c1*c1 * c3*c3)) || (c3*c3 == (c1*c1 + c2*c2)) ){
        document.getElementById('result4').innerHTML = 'Tam giac vuong'
    } else {
        document.getElementById('result4').innerHTML = 'Tam giac khac'
    }
}