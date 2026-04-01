function kirimData(event) {
    event.preventDefault();

    var nama = document.getElementById("namaKucing").value;
    var nim = document.getElementById("nim").value;
    var angkatan = document.getElementById("angkatan").value;
    var peminatan = document.querySelector("input[name=warna]:checked");
    var tanggal = document.getElementById("tanggalLahir").value;
    var alamat = document.getElementById("deskripsi").value;

    // validasi
    if (!nama || !nim || !angkatan || !peminatan || !tanggal || !alamat) {
        alert("Mohon lengkapi semua data.");
        return;
    }

    var nilaiPeminatan = peminatan.value;

    alert(
        "Nama : " + nama +
        "\nNIM : " + nim +
        "\nAngkatan : " + angkatan +
        "\nPeminatan : " + nilaiPeminatan +
        "\nTanggal : " + tanggal +
        "\nAlamat : " + alamat
    );

    clearForm();
}

function clearForm() {
    document.getElementById("namaKucing").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("angkatan").value = "";
    document.getElementById("tanggalLahir").value = "";
    document.getElementById("deskripsi").value = "";

    var radioButtons = document.querySelectorAll('input[name="warna"]');
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}