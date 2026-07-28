import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import ShopBar from '@/components/layout/ShopBar'
import Footer from '@/components/layout/Footer'
import StickyMobileCTA from '@/components/ui/StickyMobileCTA'
import HomePage from '@/pages/HomePage'
import CollectionPage from '@/pages/CollectionPage'
import SizeGuidePage from '@/pages/SizeGuidePage'
import OurStoryPage from '@/pages/OurStoryPage'
import JournalPage from '@/pages/JournalPage'
import ArticlePage from '@/pages/ArticlePage'
import ContactPage from '@/pages/ContactPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import PillarGuidePage from '@/pages/PillarGuidePage'
import NotFoundPage from '@/pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollToTop />
      <AnnouncementBar />
      <Header />
      <ShopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:slug" element={<ArticlePage />} />
        <Route path="/small-dog-harness-guide" element={<PillarGuidePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
