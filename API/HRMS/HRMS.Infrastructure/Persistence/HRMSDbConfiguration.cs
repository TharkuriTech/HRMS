using HRMS.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HRMS.Infrastructure.Persistence;

internal class EmployeeConfig : IEntityTypeConfiguration<ENTEmployee>
{
    public void Configure(EntityTypeBuilder<ENTEmployee> builder)
    {
        builder.ToTable("Employee");
        builder.HasKey(e => e.Id);
    }
}