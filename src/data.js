// All the portfolio content lives here.
// Edit this file to change wording, add a project, or swap a photo.

export const SECTIONS = [
  { id: 'top',      label: 'Start' },
  { id: 'featured', label: 'AI LiveGuard' },
  { id: 'award',    label: 'The award' },
  { id: 'projects', label: 'His projects' },
  { id: 'tools',    label: 'What he builds with' },
  { id: 'certs',    label: 'Certificates' },
  { id: 'about',    label: 'About' },
];

export const TOOLS = [
  {
    name: 'LEGO SPIKE Prime',
    meta: 'His main build platform',
    text: 'Push-up robot, robotic arm, hopper racer, line follower. He knows the pieces, the gears and the motors well enough to invent his own designs instead of following a manual.',
  },
  {
    name: 'mBot2',
    meta: 'Driving, sensors, live control',
    text: 'He programs it to drive, turn, stop and read its sensors — and he paired it with a game controller so he could drive the spider robot live.',
  },
  {
    name: 'Scratch & PictoBlox',
    meta: 'Where his games get made',
    text: 'Shooting games, a fruit catcher, a sea game played with your hands in the air, and face detection with the camera. All built from scratch with variables, loops and if / else.',
  },
  {
    name: 'LEGO Mindstorms',
    meta: 'Competition platform',
    now: true,
    text: 'The kit he is on now, training for competition — harder challenges with accuracy, speed and reliability all being scored.',
  },
  {
    name: 'micro:bit · Makey Makey · Maker Coder',
    meta: 'Lots of small builds',
    text: 'Many micro:bit projects, everyday objects turned into piano keys and game controllers, and a working robot built on Maker Coder.',
  },
  {
    name: 'Electronics, soldering & FPV drones',
    meta: 'Hands and wires',
    text: 'Real circuits built by hand, his own soldered joints, and FPV drones — simulator practice first, then flying the real thing.',
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
    src: 'img/spike-hopper.jpg', cat: 'Robots', title: 'Hopper race robot',
    note: 'SPIKE Prime — built small and fast on purpose',
  },
  {
    src: 'img/mbot2-spider.jpg', cat: 'Robots', title: 'Spider robot + controller',
    note: 'mBot2 — he drives it live with a game controller',
  },
  {
    src: 'img/app-1.jpg', cat: 'Code', title: 'AI LiveGuard app',
    note: 'His own app idea, built in Adalo. Tap to open the real app.',
    link: 'https://nmaas-team-1.adalo.com/ai',
  },
  {
    src: 'img/game-shooting.jpg', cat: 'Code', title: 'Bird shooting game',
    note: 'Scratch — score, speed and missed shots tracked with variables',
  },
  {
    src: 'img/game-balloons.jpg', cat: 'Code', title: 'Balloon game',
    note: 'Scratch — he wrote a real "Game Over" rule after 10 misses',
  },
  {
    src: 'img/ai-face.jpg', cat: 'Code', title: 'AI face detection',
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
    src: 'img/award-stage.jpg', title: 'Lifting the cup on stage',
    note: 'Robot Football Olympics 2025 · Dead Sea, Jordan',
  },
  {
    src: 'img/award-ceremony.jpg', title: 'Tawfiq and Zaid with the trophy',
    note: 'Creative Solution Award · 5–6 December 2025',
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
