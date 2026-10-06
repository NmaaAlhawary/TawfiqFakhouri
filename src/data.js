// All the report content lives here. Edit this file to change wording,
// add a project, or change a skill level.

export const SECTIONS = [
  {id:'top',      label:'Start'},
  {id:'video',    label:'His invention'},
  {id:'level',    label:'Where he is'},
  {id:'kits',     label:'Robot kits'},
  {id:'projects', label:'Projects'},
  {id:'record',   label:'Competition'},
  {id:'plan',     label:'The plan'},
];

export const LEVELS = [
  {name:'Designing & building robots', pct:95, tag:'Advanced'},
  {name:'Coming up with ideas',        pct:95, tag:'Advanced'},
  {name:'Understanding how robots work',pct:85, tag:'Advanced'},
  {name:'Using sensors',               pct:85, tag:'Advanced'},
  {name:'Electronics & soldering',     pct:80, tag:'Advanced for age'},
  {name:'Drones & FPV flying',         pct:80, tag:'Advanced for age'},
  {name:'AI & creative projects',      pct:80, tag:'Advanced for age'},
  {name:'Writing code on his own',     pct:58, tag:'Growing', grow:true},
  {name:'Finding & fixing his own bugs',pct:40, tag:'Growing', grow:true},
];

export const KITS = [
  {name:'LEGO SPIKE Prime', meta:'Building: strong / Coding: needs some help',
   text:'He can build almost anything on SPIKE Prime by himself — he knows the pieces, the gears and the motors, and he invents his own designs. With the code he knows what he wants the robot to do, and gets there with a little guidance.'},
  {name:'mBot2', meta:'Building: strong / Coding: good',
   text:'This is where his coding shows best. He programs the robot to drive, turn, stop, read its sensors and finish a given task — and he connected it to a game controller and drove it live.'},
  {name:'LEGO Mindstorms', meta:'Starting now · competition platform', now:true,
   text:'This is the kit we train on for the competition. It builds on everything he already knows from SPIKE Prime, with harder demands: accuracy, speed and reliability.'},
  {name:'Maker Coder', meta:'Built a working robot',
   text:'He built and ran a robot on this platform too — more experience with another way of wiring motors and sensors together.'},
  {name:'micro:bit · Makey Makey · electronics', meta:'Many small projects',
   text:'He has made a lot of projects on micro:bit, turned everyday objects into piano keys and game controllers with Makey Makey, and built real circuits by hand.'},
];

export const PROJECTS = [
  {src:'img/vid-pushup-robot.jpg', video:'videos/pushup-robot.mp4', cat:'Robots',
   title:'Push-up robot', note:'SPIKE Prime — his build, his code, running'},
  {src:'img/vid-line-follower.jpg', video:'videos/line-follower.mp4', cat:'Robots',
   title:'Line-following robot', note:'SPIKE Prime — it reads the black line with a colour sensor'},
  {src:'img/spike-pushup.jpg', cat:'Robots', title:'Push-up robot (built)',
   note:'SPIKE Prime — two motors, programmed by him'},
  {src:'img/spike-arm.jpg', cat:'Robots', title:'Robotic arm',
   note:'SPIKE Prime — a gripper that opens and closes'},
  {src:'img/spike-hopper.jpg', cat:'Robots', title:'Hopper race robot',
   note:'SPIKE Prime — built small and fast on purpose'},
  {src:'img/mbot2-spider.jpg', cat:'Robots', title:'Spider robot + controller',
   note:'mBot2 — he drives it live with a game controller'},
  {src:'img/game-shooting.jpg', cat:'Code', title:'Bird shooting game',
   note:'Scratch — score, speed and missed shots tracked with variables'},
  {src:'img/game-balloons.jpg', cat:'Code', title:'Balloon game',
   note:'Scratch — he added a real "Game Over" rule after 10 misses'},
  {src:'img/ai-face.jpg', cat:'Code', title:'AI face detection',
   note:'PictoBlox — the camera finds a face and the box follows it'},
  {src:'img/app-1.jpg', cat:'Code', title:'AI LiveGuard app',
   note:'His own app idea — built in Adalo. Tap to open the real app.',
   link:'https://nmaas-team-1.adalo.com/ai'},
  {src:'img/vid-soldering.jpg', video:'videos/soldering.mp4', cat:'Hands-on',
   title:'Soldering', note:'Iron in hand, mask on — he makes the joint himself'},
  {src:'img/drone-fpv.jpg', cat:'Hands-on', title:'FPV drone',
   note:'Simulator practice, then real flying — and he knows the parts'},
  {src:'img/buzzer-wire.jpg', cat:'Hands-on', title:'Buzzer wire game',
   note:'He bent the wire and built the circuit himself'},
  {src:'img/rubiks.jpg', cat:'Hands-on', title:"Rubik's cube",
   note:'Two layers solved — a real method, not guessing'},
];

export const AWARD_PHOTOS = [
  {src:'img/award-stage.jpg', title:'Lifting the cup on stage',
   note:'Robot Football Olympics 2025 · Dead Sea'},
  {src:'img/award-ceremony.jpg', title:'Tawfiq and Zaid with the trophy',
   note:'Creative Solution Award · 5–6 December 2025'},
];

export const CERTS = [
  {src:'img/cert-rfo.jpg', title:'Robot Football Olympics 2025',
   note:'Dead Sea, Jordan · 5–6 December 2025'},
  {src:'img/cert-ai.jpg', title:'The Hour of A.I.', note:'Code.org'},
  {src:'img/cert-oceans.jpg', title:'AI for Oceans', note:'Code.org · Hour of Code'},
  {src:'img/cert-mixmove.jpg', title:'Mix & Move with AI', note:'Code.org · Hour of AI'},
];

export const PATH = [
  ['Design','Read a competition challenge and decide what the robot must look like.'],
  ['Strategy','Plan the route and the points before touching a single brick.'],
  ['Coding','Write the program himself, from start to finish.'],
  ['Testing','Run it again and again and watch what actually happens.'],
  ['Debugging','Find the mistake on his own, without being told where it is.'],
  ['Optimization','Make it faster, straighter and more reliable every run.'],
  ['Competition practice','Do all of it under time pressure, like on the day.'],
];

export const OUTCOMES = [
  ['Break down a competition challenge ','on his own','.'],
  ['Design a robot that fits that specific challenge.','',''],
  ['Choose the right sensors and use them well.','',''],
  ['Turn his ideas into ','working code without help','.'],
  ['Find and fix his own bugs calmly.','',''],
  ['Improve speed, accuracy and consistency.','',''],
  ['','Explain and defend his design',' to judges.'],
];
