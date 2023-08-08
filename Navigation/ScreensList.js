import { Home } from "../screens/Home";
import { ScoreRecorder } from "../screens/ScoreRecorder";
import { WhatsAppTools } from "../screens/WhatsApp";

const screens = [
  {
    component: Home,
    name: 'Home',
    headerShown: true,
    title: 'Home',
  },
  {
    component: WhatsAppTools,
    name: 'WhatsAppScreen',
    headerShown: false,
    title: 'WhatsApp Tools',
  },
  {
    component: ScoreRecorder,
    name: 'ScoreRecorderScreen',
    headerShown: false,
    title: 'Score',
  },
];
export {screens}
