using HRMS.Application.Employee.Login;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HRMS.Presentation.Employee;

public static class LoginEndPoint
{
    internal static RouteHandlerBuilder MapLoginEndPoint(this IEndpointRouteBuilder endpoint)
    {
        return endpoint.MapPost("/", async ([FromBody] LoginCommand request, [FromServices] ISender mediator) =>
        {
            LoginResponse response = await mediator.Send(request);
            return Results.Ok(response);
        })
        .WithName(nameof(LoginEndPoint))
        .WithSummary("Login")
        .WithDescription("Login endpoint that handles user authentication")
        .AllowAnonymous()
        .Produces<LoginResponse>(StatusCodes.Status200OK)
        .Produces(StatusCodes.Status400BadRequest)
        .Produces(StatusCodes.Status409Conflict)
        .Produces(StatusCodes.Status500InternalServerError);
    }
}

