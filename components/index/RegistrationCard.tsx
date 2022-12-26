import { BasicContentCard } from "./BasicContentCard"
import {Button} from "@mui/material";
import content from "../../data/content.json"

export const RegistrationCard = () => {
  return (
    <div className="border-2 glassmorphism bg-[#14000600] p-5 md:py-8 md:px-10">
      <div className="[@media(max-width:230px)]:text-lg text-2xl sm:text-4xl md:text-6xl p-3 mb-4 text-[#ef8220] uppercase text-center bg-[#cc66a24d] glassmorphism break-words">REGISTRATION</div>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="md:mx-8">
          <BasicContentCard
              title="Mentee"
              content={content.menteeRegisDesc}
              titleClass="text-xl sm:text-2xl md:text-4xl p-3 inline-block mb-4"
              containerClass="p-4 flex flex-col items-center my-3 md:my-1">

              <Button
                  href="https://www.youtube.com"
                  target="_blank"
                  variant="contained"
                  style={{
                      background: "rgba(250,72,72,0.3)",
                      backdropFilter: "blur(8px)",
                      fontWeight: "bold",
                      fontSize: "16px",
                      margin: "20px 0",
                      borderRadius: "10px"
                  }}
              >
                  Register as a mentee
              </Button>

          </BasicContentCard>

        </div>

        <div className="md:mx-8">
          <BasicContentCard
              title="Mentor"
              content={content.mentorRegisDesc}
              titleClass="text-xl sm:text-2xl md:text-4xl p-3 inline-block mb-4"
              containerClass="p-4 flex flex-col items-center my-3 md:my-1">

              <Button
                  href="https://www.youtube.com"
                  target="_blank"
                  variant="contained"
                  style={{
                      background: "rgba(250,72,72,0.3)",
                      backdropFilter: "blur(8px)",
                      fontWeight: "bold",
                      fontSize: "16px",
                      margin: "20px 0",
                      borderRadius: "10px"
                  }}
              >
                  Register as a mentor
              </Button>

          </BasicContentCard>
        </div>
      </div>
    </div>
  )
}
