import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import Videos from '@/pages/Videos'
import Services from '@/pages/Services'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  )
}

export default App