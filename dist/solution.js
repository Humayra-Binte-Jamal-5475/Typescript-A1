"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return !value;
}
function getLength(value) {
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
function filterActiveUsers(users) {
    return users.filter((user) => user.isActive);
}
function printBookDetails(book) {
    const availableText = book.isAvailable ? "Yes" : "No";
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`);
}
function getUniqueValues(array1, array2) {
    const result = [];
    for (const value of array1) {
        if (!result.includes(value)) {
            result.push(value);
        }
    }
    for (const value of array2) {
        if (!result.includes(value)) {
            result.push(value);
        }
    }
    return result;
}
function calculateTotalPrice(products) {
    if (products.length === 0) {
        return 0;
    }
    return products
        .map((product) => {
        let total = product.price * product.quantity;
        if (product.discount !== undefined) {
            total = total - total * (product.discount / 100);
        }
        return total;
    })
        .reduce((sum, value) => sum + value, 0);
}
//# sourceMappingURL=solution.js.map