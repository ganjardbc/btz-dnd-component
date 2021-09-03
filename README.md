# btz-dnd-component

> BTZ Drag n Drop Component

[![NPM](https://img.shields.io/npm/v/btz-dnd-component.svg)](https://www.npmjs.com/package/btz-dnd-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save btz-dnd-component
```

## Usage

```jsx
import React, { Component } from 'react'

import DNDComponent from 'btz-dnd-component'

class Example extends Component {
  render() {
    return (
      <DNDComponent data={[
        {
          id: 1,
          content: 'Write a cool JS library',
        },
        {
          id: 2,
          content: 'Make it generic enough',
        },
        {
          id: 3,
          content: 'Write README',
        },
        {
          id: 4,
          content: 'Create some examples',
        },
        {
          id: 5,
          content: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          content: '???',
        },
        {
          id: 7,
          content: 'PROFIT',
        },
        {
          id: 8,
          content: 'AS IS AS',
        },
      ]} />
    )
  }
}
```

## License

MIT © [ganjardbc](https://github.com/ganjardbc)
