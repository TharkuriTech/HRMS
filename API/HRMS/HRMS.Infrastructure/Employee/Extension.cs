using HRMS.Application.Employee;
using Microsoft.Extensions.DependencyInjection;

namespace HRMS.Infrastructure.Employee;

internal static class Extension
{
    public static IServiceCollection ConfigureEmployee(this IServiceCollection services)
    {
        services.AddScoped<IEmployeeService, EmployeeService>();

        return services;
    }
}
