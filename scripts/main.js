import { els } from "./dom.js";
import { setMessage, showForm, showResult, renderBigChips , renderRollingChips} from "./ui.js";
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

  // 1) Vai para a tela do resultado
  showResult(els);

  // 2) Mostra estado "sorteando"
  els.resultSubtitle.textContent = "SORTEANDO...";
  renderRollingChips(els, values.amount);

  // 3) Depois de um tempo, mostra o resultado real
  setTimeout(() => {
    const numbers = draw(values.amount, values.min, values.max, values.noRepeat);

    els.resultSubtitle.textContent = "1º RESULTADO";
    renderBigChips(els, numbers);
  }, 700);
});

els.btnAgain.addEventListener("click", () => {
  showForm(els);
});
// End of file: scripts/main.js