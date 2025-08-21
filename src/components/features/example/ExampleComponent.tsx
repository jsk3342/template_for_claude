import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ExampleComponent() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* 기본 카드 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>템플릿 예제 컴포넌트</CardTitle>
          <CardDescription>
            이 컴포넌트는 템플릿의 주요 기능들을 보여줍니다
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* 상태 관리 예제 */}
          <div className="flex items-center gap-4">
            <Button onClick={() => setCount(count + 1)}>
              클릭 횟수: {count}
            </Button>
            <Button variant="outline" onClick={() => setCount(0)}>
              초기화
            </Button>
          </div>

          {/* Framer Motion 애니메이션 예제 */}
          <div className="space-y-2">
            <Button 
              variant="secondary" 
              onClick={() => setIsVisible(!isVisible)}
            >
              애니메이션 토글
            </Button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                scale: isVisible ? 1 : 0.8 
              }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-primary/10 rounded-lg"
            >
              <p className="text-sm text-muted-foreground">
                🎉 Framer Motion 애니메이션이 작동중입니다!
              </p>
            </motion.div>
          </div>

          {/* Tailwind CSS 스타일링 예제 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900">Primary</h4>
              <p className="text-sm text-blue-700">주요 컬러 테마</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900">Success</h4>
              <p className="text-sm text-green-700">성공 상태</p>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h4 className="font-semibold text-orange-900">Warning</h4>
              <p className="text-sm text-orange-700">경고 상태</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 사용법 안내 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">이 컴포넌트 사용법</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p>
              <code className="bg-muted px-2 py-1 rounded">src/pages/Home.tsx</code>에서 
              이 컴포넌트를 import하여 사용할 수 있습니다:
            </p>
            <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
              <code>{`import { ExampleComponent } from '@/components/features/example/ExampleComponent'

export default function Home() {
  return (
    <div>
      <ExampleComponent />
    </div>
  )
}`}</code>
            </pre>
            <p className="text-muted-foreground">
              실제 프로젝트에서는 이 예제 컴포넌트를 삭제하고 
              자신만의 컴포넌트를 만들어 사용하세요.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}