class ApiResponse {
 constructor(statusCode, data, message = "success") {
  this.message = message,
   this.data = data,
   this.statusCode = statusCode
 }
}
export { ApiResponse }