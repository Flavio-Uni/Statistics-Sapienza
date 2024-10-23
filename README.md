# Theory Part 1

## Task
Formally illustrate, in the simplest manner possible, why the Median represents the minimum `c` for the sum of |x(i) - c| (the sum of absolute deviations).

## Solution
Let’s denote a dataset containing `n` ordered values as `x1, x2, ..., xn`. Our goal is to identify a value `c` that minimizes the sum of absolute deviations expressed as:

    S(c) = Σ |x_i - c|, for i = 1 to n

We will examine two distinct scenarios based on whether `n` is odd or even.

### Case 1: n is odd
When `n` is odd, the median `m` is precisely the central value of the ordered dataset, given by:

    m = x_(n + 1) / 2

To prove that this minimizes the deviations, we proceed as follows:

1. **Split the Dataset:** Consider the values on either side of `m`:
   - Let `L = { x_1, x_2, ..., x_(n - 1) / 2 }`
   - Let `R = { x_(n + 1) / 2, x_(n + 2) / 2, ..., x_n }`

2. **Examine Changes in S(c):** If we increase `c` beyond `m`, the sum of deviations from `L` will rise while that from `R` will decrease. Conversely, lowering `c` below `m` will lead to the opposite effect.

Using `c = m`, we find:
- The sum of absolute deviations for the left side is:
  
      Σ (m - x_i), for i = 1 to (n - 1) / 2 

- The sum for the right side is:

      Σ (x_i - m), for i = (n + 1) / 2 to n 

3. **Calculate the Total Deviation:** The total deviation can be expressed as:

      S(m) = Σ (m - x_i), for i = 1 to (n - 1) / 2 + Σ (x_i - m), for i = (n + 1) / 2 to n 

Since `m` is the median, there are equal numbers of values on either side. Thus, at `c = m`, the increases and decreases in the absolute deviations counterbalance each other, minimizing `S(c)`.

### Case 2: n is even
For even `n`, the median is determined as the average of the two central values:

    m = (x_(n / 2) + x_(n / 2 + 1)) / 2 

The proof mirrors that of the previous case:

1. **Split the Dataset:** Consider the left and right halves:
   - Left half: `L = { x_1, x_2, ..., x_(n / 2) }`
   - Right half: `R = { x_(n / 2 + 1), x_(n / 2 + 2), ..., x_n }`

2. **Evaluate c = m:** The deviations from both halves will be balanced as there are equal numbers of points on either side of `m`. Adjusting `c` up or down from `m` will lead to a greater increase in deviations from one group than it decreases in the other.

This completes the proof, demonstrating that in both scenarios, the median `m` minimizes the sum of absolute deviations `S(c)`.

---

# Theory Part 2

## Task
Identify all conceivable ways to define “location” statistics (often referred to as “center” or “central tendency”) or synthesis of distributions, illustrating how the generalization of these concepts can lead to infinite definitions.

## Solution
Defining “location” statistics (or measures of central tendency) involves determining a representative value that encapsulates a distribution of data. Below are various conceptual definitions and approaches, which can lead to an infinite number of potential definitions:

1. **Mean (Arithmetic Average):** The total of all observations divided by the number of observations.
   - **Generalization:** This can be extended to weighted means, where observations carry different weights.

2. **Median:** The central value when the data is arranged in order.
   - **Generalization:** This includes weighted medians or generalized medians for multi-dimensional datasets, as well as the use of quantiles (e.g., quartiles, percentiles).

3. **Mode:** The value that occurs most frequently within a dataset.
   - **Generalization:** This may encompass bimodal or multimodal distributions (multiple modes) or density modes in continuous distributions.

4. **Trimmed Mean:** The average calculated after excluding a specified percentage of the smallest and largest values.

5. **Geometric Mean:** The nth root of the product of n observations, appropriate for multiplicative processes.
   - **Generalization:** This could lead to various forms, such as the harmonic mean or generalized forms like Pythagorean means.

6. **Statistical Location Based on Distance Metrics:** Measures that utilize distances, such as the centroid (geometric center) or barycenter.
   - **Generalizations:** This can include location measures based on Minkowski distance, or the center of mass in physical contexts.

7. **L-estimates:** Linear combinations of order statistics, representing a generalization of location measures.
   - **Generalization:** These can lead to robust estimators that diminish the impact of outliers (e.g., least absolute deviations).

8. **Variance-Based Measures:** The center of mass of a distribution can be defined by minimizing variance (the mean minimizes the sum of squared deviations).
   - **Generalization:** This can lead to weighted least squares and other generalized moments (e.g., higher-order moments).

9. **Distributional Measures:** Features like the peak of the distribution or the maximum likelihood estimate of a location parameter.
   - **Generalizations:** This could include cumulants (derived from moments) or characteristic functions.

10. **Robust Location Statistics:** Location measures that are less affected by outliers, such as the median absolute deviation.
    - **Generalization:** Extending robustness to various contexts can result in M-estimators that generalize maximum likelihood estimation for robustness.

11. **Bayesian Location Statistics:** Location measures grounded in Bayesian methods, incorporating prior distributions.
    - **Generalization:** This may yield posterior means, modes, or medians, as well as Bayesian hierarchical models for location estimation.

12. **Non-parametric Measures:** Measures that do not assume a specific distribution, such as kernel density estimators.
    - **Generalization:** This can lead to adaptive non-parametric location estimators or bootstrapping techniques for estimating central tendencies.

## Infinite Generalizations
Each of these definitions can be generalized in numerous ways, as indicated above, resulting in an infinite array of potential definitions for “location” statistics. Examples include:

- Combining various statistics (e.g., a mix of mean and median).
- Creating location measures based on user-defined criteria or specific applications (e.g., socio-economic data analysis).
- Formulating new metrics utilizing machine learning techniques (e.g., centers based on clustering, outputs from neural networks).

Here is the link to see the code working:
  http://htmlpreview.github.io/?https://github.com/Flavio-Uni/Statistics-Sapienza/blob/HWK3/hwk3.html
