import { API, sampleErrorData, sampleSuccessData } from "./support.mjs";

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
async function processData(data) {
  // Map setiap item pada data yang di-request menjadi Promise dari API.fetch
  const promises = data.map((request) =>
    API.fetch(request.delay, request.simulateError)
  );
  return Promise.all(promises);
}

// Test cases
processData(sampleErrorData)
  .then(console.log)
  .catch((error) => console.log(error.message)); // Throw exception: Error from delay 50

processData(sampleSuccessData)
  .then(console.log)
  .catch((error) => console.log(error.message)); // expected output: ['Data from delay 100', 'Data from delay 50']
