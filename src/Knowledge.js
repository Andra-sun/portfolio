import React from "react";
import "./Knowledge.css";
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
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            HTML
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                            Css
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                            javascrip
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                            react
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                            django
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                            python
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                            java
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                            typescript
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" />
                            markdown
                        </div>
                    </div>
                </li>
                <li>
                    <h2>{t('projetos.ferramenta')}</h2>
                    <div class="list">
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                            VSCode
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                            Github
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                            Git
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" />
                            Arduino
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                            Figma
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" />
                            Godot
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                            linux
                        </div>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" />
                            eclipse
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Knowledge;
