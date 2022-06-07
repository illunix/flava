namespace Flava.API.Infrastructure.Exceptions.Identity;

public sealed class InvalidCredentialsException : Exception
{
    public InvalidCredentialsException() : base($"Invalid username or password.") { }
}