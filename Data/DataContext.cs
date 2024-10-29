using Aplikasi_Data_Kendaraan.Models;
using Microsoft.EntityFrameworkCore;

namespace Aplikasi_Data_Kendaraan.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Kendaraan> Kendaraans { get; set; }
    }
}
