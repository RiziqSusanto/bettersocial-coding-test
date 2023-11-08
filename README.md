Ini adalah repo untuk BetterSocial - mobile development coding test

# A - Komunikasi dengan Manajer Produk
## Pertanyaan Klarifikasi yang akan Diajukan kepada Manajer Produk:

1. Apa target pengguna aplikasi ini? Apakah itu untuk pengguna umum atau ada segmen khusus?
2. Apakah ada integrasi dengan sistem atau layanan pihak ketiga yang perlu dipertimbangkan?
3. Apakah ada fitur-fitur khusus yang harus disertakan dalam aplikasi ini berdasarkan permintaan pengguna?
4. Bagaimana rencana pengujian dan penyebaran aplikasi ini?
5. Apakah ada rencana pemeliharaan dan dukungan jangka panjang setelah aplikasi diluncurkan?

# C1 - Implementasi Fitur "Orang yang Mungkin Anda Kenal"
### Struktur Data:
- Tabel "Users":
   - Kolom: UserID, UserName, UserInterests, dll.
   - Catatan: Menyimpan data pengguna termasuk minat dan preferensi.

- Tabel "Communities":
   - Kolom: CommunityID, CommunityName, CommunityMembers, dll.
   - Catatan: Menyimpan data komunitas yang ada di aplikasi.

- Tabel "UserCommunityRelations":
   - Kolom: RelationID, UserID, CommunityID, dll.
   - Catatan: Menghubungkan pengguna dengan komunitas yang mereka ikuti.

### Penanganan Kasus Ekstrim:
- Jika tidak ada pengguna terkait, fitur ini akan menawarkan rekomendasi berdasarkan komunitas populer atau topik yang sedang tren di platform.
- Jika terlalu banyak pengguna terkait atau terlalu banyak komunitas yang diikuti, saya akan menerapkan pemeringkatan dan filter untuk memastikan rekomendasi yang relevan.


### Pengujian:
Saya akan menguji fitur ini dengan skenario berikut:
- Skenario 1: Pengguna memiliki banyak koneksi dan mengikuti beberapa komunitas.
- Skenario 2: Pengguna memiliki sedikit atau tidak ada koneksi dan belum mengikuti komunitas.
- Skenario 3: Terdapat banyak pengguna dan komunitas di platform.
- Skenario 4: Pengguna dengan minat khusus.

Pengujian A/B:
- Saya akan meluncurkan fitur ini dalam uji A/B untuk melihat sejauh mana fitur ini meningkatkan interaksi pengguna dan keterlibatan dalam aplikasi.
- A/B testing akan memungkinkan kami untuk membandingkan performa fitur dengan kelompok kontrol yang tidak menggunakan fitur ini.

# C2 Logika
1. Identifikasi pengguna yang terkait dengan pengguna saat ini, seperti teman, pengikut, atau anggota komunitas yang sama.
2. Tinjau aktivitas pengguna saat ini, seperti like, komentar, atau berbagi. Pengguna yang sering berinteraksi atau memiliki minat serupa lebih mungkin menjadi saran yang baik.
3. Perhatikan minat, hobi, atau preferensi pengguna yang dinyatakan atau dapat disimpulkan dari aktivitas sebelumnya.
4. Hitung tingkat relevansi antara pengguna saat ini dan pengguna terkait. Pilih pengguna yang paling relevan sebagai saran.
5. Fitur "Orang yang Mungkin Anda Kenal" harus dapat mempelajari perilaku pengguna dan penyesuaian berdasarkan preferensi mereka.
6. Pastikan perlindungan data pengguna dan penggunaan data yang etis.
