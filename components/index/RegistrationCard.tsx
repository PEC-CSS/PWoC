import { BasicContentCard } from "./BasicContentCard"
import {Button} from "@mui/material";

export const RegistrationCard = () => {
  return (
    <div className="border-2 glassmorphism p-5 md:py-8 md:px-10">
      <div className="text-4xl md:text-6xl p-3 mb-4 text-[#ef8220] uppercase text-center bg-[#cc66a298] glassmorphism">REGISTRATION</div>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="mr-8">
          <BasicContentCard
              title="Mentee"
              content="New to open source or just started exploring? Get a headstart in your journey by contributing to a wide variety of amazing projects and get well-versed with tools like Git and Github under the supervision of excellent mentors."
              titleClass="text-3xl md:text-4xl p-3 inline-block mb-4"
              containerClass="p-4 flex flex-col items-center">

              <Button
                  href="https://www.youtube.com"
                  target="_blank"
                  variant="contained"
                  style={{
                      background: "rgba(255,22,22,0.4)",
                      backdropFilter: "blur(8px)",
                      fontWeight: "bold",
                      fontSize: "15px",
                      margin: "20px 0"
                  }}
              >
                  Register as a mentee
              </Button>

          </BasicContentCard>

        </div>

        <div className="mr-8">
          <BasicContentCard
              title="Mentor"
              content="Take the opportunity to enhance or complete your projects by opening them up for contributions. Get the experience of maintaining an open source project and reviewing and merging pull requests."
              titleClass="text-3xl md:text-4xl p-3 inline-block mb-4"
              containerClass="p-4 flex flex-col items-center">

              <Button
                  href="https://www.youtube.com"
                  target="_blank"
                  variant="contained"
                  style={{
                      background: "rgba(255,22,22,0.4)",
                      backdropFilter: "blur(8px)",
                      fontWeight: "bold",
                      fontSize: "15px",
                      margin: "20px 0"
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
