import React from 'react';
import Particles from 'react-tsparticles';

import './style.css';

function Background() {
  return (
    <div className='App'>
      <Particles
        id='particles'
        options={{
          background: {
            color: {
              value: '#000',
            },
            // width: '100%',
            size: 'cover',
            repeat: 'no-repeat',
            position: '50% 50%',
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: 'window',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'connect',
                parallax: {
                  enable: true,
                  force: 50,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              animation: {
                enable: true,
                speed: 10,
                sync: true,
              },
              value: '#ff0000',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: true,
              speed: 1,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 120,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: false,
              value: 5,
            },
          },
          detectRetina: false,
        }}
      />
    </div>
  );
}

export default Background;
