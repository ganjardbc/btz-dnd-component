import React from 'react'

import DNDComponent from 'btz-dnd-component'
import 'btz-dnd-component/dist/index.css'

const App = () => {
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

export default App
