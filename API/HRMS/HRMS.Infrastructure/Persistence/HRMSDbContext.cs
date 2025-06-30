using HRMS.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace HRMS.Infrastructure.Persistence;

public class HRMSDbContext(DbContextOptions<HRMSDbContext> options) : DbContext(options)
{
    public DbSet<ENTEmployee> Employees { get; set; } = default!;


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
