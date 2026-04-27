import { useState } from 'react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { useLanguage } from '@contexts/LanguageContext'
import { techStack } from '@data/skills'
import { experiences, education } from '@data/experience'
import SectionHeader from '@components/ui/SectionHeader'
import TimelineItem from '@components/ui/TimelineItem'

export default function About() {
  const [activeTab, setActiveTab] = useState('profil')
  const { t } = useLanguage()
  useScrollAnimation()

  const TABS = [
    { id: 'profil', label: t.about.tabs.profil },
    { id: 'experience', label: t.about.tabs.experience },
    { id: 'education', label: t.about.tabs.education },
  ]

  const expItems = experiences.map(exp => ({
    ...exp,
    ...t.experience.items[exp.id],
  }))

  const eduItems = education.map(edu => ({
    ...edu,
    ...t.education.items[edu.id],
  }))

  return (
    <section id="about" aria-label="À propos de moi">
      <div className="section">
        <SectionHeader tag={t.about.tag} title={t.about.title} highlightWord={t.about.highlightWord} />

        <div className="about-grid">
          <div className="about-text">
            <div className="about-tabs">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  className={`about-tab${activeTab === tab.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'profil' && (
              <div className="tab-panel active" id="tab-profil">
                {t.about.profileBio.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="tab-panel active" id="tab-experience">
                <div className="timeline">
                  {expItems.map(exp => (
                    <TimelineItem key={exp.id} {...exp} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="tab-panel active" id="tab-education">
                <div className="timeline">
                  {eduItems.map(edu => (
                    <TimelineItem key={edu.id} {...edu} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="about-tech-col">
            <div className="tech-section-label">{t.about.techLabel}</div>
            <div className="tech-grid stagger">
              {techStack.map(tech => (
                <div className="tech-item" key={tech.name}>
                  <div className="tech-icon-wrap">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`tech-icon${tech.invert ? ' tech-icon-invert' : ''}`}
                      onError={e => { e.currentTarget.style.opacity = '0' }}
                    />
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
