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
    })
  }