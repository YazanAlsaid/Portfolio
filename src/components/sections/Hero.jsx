import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import DocumentsModal from "../ui/DocumentsModal";


function Hero() {
  const { t } = useLanguage();
  const blocks = t.hero.cli;

  const [currentBlock, setCurrentBlock] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [finished, setFinished] = useState(false);

  const [showDocs, setShowDocs] = useState(false);

  const current = blocks[currentBlock];
  const command = current?.command || "";

  /* =========================
     TYPING EFFECT
     ========================= */
  useEffect(() => {
    if (finished) return;
    if (current?.type === "actions") return;

    if (typedCommand.length < command.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(command.slice(0, typedCommand.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShowOutput(true);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand, command, finished, current]);

  /* =========================
     NEXT BLOCK
     ========================= */
  useEffect(() => {
    if (finished) return;
    if (!showOutput) return;

    const isLastBlock = currentBlock === blocks.length - 1;

    const timeout = setTimeout(() => {
      if (isLastBlock) {
        setFinished(true);
      } else {
        setShowOutput(false);
        setTypedCommand("");
        setCurrentBlock((prev) => prev + 1);
      }
    }, 1200);

    return () => clearTimeout(timeout);
  }, [showOutput, finished, currentBlock, blocks.length]);

  return (
    <>
      <section className="hero-cli" id="home">
        <div className="hero-content">

          {/* LEFT: PROFILE CARD */}
          <div className="hero-card">
            <img
              src="/creativefabrica-ai-image-editor-3-bot-2.png"
              alt="Yazan Alsaid"
              className="profile-image"
            />


            <div className="profile-actions">
              <a
                href="https://github.com/YazanAlsaid"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-btn github"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/yazan-alsaid/"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-btn linkedin"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT: TERMINAL */}
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="terminal-body">
              {blocks.slice(0, currentBlock).map((block, index) => (
                <div key={index}>
                  {block.command && (
                    <div>
                      <span className="prompt">$</span> {block.command}
                    </div>
                  )}

                  {block.output &&
                    block.output.map((line, i) => (
                      <div key={i} className="output">
                        {line}
                      </div>
                    ))}

                  <br />
                </div>
              ))}

              {!finished && current?.command && (
                <div>
                  <span className="prompt">$</span>{" "}
                  <span>{typedCommand}</span>
                  <span className="cursor">█</span>
                </div>
              )}

              {showOutput &&
                current?.output?.map((line, i) => (
                  <div key={i} className="output">
                    {line}
                  </div>
                ))}

              {current?.type === "actions" && (
                <div className="output actions">
                  <button
                    className="cli-action cli-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDocs(true);
                    }}
                  >
                    &gt; {current.actions[0].label}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      <DocumentsModal open={showDocs} onClose={() => setShowDocs(false)} />
    </>
  );
}

export default Hero;