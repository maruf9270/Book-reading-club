/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
                {
                  mytheme: {
                  
                            "primary": "#58fca4",
                                    
                            "secondary": "#d6d62c",
                                    
                            "accent": "#020a6b",
                                    
                            "neutral": "#231E24",
                                    
                            "base-100": "#2d1b69",
                                    
                            "info": "#5186E1",
                                    
                            "success": "#167443",
                                    
                            "warning": "#FCB02C",
                                    
                            "error": "#F6745A",
                            },
                },
            ],
           },
  plugins: [require("daisyui")],
}