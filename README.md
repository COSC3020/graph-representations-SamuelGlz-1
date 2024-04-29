[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The run time complexity for my conversion is $\Theta$(|V|^2) because the fucntion convertToAdjList passes through the whole matrix, having to iterate through all the edjes

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

For my implementation for adjList $\rightarrow$ adjMatrix the $\Theta$ complexity is $(|V|^2)$ because it has three for loops, but two of them are sequential inside the outer loop. We end up with $V * (2V)$, which asymptotically is an element of $\Theta(|V|^2)$. 

