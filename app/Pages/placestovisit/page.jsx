"use client"
import React from "react";
import { useSelector } from "react-redux";

const PlacesToVisit = () => {
  const { langName } = useSelector((state) => state.lang);
  return (
    <div>
      <div
        className={`pt-10 pb-10 lg:pt-20 ${
          langName === "Kannada" ? "hidden" : "flex"
        } `}
      >
        {/* List of places to visit */}
        <div className="flex flex-col gap-4 px-4 md:px-8">
          <div className="flex flex-col items-center pb-5">
            <p className="text-3xl lg:text-5xl text-center font-semibold text-black py-4 px-4 underline md:mx-auto">
              Places to visit near Kulkunda Shree Basaveshwara Temple:
            </p>
          </div>
          {/* Place 1 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              1. Kukke Shri Subrahmanya Temple: This famous Hindu temple is
              located in Subrahmanya, situated at a distance of 4 km away from
              Kulkunda temple.
            </p>
          </div>
          {/* Place 2 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              2. Adi Subrahmanya Temple: Located in Kukke Subrahmanya,
              Karnataka, this temple is dedicated to Lord Subrahmanya and is
              worshipped for serpent-related afflictions in the form of a
              valmika (ant hill). It is located at a distance of 4 km from the
              Kulkunda temple.
            </p>
          </div>
          {/* Place 3 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              3. Shri Subrahmanya Mutt: Belonging to the Dwaitha tradition, this
              mutt is situated to the southeast of the outer quadrangle of Kukke
              Shri Subrahmanya Temple. Sri Madwacharya made his brother,
              Vishnuteerthacharya, his disciple and gave this mutt. The present
              seer of this mutt is Sri Sri Sri Vidyaprasanna Theertha Swamiji.
              Shri Abhaya Ganapathi Temple, Sri Vanadurga Devi Temple, Agrahara
              Somanatha Temple, and Samputa Narasimha Temple are also managed by
              this mutt.
            </p>
          </div>
          {/* Place 4 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              4. Kashikatte Shri Ganapathi Temple: Situated beside the main road
              at Kashikatte, Subrahmanya, about 3.3 km from the temple, this
              place features temples of Ganapathi and Anjaneya.
            </p>
          </div>
          {/* Place 5 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              5. Biladwara: On the way to the Kukke Shri Subrahmanya temple from
              Kumaradhara, there is a place called Biladwara which is 3 km from
              the temple. It is said that Vasuki (Serpent king) lay hiding in
              this cave to escape from Garude. It is a cave surrounded by a
              garden.
            </p>
          </div>
          {/* Place 6 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              6. Shri Vanadurga Devi Temple: This temple is about 2.9 km away
              from the temple. Goddess Durga is worshipped here, and daily
              poojas are conducted for devotees.
            </p>
          </div>
          {/* Place 7 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              7. Shree Abhaya Mahaganapathi: Situated on the right side of the
              main road to Subrahmanya, about 2.9 km from the temple, it is one
              of the biggest monolithic statues of Lord Ganesha, standing at 21
              feet (6.4 m) tall. The architecture of the shrine is in Nepali
              style.
            </p>
          </div>
          {/* Place 8 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              8. Agrahara Shri Somanatha Temple: This ancient temple, also
              called Panchami Theertha, is situated on the left bank of the
              Kumaradhara, 3.7 kilometers from Shree Basaveshwara temple. There
              is a temple dedicated to Lord Shiva here, and swamijis of Shree
              Subrahmanya Mutt are entombed in this place.
            </p>
          </div>
          {/* Place 9 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              9. Shree Harihareshwara Temple: This ancient temple is situated at
              the village Hariharapallathadka, 12.4 kilometers away from
              Kulkunda. It is the abode of both Lord Vishnu (Hari) and Lord
              Shiva (Hara). A panoramic view of Shesha Parvatha (Western Ghats)
              can be seen from this temple, which is famous for Shani Pooja.
            </p>
          </div>
          {/* Place 10 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              10. Kumaradhara River (Bathing Ghat): Originating from
              Kumaraparvatha, this river is the primary tributary of River
              Nethravathi and joins the Arabian Sea. The tradition suggests
              bathing at the bathing ghat at Kumaradhara, which is 2 km away
              from Kukke Shri Subrahmanya Temple and 1 km away from Shree
              Basaveshwara Temple.
            </p>
          </div>
          {/* Place 11 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              11. Shri Kshethra Dharmasthala: Dharmasthala Manjunatha Swamy
              Temple is a significant Hindu pilgrimage site in Karnataka, India,
              dedicated to Lord Shiva. It is known for its unique management by
              the Jain Pergade family, fostering religious harmony, and
              providing free meals to all visitors. This temple is 50 km away
              from Kulkunda.
            </p>
          </div>
          {/* Place 12 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              12. Bisle Ghat Viewpoint: Bisle Ghat is situated between
              Subrahmanya and Sakleshpura in Karnataka, approximately 21 km from
              Kulkunda. The viewpoint offers beautiful views of Kumara Parvatha
              and other mountain ranges in the Western Ghats. This viewpoint is
              the confluence of three districts: Dakshina Kannada, Hassan, and
              Kodagu.
            </p>
          </div>
          {/* Place 13 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              13. Patla Betta: Patla Betta is a picturesque hill located in
              Sakleshpur, Karnataka, standing at an elevation of 3500 feet above
              sea level. It offers panoramic views of the surrounding mountains
              and valleys, ideal for trekking. It is 29 km away from Kulkunda.
            </p>
          </div>
          {/* Place 14 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              14. Mallalli Falls: Located near Somwarpet in Coorg, Karnataka,
              Mallalli Falls is a majestic waterfall with a height of around 200
              feet, formed by the Kumaradhara River. Best visited during the
              monsoon season, the falls offer a picturesque setting amidst lush
              greenery, attracting nature enthusiasts and trekkers exploring the
              surrounding landscapes in the Western Ghats. It is approximately
              46 km away from Kulkunda.
            </p>
          </div>
          {/* Place 15 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              15. Kumara Parvatha Trek: For adventure enthusiasts, the Kumara
              Parvatha trek is a must-try experience. Known as Pushpagiri, it is
              the fourth-highest peak in the Western Ghats and offers a
              challenging yet rewarding trekking trail. The trek takes you
              through dense forests, grasslands, and rocky terrains, providing
              breathtaking views of the surrounding landscapes. The base camp is
              in Kukke Subrahmanya, making it a thrilling adventure just 5 km
              away from Kulkunda Shree Basaveshwara Temple.
            </p>
          </div>
        </div>
      </div>
      <div className={`pt-10 pb-10 lg:pt-20 ${
          langName === "English" ? "hidden" : "flex"
        } `}>
        {/* List of places to visit */}
        <div className="flex flex-col gap-4 px-4 md:px-8">
          <div className="flex flex-col items-center pb-5">
            <p className="text-3xl lg:text-5xl text-center font-semibold text-black py-4 px-4 underline md:mx-auto">
              ಹತ್ತಿರದಲ್ಲಿ ಭೇಟಿ ಮಾಡಬಹುದಾದ ಸ್ಥಳಗಳು:
            </p>
          </div>
          {/* Place 1 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              1. ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ: ಈ ಪ್ರಸಿದ್ಧ ಹಿಂದೂ ದೇವಾಲಯವು
              ಸುಬ್ರಹ್ಮಣ್ಯದಲ್ಲಿದೆ, ಇದು ಕುಲ್ಕುಂದ ದೇವಸ್ಥಾನದಿಂದ 4 ಕಿಮೀ ದೂರದಲ್ಲಿದೆ.
            </p>
          </div>
          {/* Place 2 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              2. ಆದಿ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ: ಕರ್ನಾಟಕದ ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯದಲ್ಲಿರುವ ಈ
              ದೇವಸ್ಥಾನದಲ್ಲಿ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವರನ್ನು ವಾಲ್ಮೀಕ (ಹುತ್ತ) ರೂಪದಲ್ಲಿ
              ಪೂಜಿಸಲಾಗುತ್ತದೆ. ಇದು ಕುಲ್ಕುಂದ ದೇವಸ್ಥಾನದಿಂದ 4 ಕಿ.ಮೀ ದೂರದಲ್ಲಿದೆ.
            </p>
          </div>
          {/* Place 3 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              3. ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಮಠ: ದ್ವೈತ ಸಂಪ್ರದಾಯಕ್ಕೆ ಸೇರಿದ ಈ ಮಠವು ಕುಕ್ಕೆ
              ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನದ ಆಗ್ನೇಯಕ್ಕೆ ನೆಲೆಗೊಂಡಿದೆ. ಶ್ರೀ
              ಮದ್ವಾಚಾರ್ಯರು ತಮ್ಮ ಸಹೋದರ ವಿಷ್ಣುತೀರ್ಥಾಚಾರ್ಯರನ್ನು ತಮ್ಮ ಶಿಷ್ಯನನ್ನಾಗಿ
              ನೇಮಿಸಿ ಈ ಮಠವನ್ನು ಅವರ ಸುಪರ್ದಿಗೆ ಕೊಟ್ಟರು. ಪ್ರಸ್ತುತ ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ
              ವಿದ್ಯಾಪ್ರಸನ್ನ ತೀರ್ಥ ಸ್ವಾಮೀಜಿ ಮಠದ ಪೀಠಾಧಿಪತಿಗಳಾಗಿದ್ದಾರೆ. ಶ್ರೀ ಅಭಯ
              ಗಣಪತಿ ದೇವಸ್ಥಾನ, ಶ್ರೀ ವನದುರ್ಗಾ ದೇವಿ ದೇವಸ್ಥಾನ, ಅಗ್ರಹಾರ ಸೋಮನಾಥ
              ದೇವಸ್ಥಾನ ಮತ್ತು ಸಂಪುಟ ನರಸಿಂಹ ದೇವಸ್ಥಾನವನ್ನು ಸಹ ಈ ಮಠದಿಂದ
              ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ.
            </p>
          </div>
          {/* Place 4 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              4. ಕಾಶಿಕಟ್ಟೆ ಶ್ರೀ ಗಣಪತಿ ದೇವಸ್ಥಾನ: ಕುಲ್ಕುಂದ ದೇವಸ್ಥಾನದಿಂದ ಸುಮಾರು 3.3
              ಕಿ.ಮೀ ದೂರದಲ್ಲಿರುವ ಸುಬ್ರಹ್ಮಣ್ಯದ ಕಾಶಿಕಟ್ಟೆಯಲ್ಲಿ ಮುಖ್ಯ ರಸ್ತೆಯ
              ಪಕ್ಕದಲ್ಲಿರುವ ಈ ಸ್ಥಳವು ಗಣಪತಿ ಮತ್ತು ಆಂಜನೇಯನ ದೇವಾಲಯಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.
            </p>
          </div>
          {/* Place 5 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              5. ಬಿಲದ್ವಾರ: ಕುಮಾರಧಾರದಿಂದ ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನಕ್ಕೆ
              ಹೋಗುವ ದಾರಿಯಲ್ಲಿ ದೇವಸ್ಥಾನದಿಂದ 3 ಕಿ.ಮೀ ದೂರದಲ್ಲಿ ಬಿಲದ್ವಾರ ಎಂಬ
              ಸ್ಥಳವಿದೆ. ವಾಸುಕಿ (ಸರ್ಪ ರಾಜ) ಗರುಡನಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಈ ಗುಹೆಯಲ್ಲಿ
              ಅಡಗಿಕೊಂಡು,ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವರ ತಪ್ಪಸ್ಸು ಮಾಡಿದನು ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ.
            </p>
          </div>
          {/* Place 6 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              6. ಶ್ರೀ ವನದುರ್ಗಾ ದೇವಿ ದೇವಸ್ಥಾನ: ಈ ದೇವಸ್ಥಾನವು ದೇವಸ್ಥಾನದಿಂದ ಸುಮಾರು
              2.9 ಕಿ.ಮೀ ದೂರದಲ್ಲಿದೆ. ಇಲ್ಲಿ ದುರ್ಗಾ ದೇವಿಯನ್ನು ಪೂಜಿಸಲಾಗುತ್ತದೆ.
            </p>
          </div>
          {/* Place 7 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              7. ಶ್ರೀ ಅಭಯ ಮಹಾಗಣಪತಿ: ದೇವಸ್ಥಾನದಿಂದ ಸುಮಾರು 2.9 ಕಿಮೀ ದೂರದಲ್ಲಿ
              ಸುಬ್ರಹ್ಮಣ್ಯಕ್ಕೆ ಹೋಗುವ ಮುಖ್ಯ ರಸ್ತೆಯ ಬಲಭಾಗದಲ್ಲಿದೆ, ಇದು 21 ಅಡಿ (6.4
              ಮೀ) ಎತ್ತರದ ಗಣೇಶನ ಅತಿದೊಡ್ಡ ಏಕಶಿಲೆಯ ವಿಗ್ರಹ ಆಗಿದೆ. ದೇವಾಲಯದ
              ವಾಸ್ತುಶಿಲ್ಪವು ನೇಪಾಳಿ ಶೈಲಿಯಲ್ಲಿದೆ. .
            </p>
          </div>
          {/* Place 8 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              8. ಅಗ್ರಹಾರ ಶ್ರೀ ಸೋಮನಾಥ ದೇವಸ್ಥಾನ: ಪಂಚಮಿ ತೀರ್ಥ ಎಂದೂ ಕರೆಯಲ್ಪಡುವ ಈ
              ಪುರಾತನ ದೇವಾಲಯವು ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ 3.7 ಕಿಲೋಮೀಟರ್
              ದೂರದಲ್ಲಿರುವ ಕುಮಾರಧಾರದ ಎಡದಂಡೆಯಲ್ಲಿದೆ. ಇಲ್ಲಿ ಶಿವನಿಗೆ ಸಮರ್ಪಿತವಾದ
              ದೇವಾಲಯವಿದ್ದು, ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಮಠದ ಸ್ವಾಮೀಜಿಗಳು ಈ ಸ್ಥಳದಲ್ಲಿ
              ವೃಂದಾವನಸ್ಥರಾಗಿದ್ದಾರೆ.
            </p>
          </div>
          {/* Place 9 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              9. ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ: ಈ ಪುರಾತನ ದೇವಸ್ಥಾನವು ಕುಲ್ಕುಂದದಿಂದ 12.4
              ಕಿಲೋಮೀಟರ್ ದೂರದಲ್ಲಿರುವ ಹರಿಹರಪಲ್ಲತ್ತಡ್ಕ ಗ್ರಾಮದಲ್ಲಿದೆ. ವಿಷ್ಣು (ಹರಿ)
              ಮತ್ತು ಶಿವ (ಹರ) ಇಬ್ಬರನ್ನು ಜೊತೆಯಾಗಿ ನೋಡಬಹುದು. ಶನಿ ಪೂಜೆಗೆ
              ಹೆಸರುವಾಸಿಯಾದ ಈ ದೇವಾಲಯದಿಂದ ಶೇಷ ಪರ್ವತದ (ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು) ವಿಹಂಗಮ
              ನೋಟವನ್ನು ಕಾಣಬಹುದು.
            </p>
          </div>
          {/* Place 10 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              10. ಕುಮಾರಧಾರ ನದಿ (ಸ್ನಾನದ ಘಟ್ಟ): ಕುಮಾರಪರ್ವತದಿಂದ ಹುಟ್ಟುವ ಈ ನದಿಯು
              ನೇತ್ರಾವತಿ ನದಿಯ ಪ್ರಾಥಮಿಕ ಉಪನದಿಯಾಗಿದ್ದು ಅರಬ್ಬೀ ಸಮುದ್ರವನ್ನು
              ಸೇರುತ್ತದೆ. ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನದಿಂದ 2 ಕಿಮೀ ಮತ್ತು ಶ್ರೀ
              ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ 1 ಕಿಮೀ ದೂರದಲ್ಲಿರುವ ಕುಮಾರಧಾರ ಸ್ನಾನಘಟ್ಟದಲ್ಲಿ
              ಸ್ನಾನ ಮಾಡಿ ಶ್ರೀ ದೇವರ ದರ್ಶನ ಮಾಡವುದು ಸಂಪ್ರದಾಯವಾಗಿದೆ.
            </p>
          </div>
          {/* Place 11 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              11. ಶ್ರೀ ಕ್ಷೇತ್ರ ಧರ್ಮಸ್ಥಳ: ಧರ್ಮಸ್ಥಳ ಮಂಜುನಾಥ ಸ್ವಾಮಿ ದೇವಾಲಯವು ಭಾರತದ
              ಕರ್ನಾಟಕದಲ್ಲಿ ಶಿವ ದೇವರಿಗೆ ಸಮರ್ಪಿತವಾದ ಮಹತ್ವದ ಹಿಂದೂ ಯಾತ್ರಾ
              ಸ್ಥಳವಾಗಿದೆ. ಇದು ಜೈನ ಧರ್ಮದ ಪೆರ್ಗಡೆ ಕುಟುಂಬದ ವಿಶಿಷ್ಟ ನಿರ್ವಹಣೆಗೆ
              ಹೆಸರುವಾಸಿಯಾಗಿದೆ, ಧಾರ್ಮಿಕ ಸಾಮರಸ್ಯವನ್ನು ಬೆಳೆಸುವುದರ
              ಜೊತೆಗೆ,ಕ್ಷೇತ್ರಕ್ಕೆ ಬರುವ ಎಲ್ಲಾ ಭಕ್ತರಿಗೆ ಅನ್ನಪ್ರಸಾದವನ್ನು
              ಒದಗಿಸಲಾಗುತ್ತಿದೆ. ಈ ದೇವಾಲಯವು ಕುಲ್ಕುಂದದಿಂದ 50 ಕಿಮೀ ದೂರದಲ್ಲಿದೆ.
            </p>
          </div>
          {/* Place 12 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              12. ಬಿಸ್ಲೆ ಘಾಟ್ ವ್ಯೂಪಾಯಿಂಟ್: ಬಿಸ್ಲೆ ಘಾಟ್ ಕರ್ನಾಟಕದ ಸುಬ್ರಹ್ಮಣ್ಯ
              ಮತ್ತು ಸಕಲೇಶಪುರದ ನಡುವೆ, ಕುಲ್ಕುಂದದಿಂದ ಸರಿಸುಮಾರು 21 ಕಿಮೀ ದೂರದಲ್ಲಿದೆ.
              ಈ ವ್ಯೂಪಾಯಿಂಟ್ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳಲ್ಲಿನ ಕುಮಾರ ಪರ್ವತ ಮತ್ತು ಇತರ ಪರ್ವತ
              ಶ್ರೇಣಿಗಳ ಸುಂದರ ನೋಟವನ್ನು ನೀಡುತ್ತದೆ. ಈ ದೃಷ್ಟಿಕೋನವು ದಕ್ಷಿಣ ಕನ್ನಡ,
              ಹಾಸನ ಮತ್ತು ಕೊಡಗು ಮೂರು ಜಿಲ್ಲೆಗಳ ಸಂಗಮವಾಗಿದೆ
            </p>
          </div>
          {/* Place 13 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              13. ಪಟ್ಲ ಬೆಟ್ಟ: ಪಟ್ಲ ಬೆಟ್ಟವು ಕರ್ನಾಟಕದ ಸಕಲೇಶಪುರದಲ್ಲಿರುವ ಒಂದು
              ಸುಂದರವಾದ ಬೆಟ್ಟವಾಗಿದ್ದು, ಸಮುದ್ರ ಮಟ್ಟದಿಂದ 3500 ಅಡಿ ಎತ್ತರದಲ್ಲಿದೆ. ಇದು
              ಸುತ್ತಮುತ್ತಲಿನ ಪರ್ವತಗಳು ಮತ್ತು ಕಣಿವೆಗಳ ವಿಹಂಗಮ ನೋಟವನ್ನು ನೀಡುತ್ತದೆ,
              ಚಾರಣಕ್ಕೆ ಸೂಕ್ತವಾಗಿದೆ. ಇದು ಕುಲ್ಕುಂದದಿಂದ 29 ಕಿ.ಮೀ ದೂರದಲ್ಲಿದೆ.
            </p>
          </div>
          {/* Place 14 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              14. ಮಲ್ಲಳ್ಳಿ ಜಲಪಾತ: ಕರ್ನಾಟಕದ ಕೊಡಗಿನ ಸೋಮವಾರಪೇಟೆ ಬಳಿ ಇರುವ ಮಲ್ಲಳ್ಳಿ
              ಜಲಪಾತವು ಕುಮಾರಧಾರ ನದಿಯಿಂದ ರೂಪುಗೊಂಡ ಸುಮಾರು 200 ಅಡಿ ಎತ್ತರದ ಭವ್ಯವಾದ
              ಜಲಪಾತವಾಗಿದೆ. ಮಾನ್ಸೂನ್ ಅವಧಿಯಲ್ಲಿ ಭೇಟಿ ನೀಡುವ ಅತ್ಯುತ್ತಮವಾದ, ಈ ಜಲಪಾತವು
              ಹಚ್ಚ ಹಸಿರಿನ ನಡುವೆ ಸುಂದರವಾದ ವಾತಾವರಣವನ್ನು ನೀಡುತ್ತದೆ, ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ
              ಸುತ್ತಮುತ್ತಲಿನ ಭೂದೃಶ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸುವ ಪ್ರಕೃತಿ ಉತ್ಸಾಹಿಗಳನ್ನು ಮತ್ತು
              ಚಾರಣಿಗರನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ. ಇದು ಕುಲ್ಕುಂದದಿಂದ ಸರಿಸುಮಾರು 46 ಕಿಮೀ
              ದೂರದಲ್ಲಿದೆ.
            </p>
          </div>
          {/* Place 15 */}
          <div className="flex flex-col w-full md:h-auto rounded-3xl p-2">
            <p className="text-sm md:text-base lg:text-lg text-justify">
              15. ಕುಮಾರ ಪರ್ವತ ಟ್ರೆಕ್: ಸಾಹಸ ಉತ್ಸಾಹಿಗಳಿಗೆ, ಕುಮಾರ ಪರ್ವತ ಚಾರಣವು
              ಪ್ರಯತ್ನಿಸಲೇಬೇಕಾದ ಅನುಭವವಾಗಿದೆ. ಪುಷ್ಪಗಿರಿ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಇದು ಪಶ್ಚಿಮ
              ಘಟ್ಟಗಳಲ್ಲಿನ ನಾಲ್ಕನೇ ಅತಿ ಎತ್ತರದ ಶಿಖರವಾಗಿದೆ ಮತ್ತು ಸವಾಲಿನ ಚಾರಣ ಎಂದು
              ಖ್ಯಾತಿ ಪಡೆದಿದೆ.ಚಾರಣವು ದಟ್ಟವಾದ ಕಾಡುಗಳು, ಹುಲ್ಲುಗಾವಲುಗಳು ಮತ್ತು ಕಲ್ಲಿನ
              ಭೂಪ್ರದೇಶಗಳ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಕರೆದೊಯ್ಯುತ್ತದೆ, ಸುತ್ತಮುತ್ತಲಿನ ಭೂದೃಶ್ಯಗಳ
              ಉಸಿರು ನೋಟಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಮೂಲ ಶಿಬಿರವು ಕುಕ್ಕೆ
              ಸುಬ್ರಹ್ಮಣ್ಯದಲ್ಲಿದೆ, ಇದು ಕುಲ್ಕುಂದ ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ ಕೇವಲ 5
              ಕಿಮೀ ದೂರದಲ್ಲಿ ರೋಮಾಂಚಕ ಸಾಹಸವಾಗಿದೆ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlacesToVisit;
