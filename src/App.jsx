import React from "react"

function App() {
  const [numberBoxes, setNumberBoxes] = React.useState('');
  const [showBoxes, setShowBoxes] = React.useState(false);
  const [boxColors, setBoxColors] = React.useState([]);

  const handleChangeNumberBox = (e) => {
    setNumberBoxes(parseInt(e.target.value));
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleGenerateBox = () => {
    setShowBoxes(true);
    if (numberBoxes > 0) {
      const colors = [];
      for (let i = 0; i < numberBoxes; i++) {
        colors.push('gray');
      }
      setBoxColors(colors);
    }
  }

  const handleBoxClick = (index) => {
    const newColors = [...boxColors];
    newColors[index] = getRandomColor();
    setBoxColors(newColors);
  };

  const renderBoxes = () => {
    if (numberBoxes === 0) {
      return <div>no box</div>;
    }
    return (
      <div>
        {boxColors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              display: 'inline-block',
              width: '100px',
              height: '100px',
              margin: '10px',
              textAlign: 'center',
              lineHeight: '100px',
              color: '#fff',
              cursor: 'pointer'
            }}
            onClick={() => handleBoxClick(index)}
          >
            Box #{index + 1}
          </div>
        ))}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="box-generate">
        <label htmlFor="numBoxes">Number of boxes:</label>
        <input type="number"
          id="numBoxes"
          min="1"
          max="128"
          value={numberBoxes}
          onChange={handleChangeNumberBox}
        />
        <button onClick={handleGenerateBox}>Generate</button>
        <hr />
      </div>
      {showBoxes && <div>{renderBoxes()}</div>}
    </React.Fragment>
  )
}

export default App
