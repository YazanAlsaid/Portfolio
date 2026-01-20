/* Programming */
import { FaJava, FaPython, FaJs, FaReact } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";

/* Tools */
import { FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa";
import { SiSpringboot, SiPostman } from "react-icons/si";

/* AI / CV */
import { SiPytorch, SiTensorflow, SiOnnx } from "react-icons/si";

/* Embedded */
import { SiArduino, SiRaspberrypi } from "react-icons/si";
import { MdMemory } from "react-icons/md";

/* Custom / Model names (text or generic icon) */
import { FaMicrochip } from "react-icons/fa";

export const techIcons = {
  // Languages
  python: FaPython,
  java: FaJava,
  js: FaJs,
  react: FaReact,
  c: SiC,
  cpp: SiCplusplus,

  // Tools
  git: FaGitAlt,
  github: FaGithub,
  gitlab: FaGitlab,
  spring: SiSpringboot,
  postman: SiPostman,

  // AI / CV
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  onnx: SiOnnx,

  // Embedded / Hardware
  arduino: SiArduino,
  raspberrypi: SiRaspberrypi,
  memory: MdMemory,

  // Models / Accelerators
  yolo: FaMicrochip,
  midas: FaMicrochip,
  hailo: FaMicrochip,
};
