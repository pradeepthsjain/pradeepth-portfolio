import fish from "../assets/images/phishing.jpg";
import sendfrom from "../assets/images/sendform.jpg";
import semicolon from "../assets/images/semicolon.jpg";
import scroll from "../assets/images/portfolio.png";
import room from "../assets/images/room.jpg";
import web from "../assets/images/web.jpg";
import covid from "../assets/images/covid.jpg";
import crop from "../assets/images/crop.jpg";
import date from "../assets/images/date.jpg";
import heart from "../assets/images/heartattack.jpg";
import commerce from"../assets/images/ecommerce.png";
export const projects = [
  {
    title: "DApp Donate",
    image: sendfrom,
    github: "https://github.com/pradeepth02/Dapp-donate",
    link:"https://pradeepth-dapp-donate.netlify.app/",
    description:
      "A Decentralized application used to donate using Etherium.",
  },
  {
    title: "E-Commerce Store",
    description:
      "A E-Commerce website with Stripe integrated payments.",
      image:commerce,
      github: "https://github.com/pradeepth02/Storefrontend",
    link: "https://storefrontend-six.vercel.app/",
  },
  {
    title: "Blood Bank",
    image: semicolon,
    github: "https://github.com/pradeepth02/bloodmanagement",
    description:
      "Helps to maintain blood in hospitals in more modern and transparent way.",
  },
  {
    title: "Phishing URL Detection using AI",
    image: fish,
    github: "https://github.com/pradeepth02/Phishing-url-detection",
    description:
      "Helps to identify if the pasted link is genuine or not using AI & ML.",
  },
  {
    title: "Disease Prediction using AI",
    image: covid,
    github: "https://github.com/pradeepth02/Disease-Prediction",
    description:
      "Predicts what your suffering from based on symptoms using AI & ML.",
  },
  {
    title: "Heart-Attack Prediction using AI",
    description:
      "Helps to predict Heart-Attack based on symptoms using AI & ML.",
      image:heart,
    github: "https://github.com/pradeepth02/Heartdisease",
  },
  {
    title: "Crop suggestion using AI",
    description:
      "Helps the farmer to select the right crop using AI & ML.",
      image:crop,
    github: "https://github.com/pradeepth02/Crop-Optimization",
  },
  {
    title: "Old Portfolio",
    description: "My old portfolio.",
    image: scroll,
    link: "https://pradeepth-portfolio.netlify.app/",
    github: "https://github.com/pradeepth02/Portfolio",
  },
  
];
