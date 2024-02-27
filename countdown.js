/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */



document.addEventListener("DOMContentLoaded", function () {
    // Select the <p> elements
    var greetingElement = document.getElementById("greeting");
    var birthdayElement = document.getElementById("birthday");
    var happyElement = document.getElementById("happy");
    var numberCount3Element = document.getElementById("number3");
    var numberCount2Element = document.getElementById("number2");
    var numberCount1Element = document.getElementById("number1");
    var number1Element = document.getElementById("1");
    var number2Element = document.getElementById("2");
    var number3Element = document.getElementById("3");
    var number4Element = document.getElementById("4");
    var number5Element = document.getElementById("5");
    var number6Element = document.getElementById("6");
    var number7Element = document.getElementById("7");
    var number8Element = document.getElementById("8");
    var number9Element = document.getElementById("9");
    var number10Element = document.getElementById("10");
    var number11Element = document.getElementById("11");
    var number12Element = document.getElementById("12");



    // Function to change the greeting after 3 seconds
    setTimeout(function () {
        greetingElement.textContent = ""; // Clear the greeting
        birthdayElement.textContent = "生日快乐"; // Display "生日快乐"
    }, 3000);

    // Function to display "happy birthday" after another 6 seconds
    setTimeout(function () {
        birthdayElement.textContent = ""; // Clear the birthday message               
        happyElement.textContent = "Happy Birthday"; // Display "happy birthday"
    }, 6000); // 3 seconds after the greeting changes

    setTimeout(function () {
        happyElement.textContent = ""; // Clear the birthday message               
        numberCount3Element.textContent = "3"; // Display "happy birthday"
    }, 9000); // 3 seconds after the greeting changes

    setTimeout(function () {
        numberCount3Element.textContent = ""; // Clear the birthday message               
        numberCount2Element.textContent = "2"; // Display "happy birthday"
    }, 9300); // 3 seconds after the greeting changes
    setTimeout(function () {
        numberCount2Element.textContent = ""; // Clear the birthday message               
        numberCount1Element.textContent = "1"; // Display "happy birthday"
    }, 9600); // 3 seconds after the greeting changes

    setTimeout(function () {
        numberCount1Element.textContent = "";
        number1Element.textContent = "愿妳此生一生被爱，坦荡自若，"; // Display "生日快乐"
    }, 10000);

    // Function to display "happy birthday" after another 6 seconds
    setTimeout(function () {
        number2Element.textContent = "无忧无疾。祝你的生日充满美好"; // Display "happy birthday"
    }, 13000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number3Element.textContent = "的回忆，愿未来的日子更加辉煌。"; // Display "生日快乐"
    }, 16000);

    setTimeout(function () {
        number4Element.textContent = "愿你的生日充满欢笑和美好的回忆。"; // Display "happy birthday"
    }, 19000); // 3 seconds after the greeting changes


    setTimeout(function () {
        number5Element.textContent = "愿你的生日充满阳光、欢笑和温馨，"; // Display "happy birthday"
    }, 22000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number6Element.textContent = "永远快乐。妳若不伤，岁月无恙。"; // Display "happy birthday"
    }, 25000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number1Element.textContent = ""; // Display "happy birthday"
        number2Element.textContent = "";
        number3Element.textContent = "";
        number4Element.textContent = "";
        number5Element.textContent = "";
        number6Element.textContent = "";
        
    }, 25500); // 3 seconds after the greeting changes



    setTimeout(function () {
        number7Element.textContent = "一場相遇，來自于緣分，"; // Display "happy birthday"
    }, 28000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number8Element.textContent = "一個真情，來自于誠意，"; // Display "happy birthday"
    }, 31000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number9Element.textContent = "一句問候，來自于思念，"; // Display "happy birthday"
    }, 34000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number10Element.textContent = "一份陪伴，給予力量，"; // Display "happy birthday"
    }, 37000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number11Element.textContent = "一份心動，來自於本能。"; // Display "happy birthday"
    }, 40000); // 3 seconds after the greeting changes

    setTimeout(function () {
        number12Element.textContent = "點擊"; // Display "happy birthday"
    }, 43000); // 3 seconds after the greeting changes
});


