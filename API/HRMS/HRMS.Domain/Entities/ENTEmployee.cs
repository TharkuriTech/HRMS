using HRMS.Domain.Auditable;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
namespace HRMS.Domain.Entities;

public sealed class ENTEmployee : AuditableEntity
{
    [Column("Id")]
    public string Id { get; set; } = string.Empty;

    [Column("S_UserName")]
    public string UserName { get; set; } = string.Empty;

    [Column("S_Password")]
    public string Password { get; set; } = string.Empty;
}
