import Item from './Item'

type SummaryProps = {
  countUsers: number
}
const Summary = ({ countUsers }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row w-full">
      <Item count={countUsers} description="Current users on platform" />
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default Summary
