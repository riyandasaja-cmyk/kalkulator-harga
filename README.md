# Kalkulator Harga By TMS_genahelik

Kalkulator harga jual sembako berbasis web — ringan, gratis, dan aman dipakai di HP maupun komputer. Hitung **harga jual** dan **keuntungan** dari harga beli dan margin % (margin dihitung dari harga jual).

## Fitur

- Input: nama barang (opsional), harga beli, margin %
- Output: harga jual & keuntungan per unit (format Rupiah)
- Tampilan mobile-first, tanpa instalasi
- Perhitungan langsung di browser (tanpa server)

## Rumus

Margin % = keuntungan ÷ harga jual × 100

| Rumus | Keterangan |
|-------|------------|
| Harga jual | `hargaBeli / (1 - margin/100)` |
| Keuntungan | `hargaJual - hargaBeli` |

**Contoh:** beli Rp 10.000, margin 20% → jual Rp 12.500, untung Rp 2.500.

## Cara pakai (lokal)

```bash
# Buka langsung di macOS
open index.html

# Atau serve lokal (opsional, untuk uji di HP)
python3 -m http.server 8080
```

Buka `http://localhost:8080` di browser.

## Upload ke GitHub

1. Buat repositori **public** baru di GitHub (mis. `kalkulator-harga-tms-genahelik`).
2. Upload semua file di folder ini:

   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
   - `LICENSE`
   - `.gitignore`

3. Aktifkan **GitHub Pages**: *Settings → Pages → Source: Deploy from branch → branch `main` → folder `/ (root)*.
4. Bagikan link Pages ke pengguna.

### Via Git di terminal

```bash
cd kalkulator-harga-sembako
git init
git add .
git commit -m "Kalkulator Harga By TMS_genahelik — rilis awal"
git branch -M main
git remote add origin https://github.com/<username>/<nama-repo>.git
git push -u origin main
```

## Keamanan & privasi

Proyek ini dirancang **tanpa backend** dan **tanpa pengumpulan data**.

| Aspek | Status |
|-------|--------|
| Server / API | Tidak ada — hanya file HTML, CSS, JS statis |
| Pengiriman data ke internet | Tidak ada — tidak ada `fetch`, XMLHttpRequest, atau webhook |
| Analytics / tracking pihak ketiga | Tidak ada |
| Cookie / localStorage / sessionStorage | Tidak digunakan |
| Skrip eksternal (CDN, Google Fonts, dll.) | Tidak ada — hanya `app.js` dan `styles.css` lokal |
| Login / akun | Tidak ada |
| Data yang Anda ketik | Hanya diproses di perangkat Anda; hilang saat halaman ditutup/direfresh |

**Praktik aman untuk pengguna**

- Tidak perlu memasukkan data pribadi (NIK, rekening, dll.) — cukup nama barang dan angka harga.
- Kode `app.js` dapat diaudit siapa saja karena open source (lisensi MIT).

**Untuk maintainer (GitHub Pages)**

- Jangan menambahkan skrip pihak ketiga tanpa tinjauan keamanan.
- Jangan commit file `.env`, kunci API, atau kredensial — proyek ini tidak memerlukannya.

## Struktur proyek

```
kalkulator-harga-sembako/
├── index.html    # Halaman utama
├── styles.css    # Gaya tampilan
├── app.js        # Logika kalkulasi & validasi
├── README.md
├── LICENSE
└── .gitignore
```

## Lisensi

[MIT License](LICENSE) — © 2026 TMS_genahelik. Bebas dipakai, dimodifikasi, dan didistribusikan dengan menyertakan salinan lisensi.

## Kontribusi

Pull request dan issue dipersilakan. Pastikan perubahan tetap menjaga prinsip keamanan di atas (tanpa tracking, tanpa pengiriman data pengguna).
