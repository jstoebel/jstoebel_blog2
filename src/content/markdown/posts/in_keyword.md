---
path: "/in-keyword"
date: "2019-07-12"
title: "The Keyword `in`"
---

The following are some of my notes from the course [Practical Advanced TypeScript](https://egghead.io/courses/practical-advanced-typescript)


The `in` keyword lets us check if a certain property exists on an object. If we use it with a conditional, the compiler can make inferences  based on it:

```typescript
interface Admin {
  id: string;
  role: string:
}
interface User {
  email: string;
}


function redirect(usr: Admin | User) {
  if("role" in usr) {
    routeToAdminPage(usr.role); // compiler knows usr is an Admin!
  } else {
    routeToHomePage(usr.email); // usr us a User!
  }
}
```