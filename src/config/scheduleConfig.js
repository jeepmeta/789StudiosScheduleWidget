// Core schedule definition: times, types, assets, links.
// We’ll flesh this out later with real data.

export const scheduleSlots = [
  // Example slot structure
  {
    id: 'slot-1',
    type: 'bic', // 'bic' | 'zippo'
    startTime: '06:00', // 24h, local EST logic in hook
    endTime: '07:00',
    label: 'Morning Bic Slot',
    lighterImage: '/images/bics/bic-default.png',
    flameVideo: '/images/flames/bic-flame.webm',
    summaryImage: '/images/summaries/sample-summary.png',
    linkType: 'x', // 'x' | 'website'
    linkUrl: 'https://x.com/example',
  },
  // Add more slots...
];
