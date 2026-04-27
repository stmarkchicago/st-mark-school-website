import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const code = url.searchParams.get('code');

  if (!code) {
    // This is the initial request - redirect to GitHub OAuth
    const clientId = 'Ov23li7U1ttSLNIYVyE7';
    const redirectUri = `${url.origin}/app/api/auth`;
    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;

    return new Response(null, {
      status: 302,
      headers: {
        Location: githubUrl,
      },
    });
  }

  // This is the callback from GitHub - exchange code for token
  const CLIENT_ID = 'Ov23li7U1ttSLNIYVyE7';
  const CLIENT_SECRET = '2df48cc361e2ebc6a364b2ec7dcc3825c60ba86a';

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return new Response(`OAuth error: ${data.error_description}`, { status: 400 });
    }

    // Return success page that communicates with CMS
    return new Response(
      `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authorizing...</title>
</head>
<body>
  <p>Authorization successful. Closing window...</p>
  <script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          'authorization:github:success:' + JSON.stringify(${JSON.stringify(data)}),
          e.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body>
</html>`,
      {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  } catch (error) {
    return new Response(`Server error: ${error}`, { status: 500 });
  }
};
