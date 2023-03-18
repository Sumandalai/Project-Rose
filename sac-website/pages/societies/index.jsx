import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clubData from "../../data/data.js";
import Head from "next/head.js";

export const socData = [
  {
    name: "Technical Society",
    image:
      "https://ik.imagekit.io/tvfucug8t/315944295_683489136672980_8046188745263207622_n_1.png?updatedAt=1678715474291",
    description:
      "Technical Society is one of the most active societies in Student Activity Centre, NIT Rourkela with eighteen Satellite Clubs under its auspices. The aim of this society is to promote and encourage technical innova-tion and entrepreneurship among students by organizing modeling-workshops, Technical Seminars, Train-ing Courses etc.",
    aboutImg:
      "https://res.cloudinary.com/webwiznitr/image/upload/v1679092346/inno/315722437_683465106675383_1328129438635095592_n_piyuw8.jpg",
  },
  {
    name: "Film and Music Society",
    image: "https://ik.imagekit.io/tvfucug8t/fms_3.png?updatedAt=1678715231100",
    description:
      "The Film and Music Society conducts music competitions and organizes the Celebrity NITE every year wherein great musicians give enthralling performances. A number of films from India and abroad as well as a week long film festival are its other activities.",
    aboutImg:
      "https://res.cloudinary.com/webwiznitr/image/upload/v1679094509/cosmo/82071287_2725884917490169_4660738552152195072_n_mgpjk6.jpg",
  },
  {
    name: "Literary and Cultural Society",
    image:
      "https://ik.imagekit.io/tvfucug8t/299931819_5474832855928681_3837718550837062886_n_2.png?updatedAt=1678715222688",
    description:
      "The Literary and Cultural society looks after literary, drama and cultural activities. It arranges debates, quiz and a variety of other competitions both inter-NIT and intra NIT. It also organizes the NITRUTSAV every spring in the month of February.",
    aboutImg:
      "https://res.cloudinary.com/webwiznitr/image/upload/v1679098999/NU/51078333_2094823220596345_7666022044990963712_n_dmnbml.jpg",
  },
  {
    name: "Games and Sports Society",
    image:
      "https://ik.imagekit.io/tvfucug8t/313401932_672173041137923_522549174449123500_n_1.png?updatedAt=1678715228859",
    description:
      "The Games and Sports provides ample oppotunities to develop physical health, positive personality, ethical, moral and social values by encouraging mass participation through various sports activities to all students admitted in the Institute.",
    aboutImg:
      "https://res.cloudinary.com/webwiznitr/image/upload/v1679091165/vriddhi/313424111_672175257804368_7881532493826153972_n_wccdhs.jpg",
  },
];

export default function societies() {
  const router = useRouter();
  const { socID } = router.query;

  // console.log(clubData);

  return (
    <>
      <Head>
        <title>Societies, NIT Rourkela</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* *********** Meta SEO***********  */}
        <meta
          property="og:title"
          content="SAC NITR,Explore the plethora of thrilling events, exciting
              fests, diverse clubs and other activities in the
            beautiful campus of NIT Rourkela."
        />
        <meta
          name="keywords"
          content="sacnitr,sacnitrkl,sacnitrourkela, sac, club nitr, club, clubnitr, clubnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,societies nitrkl,societiesnitrkl"
        />
        <meta
          name="description"
          content="Official Website of SAC NIT Rourkela"
        />
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sacnitr.com/" />
        <meta
          property="og:image"
          content="https://www.vriddhinitr.com/_next/static/media/logoBranding.00987fe3.png"
        />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" />{" "}
        <meta name="description" content="sac 2021" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="h-screen w-screen flex flex-col lg:flex-row max-[1060px]:mt-[9.8vh]  ">
        <div className="absolute h-full w-screen z-999 bg-black/70"></div>

        {/* For Desktop */}
        {socData.map((soc, index) => (
          <div
            className="w-[25%] max-[1060px]:hidden hover:shadow-lg transition duration-600 ease-in-out hover:scale-110"
            key={index}
          >
            <Link href={`/societies/${soc.name}`}>
              <h1 className="absolute h-[100%] w-[25vw]  p-[1rem] top-[40%] text-[3vw]  text-vertical z-100 text-white text-center   ">
                {soc.name}
              </h1>
            </Link>
            <img
              src={soc.image}
              className="h-[100%] w-[100%] object-cover -z-10 "
            />
          </div>
        ))}

        {/* For Mobile  */}
        {socData.map((soc, index) => (
          <div
            className="w-[100%] h-[25%]  min-[1059px]:hidden h:shadow-lg transition duration-600 ease-in-out hover:scale-110 "
            key={index}
          >
            <Link href={`/societies/${soc.name}`}>
              <h1 className="absolute h-[25vh] w-[100%]  p-[1rem] py-[10vh]  text-[3vw]  text-vertical z-100 text-white text-center h:text-underline ">
                {soc.name}
              </h1>
            </Link>
            <img
              src={soc.image}
              className="h-[100%] w-[100%] object-cover -z-10 "
            />
          </div>
        ))}
      </div>
    </>
  );
}
