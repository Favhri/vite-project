import React from 'react';
import Layout from '../../components/layout/Layout';

function New() {
  return (
    <Layout>
      <div className='mt-10 mb-10'>
        <h1 className='flex justify-center bold'>Data Ajax</h1>
        <p className='mt-10'>
          Menyimpan Data ke Database dengan AJAX. Untuk lebih memperjelas pemahaman anda bagaimana cara menyimpan data ke database dengan AJAX, anda akan diajak untuk berlatih. Pada latihan ini anda akan membuat sebuah form simpan satuan dan menyimpan data yang diinput oleh user dengan menggunakan Ajax. Pada contoh ini saya asumsikan anda memiliki sebuah tabel pada database anda dengan nama satuan dan dengan struktur seperti berikut: <code>DB = cafe_anisya</code>.
        </p>
        <h2>Langkah I: Membuat File Koneksi</h2>
        <p>
          Simpan dengan nama <code>koneksi.php</code>.
        </p>
        <h2>Langkah II: Membuat HTML Form</h2>
        <p>
          Pertama, buatlah sebuah dokumen baru dengan text editor anda, dan buat sebuah HTML form dengan script di bawah. Simpan dengan nama file <code>satuan.php</code> di direktori web server anda. Script di atas untuk membentuk sebuah form seperti berikut.
        </p>
        <h2>Langkah III: Membuat File JavaScript untuk Membentuk XMLHttpRequest</h2>
        <p>
          Langkah selanjutnya adalah membuat JavaScript untuk membentuk XMLHttpRequest dan membuat function untuk mengirim data ke server. Buat kembali dokumen baru dengan text editor anda dan ketik script berikut: Kemudian simpan dengan nama <code>ajax.js</code> di direktori yang sama dengan file <code>satuan.php</code> yang dibuat sebelumnya.
        </p>
        <h2>Langkah IV: Membuat handlePage dan Menyimpan Data</h2>
        <p>
          Setelah selesai dengan langkah I dan II, selanjutnya adalah membuat handlePage untuk menangani data yang dikirim dan menyimpan data yang dikirim ke database. Perlu anda ingat, walaupun sebelum data dikirim telah divalidasi dengan JavaScript, anda harus kembali melakukan validasi setelah data sampai di server dengan server-side scripting seperti PHP. Ingat, jangan pernah percaya kepada user anda dan jangan pernah percaya dengan apa yang diinputkan oleh user serta jangan percaya dengan apa yang dikirim oleh web browser anda. Sekarang buatlah sebuah dokumen baru dengan text editor dan ketikkan script berikut: Setelah selesai simpan dengan nama <code>save_data.php</code> di direktori yang sama dengan file <code>satuan.php</code>.
        </p>
        <h2>Langkah V: Finishing</h2>
        <p>
          Setelah selesai membuat ketiga file di atas, sekarang buka kembali file <code>contact.php</code> dan edit pada bagian yang diberi warna biru seperti berikut menjadi.
        </p>
      </div>
    </Layout>
  );
}

export default New;
