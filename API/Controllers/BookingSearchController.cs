using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BookingSearchController : ApiBaseController
    {
        #region constuctor

        private readonly IBookingSearchService _bookingSearchService;

        public BookingSearchController(IBookingSearchService bookingSearchService)
        {
            _bookingSearchService = bookingSearchService;



        }
        #endregion

        #region masterdata

        public async Task<IActionResult> GetCoachMaster()
        {
            return Ok (await _bookingSearchService.GetCoachMaster());
        }
        #endregion
    }
}