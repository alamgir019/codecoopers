using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Model
{
    public class SchoolDbContext : DbContext
    {
        public SchoolDbContext(DbContextOptions options): base(options)
        {
        }

        public DbSet<Teacher> Teachers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Teacher>().HasIndex(x => x.Name);
            modelBuilder.Entity<Teacher>().HasIndex(x => x.Courses);
            modelBuilder.Entity<Teacher>().HasIndex(x => x.Phone);
        }
    }
}
