namespace Flava.API.Features.Authflow.Exceptions;

public sealed class InvalidCredentialsException : Exception
{
    public InvalidCredentialsException() : base($"Invalid username or password.") { }
}
