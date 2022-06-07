using Flava.API.Features.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace Flava.API.Features.Authflow;

public sealed class AuthflowController : ApiController
{
   [HttpPost("sign-in")]
   [ProducesResponseType(StatusCodes.Status200OK)]
   public async Task<IActionResult> SignIn(SignIn.Command req)
      => Ok(await Mediator.Send(req));
}
