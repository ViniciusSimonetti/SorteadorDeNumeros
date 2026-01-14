export function setMessage(el, text) {
  el.textContent = text;
}

export function clearResults(resultsEl) {
  resultsEl.innerHTML = "";
}

export function renderChips(resultsEl, numbers) {
  resultsEl.innerHTML = "";
  for (const n of numbers) {
    const chip = document.createElement("span");
    chip.className = "result-chip";
    chip.textContent = n;
    resultsEl.appendChild(chip);
}

}

export function renderBigChips(els, numbers) {
  els.resultsBig.innerHTML = "";

  for (const n of numbers) {
    const chip = document.createElement("span");
    chip.className = "result-chip";
    chip.textContent = n;
    els.resultsBig.appendChild(chip);
  }
}


//Funções para tela de resultado maior 

 export function showForm(els) {
  els.screenResult.hidden = true;
  els.screenForm.hidden = false;
}

 export function showResult(els) {
  els.screenForm.hidden = true;
  els.screenResult.hidden = true;
}

 export function renderBigResult(els, numbers) {
  els.resultsBig.innerHTML = "";

  for (const n of numbers) {
    const chip = document.createElement("span");
    chip.className = "result-chip";
    chip.textContent = n;
    els.resultsBig.appendChild(chip);
  }
}



