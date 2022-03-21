import React from 'react'

const Filter = () => {
  return (
      <>
      <div style={{ margin: `10px` }}>
      <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
    </>
  );
}

export default Filter;