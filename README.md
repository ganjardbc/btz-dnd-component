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
          text: 'Write a cool JS library',
        },
        {
          id: 2,
          text: 'Make it generic enough',
        },
        {
          id: 3,
          text: 'Write README',
        },
        {
          id: 4,
          text: 'Create some examples',
        },
        {
          id: 5,
          text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          text: '???',
        },
        {
          id: 7,
          text: 'PROFIT',
        },
        {
          id: 8,
          text: 'AS IS AS',
        },
      ]} />
    )
  }
}
```

## License

MIT © [ganjardbc](https://github.com/ganjardbc)
