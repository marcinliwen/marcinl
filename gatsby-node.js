/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const techSkills = [
      { name: "HTML5"},
      { name: "CSS3"},
      { name: "JavaScript"},
      { name: "jQuery"},
      { name: "PHP"},
      { name: "SMARTY"},
      { name: "SQL"},
      { name: "React"},
      { name: "Gatsby,js"},
      { name: "Prestashop"},
      { name: "Wordpress"},
      { name: "Git"}
    ]
    techSkills.forEach(skill => {
      const node = {
        name: skill.name,
        id: createNodeId(`Skill-${skill.name}`),
        internal: {
          type: "SkillTech",
          contentDigest: createContentDigest(skill),
        },
      }
      actions.createNode(node)
    });

    const projects = [
      {
        name: 'Butik.pl',
        link: 'https://butik.pl',
        skills: ['PSD to HTML/CSS/JS','SQL/PHP/smarty', 'RWD', 'maintenance and new features']
      },
      {
        name: 'Paklo.pl',
        link: 'https://paklo.pl',
        skills: ['PSD to HTML/CSS/JS','SQL/PHP/smarty', 'RWD', 'maintenance and new features']
      },
      {
        name: 'B2B.Rodan24.pl',
        link: 'https://b2b.rodan24.pl',
        skills: ['PSD to HTML/CSS/JS','SQL/PHP/smarty','RWD', 'maintenance and new features']
      },
      {
        name: 'Salon.pl',
        link: 'https://salon.pl',
        skills: ['PSD to HTML/CSS/JS','SQL/PHP/smarty','RWD', 'maintenance and new features']
      },
      {
        name: 'Shoperly.pl',
        link: 'https://shoperly.pl',
        skills: ['PSD to HTML/CSS/JS','SQL/PHP/smarty', 'RWD','page performance speed', 'maintenance and new features']
      },
      {
        name: 'Sohoshop.pl',
        link: 'https://sohoshop.pl',
        skills: ['conding style based on PSD (Wordpress)', 'RWD', 'maintenance and new features']
      },
      {
        name: 'Sas24.pl',
        link: 'https://sas24.pl',
        skills: ['RWD', 'maintenance and new features', 'SEO']
      },
      {
        name: 'Biuronimo.pl',
        link: 'https://biuronimo.pl',
        skills: ['RWD', 'maintenance and new features', 'SEO']
      },
      {
        name: 'B2B.Biurozplusem.pl',
        link: 'https://b2b.biurozplusem.pl',
        skills: ['RWD', 'maintenance and new features', 'SEO']
      },
    ]
    projects.forEach(project => {
      const node = {
        name: project.name,
        link: project.link,
        skills: project.skills,
        id: createNodeId(`Project-${project.name}`),
        internal: {
          type: "Projects",
          contentDigest: createContentDigest(project),
        },
      }
      actions.createNode(node)
    });

    
  }