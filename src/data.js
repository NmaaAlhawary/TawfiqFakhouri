// All the portfolio content lives here.
// Edit this file to change wording, add a project, or swap a photo.

export const SECTIONS = [
  { id: 'top',      label: 'Start' },
  { id: 'featured', label: 'AI LiveGuard' },
  { id: 'award',    label: 'Awards' },
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
    star: true,
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
    src: 'img/vid-build-b.jpg', video: 'videos/build-b.mp4', cat: 'Robots',
    title: 'Gear-driven display robot',
    note: 'SPIKE Prime \u2014 motors, gears and a light-matrix readout, running his code',
  },
  {
    src: 'img/vid-build-a.jpg', video: 'videos/build-a.mp4', cat: 'Robots',
    title: 'Sensor rover',
    note: 'SPIKE Prime \u2014 ultrasonic sensor mounted on a drive base he designed',
  },
  {
    src: 'img/robofest.jpg', cat: 'Robots',
    title: 'Jump energy measurer',
    note: 'SPIKE Prime \u2014 measures a jump and calculates the potential energy live (406 J)',
  },
  {
    src: 'img/spike-arm.jpg', fit: 'contain', cat: 'Robots', title: 'Robotic arm',
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
    src: 'img/app-1.jpg', fit: 'contain', cat: 'Code', title: 'AI LiveGuard app',
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

export const AWARDS = [
  {
    kicker: '\ud83e\udd47 Robofest 2026',
    title: 'First place',
    text: 'Tawfiq took <b>first place at Robofest 2026</b> \u2014 his second competition win, and the '
        + 'first one on the podium. He designed, built and programmed the robot himself.',
    meta: ['Robofest', '2026', '1st place'],
    photo: 'img/robofest.jpg',
    alt: 'Tawfiq holding the Robofest first-place trophy on stage',
  },
  {
    kicker: '\ud83c\udfc6 Robot Football Olympics 2025',
    title: 'Creative Solution Award',
    text: 'Teams came from eleven countries. Tawfiq and his teammate Zaid took the award for the '
        + '<b>most creative solution</b> \u2014 judged on the strength of the idea itself.',
    meta: ['AI LiveGuard', '5\u20136 December 2025', 'Hilton, Dead Sea'],
    photo: 'img/team.jpg',
    alt: 'Tawfiq and Zaid with their coach Nmaa Al Hawary and the robot they built',
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
