// All the portfolio content lives here.
// Edit this file to change wording, add a project, or swap a photo.

export const SECTIONS = [
  { id: 'top',      label: 'Start' },
  { id: 'featured', label: 'AI LiveGuard' },
  { id: 'award',    label: 'Awards' },
  { id: 'projects', label: 'His projects' },
  { id: 'certs',    label: 'Certificates' },
];

export const PROJECTS = [
  {
    src: 'img/vid-soldering.jpg', video: 'videos/soldering.mp4', cat: 'Hands-on',
    title: 'Soldering',
    note: 'Hot iron, steady hands. Every joint on the board is his own',
  },
  {
    src: 'img/vid-line-follower.jpg', video: 'videos/line-follower.mp4', cat: 'Robots',
    title: 'Line-following robot',
    note: 'SPIKE Prime. It reads the black line with a colour sensor and corrects itself',
  },
  {
    src: 'img/vid-pushup-robot.jpg', video: 'videos/pushup-robot.mp4', cat: 'Robots',
    title: 'Push-up robot',
    note: 'SPIKE Prime. His build, his code, running',
  },
  {
    src: 'img/vid-build-b.jpg', video: 'videos/build-b.mp4', cat: 'Robots',
    title: 'Gear-driven display robot',
    note: 'SPIKE Prime. Motors, gears and a light-matrix readout, running his code',
  },
  {
    src: 'img/vid-build-a.jpg', video: 'videos/build-a.mp4', cat: 'Robots',
    title: 'Sensor rover',
    note: 'SPIKE Prime. An ultrasonic sensor on a drive base he designed',
  },
  {
    src: 'img/spike-arm.jpg', fit: 'contain', cat: 'Robots', title: 'Robotic arm',
    note: 'SPIKE Prime. A gripper that opens and closes',
  },
  {
    src: 'img/spike-hopper.jpg', pos: 'center 72%', cat: 'Robots', title: 'Hopper race robot',
    note: 'SPIKE Prime. Built small and fast on purpose',
  },
  {
    src: 'img/rfo-robot.jpg', cat: 'Robots', title: 'Competition robot',
    note: 'mBot2 with an ultrasonic sensor and a servo gripper, built for the tournament',
  },
  {
    src: 'img/app-1.jpg', fit: 'contain', cat: 'Code', title: 'AI LiveGuard app',
    note: 'His own app idea, built in Adalo. Tap to open the real app.',
    link: 'https://nmaas-team-1.adalo.com/ai',
  },
  {
    src: 'img/game-shooting.jpg', fit: 'contain', cat: 'Code', title: 'Bird shooting game',
    note: 'Scratch. Score, speed and missed shots tracked with variables',
  },
  {
    src: 'img/game-balloons.jpg', fit: 'contain', cat: 'Code', title: 'Balloon game',
    note: 'Scratch. He wrote a real "Game Over" rule after 10 misses',
  },
  {
    src: 'img/ai-face.jpg', fit: 'contain', cat: 'Code', title: 'AI face detection',
    note: 'PictoBlox. The camera finds a face and the box follows it',
  },
  {
    src: 'img/drone-fpv.jpg', cat: 'Hands-on', title: 'FPV drone',
    note: 'Simulator practice, then real flying. He knows the parts',
  },
  {
    src: 'img/buzzer-wire.jpg', cat: 'Hands-on', title: 'Buzzer wire game',
    note: 'He bent the wire and built the circuit himself',
  },
  {
    src: 'img/rubiks.jpg', cat: 'Hands-on', title: "Rubik's cube",
    note: 'Two layers solved with a real method, not guessing',
  },
];

export const AWARDS = [
  {
    kicker: '\ud83c\udfc6 Robot Football Olympics 2025 \u00b7 Arab world level',
    title: 'Creative Solution Award',
    text: 'An Arab-world championship, with teams from eleven countries. Tawfiq and his teammate '
        + 'Zaid took the award for the <b>most creative solution</b>, judged on the strength of the '
        + 'idea itself.',
    meta: ['AI LiveGuard', 'Arab world level', 'Dead Sea, Jordan'],
    photo: 'img/team.jpg',
    alt: 'Tawfiq and Zaid with their coach Nmaa Al Hawary and the robot they built',
  },
  {
    kicker: '\ud83c\udfc6 Robofest Jordan 2026',
    title: 'Showmanship Award',
    text: 'Tawfiq won the <b>Showmanship Award at Robofest Jordan 2026</b>, run by Lawrence '
        + 'Technological University. It goes to the team that presents and demonstrates its robot best.',
    meta: ['Robofest Jordan', '2026', 'Showmanship Award'],
    photo: 'img/robofest.jpg',
    alt: 'Tawfiq holding his Robofest trophy at the award ceremony',
  },
];

export const AWARD_PHOTOS = [
  {
    src: 'img/team.jpg', title: 'The team',
    note: 'Tawfiq and Zaid with their coach Nmaa Al Hawary, and the robot they built',
  },
  {
    src: 'img/rfo-robot.jpg', title: 'Their competition robot',
    note: 'mBot2 with an ultrasonic sensor and a servo gripper, built for the tournament',
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
