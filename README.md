# Theory: 

## The Cauchy-Schwarz Inequality

The Cauchy-Schwarz inequality is a fundamental concept in mathematics and statistics, particularly for understanding correlations. It states that for any two random variables `X` and `Y`, the absolute value of their covariance is constrained by the product of their standard deviations. Formally, we have:

    |Cov(X, Y)| ≤ σ_X * σ_Y

where:
- `Cov(X, Y)` represents the covariance of `X` and `Y`
- `σ_X` and `σ_Y` are the standard deviations of `X` and `Y`, respectively.

### Proof Using the Correlation Coefficient

The correlation coefficient `r_XY` is defined as:

    r_XY = Cov(X, Y) / (σ_X * σ_Y)

Since `r_XY` represents the normalized covariance, it satisfies `-1 ≤ r_XY ≤ 1`, implying:

    |Cov(X, Y)| ≤ σ_X * σ_Y

This inequality directly follows from the fact that the correlation coefficient is always bounded between `-1` and `1`, meaning that the covariance cannot exceed the product `σ_X * σ_Y` in absolute value.

### Simplified Proof of the Cauchy-Schwarz Inequality

The Cauchy-Schwarz inequality can also be demonstrated by considering the following approach:

Define a new random variable `Z = X + tY` for any real number `t`. Since the variance of any variable is always non-negative (`Var(Z) ≥ 0`), we have:

    Var(Z) = Var(X + tY) ≥ 0

Expanding `Var(X + tY)` yields a quadratic function in `t` that must be non-negative for all values of `t`. The discriminant of this quadratic must therefore be less than or equal to zero, leading to:

    Cov(X, Y)^2 ≤ σ_X^2 * σ_Y^2

Dividing by the product of the standard deviations, `σ_X * σ_Y`, gives the normalized form of the inequality involving the correlation coefficient `r_XY` as shown above.

---

# Theory: 

## Independence and Uncorrelation

Independence and uncorrelation are two distinct concepts in probability and statistics, each with unique implications:

### 1. Independence

Two random variables `X` and `Y` are independent if knowing the outcome of `X` provides no information about `Y`, and vice versa. Mathematically, `X` and `Y` are independent if, for all values `x` and `y`:

    P(X = x and Y = y) = P(X = x) * P(Y = y)

This definition extends to imply that any function of `X` and any function of `Y` will also be independent.

- **Implications of Independence**: Independence implies uncorrelation, as for independent variables `X` and `Y`, we have `E[XY] = E[X] * E[Y]`, leading to `Cov(X, Y) = 0`.
  
- **Measures of Independence**: Independence is a stronger condition than uncorrelation. It can be tested using methods like joint distribution comparisons or mutual information, which is zero if and only if the variables are independent.

### 2. Uncorrelation

Two random variables `X` and `Y` are uncorrelated if their covariance is zero:

    Cov(X, Y) = 0

This indicates there is no linear relationship between `X` and `Y`, though it does not imply independence.

- **Implications of Uncorrelation**: Uncorrelation only suggests the absence of a linear association; `X` and `Y` may still have a non-linear relationship. For example, if `X` is a random variable and `Y = X^2`, then `X` and `Y` would be uncorrelated but not independent.
  
- **Measures of Uncorrelation**: Uncorrelation is often measured using the correlation coefficient `r_XY`. When `r_XY = 0`, the variables are considered uncorrelated.

The code can be seen at the following link: https://htmlpreview.github.io/?https://github.com/Flavio-Uni/Statistics-Sapienza/blob/HWK5/hwk5.html

You can choose and customize the drift and the diffusion for different processes and results depending on different stochastic approaches.
The single steps are calculated on the aforementioned functions that are going to increment in a deterministic way their values.
Each information for the steps is generated randomly to achieve the most realistic inherent variability of a C-T process (continuous-time), with the help of drift and diffusion values.

