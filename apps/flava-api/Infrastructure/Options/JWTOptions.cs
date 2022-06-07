using Microsoft.IdentityModel.Tokens;

namespace Flava.API.Infrastructure.Options;

public record JWTOptions(
    SigningCredentials SigningCredentials,
    string Audience,
    string SecretKey,
    string Issuer,
    DateTime Expiration,
    DateTime NotBefore,
    DateTime IssuedAt,
    TimeSpan ValidFor
)
{
    public Func<Task<string>> JtiGenerator => () => Task.FromResult(Guid.NewGuid().ToString());
}
