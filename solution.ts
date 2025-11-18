function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  return !value;
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
  return 0;
}

class Person {
  constructor(public name: string, public age: number) {}

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

interface RatedItem {
  title: string;
  rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter(item => item.rating >= 4);
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter(u => u.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const status = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${status}`
  );
}

function getUniqueValues(
  first: (string | number)[],
  second: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  for (const item of first) {
    if (!result.includes(item)) result.push(item);
  }

  for (const item of second) {
    if (!result.includes(item)) result.push(item);
  }

  return result;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products.reduce((sum, p) => {
    let total = p.price * p.quantity;
    if (p.discount !== undefined) {
      total -= total * (p.discount / 100);
    }
    return sum + total;
  }, 0);
}
