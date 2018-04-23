using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using RequestModel;
using Service;

namespace SchoolManagement.Server.Controllers
{
    [Produces("application/json")]
    [Route("api/Teachers")]
    public class TeachersController : Controller
    {

        private SchoolDbContext _db;
        private TeacherService _service;

        public TeachersController(SchoolDbContext db, Model.Repo.IGenericRepository<Teacher> repository)
        {
            _db = db;
            _service = new TeacherService(repository);
        }

        [HttpPost]
        [Route("Search")]
        public async Task<IActionResult> GetCourses([FromBody] TeacherRequestModel request)
        {
            var teacher = await _service.SearchAsync(request);
            return Ok(teacher);
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult AddCourse([FromBody] Teacher teacher)
        {
            teacher.Id = Guid.NewGuid().ToString();
            teacher.Created = DateTime.Now;
            teacher.Modified = DateTime.Now;
            teacher.CreatedBy = "system";
            teacher.ModifiedBy = "system";
            teacher.IsActive = true;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            bool added = _service.Add(teacher);
            if (added)
            {
                return Ok(teacher.Id);
            }

            return BadRequest("Couldn't save course.");
        }
    }
}