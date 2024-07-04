const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-black-dark xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-black-light text-[18px] leading-[30.8px]",

  flexCenter: 'flex justify-center items-center',
  flexStart: "flex justify-start items-start",
  flexColumn: "flex flex-col justify-center items-center",

  paddingX: "px-6",
  paddingY: "sm:py-16 py-6",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  navbarHeight: "h-16 sm:h-20",
  section: "flex md:flex-row flex-col py-12",
  sectionReverse: "flex md:flex-row flex-col-reverse py-12",

  sectionImgReverse: "flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative",
  sectionImg: "flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative",

  sectionInfo: "flex-1 flex justify-start items-start flex-col",

  // New color classes for different shades of black
  'text-black-light': 'text-[#333]',
  'text-black-dark': 'text-[#000]',
  'text-black-medium': 'text-[#666]',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export default styles;
