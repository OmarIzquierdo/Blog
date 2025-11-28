+++
title = 'The Art of Clean Code: Say No to Comments, Yes to Meaningful Names'
date = 2023-11-27T21:11:38+01:00
draft = false
tags = ["clean code"]
+++

In the realm of programming, the clarity and maintainability of code are paramount. One of the common pitfalls developers often encounter is the overreliance on comments to explain their code. In this blog post, we'll explore why using comments excessively can be detrimental and how adopting a disciplined approach to naming variables and methods can significantly enhance the readability of your code.

## The Comment Conundrum
Comments can be a double-edged sword. While they provide a means to annotate code, they can also be a crutch, masking poorly written or convoluted logic. Let's consider an example in C#:

Code with Excessive Comments:

```csharp
// Function to calculate the total cost
double CalculateTotalCost(double price, int quantity, double discount) {
    // Multiply price by quantity
    double subtotal = price * quantity;

    // Apply discount
    double discountedTotal = subtotal - (subtotal * discount);

    // Check if the total is negative and set it to zero
    if (discountedTotal < 0) {
        discountedTotal = 0;
    }

    // Return the final total
    return discountedTotal;
}
```

In this example, the comments attempt to explain each step, but the code remains cluttered and difficult to follow. What if we embraced the power of meaningful names instead?

## The Elegance of Meaningful Names
Let's rewrite the same functionality with descriptive variable and method names:

Clean Code with Meaningful Names:

```csharp
double CalculateTotalCost(double unitPrice, int quantity, double discountRate) {
    double subtotal = unitPrice * quantity;
    double discountedTotal = ApplyDiscount(subtotal, discountRate);
    return EnsureNonNegativeTotal(discountedTotal);
}

double ApplyDiscount(double amount, double discount) {
    return amount - (amount * discount);
}

double EnsureNonNegativeTotal(double total) {
    return total < 0 ? 0 : total;
}
```

By choosing expressive names for variables and methods, the code becomes self-explanatory. Each function has a clear purpose, making the logic easy to understand without the need for comments.


## Benefits of Meaningful Names
- **Readability**: Well-chosen names make code more readable, reducing the cognitive load on developers.
- **Maintainability**: Code that is easy to understand is easier to maintain. Developers can confidently make changes without fear of introducing bugs.
- **Collaboration**: Clear code facilitates collaboration among team members, as everyone can quickly grasp the purpose and functionality of the code.
-**Reduced Need for Comments**: When code is self-explanatory, the need for comments is minimized, and the codebase remains cleaner.

### Conclusion
In the pursuit of clean code, favor meaningful names over excessive comments. Embrace the art of clear, expressive code that tells a story without the need for additional explanations. Your future self and your teammates will thank you for it.

Happy coding! 🐼✨