---
title: Presentational and Container Components Pattern in React
date: '2020-04-15'
tags:
  - coding patterns
  - react
---

In a nutshell, presentational components are concerned with how things _look_ while container components are more concerned with how things _work_. Container components are components that specify the data a presentational component should render and these components can be reused across different parts of an application.

The pattern is based on the need to separate _actual_ business logic from the UI details by concealing the props we don't care about. It implements that by having a purely presentational component which does not know much about our domain. For example, if the component is a `<LikeButton onLike={...} />`, it doesn't care what's being liked. It's just a UI element which calls the callback from the `onLike` prop (that essentially acts as a bridge between the low-level world of UI events, and the world of high-level domain concepts). The role of the container component, then, is to give _domain meaning_ to that presentational component. Following on the example, if we wanted to have a like button for the currently open post, a container component `<PostLikeButton />` would be able to figure out what post is currently open and render a `<LikeButton onLike={...} />` with the appropriate callback.

## Additional Reading

- [Presentational and Container Components (Mar 23, 2015)](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
