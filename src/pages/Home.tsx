import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ExampleComponent } from '@/components/features/example/ExampleComponent'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            React + TypeScript 템플릿
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            shadcn/ui, Tailwind CSS, Framer Motion이 포함된 현대적인 웹 애플리케이션 템플릿
          </p>
          
          <div className="flex justify-center gap-4">
            <Button size="lg">시작하기</Button>
            <Button variant="outline" size="lg">문서 보기</Button>
          </div>
        </motion.div>

        {/* 예제 컴포넌트 */}
        <ExampleComponent />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-6 bg-white/50 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold mb-4">템플릿 사용 방법</h2>
          <p className="text-gray-600 mb-4">
            이 템플릿을 복제하고 TEMPLATE.md 가이드를 따라 
            자신만의 프로젝트를 시작하세요
          </p>
          <Button variant="secondary">TEMPLATE.md 보기</Button>
        </motion.div>
      </div>
    </div>
  )
}