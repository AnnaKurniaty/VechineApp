﻿using System.ComponentModel.DataAnnotations;

namespace Aplikasi_Data_Kendaraan.Models
{
    public class Kendaraan
    {
        [Key]
        public string? NomorRegistrasi { get; set; }

        [Required]
        public string? NamaPemilik { get; set; }

        public string? Alamat { get; set; }

        public string? MerkKendaraan { get; set; }

        [Range(1900, 2100)]
        public int TahunPembuatan { get; set; }

        public int KapasitasSilinder { get; set; }

        public string? WarnaKendaraan { get; set; }

        public string? BahanBakar { get; set; }
    }
}
