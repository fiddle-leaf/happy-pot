export default function NewPotForm() {
  return (
    <div>
      <form>
        <span>
          <label for="plant_name">Plant Name:</label>
          <input type="text" name="plant_name" required />
        </span>
        <span>
          <label for="plants">Choose Plant Type:</label>
          <select name="plants" id="plants"></select>
        </span>
        <span>
          <label for="gotcha_day">Gotcha Day:</label>
          <input type="date" />
        </span>
        <span>
          <label for="last_watered">Last Watered:</label>
          <input type="date" />
        </span>
        <span>
          <label for="pot_type">Choose Pot Type:</label>
          <select name="pot_type" id="pot_tyoe">
            <option value="plastic" key="0">
              plastic
            </option>
            <option value="metal" key="1">
              metal
            </option>
            <option value="ceramic" key="2">
              ceramic
            </option>
            <option value="glass" key="3">
              glass
            </option>
          </select>
        </span>
        <span>
          <input type="submit" value="Submit" />
        </span>
      </form>
    </div>
  );
}
