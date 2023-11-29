import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles'
import React, {useCallback} from 'react'

const ParticlesComponent = () => {

  const particlesInit = useCallback(async (engine)=>{
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, [])


  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}
      className='w-full h-full absolute translate-z-0'
      options={{
        fullScreen: {enable: false},
        background:{
          color:{
            value: '#F1F1F1'
          }
        },
          fpsLimit: 120,
          interactivity:{
            events:{
              onClick:{
                enable: false,
                mode: 'push'
              },
              onHover:{
                enable: true,
                mode: 'repulse'
              },
              resize:true
            },
            modes:{
              push:{
                quantity: 90
              },
              repulse:{
                distance: 200,
                duration: 0.4,
              }
            }
          },
          particles:{
            color:{
              value: 'rgb(75, 85, 99, 0.1)'
            },
            links:{
              color: "#f5d393",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width:1
            },
            collisions:{
              enable:true
            },
            move:{
              directions: 'none',
              enable:true,
              outModes:{
                default: 'bounce'
              },
              random: false,
              speed: 1.4,
              straight: false
            },
            number:{
              density:{
                enable: true,
                area: 800
              },
              value: 60
            },
            opacity:{
              value: 0.5
            },
            shape:{
              type: 'circle'
            },
            size:{
              value:{min: 1, max: 4}
            }
          },
          detectRetina: true
        }}
    
    />
  )
};

export default ParticlesComponent;
