using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Infrastructure.Repositorys;

namespace API.Infrastructure.Services
{
    public class BookingSearchService : IBookingSearchService
    {

        private readonly IRepository _repositorySearch;

        public BookingSearchService(IRepository repositorySearch)
        {
            _repositorySearch = repositorySearch;


        }
        public async Task<List<CoachType>> GetCoachMaster()
        {
            return await _repositorySearch.GetAllAsync();
        }
    }
}