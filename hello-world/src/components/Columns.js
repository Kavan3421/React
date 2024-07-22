import React from 'react'

function Columns() {
  const items = []
  return (
    <> {/*this is sort but can not add the key*/}
      {
        items.map( item => (
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
          </React.Fragment>
        ))
      }
      <td>Name</td>
      <td>Kavan</td>
    </>
  )
}

export default Columns
