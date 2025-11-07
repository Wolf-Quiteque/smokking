'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if all images are loaded
    const handleLoad = () => {
      // Give a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.5s ease-out',
      opacity: isLoading ? 1 : 0,
      pointerEvents: isLoading ? 'all' : 'none'
    }}>
      {/* Animated meat icon container */}
      <div style={{
        position: 'relative',
        width: '120px',
        height: '120px',
        animation: 'float 3s ease-in-out infinite'
      }}>
        {/* Glowing red circle behind meat */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,83,79,0.4) 0%, rgba(217,83,79,0.1) 50%, transparent 70%)',
          animation: 'pulse 2s ease-in-out infinite'
        }} />

        {/* Rotating smoke rings */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '160px',
          height: '160px',
          border: '2px dashed rgba(217,83,79,0.3)',
          borderRadius: '50%',
          animation: 'rotate 8s linear infinite'
        }} />

        {/* Main meat icon */}
        <div style={{
          fontSize: '80px',
          textAlign: 'center',
          lineHeight: '120px',
          filter: 'drop-shadow(0 0 20px rgba(217,83,79,0.6))',
          animation: 'bounce 1s ease-in-out infinite'
        }}>
          🥩
        </div>

        {/* Sizzle particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: '#ff6b35',
              top: '50%',
              left: '50%',
              animation: `sizzle${i} 2s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      <div style={{
        marginTop: '40px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#d9534f',
        letterSpacing: '3px',
        animation: 'fadeInOut 2s ease-in-out infinite',
        fontFamily: 'Rubik, sans-serif',
        textTransform: 'uppercase'
      }}>
        Firing Up The Smoker
      </div>

      {/* Loading dots */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '20px'
      }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#d9534f',
              animation: 'dotPulse 1.5s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* CSS Keyframes as a style tag */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.3;
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }

        @keyframes sizzle0 {
          0% {
            transform: translate(-50%, -50%) translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(-30px, -40px);
            opacity: 0;
          }
        }

        @keyframes sizzle1 {
          0% {
            transform: translate(-50%, -50%) translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(30px, -40px);
            opacity: 0;
          }
        }

        @keyframes sizzle2 {
          0% {
            transform: translate(-50%, -50%) translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(-40px, 10px);
            opacity: 0;
          }
        }

        @keyframes sizzle3 {
          0% {
            transform: translate(-50%, -50%) translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(40px, 10px);
            opacity: 0;
          }
        }

        @keyframes sizzle4 {
          0% {
            transform: translate(-50%, -50%) translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(0, -50px);
            opacity: 0;
          }
        }

        @keyframes sizzle5 {
          0% {
            transform: translate(-50%, -50%) translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(0, 30px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
