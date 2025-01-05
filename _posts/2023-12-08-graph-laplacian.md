---
layout: post
title: Graph Laplacian
date: 2023-12-08 19:26:00-0400
tags: graphs
categories: notes
giscus_comments: true
related_posts: false
---

- In eucledian space, Laplacian is defined as divergence of the gradient of the function

$$ L = \nabla\cdot \nabla f $$

- For graph laplacian, we need to ask:
    - What is the meaning of function applied to a graph?
    - What is the meaning of gradient of a graph function?
    - What is the divergence of the graph gradient?
- A graph function assings a number to each node. Eg: The number of friends a person has in a social network graph.
- In eucledian space, gradient is the change in the function in each direction. Extending this to graphs, the gradient is the array of difference of function values along each edge.

$$ \nabla f = K^Tf $$

where K is the incidence matrix, i.e., for every edge (u, v), K\[u, e\]= +1 and K\[v, e\] = -1

- In eucledian space, divergence in the net outward flux of the vector field at a point. In graphs, the vector field is the gradient, and divergence of gradient g will be

$$ \nabla g = Kg \\ = KK^Tf $$

Therefore, $L = KK^T = D - W$ where D is the degree matrix and A is the adjacency matrix.

- The matrix $KK^T$has diagonal entries equal to the degree of the vertex and the {ij}-th entry is the number of edges connecting the vertices i and j.
- Laplacian is the second derivative, so it tells how smooth the function is. Similarly, the laplacian of a graph function tells us how smooth the graph function is.
- In the case of graphs, a smooth function is the one which doesn’t change abruptly when you traverse along the edges, but it can jump abruptly along nodes that are not connected.
- The gradient maps a function on nodes to function on edges, and the divergence maps it back to function on nodes ($KK^T$)

**References:**

- [https://www.quora.com/Whats-the-intuition-behind-a-Laplacian-matrix-Im-not-so-much-interested-in-mathematical-details-or-technical-applications-Im-trying-to-grasp-what-a-laplacian-matrix-actually-represents-and-what-aspects-of-a-graph-it-makes-accessible/answer/Muni-Sreenivas-Pydi](https://www.quora.com/Whats-the-intuition-behind-a-Laplacian-matrix-Im-not-so-much-interested-in-mathematical-details-or-technical-applications-Im-trying-to-grasp-what-a-laplacian-matrix-actually-represents-and-what-aspects-of-a-graph-it-makes-accessible/answer/Muni-Sreenivas-Pydi)
- [https://www.quora.com/Whats-the-intuition-behind-a-Laplacian-matrix-Im-not-so-much-interested-in-mathematical-details-or-technical-applications-Im-trying-to-grasp-what-a-laplacian-matrix-actually-represents-and-what-aspects-of-a-graph-it-makes-accessible/answer/Alex-Kritchevsky](https://www.quora.com/Whats-the-intuition-behind-a-Laplacian-matrix-Im-not-so-much-interested-in-mathematical-details-or-technical-applications-Im-trying-to-grasp-what-a-laplacian-matrix-actually-represents-and-what-aspects-of-a-graph-it-makes-accessible/answer/Alex-Kritchevsky)
- [https://mathoverflow.net/questions/368963/intuitively-what-does-a-graph-laplacian-represent](https://mathoverflow.net/questions/368963/intuitively-what-does-a-graph-laplacian-represent)
- [https://mbernste.github.io/posts/laplacian_matrix/](https://mbernste.github.io/posts/laplacian_matrix/)
- [http://math.uchicago.edu/~may/REU2022/REUPapers/Li,Hanchen.pdf](http://math.uchicago.edu/~may/REU2022/REUPapers/Li,Hanchen.pdf)