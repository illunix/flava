using Microsoft.AspNetCore.Mvc;

namespace Flava.API.Infrastructure.Extensions;

public static class ApiBehaviorExtensions
{
    public static void ConfigureCustomValidationErrors(this IServiceCollection services)
    {
        services.Configure<ApiBehaviorOptions>(options =>
        {
            options.InvalidModelStateResponseFactory = (context) =>
            {
                var errors = context.ModelState.Values.SelectMany(x => x.Errors.Select(p => p.ErrorMessage)).ToList();
                var result = new
                {
                    Message = "Validation errors",
                    Errors = errors
                };

                return new BadRequestObjectResult(result);
            };
        });
    }
}
