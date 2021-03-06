import uvpImg from "../images/uvp.webp";
import ampdImg from "../images/ampd.webp";
import mapsImg from "../images/maps.webp";
import iytpImg from "../images/iytp.webp";

const ampd = {
  title: "Academic Mentorship Professional Development - UCLA",
  position: "Mentorship Director",
  year: "2019 - 2020",
  link: "https://instagram.com/ampducla?utm_medium=copy_link",
  image: ampdImg,
  altText: "AMPD UCLA student organizaton logo",
  description: `Guided 80+ first year students to acclimate to college life by creating opportunities for them to network, 
  organizing career workshops, planning course schedules and pairing them up with upperclassmen to receive constant mentorship.`,
};

const maps = {
  title: "Mentors for Academic and Peer Support - UCLA",
  position: "Math and Science Academic Coordinator",
  year: "2017 - 2019",
  link: "https://www.facebook.com/MentorsforAcademicandPeerSupport/",
  image: mapsImg,
  altText: "MAPS UCLA student organizaton logo",
  description: `Planned weekly math and science curriculum as additional material to complement 50+ middle and high school students’
    classwork in South LA underserved communities. Worked with other volunteers to address student retention and improve
    afterschool programs.`,
};

const uvp = {
  title: "UMMA Volunteer Project - UCLA",
  position: "Science and Health Coordinator",
  year: "2019 - 2020",
  link: "https://ummavp.weebly.com/",
  image: uvpImg,
  altText: "UVP UCLA student organizaton logo",
  description: `Conducted weekly site visits to underserved schools in South LA to teach about health, physical well-being and general 
  science during afterschool programs. Coordinated health fairs, career workshops, and networking conferences.`,
};

const iytp = {
  title: "Incarcerated Youth Tutorial Project - UCLA",
  position: "Math Tutor",
  year: "2017 - 2019",
  link: "https://iytp.weebly.com/",
  image: iytpImg,
  altText: "IYTP UCLA student organizaton logo",
  description: `Provided free Math tutoring services to students at continuation schools in Inglewood, LA. Served 15+ students during 
    weekly site visits. Subjects ranged from Algebra 1 to Pre-Calculus.`,
};

const volunteerExp = [ampd, maps, uvp, iytp];

export default volunteerExp;
