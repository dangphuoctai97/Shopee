import RegisterHeader from 'src/components/RegisterHeader'
import Footer from 'src/components/Footer'
interface Props {
  children?: React.ReactNode
}

const RegisterLayout = ({ children }: Props) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}

export default RegisterLayout
