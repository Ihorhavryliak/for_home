type SectionNumberType = {
  number: string;
  textTitle: string;
  description: string;
  isReverse?: boolean;
};

const SectionNumber = ({ number, textTitle, description, isReverse }: SectionNumberType) => {
  return (
    <section
      className={`px-16 position-relative d-flex align-items-center gap-47 justify-content-center w-100 ${
        isReverse ? "flex-sm-row-reverse" : ""
      }`}
    >
      <div className="text-600 fw-semibold text-white position-relative t-28 z-index-1">{number}</div>
      <div className="-mt-167 h-242 pt-92">
        <div className="color-green-100 text-36 fw-medium">{textTitle}</div>
        <div className="color-gray-100">{description}</div>
      </div>
    </section>
  );
};

export default SectionNumber;
