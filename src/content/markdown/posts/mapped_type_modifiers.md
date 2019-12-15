---
path: "/mapped-type-modifiers"
date: "2019-07-14"
title: "Mapped Type Modifiers"
---

The following are some of my notes from the course [Practical Advanced TypeScript](https://egghead.io/courses/practical-advanced-typescript)

I can map the properties of one type onto another, and modify them too. Here I am pulling in all of the properties from `Animal` but making them read only and optional

```
interface Animal {
  numLegs: number;
  hasHair: boolean;
}

interface ReadonlyAnimal {
  readonly [K in keyof Animal]+?: Animal[K]
}
```