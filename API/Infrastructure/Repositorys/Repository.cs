using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Infrastructure.Repositorys
{

    public class Repository : IRepository
    {
        private readonly DataContext _context;

        #region constructor
        public Repository(DataContext context,string collectionName = null)
        {
            _context = context;
         
        }
        #endregion
        public async Task<List<CoachType>> GetAllAsync() => await _context.CoachType.ToListAsync();
}
}