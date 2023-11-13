type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="md:max-w-[1920px] max-w-[90vw] w-full flex flex-col gap-y-8 items-center justify-center h-full">
      {children}
    </div>
  )
}

export default Wrapper
