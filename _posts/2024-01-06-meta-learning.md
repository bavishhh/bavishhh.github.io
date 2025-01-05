---
layout: post
title: Meta Learning
date: 2024-01-06 23:17:00-0400
tags: deep-learning
categories: notes
giscus_comments: true
related_posts: false
---


>**Goal:** Given data from many tasks $\mathcal{T}_1, ..., \mathcal{T_n}$ solve new task $\mathcal{T}_{new}$ more quickly/proficiently/stably

- Can we explicitly optimize for transferability?
	- In Transfer Learning we start from a model that has been already trained for some task and hope that it helps the target task.
	- In Multi-Task Learning we solve all the tasks together
- **Key Assumption**: meta-training tasks and meta-test task drawn i.i.d from same task distribution
- Tasks must share structure
- Two optimizers -- learner, which learns new tasks, and meta-learner, which trains the learner. 

| **Mechanistic View** | **Probabilistic View** |
| ---- | ---- |
| Deep network that can read in an entire dataset and make predictions for new datapoints<br> | Extract shared prior knowledge from a set of tasks that allows efficient learning of new tasks |
| Training this network uses a meta-dataset, which itself consists of many datasets, each for a different task | Learning a new task uses this prior and a small training set to infer most likely posterior parameters |
- Bayesian view: 
	- Shared structure between tasks is task parameters $\phi_i$ become independent when conditioned on $\theta$ ($\phi_i \perp\!\!\!\perp \phi_j \vert \theta$), and are otherwise not independent $\implies$ lower entropy distribution while conditioned on theta compared to prior over $\phi_i$ 
	- Therefore, once we identify $\theta$ learning $\phi$ should be faster since we have fewer bits to uncover from training data points
### Meta Supervised Learning
- Input: dataset $\mathcal{D}^{tr}$ and test data point $x^{ts}$, where $\mathcal{D}^{tr} : \{(x, y)_{1:K}\}$ (K-shot learning)
- Output: label $y^{ts}$
- Data: $\{\mathcal{D}_i\}$ where $\mathcal{D}_i : \{(x, y)_j\}$
- Reduces the meta-learning problem to the design and optimization of $f$ 
$$\large{y^{ts} = f_\theta(\mathcal{D}^{tr}, x^{ts})}$$
### Black-Box Adaptation
- **Key Idea:**
	- Train a neural network to represent $\phi_i = f_\theta(\mathcal{D}^{tr}_i)$ (learner)
	- Predict test poins using neural network parameterized by $\phi_i$ 
- **Algorithm**
	1. Sample task $\mathcal{T}_i$ (or mini batch of tasks)
	2. Sample disjoint datasets $\mathcal{D}^{tr}_i, \mathcal{D}^{test}_i$ from $\mathcal{D}_i$ 
	3. Compute $\phi_i = f_\theta(\mathcal{D}^{tr}_i)$
	4. Update $\theta$ using $\nabla_\theta \mathcal{L}(\phi_i, \mathcal{D}^{test}_i)$
	5. Repeat
- **Challenge**: outputting all the neural net parameters does not seem scalable 
	- Do not need to output all parameters, only sufficient statistic
	- low-dimensional vector $h_i$ - represents contextual task information
	- $\phi_i = \{h_i, \theta_g\}$
### Optimization based approach
- **Algorithm** ([[MAML]])
	1. Randomly initialize $\theta$
	2. Sample task (or mini batch of tasks)
	3. Sample disjoint datasets $\mathcal{D}^{tr}_i, \mathcal{D}^{test}_i$ from $\mathcal{D}_i$ 
	4. Using $\theta$ as the initial parameters, fine tune on $\mathcal{D}^{tr}$ to obtain $\phi$ $$\phi_i = \theta - \alpha \nabla_\theta \mathcal{L}(\theta, \mathcal{D}_i^{tr})$$
	5. Update $\theta$ based on the loss $\nabla_\theta \mathcal{L}(\phi_i, \mathcal{D}^{test}_i)$
	6. Repeat from step 2
- **Intuition**
	- Find $\theta$ such that it is very close to $\phi_i^*$ i.e., optimal parameters of all the tasks. 
- Need to compute second order derivatives - Hessian
	- Computing Hessian is expensive - $O(n^2)$ 
	- Can use [[Hessian Vector Product]] instead


# Further Reading
- Learning to Learn by Chelsea Finn [blog](https://bair.berkeley.edu/blog/2017/07/18/learning-to-learn/)