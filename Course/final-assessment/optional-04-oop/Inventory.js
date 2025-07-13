/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item, { ItemError } from "./Item.js";

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!item) return; // Prevent null from Item.create()

    try {
      if (!(item instanceof Item)) {
        throw new ItemError("Invalid Item: not an instance of Item.");
      }
      this.items.push(item);
    } catch (error) {
      console.error("Failed to add Item:", error.message);
    }
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  listItems() {
    return this.items.map((item) => item.displayDetails()).join("\n");
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
