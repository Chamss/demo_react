import { useState } from 'react';

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  // const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
  // const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })
  return (
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3 text-center margTop30">
        <b>{left}</b>
        <div className="btn-group">
          <button onClick={handleLeftClick} className="btn btn-info">
            Left
          </button>
          <button onClick={handleRightClick} className="btn btn-danger">
            Right
          </button>
        </div>
        <b>{right}</b>
        <hr />
        <h3>{allClicks.join(' ')}</h3>
      </div>
    </div>
  )
}
export default App;