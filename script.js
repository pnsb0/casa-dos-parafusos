// CONFIGURAÇÃO
const WHATSAPP = "5567998578452"; // 55 + DDD + número (passado pelo Giovani, 22/10/2026)
const MENSAGEM = "Oi! Vi o site da Casa dos Parafusos e queria tirar uma dúvida.";
const INSTAGRAM = "casadosparafusos11"; // usuário sem @ (vazio = botão e link do Instagram somem)

const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`;
document.querySelectorAll("[data-whats]").forEach((a) => (a.href = link));

if (INSTAGRAM) {
  document.querySelectorAll("[data-insta]").forEach((a) => (a.href = `https://www.instagram.com/${INSTAGRAM}/`));
  document.querySelectorAll("[data-insta-nome]").forEach((s) => (s.textContent = `@${INSTAGRAM}`));
} else {
  document.querySelectorAll(".btn-insta, [data-insta-bloco]").forEach((el) => el.remove());
}
