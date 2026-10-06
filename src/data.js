// All the portfolio content lives here.
// Edit this file to change wording, add a project, or swap a photo.

export const SECTIONS = [
  { id: 'top',      label: 'Start' },
  { id: 'featured', label: 'AI LiveGuard' },
  { id: 'award',    label: 'The award' },
  { id: 'projects', label: 'His projects' },
  { id: 'certs',    label: 'Certificates' },
  { id: 'tools',    label: 'What he knows' },
];

export const TOOLS = [
  {
    name: 'Block coding',
    icon: 'blocks',
    meta: 'Scratch · PictoBlox · SPIKE · mBot2 · micro:bit',
    items: ['Variables', 'Loops', 'If / else', 'Events', 'Broadcasts', 'Own game logic'],
  },
  {
    name: 'Robot design & building',
    icon: 'brick',
    meta: 'His strongest area',
    items: ['Gears & motors', 'Drivetrains', 'Grippers', 'Chassis design', 'Builds without instructions'],
  },
  {
    name: 'Sensors',
    icon: 'sensor',
    meta: 'Reading the world',
    items: ['Colour / line', 'Ultrasonic', 'Touch', 'Gyro', 'Camera input'],
  },
  {
    name: 'Electronics & soldering',
    icon: 'chip',
    meta: 'Hands and wires',
    items: ['Real circuits', 'Soldering', 'Makey Makey', 'Buzzer & switch builds'],
  },
  {
    name: 'AI projects',
    icon: 'ai',
    meta: 'Applied, not just demoed',
    items: ['Face detection', 'Body tracking', 'Hand-controlled games', 'Code.org AI courses'],
  },
  {
    name: 'Drones & FPV',
    icon: 'drone',
    meta: 'Simulator first, then real flight',
    items: ['Drone parts', 'Throttle, yaw, pitch, roll', 'Flight safety', 'Real FPV flying'],
  },
  {
    name: 'App design',
    icon: 'app',
    meta: 'Adalo · no-code',
    items: ['Screen layout', 'Navigation', 'Simple data', 'Built AI LiveGuard'],
  },
  {
    name: 'Problem solving',
    icon: 'idea',
    meta: 'Where every project starts',
    items: ['Spots a real problem', 'Invents the solution', 'Defends the design', 'Award-winning idea'],
  },
];

export const PROJECTS = [
  {
    src: 'img/vid-line-follower.jpg', video: 'videos/line-follower.mp4', cat: 'Robots',
    title: 'Line-following robot',
    note: 'SPIKE Prime — it reads the black line with a colour sensor and corrects itself',
  },
  {
    src: 'img/vid-pushup-robot.jpg', video: 'videos/pushup-robot.mp4', cat: 'Robots',
    title: 'Push-up robot',
    note: 'SPIKE Prime — his build, his code, running',
  },
  {
    src: 'img/spike-arm.jpg', cat: 'Robots', title: 'Robotic arm',
    note: 'SPIKE Prime — a gripper that opens and closes',
  },
  {
    src: 'img/spike-hopper.jpg', pos: 'center 72%', cat: 'Robots', title: 'Hopper race robot',
    note: 'SPIKE Prime — built small and fast on purpose',
  },
  {
    src: 'img/rfo-robot.jpg', cat: 'Robots', title: 'Competition robot',
    note: 'mBot2 with an ultrasonic sensor and a servo gripper — built for the tournament',
  },
  {
    src: 'img/app-1.jpg', cat: 'Code', title: 'AI LiveGuard app',
    note: 'His own app idea, built in Adalo. Tap to open the real app.',
    link: 'https://nmaas-team-1.adalo.com/ai',
  },
  {
    src: 'img/game-shooting.jpg', fit: 'contain', cat: 'Code', title: 'Bird shooting game',
    note: 'Scratch — score, speed and missed shots tracked with variables',
  },
  {
    src: 'img/game-balloons.jpg', fit: 'contain', cat: 'Code', title: 'Balloon game',
    note: 'Scratch — he wrote a real "Game Over" rule after 10 misses',
  },
  {
    src: 'img/ai-face.jpg', fit: 'contain', cat: 'Code', title: 'AI face detection',
    note: 'PictoBlox — the camera finds a face and the box follows it',
  },
  {
    src: 'img/vid-soldering.jpg', video: 'videos/soldering.mp4', cat: 'Hands-on',
    title: 'Soldering',
    note: 'Iron in hand, mask on — he makes the joint himself',
  },
  {
    src: 'img/drone-fpv.jpg', cat: 'Hands-on', title: 'FPV drone',
    note: 'Simulator practice, then real flying — and he knows the parts',
  },
  {
    src: 'img/buzzer-wire.jpg', cat: 'Hands-on', title: 'Buzzer wire game',
    note: 'He bent the wire and built the circuit himself',
  },
  {
    src: 'img/rubiks.jpg', cat: 'Hands-on', title: "Rubik's cube",
    note: 'Two layers solved — a real method, not guessing',
  },
];

export const AWARD_PHOTOS = [
  {
    src: 'img/team.jpg', title: 'The team',
    note: 'Tawfiq and Zaid with their coach Nmaa Al Hawary, and the robot they built',
  },
  {
    src: 'img/rfo-robot.jpg', title: 'Their competition robot',
    note: 'mBot2 with an ultrasonic sensor and a servo gripper — built for the tournament',
  },
];

export const CERTS = [
  {
    src: 'img/cert-rfo.jpg', title: 'Robot Football Olympics 2025',
    note: 'Robotna · Dead Sea, Jordan · 5–6 December 2025',
  },
  { src: 'img/cert-ai.jpg', title: 'The Hour of A.I.', note: 'Code.org' },
  { src: 'img/cert-oceans.jpg', title: 'AI for Oceans', note: 'Code.org · Hour of Code' },
  { src: 'img/cert-mixmove.jpg', title: 'Mix & Move with AI', note: 'Code.org · Hour of AI' },
];
