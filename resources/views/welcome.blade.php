<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,minimal-ui">
    <meta name="theme-color" content="#10044A">
    <meta name="description" content="FIFA World Cup 2026 - Prediction Game">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="FIFA 2026">
    <title>FIFA World Cup 2026</title>

    <!-- PWA Manifest -->
    <link rel="manifest" href="{{ asset('manifest.json') }}">
    <link rel="apple-touch-icon" href="{{ asset('images/icons/icon-192x192.png') }}">
    <link rel="shortcut icon" href="{{ asset('images/icons/favicon.ico') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Roboto:wght@400;500;700;800&display=swap" rel="stylesheet">

    <!-- App CSS -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}?v={{ filemtime(public_path('css/app.css')) }}">

    <style>
        #app-loader {
            position: fixed;
            inset: 0;
            background: #10044A;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            flex-direction: column;
            gap: 16px;
        }
        .loader-ring {
            width: 56px;
            height: 56px;
            border: 4px solid rgba(255,165,0,0.2);
            border-top-color: #FFA500;
            border-radius: 50%;
            animation: spin 0.9s linear infinite;
        }
        .loader-text {
            color: #FFA500;
            font-family: 'Rajdhani', sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 2px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
    </style>
</head>
<body>
<div id="app-loader">
    <div class="loader-ring"></div>
    <div class="loader-text">FIFA WORLD CUP 2026</div>
</div>

<div id="app">
    <app></app>
</div>

<script src="{{ asset('js/app.js') }}?v={{ filemtime(public_path('js/app.js')) }}"></script>

<script>
    // Register PWA service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('{{ asset("sw.js") }}', { scope: '{{ env("MIX_APP_BASE") ? env("MIX_APP_BASE")."/" : "/" }}' })
                .then(reg => console.log('SW registered'))
                .catch(err => console.log('SW registration failed:', err));
        });
    }
</script>
</body>
</html>
