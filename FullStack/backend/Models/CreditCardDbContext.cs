using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class CreditCardDbContext : DbContext
    {
        public CreditCardDbContext(DbContextOptions<CreditCardDbContext> options)
            : base(options)
        {
        }

        public DbSet<CreditCard> CreditCards { get; set; }
    }
}