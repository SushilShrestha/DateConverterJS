module.exports = function(condition, message){
    if (!condition) {
        message = message || "Assertion failed";
        console.trace("Assertion Failed")
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message;
    }
}
