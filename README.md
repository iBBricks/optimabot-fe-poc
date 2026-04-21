# optimabot-fe-poc

Frontend unificato Optimabot HORECA — deployato su Azure Static Web App.

## Struttura

```
customer/   → app ordini cliente (scansione QR → ordine → pagamento)
waiter/     → app cameriere (alert rendezvous robot)
kds/        → kitchen display system (stato ordini in cucina)
```

## URL produzione

| Frontend   | URL |
|---|---|
| KDS        | `https://gentle-river-0e68af703.7.azurestaticapps.net/kds` |
| Waiter     | `https://gentle-river-0e68af703.7.azurestaticapps.net/waiter` |
| Customer   | `https://gentle-river-0e68af703.7.azurestaticapps.net/customer` |
| Root       | redirect automatico a `/kds` |

## Backend

`https://ca-optimabot-be-poc.bravedesert-6026246e.westeurope.azurecontainerapps.io`

L'URL è iniettato automaticamente nei `config.js` durante il deploy GitHub Actions
(sostituzione del placeholder `__BACKEND_URL__`).

## Deploy

Push su `main` → GitHub Actions → deploy automatico su Azure SWA.

## Dev locale

Aprire direttamente i file HTML con Live Server (VSCode) o un server locale.
Il fallback in `config.js` usa `window.location.origin` se `__BACKEND_URL__` non è sostituito,
oppure `http://localhost:8000` su `file://`.
