const form = document.getElementById('form-kalkulator');
const inputNama = document.getElementById('nama-barang');
const inputHargaBeli = document.getElementById('harga-beli');
const inputMargin = document.getElementById('margin');
const pesanError = document.getElementById('pesan-error');
const sectionHasil = document.getElementById('hasil');
const hasilLabel = document.getElementById('hasil-label');
const elHargaJual = document.getElementById('harga-jual');
const elKeuntungan = document.getElementById('keuntungan');

const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

function formatRupiah(n) {
  return rupiahFormatter.format(Math.round(n));
}

function hitung(hargaBeli, marginPersen) {
  if (marginPersen >= 100) {
    throw new Error('Margin harus di bawah 100%.');
  }
  const hargaJual = hargaBeli / (1 - marginPersen / 100);
  const keuntungan = hargaJual - hargaBeli;
  return { hargaJual, keuntungan };
}

function validasi() {
  const hargaBeli = parseFloat(inputHargaBeli.value);
  const margin = parseFloat(inputMargin.value);

  if (inputHargaBeli.value.trim() === '' || Number.isNaN(hargaBeli)) {
    return { ok: false, pesan: 'Masukkan harga beli yang valid.' };
  }
  if (hargaBeli <= 0) {
    return { ok: false, pesan: 'Harga beli harus lebih dari 0.' };
  }
  if (inputMargin.value.trim() === '' || Number.isNaN(margin)) {
    return { ok: false, pesan: 'Masukkan margin yang valid.' };
  }
  if (margin < 0 || margin >= 100) {
    return { ok: false, pesan: 'Margin harus antara 0% dan di bawah 100%.' };
  }

  return { ok: true, hargaBeli, margin };
}

function tampilkanError(pesan) {
  pesanError.textContent = pesan;
  pesanError.hidden = false;
  sectionHasil.hidden = true;
}

function sembunyikanError() {
  pesanError.hidden = true;
  pesanError.textContent = '';
}

function tampilkanHasil({ hargaJual, keuntungan }) {
  const nama = inputNama.value.trim();
  hasilLabel.textContent = nama ? `Hasil untuk ${nama}` : 'Hasil perhitungan';
  elHargaJual.textContent = formatRupiah(hargaJual);
  elKeuntungan.textContent = formatRupiah(keuntungan);
  sectionHasil.hidden = false;
}

function prosesHitung() {
  const hasilValidasi = validasi();
  if (!hasilValidasi.ok) {
    tampilkanError(hasilValidasi.pesan);
    return;
  }

  try {
    const { hargaJual, keuntungan } = hitung(
      hasilValidasi.hargaBeli,
      hasilValidasi.margin
    );
    sembunyikanError();
    tampilkanHasil({ hargaJual, keuntungan });
  } catch (err) {
    tampilkanError(err.message);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  prosesHitung();
});

[inputHargaBeli, inputMargin].forEach((input) => {
  input.addEventListener('input', () => {
    const hasilValidasi = validasi();
    if (hasilValidasi.ok) {
      prosesHitung();
    } else {
      sembunyikanError();
      sectionHasil.hidden = true;
    }
  });
});
