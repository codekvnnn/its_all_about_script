var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello, ".concat(this.name, "!"));
    };
    return Greeter;
}());
var greeter = new Greeter("John Doe");
greeter.greet();
