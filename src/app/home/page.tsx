import {
  WelcomeSection,
  WhyChooseSection,
  ExclusiveModelsSection,
  StrategicSolutionsSection,
  FrontApplicationsSection,
  SideApplicationsSection,
  CustomizeSection,
  ReviewsSection,
  DeadlinesSection,
  FAQSection,
} from "./sections/sections";

const Home = () => {
  const aosParams = {
    "data-aos": "fade-up",
    "data-aos-delay": "300",
    "data-aos-duration": "250",
    "data-aos-easing": "ease-out",
    "data-aos-anchor-placement": "top-bottom",
  };

  return (
    <div className="space-y-16 bg-[var(--secondary-color)] pb-14 sm:space-y-18">
      {/* Welcome */}
      <WelcomeSection />

      {/* Por que escolher a Bonetto? */}
      <WhyChooseSection aosParams={aosParams} />

      {/* Modelos exclusivos */}
      <ExclusiveModelsSection aosParams={aosParams} />

      {/* Soluções estratégicas */}
      <StrategicSolutionsSection aosParams={aosParams} />

      {/* Aplicação frontal */}
      <FrontApplicationsSection aosParams={aosParams} />

      {/* Aplicação Lateral */}
      <SideApplicationsSection aosParams={aosParams} />

      {/* Customize e surpreenda */}
      <CustomizeSection aosParams={aosParams} />

      {/* Avaliações */}
      <ReviewsSection aosParams={aosParams} />

      {/* Prazos e tarifas */}
      <DeadlinesSection aosParams={aosParams} />

      {/* FAQ */}
      <FAQSection aosParams={aosParams} />
    </div>
  );
};

export default Home;
