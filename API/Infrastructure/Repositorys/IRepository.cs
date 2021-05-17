using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Infrastructure.Repositorys;

namespace API.Infrastructure.Repositorys
{
    public interface IRepository
    {
         Task<List<CoachType>> GetAllAsync();
    }
}