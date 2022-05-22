// Closest Elevator

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'

//or

/**
  Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2),
  write a function elevator accepting 3 arguments (in order):

  left - The current floor of the left elevator
  right - The current floor of the right elevator
  call - The called floor, i.e. the floor you want to reach
  It should return the name of the elevator closest to the called floor ("left"/"right").

  In the case where both elevators are equally distant from the called floor,
  choose the elevator to the right.

  You can assume that the inputs will always be valid integers between 0-2.
*/
// function elevator(leftElevatorPosition, rightElevatorPosition, requestedFloor){
//     class Elevator {
//       constructor(label, currentPosition, call) {
//         this.label = label;
//         this.currentPosition = currentPosition;
//         this.distance = Math.abs(requestedFloor - currentPosition)
//         return this;
//       }
//     }
//
//     const availableElevators = [
//       //  right elevator has precedence, always checked its position first
//       new Elevator('right', rightElevatorPosition, requestedFloor),
//       new Elevator('left', leftElevatorPosition, requestedFloor),
//     ];
//
//     let closestElevator = availableElevators[0];
//
//     for (let i in availableElevators) {
//       const elevator = availableElevators[i];
//       if (elevator.distance === 0) { return elevator.label; }
//       if (elevator.distance < closestElevator.distance) {
//         closestElevator = elevator;
//       }
//     }
//
//     return closestElevator.label;
//   }

  //or

  // function elevator(left, right, call){
  //   return Math.abs(call - right) > Math.abs(call - left) ? "left" : "right";
  // }
