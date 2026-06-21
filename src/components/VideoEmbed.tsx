import { useEffect, useRef } from 'react'
import { useModule } from '../ModuleContext'

const VIDEO_ID = 'jP4lkASpEUo'

// Minimal typings for the YouTube IFrame API we touch.
declare global {
  interface Window {
    YT?: {
      Player: new (el: string | HTMLElement, opts: unknown) => unknown
      PlayerState: { ENDED: number }
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

/**
 * Embedded EAI tutorial. The Next button on slide 9 stays locked until the
 * viewer has watched the video to the end (tracked via the YouTube IFrame API).
 */
export default function VideoEmbed() {
  const { videoWatched, markVideoWatched } = useModule()
  const frameRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    // Ensure the embed has enablejsapi + a matching origin so the API can attach.
    let src = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`
    try {
      const origin = window.location?.origin
      if (origin) src += `&origin=${encodeURIComponent(origin)}`
    } catch {
      // ignore — fall back to the base src
    }
    frame.src = src

    function initPlayer() {
      const YT = window.YT
      if (!frame || !YT?.Player) return
      new YT.Player(frame, {
        events: {
          onStateChange: (event: { data: number }) => {
            if (event.data === YT.PlayerState.ENDED) markVideoWatched()
          },
        },
      })
    }

    if (window.YT?.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = initPlayer
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag)
      }
    }
  }, [markVideoWatched])

  return (
    <div
      style={{
        background: 'var(--teal-50)',
        border: '2px solid var(--teal-100)',
        borderRadius: 14,
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div>
        <div
          style={{
            fontSize: '.78rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '.7px',
            color: 'var(--teal-700)',
            marginBottom: 4,
          }}
        >
          Watch: How to Use an Epinephrine Auto-Injector
        </div>
        <div style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>
          Watch the full video below to learn how to use an epinephrine auto-injector. You must
          finish watching it before continuing to the next section.
        </div>
      </div>
      <div className="video-embed-card">
        <div className="vid-label">EAI Tutorial</div>
        <div className="video-frame-wrap">
          <iframe
            ref={frameRef}
            referrerPolicy="no-referrer-when-downgrade"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="How to use an EpiPen"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          />
        </div>
        {videoWatched ? (
          <div
            style={{
              fontSize: '.82rem',
              color: '#15803d',
              background: 'var(--green-bg)',
              border: '1px solid var(--green-border)',
              borderRadius: 8,
              padding: '9px 12px',
              fontWeight: 600,
            }}
          >
            ✓ Video complete — you may continue to the next section.
          </div>
        ) : (
          <div
            style={{
              fontSize: '.82rem',
              color: '#92400e',
              background: '#fffbeb',
              border: '1px solid #f59e0b',
              borderRadius: 8,
              padding: '9px 12px',
              fontWeight: 600,
            }}
          >
            ▶ Please watch the full video to continue to the next section.
          </div>
        )}
      </div>
    </div>
  )
}
