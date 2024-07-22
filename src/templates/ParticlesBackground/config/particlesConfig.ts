// import { MoveDirection, OutMode } from '@tsparticles/engine';

import { IResizeEvent, MoveDirection, OutMode } from '@tsparticles/engine';

const particlesConfigSquare = {
  background: {
    color: '#020202',
  },
  color: {
    value: '#36454f',
  },
  particles: {
    number: {
      value: 100,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: true,
      speed: 0.1,
      straight: false,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: { min: 0, max: 1 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
};

export { particlesConfigSquare };
