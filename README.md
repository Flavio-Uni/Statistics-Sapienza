# Theory:

## Objective
Explain the concept of statistical independence and draw parallels with its formal definition in probability theory.

## Concept of Statistical Independence
Statistical independence refers to a scenario where the occurrence of one event has no impact on the likelihood of another event occurring. For two independent events, knowing the outcome of one provides no information about the other.

### Examples of Statistical Independence

- **Flipping a Coin**: When flipping two coins, the result of the first flip (heads or tails) does not affect the outcome of the second. The events are independent.
  
- **Rolling a Die and Drawing a Card**: Rolling a six-sided die (e.g., getting a 3) is independent of drawing a card from a deck (e.g., drawing a King of Hearts). 

### Formal Definition of Independence
To define independence more formally, let `A` and `B` represent two events within a probability space. Events `A` and `B` are independent if and only if:

    P(A ∩ B) = P(A) × P(B)

where:
- `P(A ∩ B)` is the probability that both events `A` and `B` occur (their joint probability).
- `P(A)` and `P(B)` are the individual probabilities of `A` and `B`, respectively.

This definition means that if events are independent, the probability of both occurring together is simply the product of their individual probabilities.

## Analogies and Interpretations
When events are independent, knowing the outcome of one does not alter the probability of the other. For instance, if the first coin flip is heads, it tells us nothing about the second flip.

The product rule for probabilities reflects this lack of influence: if `A` and `B` were to affect each other, the conditional probability `P(A | B)` (the probability of `A` given `B` has occurred) would differ from `P(A)`. For independent events, however:

    P(A | B) = P(A)

indicating that the probability of `A` remains constant regardless of whether `B` occurs.

## Additional Properties of Independence

- **Symmetry**: If `A` is independent of `B`, then `B` is also independent of `A`.

- **Independence Across Multiple Events**: Independence can extend to multiple events. For instance, if `A`, `B`, and `C` are all independent, then:

      P(A ∩ B ∩ C) = P(A) × P(B) × P(C)

- **Conditional Independence**: In some cases, two events may be independent given a third event. For example, given information that someone exercises regularly, the events of having high blood pressure and being overweight may become conditionally independent based on exercise frequency.

Here's the code to see how it works: 

