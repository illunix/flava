namespace Flava.API.Infrastructure.Exceptions;

public sealed class NotFoundException : Exception
{
    public NotFoundException(string name) : base($"Entity {name} was not found.") { }
}