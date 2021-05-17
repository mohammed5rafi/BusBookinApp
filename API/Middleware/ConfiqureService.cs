using API.Infrastructure.Repositorys;
using API.Infrastructure.Services;
using Microsoft.Extensions.DependencyInjection;

namespace API.Middleware
{
    public static class ConfiqureService
    {
         public static void ConfiqureServices(this IServiceCollection service){
           service.AddScoped<IRepository,Repository>();
        service.AddTransient<IBookingSearchService,BookingSearchService>();
         }
    }
}