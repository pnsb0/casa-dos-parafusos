// CONFIGURAÇÃO
const WHATSAPP = "5567999130577"; // 55 + DDD + número (tirado do cadastro público — CONFIRMAR com a loja)
const MENSAGEM = "Oi! Li a história da Casa dos Parafusos no site e queria tirar uma dúvida.";

const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`;
document.querySelectorAll("[data-whats]").forEach((a) => (a.href = link));
