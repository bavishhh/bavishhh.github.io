---
layout: post
title: Hyperbolic Deep Reinforcement Learning
date: 2024-12-31 13:24:00-0400
tags: deep-learning
categories: notes
giscus_comments: true
related_posts: false
---

> Notes of Paper Hyperbolic Deep Reinforcement Learning by Cetin *et al.*, 2023. [Link](https://openreview.net/pdf?id=TfBHFLgv77)  

## Contributions

- Show (experimentally) learning hierarchical features improve generalization
- Regularization approach to stabilize the training of hyperbolic neural network for RL

## Notes

### Prelims

- Hyperbolic ML
    - The geodesic (shortest path) between two points on the Poincare ball model is the arc perpendicular to the boundary.
    - Hyperbolic spaces — continuous analog of trees
    - The volume of the ball grows exponentially with the radius

### Method

- Definition: $$\delta$$-hyperbolicity
    - Geodesic triangle — for any three points A, B, and C in the space, consider the triangle formed by connecting the points pairwise using the shortest line segment (in that space).
    - For every point on a line segment, if there exists a point on the other line segment within $$\delta$$ distance, then the triangle is called $$\delta$$-slim.
    - A metric space is called $$\delta$$-hyperbolic if every geodesic triangle ABC is $$\delta$$-slim.
    - For a tree, any point simultaneously lies on two line segments, so $$\delta = 0$$.
    - $$\delta$$-hyperbolicity can be interpreted as a measure of deviation from the tree structure.
- The learned encodings of the states span finite subset of eucledian space — a discrete metric space
- Hyperbolicity of RL
    - State evolution in a trajectory can be conceptualized as a tree due to the Markovian property.
    - Non-hierarchical information of the state (such as general appearance) should be ignored, otherwise the policy and value networks overfit to spurious correlations
    - Train the PPO agent with IMPALA architecture and analyze how performance and $$\delta$$-hyperbolicity measure evolove during the training.
        - Compute the $$\delta$$-hyperbolicity for the learned representations
        - Normalize using the diameter so that the values lie between 0 and 1.
        - If it is 0, then perferct tree like structure; if 1, then perfect non-hyperbolic space..
- Training with hyperbolic latent spaces
    - Replacing the final relu and linear layer with exponential map and gyroplane fully connected layer led to underwhelming performance.
        - Hyperbolic policy struggles to start exploring and becoming more deterministic with policy improvement as expected from PPO’s entropy bonus.
            - This indicates optimization challenges of end-to-end training of RL with hyperbolic representations.
            - Using techniques from prior work — careful initialization, representaiton clipping did not help.
                - These techniques facilitate learning of approriate angular layouts initially. But in RL, the non-stationarity makes the early angular layouts suboptimal in the long run.
            - S-RYM — Spectrally Regularized Hyperbolic Mappings
                - The paper takes inspiration from GAN literature, where there is non-stationarity as well, to make use of spectral normalization, which has been shown to prevent exploding gradients phenomenon.
                - Spectral normalization is applied to all eucledian layers expect the final hyperbolic part.
                - final latent representation is scaled before mapping to $$\mathbb{B}^n$$ so that modifying the dimensionality of representations should not significantly affect their own and gradient’s magnitudes
                - this resloves the optimization challenges, achieves high performance compared to the eucledian implementation, and maintains low gradient norm.

### Observations

- $$\delta$$ -hyperbolicity
    - $$\delta$$ drops to low values in the inital training period for all environements
    - In fruitbot and starpilot, $$\delta$$ keeps further decreasing after the intial drop
        - In these environments, the generalization gap is low
    - In bigfish and dogeball, $$\delta$$ starts increasing slowly after the initial drop, indicating the features start losing their hierarchical strucutre.
        - In these enviroments, the agent starts overfitting and the test performance is low.
- S-RYM
    - Teseted on ProcGen benchmark
    - Tried with PPO and Rainbow DQN
    - Tried random crop data augmentation (which is used to improve generalization) but was outperformed by hyperbolic implementation.
    - Reduced the dimensionality of final representation from 256 to 32, which provided further improvement in performance.
    - Tested on Atari, observed improvement over eucledian implementation.

### Limitations

- Spectral normalization limits the expressivity of the eucledian part of the network.
- The training time is higher
    - Most of the slowdown is due to the power iteration used in spectral normalization.
- Fixed curvature might not always yield the appropriate inductive bias

## References

<https://towardsdatascience.com/hyperbolic-deep-reinforcement-learning-b2de787cf2f7>

<https://www.reddit.com/r/MachineLearning/comments/xzfmk8/r_hyperbolic_deep_reinforcement_learning_they/>

<https://bjlkeng.io/posts/hyperbolic-geometry-and-poincare-embeddings/>

## Implementations

<https://github.com/twitter-research/hyperbolic-rl>