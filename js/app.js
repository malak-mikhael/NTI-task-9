let today = new Date();
let day = today.getDay();
let message = "Today is ";

// function showAlert() {
//     switch (day) {
//       case 0:
//         message += "Sunday";
//         break;
//       case 1:
//         message += "Monday";
//         break;
//       case 2:
//         message += "Tuesday";
//         break;
//       case 3:
//         message += "Wednesday";
//         break;
//       case 4:
//         message += "Thursday";
//         break;
//       case 5:
//         message += "Friday";
//         break;
//       case 6:
//         message += "Saturday";
//         break;
//     }
//     alert(message);
//   }
//   showAlert();

if (day == 0) {
  message += "Sunday";
} else if (day == 1) {
  message += "Monday";
} else if (day == 2) {
  message += "Tuesday";
} else if (day == 3) {
  message += "Wednesday";
} else if (day == 4) {
  message += "Thursday";
} else if (day == 5) {
  message += "Friday";
} else if (day == 6) {
  message += "Saturday";
}

alert(message);
