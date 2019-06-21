# op-view-progress
Element's position on the screen / view. Progress is calculated in relation between node's top position, height and window's height. The value is: 

* `-1` and less for items under viewport
* `-1 ... 0 ... 1` in the viewport, where `0` is for elements in the middle
* `1` and more for items above viewport

# Install
```sh
npm install op-view-progress
```

```sh
yarn add op-view-progress
```

# Usage

```js
import opViewProgress from 'op-view-progress';
```

Create instance:
```js
const progress = new opViewProgress(domNode);
````

Update / tick:
```js
progress.tick();
````

Get value:
```js
progress.value;
````