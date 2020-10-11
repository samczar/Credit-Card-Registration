using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class CreditCard
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        public string CardNumber { get; set; }
        public int CVC { get; set; }
        public DateTime ExpiryDate { get; set; }
    }
}