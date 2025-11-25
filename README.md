# ShopHub - Modern E-Commerce Dashboard

A fully functional, responsive frontend application built with React, featuring authentication, data visualization, and an interactive product catalog. This project demonstrates modern UI/UX design principles with clean, maintainable code.

![ShopHub Dashboard](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 📹 Demo Video

Watch the complete walkthrough of ShopHub in action:

**[View Demo Video](https://drive.google.com/file/d/1up0fyZkeBVjSQf8vWc0vvItKtbK1eCFI/view?usp=drive_link)**

The video demonstrates:
- Complete authentication flow (login/signup)
- Dark mode toggle functionality
- Interactive dashboard with charts and analytics
- Product catalog with search, filter, and sort features
- Responsive design across different screen sizes

## 🌟 Features

### Core Functionality
- ✅ **Authentication System** - JWT-style authentication with login/signup
- ✅ **Dashboard Analytics** - Interactive charts and statistics visualization
- ✅ **Product Catalog** - Advanced filtering, search, and sorting capabilities
- ✅ **Responsive Design** - Mobile-first approach with smooth animations
- ✅ **Mock Data Integration** - Comprehensive JSON data for realistic experience

### Advanced Features (Bonus Points)
- 🎨 **Creative UX** - Gradient animations, smooth transitions, and micro-interactions
- 📊 **Data Visualization** - Recharts integration with bar charts and pie charts
- 🔐 **Authentication** - Complete auth flow with protected routes
- 🎯 **Advanced UI** - Custom components with variants, loading states, and error handling
- 📱 **Mobile Navigation** - Responsive hamburger menu with smooth transitions

## 🚀 Setup Steps

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd c:\Users\HI\OneDrive\Desktop\ProU
   ```

2. **Install all dependencies**
   ```bash
   npm install
   ```
   This will install:
   - React & React DOM (v18.2)
   - React Router DOM (v6.20)
   - Recharts (v2.10.3) - for data visualization
   - Lucide React (v0.294.0) - for icons
   - Vite (v5.0.8) - build tool

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open your browser and go to: `http://localhost:5173`
   - The application will automatically reload when you make changes

5. **Build for production** (optional)
   ```bash
   npm run build
   npm run preview
   ```

### Demo Credentials
Use these credentials to test the application:
- **Email:** demo@shophub.com
- **Password:** demo123

**Admin Account:**
- **Email:** admin@shophub.com
- **Password:** admin123

Or create a new account using the signup form!

## 📁 Project Structure

```
ShopHub/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button/         # Button component with variants
│   │   ├── Card/           # Card component for content
│   │   ├── Input/          # Input component with icons
│   │   ├── Modal/          # Modal dialog component
│   │   └── Navbar/         # Navigation bar
│   ├── context/            # React Context for state management
│   │   └── AuthContext.jsx # Authentication context
│   ├── data/               # Mock JSON data
│   │   └── mockData.json   # Products, users, analytics
│   ├── pages/              # Page components
│   │   ├── Dashboard/      # Dashboard with charts
│   │   ├── Login/          # Login/Signup page
│   │   └── Products/       # Product catalog
│   ├── services/           # Business logic
│   │   └── authService.js  # Authentication service
│   ├── App.jsx             # Main app component
│   ├── App.css             # App-level styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # Documentation
```

## 💻 Tech Stack

### **Frontend Framework**
- **React 18.2.0** - Component-based UI library with hooks
- **React Router DOM 6.20.0** - Declarative routing for React
- **Vite 5.0.8** - Next-generation frontend build tool (ultra-fast HMR)

### **UI & Styling**
- **Custom CSS3** - Modern CSS with variables, flexbox, and grid
- **Responsive Design** - Mobile-first approach with breakpoints
- **CSS Animations** - Smooth transitions and keyframe animations

### **Data Visualization**
- **Recharts 2.10.3** - Composable charting library for React
  - Bar charts for sales data
  - Pie charts for category breakdown
  - Responsive charts with tooltips

### **Icons & Assets**
- **Lucide React 0.294.0** - Beautiful, consistent icon set
  - 1000+ customizable icons
  - Tree-shakeable for optimal bundle size

### **State Management**
- **React Context API** - Global state management
  - Authentication context
  - Theme (dark mode) context
- **Local Storage** - Persistent data storage

### **Development Tools**
- **ESLint** - Code linting and quality checks
- **Vite Dev Server** - Hot Module Replacement (HMR)
- **Modern JavaScript (ES6+)** - Arrow functions, destructuring, async/await

## 📸 Screenshots

### 🔐 Login Page
Beautiful gradient background with animated orbs, login/signup forms with validation.

### 📊 Dashboard
- **Analytics Overview**: Revenue, orders, customers, average order value
- **Interactive Charts**: Monthly sales bar chart, category breakdown pie chart
- **Recent Orders Table**: Transaction history with status badges

### 🛍️ Product Catalog
- **Search & Filter**: Real-time search, category filters, multiple sort options
- **Product Cards**: Images, ratings, stock info, trending/new badges
- **Responsive Grid**: Adapts to all screen sizes

### 🌙 Dark Mode
Complete dark theme support with smooth transitions across all pages.

### 📱 Mobile Responsive
Hamburger menu, stacked layouts, touch-friendly interfaces.

*For a complete visual walkthrough, watch the [demo video](https://drive.google.com/file/d/1up0fyZkeBVjSQf8vWc0vvItKtbK1eCFI/view?usp=drive_link).*

## 🎯 Key Features Breakdown

### 1. Authentication System
- Login and signup functionality
- JWT-style token generation
- Protected routes
- Persistent sessions using localStorage
- User profile display

### 2. Dashboard Analytics
- **Revenue Statistics** - Total revenue, orders, customers
- **Sales Charts** - Monthly sales bar chart
- **Category Breakdown** - Pie chart with percentages
- **Recent Orders** - Transaction table with status badges
- **Trend Indicators** - Month-over-month growth

### 3. Product Catalog
- **Search** - Real-time product search
- **Filters** - Category-based filtering
- **Sorting** - By name, price, and rating
- **Product Cards** - Image, rating, stock info
- **Badges** - "New" and "Trending" indicators
- **Responsive Grid** - Adapts to screen size

### 4. UI Components
- **Button** - Multiple variants (primary, secondary, outline, ghost, danger)
- **Input** - With icons, error states, validation
- **Card** - Hover effects, flexible content
- **Modal** - Overlay with animations
- **Navbar** - Responsive with mobile menu

### 5. Design Highlights
- **Gradient Backgrounds** - Animated gradient orbs
- **Smooth Animations** - Fade-in, slide-in effects
- **Color System** - CSS variables for consistency
- **Typography** - Clear hierarchy
- **Micro-interactions** - Hover states, transitions

## 📊 Mock Data

The application includes comprehensive mock data:
- **12 Products** - Across 5 categories (Electronics, Fashion, Sports, Home, Furniture)
- **2 Users** - Demo accounts with different roles
- **Analytics** - Revenue, orders, monthly sales data
- **Recent Orders** - Transaction history with statuses

## 🎨 Color Palette

```css
Primary: #6366f1 (Indigo)
Secondary: #ec4899 (Pink)
Success: #10b981 (Green)
Warning: #f59e0b (Amber)
Danger: #ef4444 (Red)
Dark: #1f2937 (Gray)
Light: #f9fafb (Light Gray)
```

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🚀 Future Enhancements

Potential improvements:
- Shopping cart functionality with add/remove items
- Wishlist feature with local storage
- Product detail pages with image gallery
- User profile management and settings
- Advanced filters (price range slider, multi-select)
- Pagination for large product lists
- Real backend API integration (REST or GraphQL)
- Unit tests with Jest and React Testing Library
- E2E tests with Cypress or Playwright
- Performance optimization (code splitting, lazy loading)
- PWA features (offline mode, push notifications)
- Internationalization (i18n) support

## 🔧 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## 📝 Code Quality Features

- ✅ Clean, modular component architecture
- ✅ Consistent naming conventions (camelCase, PascalCase)
- ✅ Comprehensive inline comments
- ✅ Reusable utility classes
- ✅ Separation of concerns (components, services, context)
- ✅ PropTypes could be added for type checking
- ✅ DRY principles (Don't Repeat Yourself)
- ✅ Semantic HTML for accessibility

## 🎓 Learning Highlights

This project demonstrates:
- Modern React patterns (hooks, context)
- Component composition
- State management
- Form handling and validation
- Client-side routing
- Data visualization
- Responsive design
- CSS animations
- Mock data integration

## 🎯 Assumptions & Design Decisions

### Architecture Assumptions
1. **Client-Side Only**: This is a frontend-only application with no backend API integration
2. **Mock Authentication**: JWT-style tokens are simulated; in production, use a real auth service
3. **Local Data Storage**: User sessions persist in localStorage (not secure for production)
4. **Static Mock Data**: Product and analytics data is hardcoded in JSON format

### UX/UI Assumptions
1. **Modern Browsers**: Assumes users have modern browsers with ES6+ support
2. **Screen Sizes**: Optimized for desktop (1200px+), tablet (768-968px), and mobile (<768px)
3. **Color Accessibility**: Color choices meet WCAG AA standards for contrast
4. **Network**: Assumes reliable internet for CDN resources (Unsplash images)

### Business Logic Assumptions
1. **Demo Accounts**: Two pre-configured users (admin and demo) for testing
2. **Stock Management**: Stock values are display-only; no real inventory tracking
3. **Pricing**: All prices in USD; no currency conversion
4. **Orders**: Recent orders are mock data for demonstration purposes

## ✨ Bonus Features Implemented

### 🌙 **Dark Mode / Night View**
- **Theme Toggle**: Moon/Sun icon in navbar for easy switching
- **Persistent Theme**: Saves user preference to localStorage
- **System Preference Detection**: Automatically detects OS dark mode preference
- **Smooth Transitions**: All colors transition smoothly (0.3s ease)
- **Complete Coverage**: Every component, page, and element supports dark mode
- **CSS Variables**: Uses CSS custom properties for easy theme switching

### 🔐 **Advanced Authentication**
- **Dual Login Options**: Email/password login + new user registration
- **Form Validation**: Real-time validation with error messages
- **Protected Routes**: Automatic redirect for unauthorized access
- **User Profile Display**: Avatar, name, and role in navbar
- **Session Persistence**: Stay logged in across browser refreshes
- **Demo Credentials Display**: Helper text on login page

### 📊 **Data Visualization**
- **Recharts Integration**: Professional, interactive charts
- **Bar Chart**: Monthly sales trends with hover tooltips
- **Pie Chart**: Category breakdown with percentages and legend
- **Responsive Charts**: Automatically adjust to container size
- **Color-Coded Data**: Consistent color scheme across visualizations
- **Animated Transitions**: Charts animate when data loads

### 🎨 **Creative UI/UX**
- **Gradient Animations**: Floating gradient orbs on login page
- **Micro-interactions**: Button hover effects, card lifts, icon rotations
- **Loading States**: Button spinners, skeleton screens
- **Status Badges**: Color-coded order status (delivered, shipped, processing, cancelled)
- **Trending Indicators**: "New" and "Trending" badges on products
- **Empty States**: Helpful messages when no results found

### 🔍 **Advanced Product Features**
- **Real-time Search**: Instant filtering as you type
- **Multi-criteria Sort**: By name, price (low/high), rating
- **Category Filtering**: Toggle-able category filter chips
- **Product Ratings**: Star ratings with review counts
- **Stock Indicators**: Visual stock availability status
- **Image Optimization**: Uses Unsplash CDN for fast loading

### 📱 **Mobile-First Responsive Design**
- **Hamburger Menu**: Smooth slide-in navigation on mobile
- **Touch-Friendly**: Large tap targets (min 44px)
- **Flexible Grids**: Adapts from 4-column to 1-column layouts
- **Responsive Typography**: Scales based on viewport
- **Mobile Tables**: Horizontal scrolling for data tables

### 🎯 **Additional Polish**
- **Custom Scrollbars**: Styled scrollbars matching theme
- **Focus States**: Keyboard navigation support
- **Error Handling**: Graceful error messages
- **Loading Indicators**: Visual feedback for async actions
- **Accessibility**: Semantic HTML, ARIA labels, color contrast

## 📊 Mock Data Overview

### Products (12 items)
- Electronics: Headphones, Smart Watch, Camera, Smart Speaker
- Fashion: Backpack, Messenger Bag
- Sports: Yoga Mat, Running Shoes, Water Bottle
- Home: Coffee Maker, Desk Lamp
- Furniture: Office Chair

### Analytics Dashboard
- **Revenue Metrics**: $127,453.28 total revenue, 1,847 orders
- **Customer Data**: 892 total customers
- **Monthly Sales**: 11 months of sales data (Jan-Nov 2025)
- **Category Breakdown**: 5 categories with percentages
- **Recent Orders**: 5 latest transactions with statuses

## 🎓 Learning Highlights

This project demonstrates:
- ✅ Modern React patterns (hooks, custom hooks, context)
- ✅ Component composition and reusability
- ✅ State management with Context API
- ✅ Form handling and validation
- ✅ Client-side routing with React Router
- ✅ Data visualization with Recharts
- ✅ Responsive design with CSS Grid and Flexbox
- ✅ CSS animations and transitions
- ✅ Mock data integration and filtering
- ✅ Dark mode implementation
- ✅ Protected routes and authentication flow
- ✅ Local storage for persistence

## 📄 License

MIT License - feel free to use this project for learning or as a portfolio piece!

## 👨‍💻 Author

Built with ❤️ as a demonstration of modern frontend development practices.

**Contact & Links:**
- 📹 [Watch Demo Video](https://drive.google.com/file/d/1up0fyZkeBVjSQf8vWc0vvItKtbK1eCFI/view?usp=drive_link)
- 📧 Demo Email: demo@shophub.com
- 🔑 Demo Password: demo123

---

## 🙏 Acknowledgments

- **Unsplash** - Product images
- **Lucide** - Beautiful icon library
- **Recharts** - Data visualization
- **Vite** - Lightning-fast build tool
- **React Team** - Amazing framework

---

**Note:** This is a frontend-only application using mock data for demonstration purposes. In a production environment, you would integrate with a real backend API for authentication, data management, and business logic. The current implementation uses localStorage and mock JSON data to simulate a full-stack application.

**Security Notice:** The authentication system in this demo is for educational purposes only. In production, never store passwords in plain text, always use HTTPS, implement proper JWT validation, and use secure authentication services.
