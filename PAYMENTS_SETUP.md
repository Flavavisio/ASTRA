# ASTRA Premium — pagamento

A app está preparada para Premium a 1,99 €/mês, mas não contém credenciais secretas nem simula cobranças.

Fluxo previsto:
1. Utilizador autenticado toca em “Ativar Premium”.
2. Uma Supabase Edge Function cria o checkout no fornecedor escolhido.
3. O fornecedor envia webhook assinado para outra Edge Function.
4. Só o webhook confirmado atualiza `subscriptions`, `profiles.plan` e `profiles.premium_until`.
5. Cancelamentos/renovações também entram por webhook.

Nunca colocar secret/service-role/provider-secret no JavaScript público.


## Preços atuais
- Mensal: 1,99 €/mês
- 12 meses: 23,88 €
- Desconto anual: 10%
- Anual: 21,49 €/ano
- Poupança: 2,39 €/ano
