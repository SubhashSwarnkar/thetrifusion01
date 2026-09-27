export const idService = {
  title:
    "Sistem manajemen pengisian kendaraan listrik (CMS) untuk CPO dan eMSP",
  metaTitle: "CMS pengisian EV untuk CPO dan eMSP | OCPP dan OCPI | TheTriFusion",
  description:
    "CMS pengisian untuk CPO dan eMSP, dibuat di Jaipur, India. Kami mengintegrasikan OCPP 1.6J/2.0.1 dan OCPI 2.2.1 dalam satu platform. Minta cakupan secara tertulis.",
  breadcrumb: "CMS pengisian EV",
  serviceType: "Sistem manajemen pengisian EV (CMS) untuk CPO dan eMSP",
  content: `
    <p>TheTriFusion, di Jaipur, membangun sistem manajemen pengisian untuk operator titik pengisian dan untuk penyedia layanan mobilitas listrik: OCPP menuju pengisi daya Anda, OCPI ketika ada roaming, dan satu CMS ketika Anda menjalankan keduanya. Tim mengirimkan pekerjaan dari jarak jauh di India dan di negara lain. Peta pengemudi yang tidak tersambung ke pengisi daya menjadi palsu begitu status konektor berubah. Sisi CPO pada CMS menghubungkan perangkat keras yang kompatibel dengan OCPP. Sisi eMSP menambahkan OCPI ketika pengemudi Anda memakai jaringan lain, atau ketika pengemudi jaringan lain memakai jaringan Anda. Aplikasi seluler dibahas di <a href="/services/mobile-app-development">pengembangan aplikasi seluler</a>. Layar, di <a href="/services/ui-ux-design">desain UI/UX</a>. Hosting dan pipeline, di <a href="/services/devops">DevOps dan cloud</a>. Jika pengisian adalah modul dari platform yang lebih luas, mulailah dari <a href="/services/software-development">pengembangan perangkat lunak khusus</a>. Tidak ada halaman IoT terpisah: konektivitas pengisi daya adalah bagian dari pekerjaan ini. Halaman ini tidak menjual paket tertutup.</p>

    <h2 id="cms-for-cpo-emsp">CMS untuk CPO dan eMSP: satu platform, dua peran</h2>
    <p>Sistem manajemen pengisian (CMS) adalah produk yang benar-benar dioperasikan sebuah jaringan. Di sisi operator titik pengisian, itu adalah CPMS; OCPP 2.0.1 menyebut server itu CSMS. Di sisi penyedia layanan mobilitas listrik, itu adalah platform tempat akun pengemudi berada. TheTriFusion membangun keduanya sebagai dua peran dalam satu CMS pengisian, bukan dua produk terpisah yang hanya berbagi logo.</p>
    <p>Anda bisa meluncurkan satu peran saja. CPO yang belum melakukan roaming tetap membutuhkan OCPP. eMSP yang tidak memiliki pengisi daya membutuhkan OCPI dan aplikasi pengemudi, bukan deretan perangkat keras. Perusahaan yang menjalankan keduanya menyimpan stasiun dan token pengemudi di CMS yang sama, sehingga peran kedua menjadi satu tahap, bukan penulisan ulang. Roaming dengan mitra adalah OCPI 2.2.1. Itu tidak sama dengan mengoperasikan hub roaming publik untuk semua jaringan di negara ini.</p>
    <h3 id="cpo-cms">CMS CPO (Charge Point Operator)</h3>
    <p>Perangkat lunak CPO adalah sistem manajemen stasiun yang Anda operasikan. Pengisi daya didaftarkan lewat OCPP 1.6J atau 2.0.1. Operator memulai dan menghentikan dari jarak jauh ketika firmware mengizinkannya, menyimpan nilai meter, dan melihat peringatan ketika Heartbeat terputus. Tarif tinggal di lokasi. Pengisian cerdas mengirim profil hanya jika pengisi daya menerimanya. Perintah firmware dan diagnostik dibatasi pada pesan yang model itu jawab dalam uji protokol. eMSP mitra, jika ada roaming, adalah bisnis yang kepadanya Anda menerbitkan lokasi. Itu bukan salinan kedua pengisi daya Anda.</p>
    <ul>
      <li>Pendaftaran pengisi daya lewat OCPP</li>
      <li>Mulai dan berhenti dari jarak jauh</li>
      <li>Firmware dan diagnostik untuk pesan yang pengisi daya terapkan</li>
      <li>Tarif per lokasi</li>
      <li>Pengelolaan beban dan pengisian cerdas di dalam batas lokasi</li>
      <li>Ketersediaan dan peringatan dari heartbeat serta status</li>
      <li>Lokasi yang Anda operasikan dan mitra yang diajak roaming</li>
      <li>Catatan penyelesaian dan kolom faktur GST (pelaporannya Anda yang ajukan)</li>
    </ul>
    <h3 id="emsp-cms">Platform eMSP (e-Mobility Service Provider)</h3>
    <p>Platform eMSP adalah pihak tempat pengemudi memiliki akun. Token aplikasi atau kartu RFID itulah yang mengotorisasi CPO mitra. OCPI 2.2.1 membawa lokasi, tarif, token, pembaruan sesi, dan catatan rincian pengisian (CDR) dari mitra itu. Harga yang disetujui pengemudi adalah harga di tanda terima. UPI dan kartu lewat gateway yang Anda kontrak. Saldo di aplikasi bisa membayar pengisian di platform Anda; jika saldo itu bisa ditarik, penasihat hukum Anda mengonfirmasi posisinya sebelum kami membentuknya. Dukungan melihat sesi dan CDR. Dukungan menjangkau pengisi daya mitra hanya lewat perintah OCPI yang mitra itu terapkan.</p>
    <ul>
      <li>Akun pengemudi</li>
      <li>Token aplikasi dan token RFID</li>
      <li>Roaming OCPI 2.2.1 menuju CPO mitra</li>
      <li>Otorisasi sesi dengan token yang mitra terima</li>
      <li>Harga dan penagihan kepada pengemudi</li>
      <li>UPI, kartu, dan saldo pengisian di aplikasi</li>
      <li>CDR untuk menyelesaikan pembayaran dengan CPO mitra</li>
      <li>Tampilan dukungan atas sesi, bukan tombol perangkat keras yang tersembunyi</li>
    </ul>
    <h3>CPO, eMSP, dan penyiapan gabungan</h3>
    <p>CMS yang sama bisa punya satu peran atau keduanya. Kolom ketiga adalah penyiapan gabungan dengan roaming. Ini bukan klaim bahwa kami mengoperasikan hub OCPI nasional.</p>
    <table>
      <thead>
        <tr><th>Pertanyaan</th><th>CMS CPO</th><th>Platform eMSP</th><th>CMS gabungan</th></tr>
      </thead>
      <tbody>
        <tr><td>Untuk siapa</td><td>Anda mengoperasikan pengisi daya</td><td>Melayani pengemudi, dengan merek Anda</td><td>Menjalankan keduanya, atau roaming dengan mitra</td></tr>
        <tr><td>Hubungan dengan pengisi daya</td><td>OCPP 1.6J dan 2.0.1 ke perangkat keras yang Anda operasikan</td><td>Tidak ada milik sendiri. CPO mitra yang menjalankan OCPP</td><td>OCPP di lokasi Anda</td></tr>
        <tr><td>Roaming</td><td>Opsional. Menerbitkan lokasi ketika eMSP harus melihatnya</td><td>OCPI 2.2.1 menuju CPO yang Anda tandatangani</td><td>Kedua arah, modul demi modul. Bukan hub publik otomatis</td></tr>
        <tr><td>Apa yang ditagih</td><td>Tarif lokasi, penyelesaian ke tuan rumah, kolom faktur GST</td><td>Harga untuk pengemudi, UPI atau kartu, CDR yang diterima</td><td>Tarif Anda plus CDR masuk dan keluar</td></tr>
        <tr><td>Versi pertama yang masuk akal</td><td>Pendaftaran, mulai dan berhenti jarak jauh, satu tarif</td><td>Akun, token, dan lokasi satu mitra</td><td>Satu peran dulu, kecuali penggalian kebutuhan mencakup keduanya</td></tr>
      </tbody>
    </table>

    <h2 id="cpms">Sistem manajemen pengisian, CPMS, dan CSMS</h2>
    <p>Perangkat lunak stasiun pengisian adalah sistem catatan untuk lokasi yang Anda operasikan. Charge point management system, disingkat CPMS, adalah produk itu: stasiun mana yang ada, konektor mana yang kosong, sesi mana yang berjalan, dan gangguan mana yang membutuhkan orang. OCPP 2.0.1 menyebut server itu Charging Station Management System (CSMS). OCPP 1.6 menyebutnya Central System. Pekerjaannya sama. Pengemudi tidak masuk ke CPMS. Operator yang masuk.</p>
    <p>CPMS yang berguna menyimpan stasiun sekali dan menampilkannya di mana-mana: peta pengemudi, tarif, faktur, dan catatan roaming jika lokasi itu diterbitkan. Kami memodelkan lokasi, pengisi daya, konektor, dan sesi sebagai catatan terpisah agar pengisi daya dua konektor tidak digabung menjadi satu pin. Nilai meter melekat pada sesi yang menghasilkannya. Tanpa potongan itu, penagihan dan laporan ketersediaan saling bertentangan.</p>

    <h2 id="ocpp-backend">Backend OCPP untuk 1.6J dan 2.0.1</h2>
    <p>Backend OCPP adalah server yang dihubungi pengisi daya. OCPP 1.6J adalah JSON di atas WebSocket. Pesan yang diandalkan operator adalah BootNotification, Heartbeat, StatusNotification, Authorize, StartTransaction, StopTransaction, MeterValues, RemoteStartTransaction, dan RemoteStopTransaction. Konfigurasi, pemicu firmware, dan profil pengisian ada di spesifikasi yang sama, dan setiap pengisi daya menerapkan sebagian saja. Kami mencatat subset mana yang dijawab setiap model.</p>
    <p>OCPP 2.0.1 bukan sekadar ganti nama dari 1.6. Versi itu memakai model perangkat, TransactionEvent sebagai ganti pasangan mulai dan selesai yang lama, serta opsi keamanan yang lebih kuat, termasuk koneksi bersertifikat. Itu juga jalur praktis ketika nanti Anda ingin pesan ISO 15118 lewat pengisi daya. Banyak pengisi daya yang sudah terpasang di India hanya berbicara 1.6J. Backend untuk armada campuran menerapkan keduanya dan menjaga model sesi yang sama, agar penagihan tidak bergantung pada protokol mana yang memulai aliran energi.</p>

    <h2 id="ocpi-roaming">Roaming OCPI 2.2.1</h2>
    <p>Roaming OCPI adalah cara dua perusahaan berbagi pengisian tanpa menggabungkan aplikasi mereka. OCPI 2.2.1, dipelihara oleh EVRoaming Foundation, adalah antarmuka antar bisnis, bukan antara pengisi daya dan server. Modul yang kami terapkan ketika masuk cakupan adalah credentials, locations, tariffs, tokens, commands, sessions, dan charge detail records (CDR). Profil pengisian ada di spesifikasi untuk batas pengisian cerdas pada sesi roaming. Kami menyalakan satu modul hanya ketika mitra benar-benar mendukungnya.</p>
    <p>Penerapan yang praktis adalah satu mitra, bukan hub teoretis untuk semua jaringan. Kredensial dipertukarkan, operator menerbitkan lokasi dan tarif, eMSP menampilkan pin itu di aplikasi pengemudi, sebuah token mengotorisasi pengemudi, dan CDR adalah catatan yang dipakai kedua pihak untuk menyelesaikan pembayaran. Penerapan sebagian itu hal yang biasa. Kami memisahkan modul agar mitra yang belum mengirim perintah tetap bisa menerbitkan lokasi. <a href="/blog/ev-charging-app-ocpi-ocpp-guide">Panduan OCPP dan OCPI</a> membahas potongan yang sama dengan lebih rinci.</p>

    <h2 id="ocpp-vs-ocpi">OCPP dan OCPI, dalam bahasa biasa</h2>
    <p>OCPP dan OCPI menyelesaikan hubungan yang berbeda, karena itu kedua nama muncul di pekerjaan aplikasi pengisian. OCPP (Open Charge Point Protocol) adalah pengisi daya yang berbicara dengan backend Anda: saya daring, konektor bersiap, mulai transaksi ini, ini nilai meternya, berhenti. Jika hubungan itu putus, perangkat keras bisa terus menyalurkan energi menurut aturan lokalnya, tetapi aplikasi tidak melihatnya dan tidak boleh berpura-pura pin itu masih hidup.</p>
    <p>OCPI (Open Charge Point Interface) adalah perusahaan Anda yang berbicara dengan perusahaan lain. Jawabannya: ini lokasi publik saya, ini harganya, token ini milik pengemudi Anda, sesi ini terjadi, CDR ini yang akan kita selesaikan. OCPI tidak menggantikan OCPP. Operator titik pengisian tetap membutuhkan OCPP, atau cloud pabrikan yang berbicara OCPP, untuk mengendalikan pengisi dayanya sendiri. eMSP tanpa pengisi daya bisa hanya membutuhkan OCPI, plus aplikasi pengemudi. Menaruh kedua protokol dalam satu kalimat di slide penjualan tidak menjadikannya satu integrasi.</p>

    <h2 id="emsp-cpo">Catatan CPO dan eMSP di CMS</h2>
    <p>CMS CPO dan platform eMSP di atas berbagi satu sistem manajemen, dan catatannya tetap terpisah. Stasiun, token pengemudi, dan sesi bukan tabel yang sama. Sisi CPO menyimpan koneksi OCPP, tarif lokasi, dan tiket gangguan. Sisi eMSP menyimpan akun pengemudi, cara bayar, dan faktur yang diterima pengemudi. Banyak jaringan mulai dengan satu peran saja.</p>
    <p>Kami menjaga peran itu di model data meskipun versi pertama hanya punya satu merek. Pengemudi, token, sesi, dan stasiun tidak seharusnya menjadi tabel yang sama. Jika nanti ada roaming, sisi eMSP sudah tahu cara menyimpan token yang tidak terikat pada pengisi daya Anda, dan sisi CPO sudah tahu cara menerima token yang tidak lahir di aplikasi Anda. Ini keputusan struktur pada hari pertama, bukan penulisan ulang pada hari ke-200.</p>

    <h2 id="driver-app">Aplikasi pengemudi untuk iOS dan Android</h2>
    <p>Aplikasi pengemudi adalah peta, sesi, dan tanda terima. Di iOS dan Android kami menampilkan pengisi daya yang benar-benar dikenal backend, dengan filter yang dipakai pengemudi di India: konektor, rentang daya, dan apakah konektor tersedia. Pin tanpa status yang segar diberi label heartbeat terakhir, tidak digambar sebagai kosong. Navigasi diserahkan ke aplikasi peta yang sudah ada di ponsel. Kami tidak mengarang lapisan lalu lintas.</p>
    <p>Memulai sesi bisa lewat mulai jarak jauh di aplikasi, kode QR yang mengidentifikasi konektor, atau kartu RFID yang diotorisasi pengisi daya lewat OCPP. Reservasi masuk hanya ketika pengisi daya itu menerapkannya. Banyak unit 1.6J tidak melakukannya. Pembayaran adalah UPI, kartu, atau saldo di aplikasi, lewat gateway yang Anda kontrak. Kami mengintegrasikan gateway. Kami bukan perusahaan pembayaran dan tidak memegang lisensi instrumen prabayar atas nama Anda. Jika saldo yang tersimpan bisa ditarik atau dibelanjakan di luar pengisian, penasihat Anda mengonfirmasi posisi RBI sebelum dompet itu dibentuk. Alur layar dirancang dengan ketelitian yang sama seperti pekerjaan <a href="/services/ui-ux-design">UI/UX</a> kami, dan build toko mengikuti <a href="/services/mobile-app-development">pengembangan aplikasi seluler</a>.</p>

    <h2 id="operator-dashboard">Panel operator CMS</h2>
    <p>Panel administrasi dan operasi adalah aplikasi web, bukan layar ponsel yang diregangkan. Operasional melihat konektor mana yang gagal. Keuangan melihat sesi mana yang punya CDR dan pembayaran mana yang masih terbuka. Tuan rumah lokasi, seperti mal atau hotel, bisa dibatasi pada lokasinya sendiri. Kantor pusat melihat jaringan. Itu peran, bukan tiga produk.</p>
    <p>Di halaman pengisi daya kami menaruh tindakan yang didukung protokol: mulai jarak jauh, berhenti jarak jauh, mulai ulang ketika pengisi daya menerapkannya, dan perubahan konfigurasi yang tercatat. Tindakan yang tidak didukung firmware disembunyikan, tidak ditampilkan sebagai tombol yang gagal di depan pelanggan. Ekspor mencakup sesi dan faktur untuk akuntan. Panel tidak menggantikan pembukuan Anda.</p>

    <h2 id="smart-charging">Pengelolaan beban dan pengisian cerdas</h2>
    <p>Pengelolaan beban dan pengisian cerdas menjaga satu lokasi tetap di dalam daya yang diizinkan desain listrik. Masukannya adalah batas yang dinyatakan teknisi listrik atau tim instalasi untuk sebuah panel, penyulang, atau lokasi. Backend melihat sesi yang aktif dan mengirim profil pengisian OCPP, pada 1.6J lewat SetChargingProfile ketika pengisi daya mendukungnya, agar jumlah batas konektor tetap di bawah pagu itu. Jika sebuah pengisi daya mengabaikan profil, kami mengatakannya pada uji perangkat keras. Kami tidak berpura-pura kendali perangkat lunak bisa mengalahkan pemutus arus.</p>
    <p>Pengisian cerdas di sini bukan janji perdagangan dengan pasar listrik. API tanggap permintaan dari utilitas adalah integrasi lain, masuk cakupan hanya ketika Anda punya kontrak itu dan dokumen yang bisa kami baca. Untuk sebuah gedung, versi yang berguna lebih tenang: menjeda atau menurunkan sesi yang bisa menunggu, dan membiarkan sesi tetap ketika pengemudi atau aturan armada mengatakan sesi itu tidak bisa menunggu. Aturannya tertulis. Bukan skor tersembunyi.</p>

    <h2 id="hardware-integration">Integrasi perangkat keras yang kompatibel dengan OCPP</h2>
    <p>Mengintegrasikan perangkat keras yang kompatibel dengan OCPP berarti pengisi daya berbicara OCPP 1.6J atau 2.0.1 cukup dekat untuk mulai, mengotorisasi, mengukur, dan berhenti. Nama merek bukan daftar kompatibilitas. Dua unit dari pabrikan yang sama bisa keluar dengan firmware berbeda. Kami meminta model, versi OCPP, dan cara menjangkau pengisi daya fisik atau simulator pabrikan yang cocok dengan firmware itu. Ujinya mengikuti skenario: boot, heartbeat, authorize, start, nilai meter, stop, dan perintah jarak jauh yang dibutuhkan pada hari pertama.</p>
    <p>Konektor adalah pertanyaan lain, terpisah dari protokol. Pengisi daya mobil yang lebih baru di India biasanya memakai Type 2 pada arus bolak-balik dan CCS2 pada arus searah. Lokasi publik yang lebih lama bisa masih memakai Bharat AC-001 atau Bharat DC-001. AC-001 adalah spesifikasi publik arus bolak-balik dengan tiga keluaran 230 V, sekitar 3,3 kW masing-masing, dan konektor IEC 60309. DC-001 adalah spesifikasi arus searah tegangan rendah untuk paket sekitar 48 V, 60 V, dan 72 V, kisaran 15 kW, dengan OCPP menuju sistem manajemen pada pengisi daya yang dibangun menurut spesifikasi itu. Kami menampilkan konektor yang dilaporkan perangkat keras. Kami tidak menggambar pin CCS2 pada soket Bharat AC. Konektivitas pengisi daya adalah bagian IoT dari pekerjaan ini. Bagian itu ada di halaman ini, bukan di produk IoT terpisah.</p>

    <h2 id="billing-tariffs">Penagihan, tarif, dan faktur GST</h2>
    <p>Penagihan berangkat dari tarif yang bisa dijelaskan seseorang. Unsur yang kami modelkan adalah energi (per kWh), waktu (per menit selama mengisi), biaya tetap per sesi, dan biaya menganggur ketika pengisian selesai tetapi kendaraan masih menempati konektor. Satu lokasi bisa punya lebih dari satu tarif menurut jam. Harga yang dilihat pengemudi saat mulai adalah harga di tanda terima, kecuali Anda menulis aturan lain. Modul tarif OCPI adalah cara harga itu diterbitkan ke mitra roaming. Bukan harga rahasia kedua.</p>
    <p>Menagih dengan GST berarti dokumen bisa memuat GSTIN Anda, tempat penyerahan, SAC, nilai kena pajak, dan rincian pajak yang ditunjukkan akuntan Anda. Kami tidak memilih tarif pajak Anda dan tidak menyampaikan laporan. Operator tetap bertanggung jawab atas pendaftaran dan pelaporan. Penyelesaian kepada tuan rumah lokasi, seperti hotel atau mal, adalah pembagian yang Anda tetapkan di kontrak. Perangkat lunak mencatat pembagian itu. Ia tidak menggantikan kontrak. Rentang awal MVP yang dipublikasikan ada di <a href="/pricing">halaman harga</a>. Itu bukan tarif listrik.</p>

    <h2 id="fleet-charging">Pengisian armada</h2>
    <p>Pengisian armada lebih sering soal depo daripada peta publik. Kendaraannya dikenal, lokasinya privat atau dibagi dengan pemilik sewa, dan pertanyaannya kendaraan mana yang harus berangkat pada jam berapa. Kami mengikat RFID atau catatan kendaraan ke sesi agar energi dilaporkan per kendaraan, bukan hanya per konektor. Petugas operasional bisa menandai prioritas keberangkatan. Pengelolaan beban lalu mengutamakan bus atau van yang harus bergerak, dan menurunkan yang bisa menunggu, di dalam batas panel.</p>
    <p>Armada bisa memakai CPMS yang sama dengan lokasi publik. Pin publik tidak diterbitkan untuk depo, atau hanya diterbitkan pada jalur yang Anda tandai sebagai publik. Pengemudi mobil bersama bisa memakai aplikasi yang sama dengan grup yang tidak melihat harga publik. Kami tidak menganggap armada menginginkan OCPI pada hari pertama. Roaming bisa menunggu sampai ada kendaraan yang mengisi di luar depo.</p>

    <h2 id="white-label">CMS pengisian EV white-label</h2>
    <p>CMS pengisian white-label adalah nama Anda di daftar toko, warna Anda, alamat dukungan Anda, dan domain Anda di panel. Perilaku protokol tidak berubah karena logo berubah. Kami tetap perlu tahu pengisi daya milik siapa, gateway pembayaran milik siapa, dan GSTIN faktur milik siapa. White-label adalah pilihan merek dan penerbitan. Bukan jalan pintas untuk melewati uji OCPP.</p>
    <p>Agensi yang ingin kami membangun di bawah hubungan dengan klien mereka juga bisa memakai pekerjaan <a href="/white-label-development">pengembangan white-label</a>. Di halaman ini produknya adalah tumpukan pengisian. Anda menerima repositori aplikasi dan backend yang disebut dalam cakupan. Kami tidak menyimpan kunci produksi yang tersembunyi. Kebijakan App Store dan Play tetap berlaku bagi badan hukum yang menerbitkan aplikasi.</p>

    <h2 id="plug-and-charge">ISO 15118 dan persiapan Plug &amp; Charge</h2>
    <p>ISO 15118 adalah standar komunikasi antara kendaraan dan pengisi daya. Plug &amp; Charge adalah kasus ketika mobil menyajikan sertifikat kontrak dan sesi bisa mulai tanpa ketukan di aplikasi maupun kartu RFID, ketika mobil, pengisi daya, dan ekosistem sertifikat mendukungnya. OCPP 2.0.1 adalah jalur backend yang mengangkut pertukaran itu lebih lengkap daripada 1.6J. Persiapan berarti menyisakan tempat di model data untuk kontrak dan status sertifikat, dan tidak mengecat produk di sudut yang hanya memahami token aplikasi.</p>
    <p>Persiapan bukan jaringan Plug &amp; Charge yang sudah hidup. Kami tidak mengoperasikan infrastruktur kunci publik kendaraan-ke-jaringan, dan tidak mengklaim mobil Anda yang sekarang akan tertancap lalu langsung jalan tanpa langkah lain. Itu bergantung pada kendaraan, firmware pengisi daya, dan sertifikat kontrak yang berhak Anda terbitkan atau beli. Ketika ketiga hal itu ada, pekerjaan OCPP 2.0.1 dalam cakupan itulah yang kami sambungkan. Sampai semuanya ada, pengemudi memulai dengan aplikasi, QR, atau RFID.</p>

    <h2 id="analytics">Analitik pengisian</h2>
    <p>Analitik jaringan kendaraan listrik bersifat operasional, bukan dasbor pamer. Angka yang mengubah keputusan adalah sesi yang dimulai, sesi yang menyalurkan energi, kWh per lokasi dan konektor, waktu sebuah konektor dalam keadaan gagal, dan pendapatan per tarif. Ketersediaan diturunkan dari heartbeat dan pemberitahuan status. Jika pengisi daya berhenti mengirim heartbeat, grafik harus menunjukkan celah, bukan garis datar yang terlihat sehat.</p>
    <p>Kami tidak menerbitkan persentase acuan jaringan Anda sebelum jaringan itu ada, dan tidak mengarang rata-rata industri di halaman ini. Filter mencakup lokasi, konektor, dan hari. Ada ekspor agar keuangan merekonsiliasi pembayaran di luar alat ini. Peta India dengan permintaan yang ditebak bukan fitur analitik. Jika nanti Anda menginginkan model di atas riwayat sesi yang nyata, itu percakapan lain tentang <a href="/services/software-development">perangkat lunak khusus</a> dengan data yang benar-benar Anda miliki.</p>

    <h2 id="india-context">Perangkat lunak pengisian EV untuk India</h2>
    <p>Konteks India muncul di daftar konektor, cara bayar, dan faktur, bukan di foto stok sebuah kota. Lokasi publik dan armada di sini campur. Mobil semakin sering mengisi di Type 2 dan CCS2. Sepeda motor dan kendaraan roda tiga masih menemukan peralatan Bharat AC-001 dan Bharat DC-001. Aplikasi harus menyaring menurut konektor yang bisa dipakai kendaraan. Pengemudi mobil tidak boleh diarahkan ke jalur arus searah tegangan rendah. Pengendara sepeda motor tidak boleh diarahkan hanya ke konektor CCS2.</p>
    <p>Pembayaran di India berarti UPI adalah pilihan kelas satu di samping kartu, lewat gateway yang Anda kontrak. Faktur membutuhkan kolom GST, seperti diuraikan di bagian penagihan. Kami tidak menyebut jumlah resmi stasiun, subsidi, atau tarif pajak di halaman ini. Angka itu berubah, dan itu bukan produk kami. Tim yang membangun perangkat lunak ada di Jaipur. Pengiriman dilakukan dari jarak jauh untuk seluruh India lainnya dan untuk tim di luar India. Pengisi daya Anda tetap harus bisa dijangkau backend, di mana pun lokasinya.</p>

    <h2 id="who-its-for">Untuk siapa sistem manajemen pengisian ini</h2>
    <p>Operator titik pengisian datang ketika cloud pabrikan terlalu tertutup, atau ketika beberapa merek pengisi daya harus hidup dalam satu CPMS. eMSP datang ketika mereka menginginkan aplikasi pengemudi dan OCPI menuju jaringan yang tidak mereka miliki. Armada datang karena tampilan depo, identitas kendaraan, dan prioritas keberangkatan. Perangkat lunaknya satu keluarga komponen. Versi pertamanya tidak sama.</p>
    <p>Properti dan mal biasanya menampung pengisi daya, bukan berubah menjadi eMSP nasional. Mereka membutuhkan panel tingkat lokasi, cara pengunjung membayar, dan catatan penyelesaian untuk operator atau merek pengisi daya. Hotel serupa, dengan pertanyaan tambahan apakah menginap harus masuk ke tagihan kamar atau ke pembayaran UPI langsung. Startup datang karena produk white-label yang bisa mereka bawa ke pasar dengan nama mereka. Kami akan mengatakan jika brief-nya hanya situs pemasaran. Pekerjaan itu milik pengembangan situs, bukan di sini.</p>

    <h2 id="cost-and-timeline">Apa yang mengubah biaya dan jangka waktu</h2>
    <p>Biaya mengikuti cakupan. Aplikasi pengemudi di atas jaringan yang sudah ada lebih kecil daripada CPMS plus OCPP untuk beberapa model pengisi daya plus OCPI dengan lebih dari satu mitra. Faktor lain adalah iOS dan Android bersama-sama, panel operator, UPI dan kartu, kedalaman faktur GST, aturan armada, pengelolaan beban, publikasi toko white-label, dan apakah persiapan ISO 15118 masuk fase pertama atau sesudahnya. Perangkat keras yang tidak bisa kami jangkau, atau cloud pabrikan yang tidak membuka OCPP, menambah waktu yang tidak bisa dipadatkan dengan lebih banyak layar.</p>
    <p><a href="/pricing">Halaman harga</a> menerbitkan rentang awal ₹4,50,000, belum termasuk GST, setelah penggalian kebutuhan. Label di halaman itu adalah MVP eMSP atau CPO dengan peta langsung, sesi pengisian, dan OCPP/OCPI. Angka itu rentang awal, bukan paket yang bisa dipesan tanpa perubahan. <a href="/blog/ev-charging-app-ocpi-ocpp-guide">Panduan teknis</a> kami menggambarkan CSMS pertama dan aplikasi pengemudi, segelintir model pengisi daya, serta satu metode pembayaran sebagai pekerjaan yang sering memakan waktu 10–14 minggu ketika akses dan perangkat keras sudah siap. Aplikasi eMSP tanpa pengisi daya sendiri bisa lebih singkat. Penerapan banyak model plus roaming lebih lama. Kami tidak mengunci jumlah minggu pada surel pertama.</p>

    <h2 id="ev-first-release">Apa yang biasanya termasuk dalam versi pertama pengisian EV</h2>
    <p>Versi pertama adalah sistem terkecil yang bisa dipakai pengemudi sungguhan dan operator sungguhan. Harganya ditawar. Bukan paket gratis dan bukan katalog roaming yang lengkap.</p>
    <ul>
      <li><strong>Satu koneksi pengisi daya yang nyata:</strong> OCPP 1.6J atau 2.0.1 terhadap firmware yang akan dipasang, bukan slide logo.</li>
      <li><strong>Satu jalur pengemudi:</strong> peta, status, mulai, berhenti, dan tanda terima di iOS, Android, atau platform yang Anda pilih lebih dulu.</li>
      <li><strong>Satu jalur operator:</strong> status pengisi daya, daftar sesi, dan gangguan yang bisa dilihat seseorang.</li>
      <li><strong>Satu cara bayar:</strong> UPI atau kartu lewat gateway Anda, atau satu metode yang sudah Anda operasikan.</li>
      <li><strong>Satu tarif:</strong> harga yang bisa dibaca pengemudi sebelum sesi dimulai.</li>
      <li><strong>Catatan serah terima:</strong> cara menambah pengisi daya, siapa yang memegang akun, dan cara membaca gagal mulai.</li>
    </ul>
    <p>Mitra OCPI, model pengisi daya tambahan, prioritas armada, dan persiapan Plug &amp; Charge adalah fase berikutnya, kecuali penggalian kebutuhan memasukkannya ke cakupan pertama. Minta cakupan itu di formulir kontak.</p>

    <h2 id="process">Bagaimana proyek sistem manajemen pengisian berjalan</h2>
    <ol>
      <li><strong>Penggalian kebutuhan.</strong> Kami mencatat peran yang Anda mainkan: CPO, eMSP, armada, tuan rumah lokasi, atau campuran. Kami mendaftar model pengisi daya, versi OCPP, apakah sudah ada cloud pabrikan di tengah, dan apakah pembayaran serta faktur GST masuk versi pertama. Anda menerima cakupan, bukan slogan.</li>
      <li><strong>Uji protokol.</strong> Satu pengisi daya, atau simulator yang cocok dengan firmware Anda, menyelesaikan boot, authorize, start, nilai meter, dan stop. Perintah jarak jauh untuk hari pertama masuk uji yang sama. Model yang gagal keluar dari janji.</li>
      <li><strong>Desain produk.</strong> Alur pengemudi dan panel operator digambar sebelum build melebar. Filter konektor, status kesalahan, dan harga yang ditampilkan sebelum mulai adalah bagian desain, bukan polesan di akhir. UI/UX dan rekayasa ada di tim yang sama.</li>
      <li><strong>Pembangunan.</strong> Backend, aplikasi, tarif, dan panel dibangun terhadap uji protokol. Sesi menyimpan energi dan uang sebagai fakta terpisah. Ada lingkungan uji sementara pekerjaan berjalan.</li>
      <li><strong>Penerapan perangkat keras dan roaming.</strong> Model pengisi daya lain mengulang uji protokol. OCPI, jika masuk cakupan, dimulai dengan satu mitra dan modul yang mitra itu terapkan. Kami tidak membuka semua modul pada hari pertama.</li>
      <li><strong>Peluncuran dan serah terima.</strong> Daftar toko, backend yang diawasi, dan catatan untuk menambah lokasi. Akun dan repositori tercatat atas nama Anda. Hosting berkelanjutan bisa berpindah ke DevOps dan cloud, atau tim Anda mengoperasikan apa yang kami serahkan.</li>
    </ol>

    <h2 id="tech-stack">Tumpukan teknis CMS pengisian EV</h2>
    <p>OCPP 1.6J, OCPP 2.0.1, OCPI 2.2.1, WebSockets, React Native, Node.js, PostgreSQL, Redis, MQTT, persiapan ISO 15118, UPI, QR, dan RFID. Tumpukan dikonfirmasi dalam cakupan. Ini bukan daftar logo yang menjanjikan kompatibilitas.</p>

    <h2>Mengapa tim ini</h2>
    <ul>
      <li><strong>Berbasis di Jaipur.</strong> Orang yang merancang aplikasi dan backend OCPP ada di Jaipur, Rajasthan. Ada percakapan dengan nama. Pengiriman dilakukan dari jarak jauh di India dan di negara lain.</li>
      <li><strong>Tumpukan lengkap, satu tim.</strong> Aplikasi pengemudi, panel operator, dan backend pengisian dibangun bersama. Pekerjaan protokol tidak diserahkan ke kelompok tanpa nama.</li>
      <li><strong>Satu produk hidup yang bisa dibuka.</strong> PlugOne adalah produk pengisian yang kami kirim. Anda bisa membuka plugone.in dan studi kasusnya. Kami tidak menempelkan angka pemakaian yang dikarang.</li>
      <li><strong>Cakupan sebelum membangun.</strong> Anda menerima cakupan tertulis setelah penggalian kebutuhan. Halaman harga menunjukkan rentang awal. Halaman ini tidak berpura-pura rentang itu adalah paket tertutup.</li>
    </ul>
    <p>Produk yang hidup: <a href="https://plugone.in/" target="_blank" rel="noopener noreferrer">plugone.in</a> dan <a href="/portfolio/plugone-ev-charging-platform">studi kasus PlugOne</a>. Panduan: <a href="/blog/ev-charging-app-ocpi-ocpp-guide">OCPP dan OCPI</a>.</p>

    <h2 id="faq">Pertanyaan yang sering diajukan (FAQ)</h2>
    <h3>Apa itu CMS untuk CPO?</h3>
    <p>CMS untuk CPO (charge point operator) adalah perangkat lunak yang mengoperasikan pengisi daya yang Anda operasikan. Tim juga menyebutnya CPMS, dan OCPP 2.0.1 menyebut server itu CSMS. Ia mendaftarkan pengisi daya lewat OCPP, menampilkan status konektor, mengirim mulai dan berhenti jarak jauh, menyimpan nilai meter, menyimpan tarif, dan mengangkat peringatan ketika heartbeat terputus. Dengan sendirinya ia tidak membuat pengemudi Anda bisa memakai pengisi daya perusahaan lain. Hubungan itu adalah OCPI, di sisi eMSP.</p>
    <h3>Apa itu platform eMSP, dan apa bedanya dengan CMS CPO?</h3>
    <p>Platform eMSP adalah produk tempat pengemudi berada: akun, token aplikasi atau RFID, harga, pembayaran, dan faktur. CMS CPO adalah produk tempat pengisi daya berada. eMSP menjangkau pengisi daya mitra lewat OCPI 2.2.1 (lokasi, token, sesi, dan catatan rincian pengisian). CPO menjangkau perangkat kerasnya sendiri lewat OCPP 1.6J atau 2.0.1. Keduanya bisa hidup dalam satu sistem manajemen pengisian. Bukan layar yang sama.</p>
    <h3>Bisakah satu CMS melayani peran CPO dan eMSP?</h3>
    <p>Ya. Stasiun dan token pengemudi tetap catatan terpisah, sehingga CMS pengisian bisa mengoperasikan pengisi daya Anda dan juga membiarkan pengemudi Anda roaming di CPO mitra. Anda tidak harus meluncurkan kedua peran pada hari pertama. Roaming tetap membutuhkan mitra yang menerapkan modul OCPI yang Anda pakai. CMS gabungan tidak otomatis menjadi hub roaming publik.</p>
    <h3>Apakah Anda menawarkan CMS pengisian EV white-label?</h3>
    <p>Ya. White-label berarti merek Anda, akun toko Anda, domain Anda, dan gateway pembayaran Anda di atas CMS. Uji OCPP dan OCPI tidak berubah karena logo berubah. Anda menerima repositori yang disebut dalam cakupan. Halaman ini tidak menjual paket tertutup. Halaman harga mencantumkan rentang awal untuk MVP.</p>
    <h3>Berapa biaya mengembangkan aplikasi pengisian EV di India?</h3>
    <p>Halaman harga menerbitkan rentang awal ₹4,50,000, belum termasuk GST, setelah penggalian kebutuhan. Label rentang itu adalah MVP eMSP atau CPO dengan peta langsung, sesi pengisian, dan OCPP/OCPI. Itu rentang awal, bukan paket tertutup. Biaya bergerak menurut aplikasi pengemudi dibanding sistem manajemen titik pengisian yang utuh, OCPP 1.6J dan 2.0.1, roaming OCPI, berapa model pengisi daya yang harus diuji, pembayaran UPI dan kartu, faktur GST, aturan armada, dan apakah Anda mengirim iOS dan Android bersama-sama. Kami mengirim cakupan tertulis sebelum membangun.</p>
    <h3>Apa itu OCPP?</h3>
    <p>OCPP adalah Open Charge Point Protocol. Itulah cara pengisi daya kendaraan listrik berbicara dengan backend pusat. Versi 1.6J adalah JSON di atas WebSocket dan mencakup boot, heartbeat, authorize, start, nilai meter, dan stop. Versi 2.0.1 memakai model perangkat dan TransactionEvent, dan merupakan jalur terbaik ketika nanti Anda membutuhkan pesan ISO 15118. OCPP, dengan sendirinya, tidak membuat dua perusahaan bisa roaming di jaringan satu sama lain.</p>
    <h3>Apa beda OCPP dan OCPI?</h3>
    <p>OCPP menghubungkan pengisi daya dengan backend Anda agar Anda melihat status serta memulai atau menghentikan sesi. OCPI menghubungkan bisnis Anda dengan bisnis pengisian lain untuk bertukar lokasi, tarif, token, sesi, dan catatan rincian pengisian. Operator titik pengisian biasanya membutuhkan OCPP untuk perangkat kerasnya sendiri. eMSP yang tidak punya pengisi daya bisa hanya membutuhkan OCPI. Keduanya bukan pengganti.</p>
    <h3>Bisakah Anda mengintegrasikan merek pengisi daya apa pun?</h3>
    <p>Kami mengintegrasikan pengisi daya yang berbicara OCPP 1.6J atau 2.0.1 cukup dekat untuk mulai, mengotorisasi, mengukur, dan berhenti. Logo merek bukan daftar kompatibilitas, karena firmware berubah di dalam satu merek. Penggalian kebutuhan mencakup uji protokol atas model yang akan dipasang. Jika cloud pabrikan tidak membuka OCPP, kami mengatakannya dan tidak berpura-pura aplikasi bisa mengendalikan perangkat keras itu.</p>
    <h3>Apakah Anda membangun aplikasi pengisian EV white-label?</h3>
    <p>Ya. Build white-label memakai merek Anda, akun toko Anda, domain Anda, dan gateway pembayaran Anda. Uji OCPP atau OCPI sama seperti build satu merek. Anda menerima repositori yang disebut dalam cakupan. Penerbitan tetap mengikuti aturan App Store dan Play untuk badan hukum di daftar toko.</p>
    <h3>Apa itu CPMS atau charge point management system?</h3>
    <p>CPMS adalah perangkat lunak operator untuk stasiun: lokasi, pengisi daya, konektor, sesi, gangguan, dan tarif. OCPP 2.0.1 menyebut sisi server CSMS, dan OCPP 1.6 menyebutnya Central System. Pengemudi memakai aplikasi seluler. Operator memakai CPMS. Kami membangun keduanya ketika cakupan mencakup keduanya.</p>
    <h3>Apakah Anda membangun perangkat lunak eMSP dan CPO?</h3>
    <p>Ya, termasuk perusahaan yang menjalankan keduanya. Sisi CPO adalah CPMS dan koneksi OCPP. Sisi eMSP adalah akun pengemudi, token, aplikasi, dan faktur. Model data menjaga peran itu terpisah agar roaming tidak menuntut penulisan ulang.</p>
    <h3>Berapa lama pengembangan aplikasi pengisian EV?</h3>
    <p>Panduan teknis kami menggambarkan CSMS pertama dan aplikasi pengemudi, segelintir model pengisi daya, serta satu metode pembayaran sebagai pekerjaan yang sering memakan waktu 10–14 minggu ketika akses ke perangkat keras sudah siap. Aplikasi eMSP yang tidak memiliki pengisi daya bisa lebih singkat. Beberapa model pengisi daya plus OCPI dengan lebih dari satu mitra lebih lama. Kami tidak menjanjikan jumlah minggu sebelum penggalian kebutuhan.</p>
    <h3>Apa itu roaming OCPI?</h3>
    <p>Roaming OCPI memungkinkan pengemudi satu jaringan memakai pengisi daya jaringan lain, dengan catatan yang bisa diselesaikan kedua perusahaan. Modul OCPI 2.2.1 mencakup credentials, locations, tariffs, tokens, commands, sessions, dan charge detail records. Kami mulai dengan satu mitra dan modul yang mitra itu terapkan, bukan menganggap semua jaringan berbicara spesifikasi lengkap.</p>
    <h3>Bisakah aplikasi pengemudi memakai UPI, kartu, RFID, dan QR?</h3>
    <p>Ya, ketika masuk cakupan. UPI dan kartu lewat gateway pembayaran yang Anda kontrak. Kami penyedia perangkat lunak, bukan lembaga pembayaran. RFID adalah label identifikasi OCPP yang diotorisasi pengisi daya. Kode QR mengidentifikasi konektor agar aplikasi meminta mulai jarak jauh. Saldo di aplikasi yang hanya dipakai untuk mengisi bisa dibangun; jika saldo itu bisa ditarik, penasihat Anda lebih dulu mengonfirmasi posisi regulasi.</p>
    <h3>Apakah Anda mendukung ISO 15118 Plug &amp; Charge?</h3>
    <p>Kami bisa menyiapkan backend untuk ISO 15118 Plug &amp; Charge di atas OCPP 2.0.1, termasuk tempat untuk otorisasi berdasarkan kontrak. Kami tidak mengklaim jaringan Plug &amp; Charge yang sudah hidup, dan tidak mengoperasikan otoritas sertifikat kendaraan. Sampai mobil, pengisi daya, dan sertifikat kontrak ada, pengemudi memulai dengan aplikasi, QR, atau RFID.</p>
    <h3>Apakah Anda hanya bekerja di Jaipur?</h3>
    <p>Tim berbasis di Jaipur, Rajasthan. Proyek dikirim dari jarak jauh di India dan di negara lain. Lokasi pengisi daya bisa di mana saja selama perangkat keras menjangkau backend. Lokasi Anda bisa mengubah wilayah cloud yang kami rekomendasikan. Itu tidak mengubah siapa yang membangun perangkat lunak.</p>
  `,
};
