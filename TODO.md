# LSTARI Food & Common House Website - Update Plan

## Task: Update Menu dengan Data Lengkap dari User

---

## Menu Data yang akan diinput:

### ☕ MINUMAN

#### Coffee (Hot / Cold)
| Item | Harga |
|------|-------|
| Single Espresso | 21.000 |
| Double Espresso | 21.000 |
| Americano | 32.000 |
| Long Black | 32.000 |
| Piccolo | 35.000 |
| Flat White | 35.000 |
| Cappuccino | 35.000 |
| Latte | 37.000 |
| Caramel Latte | 39.000 |
| Hazelnut Latte | 39.000 |
| Mochaccino | 39.000 |

#### Manual Brew
| Item | Harga |
|------|-------|
| V60 | 37.000 |

#### Minuman Kaleng 180ml
| Item | Harga |
|------|-------|
| Kopi Aren | 22.000 |
| Kopi Black Aren | 22.000 |
| Kopi Baileys | 22.000 |
| Kopi Rum | 22.000 |
| Cold Brew | 30.000 |
| Cold White | 30.000 |

#### Minuman Kaleng 330ml
| Item | Harga |
|------|-------|
| Kopi Aren | 39.000 |
| Kopi Baileys | 39.000 |
| Kopi Rum | 39.000 |
| Taro | 39.000 |
| Chocolate | 39.000 |
| Green Tea | 39.000 |
| Red Velvet | 39.000 |

#### Non Coffee
| Item | Harga |
|------|-------|
| Taro | 39.000 |
| Chocolate | 39.000 |
| Red Velvet | 39.000 |
| Green Tea | 39.000 |

#### Specialty Tea
| Item | Harga |
|------|-------|
| Chamomile Blossoms | 25.000 |
| Classic Earl Grey | 25.000 |
| Moroccan Mint | 25.000 |
| Jade Jasmine | 25.000 |
| Peach Please | 25.000 |

#### Tea
| Item | Harga |
|------|-------|
| Longan Honey Tea | 25.000 |
| Wintermelon Tea | 25.000 |
| Lychee Tea | 25.000 |
| Lemon Tea | 25.000 |

#### Air Mineral
| Item | Harga |
|------|-------|
| Air Mineral | 10.000 |

---

### 🍽️ MAKANAN

#### Nasi Goreng
| Item | Harga |
|------|-------|
| Nasi Goreng Rawon | 60.000 |
| Nasi Goreng Ayam Ngohiong | 60.000 |
| Nasi Goreng Teriyaki | 60.000 |

#### Mie
| Item | Harga |
|------|-------|
| Mie Ayam Merah | 55.000 |
| Mie Ayam Putih | 55.000 |
| Mie Ayam Kombinasi | 60.000 |
| Bakmi Goreng Ayam Merah | 60.000 |

#### Nasi
| Item | Harga |
|------|-------|
| Nasi Hainan Ayam Merah | 55.000 |
| Nasi Hainan Ayam Putih | 55.000 |
| Nasi Hainan Kombinasi | 60.000 |
| Nasi Kakap Bakar | 60.000 |
| Nasi Ayam Ngohiong | 55.000 |
| Nasi Ayam Bakar Sambal Ijo | 55.000 |
| Nasi Ayam Lada Hitam | 55.000 |
| Nasi Ayam Saus Inggris | 60.000 |
| Nasi Ayam Saus Bangkok | 55.000 |
| Nasi Ayam Geprek | 55.000 |
| Nasi Iga Bakar Madu | 60.000 |
| Nasi Chicken Butter | 60.000 |
| Nasi Patty Steak | 55.000 |

#### Sup
| Item | Harga |
|------|-------|
| Nasi Rawon Iga | 60.000 |
| Nasi Kakap Woku | 60.000 |
| Mushroom Soup | 35.000 |
| Sweet Corn Soup | 35.000 |

#### Pasta
| Item | Harga |
|------|-------|
| Fettuccine Carbonara | 60.000 |
| Spaghetti Bolognese | 60.000 |
| Spaghetti Aglio Olio | 60.000 |
| Spaghetti Tuna Aglio Olio | 60.000 |
| Spaghetti Cordon Blue | 60.000 |

#### Sandwich
| Item | Harga |
|------|-------|
| Club Sandwich | 60.000 |
| Tuna Sandwich | 60.000 |

#### Breakfast
| Item | Harga |
|------|-------|
| Shakshuka | 55.000 |
| Chicken Crispy Sandwich | 55.000 |
| Big Breakfast | 55.000 |
| Rosti and Egg | 55.000 |

#### Roti Bakar (Ropang)
| Item | Harga |
|------|-------|
| Semua Ropang | 25.000 |
| - Ropang Coklat | |
| - Ropang Keju | |
| - Ropang Kacang | |
| - Ropang Klasik | |
| - Ropang Coklat + Keju | |
| - Ropang Coklat + Kacang | |
| - Ropang Keju + Kacang | |
| - Ropang Coklat + Keju + Kacang | |
| - Ropang Milo Dinosaurs | |
| - Ropang Selai Kaya | |

#### Snack
| Item | Harga |
|------|-------|
| Sampler | 55.000 |
| French Fries | 35.000 |
| Chicken Wings | 40.000 |

---

## Plan Update:

### Step 1: Update js/main.js
- [ ] Ganti menuItems object dengan data lengkap dari user
- [ ] Untuk setiap kategori, tampilkan HANYA 3-4 item pertama
- [ ] Tambah tombol "Lihat Semua Menu" di setiap kategori

### Step 2: Update index.html
- [ ] Tambah sub-kategori tabs (Coffee, Manual Brew, Kaleng, Non Coffee, Tea, etc.)
- [ ] Untuk Makananan: (Nasi Goreng, Mie, Nasi, Sup, Pasta, Sandwich, Breakfast, Ropang, Snack)
- [ ] Gallery: buat gambar jadi PERSEGI (square) dengan CSS object-fit: cover

### Step 3: Update css/style.css
- [ ] Gallery: .gallery-main img { width: 100%; height: 500px; } → buat square 1:1 ratio
- [ ] Thumbnail: .thumb { width: 100px; height: 100px; } → square
- [ ] Style menu category tabs agar lebih rapi

---

## Catatan:
- Menu SANGAT BANYAK (~80+ item)
- Strategy: Tampilkan kategori + 3-4 itempreview + tombol "Lihat Semua"
- Gallery: ubah dari landscape jadi square (persegi)
