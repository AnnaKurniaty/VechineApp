$(document).ready(function () {
    $('#add-vehicle-form').on('submit', function (event) {
        event.preventDefault();

        const kendaraan = {
            nomorRegistrasi: $('#nomorRegistrasi').val(),
            namaPemilik: $('#namaPemilik').val(),
            alamat: $('#alamat').val(),
            merkKendaraan: $('#merkKendaraan').val(),
            tahunPembuatan: $('#tahunPembuatan').val(),
            kapasitasSilinder: $('#kapasitasSilinder').val(),
            warnaKendaraan: $('#warnaKendaraan').val(),
            bahanBakar: $('#bahanBakar').val()
        };

        $.ajax({
            url: 'http://localhost:5127/api/kendaraan',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(kendaraan),
            success: function () {
                alert('Kendaraan berhasil ditambahkan!');
                window.location.href = 'index.html';
            },
            error: function () {
                alert('Terjadi kesalahan saat menambahkan kendaraan.');
            }
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const nomorRegistrasi = urlParams.get('nomorRegistrasi');

    if (nomorRegistrasi) {
        $.ajax({
            url: `http://localhost:5127/api/kendaraan/${nomorRegistrasi}`,
            method: 'GET',
            success: function (kendaraan) {
                $('#nomorRegistrasi').val(kendaraan.nomorRegistrasi);
                $('#namaPemilik').val(kendaraan.namaPemilik);
                $('#alamat').val(kendaraan.alamat);
                $('#merkKendaraan').val(kendaraan.merkKendaraan);
                $('#tahunPembuatan').val(kendaraan.tahunPembuatan);
                $('#kapasitasSilinder').val(kendaraan.kapasitasSilinder);
                $('#warnaKendaraan').val(kendaraan.warnaKendaraan);
                $('#bahanBakar').val(kendaraan.bahanBakar);
            },
            error: function () {
                alert('Terjadi kesalahan saat mengambil data kendaraan.');
            }
        });
    }

    $('#edit-vehicle-form').on('submit', function (event) {
        event.preventDefault();

        const kendaraan = {
            nomorRegistrasi: $('#nomorRegistrasi').val(),
            namaPemilik: $('#namaPemilik').val(),
            alamat: $('#alamat').val(),
            merkKendaraan: $('#merkKendaraan').val(),
            tahunPembuatan: $('#tahunPembuatan').val(),
            kapasitasSilinder: $('#kapasitasSilinder').val(),
            warnaKendaraan: $('#warnaKendaraan').val(),
            bahanBakar: $('#bahanBakar').val()
        };

        $.ajax({
            url: `http://localhost:5127/api/kendaraan/${nomorRegistrasi}`,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(kendaraan),
            success: function () {
                alert('Kendaraan berhasil diperbarui!');
                window.location.href = 'index.html';
            },
            error: function () {
                alert('Terjadi kesalahan saat memperbarui kendaraan.');
            }
        });
    });
});
