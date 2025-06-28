var Sorter = /** @class */ (function () {
    function Sorter(data) {
        this.data = data;
    }
    Sorter.prototype.sortData = function () {
        return this.data.sort();
    };
    return Sorter;
}());
var arr1 = new Sorter([3, 4, 5, 1, 2]);
var arr2 = new Sorter(["c", "d", "e", "a", "b"]);
console.log(arr1.sortData());
console.log(arr2.sortData());
