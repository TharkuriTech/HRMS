using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HRMS.Migrations.MSSQL.HRMSDbMigrations
{
    /// <inheritdoc />
    public partial class PrimaryMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    S_UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    S_Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    S_CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    D_CretedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    S_ModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    D_ModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    I_Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
