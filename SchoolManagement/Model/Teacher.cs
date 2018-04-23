using System;
using System.Collections.Generic;
using System.Text;
using Common;
using Common.Model;

namespace Model
{
    public class Teacher : Entity
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Courses { get; set; }
        public double TotalCredit { get; set; }
    }

}
