# MediatorPattern

💌**oop的设计原则**：行为分布到各个对象，细粒度划分对象有利于对象的可复用性。而增加对象间联系，将降低他们间的复用性。

💌**定义**：
1. 解除了对象间的紧耦合关系
2. 所有对象都通过中介者对象进行联系
3. 使网状多对多关系 -> 一对多关系（当某个对象改变之后，只需通知中介者对象即可）
4. 中介者模式是最小知识原则：（尽可能少的了解另外的对象，只能通过中介者互相影响）的一种实现

💌**缺点**：
1. 将对象间的交互复杂度转为了中介者对象的复杂度，使中介者对象难以维护

💌**注意**：
1. 实际项目中，对象之间存在依赖是正常现象
2. 若对象间的耦合随项目的复杂度呈指数形式增长，可考虑使用中介者模式

💌**现实中的例子**：
1. 机场指挥塔：飞机只需要通过与指挥塔通信获取当前其他飞机信息和相关航线状态即可避免发生碰撞等危险
2. 博彩公司：彩民无论输赢仅需和博彩公司通信即可
