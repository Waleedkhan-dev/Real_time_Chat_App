// class ApiError extends Error {
//  constructor(
//   statusCode,
//   message = "Somthing went wrong",
//   errors = [],
//   stack = ""

//  ) {
//   super(message)
//   this.statusCode = statusCode,
//    this.data = null,
//    this.message = message,
//    this.success = false,
//    this.errors = errors

//   if (stack) {
//    this.stack = stack

//   } else {
//    Error.captureStackTrace(this, this.constructor)
//   }
//  }


// }
// export default ApiError;

class ApiError extends Error {
 constructor(
  sendCode,
  message = "Somthing went wromng",
  errors = [],
  stack = ""
 ) {
  super(message)
  this.statusCode = statusCode
  this.sendCode = sendCode
  this.Message = success
  this.data = null
  this.errors = errors


 }


}