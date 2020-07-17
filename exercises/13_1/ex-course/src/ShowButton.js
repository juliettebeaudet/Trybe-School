import React from 'react';
const ShowButton = (props) => {
  const { changeTitle, value } = props;
  return (
    <button type="button" onClick={() => changeTitle(value)}>SHOW</button>
  )
}
export default ShowButton;
