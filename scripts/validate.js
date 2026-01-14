export function validate({ amount, min, max, noRepeat }) {
    
  if (!Number.isFinite(amount) || !Number.isFinite(min) || !Number.isFinite(max)) {
    return "Preencha quantidade, mínimo e máximo.";
  }

  if (max <= min) return "O máximo precisa ser maior que o mínimo.";
  if (amount <= 0) return "A quantidade precisa ser maior que zero.";

  const intervalSize = max - min + 1;
  if (noRepeat && amount > intervalSize) {
    return `Com “Não repetir” ligado, a quantidade máxima é ${intervalSize}.`;
  }

  return null;
}