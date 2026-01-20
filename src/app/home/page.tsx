import {
  WelcomeSection,
  WhyChooseSection,
  ExclusiveModelsSection,
  StrategicSolutionsSection,
  TransformYourBrandSection,
  ReviewsSection,
  DeliveryTimeSection,
  BudgetSection,
  FAQSection,
} from "./sections";

const Home = () => {
  const aosParams = {
    "data-aos": "fade-up",
    "data-aos-delay": "200",
    "data-aos-duration": "250",
    "data-aos-easing": "ease-out-cubic",
    "data-aos-anchor-placement": "top-bottom",
  };

  return (
    <div className="space-y-16 bg-(--secondary-color) pb-14 sm:space-y-18">
      {/* Welcome */}
      <WelcomeSection />

      {/* Por que escolher a Bonetto? */}
      <WhyChooseSection aosParams={aosParams} />

      {/* Modelos exclusivos */}
      <ExclusiveModelsSection aosParams={aosParams} />

      {/* Soluções estratégicas */}
      <StrategicSolutionsSection aosParams={aosParams} />

      {/* Transforme a sua marca */}
      <TransformYourBrandSection aosParams={aosParams} />

      {/* Avaliações */}
      <ReviewsSection aosParams={aosParams} />

      {/* Prazos e tarifas */}
      <DeliveryTimeSection aosParams={aosParams} />

      {/* Formulário de orçamento */}
      <BudgetSection aosParams={aosParams} />

      {/* FAQ */}
      <FAQSection aosParams={aosParams} />
    </div>
  );
};

export default Home;
