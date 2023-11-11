import Card from '@components/Common/Card'

const Summary = () => {
  return (
    <div className="flex flex-col gap-y-2 md:flex-row  bg-red-400 w-full">
      <Card>
        <h1>Content here</h1>
      </Card>
      <Card>
        <h1>Content here</h1>
      </Card>
      <Card>
        <h1>Content here</h1>
      </Card>
      <Card>
        <h1>Content here</h1>
      </Card>
    </div>
  )
}

export default Summary
