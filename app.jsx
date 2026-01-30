import Aurora from './Aurora';
import ClickSpark from './ClickSpark';
import Counter from './Counter';
import { useState } from 'react';

export default function App() {
  const [pullups, setPullups] = useState(0);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* BACKGROUND */}
      <Aurora
        colorStops={['#5227FF', '#7cff67', '#5227FF']}
        amplitude={1.2}
        blend={0.6}
        speed={1}
      />

      {/* CLICK EFFECT + UI */}
      <ClickSpark sparkColor="#7cff67">
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}
        >
          <Counter value={pullups} fontSize={96} />

          <button
            onClick={() => setPullups(p => p + 1)}
            style={{
              marginTop: 30,
              padding: '14px 28px',
              fontSize: 18,
              borderRadius: 10,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            +1 Pull-up
          </button>
        </div>
      </ClickSpark>
    </div>
  );
}
