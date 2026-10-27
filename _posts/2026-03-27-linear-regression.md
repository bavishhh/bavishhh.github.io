---
layout: post
title: Interpreting Linear Regression Solution
date: 2026-03-27 18:08:00-0400
tags: ml
categories: notes
giscus_comments: false
related_posts: false
---


The closed-form solution to linear regression is

$$
w^* = (X^T X)^{-1}X^T y.
$$

It is easy to derive this equation. But what do the two terms $X^Ty$ and $(X^T X)^{-1}$ actually do?

## The Hessian

Consider the least-squares loss

$$
L(w) = \frac{1}{2}\|Xw-y\|^2.
$$

Expanding,

$$
L(w)
=
\frac{1}{2}
\left(
w^T X^T X w
-2y^T Xw
+y^T y
\right).
$$

The gradient is

$$
\nabla L(w) = X^T Xw - X^T y,
$$

and the Hessian is

$$
H = \nabla^2 L(w)=X^T X.
$$

Therefore, the linear regression solution can also be written as
$$
w^* = H^{-1}X^T y.
$$

This decomposition gives us a useful way to interpret the solution.

## $X^T y$: How much does each feature align with the target?

Suppose the columns of $X$ are the feature vectors

$$
X=[x_1,x_2,\ldots,x_d].
$$

Then

$$
X^T y =
\begin{bmatrix}
x_1^T y\\
x_2^T y\\
\vdots\\
x_d^T y
\end{bmatrix}.
$$

Each entry measures how strongly a feature aligns with the target.

If a feature points strongly in the same direction as $y$, its inner product with $y$ will be large. So $X^T y$ gives us a first guess for how much weight each feature should receive.

If the features are orthonormal, i.e. $X^T X = I$, then $w^* = X^T y$.

In this special case, each feature gets a weight determined directly by how much it aligns with the target.

## Hessian corrects for feature correlations

Suppose two features, $x_2$ and $x_3$, are correlated and both align strongly with $y$. $X^T y$ would assign large weights to both the features. Correlated features are partly describing the same direction in the data. Giving both independently large weights would effectively double count that direction.

This is where the term $(X^T X)^{-1}$ comes in.

The matrix $X^T X$ describes the geometry of the features. Its diagonal entries capture the scale of individual features, while its off-diagonal entries capture alignment between different features.

Multiplying by its inverse adjusts the raw feature-target alignments to account for these dependencies.

So we can interpret the linear regression solution as

$$
\boxed{
w^*
=
\underbrace{(X^T X)^{-1}}_{\text{correct for feature geometry}}
\underbrace{X^T y}_{\text{feature-target alignment}}
}
$$

Therefore the solution is: first measure how much each feature aligns with the target. Then correct those measurements for how much the features overlap with each other.
