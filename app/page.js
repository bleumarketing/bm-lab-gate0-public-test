import Reveal from './Reveal';
import { statusLine } from '../lib/status';

export default function Page() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, boxSizing: 'border-box' }}>
      <Reveal>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 72px)', margin: 0 }}>Gate 0 toolchain test</h1>
        <p data-testid="status">{statusLine('Next.js', 'GSAP')}</p>
        <p style={{ opacity: 0.7 }}>Throwaway test page. No BLEU or client content.</p>
      </Reveal>
    </main>
  );
}
