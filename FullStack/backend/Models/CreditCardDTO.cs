using System;


namespace backend.Models
{
    public class CreditCardDTO
    {

        public int Id { get; set; }
        public string CardNumber { get; set; }
        public int CVC { get; set; }
        public DateTime ExpiryDate { get; set; }
    }
}