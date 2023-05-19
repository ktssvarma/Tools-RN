import { Home } from "../screens/Home";
import { WhatsAppTools } from "../screens/WhatsApp";

const screens = [
  {
    component: Home,
    name: 'Home',
    headerShown:true,
    title:"Home",
  },
  {
    component: WhatsAppTools,
    name: 'WhatsAppScreen',
    headerShown:false,
    title:"WhatsApp Tools",
  },
];
export {screens}
