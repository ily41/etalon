import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Heart,
  Menu,
  X,
  Star,
  ArrowRight,
  Truck,
  Shield,
  RotateCcw,
  Phone,
  ChevronDown,
  Play,
  Award,
  Zap,
  Target
} from 'lucide-react';
import newLogo from "./assets/newLogo.PNG";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { 
      name: 'Running Shoes', 
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/81d10257-65bc-45c1-8970-5449316928c6/AIR+JORDAN+1+RETRO+HIGH+OG.png', 
      count: '150+ Items',
      discount: '30% OFF'
    },
    { 
      name: 'Athletic Wear', 
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', 
      count: '200+ Items',
      discount: '25% OFF'
    },
    { 
      name: 'Training Gear', 
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', 
      count: '95+ Items',
      discount: '40% OFF'
    },
    { 
      name: 'Accessories', 
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a54056a0-8464-40b8-b8b5-a6036dde1f94/NK+PHANTOM+-+FA25.png ', 
      count: '300+ Items',
      discount: '20% OFF'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Air Max Revolution Pro',
      price: '$149.99',
      originalPrice: '$199.99',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
      rating: 4.8,
      badge: 'Best Seller',
      colors: ['#000', '#fff', '#dc2626']
    },
    {
      id: 2,
      name: 'Elite Training Set',
      price: '$89.99',
      originalPrice: '$119.99',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
      rating: 4.9,
      badge: 'New Arrival',
      colors: ['#1f2937', '#dc2626', '#059669']
    },
    {
      id: 3,
      name: 'Performance Bottle',
      price: '$24.99',
      originalPrice: '$34.99',
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/683ed683-c55d-4a19-a5a0-8d64faa55c71/PHANTOM+6+HIGH+ELITE+FG.png',
      rating: 4.7,
      badge: 'Limited',
      colors: ['#dc2626', '#000', '#3b82f6']
    },
    {
      id: 4,
      name: 'Pro Shorts Elite',
      price: '$59.99',
      originalPrice: '$79.99',
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c75e6d3-6247-46d6-b3cf-cee3b5837d32/ZM+VAPOR+16+ELITE+FG.png',
      rating: 4.6,
      badge: 'Popular',
      colors: ['#000', '#6b7280', '#dc2626']
    },
    {
      id: 5,
      name: 'Speed Runner X1',
      price: '$179.99',
      originalPrice: '$229.99',
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
      rating: 4.9,
      badge: 'Premium',
      colors: ['#dc2626', '#000', '#fff']
    },
    {
      id: 6,
      name: 'Training Shoes',
      price: '$39.99',
      originalPrice: '$59.99',
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a55c400b-12c6-4505-a8de-a8302abd290b/W+NK+DF+STRIKE+PANT+KPZ.png',
      rating: 4.8,
      badge: 'Eco-Friendly',
      colors: ['#059669', '#dc2626', '#6366f1']
    }
  ];

  const brands = [
    { name: 'Nike', logo: 'N' },
    { name: 'Adidas', logo: 'A' },
    { name: 'Puma', logo: 'P' },
    { name: 'New Balance', logo: 'NB' },
    { name: 'Under Armour', logo: 'UA' },
    { name: 'Reebok', logo: 'R' }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif] overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">
        🔥 MEGA SALE: Up to 70% OFF + Free Shipping on Orders $100+ | Limited Time Only!
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="mx-10 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="w-fit flex-1">
              <img className='w-[60%]' src={newLogo} alt="" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-2 space-x-10">
              <a href="#" className="text-gray-900 hover:text-red-600 transition-colors duration-300 font-semibold">Men</a>
              <a href="#" className="text-gray-900 hover:text-red-600 transition-colors duration-300 font-semibold">Women</a>
              <a href="#" className="text-gray-900 hover:text-red-600 transition-colors duration-300 font-semibold">Kids</a>
              <a href="#" className="text-red-600 font-bold">Sale</a>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-50 rounded-full px-6 py-3 border border-gray-200 focus-within:border-red-600 transition-colors">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="ml-3 bg-transparent outline-none text-sm w-64"
                />
              </div>
              <button className="p-3 hover:bg-gray-50 rounded-full transition-colors group">
                <User className="h-6 w-6 text-gray-700 group-hover:text-red-600" />
              </button>
              <button className="p-3 hover:bg-gray-50 rounded-full transition-colors group">
                <Heart className="h-6 w-6 text-gray-700 group-hover:text-red-600" />
              </button>
              <button className="p-3 hover:bg-gray-50 rounded-full transition-colors relative group">
                <ShoppingBag className="h-6 w-6 text-gray-700 group-hover:text-red-600" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">3</span>
              </button>
              <button 
                className="lg:hidden p-3"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-gray-900 hover:text-red-600 font-semibold text-lg">New Arrivals</a>
              <a href="#" className="block text-gray-900 hover:text-red-600 font-semibold text-lg">Men</a>
              <a href="#" className="block text-gray-900 hover:text-red-600 font-semibold text-lg">Women</a>
              <a href="#" className="block text-gray-900 hover:text-red-600 font-semibold text-lg">Kids</a>
              <a href="#" className="block text-red-600 font-bold text-lg">Sale</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 rounded-full px-6 py-2 text-red-300 text-sm font-semibold">
                  <Zap className="w-4 h-4 mr-2" />
                  NEW COLLECTION 2025
                </div>
                <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
                  UNLEASH
                  <span className="block text-red-500 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                    YOUR POWER
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl font-light text-gray-300 max-w-lg leading-relaxed">
                  Discover premium athletic gear engineered for champions. Performance meets style in every product.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-white text-white hover:bg-white hover:text-black px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Story
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-red-500">50K+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-red-500">1000+</div>
                  <div className="text-sm text-gray-400">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-red-500">4.9★</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
                  alt="Hero Product"
                  className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700 hover:rotate-2"
                />
                <div className="absolute -top-6 -right-6 bg-white text-red-600 p-4 rounded-full shadow-xl animate-bounce">
                  <Award className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-3xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 font-semibold text-lg">TRUSTED BY TOP BRANDS</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl font-black text-gray-400 group-hover:text-red-600 transition-colors">
                    {brand.logo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-red-50 text-red-600 rounded-full px-6 py-2 text-sm font-bold mb-6">
              <Target className="w-4 h-4 mr-2" />
              SHOP BY CATEGORY
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">FIND YOUR GEAR</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our carefully curated collections designed for every athlete and fitness enthusiast</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {category.discount}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-black mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-4">{category.count}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">Shop Now</span>
                      <ArrowRight className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-20">
            <div>
              <div className="inline-flex items-center bg-red-50 text-red-600 rounded-full px-6 py-2 text-sm font-bold mb-6">
                <Star className="w-4 h-4 mr-2" />
                FEATURED PRODUCTS
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">BEST SELLERS</h2>
              <p className="text-xl text-gray-600 max-w-2xl">Handpicked favorites that our customers love most</p>
            </div>
            <button className="hidden md:flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors group">
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {product.badge}
                      </span>
                    </div>
                    <button className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 hover:text-white transform hover:scale-110">
                      <Heart className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <button className="w-full bg-black/80 backdrop-blur-sm text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-colors">
                        Quick Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <div></div>
                      <div className="flex space-x-1">
                        {product.colors.map((color, i) => (
                          <div key={i} className="w-4 h-4 rounded-full border-2 border-gray-200" style={{backgroundColor: color}}></div>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{product.name}</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-black text-red-600">{product.price}</span>
                        <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      <button className="bg-gray-900 text-white p-3 rounded-xl hover:bg-red-600 transition-colors transform hover:scale-110">
                        <ShoppingBag className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-24 bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-bold mb-8">
              <Zap className="w-4 h-4 mr-2" />
              LIMITED TIME OFFER
            </div>
            <h2 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
              SUMMER
              <span className="block">MEGA SALE</span>
            </h2>
            <p className="text-2xl lg:text-3xl mb-12 font-light">Up to 70% off on selected premium items</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-red-600 px-12 py-5 rounded-xl text-xl font-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Shop Sale Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-12 py-5 rounded-xl text-xl font-black transition-all duration-300">
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">WHY CHOOSE ETALON?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're committed to providing the best shopping experience with premium quality and exceptional service</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                <Truck className="h-10 w-10 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Shipping</h3>
              <p className="text-gray-600 text-lg">Free delivery on all orders over $100 worldwide</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-red-50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                <Shield className="h-10 w-10 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure Payment</h3>
              <p className="text-gray-600 text-lg">100% secure transactions with SSL encryption</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-red-50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                <RotateCcw className="h-10 w-10 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Returns</h3>
              <p className="text-gray-600 text-lg">30-day hassle-free return policy</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-red-50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                <Phone className="h-10 w-10 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-lg">Round-the-clock customer service support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black mb-8">STAY IN THE LOOP</h2>
            <p className="text-xl mb-12 text-gray-300">Get exclusive access to new drops, special offers, and insider athletic tips delivered straight to your inbox</p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex gap-4 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 text-lg font-medium bg-white border-2 border-transparent focus:border-red-600 outline-none transition-colors"
                />
                <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400">Join 50,000+ athletes who trust ELITE for their gear</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className=" ">
              <img className='w-[60%] -translate-y-10' src={newLogo} alt="" />
            </div>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed max-w-md">
                Premium athletic wear for champions. Built for performance, designed for style, crafted for winners.
              </p>
              <div className="flex space-x-4">
                {['F', 'T', 'I', 'Y'].map((social, i) => (
                  <div key={i} className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-red-600 cursor-pointer transition-all duration-300 transform hover:scale-110">
                    <span className="text-sm font-bold">{social}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Shop</h3>
              <ul className="space-y-4 text-gray-400">
                {['New Arrivals', 'Men', 'Women', 'Kids', 'Sale', 'Accessories'].map((item, i) => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors text-lg">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Support</h3>
              <ul className="space-y-4 text-gray-400">
                {['Contact Us', 'Size Guide', 'Shipping Info', 'Returns', 'FAQ', 'Track Order'].map((item, i) => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors text-lg">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <ul className="space-y-4 text-gray-400">
                {['About Us', 'Careers', 'Press', 'Sustainability', 'Privacy Policy', 'Terms'].map((item, i) => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors text-lg">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">&copy; 2025 ETALON UNIFORM. All rights reserved. Built for champions.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400">Payment Methods:</span>
              <div className="flex space-x-2">
                {['VISA', 'MC', 'AMEX', 'PP'].map((payment, i) => (
                  <div key={i} className="bg-gray-800 px-3 py-1 rounded text-xs font-bold text-gray-400">
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;