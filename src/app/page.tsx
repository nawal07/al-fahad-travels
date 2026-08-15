export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0;url=/en" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'window.location.replace("/en")',
          }}
        />
      </head>
      <body />
    </html>
  );
}
