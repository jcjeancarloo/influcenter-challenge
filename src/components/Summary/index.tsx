import Card from '@components/Common/Card'

const Summary = () => {
  return (
    <div className="flex flex-col gap-y-2 gap-x-4 md:flex-row  bg-red-400 w-full">
      <Card width="md:w-1/4">
        <h1>Content here</h1>
      </Card>
      <Card width="md:w-1/4">
        <h1>Content here</h1>
      </Card>
      <Card width="md:w-1/4">
        <h1>Content here</h1>
      </Card>
      <Card width="md:w-1/4">
        <h1>Content here</h1>
      </Card>
    </div>
  )
}

export default Summary
