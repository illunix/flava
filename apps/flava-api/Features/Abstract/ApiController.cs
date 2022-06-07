using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Flava.API.Features.Abstract;

public class ApiController : ControllerBase
{
   private IMediator? _mediator;

   protected IMediator Mediator
   {
      get
      {
         if (_mediator is null)
         {
            _mediator = HttpContext.RequestServices.GetService<IMediator>();
         }

         return _mediator!;
      }
   }

   /*
   protected int GetUserId()
   {
      return this.GetUserIdFromToken();
   }
   */
}
