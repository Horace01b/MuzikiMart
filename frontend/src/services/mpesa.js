// src/services/mpesa.js
// This file shows how you might call your backend to trigger an M-Pesa payment
export async function mpesaPay({phone, amount, reference}) {
  // backend endpoint should call Safaricom Daraja API server-side
  const res = await fetch("/api/mpesa/stkpush", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({phone, amount, reference})
  });
  return res.json();
}
