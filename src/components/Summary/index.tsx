import Item from './Item'

const Summary = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row w-full">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default Summary
