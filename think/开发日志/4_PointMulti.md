> 之前呢，一次只能修改台本里的一次数据，效率不高，如果我想一次修改台本里的多次数据该怎么办呢

这个时候需要中间媒介进行大量数据保存，然后传递（缓冲区对象）

缓冲区对象是 webGL 系统中的一块内存区域，可以一次性地向缓冲区对象中填充大量的数据，然后将这些数据保存在其中，供顶点着色器（台本）使用

# 使用缓冲区对象流程

- b1.创建缓冲区对象（gl.createBuffer()）
- b2.将缓冲区对象绑定到目标（gl.bindBuffer()）
- b3.向缓冲区对象中写入数据（gl.bufferData()）
- b4.将缓冲区对象分配给 attribute 变量（gl.vertexAttribPointer()）
- b5.开启 attribute 变量（gl.enableVertexAttribArray()）

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce433ac1b790406cb7eb3b56647b7861~tplv-k3u1fbpfcp-watermark.image?)

> 具体请看这篇文章 https://juejin.cn/post/7067872350565466149
