import Image from "next/image"
import pwoc_logo from "../../public/assets/logo/pwoc_logo.png"
import { BasicContentCard } from "./BasicContentCard"

export const RegistrationCard = () => {
  return (
    <div className="border-2 border-red-600 glassmorphism p-5 md:py-8 md:px-10">
      <div className="text-4xl md:text-6xl p-3 mb-4 text-[#ef8220] uppercase text-center bg-[#cc66a298] glassmorphism">Title</div>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="mr-8">
          <BasicContentCard title="Mentee" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ut ipsum officia mollitia sapiente quaerat quod ex voluptas odio eius." titleClass="text-3xl md:text-4xl p-3 inline-block mb-4" containerClass="p-2" />

        </div>

        <div className="mr-8">
          <BasicContentCard title="Mentor" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ut ipsum officia mollitia sapiente quaerat quod ex voluptas odio eius." titleClass="text-3xl md:text-4xl p-3 inline-block mb-4" containerClass="p-2" />
        </div>
      </div>
    </div>
  )
}
