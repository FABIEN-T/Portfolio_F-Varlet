// import { ContactUs } from './ContactUs'
import MyForm from './MyForm'
import MyForm2 from './MyForm2'
import MyForm3 from './MyForm3'
import MyFormBis from './MyFormBis'

export default function SectionContact() {
  return (
    <section id="contact" className="w-full text-center mb-28">
      <h2 className="text-myBlue relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12">
        Contactez-moi
      </h2>
      {/* <ContactUs /> */}
      <MyFormBis />
    </section>
  )
}
