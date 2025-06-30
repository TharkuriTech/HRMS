using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMS.Domain.Auditable;

public class AuditableEntity
{
    [Column("S_CreatedBy")]
    public string CreatedBy { get; set; } = string.Empty;

    [Column("D_CretedDate")]
    public DateTime CreateDate { get; set; } = DateTime.Now;

    [Column("S_ModifiedBy")]
    public string? LastModifiedBy { get; set; }

    [Column("D_ModifiedDate")]
    public DateTime? LastModifiedDate { get; set; }

    [Column("I_Status")]
    public int Status { get; set; }
}