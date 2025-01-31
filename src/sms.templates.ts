export const SmsAdapterTypeToken = 'SmaAdapterTypeToken';
export enum SmsAdapterType {
  UCI = 'UCI',
  CDAC = 'CDAC',
}
export const holidayTemplate = (
  name: string,
  start_date: string,
  end_date: string,
  reopen_date: string,
): string =>
  `प्रिय अभिभावक!स्कूल की छुट्टियां ${start_date} से ${end_date} तक हैं। कृपया ${name} को ${reopen_date} से रोज़ स्कूल भेजना सुनिश्चित करें। समग्र शिक्षा, हिमाचल प्रदेश`;
export const meetingTemplate = (meetingDate: string, meeting: string): string =>
  `प्रिय अभिभावक! कृपया ${meetingDate} को होने वाली ${meeting} में अपनी भागीदारी सुनिश्चित करें और अपने पुत्र/पुत्री की पढ़ाई से संबंधित विभिन्न विषयों पर विस्तृत चर्चा करें। समग्र शिक्षा, हिमाचल प्रदेश`;
export const examAnnouncementTemplate = (
  assessment: string,
  start_date: string,
  end_date: string,
  name: string,
): string =>
  `प्रिय अभिभावक!${assessment} का आकलन ${start_date} से ${end_date} तक होना है।कृपया सुनिश्चित करें कि ${name} अभी से ही इसकी तैयारी शुरू करें। समग्र शिक्षा, हिमाचल प्रदेश`;
export const examResultAnnouncementTemplate = (
  assessment: string,
  result_date: string,
  name: string,
): string =>
  `प्रिय अभिभावक!${name} के ${assessment} आकलन का परिणाम ${result_date} को घोषित किया जाएगा। कृपया इस दिन स्कूल में अपनी उपस्थिति सुनिश्चित करें और शिक्षकों से मिलकर परिणाम पर विस्तृत चर्चा करें ताकि  भविष्य में ${name} की शिक्षण अधिगम में सुधार हो सके। समग्र शिक्षा, हिमाचल प्रदेश`;
export const announcementTemplate = (
  event_date: string,
  event: string,
): string =>
  `प्रिय अभिभावक!कृपया आपके पुत्र/पुत्री के विद्यालय में ${event_date} को होने वाली ${event} में अपनी भागीदारी सुनिश्चित करें। समग्र शिक्षा, हिमाचल प्रदेश`;
export const homeworkTemplate = (name: string, subject: string): string =>
  `प्रिय अभिभावक!${name} ने इस सप्ताह ${subject} का गृहकार्य पूरा नहीं किया है। कृपया उसकी नोटबुक चेक करें और नियमित रूप से गृहकार्य करने में उस का सहयोग करें।समग्र शिक्षा, हिमाचल प्रदेश`;
