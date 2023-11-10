import Card from './components/Card'

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <Card width="w-[500px]" height="h-[500px]">
        <span> Some content here</span>
      </Card>
    </main>
  )
}

export default App
