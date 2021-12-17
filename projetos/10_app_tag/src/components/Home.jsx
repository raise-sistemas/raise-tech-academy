import React from 'react';
import Main from './Main';
import NaoTemTags from './NaoTemTags';

export default function Home(props) {
  return(
    <div>
      {/* {props.data ? <Main data={props.data} /> : <NaoTemTags /> } */}
        <Main />
    </div>
  )
}
