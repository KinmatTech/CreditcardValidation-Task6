function validateCreditCard(cardNumber) {
    // Defining regex patterns for both Visa and Mastercard
    const visacardPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const masterCardPattern = /^5[1-5][0-9]{14}$/;
    // Checking if the card number matches Visa or Mastercard pattern
    if (visacardPattern.test(cardNumber)) {
        return "VisaCard";
    } else if (masterCardPattern.test(cardNumber)) {
        return "MasterCard";
    
    } else{

        return "Invalid Card Type";
        
    }
}

// Using card number examples for visa card, mastercard amd invalid card :
const cardNumber1 = "4111111111111111"; // VisaCard
const cardNumber2 = "5123456789012345"; // MasterCard
const cardNumber3 = "1234567890123456"; // Invalid Card

// Displaying validated card numbers
console.log(validateCreditCard(cardNumber1)); // Output: Visa
console.log(validateCreditCard(cardNumber2)); // Output: Mastercard
console.log(validateCreditCard(cardNumber3)); // Output: Invalid card type

/* Explanation of the regex patterns:

 Visa Pattern (/^4[0-9]{12}(?:[0-9]{3})?$/):
^: Start of the string.
4: Visa card numbers always start with a 4.
[0-9]{12}: Followed by 12 digits.
(?:[0-9]{3})?: Optionally followed by 3 more digits (for the case of 16-digit Visa cards).
$: End of the string.

Mastercard Pattern (/^5[1-5][0-9]{14}$/):
^: Start of the string.
5: Mastercard numbers always start with a 5.
[1-5]: The second digit can be 1, 2, 3, 4, or 5.
[0-9]{14}: Followed by 14 digits.
$: End of the string.

These regex patterns help ensure that the entered credit card numbers follow 
the typical formats for Visa and Mastercard. Keep in mind that this is a basic 
validation, and it doesn't guarantee the legitimacy of a credit card. 
*/