# Sai Revu - Frontend Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and services as a Frontend Developer. Built with clean HTML, CSS, and JavaScript with Tailwind CSS for styling.



## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com)

## ✨ Features

- **Responsive Design**: Seamlessly adapts to all device sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly hamburger menu
- **Dynamic Sections**:
  - Hero section with professional introduction
  - About me with skills and tools
  - Services showcase
  - Project portfolio with live links
  - Contact form
  - Social media integration
- **Dark/Light Mode Toggle**: Theme switching functionality
- **Performance Optimized**: Fast loading times and optimized images
- **SEO Friendly**: Semantic HTML structure and meta tags

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling and animations
- **JavaScript**: Interactive functionality and DOM manipulation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Google Fonts**: Outfit and Ovo font families
- **Responsive Design**: Mobile-first approach

## 📋 Project Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── script.js               # JavaScript functionality
├── tailwind.config.js      # Tailwind CSS configuration
├── assets/                 # Images and icons
│   ├── header-bg-color.png
│   ├── mylogo.png
│   ├── pro-img.PNG
│   ├── profile3.PNG
│   ├── work-1.png
│   ├── work-2.png
│   ├── work-3.png
│   ├── work-4.png
│   └── [other assets...]
└── README.md              # Project documentation
```

## 🎨 Sections Overview

### 1. **Navigation**
- Fixed navigation bar with smooth scrolling
- Mobile responsive hamburger menu
- Dark mode toggle
- Contact CTA button

### 2. **Hero Section**
- Professional headshot
- Dynamic introduction with animated hand wave
- Call-to-action buttons (Contact & Resume)
- Gradient background effects

### 3. **About Me**
- Detailed professional background
- Skills showcase with interactive cards
- Education and project statistics
- Tools and technologies used

### 4. **Services**
- Web Design & Development
- Mobile App Development
- UI/UX Design
- Graphics Design

### 5. **Portfolio**
- Featured projects with hover effects
- Direct links to GitHub repositories
- Project categories and descriptions
- "Show more" link to complete portfolio

### 6. **Contact**
- Interactive contact form
- Professional email display
- Background design elements

### 7. **Footer**
- Social media links
- Professional networks (LinkedIn, GitHub, LeetCode, etc.)
- Copyright information

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaiAkhil145/portfolio-website.git
   cd portfolio-website
   ```

2. **Open the project**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server for better performance:
   
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using Live Server (VS Code extension)
   # Right-click on index.html → "Open with Live Server"
   ```

3. **View the website**
   - Open your browser and navigate to `http://localhost:8000` (or the appropriate local server URL)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features in Detail

### Interactive Elements
- **Hover Effects**: Cards lift and change color on hover
- **Smooth Animations**: CSS transitions and transforms
- **Mobile Menu**: Slide-in navigation for mobile devices
- **Form Validation**: Contact form with proper input handling

### Performance Features
- **Optimized Images**: Properly sized and compressed assets
- **Minimal JavaScript**: Lightweight vanilla JS implementation
- **CSS Optimization**: Utility-first approach with Tailwind CSS
- **Fast Loading**: Optimized for quick page load times

## 🔧 Customization

### Updating Personal Information
1. Replace images in the `assets/` folder
2. Update text content in `index.html`
3. Modify links to your social profiles and projects
4. Update contact information and resume link

### Styling Changes
- Modify Tailwind classes directly in HTML
- Update `tailwind.config.js` for custom configurations
- Add custom CSS in the `<style>` section if needed

### Adding New Projects
```html
<div class="aspect-square bg-[url('assets/your-project.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
    <div class="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-3 flex items-center justify-between duration-500 group-hover:bottom-7">
        <div>
            <h2 class="font-semibold">Your Project Name</h2>
            <p class="tex-sm text-gray-700">Project Category</p>
        </div>
        <div class="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
            <a href="your-project-link"><img src="assets/send-icon.png" alt="" class="w-5"></a>
        </div>
    </div>
</div>
```

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Mobile-Friendly**: Google Mobile-Friendly Test Passed
- **Fast Loading**: Optimized images and minimal JavaScript

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SaiAkhil145/portfolio-website/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Sai Revu**
- Email: sairevu03@gmail.com
- LinkedIn: [sai-revu](https://www.linkedin.com/in/sai-revu/)
- GitHub: [SaiAkhil145](https://github.com/SaiAkhil145)
- Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) for the beautiful typography
- [Unsplash](https://unsplash.com/) for high-quality stock images
- Design inspiration from modern portfolio trends

## 📊 Project Stats

- **Total Files**: 20+
- **Lines of Code**: 500+
- **Development Time**: 2-3 weeks
- **Last Updated**: 2024

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Sai Revu](https://github.com/SaiAkhil145)
