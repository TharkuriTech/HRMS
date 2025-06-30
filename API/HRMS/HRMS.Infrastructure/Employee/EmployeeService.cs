using HRMS.Application.Employee;
using HRMS.Application.Employee.Login;
using HRMS.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace HRMS.Infrastructure.Employee;

public sealed class EmployeeService(HRMSDbContext context) : IEmployeeService
{
    public async Task<LoginResponse> LoginAsync(LoginCommand Command)
    {
        bool IsResult = await context.Employees.AnyAsync();
        return new LoginResponse(IsResult);
    }
}
