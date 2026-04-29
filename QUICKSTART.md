# 🚀 Quick Start Guide - Ram Janki Palace Website

## ✅ What's Already Done

Your Ram Janki Palace wedding venue website is **fully set up and running**! 

- ✅ Next.js 14 with TypeScript configured
- ✅ Tailwind CSS with custom Indian wedding theme (maroon, gold, red, cream)
- ✅ All 8+ components created with Framer Motion animations
- ✅ Mobile-first responsive design
- ✅ Light/Dark mode toggle
- ✅ Floating WhatsApp button
- ✅ Interactive services section with modals
- ✅ Image gallery with lightbox
- ✅ SEO optimized
- ✅ Development server running at http://localhost:3000

## 📸 Next Step: Add Images

The website is **fully functional** but needs images to look complete.

### Download Images:
1. **Logo**: https://drive.google.com/file/d/1dohuaBl_3_ea-oNlvPKXeYZ-m6jmubXz/view?usp=sharing
2. **Gallery Photos**: https://drive.google.com/drive/folders/1DY73E39Q9iRUorN5nxVldQpLjIf5Zuxm?usp=sharing

### Add to Project:
```
public/images/
├── logo.png              ← Logo image
├── hero1.jpg             ← Hero carousel images (4 total)
├── hero2.jpg
├── hero3.jpg
├── hero4.jpg
├── gallery1.jpg          ← Gallery images (8 total)
├── gallery2.jpg
├── gallery3.jpg
├── gallery4.jpg
├── gallery5.jpg
├── gallery6.jpg
├── gallery7.jpg
└── gallery8.jpg
```

See **IMAGE_SETUP.md** for detailed instructions.

## 🌐 View Your Website

Your website is running at: **http://localhost:3000**

1. Open your browser
2. Go to http://localhost:3000
3. Browse through all sections:
   - 🏠 Hero with carousel
   - 🏛️ About section
   - 💫 Services (click on cards!)
   - 🖼️ Gallery
   - 💬 Testimonials
   - 📞 Contact with map
   - 🌙 Try the light/dark mode toggle (top right)
   - 💚 Click the floating WhatsApp button

## 🎨 Features to Test

### Interactive Elements:
- Click on **service cards** to see detailed modals
- Click on **gallery images** for lightbox view
- Use **arrow keys** or buttons in lightbox
- Click **theme toggle** (moon/sun icon) in hero section
- Click **WhatsApp button** (bottom right)
- Try **Call Now** and **WhatsApp** buttons in hero

### Responsive Design:
- Resize your browser window
- Check mobile view (phone icon in browser dev tools)
- All sections adapt beautifully to any screen size

## 🛠️ Customization

### Change Colors:
Edit `tailwind.config.js` - custom colors are defined there

### Change Content:
- **Hero text**: `src/components/HeroSection.tsx`
- **About text**: `src/components/AboutSection.tsx`
- **Services**: `src/components/ServicesSection.tsx`
- **Testimonials**: `src/components/TestimonialsSection.tsx`
- **Contact info**: `src/components/ContactSection.tsx`

### Change Phone/WhatsApp:
Search for `8210120133` and replace with your number

## 📦 Deployment (After Adding Images)

### Deploy to Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Build for Production:
```bash
npm run build
npm start
```

## 🎯 Project Structure

```
RJP/
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← SEO metadata
│   │   ├── page.tsx          ← Main page
│   │   └── globals.css       ← Global styles
│   └── components/           ← All sections
├── public/images/            ← Add your images here!
├── tailwind.config.js        ← Theme customization
└── README.md                 ← Full documentation
```

## 💡 Tips

1. **Images**: Use JPG for photos, PNG for logo
2. **File sizes**: Keep images under 500KB for fast loading
3. **Compress**: Use TinyPNG or similar before adding
4. **Testing**: Test on real mobile devices before launch
5. **SEO**: Update meta tags in `src/app/layout.tsx` if needed

## 📞 Support

If you need help:
- Check **README.md** for full documentation
- Check **IMAGE_SETUP.md** for image instructions
- All components are well-commented

## ✨ What's Special

This website features:
- 🎨 **Authentic Indian wedding theme** - Royal colors and elegant design
- 🌟 **Smooth animations** - Framer Motion for professional look
- 📱 **Mobile-first** - Perfect on all devices
- 🌙 **Dark mode** - Automatic with system preference
- ⚡ **Fast** - Next.js 14 App Router
- 🎯 **SEO Ready** - Optimized for search engines
- ♿ **Accessible** - WCAG compliant

---

**Your website is ready! Just add images and launch! 🚀**
