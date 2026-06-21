import { useEffect, useRef } from 'react'
import { useModule } from '../player/ModuleContext'
import type { VideoElement } from '../cms/types'

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
 * Embedded YouTube video. When `requireWatch` is set, reports completion to the
 * module so the screen's Next button can unlock once the video finishes.
 */
export default function Video({ el }: { el: VideoElement }) {
  const { videoWatched, markVideoWatched, preview } = useModule()
  const frameRef = useRef<HTMLIFrameElement>(null)
  const watched = videoWatched[el.id]
  const base = `https://www.youtube-nocookie.com/embed/${el.videoId}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`

  useEffect(() => {
    if (preview || !el.requireWatch) return
    const frame = frameRef.current
    if (!frame) return

    let src = base
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
            if (event.data === YT.PlayerState.ENDED) markVideoWatched(el.id)
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
    // base is derived from el.videoId, so el.id + videoId cover the deps
  }, [el.id, el.requireWatch, el.videoId, base, markVideoWatched, preview])

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
      {(el.introTitle || el.introText) && (
        <div>
          {el.introTitle && (
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
              {el.introTitle}
            </div>
          )}
          {el.introText && (
            <div style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>{el.introText}</div>
          )}
        </div>
      )}
      <div className="video-embed-card">
        <div className="vid-label">{el.label}</div>
        <div className="video-frame-wrap">
          <iframe
            ref={frameRef}
            referrerPolicy="no-referrer-when-downgrade"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={el.label}
            src={base}
          />
        </div>
        {el.requireWatch &&
          (watched ? (
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
          ))}
      </div>
    </div>
  )
}
