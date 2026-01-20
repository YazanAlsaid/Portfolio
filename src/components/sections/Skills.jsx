import SkillCard from "../ui/SkillCard";
import YoloIcon from "../ui/icons/YoloIcon";
import { useLanguage } from "../../context/LanguageContext";

/* Programming */
import { FaJava, FaPython, FaJs, FaReact } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";

/* Tools */
import { FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa";
import { SiSpringboot, SiPostman } from "react-icons/si";

/* AI */
import { SiPytorch, SiTensorflow, SiOnnx } from "react-icons/si";

/* Embedded */
import { SiArduino, SiRaspberrypi } from "react-icons/si";
import { MdMemory } from "react-icons/md";

function Skills() {
  const { t } = useLanguage();
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">{t.skills.title}</h2>
        <SkillCard
          title="Programming Languages"
          skills={[
            { icon: FaJava, label: "Java", color: "#f89820" },
            { icon: FaPython, label: "Python", color: "#3776ab" },
            { icon: FaJs, label: "JavaScript", color: "#f7df1e" },
            { icon: FaReact, label: "React", color: "#61dafb" },
            { icon: SiC, label: "C", color: "#a8b9cc" },
            { icon: SiCplusplus, label: "C++", color: "#00599c" },
          ]}
        />

        <SkillCard
          title="Frameworks & Tools"
          skills={[
            { icon: SiSpringboot, label: "Spring Boot", color: "#6db33f" },
            { icon: FaGitAlt, label: "Git", color: "#f05032" },
            { icon: FaGithub, label: "GitHub", color: "#181717" },
            { icon: FaGitlab, label: "GitLab", color: "#fc6d26" },
            { icon: SiPostman, label: "Postman", color: "#ff6c37" },
          ]}
        />

        <SkillCard
  title="AI & Deep Learning"
  skills={[
    { icon: SiPytorch, label: "PyTorch", color: "#ee4c2c" },
    { icon: SiTensorflow, label: "TensorFlow", color: "#ff6f00" },
    {
      icon: YoloIcon,
      label: "Ultralytics YOLO",
      color: "#facc15",
    },
    { icon: SiOnnx, label: "ONNX", color: "#005CED" },
  ]}
/>


        <SkillCard
          title="Embedded & Hardware"
          skills={[
            { icon: SiArduino, label: "Arduino", color: "#00979d" },
            { icon: SiRaspberrypi, label: "Raspberry Pi", color: "#a22846" },
            { icon: MdMemory, label: "Hailo-8l / Coral", color: "#64748b" },
          ]}
        />

      </div>
    </section>
  );
}

export default Skills;
