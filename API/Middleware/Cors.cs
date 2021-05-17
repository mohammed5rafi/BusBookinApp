using Microsoft.Extensions.DependencyInjection;

namespace API.Middleware
{
    public static class Cors
    {
        public static void ConfiqureCoreService(this IServiceCollection service){

            service.AddCors(options =>{
options.AddPolicy("ApiCorePolicy",
bulder => bulder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().WithOrigins("https://localhost:4200/"));
            });
        }
    }
}