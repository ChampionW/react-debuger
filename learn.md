ui = fn(state)
// update: 指的是我们调用setstate产生一个update的数据结构，这个数据结构上面存在一些标识与优先级
const  state = reconcile(update)
const  ui = commit(state)
.调度器(scheduler)：排序优先级，让优先级高的任务先进行reconcile
.协调器(reconciler): 找出哪些节点发生了改变，并且打上不同的Tag，发生在render阶段
.渲染器（renderer）: 将reconciler中打好标签的节点渲染到视图上
fiberRoot:整个项目的根节点，只能有一个
rootFiber: 是我们用ReactDom.render()创建的，可能会拥有多个
render阶段: begainwork completeWork
浏览器渲染的东西为什么会卡顿呢？
我们知道浏览器的fps是60hz，也就是每16.6ms会刷新一次
其核心是实现了一套异步可中断、带优先级的更新
react17会在每一帧分配一个时间片，给js执行，如果在这个时间内还没有执行完毕，那就要暂停他的执行，等待下一帧继续执行，把执行权交给浏览器去绘制
Fiber双缓存
打上标签： a|= TAGS 按位或