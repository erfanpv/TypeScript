type StatusType1 = "pending" | "completed" | "failed";

// Enums
// initiol Value of pending is zero
//  after compilation (enums runs it's runtime) it's generate IIFE function
enum StatusType {
  PENDING,
  COMPLETED,
  FAILED,
}

function getStatus(orderId: number, status: StatusType) {
  console.log(orderId, "==", status);
}

getStatus(12334, StatusType.COMPLETED);



//The advantage of const keyword in enum . after compilation (enums runs it's runtime)it's avoid IIFE functions.
//const keyword is not recommended using with enums.there are some issues.
// const enum StatusType {
//   PENDING,
//   COMPLETED,
//   FAILED,
// }

// function getStatus(orderId: number, status: StatusType) {
//   console.log(orderId, "==", status);
// }

// getStatus(12334, StatusType.COMPLETED);
