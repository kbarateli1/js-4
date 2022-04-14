
// დავალება:
// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და 
// დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.
// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს 
// ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.
// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და 
// დააბრუნებს კვადრატის ფართობს. ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.

// 4. 
// Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
// Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.

// დაწერეთ ფუნქცია, 
// რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს დ
// ა დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.
// 5. შექმენით ობიექტების 5 ელემენტიანი მასივი, 
// სადაც თითოეულ ობიექტს გააჩნია name და age ველები. შემდეგ შექმენით ფუნქცია, 
// რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).

// 6. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება

// შენიშვნა: ფუნქციებს და ცვლადებს დაარქვით სახელები ინგლისურად ისე, რომ სახელი მიუთითებდეს თუ რას აკეთებს ფუნქცია. მაგალითად: getRandomNumber  


// p.s. 'დააბრუნებს' გულისხმობს რომ ფუნქციაში უნდა გამოიყენოთ return


// 1. 
 
 function evenNumbers(numbers) {
        if (numbers % 2 == 0) {
        console.log("even number");
 return true;
  }
        console.log("odd number");
        return false;
 }

         let numbers = 7;
         let result = evenNumbers(numbers);
         console.log(result)

//2. 
    function rectangleSizes(a,b) {
    let s = a*b
    console.log(s);
    return(s);
 }

 rectangleSizes(5,10);


 3.

function squareSizes(a) {
    let s = a*a;
    return (s);
}

 squareSizes(5);


// 4. //ეს დავალება ვერ გავაკეთე
// // Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
// // Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// // Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
// // დაწერეთ ფუნქცია, 
// // რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს დ
// // ა დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს..



// function randomNumber() {
//     let randomNumber = Math.floor(Math.random() * 100);
//     console.log(randomNumber);
//     return (randomNumber)
//   }
//   randomNumber();



// 5.
let userArr=[
  {
       userName:"keti",
        userAge:27,
   },
    {
        userName:"inga",
       userAge:28,
      },
         {
        userName:"mariam",
         userAge:28,
     },
     {
         userName:"nutsa",
         userAge:27,
     },
     {
         userName:"gurami",
         userAge:25,
     },

 ];
  console.log(userArr)

 let minArrage = userArr.filter((el) => {
     return el.minArrage <25;
 });
 console.log(minArrage);


 6. 
 function getCurrencySymbolFromCode (params) {
     if (currency == "usd") {
         console.log("$");
         return ("$");
     } else if  (currency == "eur"){
        console.log("€");
        return ("€");
    } else if (currency == "gel") {
        console.log("ლ");
        return ("ლ");
    }
 }

 getCurrencySymbolFromCode("gel");



  