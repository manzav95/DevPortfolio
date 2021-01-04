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
            size: 'cover',
            repeat: 'no-repeat',
            position: '50% 50%',
            height: '100vh',
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: 'window',
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'connect',
                parallax: {
                  enable: false,
                  force: 20,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 250,
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
                //Color changing animation
                enable: true,
                speed: 10,
                //Sync all atoms same color
                sync: false,
              },
              value: '#ff0000',
            },
            links: {
              enable: true,
              color: '#ffffff',
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              direction: 'none',
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 140,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: false,
        }}
      />
    </div>
  );
}

export default Background;
