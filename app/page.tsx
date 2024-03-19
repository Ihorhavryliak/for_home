import Footer from "@/components/Footer/Footer";
import SectionAboutBusiness from "@/components/Section/SectionAboutBusiness/SectionSectionAboutBusiness";
import SectionCard from "@/components/Section/SectionCard/SectionCard";
import SectionContact from "@/components/Section/SectionContact/SectionContact";
import SectionInform from "@/components/Section/SectionInform/SectionInform";
import SectionNumber from "@/components/Section/SectionNumber/SectionNumber";


const Home = () => {
  return (
    <main className="">
      <SectionInform />
      <div className="-mt-328 -mb-468 h-708 hidden">
        <div className="position-relative -top-131">
          <SectionNumber description="Branding, Interactive" number="01" textTitle="Reykjavik Fashion Festival —" />
        </div>
      </div>

      <SectionAboutBusiness />

      <div className="-mt-398 -mb-268 h-708  hidden">
        <div className="position-relative -top-131">
          <SectionNumber
            description="User Experience, User Interface"
            number="02"
            textTitle="B&O Plan —"
            isReverse={true}
          />
        </div>
      </div>

      <SectionCard />

      <div className="-mt-329 -mb-415">
        <div className="position-relative">
          <SectionNumber description="Brand Strategy, Visual Identity" number="03" textTitle="Girls Globe —" />
        </div>
      </div>

      <SectionContact />
      <Footer />
    </main>
  );
};
export default Home;
