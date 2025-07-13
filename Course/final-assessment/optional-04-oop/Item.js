/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

export class ItemError extends Error {
  constructor(message) {
    super(message);
    this.name = "ItemError";
  }
}

class Item {
  static #validate(props) {
    if ("id" in props) {
      if (typeof props.id !== "number" || isNaN(props.id)) {
        throw new ItemError("ID must be a valid number.");
      }
      if (props.id < 1) {
        throw new ItemError("ID must be a positive number.");
      }
    }

    if ("name" in props) {
      if (typeof props.name !== "string") {
        throw new ItemError("Name must be a string.");
      }
      const trimmedName = props.name.trim();
      if (trimmedName.length === 0) {
        throw new ItemError("Name must be a non-empty string.");
      }
      if (!/^[\p{L}]+(?: [\p{L}]+)*$/u.test(trimmedName)) {
        throw new ItemError(
          "Name must contain only letters. (e.g., 'Jean Claude', 'Nguyễn Văn', 佐藤)."
        );
      }
    }

    if ("quantity" in props) {
      if (typeof props.quantity !== "number" || isNaN(props.quantity)) {
        throw new ItemError("Quantity must be a valid number.");
      }
      if (props.quantity < 0) {
        throw new ItemError("Quantity must be non-negative.");
      }
    }

    if ("price" in props) {
      if (typeof props.price !== "number" || isNaN(props.price)) {
        throw new ItemError("Price must be a valid number.");
      }
      if (props.price < 0) {
        throw new ItemError("Price must be non-negative.");
      }
    }
  }

  static create(id, name, quantity, price) {
    try {
      this.#validate({ id, name, quantity, price });
      return new Item(id, name, quantity, price);
    } catch (error) {
      console.error("Failed to create Item:", error.message);
      return null;
    }
  }

  constructor(id, name, quantity, price) {
    // Validation should throw — prevent broken instances
    Item.#validate({ id, name, quantity, price });

    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  updateDetails(name, quantity, price) {
    try {
      Item.#validate({ name, quantity, price });
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      return true;
    } catch (error) {
      console.error(`Failed to update Item: ${error.message}`);
      return false;
    }
  }

  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
  }
}

// Jangan hapus kode di bawah ini!
export default Item;
