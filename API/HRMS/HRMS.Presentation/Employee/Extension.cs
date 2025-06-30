namespace HRMS.Presentation.Employee;

public static class Extension
{
    public static IEndpointRouteBuilder MapEmployeeEndpointsCollection(this IEndpointRouteBuilder endpoints)
    {
        var employee = endpoints.MapGroup("api/Employee").WithTags("Employee");
        employee.MapLoginEndPoint();

        return endpoints;
    }
}
