using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Infrastructure.Services
{
    public interface IBookingSearchService
    {
         Task<List<CoachType>> GetCoachMaster();
    }
}