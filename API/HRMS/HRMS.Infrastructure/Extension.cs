using HRMS.Infrastructure.Employee;
using Microsoft.Extensions.DependencyInjection;

namespace HRMS.Infrastructure;

public static class Extension
{
    public static IServiceCollection ConfigureHRMSServiceCollection(this IServiceCollection services)
    {
        services.ConfigureEmployee();
        return services;
    }
}
