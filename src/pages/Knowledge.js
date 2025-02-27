import React from "react";
import "../static/css/Knowledge.css";
import { useTranslation } from "react-i18next";


function Knowledge() {
    const { t } = useTranslation("projects");

    return (
        <div className="knowledge">
            <ul>
                <li>
                    <h2>{t('projetos.lingefr')}</h2>
                    <div className="list">
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt=" HTML" />
                            HTML
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
                            CSS
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" />
                            javascrip
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                            react
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="django" />
                            django
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="py" />
                            python
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="java" />
                            java
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="ts" />
                            typescript
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" alt="md" />
                            markdown
                        </div>
                    </div>
                </li>
                <li>
                    <h2>{t('projetos.ferramenta')}</h2>
                    <div class="list">
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="vscode" />
                            VSCode
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github" />
                            Github
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="git" />
                            Git
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" alt="arduino"/>
                            Arduino
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="figma"/>
                            Figma
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" alt="godot"/>
                            Godot
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="linux"/>
                            linux
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" alt="eclipse"/>
                            eclipse
                        </div>
			<div>
				<img src="https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png" alt="cisco"  />
				Cisco PT
			</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Knowledge;
