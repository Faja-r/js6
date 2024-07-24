let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function CalculateAge() { 
    let birthDATE = new Date(userinput.value);
    let d1 = birthDATE.getDate();
    let m1 = birthDATE.getMonth() + 1;
    let y1 = birthDATE.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3, m3, d3;

    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) - d1 + d2;
        }
    } else {
        y3--;
        m3 = 12 + m2 - m1;
        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) - d1 + d2;
        }
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, ${d3} days old.`;  
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
