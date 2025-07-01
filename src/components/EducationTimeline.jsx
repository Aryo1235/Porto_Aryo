import React from "react";

const educationData = [
  {
    year: "2010 - 2016",
    school: "SD Negeri 1 Kota",
  },
  {
    year: "2016 - 2019",
    school: "SMP Negeri 2 Kota",
  },
  {
    year: "2019 - 2022",
    school: "SMA Negeri 3 Kota",
  },
  {
    year: "2022 - Sekarang",
    school: "Universitas XYZ (Teknik Informatika)",
  },
];

const EducationTimeline = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Timeline Pendidikan
      </h2>

      <div className="relative border-l-2 border-sky-400 pl-6 space-y-10">
        {educationData.map((item, index) => (
          <div key={index} className="relative group">
            {/* Titik timeline */}
            <div className="absolute w-3 h-3 bg-sky-500 rounded-full left-[-9px] top-4 border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300"></div>

            {/* Card responsif */}
            <div className="ml-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 max-w-md md:w-[450px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">
                {item.year}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">
                {item.school}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
