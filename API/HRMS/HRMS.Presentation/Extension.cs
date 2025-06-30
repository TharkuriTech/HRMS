using HRMS.Application.Employee.Login;
using HRMS.Infrastructure;
using HRMS.Presentation.Employee;
using System.Reflection;

namespace HRMS.Presentation;

public static class Extension
{
    public static WebApplication UseHRMS(this WebApplication app)
    {
        app.MapEmployeeEndpointsCollection();
        return app;
    }
    public static WebApplicationBuilder ConfigureHRMS(this WebApplicationBuilder builder)
    {
        builder.Services.ConfigureHRMSServiceCollection();

        builder.Services.AddMediatR(cfg =>
        {
            cfg.RegisterServicesFromAssembly(typeof(LoginCommand).Assembly);
        });

        return builder;
    }
}