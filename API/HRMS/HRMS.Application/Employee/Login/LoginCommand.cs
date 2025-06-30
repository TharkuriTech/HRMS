using MediatR;

namespace HRMS.Application.Employee.Login;

public sealed record LoginCommand() : IRequest<LoginResponse>
{
    public string strUserName { get; set; } = string.Empty;
    public string strPassword { get; set; } = string.Empty;
}
