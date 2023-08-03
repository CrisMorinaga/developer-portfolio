import ContactForm from "@/components/Contact/ContactForm";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";


export default function Contact() {
    return (
        <>
            <div className="container sm:mt-0 mt-10 pd:mb-0 pb-24">
                <Layout>
                    <AnimatedText text="Contact me" className="mb-4 text-start xl:!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl"/>
                    <ContactForm />
                </Layout>
            </div>
            
        </>
    )
  }
  