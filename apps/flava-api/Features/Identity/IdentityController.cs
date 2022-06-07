using Flava.API.Features.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace Flava.API.Features.Identity;

[Route("api/[controller]")]
public sealed class IdentityController : ApiController
{
   [HttpPost("sign-up")]
   [ProducesResponseType(StatusCodes.Status200OK)]
   public async Task<IActionResult> SignUp(SignUp.Command req)
      => Ok(await Mediator.Send(req));
}
