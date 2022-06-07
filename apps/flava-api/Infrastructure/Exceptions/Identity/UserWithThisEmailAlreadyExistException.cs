namespace Flava.API.Infrastructure.Exceptions.Identity;

public sealed class UserWithThisEmailAlreadyExistException : Exception
{
   public UserWithThisEmailAlreadyExistException() : base($"There is already user associated with this email.") { }
}
