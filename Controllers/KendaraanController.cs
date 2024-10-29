using Aplikasi_Data_Kendaraan.Data;
using Aplikasi_Data_Kendaraan.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aplikasi_Data_Kendaraan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KendaraanController : ControllerBase
    {
        private readonly DataContext _context;

        public KendaraanController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Kendaraan>>> GetKendaraans(string? nomorRegistrasi, string? namaPemilik)
        {
            var query = _context.Kendaraans.AsQueryable();

            if (!string.IsNullOrEmpty(nomorRegistrasi))
            {
                query = query.Where(k => k.NomorRegistrasi.ToLower().Contains(nomorRegistrasi.ToLower()));
            }

            if (!string.IsNullOrEmpty(namaPemilik))
            {
                query = query.Where(k => k.NamaPemilik.ToLower().Contains(namaPemilik.ToLower()));
            }

            return await query.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Kendaraan>> GetKendaraan(string id)
        {
            var kendaraan = await _context.Kendaraans.FindAsync(id);

            if (kendaraan == null)
            {
                return NotFound();
            }

            return kendaraan;
        }

        [HttpPost]
        public async Task<ActionResult<Kendaraan>> CreateKendaraan(Kendaraan kendaraan)
        {
            _context.Kendaraans.Add(kendaraan);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetKendaraan), new { id = kendaraan.NomorRegistrasi }, kendaraan);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateKendaraan(string id, Kendaraan kendaraan)
        {
            if (id != kendaraan.NomorRegistrasi)
            {
                return BadRequest();
            }

            _context.Entry(kendaraan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KendaraanExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKendaraan(string id)
        {
            var kendaraan = await _context.Kendaraans.FindAsync(id);
            if (kendaraan == null)
            {
                return NotFound();
            }

            _context.Kendaraans.Remove(kendaraan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KendaraanExists(string id)
        {
            return _context.Kendaraans.Any(e => e.NomorRegistrasi == id);
        }
    }
}

