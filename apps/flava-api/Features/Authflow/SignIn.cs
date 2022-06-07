using Amazon.DynamoDBv2.DataModel;
using MediatR.Extensions.GenerateMediator;

namespace Flava.API.Features.Authflow;

[GenerateMediator]
public partial class SignIn
{
   public sealed partial record Command(
      string Email,
      string Password
   );

   public static async Task Handler(
      Command req,
      IDynamoDBContext ctx
   )
   {

   }
}
