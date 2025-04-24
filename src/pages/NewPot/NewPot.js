import NewPotForm from "../../components/NewPotForm";
import est from "./NewPot.module.sass";

export default function NewPot() {
  return (
    <article className={est.new_pot}>
      <div>
        <h2>NewPot</h2>
      </div>
      <NewPotForm />
    </article>
  );
}
