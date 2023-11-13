type TitleProps = {
  name: string
}

const Title = ({ name }: TitleProps) => <h1 className="text-2xl">{name}</h1>
export default Title
