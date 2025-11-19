'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Droplets, Shield, Target, Eye, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronRight, Check, Award, Users, TrendingUp, Heart, Globe, MessageCircle, X as CloseIcon } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  // State untuk Modal Video
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videoSources = [
    'vid-baseone1.mp4', 'vid-baseone2.mp4', 'vid-baseone3.mp4', 'vid-baseone4.mp4', 'vid-baseone5.mp4'
  ]

  const openModal = (index) => {
    setCurrentVideoIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleVideoEnd = () => {
    // Pindah ke video berikutnya, dan kembali ke awal jika sudah di akhir
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length)
  }

  const navigation = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Produk', href: '#products' },
    { name: 'Teknologi', href: '#technology' },
    { name: 'Visi & Misi', href: '#vision' },
    { name: 'Manfaat', href: '#benefits' },
    { name: 'Sertifikasi', href: '#certification' },
    { name: 'Kontak', href: '#contact' },
  ]

  const products = [
    {
      name: 'BASEONE 330ml',
      description: 'Praktis untuk dibawa bepergian',
      features: ['Tutup botol aman', 'Desain ergonomis', 'Kemasan higienis'],
      image: '/baseone-330ml.jpg'
    },
    {
      name: 'BASEONE 600ml',
      description: 'Cocok untuk konsumsi sehari-hari',
      features: ['Kapasitas ideal', 'Ekonomis', 'Ramah lingkungan'],
      image: '/baseone-600ml.jpg'
    },
    {
      name: 'BASEONE Galon 19L',
      description: 'Untuk kebutuhan rumah tangga dan kantor',
      features: ['Volume besar', 'Tahan lama', 'Mudah digunakan'],
      image: '/galon-19l.jpg'
    }
  ]

  const benefits = [
    { icon: '💧', text: 'Memenuhi kebutuhan akan air bersih atau cairan dalam tubuh sehingga mencegah dehidrasi' },
    { icon: '💦', text: 'Membantu produksi air liur.' },
    { icon: '🌡️', text: 'Mengatur suhu tubuh tetap stabil.' },
    { icon: '🥗', text: 'Membantu penyerapan nutrisi.' },
    { icon: '🩸', text: 'Meningkatkan sirkulasi oksigen dalam darah.' },
    { icon: '🧠', text: 'Mendukung fungsi kognitif tubuh' },
    { icon: '❤️', text: 'Mengurangi gangguan pada Jantung' },
    { icon: '🤕', text: 'Mengatasi Sakit Kepala, Reumatik dan Batu Ginjal' },
    { icon: '🥛', text: 'Mengurangi gejala Kolestrol, Ambein dan Liver' },
    { icon: '🛡️', text: 'Mencegah Leukimia, Bronchitis dan Batuk Asma' },
    { icon: '🦴', text: 'Mengatasi Haid yang tidak teratur dan Asam Urat' },
    { icon: '💪', text: 'Menambah Stamina Tubuh' },
    { icon: '🚽', text: 'Mengatasi Sembelit dan TBC' },
    { icon: '🩺', text: 'Mengurangi resiko darah tinggi' },
    { icon: '🧹', text: 'Membuang Racun/ Detox' },
    { icon: '🌀', text: 'Memperlancar saluran pencernaan' },
    { icon: '😴', text: 'Mengurangi Insomnia, Vertigo / Migrain' },
    { icon: '🩹', text: 'Mempercepat Proses Penyembuhan ketika sakit' },
    { icon: '🛡️', text: 'Meningkatkan sistem kekebalan tubuh' },
    { icon: '😊', text: 'Merawat kesehatan kulit / Mencegah Jerawat' },
    { icon: '🤰', text: 'Menjaga Kesehatan ibu hamil.' },
  ]

  const certifications = [
    { imageSrc: '/bpom-baseone.jpg', altText: 'Sertifikasi BPOM untuk BASEONE' },
    { imageSrc: '/halal-baseone.png', altText: 'Sertifikasi HALAL untuk BASEONE' },
    { imageSrc: '/haki-baseone.png', altText: 'Sertifikasi HAKI untuk BASEONE' },
    { imageSrc: '/nib-dba.jpg', altText: 'Nomor Induk Berusaha PT. Delta Baseone Artha' },
    { imageSrc: '/sni.jpg', altText: 'Sertifikasi SNI untuk BASEONE' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Droplets className="h-8 w-8 text-cyan-600" />
              <span className="ml-2 text-xl font-bold text-gradient">BASEONE</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
                    activeSection === item.href.substring(1) ? 'text-cyan-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section dengan Desain Baru */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-baseone opacity-5"></div>
        
        {/* GAMBAR POJOK KANAN ATAS YANG BERGERAK */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-0 lg:top-24 lg:right-8 z-10"
        >
          <img 
            src="/baseone-bottles.jpg" 
            alt="Produk Air Minum BASEONE" 
            className="w-32 h-auto lg:w-48 rounded-lg shadow-2xl"
          />
        </motion.div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gradient">BASEONE</span>
            <br />
            <span className="text-gray-800">Bukan Air Minum Biasa</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-red-500 font-semibold mb-4"
          >
            Healthy Drinking Water
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Air demineral dengan tingkat kemurnian tertinggi melalui teknologi Reverse Osmosis 
            untuk kesehatan optimal dan gaya hidup modern.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#products" className="bg-gradient-baseone text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
              Lihat Produk
            </a>
            <a href="#contact" className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 hover:text-white transition-colors">
              Hubungi Kami
            </a>
          </motion.div>
        </div>

        {/* VIDEO YANG BERJALAR DARI KIRI KE KANAN (DENGAN FUNGSI KLIK) */}
        <div className="absolute bottom-0 w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {videoSources.map((src, index) => (
              <div
                key={index}
                className="relative cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <video
                  className="w-64 h-40 object-cover mx-2 rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={`/${src}`} type="video/mp4" />
                  Browser Anda tidak mendukung video.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center rounded-lg">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplikasi video untuk efek scroll tak terbatas */}
            {videoSources.map((src, index) => (
              <div
                key={`duplicate-${index}`}
                className="relative cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <video
                  className="w-64 h-40 object-cover mx-2 rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={`/${src}`} type="video/mp4" />
                  Browser Anda tidak mendukung video.
                </video>
                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center rounded-lg">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tentang <br />
              <span className="text-gradient">PT. Delta Baseone Artha</span>
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-justify">
              PT. DELTA BASEONE ARTHA hadir dan ikut berpartisipasi melalui usaha penyediaan Produk Air Minum Dalam Kemasan ( AMDK ) dalam kategori Air Demineral Berkaitan dengan kesehatan dan pola kehidupan masyarakat di Indonesia, kami atas nama PT. DELTA BASEONE ARTHA, berfokus pada Unique Selling Proposition (USP) telah membuat nama dagang untuk produk AIR MINUM DALAM KEMASAN (AMDK) yang bernama BASEONE dalam kategori Air Demineral.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Motto Kami :</h3>
              <img 
                src="/bukan air biasa.jpg" 
                alt="Motto BASEONE" 
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-gray-800">Fokus</h4>
                  <p className="text-sm text-gray-600">Kemurnian Ekstrem</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔬</div>
                  <h4 className="font-semibold text-gray-800">Teknologi</h4>
                  <p className="text-sm text-gray-600">Reverse Osmosis</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">✅</div>
                  <h4 className="font-semibold text-gray-800">Sertifikasi</h4>
                  <p className="text-sm text-gray-600">BPOM / SNI / HALAL</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💎</div>
                  <h4 className="font-semibold text-gray-800">Kualitas</h4>
                  <p className="text-sm text-gray-600">TDS Rendah</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Produk <span className="text-gradient">BASEONE</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tersedia dalam berbagai ukuran kemasan untuk memenuhi kebutuhan konsumsi harian Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-40 mx-auto object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Teknologi <span className="text-gradient">Demineral</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proses pemurnian paling canggih untuk menghasilkan air dengan tingkat kemurnian tertinggi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Reverse Osmosis</h3>
                    <p className="text-gray-600">Teknologi membran semipermeabel dengan ukuran pori 0.0001 mikron untuk menyaring kontaminan.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">TDS Rendah</h3>
                    <p className="text-gray-600">Total Dissolved Solids mendekati nol, menjamin kemurnian air secara optimal.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Eye className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Deionisasi</h3>
                    <p className="text-gray-600">Proses penghilangan ion mineral untuk menghasilkan air murni bebas kontaminan.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Mengapa Air Demineral?</h3>
              <div className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-600 mb-2">Rasa Netral</h4>
                  <p className="text-sm text-gray-600">Tidak meninggalkan sisa rasa karena ketiadaan mineral.</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-600 mb-2">Mudah Diserap</h4>
                  <p className="text-sm text-gray-600">TDS rendah memudahkan tubuh menyerap air lebih efisien.</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-600 mb-2">Baik untuk Ginjal</h4>
                  <p className="text-sm text-gray-600">Mengurangi beban kerja ginjal dalam menyaring kotoran.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* GAMBAR TAMBAHAN "table.jpg" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <img 
              src="/table.jpg" 
              alt="Informasi Teknologi BASEONE" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visi & <span className="text-gradient">Misi</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-6">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-gray-600 text-center">
                Memperkenalkan AMDK kategori air minum murni yang diakui sebagai standar tertinggi 
                untuk hidrasi yang bersih dan bebas kontaminan, serta menjadi pilihan utama bagi 
                konsumen yang memprioritaskan kemurnian absolut dan gaya hidup sehat modern.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-6">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Menyediakan produk yang memenuhi standar kualifikasi kesehatan</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Berkontribusi pada perkembangan kesehatan generasi muda</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Membangun kesadaran akan "Kemurnian Superior"</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Memberikan kepuasan terbaik bagi pelanggan</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manfaat <span className="text-gradient">BASEONE</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Air demineral BASEONE memiliki berbagai manfaat untuk kesehatan tubuh Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg flex items-start space-x-3"
              >
                <span className="text-2xl">{benefit.icon}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sertifikasi & <span className="text-gradient">Legalitas</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Produk BASEONE telah memiliki berbagai sertifikasi resmi untuk menjamin kualitas dan keamanan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.altText}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center flex items-center justify-center"
              >
                <img 
                  src={cert.imageSrc} 
                  alt={cert.altText} 
                  className="h-24 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERUBAHAN: Contact Section Baru dengan Background dan QR Code */}
      <section 
        id="contact" 
        className="relative py-20 bg-cover bg-right-center"
        style={{ backgroundImage: "url('/gradiasi-tangan.jpg')" }}
      >
        {/* Overlay untuk memastikan teks terbaca */}
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami siap membantu Anda mendapatkan air minum berkualitas tertinggi. Hubungi kami melalui informasi berikut.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">PT. Delta Baseone Artha</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Kontak Kiri dengan Logo Baru */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src="/logo-email.png" alt="Email" className="h-5 w-5 object-contain" />
                  <a href="mailto:deltabaseoneartha@gmail.com" className="text-gray-700 hover:text-cyan-600">
                    deltabaseoneartha@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <img src="/logo-instagram.png" alt="Instagram" className="h-5 w-5 object-contain" />
                  <a href="https://www.instagram.com/baseone_official/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-cyan-600">
                    @baseone_official
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <img src="/logo-tiktok.png" alt="TikTok" className="h-5 w-5 object-contain" />
                  <a href="https://www.tiktok.com/@delta_baseone_artha?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-cyan-600">
                    @delta_baseone_artha
                  </a>
                </div>
              </div>

              {/* Tombol WhatsApp dan QR Code Kanan */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/6285880043011?text=Hai%20Selamat%20Datang%20di%20Call%20Center%20BASEONE,%20jelaskan%20apa%20yang%20perlu%20kami%20bantu%20%3F.."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Hubungi via WhatsApp (1)
                </a>
                <img src="/wa-qr-1.png" alt="WhatsApp QR 1" className="w-24 h-24 mx-auto border-2 border-gray-200 rounded-lg p-1" />

                <a
                  href="https://wa.me/6289669447829?text=Hai%20Selamat%20Datang%20di%20Call%20Center%20BASEONE,%20jelaskan%20apa%20yang%20perlu%20kami%20bantu%20%3F.."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Hubungi via WhatsApp (2)
                </a>
                <img src="/wa-qr-2.png" alt="WhatsApp QR 2" className="w-24 h-24 mx-auto border-2 border-gray-200 rounded-lg p-1" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* LOGO PERUSAHAAN DI SUDUT KANAN BAWAH */}
        <img 
          src="/001-compress1.jpg" 
          alt="Logo PT. Delta Baseone Artha" 
          className="absolute bottom-4 right-4 w-32 h-auto opacity-70"
        />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Droplets className="h-8 w-8 text-cyan-400" />
                <span className="ml-2 text-xl font-bold">BASEONE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Bukan Air Minum Biasa - Air Demineral dengan tingkat kemurnian tertinggi.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-cyan-400">Beranda</a></li>
                <li><a href="#about" className="hover:text-cyan-400">Tentang</a></li>
                <li><a href="#products" className="hover:text-cyan-400">Produk</a></li>
                <li><a href="#contact" className="hover:text-cyan-400">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>BASEONE 330ml</li>
                <li>BASEONE 600ml</li>
                <li>BASEONE Galon 19L</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/baseone_official/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@delta_baseone_artha?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
                  {/* Ganti dengan ikon TikTok jika ada */}
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08-1.53.63-2.92 1.48-4.03.13-.17.28-.33.44-.48 1.27-1.06 2.07-2.58 2.43-4.28.08-.38.13-.77.13-1.16 0-2.21-.01-4.42-.01-6.63 0-.39.05-.78.13-1.16.36-1.7 1.16-3.22 2.43-4.28.16-.15.31-.31.44-.48.85-1.11 1.4-2.4 1.48-4.03.01-1.3.02-2.61.02-3.91.08-1.63.63-3.02 1.48-4.03.13-.17.28-.33.44-.48 1.27-1.06 2.07-2.58 2.43-4.28.08-.38.13-.77.13-1.16 0-2.21-.01-4.42-.01-6.63 0-.39-.05-.78-.13-1.16-.36-1.7-1.16-3.22-2.43-4.28-.16-.15-.31-.31-.44-.48-.85-1.11-1.4-2.4-1.48-4.03-.01-1.3-.02-2.61-.02-3.91.08-1.63.63-3.02 1.48-4.03.13-.17.28-.33.44-.48 1.27-1.06 2.07-2.58 2.43-4.28.08-.38.13-.77.13-1.16 0-2.21-.01-4.42-.01-6.63 0-.39-.05-.78-.13-1.16-.36-1.7-1.16-3.22-2.43-4.28-.16-.15-.31-.31-.44-.48-.85-1.11-1.4-2.4-1.48-4.03-.01-1.3-.02-2.61-.02-3.91zM12 19.04c-3.89 0-7.04-3.15-7.04-7.04s3.15-7.04 7.04-7.04 7.04 3.15 7.04 7.04-3.15 7.04-7.04 7.04zm11.44.06c0 .89-.72 1.61-1.61 1.61s-1.61-.72-1.61-1.61.72-1.61 1.61-1.61 1.61.72 1.61 1.61z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 PT. Delta Baseone Artha. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal Video */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full aspect-video"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                key={currentVideoIndex} // Key untuk memastikan video berubah
                className="w-full h-full"
                autoPlay
                controls={false} // Sembunyikan kontrol default
                onEnded={handleVideoEnd}
              >
                <source src={`/${videoSources[currentVideoIndex]}`} type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
              
              {/* Tombol Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}