$(document).ready(function () {
    fetchKendaraans();

    function fetchKendaraans(searchParams = {}) {
        $.ajax({
            url: 'http://localhost:5127/api/kendaraan',
            method: 'GET',
            data: searchParams, // Kirim parameter pencarian ke server
            success: function (data) {
                $('#vehicle-table tbody').empty(); // Kosongkan tabel sebelum menambahkan data baru
                data.forEach(kendaraan => {
                    $('#vehicle-table tbody').append(`
                        <tr>
                            <td>${kendaraan.nomorRegistrasi}</td>
                            <td>${kendaraan.namaPemilik}</td>
                            <td>${kendaraan.alamat}</td>
                            <td>${kendaraan.merkKendaraan}</td>
                            <td>${kendaraan.tahunPembuatan}</td>
                            <td>${kendaraan.kapasitasSilinder} cc</td>
                            <td>${kendaraan.warnaKendaraan}</td>
                            <td>${kendaraan.bahanBakar}</td>
                            <td>
                                <button class="btn btn-warning" onclick="editKendaraan('${kendaraan.nomorRegistrasi}')">Edit</button>
                                <button class="btn btn-danger" onclick="deleteKendaraan('${kendaraan.nomorRegistrasi}')">Hapus</button>
                            </td>
                        </tr>
                    `);
                });
            },
            error: function () {
                alert('Gagal mengambil data kendaraan.');
            }
        });
    }

    // Event untuk tombol search
    $('#search-button').click(function () {
        const searchReg = $('#searchReg').val();
        const searchOwner = $('#searchOwner').val();
        const searchParams = {};

        if (searchReg) searchParams.nomorRegistrasi = searchReg;
        if (searchOwner) searchParams.namaPemilik = searchOwner;

        fetchKendaraans(searchParams); // Panggil fungsi dengan parameter pencarian
    });

    window.editKendaraan = function (nomorRegistrasi) {
        window.location.href = `edit_kendaraan.html?nomorRegistrasi=${nomorRegistrasi}`;
    };

    window.deleteKendaraan = function (nomorRegistrasi) {
        $.ajax({
            url: `http://localhost:5127/api/kendaraan/${nomorRegistrasi}`,
            method: 'DELETE',
            success: function () {
                alert('Kendaraan berhasil dihapus.');
                location.reload();
            },
            error: function () {
                alert('Terjadi kesalahan saat menghapus kendaraan.');
            }
        });
    };
});
