
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    animationDuration: 500,
    autoplay: 3000,
    hoverpause: true,
    animationTimingFunc: 'ease-in-out',
    classes: {
      activeNav: 'glide__bullet--active'
    }
  }).mount();