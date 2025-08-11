tailwind.config = {
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        ovo: ["Ovo", "serif"],
      },
      animation:{
        spin_slow:'spin 6s linear infinite'
      },
      colors:{
        darkTheme:'#11001F',
        darkHover:'#2a004a',
        lightHover:'#11001F'
      }
    },
  },
   darkMode:'selector'
};