/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


document.addEventListener("DOMContentLoaded", function () {
    // Select the <p> elements
    var number1Element = document.getElementById("1");
    var number2Element = document.getElementById("2");
    var number3Element = document.getElementById("3");
    var number4Element = document.getElementById("4");
    var number5Element = document.getElementById("5");
    var number6Element = document.getElementById("6");
    var number7Element = document.getElementById("7");



    // Function to change the greeting after 3 seconds
    setTimeout(function () {
        number1Element.textContent = "小壽星"; // Display "生日快乐"
    }, 1000);

    // Function to display "happy birthday" after another 6 seconds
    setTimeout(function () {
        number2Element.textContent = "今天是妳的生日"; // Display "happy birthday"
    }, 2000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number3Element.textContent = "我在這裏送上我的祝福 ， 希望2024年身體健康，把所有煩惱忘掉";
    }, 3000);

    setTimeout(function () {
        number4Element.textContent = "新的一年，每一天開開心心的，珍惜當下,去特別好玩的地方，怎麽玩都不累。"; // Display "happy birthday"
    }, 4000); // 3 seconds after the greetin"g changes


    setTimeout(function () {
        number5Element.textContent = "在台灣，不管在上學還是打工，一定照顧好自己，健康才是革命的本錢，一切都要以身體爲主。"; // Display "happy birthday"
    }, 5000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number6Element.textContent = "暑假時，一起去吃你想吃的東西，見你想見的人，去你想去的地方。好不好"; // Display "happy birthday"
    }, 6000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number7Element.innerHTML = "  <a href='firework.html'>點擊有彩蛋</a>"; // Display "happy birthday"
    }, 7000);



});