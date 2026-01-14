import { els } from "./dom.js";
import { setMessage, showForm, showResult, renderBigChips} from "./ui.js";
import { validate } from "./validate.js";
import { draw } from "./random.js";

//Escuta quando o formulário é enviado
els.form.addEventListener("submit", (e) => {
  e.preventDefault();

  setMessage(els.message, "");

  const values = {
    amount: Number(els.amount.value),
    min: Number(els.min.value),
    max: Number(els.max.value),
    noRepeat: els.noRepeat.checked,
  };

  const error = validate(values);
  if (error) {
    setMessage(els.message, error);
    return;
  }

  const numbers = draw(values.amount, values.min, values.max, values.noRepeat);
  renderBigChips(els, numbers);
  els.resultSubtitle.textContent = "1º RESULTADO";
  showResult(els);
});

els.btnAgain.addEventListener("click", () => {
  showForm(els);
});
// End of file: scripts/main.js