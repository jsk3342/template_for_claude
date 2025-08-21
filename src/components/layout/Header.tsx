import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            AI 바이브 코딩
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              홈
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              소개
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
              블로그
            </Link>
            <Link to="/videos" className="text-gray-600 hover:text-primary transition-colors">
              영상
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
              서비스
            </Link>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              로그인
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}