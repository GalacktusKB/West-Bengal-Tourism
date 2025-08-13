import React from "react";

const photos = [
  { 
    id: 1, 
    name: "Alipurduar_Buxa_Fort.jpg", 
    src: "https://seawatersports.com/images/places/buxa-fort.png", 
  },
  { 
    id: 2, 
    name: "Alipurduar_Jayanti_Hills.jpg", 
    src: "https://dooars.info/wp-content/uploads/2019/01/Jayanti-header.jpg", 
  },
  { 
    id: 3, 
    name: "Buxa Tiger Reserve.jpg", 
    src: "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https:/apis.t2online.in/image/journal/article.jpg?img_id=1060553&t=1722197047482 ", 
  },
  { 
    id: 4, 
    name: "Sikiajhora.jpg", 
    src: "https://thumbs.dreamstime.com/b/green-jungle-reflects-water-amazon-north-bengal-sikiajhora-reflection-green-224724858.jpg", 
  },
  { 
    id: 5, 
    name: "Raimatang.jpg", 
    src: "https://northbengaltourism.com/images/offbeat/raimatang_1.webp",
  },
  { 
    id: 6, 
    name: "Bishnupur Terracotta Temples.jpg",
    src: "https://tourly.in/wp-content/uploads/classified-listing/2024/07/Bishnupur.jpg",
  },
  { 
    id: 7, 
    name: "Susunia Hill.jpg",
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK5UZ_o-ieZxpolWEPcf0SVRoMKgLQOzpBOT__EZT7vLDypAu913m5lKvFynoiBt6w1fYexa7bS7VbYG3wFFREYuxLvX6Mt0hHT22S21UsUPN_sf7CQlcT1YqW4Quq0qaAfOhVjxnqVp8/w1200-h630-p-k-no-nu/SUSUNIA+HILL.jpg",
  },
  { 
    id: 8, 
    name: "Joyrambati.jpg",
    src: "https://rkmjoyrambati.org/photos/joyrambati-banner.jpg",
  },
  { 
    id: 9, 
    name: "Mukutmanipur Dam.jpg", 
    src: "https://cdn.s3waas.gov.in/s38e82ab7243b7c66d768f1b8ce1c967eb/uploads/bfi_thumb/2020070314-scaled-orx5bgm8zu48dlb9dr9q968kke0uf1sqplg615w7ey.jpg",
  },
  { 
    id: 10, 
    name: "Jhilimili.jpg", 
    src: "https://i0.wp.com/bankuratourism.com/wp-content/uploads/2023/07/RimilLodge.jpg?fit=800%2C533&ssl=1",
  },
  {
    id: 11, 
    name: "Tarapith.jpg", 
    src: "https://thumbs.dreamstime.com/b/tarapith-temple-ancient-temple-which-considered-exceptionally-auspicious-place-hindus-situated-banks-325401370.jpg", 
  },
  {
    id: 12, 
    name: "Bakreshwar Hot Springs.jpg", 
    src: "https://tripxl.com/blog/wp-content/uploads/2024/12/Bakreshwar-Hot-Spring-cp.jpg", 
  },
  {
    id: 13, 
    name: "Shantiniketan.jpg", 
    src: "https://www.santiniketan.com/wp-content/uploads/Chhatim-Tala---Tourist-spots-at-Santiniketan-1920x1440.jpg", 
  },
  {
    id: 14, 
    name: "Kankalitala.jpg", 
    src: "https://ta.ixigo.es/google-photo/ATplDJZj3TtmEo3QlFXwi6U1yJb_2dL6k2bFdZfcMIZn5bpcM_jlZ9tuM-mdZWdJ2cixb6P8WKo0s9WBAlO-2HW_HTgedyUicynkVqRe-9Zjj2gRcklKLAXAcheguR805DAgQcafVHAQTGKvpLi-C8Th9p98-dWgC4_WzNHsVm5d-rZmvnP3", 
  },
  {
    id: 15, 
    name: "Labhpur.jpg", 
    src: "https://i0.wp.com/traveldreams.live/wp-content/uploads/2022/11/1.jpg?resize=864%2C486&ssl=1", 
  },
  {
    id: 16, 
    name: "Cooch Behar Palace.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cooch_Behar_Palace_-_Cooch_Behar_-_West_Bengal_-_006.jpg/2560px-Cooch_Behar_Palace_-_Cooch_Behar_-_West_Bengal_-_006.jpg", 
  },
  {
    id: 17, 
    name: "Sagar Dighi.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Sagar_Dighi%2C_Coochbehar.jpg", 
  },
  {
    id: 18, 
    name: "Madan Mohan Bari.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Madan_Mohan_Mandir%2C_Cooch_Behar%2C_West_Bengal%2C_India_-_20100516.jpg", 
  },
  {
    id: 19, 
    name: "Rasikbil.jpg", 
    src: "https://static.toiimg.com/photo/48188977/.jpg", 
  },
  {
    id: 20, 
    name: "Baneswar Shiva Temple.jpg", 
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/2b/8b/20/baneswar-siva-temple.jpg?w=900&h=500&s=1", 
  },
  {
    id: 21, 
    name: "Bangarh.jpg", 
    src: "https://images.unsplash.com/photo-1572944930438-50d50a3963e6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmhhbmdhcmglMjBmb3J0JTJDJTIwYmhhbmdhcmglMkMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D", 
  },
  {
    id: 22, 
    name: "Khanpur Rajbari.jpg", 
    src: "https://file-rangpur.portal.gov.bd/files/dinajpursadar.dinajpur.gov.bd/tourist_spot/1fae95c6_18ff_11e7_9461_286ed488c766/rajbari1.jpg", 
  },
  {
    id: 23, 
    name: "Gokul Medh.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gokul_Medh_06.jpg/1280px-Gokul_Medh_06.jpg", 
  },
  {
    id: 24, 
    name: "Tapan Dighi.jpg", 
    src: "https://vushii.com/uploads/1138832578_Tapan%20Dighi,%20Dakshin%20Dinajpur%20(South%20Dinajpur)4.jpg", 
  },
  {
    id: 25, 
    name: "Bolla Kali Temple.jpg", 
    src: "https://temple.yatradham.org/public/Product/temple/temple_fPSil6S8_202408151243490.jpg", 
  },
  {
    id: 26, 
    name: "Tiger Hill.jpg", 
    src: "https://jellybeanholidays.com/public/uploads/trips/irNZ3W5S7nEV4FpIJ4i7qT1EaTx9Yf-174712-tiger-hil.jpg", 
  },
  {
    id: 27, 
    name: "Batasia Loop.jpg", 
    src: "https://darjeelingkalimpongtourism.com/wp-content/uploads/2021/05/Darjeeling-toy-train-in-Batasia-loop.jpg", 
  },
  {
    id: 28, 
    name: "Himalayan Mountaineering Institute.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Himalayan_Mountaineering_Institute_campus_in_Darjeeling_23.jpg", 
  },
  {
    id: 29, 
    name: "Peace Pagoda.jpg", 
    src: "https://www.trawell.in/admin/images/upload/729541590Darjeeling_Peace_Pagoda_Main.jpg", 
  },
  {
    id: 30, 
    name: "Darjeeling Zoo.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Padmaja_Naidu_Himalayan_Zoological_Park_known_as_Darjeeling_Zoo_02.jpg", 
  },
  {
    id: 31, 
    name: "Imambara.jpg", 
    src: "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2024/01/cover3.jpg", 
  },
  {
    id: 32, 
    name: "Bandel Church.jpg", 
    src: "https://kolkatatourism.travel/images/places-to-visit/headers/bandel-church-kolkata-timings-entry-fee-kolkata-tourism-header-cr-vivadaimages.jpg", 
  },
  {
    id: 33, 
    name: "Hanseswari Temple.jpg", 
    src: "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2023/10/ksp_9619-recovered10x8.jpg", 
  },
  {
    id: 34, 
    name: "Chandannagar Strand.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/4/41/The_Chandannagar_Strand_Ghat.jpg", 
  },
  {
    id: 35, 
    name: "Tarakeswar Temple.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Babataraknathtemple.jpg/1200px-Babataraknathtemple.jpg", 
  },
  {
    id: 36, 
    name: "Garchumuk.jpg", 
    src: "https://digantatravel.com/wp-content/uploads/2020/02/Garchumuk-Howrah.jpg", 
  },
  {
    id: 37, 
    name: "Santragachi Jheel.jpg", 
    src: "https://live.staticflickr.com/8088/8565846540_0b2e385de3_b.jpg", 
  },
  {
    id: 38, 
    name: "Belur Math.jpg", 
    src: "https://live.staticflickr.com/65535/50742811117_237caa42fb_h.jpg", 
  },
  {
    id: 39, 
    name: "Howrah Bridge.jpg", 
    src: "https://www.adotrip.com/public/images/areas/master_images/60fea45055e09-Howran_bridge_in_west_bengal.jpg", 
  },
  {
    id: 40, 
    name: "Botanical Garden.jpg", 
    src: "https://avathioutdoors.gumlet.io/travelGuide/dev/howrah_P4142.jpg", 
  },
  {
    id: 41, 
    name: "Gorumara National Park.jpg", 
    src: "https://mediaim.expedia.com/destination/2/1e1ad42d27ab38bacc056d6a87e195ea.jpg", 
  },
  {
    id: 42, 
    name: "Chapramari Wildlife Sanctuary.jpg", 
    src: "https://www.trawell.in/admin/images/upload/646902855Darjeeling_Chapramari_Wildlife_Sanctuary_Main.jpg", 
  },
  {
    id: 43, 
    name: "Bodaganj Forest.jpg", 
    src: "https://content.jdmagicbox.com/comp/def_content/forests/ee3a6bcfa2-forests-5-gm7sq.jpg", 
  },
  {
    id: 44, 
    name: "Buxa Road.jpg", 
    src: "https://sonuinhills.travel.blog/wp-content/uploads/2020/04/20200319_201105.jpg?w=1024", 
  },
  {
    id: 45, 
    name: "Jalpesh Temple.jpg", 
    src: "https://thumbs.dreamstime.com/b/jalpesh-mandir-famous-temple-north-bengal-located-near-jalpaiguri-town-year-old-lord-shiva-was-founded-sri-bisu-325401313.jpg", 
  },
  {
    id: 46, 
    name: "Jhargram Palace.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Jhargram_Palace-Jhargram%2CMedinipur-West_Bengal_721507-DSC_0013_04.jpg", 
  },
  {
    id: 47, 
    name: "Kendua.jpg", 
    src: "https://i0.wp.com/www.vibrantfootsteps.com/wp-content/uploads/2022/04/The-road-in-front-of-the-Zoo-bordered-by-Sal-trees-on-both-sides-scaled.jpg?resize=1200%2C710&ssl=1", 
  },
  {
    id: 48, 
    name: "Chilkigarh Raj Palace.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Chilkigarh_Raj_Palace%2C_Jhargram%2C_West_Bengal_02.jpg/1200px-Chilkigarh_Raj_Palace%2C_Jhargram%2C_West_Bengal_02.jpg?20200920111739", 
  },
  {
    id: 49, 
    name: "Kanak Durga Temple.jpg", 
    src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Chilkigarh_Kanak_Durga_Temple.jpg", 
  },
  {
    id: 50, 
    name: "Belpahari.jpg", 
    src: "https://kankrajhor.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-20-at-1.06.25-PM.jpeg", 
  },
  {
    id: 51, 
    name: "Deolo Hill.jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 52, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 53, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 54, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 55, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 56, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 57, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 58, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 59, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 60, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 61, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 62, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 63, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 64, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 65, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 66, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 67, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 68, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 69, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 70, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 71, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },
  {
    id: 72, 
    name: ".jpg", 
    src: "https://www.wbtourism.gov.in/wbtourism/assets/images/places/gajoldoba.jpg", 
  },

];


export default function Gallery({ items = photos, cols = 5, showCaptions = true }) {
  console.log("Rendering Gallery with:", { items, cols, showCaptions });

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", padding: "20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: "16px"
        }}
      >
        {items.map((photo, index) => {
          console.log(`Rendering photo ${index + 1}:`, photo);
          return (
            <figure key={photo.id} style={{ margin: 0 }}>
              <img
                src={photo.src}
                alt={photo.name}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease"
                }}
                onMouseOver={(e) => {
                  console.log(`Hovering over photo id ${photo.id}`);
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                  console.log(`Mouse left photo id ${photo.id}`);
                  e.currentTarget.style.transform = "scale(1)";
                }}
                loading="lazy"
              />
              {showCaptions && (
                <figcaption style={{ marginTop: "8px", fontSize: "1rem", color: "#000000" }}>
                  {photo.name}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </div>
  );
}