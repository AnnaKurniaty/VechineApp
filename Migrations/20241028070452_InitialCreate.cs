using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Aplikasi_Data_Kendaraan.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kendaraans",
                columns: table => new
                {
                    NomorRegistrasi = table.Column<string>(type: "text", nullable: false),
                    NamaPemilik = table.Column<string>(type: "text", nullable: false),
                    Alamat = table.Column<string>(type: "text", nullable: false),
                    MerkKendaraan = table.Column<string>(type: "text", nullable: false),
                    TahunPembuatan = table.Column<int>(type: "integer", nullable: false),
                    KapasitasSilinder = table.Column<int>(type: "integer", nullable: false),
                    WarnaKendaraan = table.Column<string>(type: "text", nullable: false),
                    BahanBakar = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kendaraans", x => x.NomorRegistrasi);
                });
        }
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Kendaraans");
        }
    }
}
