import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

function Cards() {
  const [key, title, excerpt, link, image] = useState();
  console.log("test", title, link, image, excerpt);
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{title}</h5>
          </td>
          <td>
            <h5>{excerpt}</h5>
          </td>
          <td>
            <h4>{link}</h4>
          </td>
          <td>
            <p>{image}</p>
          </td>
        </tr>
      </tbody>
    </table>
    )
}

export default Cards
