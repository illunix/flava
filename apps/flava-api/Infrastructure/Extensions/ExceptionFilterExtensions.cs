using Flava.API.Infrastructure.Enums;
using Flava.API.Infrastructure.Exceptions;
using System.Net;
using Flava.API.Infrastructure.Exceptions.Identity;

namespace Flava.API.Infrastructure.Extensions;

public static class ExceptionFilterExtensions
{
    public static (HttpStatusCode statusCode, ErrorCode errorCode) ParseException(this Exception exception)
    {
        return exception switch
        {
            NotFoundException _ => (HttpStatusCode.NotFound, ErrorCode.NotFound),
            UserWithThisEmailAlreadyExistException _ => (HttpStatusCode.Conflict, ErrorCode.UserWithThisEmailAlreadyExist),
            _ => (HttpStatusCode.InternalServerError, ErrorCode.General),
        };
    }
}
