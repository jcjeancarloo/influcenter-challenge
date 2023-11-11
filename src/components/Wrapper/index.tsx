type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="bg-black max-w-[1920px] w-full flex flex-col items-center justify-center h-screen">
      {children}
    </div>
  )
}

export default Wrapper
