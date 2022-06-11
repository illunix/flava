using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Flava.API.Infrastructure.Extensions;
using Flava.API.Infrastructure.Filters;
using MediatR;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
var services = builder.Services;

services.AddControllers(q =>
{
   q.Filters
      .Add(typeof(ValidatorActionFilter));
   q.Filters
      .Add(typeof(CustomExceptionFilterAttribute));
});

services.AddRouting(q => q.LowercaseUrls = true);

services.AddCors(options =>
{
   options.AddPolicy("webClient", builder =>
   {
      builder.WithOrigins(configuration["webClientUrl"])
          .AllowAnyHeader()
          .AllowAnyHeader()
          .AllowAnyMethod()
          .WithExposedHeaders("Token-Expired")
          .AllowCredentials();
   });
});

services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

services.AddDefaultAWSOptions(configuration.GetAWSOptions());
#if RELEASE
services.AddAWSLambdaHosting(LambdaEventSource.HttpApi);
#endif
services.AddAWSService<IAmazonDynamoDB>();
services.AddScoped<IDynamoDBContext, DynamoDBContext>();

services.AddMediatR(typeof(Program));

services.ConfigureCustomValidationErrors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("webClient");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
