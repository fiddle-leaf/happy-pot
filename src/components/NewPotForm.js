import { getPlants } from "../features/plants";

export default function NewPotForm() {
  //const plants = getPlants("s");
  return (
    <article>
      <form>
        <span>
          <label htmlFor="plant_name">Plant Name:</label>
          <input type="text" name="plant_name" required />
        </span>
        <span>
          <label htmlFor="pot_type">Choose Pot Type:</label>
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
          <label htmlFor="gotcha_day">Gotcha Day:</label>
          <input type="date" />
        </span>
        <span>
          <label htmlFor="last_watered">Last Watered:</label>
          <input type="date" />
        </span>

        <search>
          <span>
            <label htmlFor="plant_type">Search Plant Type:</label>
            <input type="search" placeholder="Monstera" />
            <button type="button">search</button>
          </span>
        </search>
        <span>
          <input type="submit" value="Submit" />
        </span>
      </form>
    </article>
  );
}
