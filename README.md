# Theory Task: 1

## 1. The Fundamental Theorem of Calculus (FTC)

The Fundamental Theorem of Calculus (FTC) connects differentiation and integration, offering a powerful tool for solving problems in analysis. The first part of the theorem, which we’ll focus on, states:

For a function `F(x)` defined by

    F(x) = ∫[a,x] f(t) dt

where `f(t)` is continuous over `[a, b]`, the function `F(x)` is differentiable over `(a, b)`, and its derivative equals `f(x)`:

    F'(x) = f(x)

In other words, if we integrate a function and then differentiate the result, we retrieve the original function `f(x)`.

---

## 2. Application in Probability: Cumulative Distribution Functions (CDFs) and Probability Density Functions (PDFs)

In probability, the FTC provides the basis for linking cumulative distribution functions (CDFs) with probability density functions (PDFs) of continuous random variables.

### Cumulative Distribution Function (CDF)

The cumulative distribution function (CDF) of a continuous random variable `X`, represented by `F(x)`, is given as:

    F(x) = P(X ≤ x) = ∫[-∞,x] f(t) dt

where `f(t)` is the probability density function (PDF) of `X`.  
The CDF `F(x)` provides the probability that the random variable `X` is less than or equal to `x`.

### Probability Density Function (PDF)

The PDF, `f(x)`, is simply the derivative of the CDF `F(x)`:

    f(x) = F'(x)

Thus, `f(x)` represents the rate at which the probability accumulates at each point `x`. This density function helps quantify the relative likelihood of values of `X` around any particular point.

---

## 3. Using the Fundamental Theorem of Calculus to Relate CDF and PDF

With the FTC, if we have:

    F(x) = ∫[-∞,x] f(t) dt

then by differentiating `F(x)` with respect to `x`, we obtain:

    d/dx [F(x)] = f(x)

In other words, the PDF `f(x)` is simply the derivative of the CDF `F(x)`. Conversely, if we integrate the PDF from `-∞` to `x`, we obtain the CDF.

---

## Summary of Key Connections

- **Deriving the PDF from the CDF**: Starting from the cumulative distribution function `F(x)`, we can derive the probability density function `f(x)` by taking the derivative:

      f(x) = F'(x)

- **Deriving the CDF from the PDF**: Starting from the probability density function `f(x)`, we can derive the cumulative distribution function `F(x)` by integrating `f(x)` from `-∞` to `x`:

      F(x) = ∫[-∞,x] f(t) dt

This relationship is essential for working with continuous probability distributions: integrating the PDF over an interval provides cumulative probability, while differentiating the CDF reveals the point-wise density.

# Code Demonstration
The code can be seen and used here: https://htmlpreview.github.io/?https://github.com/Flavio-Uni/Statistics-Sapienza/blob/HWK6/hwk6.html
This code simulates repeated sampling from a given discrete probability distribution, incrementally building an empirical distribution that gradually aligns with the theoretical one. As each sample is drawn according to the specified probabilities, the code updates the observed frequencies for each outcome. The visualization dynamically displays both the theoretical distribution and the current empirical results, allowing you to observe how closely the two distributions match as the sample size increases. Interactive controls let you adjust the number of samples added per step and the update interval, allowing you to control the speed of the convergence process.
