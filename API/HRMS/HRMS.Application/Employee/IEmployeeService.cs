using HRMS.Application.Employee.Login;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMS.Application.Employee;

public interface IEmployeeService
{
    Task<LoginResponse> LoginAsync(LoginCommand Command);
}
