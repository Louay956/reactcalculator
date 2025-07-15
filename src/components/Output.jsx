
const Output = () => {
  return (
    <div id="output">
          <div class="outputs space-between">
            <span
              >Tip Amount <br />
              <small>/ person</small></span>
            <h1 class="price" id="tip-amount">$0.00</h1>
          </div>
          <div class="outputs space-between">
            <span>Total <br />
              <small>/ person</small></span>
            <h1 class="price" id="total-amount">$0.00</h1>
          </div>
          <button id="reset-button">Reset</button>
        </div>
  )
}

export default Output