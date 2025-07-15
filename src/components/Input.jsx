
const Input = () => {
  return (
     <form id="tip-form">
          <div class="form-group">
            <label for="bill">Bill</label>
            <input
              type="number"
              id="bill"
              name="bill"
              placeholder="0"
              min="0"
              required
            />
          </div>
          <div class="form-group">
            <label>Select Tip %</label>
            <div class="grid-3">
              <button type="button" class="tip-button" data-value="5" >
                5%
              </button>
              <button type="button" class="tip-button" data-value="10">
                10%
              </button>
              <button type="button" class="tip-button" data-value="15">
                15%
              </button>
              <button type="button" class="tip-button" data-value="25">
                25%
              </button>
              <button type="button" class="tip-button" data-value="50">
                50%
              </button>
              <input type="text" id="custom-tip" placeholder="Custom" min="0" />
            </div>
          </div>
          <div class="form-group">
            <label for="people">Number of People</label>
            <input
              type="number"
              id="people"
              name="people"
              placeholder="0"
              min="1"
              required
            />
          </div>
        </form>
  )
}

export default Input