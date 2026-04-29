# Ram Janki Palace - Wedding Venue Website

A stunning, mobile-first website for Ram Janki Palace - an elegant open-garden wedding venue in Muzaffarpur, Bihar. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Features

- **Mobile-First Design** - Optimized for all devices
- **Royal Indian Theme** - Maroon, gold, red, and cream color palette
- **Smooth Animations** - Elegant Framer Motion transitions
- **Interactive Services** - Clickable service cards with modal details
- **Image Gallery** - Lightbox effect with smooth animations
- **Light/Dark Mode** - Theme toggle with localStorage persistence
- **SEO Optimized** - Meta tags for wedding venue search
- **Floating WhatsApp** - Quick contact button
- **Google Maps Integration** - Embedded location map
- **Fully Accessible** - Alt tags, high contrast, readable fonts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /Users/rohit/Documents/RJP
```

2. Install dependencies (already done):
```bash
npm install
```

3. Add your images:
   - Download the logo from: https://drive.google.com/file/d/1dohuaBl_3_ea-oNlvPKXeYZ-m6jmubXz/view?usp=sharing
   - Save it as `public/images/logo.png`
   
   - Download gallery images from: https://drive.google.com/drive/folders/1DY73E39Q9iRUorN5nxVldQpLjIf5Zuxm?usp=sharing
   - Save them as `public/images/hero1.jpg`, `hero2.jpg`, `hero3.jpg`, `hero4.jpg`
   - Save them as `public/images/gallery1.jpg` through `gallery8.jpg`

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
RJP/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with custom fonts
│   │   ├── layout.tsx            # Root layout with metadata
│   │   └── page.tsx              # Main page with all sections
│   └── components/
│       ├── AboutSection.tsx      # About venue section
│       ├── ContactSection.tsx    # Contact information & map
│       ├── FloatingWhatsApp.tsx  # Floating WhatsApp button
│       ├── Footer.tsx            # Footer with links
│       ├── GallerySection.tsx    # Image gallery with lightbox
│       ├── HeroSection.tsx       # Hero with carousel
│       ├── ServicesSection.tsx   # Clickable service cards
│       ├── TestimonialsSection.tsx # Customer reviews
│       └── ThemeProvider.tsx     # Dark/light mode toggle
├── public/
│   └── images/                   # All images go here
├── tailwind.config.js            # Tailwind custom theme
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies

```

## 🎨 Design Theme

- **Colors**: Maroon (#a32f2f), Gold (#eab308), Red (#d75c5c), Cream (#fdf3e7)
- **Fonts**: 
  - Headings: Playfair Display (serif)
  - Body: Poppins (sans-serif)
- **Style**: Royal Indian wedding theme with elegant animations

## 📸 Adding Images

### Required Images:

1. **Logo** (`public/images/logo.png`)
   - Transparent PNG recommended
   - Size: 200x200px or larger

2. **Hero Carousel** (4 images)
   - `public/images/hero1.jpg`
   - `public/images/hero2.jpg`
   - `public/images/hero3.jpg`
   - `public/images/hero4.jpg`
   - Open garden wedding photos
   - Recommended size: 1920x1080px

3. **Gallery** (8 images)
   - `public/images/gallery1.jpg` through `gallery8.jpg`
   - Outdoor venue, decorations, lighting, stage setups
   - Recommended size: 1200x800px

**Note**: Use only authentic Indian open garden wedding images as per project requirements.

## 🔧 Technologies Used

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Google Fonts** - Playfair Display & Poppins

## 📱 Contact Information

- **Phone**: 8210120133
- **Email**: ramjankipalace@gmail.com
- **Address**: Near Fly Over, Sharfuddinpur, Darbhanga Road, Muzaffarpur, Bihar 843118
- **Instagram**: https://www.instagram.com/ramjankipalace
- **Facebook**: https://www.facebook.com/share/1Br7EnNnAF/

## 🌐 Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 License

This project is created for Ram Janki Palace. All rights reserved.

## 👨‍💻 Development

Created with ❤️ using GitHub Copilot for Ram Janki Palace.

---

**Note**: Remember to add your actual images before deploying to production. Placeholder images are not included in this repository.
