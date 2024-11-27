# Theory task: 1
## Shannon Entropy and Measures of Diversity

### Shannon Entropy
Shannon entropy is a fundamental concept for quantifying the uncertainty or randomness in a probability distribution. It provides insight into how unpredictable or concentrated a dataset is.

The formula for Shannon entropy is:

\[
H(X) = -\sum P(x) \log_2 P(x)
\]

- **High Entropy**: Indicates greater randomness or unpredictability in the data.
- **Low Entropy**: Suggests more certainty or concentration, where certain outcomes dominate.

### Applications in Diversity Measurement
Entropy is a key tool in various fields, such as ecology, data science, and information theory, to measure diversity and variability. In addition to Shannon entropy, other diversity measures include:

- **Simpson's Index**: Focuses on the probability that two randomly chosen elements are different.
- **Rényi Entropy**: Offers a flexible approach, emphasizing either rare or common events, depending on the parameter chosen.

These metrics provide a way to quantify how "spread out" or diverse a dataset is, with each method tailored to specific types of analysis.

---

## Primitive Roots

### Definition
A primitive root modulo a prime number \( p \) is a special number \( g \) that generates all integers coprime to \( p \) through successive powers modulo \( p \). 

Mathematically, \( g \) is a primitive root modulo \( p \) if:

\[
\{g^k \mod p \, | \, k = 1, 2, \dots, \phi(p)\}
\]

includes all integers coprime to \( p \), where \( \phi(p) \) is Euler’s totient function.

### Importance
- **Cryptography**: Primitive roots are foundational in key exchange protocols like Diffie-Hellman, where they help generate secure keys.
- **Number Theory**: They provide insights into the cyclic nature of modular arithmetic.
- **Applications**: Ensuring secure, uniform sequences in modular systems, reducing predictability.

By understanding primitive roots and entropy, we can connect randomness, diversity, and secure number generation across various fields.
