using Flava.API.Features.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace Flava.API.Features.Authflow;

[Route("api/[controller]")]
public sealed class AuthflowController : ApiController
{
   [HttpPost("sign-in")]
   [ProducesResponseType(StatusCodes.Status200OK)]
   public async Task<IActionResult> SignIn([FromBody] SignIn.Command req)
      => Ok(await Mediator.Send(req));

   [HttpPost("sign-up")]
   [ProducesResponseType(StatusCodes.Status200OK)]
   public async Task<IActionResult> SignUp([FromBody] SignUp.Command req)
      => Ok(await Mediator.Send(req));
}
