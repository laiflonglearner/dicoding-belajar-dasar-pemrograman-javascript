import Item from "./Item.js";
import Inventory from "./Inventory.js";

const inventory = new Inventory();

const item1 = Item.create(1, "Laptop", 10, 1000);
const item2 = Item.create(2, "Mouse", 50, 20);

inventory.addItem(item1);
inventory.addItem(item2);

console.log("Initial Inventory:");
console.log(inventory.listItems());

item1.updateDetails("Laptop", 8, 950);
console.log("\nInventory after update:");
console.log(inventory.listItems());

inventory.removeItem(2);
console.log("\nInventory after removal:");
console.log(inventory.listItems());

// Additional test cases
inventory.addItem(Item.create("Test", 10, 1000));
inventory.addItem(Item.create("1", "Laptop", 10, 1000));
inventory.addItem(Item.create(1, " ", 10, 1000));
inventory.addItem(Item.create(1, "Karen123", 10, 1000));
console.log(inventory.listItems());
