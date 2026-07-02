// ARCJ "Where to Focus" — Anthropic API proxy (Vercel serverless function)
//
// Place this file at:  /api/claude.js  in your repo root.
// It becomes available at:  https://arcj.uk/api/claude
//
// It keeps your Anthropic API key server-side and checks the shared access code
// before spending anything, so the key is never exposed to the browser and
// randoms can't run up your bill.
//
// Set these two Environment Variables in the Vercel dashboard
// (Project → Settings → Environment Variables), for Production (and Preview):
//   ANTHROPIC_API_KEY   your key from console.anthropic.com  (secret)
//   FOCUS_PASSCODE      the access code you give invited clients

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Gate: require the shared access code (sent by the tool as a header).
  const provided = req.headers['x-focus-pass'];
  if (!process.env.FOCUS_PASSCODE || provided !== process.env.FOCUS_PASSCODE) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(500).json({ error: 'Server missing ANTHROPIC_API_KEY' });
    return;
  }

  try {
    const { model, max_tokens, system, messages } = req.body || {};

    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: model || 'claude-haiku-4-5',
        max_tokens: max_tokens || 900,
        system,
        messages,
      }),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      res.status(502).json({ error: 'anthropic_error', detail: data });
      return;
    }

    // Flatten the Messages API response to the plain string the tool expects.
    const text = (data.content || []).map((b) => b.text || '').join('');
    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ error: String(e && e.message ? e.message : e) });
  }
}
