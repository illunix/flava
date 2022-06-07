using System.Security.Cryptography;
using Amazon.DynamoDBv2.DataModel;
using Flava.API.Infrastructure.Exceptions.Identity;
using FluentValidation;
using MediatR.Extensions.GenerateMediator;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace Flava.API.Features.Identity;

[GenerateMediator]
public sealed partial class SignUp
{
   public sealed partial record Command(
       string Username,
       string Email,
       string Password
   )
   {
      public static void AddValidation(AbstractValidator<Command> v)
      {
         v.RuleFor(q => q.Username)
             .NotEmpty();

         v.RuleFor(q => q.Email)
             .NotEmpty();

         v.RuleFor(q => q.Password)
             .NotEmpty();
      }
   }

   public static async Task Handler(
       Command req,
       IDynamoDBContext ctx
   )
   {
      if (await ctx.LoadAsync<User>(req.Email) is not null)
      {
         throw new UserWithThisEmailAlreadyExistException();
      }

      var salt = GetRandomBytes();

      await ctx.SaveAsync(new User
      {
         Username = req.Username,
         Email = req.Email,
         Password = HashPassword(
              req.Password,
              salt
          ),
         Salt = salt
      });
   }

   [DynamoDBTable("Users")]
   private sealed record User
   {
      public string? Username { get; init; }
      public string? Email { get; init; }
      public string? Password { get; init; }
      public byte[]? Salt { get; init; }
      public string CreatedAt { get; private init; } = DateTime.Now.ToString("dd/MM/yyyy");
   }

   private static byte[] GetRandomBytes(int length = 32)
   {
      using var randomNumberGenerator = new RNGCryptoServiceProvider();

      var salt = new byte[length];
      randomNumberGenerator.GetBytes(salt);

      return salt;
   }

   private static string HashPassword(string password, byte[] salt)
      => Convert.ToBase64String(
            KeyDerivation.Pbkdf2(
               password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256 / 8
            )
      );
}
