//opdracht 1 kroegbaas & 50% korting

const age = 22;

if (age >= 18 && age <= 25) {

  console.log("Je krijgt 50% korting!");

} else {

  console.log("Helaas geen korting voor jou!");
}

//opdracht 2 Ludieke actie!

const firstName = "Jolanda";

if (firstName === "Sarah" || firstName === "Abraham") {

  console.log("Je hebt recht op een gratis biertje op deze feestelijke dag!!");

} else {

  console.log("Helaas geen gratis biertje voor jou...");
}

//opdracht 3 Jubileum korting

/* const totalAmount = 65;

if (totalAmount >= 25 && totalAmount < 50) {

  console.log("Je krijgt er gratis (vega)bitterballen bij!");

} else if (totalAmount >= 50 && totalAmount < 100) {

    console.log("Je krijgt een gratis portie nachos bij!");

} else if (totalAmount >= 100) {

    console.log("Je krijgt een gratis flesje champagne erbij!");

} else {

    console.log("Helaas, bestel voor minimaal 25 euro voor gratis extra's");
} */

//of zo, beiden werken!!

const totalAmount = 115;

if (totalAmount >= 100) {

    console.log("Je krijgt een gratis flesje champagne!");

} else if (totalAmount > 50) {

    console.log("Je krijgt een gratis portie nachos");

} else if (totalAmount > 25) {

    console.log("Je krijgt er gratis (vega)bitterballen bij!");

} else {

    console.log("Helaas, bestel meer dan 25 euro voor gratis extra's");
}
