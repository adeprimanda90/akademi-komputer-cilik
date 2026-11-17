const STAGE_BADGES_SVG = {
  1: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#1d4ed8" stroke="#fbbf24" stroke-width="5"/><text x="50" y="64" font-size="44" text-anchor="middle">🔦</text></svg>`,
  2: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#059669" stroke="#fbbf24" stroke-width="5"/><text x="50" y="64" font-size="44" text-anchor="middle">👆</text></svg>`,
  3: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#7c3aed" stroke="#fbbf24" stroke-width="5"/><text x="50" y="64" font-size="44" text-anchor="middle">🔍</text></svg>`,
  4: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#d97706" stroke="#fbbf24" stroke-width="5"/><text x="50" y="64" font-size="44" text-anchor="middle">⚙️</text></svg>`,
  5: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#db2777" stroke="#fbbf24" stroke-width="5"/><text x="50" y="64" font-size="44" text-anchor="middle">⌨️</text></svg>`,
  6: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#0891b2" stroke="#fbbf24" stroke-width="5"/><text x="50" y="64" font-size="44" text-anchor="middle">✍️</text></svg>`,
  7: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#4f46e5" stroke="#fbbf24" stroke-width="5"/><text x="50" y="64" font-size="44" text-anchor="middle">🧭</text></svg>`,
  8: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#0d9488" stroke="#fbbf24" stroke-width="5"/><text x="50" y="64" font-size="44" text-anchor="middle">🤝</text></svg>`,
  9: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#ea580c" stroke="#fbbf24" stroke-width="5"/><text x="50" y="64" font-size="44" text-anchor="middle">📖</text></svg>`,
  10: `<svg viewBox="0 0 100 100" width="76" height="76"><circle cx="50" cy="50" r="45" fill="#ca8a04" stroke="#fef08a" stroke-width="6"/><text x="50" y="65" font-size="46" text-anchor="middle">🏆</text></svg>`
};

