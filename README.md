Welford’s Recursion
Welford’s method provides a numerically stable way to compute the mean and variance incrementally. This is particularly useful for large datasets or streaming data. Here’s the recursive formula for calculating the mean and variance:

Let:

𝑥
𝑛
x 
n
​
  represent the current data point,
𝜇
𝑛
μ 
n
​
  be the mean after 
𝑛
n data points,
𝜎
𝑛
2
σ 
n
2
​
  be the variance after 
𝑛
n data points.
The recursive update for the mean is:

𝜇
𝑛
+
1
=
𝜇
𝑛
+
𝑥
𝑛
+
1
−
𝜇
𝑛
𝑛
+
1
μ 
n+1
​
 =μ 
n
​
 + 
n+1
x 
n+1
​
 −μ 
n
​
 
​
 
And for the variance:

𝜎
𝑛
+
1
2
=
𝑛
−
1
𝑛
𝜎
𝑛
2
+
(
𝑥
𝑛
+
1
−
𝜇
𝑛
)
2
𝑛
+
1
σ 
n+1
2
​
 = 
n
n−1
​
 σ 
n
2
​
 + 
n+1
(x 
n+1
​
 −μ 
n
​
 ) 
2
 
​
 
This method allows us to compute the mean and variance in a single pass, without needing to store all the data points.

Euler–Maruyama Method for Stochastic Differential Equations
To approximate the solution of a stochastic differential equation (SDE), we use the Euler–Maruyama method. The general form of an SDE is:

𝑑
𝑋
𝑡
=
𝑓
(
𝑋
𝑡
,
𝑡
)
𝑑
𝑡
+
𝑔
(
𝑋
𝑡
,
𝑡
)
𝑑
𝑊
𝑡
dX 
t
​
 =f(X 
t
​
 ,t)dt+g(X 
t
​
 ,t)dW 
t
​
 
where 
𝑊
𝑡
W 
t
​
  is a Wiener process (or Brownian motion).

The Euler–Maruyama approximation for 
𝑋
𝑡
𝑛
+
1
X 
t 
n+1
​
 
​
  is given by:

𝑋
𝑡
𝑛
+
1
=
𝑋
𝑡
𝑛
+
𝑓
(
𝑋
𝑡
𝑛
,
𝑡
𝑛
)
Δ
𝑡
+
𝑔
(
𝑋
𝑡
𝑛
,
𝑡
𝑛
)
Δ
𝑊
𝑛
X 
t 
n+1
​
 
​
 =X 
t 
n
​
 
​
 +f(X 
t 
n
​
 
​
 ,t 
n
​
 )Δt+g(X 
t 
n
​
 
​
 ,t 
n
​
 )ΔW 
n
​
 
where 
Δ
𝑊
𝑛
∼
𝑁
(
0
,
Δ
𝑡
)
ΔW 
n
​
 ∼N(0,Δt) is a normally distributed random variable.

Observations on Mean and Variance Over Time
Relative Frequency
In the case of relative frequency, where noise is controlled relative to the current state, the mean tends to stabilize more quickly. The variance shows better control, resulting in smoother fluctuations around the mean.

Absolute Frequency
With absolute frequency, the noise term is independent of the current state, leading to larger fluctuations in both the mean and variance. Over time, the variance grows more unpredictably.

Bernoulli Process
In the Bernoulli process, where each step can take only two values (0 or 1), the mean exhibits sharp jumps, particularly when transitioning between 0 and 1. Due to the discrete nature of the process, the variance fluctuates rapidly.

Random Walk
For a random walk, the mean changes more gradually, while the variance increases linearly with time, which is consistent with the theoretical properties of a random walk.

Conclusion
The behavior of the mean and variance in each case is influenced by the nature of the stochastic process:

Relative frequency controls fluctuations more effectively.
Absolute frequency introduces greater variance over time.
Bernoulli processes lead to sharper changes in both the mean and variance.
Random walks show a predictable linear increase in variance.
These insights help us understand how different types of stochastic processes behave and how Welford’s recursion provides a stable way to track the mean and variance in real-time.
