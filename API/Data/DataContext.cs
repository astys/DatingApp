using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
        /*
        Use EnsureCreated Carefully: The 
        Database.EnsureCreated() method is
        useful for creating the database and schema if
        they do not exist.
        However, it does not handle schema updates well.
        If the table already exists, it will not recreate it.
        Consider using migrations instead.
        */
        //Database.EnsureCreated();
    }
    public DbSet<AppUser> Users {get; set;}
}
