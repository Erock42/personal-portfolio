const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const send = metric => {
        try {
          // Call the provided callback (typical in CRA setups)
          onPerfEntry(metric);
        } catch (e) {
          // swallow callback errors
        }

        // Also try sending to a local analytics endpoint if available
        if (navigator && navigator.sendBeacon) {
          const url = '/analytics';
          const body = JSON.stringify(metric);
          navigator.sendBeacon(url, body);
        } else if (typeof fetch === 'function') {
          fetch('/analytics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(metric),
          }).catch(() => {});
        } else {
          // fallback: log to console in environments where network isn't available
          // (useful during local dev)
          // eslint-disable-next-line no-console
          console.log('Web Vitals metric:', metric);
        }
      };

      getCLS(send);
      getFID(send);
      getFCP(send);
      getLCP(send);
      getTTFB(send);
    });
  }
};

export default reportWebVitals;
