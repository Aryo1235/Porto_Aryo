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
    school: "Universitas Bina Sarana Informatika (Teknik Teknologi Informasi)",
  },
];

const EducationTimeline = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Timeline Pendidikan
      </h2>

      <div className="relative border-l-[3px] border-sky-400 pl-6 space-y-12">
        {educationData.map((item, index) => (
          <div key={index} className="relative group">
            {/* Titik timeline */}
            <div className="absolute w-4 h-4 bg-sky-500 rounded-full left-[-10px] top-4 border-4 border-white shadow-md group-hover:scale-110 transition-transform"></div>

            {/* Card */}
            <div className="ml-5 bg-white shadow-xl rounded-2xl p-5 w-96 transition hover:-translate-y-1 hover:shadow-2xl duration-300">
              <p className="text-sm text-gray-500 font-medium">{item.year}</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">
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
