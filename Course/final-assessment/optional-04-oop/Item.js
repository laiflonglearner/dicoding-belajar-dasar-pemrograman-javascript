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
// Custom error class for Item-related errors
export class ItemError extends Error {
  constructor(message) {
    super(message);
    this.name = "ItemError";
  }
}

class Item {
  #validate(props) {
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
      if (!/[a-zA-Z]/.test(trimmedName)) {
        throw new ItemError("Name must contain at least one letter.");
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

  constructor(id, name, quantity, price) {
    this.#validate({ id, name, quantity, price });
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  updateDetails(name, quantity, price) {
    this.#validate({ name, quantity, price });
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
  }
}

// class Item {
//   #validate(props) {
//     if ("id" in props) {
//       if (typeof props.id !== "number") {
//         throw new TypeError("ID must be a number.");
//       }
//       if (props.id < 1) {
//         // It can't be 0 or negative
//         throw new TypeError("ID must be a positive number.");
//       }
//     }
//     if ("name" in props) {
//       if (typeof props.name !== "string") {
//         throw new TypeError("Name must be a string.");
//       }
//       if (!/^[\p{Letter}]+(?: [\p{Letter}]+)*$/u.test(props.name)) {
//         throw new TypeError(
//           "Name must contain only letters (no digits and symbols)."
//         );
//       }
//     }
//     if ("quantity" in props) {
//       if (typeof props.quantity !== "number") {
//         throw new TypeError("Quantity must be a number.");
//       }
//       if (props.quantity < 0) {
//         throw new TypeError("Quantity must be a non-negative number.");
//       }
//     }
//     if ("price" in props) {
//       if (typeof props.price !== "number") {
//         throw new TypeError("Price must be a number.");
//       }
//       if (props.price < 1) {
//         throw new TypeError("Price must be a positive number.");
//       }
//     }
//   }

//   constructor(id, name, quantity, price) {
//     this.#validate({ id, name, quantity, price });
//     this.id = id;
//     this.name = name;
//     this.quantity = quantity;
//     this.price = price;
//   }

//   updateDetails(name, quantity, price) {
//     this.#validate({ name, quantity, price });
//     this.name = name;
//     this.quantity = quantity;
//     this.price = price;
//   }

//   displayDetails() {
//     return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
//   }
// }

// Jangan hapus kode di bawah ini!
export default Item;
