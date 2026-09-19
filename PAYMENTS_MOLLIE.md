# ASTRA — Pagamentos Mollie
Preparado para:
- mensal: 1,99 EUR recorrente;
- anual: 21,49 EUR;
- checkout criado por Supabase Edge Function;
- chave privada nunca fica no frontend;
- webhook é responsável por ativar/renovar/cancelar Premium.

Falta para pagamentos reais:
1. Criar/validar conta Mollie.
2. Adicionar o segredo `MOLLIE_API_KEY` às Edge Functions.
3. Configurar URL pública da ASTRA (`ASTRA_SITE_URL`).
4. Ativar os métodos pretendidos no dashboard Mollie.
5. Deploy das funções `astra-checkout` e `astra-mollie-webhook`.

Nota Portugal:
MB WAY e Multibanco são adequados para pagamentos pontuais, mas não são métodos recorrentes. Para a mensalidade automática devem ser usados métodos recorrentes suportados pelo fornecedor, como cartão/SEPA conforme configuração Mollie.
