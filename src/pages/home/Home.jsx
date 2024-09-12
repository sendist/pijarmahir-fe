import CategoryCard from "../../components/common/cards/CategoryCard";
import CourseCard from "../../components/common/cards/CourseCard";
import PartnerCard from "../../components/common/cards/PartnerCard";
import PurchaseCourseCard from "../../components/common/cards/PurchaseCourseCard";

const Home = () => {
  return (
    <main className="p-20 space-y-10 pt-44">
      <section className="flex justify-center space-x-6">
        <CategoryCard
          imageUrl="https://picsum.photos/389/240"
          name="Mahir Teknologi"
        />
        <CategoryCard
          imageUrl="https://picsum.photos/390/240"
          name="Mahir Marketing"
        />
        <CategoryCard
          imageUrl="https://picsum.photos/388/240"
          name="Mahir Digital"
        />
      </section >

      <section className="flex flex-wrap space-x-4">
        <CourseCard
          imageUrl="https://picsum.photos/268/189"
          title="Nama Kursus Pijar Apa Saja Terserah"
          subtitle="MyEduSolve"
          rating={3.1}
          price="2.555.000"
        />

        <CourseCard
          imageUrl="https://picsum.photos/269/189"
          title="Nama Kursus Pijar Apa Saja Terserah"
          subtitle="MyEduSolve"
          rating={3.1}
          price="0"
        />

        <PartnerCard
          imageUrl="https://picsum.photos/268/151"
          orgName="MyEduSolve"
          courseCount={10}
        />

        <PurchaseCourseCard
          courseId= "1"
          imageUrl="https://picsum.photos/356/251"
          price="2.555.000"
        />
      </section>
    </main>
  );
};

export default Home;