const CURRICULUM_DATA = [
  {
    stage: 1,
    title: "Dunia Pelacak Kursor",
    subtitle: "Latihan menggerakkan mouse wireless dengan halus",
    badge: "Penjelajah Kursor",
    themeColor: "#3b82f6",
    levels: [
      { id: "1.1", name: "Senter Hutan Malam", mode: "hover_flashlight", targetCount: 4, instruction: "Gerakkan lampu sentermu untuk menemukan 4 hewan yang bersembunyi di hutan!" },
      { id: "1.2", name: "Sapu Awan Pelangi", mode: "hover_flashlight", targetCount: 6, instruction: "Ayo cari 6 bintang terang yang tertutup awan malam!" },
      { id: "1.3", name: "Magnet Bintang", mode: "hover_collect", targetCount: 8, instruction: "Arahkan panah mouse menyentuh semua bintang emas di langit!" },
      { id: "1.4", name: "Jejak Kunang-Kunang", mode: "hover_collect", targetCount: 12, instruction: "Kumpulkan 12 kunang-kunang yang bercahaya di taman!" },
      { id: "1.5", name: "Ujian Tahap 1: Penjaga Malam", mode: "hover_flashlight", targetCount: 8, instruction: "Ujian tahap pertama! Temukan semua 8 hewan hutan dengan sentermu." }
    ]
  },
  {
    stage: 2,
    title: "Pulau Ketukan Jari",
    subtitle: "Latihan klik kiri tunggal dengan telunjuk",
    badge: "Master Klik Kiri",
    themeColor: "#10b981",
    levels: [
      { id: "2.1", name: "Gelembung Raksasa", mode: "click_targets", size: 110, items: ["🎈", "🫧", "⚽", "🍎", "⭐"], instruction: "Arahkan panah ke gambar, lalu tekan tombol kiri mouse satu kali!" },
      { id: "2.2", name: "Panen Buah Segar", mode: "click_targets", size: 95, items: ["🍓", "🍊", "🍌", "🍇", "🍉", "🍍"], instruction: "Ayo petik semua buah segar dengan klik kiri!" },
      { id: "2.3", name: "Balon Suku Kata", mode: "click_targets", size: 100, items: ["BA", "BI", "BU", "BE", "BO"], instruction: "Pecahkan balon suku kata ini dengan klik kiri!" },
      { id: "2.4", name: "Tangkap Angka 1–8", mode: "click_sequence", items: ["1", "2", "3", "4", "5", "6", "7", "8"], instruction: "Klik angka secara berurutan mulai dari angka 1 sampai 8!" },
      { id: "2.5", name: "Ujian Tahap 2: Pesta Luar Angkasa", mode: "click_targets", size: 82, items: ["🚀", "🛸", "🌟", "🪐", "☄️", "🌙", "🛰️"], instruction: "Ujian tahap dua! Klik semua benda luar angkasa!" }
    ]
  },
  {
    stage: 3,
    title: "Lembah Ketuk Ganda & Kaca Ajaib",
    subtitle: "Latihan Double-Click dan Klik Kanan",
    badge: "Detektif Dua Jari",
    themeColor: "#8b5cf6",
    levels: [
      { id: "3.1", name: "Ketuk Pintu Kurcaci", mode: "double_click", items: ["🚪", "🚪", "🚪"], instruction: "Ketuk pintu dua kali dengan cepat untuk membukanya!" },
      { id: "3.2", name: "Tetaskan Telur Dino", mode: "double_click", items: ["🥚", "🥚", "🥚", "🥚"], instruction: "Klik dua kali pada setiap telur dinosaurus sampai menetas!" },
      { id: "3.3", name: "Kaca Pembesar X-Ray", mode: "right_click", items: ["📦", "📦", "📦", "📦"], instruction: "Gunakan jari tengahmu untuk klik kanan pada kotak hadiah!" },
      { id: "3.4", name: "Peti Harta Karun", mode: "right_click", items: ["🧰", "🧰", "🧰", "🧰", "🧰"], instruction: "Klik kanan semua peti bajak laut untuk melihat isinya!" },
      { id: "3.5", name: "Ujian Tahap 3: Penjelajah Gua", mode: "double_click", items: ["💎", "🔮", "👑", "🏆", "🗝️"], instruction: "Ujian tahap tiga! Klik ganda semua harta karun berkilau!" }
    ]
  },
  {
    stage: 4,
    title: "Bengkel Geser & Putar Roda",
    subtitle: "Latihan Drag-and-Drop dan Scroll Wheel",
    badge: "Insinyur Mouse",
    themeColor: "#f59e0b",
    levels: [
      { id: "4.1", name: "Parkir Kendaraan", mode: "drag_drop", pairs: [{ item: "🚗", target: "Garasi Mobil" }, { item: "🚒", target: "Pos Pemadam" }, { item: "✈️", target: "Bandara" }], instruction: "Tekan tahan tombol kiri mouse, geser kendaraan ke tempat parkirnya!" },
      { id: "4.2", name: "Kereta Suku Kata", mode: "drag_drop", pairs: [{ item: "BU", target: "BU - KU" }, { item: "BO", target: "BO - LA" }, { item: "RO", target: "RO - TI" }], instruction: "Seret suku kata ke gerbong pasangan katanya yang tepat!" },
      { id: "4.3", name: "Menyelam ke Dasar Laut", mode: "scroll_wheel", instruction: "Putar roda tengah mouse ke bawah untuk membawa kapal selam ke dasar laut!" },
      { id: "4.4", name: "Panjat Pohon Tinggi", mode: "scroll_wheel", instruction: "Putar terus roda scroll mouse sampai mencapai puncak menara!" },
      { id: "4.5", name: "Ujian Tahap 4: Rakitan Robot", mode: "drag_drop", pairs: [{ item: "🤖", target: "Kepala Robot" }, { item: "🦾", target: "Tangan Baja" }, { item: "🔋", target: "Baterai Energi" }, { item: "🚀", target: "Roket Kaki" }], instruction: "Ujian tahap empat! Pasang semua komponen robot ke tempatnya!" }
    ]
  },
  {
    stage: 5,
    title: "Kamp Papan Ketik",
    subtitle: "Mengenal letak huruf dan angka di keyboard",
    badge: "Navigator Keyboard",
    themeColor: "#ec4899",
    levels: [
      { id: "5.1", name: "Huruf Vokal A I U E O", mode: "type_single", keys: ["A", "I", "U", "E", "O"], instruction: "Lihat tombol yang menyala di layar, lalu tekan huruf itu di keyboardmu!" },
      { id: "5.2", name: "Roket Angka 1–5", mode: "type_single", keys: ["1", "2", "3", "4", "5"], instruction: "Tekan tombol angka di baris paling atas keyboard!" },
      { id: "5.3", name: "Tombol Spasi Raksasa", mode: "type_single", keys: ["SPACE", "SPACE", "SPACE"], instruction: "Tekan tombol spasi yang paling panjang di bagian bawah keyboard!" },
      { id: "5.4", name: "Tombol Enter Ajaib", mode: "type_single", keys: ["ENTER", "ENTER", "ENTER"], instruction: "Tekan tombol Enter untuk menyalakan mesin roket!" },
      { id: "5.5", name: "Ujian Tahap 5: Piano Huruf", mode: "type_single", keys: ["M", "A", "K", "B", "U", "S", "P", "R"], instruction: "Ujian tahap lima! Temukan semua huruf acak di papan ketik!" }
    ]
  },
  {
    stage: 6,
    title: "Studio Ketik Kata",
    subtitle: "Mengetik suku kata dan nama benda",
    badge: "Penulis Cilik",
    themeColor: "#06b6d4",
    levels: [
      { id: "6.1", name: "Suku Kata Pertamaku", mode: "type_word", words: ["BA", "BI", "BU", "CA", "KU"], instruction: "Ketik dua huruf yang muncul di layar secara berurutan!" },
      { id: "6.2", name: "Nama Hewan Lucu", mode: "type_word", words: ["SAPI", "RUSA", "IKAN", "KUDA"], instruction: "Eja dan ketik nama hewan yang tampil di layar!" },
      { id: "6.3", name: "Benda di Rumah", mode: "type_word", words: ["BUKU", "MEJA", "BOLA", "TOPI"], instruction: "Ketik nama benda-benda ini dengan teliti!" },
      { id: "6.4", name: "Buah-Buahan Manis", mode: "type_word", words: ["APEL", "JERUK", "MELON", "MANGGA"], instruction: "Ayo ketik nama buah kesukaanmu!" },
      { id: "6.5", name: "Ujian Tahap 6: Koki Kata", mode: "type_word", words: ["ROTI", "SUSU", "NASI", "TELUR", "PISANG"], instruction: "Ujian tahap enam! Ketik semua pesanan makanan dengan benar!" }
    ]
  },
  {
    stage: 7,
    title: "Labirin Tombol Panah",
    subtitle: "Navigasi dengan tombol Arrow dan Shift",
    badge: "Kapten Kontrol",
    themeColor: "#6366f1",
    levels: [
      { id: "7.1", name: "Langkah Kanan & Kiri", mode: "arrow_maze", steps: 5, instruction: "Gunakan tombol panah kanan, kiri, atas, dan bawah di keyboard untuk mengambil semua bintang!" },
      { id: "7.2", name: "Petualangan Robot Biru", mode: "arrow_maze", steps: 7, instruction: "Arahkan robot mengumpulkan 7 baterai energi menggunakan tombol panah!" },
      { id: "7.3", name: "Kode Rahasia Kapital", mode: "type_word", words: ["INDONESIA", "BALI", "PINTAR"], instruction: "Ketik kata-kata hebat berikut ini!" },
      { id: "7.4", name: "Lompatan Cepat Panah", mode: "arrow_maze", steps: 9, instruction: "Kumpulkan 9 permata di dalam labirin!" },
      { id: "7.5", name: "Ujian Tahap 7: Ksatria Labirin", mode: "arrow_maze", steps: 12, instruction: "Ujian tahap tujuh! Kumpulkan seluruh 12 harta karun dengan tombol panah!" }
    ]
  },
  {
    stage: 8,
    title: "Sinergi Mouse & Keyboard",
    subtitle: "Mengklik kotak teks lalu mengetik",
    badge: "Operator Terampil",
    themeColor: "#14b8a6",
    levels: [
      { id: "8.1", name: "Klik Kotak lalu Ketik", mode: "click_and_type", prompts: [{ label: "Klik kotak ini, lalu ketik: HALO", answer: "HALO" }], instruction: "Pertama, klik kotak putih dengan mouse. Kedua, ketik kata HALO di keyboard!" },
      { id: "8.2", name: "Beri Nama Peliharaan", mode: "click_and_type", prompts: [{ label: "Klik kotak, beri nama kucing: MIMI", answer: "MIMI" }, { label: "Klik kotak, beri nama anjing: BOBI", answer: "BOBI" }], instruction: "Klik setiap kotak isian dengan mouse sebelum mengetik namanya!" },
      { id: "8.3", name: "Kasir Toko Mainan", mode: "click_and_type", prompts: [{ label: "Harga Mobil Mainan (ketik 5000)", answer: "5000" }, { label: "Harga Boneka Beruang (ketik 8000)", answer: "8000" }], instruction: "Klik kotak harga lalu ketik angkanya!" },
      { id: "8.4", name: "Pencarian Buah", mode: "click_and_type", prompts: [{ label: "Cari buah warna kuning (ketik PISANG)", answer: "PISANG" }], instruction: "Klik kolom pencarian, lalu ketik nama buahnya!" },
      { id: "8.5", name: "Ujian Tahap 8: Kartu Pelajar", mode: "click_and_type", prompts: [{ label: "Ketik tingkat kelasmu (ketik SD)", answer: "SD" }, { label: "Ketik umurmu sekarang (ketik 6)", answer: "6" }], instruction: "Ujian tahap delapan! Lengkapi data kartumu menggunakan mouse dan keyboard!" }
    ]
  },
  {
    stage: 9,
    title: "Kalimat Pertamaku",
    subtitle: "Mengetik kalimat pendek dengan spasi",
    badge: "Pengarang Muda",
    themeColor: "#f97316",
    levels: [
      { id: "9.1", name: "Dua Kata Berspasi", mode: "type_word", words: ["INI BOLA", "BUKU BARU", "SAYA BISA"], instruction: "Ketik dua kata ini, jangan lupa tekan tombol Spasi di tengahnya!" },
      { id: "9.2", name: "Kalimat Sapaan", mode: "type_word", words: ["HALO AYAH", "HALO IBU", "SELAMAT PAGI"], instruction: "Ketik kalimat sapaan dengan spasi yang rapi!" },
      { id: "9.3", name: "Kalimat Tiga Kata", mode: "type_word", words: ["AKU SUKA BUKU", "INI KUCING SAYA"], instruction: "Ayo ketik kalimat pendek berisi tiga kata!" },
      { id: "9.4", name: "Cerita Petualang", mode: "type_word", words: ["ROKET TERBANG TINGGI", "IKAN BERENANG CEPAT"], instruction: "Ketik kalimat cerita petualangan ini!" },
      { id: "9.5", name: "Ujian Tahap 9: Surat Cinta", mode: "type_word", words: ["AKU SAYANG KELUARGA", "TERIMA KASIH AYAH IBU"], instruction: "Ujian tahap sembilan! Ketik pesan istimewa ini sampai selesai!" }
    ]
  },
  {
    stage: 10,
    title: "Lulusan Akademi Komputer",
    subtitle: "Simulasi kontrol jendela & tantangan akhir",
    badge: "Lulusan Akademi Cilik",
    themeColor: "#eab308",
    levels: [
      { id: "10.1", name: "Kenali Tombol Jendela", mode: "window_sim", task: "minimize", instruction: "Dalam simulasi jendela ini, klik tombol garis kecil untuk mengecilkan jendela!" },
      { id: "10.2", name: "Perbesar Layar Jendela", mode: "window_sim", task: "maximize", instruction: "Klik tombol kotak di pojok kanan atas jendela simulasi untuk memperbesarnya!" },
      { id: "10.3", name: "Tutup Jendela Iklan", mode: "window_sim", task: "close", instruction: "Klik tombol silang merah di pojok kanan atas jendela simulasi untuk menutupnya!" },
      { id: "10.4", name: "Tantangan Kilat Campuran", mode: "type_word", words: ["KOMPUTER", "KEYBOARD", "WIRELESS", "JUARA"], instruction: "Ketik empat kata teknologi komputer dengan lancar!" },
      { id: "10.5", name: "UJIAN KELULUSAN AKHIR", mode: "click_and_type", prompts: [{ label: "Klik & Ketik: SAYA ANAK HEBAT", answer: "SAYA ANAK HEBAT" }, { label: "Klik & Ketik: LULUS AKADEMI", answer: "LULUS AKADEMI" }], instruction: "Ujian terakhir! Buktikan kamu sudah mahir memakai mouse dan keyboard!" }
    ]
  }
];
