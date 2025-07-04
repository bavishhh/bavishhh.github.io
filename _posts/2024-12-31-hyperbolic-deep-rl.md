---
layout: post
title: Hyperbolic Deep Reinforcement Learning
date: 2024-12-31 13:24:00-0400
tags: deep-learning
categories: notes
giscus_comments: true
related_posts: false
---

> Review of Paper Hyperbolic Deep Reinforcement Learning by Cetin *et al.*, 2023. [Link](https://openreview.net/pdf?id=TfBHFLgv77)  


Representation learning is at the core of modern reinforcement learning (RL). The structure of the learned features determines how well an agent can generalize beyond its training environment. The paper *"Hyperbolic Deep Reinforcement Learning"* by Cetin et al. (2023) embeds the information in **hyperbolic space**, enabling the representations to capture the hierarchical structures present in the environment. 

### Why Hyperbolic Geometry?

Much of the world is hierarchical. Consider decision trees, biological taxonomies, or even software function calls. Hyperbolic space is well suited for such data because it allows exponential growth of volume with radius, capturing tree-like relationships in a continuous setting.

In the Poincaré ball model, geodesics appear as arcs that curve inward, perpendicular to the boundary. As a point moves outward from the origin, the space expands rapidly, offering more room for distinguishing fine-grained variations. This is in stark contrast to the linear growth in Euclidean space. As such, hyperbolic embeddings can be more compact and semantically meaningful for hierarchical structures.

In RL, trajectories induced by policies often form branching structures due to the Markovian property. Ignoring this structure during representation learning may encourage overfitting to superficial features.

### Measuring Hyperbolicity of Representations

The authors introduce a geometric notion called *δ-hyperbolicity*. It's a way to quantify how close a metric space is to being tree-like. Imagine forming a triangle by connecting three points in the space using shortest paths. If every point on one side of the triangle lies within δ distance of some point on the other two sides, the triangle is called δ-slim. For trees, δ is zero.

The authors compute this δ value for learned representations during training and normalize it using the diameter of the space, yielding a value between 0 and 1. A low δ indicates a highly hierarchical (tree-like) structure, while a high value suggests a flat, non-hierarchical space.

### What Happens During Training?

They analyze how δ changes over time when training PPO agents using the IMPALA architecture.  Initially, δ drops in all cases, indicating that representations begin to align with the underlying task hierarchy. In *FruitBot* and *StarPilot*, δ continues to drop, and agents generalize well. However, in *BigFish* and *Dodgeball*, δ starts increasing after an initial drop. These agents show signs of overfitting and struggle during test time.

This pattern suggests that the evolution of δ-hyperbolicity during training may serve as an indicator of generalization capacity.

### Training in Hyperbolic Space Is Hard

The authors try to train agents where the final layers output representations directly in hyperbolic space. This involves replacing the final ReLU and linear layers with an exponential map and a gyroplane fully connected layer. But the performance drops. Exploration becomes difficult, and agents become prematurely deterministic, possibly due to optimization issues.

Prior techniques such as careful initialization and representation clipping, which are effective in supervised settings, fail in the RL context due to the non-stationarity of the RL objective.

### Enter Spectral Regularization (S-RYM)

To address these challenges, the authors introduce a novel regularization strategy inspired by GAN training. Spectral normalization is applied to all Euclidean layers, stabilizing gradients and reducing sensitivity to initialization.

Additionally, the final latent vector is scaled before being mapped to hyperbolic space. This ensures that variations in dimensionality do not amplify gradients unpredictably. The result is a training procedure that converges reliably and yields strong performance.

This approach, called **Spectrally Regularized Hyperbolic Mappings (S-RYM)**, resolves optimization issues. Agents now perform competitively with or better than Euclidean baselines, and gradients remain well-behaved.

### Experiments and Observations

* **ProcGen**: Hyperbolic PPO and Rainbow DQN outperform baselines.
* **Data Augmentation**: Even with random crop augmentations (a strong generalization baseline), hyperbolic agents still win.
* **Dimensionality**: Reducing latent space from 256 to 32 improves performance, showing that hierarchical compression helps.
* **Atari**: Gains carry over to Atari games, not just procedurally generated ones.

### Limitations

* Spectral normalization introduces computational overhead, primarily due to the power iteration.
* The Euclidean part of the network loses some expressivity.
* Fixed curvature of the hyperbolic space might not always encode the right inductive bias.


### References

<https://towardsdatascience.com/hyperbolic-deep-reinforcement-learning-b2de787cf2f7>

<https://www.reddit.com/r/MachineLearning/comments/xzfmk8/r_hyperbolic_deep_reinforcement_learning_they/>

<https://bjlkeng.io/posts/hyperbolic-geometry-and-poincare-embeddings/>

### Implementations

<https://github.com/twitter-research/hyperbolic-rl>