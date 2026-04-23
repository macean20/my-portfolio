import { useState } from 'react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { skills, tools } from '@data/skills'
import { experiences, education, profileBio } from '@data/experience'
import SectionHeader from '@components/ui/SectionHeader'
import SkillBar from '@components/ui/SkillBar'
import TimelineItem from '@components/ui/TimelineItem'
import Tag from '@components/ui/Tag'

const TABS = [
  { id: 'profil', label: 'Profil' },
  { id: 'experience', label: 'Expériences' },
  { id: 'education', label: 'Formation' },
]

export default function About() {
  const [activeTab, setActiveTab] = useState('profil')
  useScrollAnimation()

  return (
    <section id="about" aria-label="À propos de moi">
      <div className="section">
        <SectionHeader tag="À propos" title="Mon profil complet" highlightWord="complet" />

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
                {profileBio.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="tab-panel active" id="tab-experience">
                <div className="timeline">
                  {experiences.map(exp => (
                    <TimelineItem key={exp.id} {...exp} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="tab-panel active" id="tab-education">
                <div className="timeline">
                  {education.map(edu => (
                    <TimelineItem key={edu.id} {...edu} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="skills-grid stagger">
              {skills.map(skill => (
                <SkillBar key={skill.name} icon={skill.icon} name={skill.name} level={skill.level} />
              ))}
            </div>
            <div className="tools-list stagger" style={{ marginTop: '1.5rem' }}>
              {tools.map(tool => (
                <Tag key={tool.label} label={tool.label} variant={tool.variant} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
