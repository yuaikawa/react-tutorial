import Rakuten from "../lib/Rakuten";

const APP_ID = "";

export const searchByLocation = location => {
  const params = {
    applicationId: APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng
  };
  return Rakuten.Travel.simpleHotelSearch(params).then(result => 
     result.data.hotels.map(hotel => {
      const basicInfo = hotel.hotel[0].hotelBasicInfo;
      console.log(basicInfo);
      return {
        id: basicInfo.hotelNo,
        name: basicInfo.hotelName,
        url: basicInfo.hotelInformationUrl
      };
    }),
  );
};
