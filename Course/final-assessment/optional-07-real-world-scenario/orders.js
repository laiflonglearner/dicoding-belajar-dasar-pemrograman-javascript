// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  let order = {
    id: generateUniqueId(),
    customerName,
    items: items,
    totalPrice: items.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    ),
    status: "Menunggu",
  };

  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  orders = orders.map((order) => {
    if (order.id === orderId) {
      return { ...order, status };
    }
    return order;
  });
  console.log(
    `Status order dengan ID ${orderId} telah diperbarui menjadi ${status}.`
  );
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.reduce((accumulator, order) => {
    if (order.status === "Selesai") {
      return accumulator + order.totalPrice;
    }
    return accumulator;
  }, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
  console.log(`Order dengan ID ${id} telah dihapus.`);
}

function displayOrder() {
  return JSON.stringify(orders, null, 2);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
  displayOrder,
};
